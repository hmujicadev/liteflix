const path = require('path');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../../src', 'app.jsx'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../../build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new SimpleProgressWebpackPlugin(),
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../public', 'index.html'),
    }),
  ],
  devServer: {
    stats: {
      warnings: false,
    },
    open: true,
  },
};
