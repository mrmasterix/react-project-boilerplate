const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../config.json');

module.exports = {

  entry: {
    bundle: ['babel-polyfill', path.resolve(__dirname, '../src/bundle.js')]
  },

  output: {
    filename: 'src/[name].js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react', 'stage-3'],
              plugins: [
                'transform-runtime',
                'transform-decorators-legacy',
              ],
              sourceMaps: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          {
            loader: 'file-loader?limit=100000&name=./img/[name].[ext]',
          },
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),

    new ExtractTextPlugin({
      filename: './css/main.css',
      disable: false,
      allChunks: true,
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: './index.html',
    }),

    new webpack.DefinePlugin({
      envConfig: JSON.stringify(config.production),
      commonConfig: JSON.stringify(config.common),
    }),
  ],
};
