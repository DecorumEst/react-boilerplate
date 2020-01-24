/* eslint-disable quote-props */
'use strict'

const { join } = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    join(__dirname, '..', 'src/index')
  ],

  output: {
    path: join(__dirname, '..', 'dist'),
    filename: '[name]-[chunkhash].js'
  },

  resolve: {
    alias: {
      src: join(__dirname, '..', 'src'),
      components: join(__dirname, '..', 'src/components')
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new HtmlPlugin({
      title: 'React App',
      template: join(__dirname, '..', 'src/index.html')
    }),

    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id].css'
    })
  ],

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(png|jpe?g|ico|ttf|svg|gif|eot|otf|webp|woff|woff2|txt)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[hash].[ext]'
            }
          },
          {
            loader: 'raw-loader',
            options: {
              esModule: true
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|gif|aac|oga)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader?modules']
      }
    ]
  }
};
