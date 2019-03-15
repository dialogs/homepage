/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 */

const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
	mode: 'development',
	entry: [
	  path.join(__dirname, 'src/js/index.js'),
	  path.join(__dirname, 'src/css/index.css')
	],
  output: {
    path: path.join(__dirname, 'src/assets'),
    filename: 'index.js',
  },
  plugins: [new MiniCSSExtractPlugin({ filename: 'styles.css' })],
  module: {
  	rules: [
  	  {
  	    test: /\.css$/,
  	    use: [
          // devMode ? 'style-loader' : MiniCSSExtractPlugin.loader,
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-preset-env'),
                require('postcss-nested'),
                require('postcss-custom-media')
              ],
            },
          }
  	    ]
  	  },
  	  {
			  test: /\.(ttf|eot|woff|woff2)$/,
			  use: {
			    loader: "file-loader",
			    options: {
			      name: "fonts/[name].[ext]",
			    }
			  }
			}
  	]
  }
}