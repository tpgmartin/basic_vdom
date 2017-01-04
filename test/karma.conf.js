var webpack = require('webpack');
var localBrowsers = ['PhantomJS'];
var travisLaunchers = {
	chrome_travis: {
		base: 'Chrome',
		flags: ['--no-sandbox']
	}
};

module.exports = function(config) {
	config.set({
		browsers: localBrowsers,

		frameworks: ['source-map-support', 'mocha', 'chai-sinon'],

		reporters: ['mocha'].concat('coverage'),

		coverageReporter: {
			dir: __dirname+'/../coverage',
			reporters: [
				{ type: 'text-summary' },
				{ type: 'html' },
				{ type: 'lcovonly', subdir: '.', file: 'lcov.info' }
			]
		},

		mochaReporter: {
			showDiff: true
		},

		browserLogOptions: { terminal: true },
		browserConsoleLogOptions: { terminal: true },

		browserNoActivityTimeout: 5 * 60 * 1000,

		// Use only two browsers concurrently, works better with open source Sauce Labs remote testing
		concurrency: 2,

		customLaunchers: travisLaunchers,

		files: [
			{ pattern: 'browser/**.spec.js', watched: false }
		],

		preprocessors: {
			'**/*': ['webpack', 'sourcemap']
		},

		webpack: {
			devtool: 'inline-source-map',
			module: {
				preLoaders: [
					{
						test: /\.jsx?$/,
						exclude: /node_modules/,
						loader: 'babel'
					}
				],
				loaders: [].concat({
					test: /\.jsx?$/,
					loader: 'isparta',
					include: /src/
				})
			},
			plugins: [
				new webpack.DefinePlugin({
					coverage: true,
					NODE_ENV: JSON.stringify(process.env.NODE_ENV || ''),
					ENABLE_PERFORMANCE: false,
					DISABLE_FLAKEY: true
				})
			]
		},

		webpackMiddleware: {
			noInfo: true
		}
	});
};
