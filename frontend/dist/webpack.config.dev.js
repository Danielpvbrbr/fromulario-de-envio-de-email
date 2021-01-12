"use strict";

var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

var path = require('path');

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader"
      }]
    }, {
      test: /\.html$/,
      use: [{
        loader: "html-loader"
      }]
    }]
  },
  plugins: [HTMLWebpackPluginConfig]
};