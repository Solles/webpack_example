import path from 'path';

const config = {
	entry: {
		default: './js/default.js',
		other: './js/other.js'
	},
	devtool: 'cheap-module-eval-source-map',
	mode: 'development',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'src/assets/js'),
	},
	watch: true,
	watchOptions: {
		ignored: /node_modules/
	},
};

export default config;
