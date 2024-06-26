// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cpexy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f89a3f46729a4c9f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"9bACd":[function(require,module,exports) {
// Imports
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _three = require("three");
var _yuka = require("yuka");
var _gltfloader = require("three/examples/jsm/loaders/GLTFLoader");
var _trackPathsJs = require("./trackPaths.js");
var _networkJs = require("./network.js");
var _networkJsDefault = parcelHelpers.interopDefault(_networkJs);
var _fs = require("fs"); // Import fs module for file operations
var _fsDefault = parcelHelpers.interopDefault(_fs);
// Global variables
const TRACK = (0, _trackPathsJs.track2);
const MODEL = "track2.glb";
const CAR = "car.glb";
// Setup scene
const renderer = new _three.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new _three.Scene();
renderer.setClearColor(0x000000);
scene.background = new _three.Color("darkGreen");
// Setup camera
const camera = new _three.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(100, 330, 120);
camera.lookAt(scene.position);
// Setup lights
const ambientLight = new _three.AmbientLight(0x333333);
scene.add(ambientLight);
const directionalLight = new _three.DirectionalLight(0xFFFFFF, 1);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);
// Load the GLTF model
const loader = new (0, _gltfloader.GLTFLoader)();
loader.load(`./assets/${MODEL}`, function(gltf) {
    const model = gltf.scene;
    scene.add(model);
});
// Vehicle setup
const entityManager = new _yuka.EntityManager();
const vehicle1 = createYukaCar({
    maxSpeed: 30,
    minSpeed: 10,
    team: "red",
    startPos: 1,
    model: CAR,
    track: TRACK,
    tyre: tyre(0)
});
entityManager.add(vehicle1);
const vehicles = [
    vehicle1
]; // Only one vehicle
const time = new _yuka.Time();
// Sync the YUKA vehicle with the Three.js model
function sync(entity, renderComponent) {
    renderComponent.matrix.copy(entity.worldMatrix);
}
function pitStopDecision(vehicle) {
    const neuralNetworkInput = {
        tyreLife: vehicle.tyre.life / 100
    };
    const decision = (0, _networkJsDefault.default).run(neuralNetworkInput);
    // const decision = Math.random();
    console.log("Decision:", decision.pitstop);
    console.log("Tyre Life:", vehicle.tyre.life);
    if (decision.pitstop > 0.5) {
        // Perform pitstop actions for the current vehicle
        console.log("Pitstop for car", vehicle.constructor);
        if (!vehicle.pitstop) {
            for (let point of (0, _trackPathsJs.track2Pit))vehicle.path.add(new _yuka.Vector3(point.x, point.y, point.z));
            vehicle.pitstop = true;
        }
    }
}
// Getters
const leaderboardElement = document.getElementById("leaderboard");
const zoomOutButton = document.getElementById("zoom-out-btn");
const zoomInButton = document.getElementById("zoom-in-btn");
// Setters
let raceStartTime = Date.now();
let zoom = true;
const obsticles = entityManager.entities;
let raceFinished = false;
let totalLaps = 3;
// Animate the scene 
function animate() {
    const delta = time.update().getDelta();
    entityManager.update(delta);
    // Sort the vehicles by position on the track
    const sortedVehicles = vehicles.slice().sort((a, b)=>{
        const lapDifference = b.lapNumber - a.lapNumber;
        // If the vehicles are on different laps, sort by lap
        if (lapDifference !== 0) return lapDifference;
        const indexDifference = b.path._index - a.path._index;
        // If the vehicles are on different path indexes within the same lap, sort by path index
        if (indexDifference !== 0) return indexDifference;
        // Vehicles are on the same lap and path index, sort by distance to the next waypoint
        const distanceToWaypoint = a.position.distanceTo(a.path.current()) - b.position.distanceTo(b.path.current());
        return distanceToWaypoint;
    });
    if (!raceFinished && vehicle1.lapNumber >= totalLaps) {
        // Mark race as finished to avoid displaying the message multiple times
        raceFinished = true;
        // Stop the animation loop
        renderer.setAnimationLoop(null);
        // Get the winner (vehicle with the most laps completed)
        const winner = vehicle1;
        // Display race completion message
        const message = `
      <h2 style="font-size: 28px; color: white;">Race Finished!</h2>
      <p style="font-size: 20px; color: white;">Winner: ${winner.constructor}</p>
      <p style="font-size: 20px; color: white;">Lap Time: ${winner.bestLapTime.toFixed(2)} seconds</p>
      <p style="font-size: 20px; color: white;">Total Time: ${raceTimer()} seconds</p>
      `;
        leaderboardElement.innerHTML = message;
        // Save the data to a file
        const data = {
            lapNumber: winner.lapNumber,
            tyreLife: winner.tyre.life,
            totalTime: raceTimer()
        };
        (0, _fsDefault.default).writeFileSync("race_data.json", JSON.stringify(data));
        // Perform any other actions related to race completion
        console.log("Race completed! Winner:", winner.constructor, "Lap Time:", winner.bestLapTime.toFixed(2), "seconds");
        return;
    }
    // Zoom in and out
    zoomOutButton.addEventListener("click", ()=>{
        zoom = false;
    });
    zoomInButton.addEventListener("click", ()=>{
        zoom = true;
    });
    if (zoom) camera.position.copy(sortedVehicles[0].position).add(new _three.Vector3(5, 25, 10));
    else camera.position.copy(sortedVehicles[0].position).add(new _three.Vector3(75, 100, 50));
    for (const vehicle of vehicles){
        // Add each vehicle as an obstacle for each other vehicle
        const obstacleAvoidanceBehavior = new _yuka.ObstacleAvoidanceBehavior(obsticles);
        obstacleAvoidanceBehavior.dBoxMinLength = 2.5;
        obstacleAvoidanceBehavior.brakingWeight = 0.2;
        vehicle.steering.add(obstacleAvoidanceBehavior);
        // Update tyre wear
        tyreWear(vehicle, delta);
        // Pitstop logic
        const threshold = 3;
        // Check if the vehicle is in the pitstop
        const startPosition = new _yuka.Vector3((0, _trackPathsJs.track2Pit)[0].x, (0, _trackPathsJs.track2Pit)[0].y, (0, _trackPathsJs.track2Pit)[0].z);
        if (vehicle.position.distanceTo(startPosition) < threshold && !vehicle.inPit) {
            vehicle.maxSpeed = vehicle.minSpeed;
            vehicle.inPit = true;
            vehicle.outPit = false;
        }
        // Check if the vehicle is close to the ending point of the pitstop
        const endPosition = new _yuka.Vector3((0, _trackPathsJs.track2Pit)[(0, _trackPathsJs.track2Pit).length - 1].x, (0, _trackPathsJs.track2Pit)[(0, _trackPathsJs.track2Pit).length - 1].y, (0, _trackPathsJs.track2Pit)[(0, _trackPathsJs.track2Pit).length - 1].z);
        if (vehicle.position.distanceTo(endPosition) < threshold && !vehicle.outPit) {
            vehicle.maxSpeed = vehicle.speedForPit;
            vehicle.path = vehicle.originalPath;
            vehicle.pitstop = false;
            vehicle.inPit = false;
            vehicle.outPit = true;
            vehicle.path._index = 1;
        }
        // FORWARD FACING TO USE LATER FOR SLIPSTREAM
        // const forward = vehicle1.forward.clone().multiplyScalar(1)
        // Check if the vehicle crossed the finish line
        if (vehicle.path._index === 0 && !vehicle.crossedFinishLine) {
            // Calculate the lap time
            const lapTime = (Date.now() - vehicle.currentLapStartTime) / 1000;
            pitStopDecision(vehicle);
            // Update bestLapTime if the current lap time is better
            if (lapTime < vehicle.bestLapTime || vehicle.bestLapTime === 0 && vehicle.lapNumber > 0) vehicle.bestLapTime = lapTime;
            // Update lap information
            vehicle.lapNumber++;
            vehicle.currentLapStartTime = Date.now();
            // Mark the vehicle as crossed the finish line in the current lap
            vehicle.crossedFinishLine = true;
        }
        // Reset the flag when the vehicle moves away from the finish line
        if (vehicle.path._index !== 0) vehicle.crossedFinishLine = false;
    }
    // Display race positions along with car information
    leaderboardElement.innerHTML = `
<h2 style="font-size: 28px; color: white;">Race Time: ${raceTimer()} s</h2>
<div class="leaderboard-container" style="font-size: 20px;">
  <div class="header">
    <span class="position" style="color: white;">Pos</span>
    <span class="lap">Lap</span>
    <span class="speed">Speed</span>
    <span class="tyre">Tyre Info</span>
    <span class="constructor">Constructor</span>
    <span class="best-lap">Best Lap</span>
  </div>
  <ul class="leaderboard" style="list-style-type: none; padding: 0;">
    ${sortedVehicles.map((vehicle, index)=>`
      <li class="leaderboard-item" style="background-color: rgba(255, 255, 255, 0.1); margin: 5px 0; padding: 10px;">
        <span class="position-circle" style="font-size: 24px; background-color: white; border-radius: 50%; padding: 5px; margin-right: 10px; color: black;">${index + 1}</span>
        <span class="lap">${vehicle.lapNumber}</span>
        <span class="speed">${vehicle.velocity.length().toFixed(0)} km/h</span>
        <span class="tyre">${vehicle.tyre.name} </span>
        <span class="tyre-wear">${vehicle.tyre.life.toFixed(0)}% </span>
        <span class="tyre-temp">${vehicle.tyreTemp.toFixed(2)}</span>
        <span class="constructor">${vehicle.constructor}</span>
        <span class="best-lap">${vehicle.bestLapTime.toFixed(2)} s</span>
      </li>
    `).join("")}
  </ul>
</div>
`;
    renderer.render(scene, camera);
}
function tyre(num) {
    const tyre = new Object();
    tyre.life = 100;
    if (num === 0) {
        tyre.name = "Soft";
        tyre.wear = 0.0010;
        tyre.grip = 80;
    }
    if (num === 1) {
        tyre.name = "Medium";
        tyre.wear = 0.0007;
        tyre.grip = 65;
    }
    if (num === 2) {
        tyre.name = "Hard";
        tyre.wear = 0.0005;
        tyre.grip = 50;
    }
    return tyre;
}
function tyreWear(vehicle, deltaTime) {
    const wearRate = vehicle.tyre.wear; // Adjust wear rate as needed
    const maxLife = 100; // Maximum tyre life
    const minLife = 0; // Minimum tyre life (end of life)
    // Calculate the amount of wear based on the wear rate and time
    const wearAmount = wearRate * deltaTime * 1000;
    // Reduce the tyre's life by the wear amount
    vehicle.tyre.life -= wearAmount;
    // Degradation of tyre grip
    tyreDegradation(vehicle, Date.now());
    // Ensure the tyre's life stays within bounds
    vehicle.tyre.life = Math.max(minLife, vehicle.tyre.life);
    vehicle.tyre.life = Math.min(maxLife, vehicle.tyre.life);
}
function tyreDegradation(vehicle) {
    const tyreWear = vehicle.tyre.life;
    // Adjust the maximum speed based on the tyre's life except when the vehicle is in the pit
    if (vehicle.inPit) vehicle.maxSpeed = 10;
    else if (tyreWear >= 80) vehicle.maxSpeed = 30;
    else if (tyreWear >= 75) vehicle.maxSpeed = 29.5;
    else if (tyreWear >= 70) vehicle.maxSpeed = 29;
    else if (tyreWear >= 65) vehicle.maxSpeed = 28.5;
    else if (tyreWear >= 60) vehicle.maxSpeed = 28;
    else if (tyreWear >= 55) vehicle.maxSpeed = 27;
    else if (tyreWear >= 50) vehicle.maxSpeed = 25.5;
    else if (tyreWear >= 45) vehicle.maxSpeed = 24.5;
    else if (tyreWear >= 40) vehicle.maxSpeed = 23;
    else if (tyreWear >= 35) vehicle.maxSpeed = 21;
    else {
        // Below 35% tyre life, apply further reductions gradually
        const reductionFactor = (35 - tyreWear) / 100; // Linearly reduce the max speed
        vehicle.maxSpeed = 20 - 8 * reductionFactor; // Linearly reduce from 20 to 12 as tyre life decreases from 35 to 0
    }
}
function createYukaCar({ maxSpeed, minSpeed, team, startPos, model, track, tyre }) {
    // Setup track path
    const path = new _yuka.Path();
    for (let point of track)path.add(new _yuka.Vector3(point.x, point.y, point.z));
    path.loop = true;
    // Setup vehicle
    const vehicle = new _yuka.Vehicle();
    vehicle.position.copy(path.current());
    vehicle.maxSpeed = maxSpeed;
    vehicle.speedForPit = maxSpeed;
    vehicle.minSpeed = minSpeed;
    vehicle.tyre = tyre;
    vehicle.tyreTemp = Math.random();
    vehicle.boundingRadius = 0.8;
    vehicle.constructor = team;
    vehicle.pitstop = false;
    vehicle.inPit = false;
    vehicle.outPit = true;
    // Add a smoother to the vehicle to smooth out the steering
    vehicle.smoother = new _yuka.Smoother(1);
    // Store the path in the vehicle
    vehicle.path = path;
    vehicle.originalPath = path;
    // THINGS TO CHANGE
    // vehicle.mass = 3; 
    // vehicle.maxTurnRate = 1; ???
    // vehicle.maxForce = 20;// How much car can turn and accelerate 
    // Add a property to keep track of the start time of the current lap
    vehicle.currentLapStartTime = Date.now();
    vehicle.lapNumber = 0;
    vehicle.bestLapTime = 0;
    if (startPos % 2 === 0) vehicle.position.add(new _yuka.Vector3(-startPos * 6, 0, 3));
    else vehicle.position.add(new _yuka.Vector3(-startPos * 6, 0, -3));
    // Setup vehicle steering
    const followPathBehavior = new _yuka.FollowPathBehavior(path, 4);
    vehicle.steering.add(followPathBehavior);
    const onPathBehavior = new _yuka.OnPathBehavior(path); // can change radius and predictor factor dont know how they work yet 0.1 and 1 are default
    vehicle.steering.add(onPathBehavior);
    // Setup vehicle render component
    const loader1 = new (0, _gltfloader.GLTFLoader)();
    loader1.load(`./assets/${model}`, function(glb) {
        const model = glb.scene;
        model.traverse(function(child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                child.material = new _three.MeshStandardMaterial({
                    color: team
                });
            }
        });
        scene.add(model);
        model.matrixAutoUpdate = false;
        vehicle.rotateTo(path.current(), true);
        vehicle.scale.set(0.8, 0.8, 0.8);
        vehicle.setRenderComponent(model, sync);
    });
    return vehicle;
}
function lapTimer() {
    return (Date.now() - lapStartTime) / 1000;
}
function raceTimer() {
    return (Date.now() - raceStartTime) / 1000;
}
renderer.setAnimationLoop(animate);
window.addEventListener("resize", function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

},{"three":"ktPTu","yuka":"ead4k","three/examples/jsm/loaders/GLTFLoader":"dVRsF","./trackPaths.js":"1y5l9","./network.js":"hhhnT","fs":"b2U3s","@parcel/transformer-js/src/esmodule-helpers.js":"3eUf8"}],"b2U3s":[function(require,module,exports) {
"use strict";

},{}]},["cpexy","9bACd"], "9bACd", "parcelRequire94c2")

//# sourceMappingURL=training.729a4c9f.js.map
