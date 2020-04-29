const process = require('process');
const path = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const { DefinePlugin } = require('webpack');

const apiKey = process.env.AIRTABLE_API_KEY || require('./.airtable/apiKey');

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
