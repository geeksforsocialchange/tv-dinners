const path = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');

module.exports = {
  // webpack folder's entry js - excluded from jekyll's build process.
  entry: './js/src/entry.js',
  output: {
    // we're going to put the generated file in the assets folder so jekyll will grab it.
    filename: 'tv-dinners.bundle.js',
    path: path.resolve(__dirname, 'js/dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'development',
  resolve: {
    plugins: [
      PnpWebpackPlugin,
    ],
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
};
