import config from './webpack.config.babel';

export default {
	...config,
	devtool: 'cheap-module-eval-source-map',
	mode: 'development',
	watch: true,
}
