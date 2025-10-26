## 🛠 Installation & Set Up

1. Make sure you have Node.js ≥18.0.0 installed. You can use [NVM](https://github.com/nvm-sh/nvm) to manage Node versions:

   ```sh
   nvm install 18
   nvm use 18
   ```

2. Install dependencies (using legacy peer deps for compatibility)

   ```sh
   npm install --legacy-peer-deps
   ```

3. Install Gatsby CLI globally

   ```sh
   npm install -g gatsby-cli
   ```

4. Start the development server

   ```sh
   npm run develop
   ```

Note: If you encounter any cache-related issues, you can try cleaning the cache:

```sh
# Clean Gatsby cache and reinstall dependencies
rm -rf node_modules .cache public package-lock.json
npm install --legacy-peer-deps
npm run develop
```

## � Troubleshooting

If you encounter any issues:

1. Make sure you're using Node.js version 18 or higher
2. Clear all caches and node_modules:
   ```sh
   rm -rf node_modules .cache public package-lock.json
   npm cache clean --force
   ```
3. Reinstall dependencies with legacy peer deps flag:
   ```sh
   npm install --legacy-peer-deps
   ```
4. If you still have issues, try running with verbose logging:
   ```sh
   GATSBY_LOGGER=verbose npm run develop
   ```

## �🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

1. Preview the site as it will appear once deployed

   ```sh
   npm run serve
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
