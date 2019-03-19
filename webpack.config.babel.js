import path from 'path';
import entry from './entryPoints.json';

export default {
	entry,
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
