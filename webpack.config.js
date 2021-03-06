var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './assets/js/app.js',
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},

	plugins: []
};

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	);
}
