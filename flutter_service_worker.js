'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fc100f8fc1e9fb53244c6ab4ea159cb4",
"index.html": "76a358e8e2135aeddb9e015c938b8c49",
"/": "76a358e8e2135aeddb9e015c938b8c49",
"main.dart.js": "de4323f81a8055be84788bdb457bb5bb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "75f97645a35c912eec1c1ac29162eb26",
"assets/AssetManifest.json": "723f1bc2887040fde93033eb874da68c",
"assets/NOTICES": "6707d84666b2aefa3da8b96607da0d84",
"assets/FontManifest.json": "6b7ce1ef28a3ef62d63e61a861d049da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Proxima-Nova-Reg.ttf": "99e6f15dece8b6cbc0edee1da31e0365",
"assets/assets/images/top_background.png": "8df98b5dd208eb7db70c585cd6bf3a0d",
"assets/assets/images/ibm.jpeg": "0db87f1a4bd780de0db15b0dcbebc9e1",
"assets/assets/images/nyu.png": "043ed7a73d5b86424906a8f6ddc0ff87",
"assets/assets/images/verified_2.png": "d1826015d458a030a28f932535bc384d",
"assets/assets/images/afiniti.png": "36d432ecddcdde139257a5fd5a0fe50f",
"assets/assets/images/ibm.svg": "b1db1ae501d522a1a4b49613fe07c9f1",
"assets/assets/images/sweet_period_background.png": "e7837bb981fe016743715f3b2727e43a",
"assets/assets/images/waterloo.png": "f08c6905bc50b2628205c4dad6d33c28",
"assets/assets/images/verified.png": "0f7bf2be307dd81f367d217f4e75ec8b",
"assets/assets/images/project_demo_3.jpg": "82124eaa5e083fb98c45eb7093779543",
"assets/assets/images/ilmademia_2.jpeg": "2c1fc1b79f9cdd026c75e5256a556e00",
"assets/assets/images/project_demo_2.jpg": "d4c5946188b77733f8dc6cd92c2e1be1",
"assets/assets/images/project_demo_6.jpg": "403a22f82b1e892ce1b926c31629079a",
"assets/assets/images/project_demo_5.jpg": "8ca5745da73d6a653bc62324017f42cc",
"assets/assets/images/profile_picture.png": "7834f7879a316dc0b9174076bbff32c1",
"assets/assets/images/project_demo_4.jpg": "addb836f1f36a4048b511a863fc5f711",
"assets/assets/images/nyu_stern.jpeg": "a1964399886c337aa67168c106dd2973",
"assets/assets/images/project_demo.jpg": "0507dabdb1df862ea1413038575f250e",
"assets/assets/images/home-48.png": "60d9e36ccd5f3fcd1478b2d3fc54d347",
"assets/assets/images/nyu_stern.png": "c0bf6f1a819d2c24e3db9c9f920a48ab",
"assets/assets/images/spotify_background.png": "43096867eea63bc5f6b32010c5dc2953",
"assets/assets/images/ilmademia.png": "dd11916da26f4a202553f48a959c2739",
"assets/assets/images/nyu.jpeg": "5507bf504ad1baece174beebfad5c337",
"assets/assets/images/new_life_background.png": "97d1ec98d22eb17172057275956023f7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
