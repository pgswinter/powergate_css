const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const publicPath = "./";
const glob = require("glob");

module.exports={
	entry:{
		'style': "./src/js/style.js"
	},
	plugins:[
		new ExtractTextPlugin({
			filename: "[name].[contenthash].min.css",
			publicPath: publicPath
		}),
	    new HtmlWebpackPlugin({
	    	template: 'src/pug/index.pug'
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
			_: "lodash"
		})
	],
	output:{
		path: path.join(__dirname, '/views'),
		filename: '[name].[contenthash].js',
		publicPath: publicPath
	},
	resolve:{
		extensions: ['.js','.json'],
		modules:[path.join(__dirname, 'src'),'node_modules'],
		alias:{
			jquery: "jquery/src/jquery"
		}
	},
	module: {
		rules:[
			{
			    test: /\.pug$/,
			    loader: ['raw-loader', 'pug-html-loader']
			},
			{
				test:/\.js$/,
				use: ['babel-loader'],
				enforce: "pre"
			},
			{
            	test: /\.sass$/,
	            use: ExtractTextPlugin.extract({
	                use: [{
	                    loader: "css-loader",
	                    options: {
	                    	minimize: true || {}
	                    }
	                }, {
	                    loader: "sass-loader"
	                }],
	                // use style-loader in development
	                fallback: "style-loader"
	            })
	        },
			{
				test: /\.(jpg|png|gif)$/,
				use: 'file-loader'
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000
					}
				}
			}
		]
	}
}