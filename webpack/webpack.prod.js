'use strict'

const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',

  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      sourceMap: true,
      test: /\.js(\?.*)?$/i,
      include: /\/src/,
      exclude: /\/node_modules/
    })]
  }
});
