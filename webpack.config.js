const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = {
	mode: 'development',
	entry: './themes/diary/assets/stylesheets/application.sass',
  output: {
		path: __dirname + '/static/stylesheets/',
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'application.css'
		}),
		new FixStyleOnlyEntriesPlugin(),
	],
};
