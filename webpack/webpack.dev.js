'use strict'

const merge = require('webpack-merge');
const common = require('./webpack.common');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server'
  ],
  output: {
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  optimization: {
    usedExports: true
  },
  plugins: [
    new DashboardPlugin()
  ],
  // webpack-dev-server
  devServer: {
    stats: {
      children: false,
      maxModules: 0
    },
    compress: true,
    port: 3000
  }
});
