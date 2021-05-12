'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fc100f8fc1e9fb53244c6ab4ea159cb4",
"index.html": "6a9705b979cd4e705f472ce725d73f4d",
"/": "6a9705b979cd4e705f472ce725d73f4d",
"main.dart.js": "54ba11132d6614c42a386094ae8bd929",
"favicon.png": "5adb338a4566754a2b4331d0b882e466",
"icons/favicon-16x16.png": "5adb338a4566754a2b4331d0b882e466",
"icons/favicon.ico": "1eb71c6017221f04144c75cbdffb9a5b",
"icons/apple-icon.png": "356ac7a1023f89ae8a8dca17d19788dd",
"icons/apple-icon-144x144.png": "a5263820a36111daa7603cba25a29e24",
"icons/android-icon-192x192.png": "eb36cbe6d23a6be5600c14952d0cbabf",
"icons/apple-icon-precomposed.png": "356ac7a1023f89ae8a8dca17d19788dd",
"icons/apple-icon-114x114.png": "ce0cdf08885f3fbe23be2dc9a38fbeb7",
"icons/ms-icon-310x310.png": "06f039de563ced81e98c2ad858252a6a",
"icons/ms-icon-144x144.png": "a5263820a36111daa7603cba25a29e24",
"icons/apple-icon-57x57.png": "91aab008819e01b61d01128d69d7bb73",
"icons/apple-icon-152x152.png": "80a5cf54217a0a8ec51a682e830bf516",
"icons/ms-icon-150x150.png": "8d32137ffc067d8d5f2827a7cfc94b27",
"icons/android-icon-72x72.png": "c77f3dab330beeca528474199a7a9bdb",
"icons/android-icon-96x96.png": "46e969f4c7fd2110e3716686924f7521",
"icons/android-icon-36x36.png": "e2e72904f31429de0df81bf33c612ec4",
"icons/apple-icon-180x180.png": "a49175d932d1cde45cd4d9f78c5081bb",
"icons/favicon-96x96.png": "46e969f4c7fd2110e3716686924f7521",
"icons/manifest.json": "86da4939118916f286128e6a49497138",
"icons/android-icon-48x48.png": "d464002d188468b19ff6650cb9de0891",
"icons/apple-icon-76x76.png": "530b4dd1fa28b0005b94e8669eea83fc",
"icons/apple-icon-60x60.png": "d9268d968b30593522b38649fd4f8de4",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "a5263820a36111daa7603cba25a29e24",
"icons/apple-icon-72x72.png": "c77f3dab330beeca528474199a7a9bdb",
"icons/apple-icon-120x120.png": "cf1a8ccfd9458f1d8d2cc633ec0fafb1",
"icons/favicon-32x32.png": "d5d6648185c2c073a00c7322546fd2fa",
"icons/ms-icon-70x70.png": "86aa3c3456265aac0269ec3903a4b37d",
"manifest.json": "525f0ef675a4967750f6268c1dff8199",
"assets/AssetManifest.json": "fefb92fe95cd430d241488ade1a8c1e1",
"assets/NOTICES": "f2cca21f9792fb5fa62142b243e56342",
"assets/FontManifest.json": "6b7ce1ef28a3ef62d63e61a861d049da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Proxima-Nova-Reg.ttf": "99e6f15dece8b6cbc0edee1da31e0365",
"assets/assets/images/nyu_stern_1.jpeg": "b626c8596e8ed9291e948962d8d79ca5",
"assets/assets/images/profile_2_duo_1.jpeg": "bf2e4c03574156a8b4cb03ab8529c8b9",
"assets/assets/images/ilmademia.jpeg": "d8b598004294b61c0b695bae51aa869a",
"assets/assets/images/app_dev.jpeg": "7d930eec9365e0fa62b693fe03e3bba9",
"assets/assets/images/verified_2.png": "d1826015d458a030a28f932535bc384d",
"assets/assets/images/ML.jpeg": "3ccbf5c91b69faa8509725992974627f",
"assets/assets/images/pakvax_project.png": "21bb388857df76ddb88408a406f5f0bf",
"assets/assets/images/dl_project.jpeg": "cccc929f500d44a6c8e34bc7bcf31f91",
"assets/assets/images/savaal_project.png": "ff59951b017c4c952a4ae3dd65d61301",
"assets/assets/images/pm.jpeg": "27a2c7fc095747cd7ccd4d2eea30da49",
"assets/assets/images/edtech_2.png": "164d7b207cd2e88564c745050b99ef26",
"assets/assets/images/nyu_1.jpeg": "09745fe0254207a56aeeedba54a18e89",
"assets/assets/images/waterloo.jpeg": "5e63a832246dbb467311108efef4b79f",
"assets/assets/images/edtech_project.png": "6f935ef929b93da8acd4d3289f2cf00b",
"assets/assets/images/utilities_project.png": "c9e222cc60d486c5df10b1efcff0699e",
"assets/assets/images/healthcare_project.png": "1d799bf43b2181bf601abd1c3b41cc55",
"assets/assets/images/fiancial_access.jpg": "14a09299503d8ab4ecf4a0857f5d7675",
"assets/assets/images/healthcare.png": "73c896a9c873262fffb82401bea9e5ea",
"assets/assets/images/notes_project.png": "ed0db65ee640c501000f0da19ff8da01",
"assets/assets/images/out_of_school.jpg": "a598f3c80540318b67027c1ddb526c9e",
"assets/assets/images/notes.png": "9497987afb1fa4c4ef0d13bc180c9211",
"assets/assets/images/profile_4_duo.jpeg": "f46ae7171c4295f33a72db8aebd50480",
"assets/assets/images/watt_project.png": "3c4fc6f74ef4fe4456bfc339960889ca",
"assets/assets/images/deepLearning_project.png": "55e7efdad9a1bb1e0bb28d12108438ab",
"assets/assets/images/ideus_project.png": "43f1bb30c8f0d145ca03099be254f1e5",
"assets/assets/images/utilities.png": "7283077895356732118e85ab2fb0e00e",
"assets/assets/images/school_infrastructure.jpg": "f61f3149ca0980ee381ec499c5dd02e6",
"assets/assets/images/ibm_1.jpeg": "aa6da78806188dea6d837c2473d0e8b4",
"assets/assets/images/afiniti.jpeg": "28b5bc9c9bb607bcf27d15c487e242cb",
"assets/assets/images/deep_learning.png": "42d2235e62b9230f89873d03dc011b19",
"assets/assets/images/female_education.jpg": "89b186dfb794c4cd3f068f5214432fdc",
"assets/assets/images/edtech.png": "f9cf1098b31e7e3542c6e1ebbac1127a",
"assets/assets/images/ML.png": "995b074193b456cfc6dbe36fac93a8ff",
"assets/assets/images/edtech2_project.png": "dd71f8a0e93bf597e8f18ee760f789bf",
"assets/assets/images/play_button.png": "cc7727b03dadcf0e11c4798eab985554",
"assets/assets/images/vulnerable_employment.jpg": "13def7ee276b80d1457ab7f2bd33fb05",
"assets/assets/images/ilmademia_project.png": "e1a3e90931520b864fc83f17c60f4462"
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
