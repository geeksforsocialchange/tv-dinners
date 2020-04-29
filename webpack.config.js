/* eslint-disable no-console */
const process = require('process');
const fs = require('fs');
const path = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const { DefinePlugin } = require('webpack');

const apiKey = (() => {
  let key = process.env.AIRTABLE_API_KEY;
  if (key) {
    console.log('Found API Key from environment variable');
    return key;
  }

  try {
    key = fs.readFileSync('./.airtable/apiKey', 'utf-8');
    if (key) {
      console.log('Found API Key from local file');
      return key;
    }
    else throw 'No Airtable API Key found';
  }
  catch (e) {
    throw e;
  }
})();

module.exports = {
  entry: './js/src/entry.js',
  mode: 'development',
  output: {
    filename: 'tvdinners.js',
    path: path.resolve(__dirname, 'js/dist'),
    sourceMapFilename: 'tvdinners.js.map',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    plugins: [
      PnpWebpackPlugin,
    ],
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      'AIRTABLE_URL': JSON.stringify('https://api.airtable.com/v0/appGxF9km8lrfbaf0'),
      'AIRTABLE_API_KEY': JSON.stringify(apiKey),
    }),
  ],
  target: 'web',
  watchOptions: {
    ignored: /dist/,
    aggregateTimeout: 1000,
  },
};
