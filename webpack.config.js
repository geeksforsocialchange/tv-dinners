const path = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
// const { SourceMapDevToolPlugin } = require('webpack');

module.exports = {
  entry: './js/src/entry.js',
  mode: 'development',
  output: {
    filename: 'tvdinners.js',
    path: path.resolve(__dirname, 'js/dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          },
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
  //     include: /js\/src/,
  //     exclude: /node_modules/,
  //     filename: 'tvdinners.js.map',
  //     module: true,
  //     columns: true,
  //   })
  // ],
  target: 'web',
  watchOptions: {
    ignored: /dist/,
    aggregateTimeout: 1000,
  }
};
