const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CommonConfig = require('./webpack.common.js');
const publicPath = "./";

module.exports = Merge(CommonConfig, {
	output:{
		path: path.join(__dirname, './views/product'),
		filename: '[name].[chunkhash].js',
		publicPath: publicPath,
		sourceMapFilename: '[name].map'
	},
	plugins:[
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.DefinePlugin({
				'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new UglifyJsPlugin({
			beautify: false,
			 mangle: {
		        screw_ie8: true,
		        keep_fnames: true
			},
			compress: {
				screw_ie8: true
			},
			comments: false
		})
	]
})