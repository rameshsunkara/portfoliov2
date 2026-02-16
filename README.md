## 🛠 Installation & Set Up

1. Make sure you have Node.js `24.x` installed. You can use [NVM](https://github.com/nvm-sh/nvm) to manage Node versions:

   ```sh
   nvm install 24
   nvm use 24
   ```

2. Enable Corepack and activate the project Yarn version (`1.22.22`)

   ```sh
   corepack enable
   corepack prepare yarn@1.22.22 --activate
   ```

3. Install dependencies

   ```sh
   yarn install
   ```

4. Start the development server

   ```sh
   yarn gatsby develop
   ```

## � Troubleshooting

If you encounter any issues:

1. Make sure you're using Node.js version 24.x
2. Try cleaning and rebuilding:
   ```sh
   yarn gatsby clean
   yarn gatsby develop
   ```
3. If that doesn't work, try a full clean install:
   ```sh
   rm -rf node_modules .cache public yarn.lock
   yarn install
   yarn gatsby develop
   ```
4. For debugging, you can run with verbose logging:
   ```sh
   GATSBY_LOGGER=verbose GATSBY_TELEMETRY_DISABLED=1 yarn gatsby develop
   ```

## �🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   # First clean any previous builds
   yarn gatsby clean

   # Then run the production build
   GATSBY_LOGGER=verbose NODE_ENV=production yarn gatsby build
   ```

2. Preview the site as it will appear once deployed

   ```sh
   yarn gatsby serve
   ```

Note: If the build fails, try these steps:

1. Clear all caches and dependencies:
   ```sh
   rm -rf node_modules .cache public yarn.lock
   yarn install
   ```
2. Then rebuild:
   ```sh
   yarn gatsby clean
   NODE_ENV=production yarn gatsby build
   ```

## 🎨 Color Reference

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Navy           | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) `#0a192f` |
| Light Navy     | ![#112240](https://via.placeholder.com/10/0a192f?text=+) `#112240` |
| Lightest Navy  | ![#233554](https://via.placeholder.com/10/303C55?text=+) `#233554` |
| Slate          | ![#8892b0](https://via.placeholder.com/10/8892b0?text=+) `#8892b0` |
| Light Slate    | ![#a8b2d1](https://via.placeholder.com/10/a8b2d1?text=+) `#a8b2d1` |
| Lightest Slate | ![#ccd6f6](https://via.placeholder.com/10/ccd6f6?text=+) `#ccd6f6` |
| White          | ![#e6f1ff](https://via.placeholder.com/10/e6f1ff?text=+) `#e6f1ff` |
| Green          | ![#64ffda](https://via.placeholder.com/10/64ffda?text=+) `#64ffda` |
