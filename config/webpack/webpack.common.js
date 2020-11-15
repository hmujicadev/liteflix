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

      {
        test: /\.(png|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000, // if less than 10 kb, add base64 encoded image to css
              name: 'assets/images/[hash].[ext]', // if more than 10 kb move to this folder in build using file-loader
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000, // if less than 10 kb, add base64 encoded image to css
              name: 'assets/fonts/[hash].[ext]', // if more than 10 kb move to this folder in build using file-loader
            },
          },
        ],
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
