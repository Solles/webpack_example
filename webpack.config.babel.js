import path from 'path';

export default {
	entry: {
		default: './js/default.js',
		other: './js/other.js'
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'web/assets/js'),
	},
}
