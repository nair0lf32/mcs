module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{html,css,png,ico,db,js,jpg,webp,pdf,xml,json,md}'
	],
	swDest: 'service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};