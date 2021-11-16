/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","61eb4b8f747b4c347217b6c71fade6c5"],["Gemfile.lock","835c2da4f94c1b71a593672e72514949"],["README.md","c08cc44a993cb44494bf9139144cc6a2"],["_config.yml","9ddbc89b28a1377ed28a3d7bae87b7d6"],["_data/authors.yml","37405fdb9a71d5fd1906030f8c710928"],["_data/navigation.yml","c02b0a9ca1815de36b1e5d91ccb68626"],["_includes/author_bio.html","7e8e87676caedd96254673b205a3e1d1"],["_includes/navigation.html","557e841eeee29c4c107a1835bfd9a43f"],["_includes/search.html","ca43ebc4f56a49d7475bff7bd15e58cd"],["_layouts/default.html","d2cac6d9524d3457fa11bf92719880af"],["_posts/2021-09-09-Exemple.markdown","49bc9cf7c1b204c449b3b4c01aeb6545"],["_posts/Généralités/2021-10-04-Observation médicale.markdown","60c4160cd6ac06c712b9472428e97c8c"],["_posts/Généralités/2021-10-09-Généralités.markdown","aec63593182e804c3fd9ad3dad60cb9e"],["_posts/Rhumatologie/2021-09-27-examen-rhumatologique.markdown","f991ae5fb6dc21a99aea61e309724a9e"],["_posts/Rhumatologie/2021-09-27-rhumatologie.markdown","b87f806798378537f5fdbb1da652cfdf"],["_posts/Rhumatologie/2021-11-16-arthrose.markdown","2c136a41a92c85a49aa469fb877f88ef"],["_posts/Rhumatologie/2021-11-16-goutte.markdown","5a8ecb7346d3c91f59a5f93ead82fbc2"],["_posts/Rhumatologie/2021-11-16-polyarthrite-rhumatoide.markdown","7f54f506115ef5cb97e25e43fd6f50ee"],["_site/404.html","1fa31a5e76356b30f642218969df987a"],["_site/README.md","c08cc44a993cb44494bf9139144cc6a2"],["_site/about/index.html","6bbb0648577abfd0f0a7d42e95c867ab"],["_site/arthrose/index.html","e6ef8888d76e47eed7e849034cae13ac"],["_site/assets/css/style.css","df311d091f2ed26d0d3a5877ded1998f"],["_site/assets/images/MCS.png","7fe2d3be6485b79761b3234d09890366"],["_site/assets/images/Thumbs.db","41741116498f5e618b4819456549cec5"],["_site/assets/images/android-chrome-192x192.png","e50e8b52da2aa749b2010dcb4fd313e3"],["_site/assets/images/android-chrome-512x512.png","613ced4fdd53152951328d933336b170"],["_site/assets/images/apple-touch-icon.png","e48bb2523e38f1bca02e689702a62bf7"],["_site/assets/images/favicon-16x16.png","bd654f229bf3c5365a945ffb0d67a9c8"],["_site/assets/images/favicon-32x32.png","c9234f764a305550234295064d899e82"],["_site/assets/images/favicon.ico","f94e1ee9efe0e457c699d1d5e6c99b0d"],["_site/assets/images/github_icon.png","4fea192f6d32a895ab650462d7715862"],["_site/assets/images/icon-search.png","91a91f740b9a1179b286654446aaebe2"],["_site/assets/images/mail_icon.png","d4e91d1803a4371abb044f3211fcdd6f"],["_site/assets/images/mcs-404.png","1521bbf3b79aad705a23330c77875d31"],["_site/assets/images/twitter_icon.png","fa696cfc52610ef6df08a0c2895ecc18"],["_site/assets/images/whatsapp_icon.png","18f2412a109c6af7a3f2e7d9a3a8961e"],["_site/assets/js/main.js","35dbddec7d6094b3c5e18b48e0bf7913"],["_site/assets/posts-assets/Étoile_de_Maigne.webp","86230f4bcc55c76f33dea5c3c33e607c"],["_site/cheatsheets/index.html","e7222b4503ed7ed75a8d304a7c8e008a"],["_site/examen-rhumatologique/index.html","d26cbc1f5a4e9eb9f51d3021c645b216"],["_site/exemple/index.html","fe679b4de3ea30dfb56259a4b113c1d3"],["_site/feed.xml","fc7c5fbd382c81e0b3d8f7d50a7d3dfd"],["_site/goutte/index.html","f45923b12db48253aaecc13a51709e85"],["_site/généralités/index.html","4bf3498860254853320cde54ac72be9b"],["_site/index.html","47cf8d4d48b726e9c2b578a9c2be25e9"],["_site/manifest.json","65b2e9103b5d8e9422e809806fd08737"],["_site/observation/index.html","b9da148154212a94e6abb711d8098b47"],["_site/polyarthriterhumatoide/index.html","7aac1fb4271d18b758a6e4da59bd2b0c"],["_site/rhumatologie/index.html","d9a9207dd13a73bc2d311fd83b08a98d"],["_site/service-worker.js","bcc8dfe13011dc3dda45d7ae1ea6a6df"],["about.markdown","d1c68b1100d723bb9b6c1ddd25a12887"],["assets/css/style.scss","29fe8bfc7c7f7315eb3a27b22d99915e"],["assets/images/MCS.png","7fe2d3be6485b79761b3234d09890366"],["assets/images/Thumbs.db","41741116498f5e618b4819456549cec5"],["assets/images/android-chrome-192x192.png","e50e8b52da2aa749b2010dcb4fd313e3"],["assets/images/android-chrome-512x512.png","613ced4fdd53152951328d933336b170"],["assets/images/apple-touch-icon.png","e48bb2523e38f1bca02e689702a62bf7"],["assets/images/favicon-16x16.png","bd654f229bf3c5365a945ffb0d67a9c8"],["assets/images/favicon-32x32.png","c9234f764a305550234295064d899e82"],["assets/images/favicon.ico","f94e1ee9efe0e457c699d1d5e6c99b0d"],["assets/images/github_icon.png","4fea192f6d32a895ab650462d7715862"],["assets/images/icon-search.png","91a91f740b9a1179b286654446aaebe2"],["assets/images/mail_icon.png","d4e91d1803a4371abb044f3211fcdd6f"],["assets/images/mcs-404.png","1521bbf3b79aad705a23330c77875d31"],["assets/images/twitter_icon.png","fa696cfc52610ef6df08a0c2895ecc18"],["assets/images/whatsapp_icon.png","18f2412a109c6af7a3f2e7d9a3a8961e"],["assets/js/main.js","35dbddec7d6094b3c5e18b48e0bf7913"],["assets/posts-assets/Étoile_de_Maigne.webp","86230f4bcc55c76f33dea5c3c33e607c"],["cheatsheets.markdown","9ee306d22283ed9b4dbe0a72b9022c17"],["index.markdown","339c231df2e23aa0d06a9df97795d7ac"],["manifest.json","65b2e9103b5d8e9422e809806fd08737"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







