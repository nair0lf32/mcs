module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{html,css,scss,png,ico,db,js,jpg,webp,pdf,xml,json,markdown,md}'
	],
	swDest: './service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
};
