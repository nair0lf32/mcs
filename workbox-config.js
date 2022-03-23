module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{html,css,png,ico,db,js,mjs,jpg,webp,pdf,xml,json,md}'
	],
	swDest: '_site/service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};