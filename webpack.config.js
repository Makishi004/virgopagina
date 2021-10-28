const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:  './src/buttons.js',
	output: {
		path: __dirname,
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		})
	],
};