'use strict';

const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractSASS = new ExtractTextPlugin('styles/bundle.css');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (options) => {
  const dest = Path.join(__dirname, 'dist');
  const entryKeys = {
    "vendor": ['./src/scripts/vendor.js'],
    "preapp": ['./src/scripts/components/pre/preComponents.js'],
    "postapp": ['./src/scripts/components/post/postComponents.js']
  };
  let webpackConfig = {
    devtool: options.devtool,
    entry: entryKeys,
    output: {
      filename: '[name].js',
      path: dest
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development')
        }
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        excludeChunks: ['vendor', 'preapp']
      })
    ],
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }]
    }
  };

  if (options.isProduction) {
    // webpackConfig.entry = ['./src/scripts/vendor'];

    webpackConfig.plugins.push(
      new CopyWebpackPlugin([
        { from: './src/assets/**/*', to: 'assets', flatten: true }
      ]),
      new Webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      ExtractSASS
    );

    webpackConfig.module.rules.push({
      test: /\.scss$/i,
      use: ExtractSASS.extract(['css-loader', 'sass-loader'])
    });

  } else {
    webpackConfig.plugins.push(
      new CopyWebpackPlugin([
        { from: './src/assets/**/*', to: 'assets', flatten: true }
      ]),
      new Webpack.HotModuleReplacementPlugin()
    );

    webpackConfig.module.rules.push({
      test: /\.scss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
        test: /\.js$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      });

    webpackConfig.devServer = {
      contentBase: dest,
      hot: true,
      port: options.port,
      inline: true
    };
  }

  return webpackConfig;

};
