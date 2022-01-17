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

var precacheConfig = [["404.html","61eb4b8f747b4c347217b6c71fade6c5"],["Gemfile.lock","835c2da4f94c1b71a593672e72514949"],["README.md","c08cc44a993cb44494bf9139144cc6a2"],["_config.yml","9ddbc89b28a1377ed28a3d7bae87b7d6"],["_data/authors.yml","37405fdb9a71d5fd1906030f8c710928"],["_data/navigation.yml","cab0c82a31302b89836f30d650a4a30f"],["_includes/author_bio.html","7e8e87676caedd96254673b205a3e1d1"],["_includes/navigation.html","5c756c1493f1f7f032a14e5f9a20f0d3"],["_includes/search.html","ca43ebc4f56a49d7475bff7bd15e58cd"],["_layouts/default.html","d2cac6d9524d3457fa11bf92719880af"],["_posts/2021-09-09-Exemple.markdown","b1115e1e00fdf012f9af705299ecea0a"],["_posts/Cardiologie/2021-11-26-Cardiologie.markdown","3c1979e96456b33552b83d0b8ed2753b"],["_posts/Chirurgie Pédiatrique/2021-11-26-chirurgie-pediatrique.markdown","ecdb8e3fe84fb249c00ac2e7fecd477c"],["_posts/Chirurgie Viscérale/2021-11-26-chirurgie-viscérale.markdown","dbc2b4aadc78d52a567415d008a130ca"],["_posts/Dermatologie/2021-11-26-Dermatologie.markdown","f0f4dfe193ba5c4df0bac9b6bfd0b515"],["_posts/Endocrinologie/2021-11-26-Endocrinologie.markdown","cb91715dd198bb331c92a9cb2f2c159a"],["_posts/Gynécologie/2021-11-26-Gynécologie.markdown","157936e68b5a12c559937fc9647f3aff"],["_posts/Généralités/2021-10-04-Observation médicale.markdown","e90294a79ae2a6953109ff41d877794d"],["_posts/Généralités/2021-10-09-Généralités.markdown","aec63593182e804c3fd9ad3dad60cb9e"],["_posts/Généralités/2022-01-01-anemie.markdown","650dd8fbbf5db121630490021896f330"],["_posts/Hepato Gastro Enterologie/2021-11-26-hepato-gastro-enterologie.markdown","3fe18a328508b27e986dd591f1c60e53"],["_posts/Hématologie/2021-11-26-Hématologie.markdown","94c6757b391972bc9163e437bf692565"],["_posts/Infectiologie/2021-11-26-Infectiologie.markdown","1d3a816144bcdaea6d6d2d9db707fb97"],["_posts/M.P.R/2021-11-26-MPR.markdown","6c3b629c8da5934921901ac964362450"],["_posts/Neurologie/2021-11-26-Neurologie.markdown","47c0ea27c0292f4c4e92c79f203eee9a"],["_posts/Néphrologie/2021-11-26-Néphrologie.markdown","01ffbea5de15e457b632ffa5813128e8"],["_posts/O.R.L/2021-11-26-ORL.markdown","22a71e63170fe05edd012d9ff0a5ce9f"],["_posts/Ophtalmologie/2021-11-26-Ophtalmologie.markdown","f4270340357b8656b60a0307cc5a6ba7"],["_posts/Pneumologie/2021-11-26-Pneumologie.markdown","878aef5ed51cc2af203e8f1b3d084cc8"],["_posts/Psychiatrie/2021-11-26-Psychiatrie.markdown","3ea606cf4c10eacc173177cb8677e2d0"],["_posts/Pédiatrie/2021-11-26-Pédiatrie.markdown","67fd0d0715bb0651fbfcb91e56714e45"],["_posts/Rhumatologie/2021-09-27-examen-rhumatologique.markdown","f4c0ab3c9edc0d8bfe98f4723760c936"],["_posts/Rhumatologie/2021-09-27-rhumatologie.markdown","b87f806798378537f5fdbb1da652cfdf"],["_posts/Rhumatologie/2021-11-16-arthrose.markdown","335b020fdf487ed00511581f00eb8d64"],["_posts/Rhumatologie/2021-11-16-goutte.markdown","e8cea1c5bb3cd5672a259060f91bf9a8"],["_posts/Rhumatologie/2021-11-16-polyarthrite-rhumatoide.markdown","8ac30d96e311d6ba0bb4e849b283d223"],["_posts/Rhumatologie/2021-11-26-arthrite-infectieuse.markdown","e2c0744e323a106b2e4bcd71a9efb3a0"],["_posts/Rhumatologie/2021-11-26-gonarthrose.markdown","55d59b687559107921e23f3b3f2fcb02"],["_posts/Rhumatologie/2021-11-26-lombosciatiques-communes.markdown","0dca327f9d377e5b5ee54a7b6bffc31b"],["_posts/Rhumatologie/2021-11-26-ostéoporose-commune.markdown","aa03a2b661452c816a8396613368d463"],["_posts/Rhumatologie/2021-11-26-spondylarthrites.markdown","dd83ddcd58138e98d8a27db042de0b2f"],["_posts/Rhumatologie/2021-11-26-spondylodiscites.markdown","c0a57ce76d752aa399f91d86ea6a1879"],["_posts/Traumatologie/2021-11-26-Traumatologie.markdown","b46c8415fa71703b077f5fd24897627d"],["_posts/Urgences et Réanimation/2021-11-26-Urgences-Réanimation.markdown","fb8542cb4227e62548f11233acd47506"],["_posts/Urologie/2021-11-26-Urologie.markdown","2807d54aae8d150c497955b6c858fcaf"],["_site/404.html","8eef053372a308256894a6bae8bc7c6a"],["_site/README.md","c08cc44a993cb44494bf9139144cc6a2"],["_site/about/index.html","bcf009267d45323c7d01e6d2f60142e3"],["_site/anemie/index.html","3960f446b664390b8b1a1cb9457f514a"],["_site/arthrite/index.html","4bbab03d2fc8fae9243390c233da5c66"],["_site/arthrose/index.html","4132b1a493c8d6e097ba441d44ea4cdf"],["_site/assets/css/style.css","12eff67090769a4825c20544144ed859"],["_site/assets/images/MCS.png","7fe2d3be6485b79761b3234d09890366"],["_site/assets/images/Thumbs.db","f63f5fd5a6c961e55c9a14c5bc71e0f8"],["_site/assets/images/android-chrome-192x192.png","e50e8b52da2aa749b2010dcb4fd313e3"],["_site/assets/images/android-chrome-512x512.png","613ced4fdd53152951328d933336b170"],["_site/assets/images/apple-touch-icon.png","e48bb2523e38f1bca02e689702a62bf7"],["_site/assets/images/favicon-16x16.png","bd654f229bf3c5365a945ffb0d67a9c8"],["_site/assets/images/favicon-32x32.png","c9234f764a305550234295064d899e82"],["_site/assets/images/favicon.ico","f94e1ee9efe0e457c699d1d5e6c99b0d"],["_site/assets/images/github_icon.png","4fea192f6d32a895ab650462d7715862"],["_site/assets/images/icon-search.png","91a91f740b9a1179b286654446aaebe2"],["_site/assets/images/mail_icon.png","d4e91d1803a4371abb044f3211fcdd6f"],["_site/assets/images/mcs-404.png","1521bbf3b79aad705a23330c77875d31"],["_site/assets/images/twitter_icon.png","fa696cfc52610ef6df08a0c2895ecc18"],["_site/assets/images/whatsapp_icon.png","18f2412a109c6af7a3f2e7d9a3a8961e"],["_site/assets/js/main.js","35dbddec7d6094b3c5e18b48e0bf7913"],["_site/assets/posts-assets/Observation-psychiatrie.pdf","e2d3c96becd239388c2b1a244c1d1a87"],["_site/assets/posts-assets/Thumbs.db","25edddd861cb4b99c5cb347ea379d34f"],["_site/assets/posts-assets/anemie.jpg","ebfe99701a8e5559b411ff6c66b90c97"],["_site/assets/posts-assets/etoile-maigne.webp","86230f4bcc55c76f33dea5c3c33e607c"],["_site/assets/posts-assets/hemogramme.jpg","d222e7f4775f37d100817d97a16a5203"],["_site/cardiologie/index.html","70e904b8307cc39a18d4b3d0d1f007c4"],["_site/cheatsheets/index.html","b3e583e43bb0d62a743b211917d01b51"],["_site/chirurgiepediatrique/index.html","f352561107e967935953ac83ab4d34b0"],["_site/chirurgieviscerale/index.html","fb7e37b23ee24bd9a0799e93ba0fc4a2"],["_site/dermatologie/index.html","2b0f41933c06f0cf407be8a09a161804"],["_site/endocrinologie/index.html","b1aacaaf9c999c1baf29c75a6fafa275"],["_site/examen-rhumatologique/index.html","2fd93e7d84871e7df79904fdadbdcd38"],["_site/exemple/index.html","044929822e0e23590908cfb28cb08d7c"],["_site/feed.xml","844edaf6312d96f2cdc17239caa061cb"],["_site/gonarthrose/index.html","fcfc6e3acc4fe24f283b9ecca57601ff"],["_site/goutte/index.html","cd0ccb83f5e72370a1a90eb05ea98e5a"],["_site/gynecologie/index.html","dd1b9d5635610ec4057c480d4cc6471a"],["_site/généralités/index.html","5416f09415704d81aa022962ee46dcde"],["_site/hematologie/index.html","d8c2f3857af406d8caba1f2709ea40ae"],["_site/hepatogastroenterologie/index.html","a80d335e5797ab0a02ce0129f30df7a2"],["_site/index.html","28abc74d79d46a8f37b78d1e5b3c9a26"],["_site/infectiologie/index.html","3bc1869119a90563a665d665ea066567"],["_site/lombosciatique/index.html","228014b6615c2b6ac88b44533e6be5d8"],["_site/manifest.json","65b2e9103b5d8e9422e809806fd08737"],["_site/mpr/index.html","b28d85a5ee7d65ef9df108ecac4f691f"],["_site/nephrologie/index.html","475e4afda123188e58b86f906bdb75b7"],["_site/neurologie/index.html","a6b7b56a2fb6712b8f6bed6d522a109e"],["_site/observation/index.html","f65d1c227876c6c21e79972200cfcabd"],["_site/ophtalmologie/index.html","a4ff5ab3bc0e1edf699e855b99228f7c"],["_site/orl/index.html","7d22fa89d7586d5e5871037be4ad01e3"],["_site/osteoporose/index.html","3e42d04a09405b2008de6ee82f040aeb"],["_site/pediatrie/index.html","9d5472ef003d5b61647e3ec3990c5b53"],["_site/pneumologie/index.html","209b1bb1bf17b58c251a47916970d683"],["_site/polyarthriterhumatoide/index.html","50776ec59ee719cfca91aa24623b7b90"],["_site/psychiatrie/index.html","39c49f4f72de7a2f90cea7ac5828838b"],["_site/rhumatologie/index.html","4ac053a753f9338de000040be3f67d42"],["_site/service-worker.js","696bb8ac0dff54378b6a9d1928e5fb8e"],["_site/spondylarhrites/index.html","c51ee423de8ce03d020eeed550d9a8b8"],["_site/spondylodiscites/index.html","93a92ec5769de4909b59bdfb7b8f6c8c"],["_site/traumatologie/index.html","f32035babcdacd2fa6470443ae41f62c"],["_site/urgences-reanimation/index.html","c1cc220ddea671f770df44e410f1d693"],["_site/urologie/index.html","77388ca92adaf26f4390dce80f64af9f"],["about.markdown","d1c68b1100d723bb9b6c1ddd25a12887"],["assets/css/style.scss","75041f3eda41a7e6995b63a2482cafce"],["assets/images/MCS.png","7fe2d3be6485b79761b3234d09890366"],["assets/images/Thumbs.db","f63f5fd5a6c961e55c9a14c5bc71e0f8"],["assets/images/android-chrome-192x192.png","e50e8b52da2aa749b2010dcb4fd313e3"],["assets/images/android-chrome-512x512.png","613ced4fdd53152951328d933336b170"],["assets/images/apple-touch-icon.png","e48bb2523e38f1bca02e689702a62bf7"],["assets/images/favicon-16x16.png","bd654f229bf3c5365a945ffb0d67a9c8"],["assets/images/favicon-32x32.png","c9234f764a305550234295064d899e82"],["assets/images/favicon.ico","f94e1ee9efe0e457c699d1d5e6c99b0d"],["assets/images/github_icon.png","4fea192f6d32a895ab650462d7715862"],["assets/images/icon-search.png","91a91f740b9a1179b286654446aaebe2"],["assets/images/mail_icon.png","d4e91d1803a4371abb044f3211fcdd6f"],["assets/images/mcs-404.png","1521bbf3b79aad705a23330c77875d31"],["assets/images/twitter_icon.png","fa696cfc52610ef6df08a0c2895ecc18"],["assets/images/whatsapp_icon.png","18f2412a109c6af7a3f2e7d9a3a8961e"],["assets/js/main.js","35dbddec7d6094b3c5e18b48e0bf7913"],["assets/posts-assets/Observation-psychiatrie.pdf","e2d3c96becd239388c2b1a244c1d1a87"],["assets/posts-assets/Thumbs.db","25edddd861cb4b99c5cb347ea379d34f"],["assets/posts-assets/anemie.jpg","ebfe99701a8e5559b411ff6c66b90c97"],["assets/posts-assets/etoile-maigne.webp","86230f4bcc55c76f33dea5c3c33e607c"],["assets/posts-assets/hemogramme.jpg","d222e7f4775f37d100817d97a16a5203"],["cheatsheets.markdown","9ee306d22283ed9b4dbe0a72b9022c17"],["index.markdown","2bcab92a431b150c037f128dcc13d83f"],["manifest.json","65b2e9103b5d8e9422e809806fd08737"]];
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







