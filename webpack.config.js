const path = require('path');
const webpack = require('webpack');

module.exports = function(env){
	return require(`./webpack.${env}.js`)
}