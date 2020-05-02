/* eslint-disable no-console */
const path = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
  entry: './packages/client/entry.js',
  mode: 'development',
  output: {
    filename: 'tvdinners.js',
    path: path.resolve(__dirname, 'dist'),
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
  plugins: [
    new DefinePlugin({
      API_LOCATION: JSON.stringify('http://127.0.0.1:3000'),
    }),
  ],
  devtool: 'source-map',
  target: 'web',
  watchOptions: {
    ignored: /dist/,
    aggregateTimeout: 1000,
  },
};
