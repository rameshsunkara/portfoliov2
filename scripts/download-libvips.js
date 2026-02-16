/* eslint-disable */
const https = require('https');
const fs = require('fs');
const path = require('path');

// This script runs as a preinstall step to fetch a libvips tarball
// and place it under node_modules/sharp/install so sharp's installer
// can use the prebuilt binaries on Netlify (or other CI) when available.

const LIBVIPS_VERSION = process.env.LIBVIPS_VERSION || '8.12.2';

function getTarget() {
  const p = process.platform;
  const a = process.arch;
  if (p === 'linux' && a === 'x64') return 'linux-x64';
  if (p === 'linux' && a === 'arm64') return 'linux-arm64';
  if (p === 'darwin' && a === 'arm64') return 'darwin-arm64';
  if (p === 'darwin' && a === 'x64') return 'darwin-x64';
  return null;
}

async function download(url, dest, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 5) {
      return reject(new Error(`Too many redirects for ${url}`));
    }

    const file = fs.createWriteStream(dest);
    https
      .get(url, res => {
        // Handle redirects (301, 302, 303, 307, 308)
        if ([301, 302, 303, 307, 308].includes(res.statusCode)) {
          file.destroy();
          fs.unlinkSync(dest, { force: true });
          const redirectUrl = res.headers.location;
          if (!redirectUrl) {
            return reject(new Error(`Redirect without location header - Status ${res.statusCode}`));
          }
          return download(redirectUrl, dest, redirects + 1)
            .then(resolve)
            .catch(reject);
        }

        if (res.statusCode !== 200) {
          file.destroy();
          fs.unlinkSync(dest, { force: true });
          return reject(new Error(`Failed to download ${url} - Status ${res.statusCode}`));
        }
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
      })
      .on('error', err => {
        fs.unlinkSync(dest, { force: true });
        reject(err);
      });
  });
}

async function main() {
  const target = getTarget();
  if (!target) {
    console.log('download-libvips: unsupported platform/arch, skipping');
    return;
  }

  // Only run this automatically on CI/Netlify to avoid interfering with local setups
  const isNetlify = process.env.NETLIFY === 'true' || process.env.CI === 'true';
  if (!isNetlify) {
    console.log('download-libvips: not running on CI/Netlify, skipping');
    return;
  }

  const filename = `libvips-${LIBVIPS_VERSION}-${target}.tar.br`;
  const url = `https://github.com/lovell/sharp-libvips/releases/download/v${LIBVIPS_VERSION}/${filename}`;

  const installDir = path.join(process.cwd(), 'node_modules', 'sharp', 'install');
  const dest = path.join(installDir, filename);

  try {
    fs.mkdirSync(installDir, { recursive: true });
    if (fs.existsSync(dest)) {
      console.log(`download-libvips: already present ${dest}`);
      return;
    }

    console.log(`download-libvips: downloading ${url} -> ${dest}`);
    await download(url, dest);
    console.log('download-libvips: download complete');
  } catch (err) {
    console.warn('download-libvips: failed to download libvips:', err.message);
    // Do not fail the install step here; sharp will attempt other install paths
  }
}

main();
