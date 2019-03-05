import path from 'path';

export default {
	entry: {
		classComponent: './js/classComponent.js',
		default: './js/default.js',
		functionComponent: './js/functionComponent.js',
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
