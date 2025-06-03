'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "568b4671a9db81e565b1eb44664ef356",
".git/config": "241a06eda8fbacbde1fcd89b591dce7e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "17ebc5db0463c5ea8ef42621fb691c49",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "25c09a579cb251b253ec7d7fa8c2a0cd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e9b5c7d7ae7ddd27ac99e044819997ef",
".git/logs/refs/heads/main": "e9b5c7d7ae7ddd27ac99e044819997ef",
".git/logs/refs/remotes/origin/HEAD": "b085c41470469380e7a0cd951eeb3f4e",
".git/objects/2e/4334b3ec61320126f5c4ca2a703806e6f424d6": "50b923944c12f6a200ca99abf65cfe3b",
".git/objects/5c/9019e978d1ff480ba41ec0015c6a5b71f886ba": "00640ebe07c5179a3b24853c909301fa",
".git/objects/f7/aa9faaea142f62c5165f9fcef68b9930040cb0": "9415855e6416ff0849b134d54b8feb8a",
".git/objects/pack/pack-dc951429296cc1aed28bab0d687072b7683ab653.idx": "e03db2484291f5d652719ca40f1ededa",
".git/objects/pack/pack-dc951429296cc1aed28bab0d687072b7683ab653.pack": "933e093b1a71cf4971b8e60f3e611a60",
".git/objects/pack/pack-dc951429296cc1aed28bab0d687072b7683ab653.rev": "f1316eda5d1115c5ef392eeeca6574da",
".git/packed-refs": "f6fad57d0121f752b8185b0c5dd364ee",
".git/refs/heads/main": "d67c6ce3e0559633de6675db8c51e01d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"assets/AssetManifest.bin": "13e0a109b66300158b11d2ae08354829",
"assets/AssetManifest.bin.json": "5687991bc43af7c9602afca6aa6910cb",
"assets/AssetManifest.json": "bff7c343c293a3fc5e7083e460465f19",
"assets/assets/images/greeniq_logo.png": "27fe56878ac662bc7d474b1b2fe4fa51",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1d710f4cfb01920058ad8ed350b6e804",
"assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"canvaskit/canvaskit.js": "3709bd882f416107176c2ab8730ca757",
"canvaskit/canvaskit.js.symbols": "f1d636564735db5b835f7f4fa1591189",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "27f7d5845fb45327c09497b285a0e864",
"canvaskit/chromium/canvaskit.js.symbols": "79cf7fcf3b3ef820a06fe8690bf8cf79",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "e2e4523ba5872fa065533dcdd7ff5246",
"canvaskit/skwasm.js.symbols": "c25cb0d88ad70a2ed79a5cef737a4581",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "5635bfa3ff7e8e305d9f2b1c10aaee5a",
"flutter_bootstrap.js": "40e4827b5c03e833bbf74f22f4d80154",
"greeniq/.git/COMMIT_EDITMSG": "d6d88f2e50080b9602da53dac1102762",
"greeniq/.git/config": "241a06eda8fbacbde1fcd89b591dce7e",
"greeniq/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"greeniq/.git/FETCH_HEAD": "09cb670bf9421850516c8ae60bf5e1c8",
"greeniq/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"greeniq/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"greeniq/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"greeniq/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"greeniq/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"greeniq/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"greeniq/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"greeniq/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"greeniq/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"greeniq/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"greeniq/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"greeniq/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"greeniq/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"greeniq/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"greeniq/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"greeniq/.git/index": "7c42e371fdea471cd9cc78350b5bed03",
"greeniq/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"greeniq/.git/logs/HEAD": "2d71cbd3bd471ca53235f7e146340e76",
"greeniq/.git/logs/refs/heads/main": "2d71cbd3bd471ca53235f7e146340e76",
"greeniq/.git/logs/refs/remotes/origin/HEAD": "edc8d94f32debc45189defee51b523c0",
"greeniq/.git/logs/refs/remotes/origin/main": "19153091192a570d63eed29ce9a1629f",
"greeniq/.git/objects/28/544a1a6dcf86bf03cbfacf874d74cfaaf2ff68": "c352f9cd116c02e40819609f43a4785a",
"greeniq/.git/objects/2e/4334b3ec61320126f5c4ca2a703806e6f424d6": "50b923944c12f6a200ca99abf65cfe3b",
"greeniq/.git/objects/5c/9019e978d1ff480ba41ec0015c6a5b71f886ba": "00640ebe07c5179a3b24853c909301fa",
"greeniq/.git/objects/5f/121d2886bffe745348a16e853440753270a8b7": "7909f2a03e828d363fa4b725a4ae75f3",
"greeniq/.git/objects/74/b097ecf15db7b165b52306cce0d3e70e91d8a9": "719428dfe2ef385183ae4a1380e100c1",
"greeniq/.git/objects/a7/887d3b06a68d7494e100b8a36a13d14de2837e": "745ceb9307544472219868f5e148ca63",
"greeniq/.git/objects/e9/af2fbde551d4723232d0aee991bbe1f06e40e2": "0adba4ea55c8c9ef88ab426c52f8e2ab",
"greeniq/.git/objects/f7/aa9faaea142f62c5165f9fcef68b9930040cb0": "9415855e6416ff0849b134d54b8feb8a",
"greeniq/.git/objects/pack/pack-dc951429296cc1aed28bab0d687072b7683ab653.idx": "e03db2484291f5d652719ca40f1ededa",
"greeniq/.git/objects/pack/pack-dc951429296cc1aed28bab0d687072b7683ab653.pack": "933e093b1a71cf4971b8e60f3e611a60",
"greeniq/.git/objects/pack/pack-dc951429296cc1aed28bab0d687072b7683ab653.rev": "f1316eda5d1115c5ef392eeeca6574da",
"greeniq/.git/packed-refs": "f6fad57d0121f752b8185b0c5dd364ee",
"greeniq/.git/refs/heads/main": "793da7e40274b9598bbe28afe1d7ba0d",
"greeniq/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"greeniq/.git/refs/remotes/origin/main": "793da7e40274b9598bbe28afe1d7ba0d",
"greeniq/assets/AssetManifest.bin": "13e0a109b66300158b11d2ae08354829",
"greeniq/assets/AssetManifest.bin.json": "5687991bc43af7c9602afca6aa6910cb",
"greeniq/assets/AssetManifest.json": "bff7c343c293a3fc5e7083e460465f19",
"greeniq/assets/assets/images/greeniq_logo.png": "27fe56878ac662bc7d474b1b2fe4fa51",
"greeniq/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"greeniq/assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"greeniq/assets/NOTICES": "1d710f4cfb01920058ad8ed350b6e804",
"greeniq/assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"greeniq/canvaskit/canvaskit.js": "3709bd882f416107176c2ab8730ca757",
"greeniq/canvaskit/canvaskit.js.symbols": "f1d636564735db5b835f7f4fa1591189",
"greeniq/canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"greeniq/canvaskit/chromium/canvaskit.js": "27f7d5845fb45327c09497b285a0e864",
"greeniq/canvaskit/chromium/canvaskit.js.symbols": "79cf7fcf3b3ef820a06fe8690bf8cf79",
"greeniq/canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"greeniq/canvaskit/skwasm.js": "e2e4523ba5872fa065533dcdd7ff5246",
"greeniq/canvaskit/skwasm.js.symbols": "c25cb0d88ad70a2ed79a5cef737a4581",
"greeniq/canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"greeniq/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"greeniq/flutter.js": "5635bfa3ff7e8e305d9f2b1c10aaee5a",
"greeniq/flutter_bootstrap.js": "40e4827b5c03e833bbf74f22f4d80154",
"greeniq/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"greeniq/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"greeniq/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"greeniq/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"greeniq/index.html": "c27c3cd75d07745f85e09643d52474fd",
"greeniq/main.dart.js": "137108be13d40fa9088566a977c74261",
"greeniq/manifest.json": "b3cfb462fc6b8216c706d5d8514fb7e2",
"greeniq/version.json": "1997ce7be0cf91b637e53df13c29d8c4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c27c3cd75d07745f85e09643d52474fd",
"/": "c27c3cd75d07745f85e09643d52474fd",
"main.dart.js": "137108be13d40fa9088566a977c74261",
"manifest.json": "b3cfb462fc6b8216c706d5d8514fb7e2",
"version.json": "1997ce7be0cf91b637e53df13c29d8c4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
