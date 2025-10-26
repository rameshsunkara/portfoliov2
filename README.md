## 🛠 Installation & Set Up

1. Make sure you have Node.js ≥22.0.0 installed. You can use [NVM](https://github.com/nvm-sh/nvm) to manage Node versions:

   ```sh
   nvm install 22
   nvm use 22
   ```

2. Install yarn if you haven't already

   ```sh
   npm install -g yarn
   ```

3. Install dependencies

   ```sh
   yarn install
   ```

4. Start the development server

   ```sh
   yarn gatsby develop
   ```

Note: If you encounter any cache-related issues:

```sh
# Clean Gatsby cache and reinstall dependencies
rm -rf node_modules .cache public package-lock.json yarn.lock
yarn install
yarn gatsby clean && yarn gatsby develop
```

## � Troubleshooting

If you encounter any issues:

1. Make sure you're using Node.js version 22 or higher
2. Clear all caches and dependencies:
   ```sh
   rm -rf node_modules .cache public package-lock.json yarn.lock
   yarn cache clean
   ```
3. Reinstall dependencies:
   ```sh
   yarn install
   ```
4. Try cleaning and rebuilding:
   ```sh
   yarn gatsby clean
   yarn gatsby develop
   ```
5. If you still have issues, try running with verbose logging:
   ```sh
   GATSBY_LOGGER=verbose GATSBY_TELEMETRY_DISABLED=1 yarn gatsby develop
   ```
6. For permission-related issues:
   ```sh
   sudo rm -rf .cache public
   mkdir -p .cache public
   sudo chmod -R 777 .cache public
   yarn gatsby develop
   ```

Note: The `.cache` directory is critical for Gatsby's operation. Always ensure it exists
before running gatsby develop, and make sure you have write permissions for it.

## �🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   yarn build
   ```

2. Preview the site as it will appear once deployed

   ```sh
   yarn serve
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
