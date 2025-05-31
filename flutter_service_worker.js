'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "13e0a109b66300158b11d2ae08354829",
"assets/AssetManifest.bin.json": "5687991bc43af7c9602afca6aa6910cb",
"assets/AssetManifest.json": "bff7c343c293a3fc5e7083e460465f19",
"assets/assets/images/greeniq_logo.png": "27fe56878ac662bc7d474b1b2fe4fa51",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "96006693ad025ef9e7c590b8554495e0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "8b6dba83ae27747d2375c7772206efcb",
"greeniq/.git/COMMIT_EDITMSG": "d88ae4d6e843b8abd81b5b5c3d01a589",
"greeniq/.git/config": "93bb64e23c77489de50b36e1bdad1e6f",
"greeniq/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"greeniq/.git/FETCH_HEAD": "571d2c6a24ee90291916531fa2a3988e",
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
"greeniq/.git/index": "0d28a7cd27f126e9abcb47a4ea8f05f0",
"greeniq/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"greeniq/.git/logs/HEAD": "64f2dbf8954bce64a8c63b88d52b9f86",
"greeniq/.git/logs/refs/heads/main": "64f2dbf8954bce64a8c63b88d52b9f86",
"greeniq/.git/logs/refs/remotes/origin/HEAD": "e7b423c8fe99317cb1131b15c566a1eb",
"greeniq/.git/logs/refs/remotes/origin/main": "c22250841fecb627a2c79c4fa99f0bd7",
"greeniq/.git/objects/14/9ecca4f1302c5e9264d59814b79c1f805a6be7": "9917167432a9bf9b15c7fd789d678b8a",
"greeniq/.git/objects/21/07ced71d3fd225722d85b09747e34fa8886251": "59b28a10de731f51ef6c0436ddda20ac",
"greeniq/.git/objects/6f/dfbdc651ed1e95ef77f1eb423cfabadea84e83": "123380a3510011b3511f61dc5821dbe3",
"greeniq/.git/objects/7c/616547df35e29b7358a2dbe41b3c2bda63b51c": "02a952b702bdb068787a5e1107987895",
"greeniq/.git/objects/c0/ecf70194953986b773fb7bfd58c935abb2cf2f": "3a9514ac164a73f0744e34f47c6323fb",
"greeniq/.git/objects/d4/92bdc4452749eb47ce75a090c3e8b7e2e7a1ba": "692359eb7245011c6770ba4809e0411b",
"greeniq/.git/objects/e2/50977eff0ba2bfd576b9e22612079a4df2ab96": "8c5536bcd7d18ece35896e78a6f5e42e",
"greeniq/.git/objects/pack/pack-5927f958c65e71b7b0a96e7bddb582cb878dbd0f.idx": "caadc80f7cf1053f69451aee2dd52cd1",
"greeniq/.git/objects/pack/pack-5927f958c65e71b7b0a96e7bddb582cb878dbd0f.pack": "c14e9c433ba52135d381a1292297881d",
"greeniq/.git/objects/pack/pack-5927f958c65e71b7b0a96e7bddb582cb878dbd0f.rev": "7422b80b31a394ddb0587efda0c29734",
"greeniq/.git/packed-refs": "f49ecfa3bcfa17d03a51f71d9ec335a4",
"greeniq/.git/refs/heads/main": "f4653873b30f4cb9216120d5e711e143",
"greeniq/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"greeniq/.git/refs/remotes/origin/main": "f4653873b30f4cb9216120d5e711e143",
"greeniq/assets/AssetManifest.bin": "13e0a109b66300158b11d2ae08354829",
"greeniq/assets/AssetManifest.bin.json": "5687991bc43af7c9602afca6aa6910cb",
"greeniq/assets/AssetManifest.json": "bff7c343c293a3fc5e7083e460465f19",
"greeniq/assets/assets/images/greeniq_logo.png": "27fe56878ac662bc7d474b1b2fe4fa51",
"greeniq/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"greeniq/assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"greeniq/assets/NOTICES": "96006693ad025ef9e7c590b8554495e0",
"greeniq/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"greeniq/canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"greeniq/canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"greeniq/canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"greeniq/canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"greeniq/canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"greeniq/canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"greeniq/canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"greeniq/canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"greeniq/canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"greeniq/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"greeniq/flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"greeniq/flutter_bootstrap.js": "5f4239714866ca5d177b8222c0d3253f",
"greeniq/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"greeniq/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"greeniq/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"greeniq/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"greeniq/index.html": "043400ad70268a63db08bd9320323dc3",
"greeniq/main.dart.js": "7e8ad5c1de3405cbf17ec231fada66f5",
"greeniq/manifest.json": "b3cfb462fc6b8216c706d5d8514fb7e2",
"greeniq/version.json": "1997ce7be0cf91b637e53df13c29d8c4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "043400ad70268a63db08bd9320323dc3",
"/": "043400ad70268a63db08bd9320323dc3",
"main.dart.js": "13ab8fa8e88f8d843d1ba7198f4089c6",
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
