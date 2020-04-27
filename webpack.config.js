const path = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
// const { SourceMapDevToolPlugin } = require('webpack');

module.exports = {
  entry: './js/src/entry.js',
  mode: 'development',
  output: {
    filename: 'tvdinners.js',
    path: path.resolve(__dirname, 'js/dist'),
    sourceMapFilename: 'tvdinners.js.map'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
        },
      }
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
      PnpWebpackPlugin.moduleLoader(module)
    ],
  },
  devtool: 'source-map',
  // plugins: [
  //   new SourceMapDevToolPlugin({
  //     test: /\.(js|jsx)?$/,
  //     exclude: /node_modules/,
  //     filename: 'tvdinners.js.map',
  //   })
  // ],
  target: 'web',
  watchOptions: {
    ignored: /dist/,
    aggregateTimeout: 1000,
  }
};
