const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
entry: './src/gif-interface.js',
output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
},
devtool: 'bundle.js',
devServer: {
  contentBase: './dist'
},
plugins: [
  new Dotenv(),
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
    title: 'Gif Finder',
    template: './src/index.html',
    inject: 'body'
  })
],
module: {
  rules: [
    {
      test: /\.js$/,
      exclude:[
        /node_modules/,
        /spec/
      ],
      loader: "eslint-loader"
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "babel-loader",
        options: {
          presets: ['es2015']
        }
      }
  ]
}
};
