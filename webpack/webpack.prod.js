'use strict'

const { join } = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    app: join(__dirname, '..', 'src/index'),
    vendor: ['react', 'react-dom']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin()
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
      minSize: 30000,
      minChunks: 2,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCssAssetsPlugin()
    ]
  }
});
