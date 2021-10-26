const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:  './src/main.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js',
	},
	target: 'node',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		})
	],
};