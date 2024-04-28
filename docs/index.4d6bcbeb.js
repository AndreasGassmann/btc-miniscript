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
})({"anvqh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
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
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
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
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
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

},{}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _esnextMapGroupByJs = require("core-js/modules/esnext.map.group-by.js");
var _esnextSymbolDisposeJs = require("core-js/modules/esnext.symbol.dispose.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _logs = require("@ledgerhq/logs");
var _ledgerBitcoin = require("ledger-bitcoin");
// https://www.npmjs.com/package/ledger-bitcoin
// 
// Keep this import if you want to use a Ledger Nano S/X/S Plus with the USB protocol and delete the @ledgerhq/hw-transport-webhid import
var _hwTransportWebusb = require("@ledgerhq/hw-transport-webusb");
var _hwTransportWebusbDefault = parcelHelpers.interopDefault(_hwTransportWebusb);
// Keep this import if you want to use a Ledger Nano S/X/S Plus with the HID protocol and delete the @ledgerhq/hw-transport-webusb import
// import TransportWebHID from '@ledgerhq/hw-transport-webhid'
//Display the header in the div which has the ID "main"
const initial = "<h1>Click anywhere to connect to Ledger...</h1>";
const $main = document.getElementById("main");
if (!$main) throw new Error("no main");
$main.innerHTML = initial;
document.body.addEventListener("click", async ()=>{
    $main.innerHTML = initial;
    try {
        // Keep if you chose the USB protocol
        const transport = await (0, _hwTransportWebusbDefault.default).create();
        // Keep if you chose the HID protocol
        // const transport = await TransportWebHID.create()
        // Listen to the events which are sent by the Ledger packages in order to debug the app
        (0, _logs.listen)((log)=>console.log(log));
        const app = new (0, _ledgerBitcoin.AppClient)(transport);
        // Get the master key fingerprint
        const fpr = await app.getMasterFingerprint();
        console.log("Master key fingerprint:", fpr.toString("hex"));
        // Get App and Version
        const version = await app.getAppAndVersion();
        console.log("App and version:", version);
        // const ourPubkey = await app.getExtendedPubkey("m/48'/1'/0'/2'");
        // console.log('Our extended public key:', ourPubkey)
        // ERROR Ledger device: UNKNOWN_ERROR (0x6a82)
        // NOT working
        // const miniscriptPolicy = new WalletPolicy('Miniscript', "wsh(or_d(pk([558f6baa/48'/0'/0'/2']xpub6Dihm9N27y9sKx5zdn8XFuaM4umXe46eTJgQvhkoyQs6KrMNFHiZXxaaKcB9M5YhHMcB4oAYiXAWF1dHfk4h6GL1aVRZF2erfsiQPHcskxd/<0;1>/*),and_v(v:pkh([d65e423f/48'/0'/0'/2']xpub6DrgPQnhLamrvunhTnKngmdRP9aahxQtSaRcXMtzzq6cC7kJPpM9H5SEJXzzsmXCeEGxsDpGeF5rsw9ViQr7FBLJhQ4fLuoZTCjuJi8Yxsu/<0;1>/*),older(65535))))#7r9me7ca", [])
        // NOT working
        // const miniscriptPolicy = new WalletPolicy('Miniscript', "and_v(or_c(pk(B),or_c(pk(C),v:older(1000))),pk(A))", [
        //   "xpub6Dihm9N27y9sKx5zdn8XFuaM4umXe46eTJgQvhkoyQs6KrMNFHiZXxaaKcB9M5YhHMcB4oAYiXAWF1dHfk4h6GL1aVRZF2erfsiQPHcskxd",
        //   "xpub6DrgPQnhLamrvunhTnKngmdRP9aahxQtSaRcXMtzzq6cC7kJPpM9H5SEJXzzsmXCeEGxsDpGeF5rsw9ViQr7FBLJhQ4fLuoZTCjuJi8Yxsu",
        //   "xpub6DrgPQnhLamrvunhTnKngmdRP9aahxQtSaRcXMtzzq6cC7kJPpM9H5SEJXzzsmXCeEGxsDpGeF5rsw9ViQr7FBLJhQ4fLuoZTCjuJi8Yxsu"
        // ])
        // WORKGIN
        // const miniscriptPolicy = new WalletPolicy('Miniscript', "pkh(@0/**)", [
        //   "xpub6Dihm9N27y9sKx5zdn8XFuaM4umXe46eTJgQvhkoyQs6KrMNFHiZXxaaKcB9M5YhHMcB4oAYiXAWF1dHfk4h6GL1aVRZF2erfsiQPHcskxd",
        // ])
        // WORKING
        // const miniscriptPolicy = new WalletPolicy('Miniscript', "wsh(or_d(pk(@0/<0;1>/*),and_v(v:pkh(@1/<0;1>/*),older(65535))))", [
        //   "xpub6Dihm9N27y9sKx5zdn8XFuaM4umXe46eTJgQvhkoyQs6KrMNFHiZXxaaKcB9M5YhHMcB4oAYiXAWF1dHfk4h6GL1aVRZF2erfsiQPHcskxd",
        //   "xpub6DrgPQnhLamrvunhTnKngmdRP9aahxQtSaRcXMtzzq6cC7kJPpM9H5SEJXzzsmXCeEGxsDpGeF5rsw9ViQr7FBLJhQ4fLuoZTCjuJi8Yxsu"
        // ])
        // WORKING
        // const miniscriptPolicy = new WalletPolicy('Miniscript', "wsh(or_d(or_d(pk(@0/<0;1>/*),pk(@1/<0;1>/*)),and_v(v:pkh(@2/<0;1>/*),older(65535))))", [
        //   "xpub6Dihm9N27y9sKx5zdn8XFuaM4umXe46eTJgQvhkoyQs6KrMNFHiZXxaaKcB9M5YhHMcB4oAYiXAWF1dHfk4h6GL1aVRZF2erfsiQPHcskxd",
        //   "xpub6DrgPQnhLamrvunhTnKngmdRP9aahxQtSaRcXMtzzq6cC7kJPpM9H5SEJXzzsmXCeEGxsDpGeF5rsw9ViQr7FBLJhQ4fLuoZTCjuJi8Yxsu",
        //   "xpub6FAdf2QfaNSiLCcCE9cujpkgzYzs8DsyTtLYSjeYXwcEFv134fwYeRtXKecA4RYxE744ErnNLxk5UcpfyMoNQsXjfoaQvLoT7gzM3A783mf"
        // ])
        // NOT working
        // const script = `
        // wsh(
        //   or_d(
        //     or_d(
        //       pk(@0/<0;1>/*),
        //       or_d(
        //         pk(@1/<0;1>/*),
        //         pk(@2/<0;1>/*)
        //       )
        //     ),
        //     sha256(@3/<0;1>/*)
        //   )
        // )`
        // const miniscriptPolicy = new WalletPolicy('Miniscript', scriptWithoutWhitespaces, [
        //   "xpub6Dihm9N27y9sKx5zdn8XFuaM4umXe46eTJgQvhkoyQs6KrMNFHiZXxaaKcB9M5YhHMcB4oAYiXAWF1dHfk4h6GL1aVRZF2erfsiQPHcskxd",
        //   "xpub6DrgPQnhLamrvunhTnKngmdRP9aahxQtSaRcXMtzzq6cC7kJPpM9H5SEJXzzsmXCeEGxsDpGeF5rsw9ViQr7FBLJhQ4fLuoZTCjuJi8Yxsu",
        //   "xpub6FAdf2QfaNSiLCcCE9cujpkgzYzs8DsyTtLYSjeYXwcEFv134fwYeRtXKecA4RYxE744ErnNLxk5UcpfyMoNQsXjfoaQvLoT7gzM3A783mf",
        //   "xpub6F9SAQkS5nAXJ4zqo7ydjSezcXnpQRWfN9GtDzwQG3hfZU52TEgFR2YC3rESha7p7cKxyH32JKwayxn8zsmTS6vsB5XytB4eTCGvMzrFRdR"
        // ])
        // WORKING
        //     const script = `
        // wsh(
        //   or_d(
        //     or_d(
        //       pk(@0/<0;1>/*),
        //       pk(@1/<0;1>/*)
        //     ),
        //     and_v(
        //       v:pkh(@2/<0;1>/*),
        //       older(65535)
        //     )
        //   )
        // )`
        const script = `
    wsh(
      or_d(
        or_d(
          pk(@0/<0;1>/*),
          or_d(
            pk(@1/<0;1>/*),
            pk(@2/<0;1>/*)
          )
        ),
        and_v(
          v:pkh(@3/<0;1>/*),
          older(65535)
        )
      )
    )`;
        const scriptWithoutWhitespaces = script.replace(/\s+/g, "");
        console.log(scriptWithoutWhitespaces);
        const miniscriptPolicy = new (0, _ledgerBitcoin.WalletPolicy)("Miniscript", scriptWithoutWhitespaces, [
            "xpub6Dihm9N27y9sKx5zdn8XFuaM4umXe46eTJgQvhkoyQs6KrMNFHiZXxaaKcB9M5YhHMcB4oAYiXAWF1dHfk4h6GL1aVRZF2erfsiQPHcskxd",
            "xpub6DrgPQnhLamrvunhTnKngmdRP9aahxQtSaRcXMtzzq6cC7kJPpM9H5SEJXzzsmXCeEGxsDpGeF5rsw9ViQr7FBLJhQ4fLuoZTCjuJi8Yxsu",
            "xpub6FAdf2QfaNSiLCcCE9cujpkgzYzs8DsyTtLYSjeYXwcEFv134fwYeRtXKecA4RYxE744ErnNLxk5UcpfyMoNQsXjfoaQvLoT7gzM3A783mf",
            "xpub6F9SAQkS5nAXJ4zqo7ydjSezcXnpQRWfN9GtDzwQG3hfZU52TEgFR2YC3rESha7p7cKxyH32JKwayxn8zsmTS6vsB5XytB4eTCGvMzrFRdR"
        ]);
        const [policyId, policyHmac] = await app.registerWallet(miniscriptPolicy);
        console.log(policyId, policyHmac);
    // const ourKeyInfo = `[${fpr}/48'/1'/0'/2']${ourPubkey}`;
    // const otherKeyInfo = "[76223a6e/48'/1'/0'/2']tpubDE7NQymr4AFtewpAsWtnreyq9ghkzQBXpCZjWLFVRAvnbf7vya2eMTvT2fPapNqL8SuVvLQdbUbMfWLVDCZKnsEBqp6UK93QEzL8Ck23AwF";
    // const multisigPolicy = new WalletPolicy(
    //   "Cold storage",
    //   "wsh(sortedmulti(2,@0/**,@1/**))", // a 2-of-2 multisig policy template
    //   [
    //     otherKeyInfo, // some other bitcoiner
    //     ourKeyInfo,   // that's us
    //   ]
    // )
    // Display your bitcoin address on the screen
    // const h2 = document.createElement('h2')
    // h2.textContent = bitcoinAddress
    // $main.innerHTML = '<h1>Your first Bitcoin address:</h1>'
    // $main.appendChild(h2)
    } catch (e) {
        //Catch any error thrown and displays it on the screen
        console.error(e);
        const $err = document.createElement("code");
        $err.style.color = "#f66";
        $err.textContent = String(e.message || e);
        $main.appendChild($err);
    }
});

},{"core-js/modules/esnext.map.group-by.js":"3AR1K","core-js/modules/esnext.symbol.dispose.js":"b9ez5","core-js/modules/web.immediate.js":"49tUX","@ledgerhq/logs":"i4OI0","ledger-bitcoin":"c7CZM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@ledgerhq/hw-transport-webusb":"9zmIA"}],"3AR1K":[function(require,module,exports) {
"use strict";
// TODO: Remove from `core-js@4`
require("4d92d9132913bacd");

},{"4d92d9132913bacd":"c4yOM"}],"c4yOM":[function(require,module,exports) {
"use strict";
var $ = require("6567f4dade5d8960");
var uncurryThis = require("f35d7393646ad055");
var aCallable = require("c4503f7eb1018306");
var requireObjectCoercible = require("d7c6ba4f404b5360");
var iterate = require("ff883ec9010d6328");
var MapHelpers = require("f9f796f22480c881");
var IS_PURE = require("dc5cfe657d3f962b");
var fails = require("59f5d275c85c76");
var Map = MapHelpers.Map;
var has = MapHelpers.has;
var get = MapHelpers.get;
var set = MapHelpers.set;
var push = uncurryThis([].push);
var DOES_NOT_WORK_WITH_PRIMITIVES = IS_PURE || fails(function() {
    return Map.groupBy("ab", function(it) {
        return it;
    }).get("a").length !== 1;
});
// `Map.groupBy` method
// https://github.com/tc39/proposal-array-grouping
$({
    target: "Map",
    stat: true,
    forced: IS_PURE || DOES_NOT_WORK_WITH_PRIMITIVES
}, {
    groupBy: function groupBy(items, callbackfn) {
        requireObjectCoercible(items);
        aCallable(callbackfn);
        var map = new Map();
        var k = 0;
        iterate(items, function(value) {
            var key = callbackfn(value, k++);
            if (!has(map, key)) set(map, key, [
                value
            ]);
            else push(get(map, key), value);
        });
        return map;
    }
});

},{"6567f4dade5d8960":"dIGt4","f35d7393646ad055":"7GlkT","c4503f7eb1018306":"gOMir","d7c6ba4f404b5360":"fOR0B","ff883ec9010d6328":"4OXGm","f9f796f22480c881":"f9Wim","dc5cfe657d3f962b":"5ZsyC","59f5d275c85c76":"hL6D2"}],"dIGt4":[function(require,module,exports) {
"use strict";
var global = require("6643b6592ad59b23");
var getOwnPropertyDescriptor = require("2ec751f39e500b85").f;
var createNonEnumerableProperty = require("b4567636b28a3b3a");
var defineBuiltIn = require("50460aa43dd4048a");
var defineGlobalProperty = require("581238c99f8c2c30");
var copyConstructorProperties = require("566a383894c688bc");
var isForced = require("f0e2e697f04e8ad9");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = global[TARGET] && global[TARGET].prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"6643b6592ad59b23":"i8HOC","2ec751f39e500b85":"lk5NI","b4567636b28a3b3a":"8CL42","50460aa43dd4048a":"6XwEX","581238c99f8c2c30":"ggjnO","566a383894c688bc":"9Z12i","f0e2e697f04e8ad9":"6uTCZ"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof this == "object" && this) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"lk5NI":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("c04e6fb248689dba");
var call = require("553ec943aa2a4554");
var propertyIsEnumerableModule = require("bbc5e69071aa2fbd");
var createPropertyDescriptor = require("1d2ffbfd99e01f41");
var toIndexedObject = require("c4ea69a78a643d87");
var toPropertyKey = require("8ab18ff766aa2ab9");
var hasOwn = require("3761c5d34b7aa48f");
var IE8_DOM_DEFINE = require("c4dfcc26308f1b4a");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"c04e6fb248689dba":"92ZIi","553ec943aa2a4554":"d7JlP","bbc5e69071aa2fbd":"7SuiS","1d2ffbfd99e01f41":"1lpav","c4ea69a78a643d87":"jLWwQ","8ab18ff766aa2ab9":"5XWKd","3761c5d34b7aa48f":"gC2Q5","c4dfcc26308f1b4a":"qS9uN"}],"92ZIi":[function(require,module,exports) {
"use strict";
var fails = require("735b783268fd06c0");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});

},{"735b783268fd06c0":"hL6D2"}],"hL6D2":[function(require,module,exports) {
"use strict";
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"d7JlP":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("44e025d030d66023");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"44e025d030d66023":"i16Dq"}],"i16Dq":[function(require,module,exports) {
"use strict";
var fails = require("2642aa7619056f20");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"2642aa7619056f20":"hL6D2"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"1lpav":[function(require,module,exports) {
"use strict";
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"jLWwQ":[function(require,module,exports) {
"use strict";
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("9d8f8f50ac9468eb");
var requireObjectCoercible = require("f7224aed72953ac4");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"9d8f8f50ac9468eb":"kPk5h","f7224aed72953ac4":"fOR0B"}],"kPk5h":[function(require,module,exports) {
"use strict";
var uncurryThis = require("7ba7e65983d7b662");
var fails = require("df551e12a7c872dd");
var classof = require("1d34ea813cebff9c");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === "String" ? split(it, "") : $Object(it);
} : $Object;

},{"7ba7e65983d7b662":"7GlkT","df551e12a7c872dd":"hL6D2","1d34ea813cebff9c":"bdfmm"}],"7GlkT":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("829dd7a4e960cf9e");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"829dd7a4e960cf9e":"i16Dq"}],"bdfmm":[function(require,module,exports) {
"use strict";
var uncurryThis = require("1c71c3f6daac476c");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"1c71c3f6daac476c":"7GlkT"}],"fOR0B":[function(require,module,exports) {
"use strict";
var isNullOrUndefined = require("74607922ed30019f");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
};

},{"74607922ed30019f":"gM5ar"}],"gM5ar":[function(require,module,exports) {
"use strict";
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"5XWKd":[function(require,module,exports) {
"use strict";
var toPrimitive = require("53a3a67ac381c4e8");
var isSymbol = require("b992ca9cdcf7937b");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"53a3a67ac381c4e8":"a2mK1","b992ca9cdcf7937b":"4aV4F"}],"a2mK1":[function(require,module,exports) {
"use strict";
var call = require("70235907dc93b4b0");
var isObject = require("46fb53dace408c8e");
var isSymbol = require("677bdc4d74d2f983");
var getMethod = require("80395bcde336a28b");
var ordinaryToPrimitive = require("49552a7324952190");
var wellKnownSymbol = require("aea01c71276624bf");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"70235907dc93b4b0":"d7JlP","46fb53dace408c8e":"Z0pBo","677bdc4d74d2f983":"4aV4F","80395bcde336a28b":"9Zfiw","49552a7324952190":"7MME2","aea01c71276624bf":"gTwyA"}],"Z0pBo":[function(require,module,exports) {
"use strict";
var isCallable = require("f87cee1cb79cbcca");
module.exports = function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"f87cee1cb79cbcca":"l3Kyn"}],"l3Kyn":[function(require,module,exports) {
"use strict";
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == "object" && document.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == "undefined" && documentAll !== undefined ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{}],"4aV4F":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("6b6c481cdfb7df35");
var isCallable = require("2af44fcbdbf14c83");
var isPrototypeOf = require("76e903e830c40e7c");
var USE_SYMBOL_AS_UID = require("7e2fe930b3598e22");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"6b6c481cdfb7df35":"6ZUSY","2af44fcbdbf14c83":"l3Kyn","76e903e830c40e7c":"3jtKQ","7e2fe930b3598e22":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
"use strict";
var global = require("dd9e9ae04e8684f7");
var isCallable = require("f1d62079325906cb");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"dd9e9ae04e8684f7":"i8HOC","f1d62079325906cb":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
"use strict";
var uncurryThis = require("83f14842ef67e16a");
module.exports = uncurryThis({}.isPrototypeOf);

},{"83f14842ef67e16a":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("da4a972af0214ea0");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"da4a972af0214ea0":"8KyTD"}],"8KyTD":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("ecc4d354cb42bea8");
var fails = require("b37df495bcdc1d99");
var global = require("d8adff9188ad5fee");
var $String = global.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol("symbol detection");
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"ecc4d354cb42bea8":"bjFlO","b37df495bcdc1d99":"hL6D2","d8adff9188ad5fee":"i8HOC"}],"bjFlO":[function(require,module,exports) {
"use strict";
var global = require("705d79ce07ed8cf");
var userAgent = require("5afb83a49cd74e4c");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"705d79ce07ed8cf":"i8HOC","5afb83a49cd74e4c":"73xBt"}],"73xBt":[function(require,module,exports) {
"use strict";
module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";

},{}],"9Zfiw":[function(require,module,exports) {
"use strict";
var aCallable = require("bbfed17b24e215f4");
var isNullOrUndefined = require("492a86e2970f6a26");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"bbfed17b24e215f4":"gOMir","492a86e2970f6a26":"gM5ar"}],"gOMir":[function(require,module,exports) {
"use strict";
var isCallable = require("4094667126ecac05");
var tryToString = require("fce2a7573db493fa");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + " is not a function");
};

},{"4094667126ecac05":"l3Kyn","fce2a7573db493fa":"4O7d7"}],"4O7d7":[function(require,module,exports) {
"use strict";
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
"use strict";
var call = require("abe9ca006f56626e");
var isCallable = require("c96b3a89fec6248a");
var isObject = require("551615fda0214f1b");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
};

},{"abe9ca006f56626e":"d7JlP","c96b3a89fec6248a":"l3Kyn","551615fda0214f1b":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
"use strict";
var global = require("dbe74e87464035e3");
var shared = require("6a2cda01df6b4c79");
var hasOwn = require("dccc28ffa5beeb54");
var uid = require("48d6af1225853d44");
var NATIVE_SYMBOL = require("9f762329148684");
var USE_SYMBOL_AS_UID = require("1ce268781e409df2");
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"dbe74e87464035e3":"i8HOC","6a2cda01df6b4c79":"i1mHK","dccc28ffa5beeb54":"gC2Q5","48d6af1225853d44":"a3SEE","9f762329148684":"8KyTD","1ce268781e409df2":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
"use strict";
var store = require("84eeed9891aafe14");
module.exports = function(key, value) {
    return store[key] || (store[key] = value || {});
};

},{"84eeed9891aafe14":"l4ncH"}],"l4ncH":[function(require,module,exports) {
"use strict";
var IS_PURE = require("7b43004672b1879f");
var globalThis = require("8756de416b94afec");
var defineGlobalProperty = require("dfb72a1d809f7b02");
var SHARED = "__core-js_shared__";
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
(store.versions || (store.versions = [])).push({
    version: "3.37.0",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2024 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"7b43004672b1879f":"5ZsyC","8756de416b94afec":"i8HOC","dfb72a1d809f7b02":"ggjnO"}],"5ZsyC":[function(require,module,exports) {
"use strict";
module.exports = false;

},{}],"ggjnO":[function(require,module,exports) {
"use strict";
var global = require("70259c1dd4aa0e14");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"70259c1dd4aa0e14":"i8HOC"}],"gC2Q5":[function(require,module,exports) {
"use strict";
var uncurryThis = require("f5dcaa60a713971f");
var toObject = require("ab17c4f45fcf0841");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"f5dcaa60a713971f":"7GlkT","ab17c4f45fcf0841":"5cb35"}],"5cb35":[function(require,module,exports) {
"use strict";
var requireObjectCoercible = require("f45a7b5dcdc4a410");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"f45a7b5dcdc4a410":"fOR0B"}],"a3SEE":[function(require,module,exports) {
"use strict";
var uncurryThis = require("5da0fe4507da20a3");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"5da0fe4507da20a3":"7GlkT"}],"qS9uN":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("9b4278b13c076bf");
var fails = require("8aee5d88a5f9b6b5");
var createElement = require("1db4d60148afcf21");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a !== 7;
});

},{"9b4278b13c076bf":"92ZIi","8aee5d88a5f9b6b5":"hL6D2","1db4d60148afcf21":"4bOHl"}],"4bOHl":[function(require,module,exports) {
"use strict";
var global = require("f5891d48afd7ec83");
var isObject = require("824df78b2e007250");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"f5891d48afd7ec83":"i8HOC","824df78b2e007250":"Z0pBo"}],"8CL42":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("a8753383ef98ee18");
var definePropertyModule = require("189ab650b8f71085");
var createPropertyDescriptor = require("1168c8162aa30435");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"a8753383ef98ee18":"92ZIi","189ab650b8f71085":"iJR4w","1168c8162aa30435":"1lpav"}],"iJR4w":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("ca50eb9163928400");
var IE8_DOM_DEFINE = require("d482f9e5478795e8");
var V8_PROTOTYPE_DEFINE_BUG = require("b6ad7537efb06f4b");
var anObject = require("16365a73399e7fe7");
var toPropertyKey = require("fab1d366c47796d9");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"ca50eb9163928400":"92ZIi","d482f9e5478795e8":"qS9uN","b6ad7537efb06f4b":"ka1Un","16365a73399e7fe7":"4isCr","fab1d366c47796d9":"5XWKd"}],"ka1Un":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("b22a5a2de93e3ad2");
var fails = require("249a5b857c2dfccd");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype !== 42;
});

},{"b22a5a2de93e3ad2":"92ZIi","249a5b857c2dfccd":"hL6D2"}],"4isCr":[function(require,module,exports) {
"use strict";
var isObject = require("2b6c6258a0a6082f");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + " is not an object");
};

},{"2b6c6258a0a6082f":"Z0pBo"}],"6XwEX":[function(require,module,exports) {
"use strict";
var isCallable = require("99ee13632b3fa68");
var definePropertyModule = require("9ebb3e3004fccc0a");
var makeBuiltIn = require("f10cc812a3094053");
var defineGlobalProperty = require("d354802d852d9c2b");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"99ee13632b3fa68":"l3Kyn","9ebb3e3004fccc0a":"iJR4w","f10cc812a3094053":"cTB4k","d354802d852d9c2b":"ggjnO"}],"cTB4k":[function(require,module,exports) {
"use strict";
var uncurryThis = require("ca84677f1ebd1804");
var fails = require("13360f2842eba261");
var isCallable = require("103e488c0928755a");
var hasOwn = require("cbf9b0e0779cc368");
var DESCRIPTORS = require("3f2eb7efeae2f72b");
var CONFIGURABLE_FUNCTION_NAME = require("548b10f284264c72").CONFIGURABLE;
var inspectSource = require("358f00f3103bd55b");
var InternalStateModule = require("9b2ce14119fd2412");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis("".slice);
var replace = uncurryThis("".replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"ca84677f1ebd1804":"7GlkT","13360f2842eba261":"hL6D2","103e488c0928755a":"l3Kyn","cbf9b0e0779cc368":"gC2Q5","3f2eb7efeae2f72b":"92ZIi","548b10f284264c72":"l6Kgd","358f00f3103bd55b":"9jh7O","9b2ce14119fd2412":"7AMlF"}],"l6Kgd":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("8ad2bacb0e20b95c");
var hasOwn = require("4eabfd8f83afc9d5");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"8ad2bacb0e20b95c":"92ZIi","4eabfd8f83afc9d5":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
"use strict";
var uncurryThis = require("26e26db98367212e");
var isCallable = require("40ed9a4f6ae66648");
var store = require("485d48d6f4c6739e");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"26e26db98367212e":"7GlkT","40ed9a4f6ae66648":"l3Kyn","485d48d6f4c6739e":"l4ncH"}],"7AMlF":[function(require,module,exports) {
"use strict";
var NATIVE_WEAK_MAP = require("d3f0c9f3327b2fd6");
var global = require("ca46b44b6201ccd7");
var isObject = require("f82e6cc0ac249fa5");
var createNonEnumerableProperty = require("c0ae163eea4ef97");
var hasOwn = require("6dea7358344877bb");
var shared = require("3e035a1241da2f0");
var sharedKey = require("88d6ccc27e779e5a");
var hiddenKeys = require("d40b9b3abdbb956e");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"d3f0c9f3327b2fd6":"2PZTl","ca46b44b6201ccd7":"i8HOC","f82e6cc0ac249fa5":"Z0pBo","c0ae163eea4ef97":"8CL42","6dea7358344877bb":"gC2Q5","3e035a1241da2f0":"l4ncH","88d6ccc27e779e5a":"eAjGz","d40b9b3abdbb956e":"661m4"}],"2PZTl":[function(require,module,exports) {
"use strict";
var global = require("6bd2547a42528a9c");
var isCallable = require("aa77fff8d5ef0565");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"6bd2547a42528a9c":"i8HOC","aa77fff8d5ef0565":"l3Kyn"}],"eAjGz":[function(require,module,exports) {
"use strict";
var shared = require("dbc8182adeb8c92f");
var uid = require("90b4ffb58508a6e5");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"dbc8182adeb8c92f":"i1mHK","90b4ffb58508a6e5":"a3SEE"}],"661m4":[function(require,module,exports) {
"use strict";
module.exports = {};

},{}],"9Z12i":[function(require,module,exports) {
"use strict";
var hasOwn = require("d91d786cc71453ce");
var ownKeys = require("88cb809f98beddc6");
var getOwnPropertyDescriptorModule = require("10ea642aad5f7c21");
var definePropertyModule = require("39ff598ce822187e");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"d91d786cc71453ce":"gC2Q5","88cb809f98beddc6":"1CX1A","10ea642aad5f7c21":"lk5NI","39ff598ce822187e":"iJR4w"}],"1CX1A":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("3cc1e4329d869e34");
var uncurryThis = require("2b8e77cbdbe3db7a");
var getOwnPropertyNamesModule = require("d703bcb62fcda216");
var getOwnPropertySymbolsModule = require("157674bad2772c6d");
var anObject = require("a09e060b9cae3c6c");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"3cc1e4329d869e34":"6ZUSY","2b8e77cbdbe3db7a":"7GlkT","d703bcb62fcda216":"fjY04","157674bad2772c6d":"4DWO3","a09e060b9cae3c6c":"4isCr"}],"fjY04":[function(require,module,exports) {
"use strict";
var internalObjectKeys = require("6d8591e17a49376c");
var enumBugKeys = require("2c933f93dd98f385");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"6d8591e17a49376c":"hl5T1","2c933f93dd98f385":"9RnJm"}],"hl5T1":[function(require,module,exports) {
"use strict";
var uncurryThis = require("363ee0e6bb4f46a7");
var hasOwn = require("3183fe0b0bf6f6ac");
var toIndexedObject = require("28192ac12e934672");
var indexOf = require("a5f9c5d8e993ccd6").indexOf;
var hiddenKeys = require("57775908f1581bc6");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"363ee0e6bb4f46a7":"7GlkT","3183fe0b0bf6f6ac":"gC2Q5","28192ac12e934672":"jLWwQ","a5f9c5d8e993ccd6":"n5IsC","57775908f1581bc6":"661m4"}],"n5IsC":[function(require,module,exports) {
"use strict";
var toIndexedObject = require("d5dcbcd68ac5acd0");
var toAbsoluteIndex = require("212b13aecfa48226");
var lengthOfArrayLike = require("e5a8b3e1da4c5637");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"d5dcbcd68ac5acd0":"jLWwQ","212b13aecfa48226":"5yh27","e5a8b3e1da4c5637":"lY4mS"}],"5yh27":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("72fe0a53ad43912c");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"72fe0a53ad43912c":"kLXGe"}],"kLXGe":[function(require,module,exports) {
"use strict";
var trunc = require("3403cba02b5f61d8");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"3403cba02b5f61d8":"7O8gb"}],"7O8gb":[function(require,module,exports) {
"use strict";
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
"use strict";
var toLength = require("23d9716c54a2ab90");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"23d9716c54a2ab90":"fU04N"}],"fU04N":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("c48d3a8b8ac52b0b");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"c48d3a8b8ac52b0b":"kLXGe"}],"9RnJm":[function(require,module,exports) {
"use strict";
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
"use strict";
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
"use strict";
var fails = require("10299561ea0c7870");
var isCallable = require("8b1ecdaf59f07210");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"10299561ea0c7870":"hL6D2","8b1ecdaf59f07210":"l3Kyn"}],"4OXGm":[function(require,module,exports) {
"use strict";
var bind = require("2f267ed50e670495");
var call = require("c0af58bb1ef1cc62");
var anObject = require("7fa6542c03ca9239");
var tryToString = require("fa596d1a4c07b72a");
var isArrayIteratorMethod = require("fd753cc641a6f10a");
var lengthOfArrayLike = require("2a15dee148d3db96");
var isPrototypeOf = require("417f9a13deeb58a6");
var getIterator = require("43af53be1b24dae5");
var getIteratorMethod = require("bf7ad32b21aed0b4");
var iteratorClose = require("5241389e1d6eeb73");
var $TypeError = TypeError;
var Result = function(stopped, result) {
    this.stopped = stopped;
    this.result = result;
};
var ResultPrototype = Result.prototype;
module.exports = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function(condition) {
        if (iterator) iteratorClose(iterator, "normal", condition);
        return new Result(true, condition);
    };
    var callFn = function(value) {
        if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_RECORD) iterator = iterable.iterator;
    else if (IS_ITERATOR) iterator = iterable;
    else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
            for(index = 0, length = lengthOfArrayLike(iterable); length > index; index++){
                result = callFn(iterable[index]);
                if (result && isPrototypeOf(ResultPrototype, result)) return result;
            }
            return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
    }
    next = IS_RECORD ? iterable.next : iterator.next;
    while(!(step = call(next, iterator)).done){
        try {
            result = callFn(step.value);
        } catch (error) {
            iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
    }
    return new Result(false);
};

},{"2f267ed50e670495":"7vpmS","c0af58bb1ef1cc62":"d7JlP","7fa6542c03ca9239":"4isCr","fa596d1a4c07b72a":"4O7d7","fd753cc641a6f10a":"l33Z9","2a15dee148d3db96":"lY4mS","417f9a13deeb58a6":"3jtKQ","43af53be1b24dae5":"hjwee","bf7ad32b21aed0b4":"d8BiC","5241389e1d6eeb73":"hs7nW"}],"7vpmS":[function(require,module,exports) {
"use strict";
var uncurryThis = require("92f6f475baa85665");
var aCallable = require("547ee4f9dab0cc76");
var NATIVE_BIND = require("5acd31cba656d393");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"92f6f475baa85665":"5Hioa","547ee4f9dab0cc76":"gOMir","5acd31cba656d393":"i16Dq"}],"5Hioa":[function(require,module,exports) {
"use strict";
var classofRaw = require("8e77093015e1e67f");
var uncurryThis = require("9daa4dbbca634c9e");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"8e77093015e1e67f":"bdfmm","9daa4dbbca634c9e":"7GlkT"}],"l33Z9":[function(require,module,exports) {
"use strict";
var wellKnownSymbol = require("85b004b6ab4bc5da");
var Iterators = require("6de391ad2976ca02");
var ITERATOR = wellKnownSymbol("iterator");
var ArrayPrototype = Array.prototype;
// check on default Array iterator
module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"85b004b6ab4bc5da":"gTwyA","6de391ad2976ca02":"30XHR"}],"30XHR":[function(require,module,exports) {
"use strict";
module.exports = {};

},{}],"hjwee":[function(require,module,exports) {
"use strict";
var call = require("132ebf774107ae29");
var aCallable = require("e248489b4825ceb7");
var anObject = require("18a343d2ef625577");
var tryToString = require("7e576a1564cef99e");
var getIteratorMethod = require("4a7b0311be0471b2");
var $TypeError = TypeError;
module.exports = function(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
    throw new $TypeError(tryToString(argument) + " is not iterable");
};

},{"132ebf774107ae29":"d7JlP","e248489b4825ceb7":"gOMir","18a343d2ef625577":"4isCr","7e576a1564cef99e":"4O7d7","4a7b0311be0471b2":"d8BiC"}],"d8BiC":[function(require,module,exports) {
"use strict";
var classof = require("32d61dafd81dde78");
var getMethod = require("84e24a6ac7559d3a");
var isNullOrUndefined = require("f0707282c0d93eeb");
var Iterators = require("1c181d5c49efd5d1");
var wellKnownSymbol = require("d10d0e0ae49498c5");
var ITERATOR = wellKnownSymbol("iterator");
module.exports = function(it) {
    if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
};

},{"32d61dafd81dde78":"dKT7A","84e24a6ac7559d3a":"9Zfiw","f0707282c0d93eeb":"gM5ar","1c181d5c49efd5d1":"30XHR","d10d0e0ae49498c5":"gTwyA"}],"dKT7A":[function(require,module,exports) {
"use strict";
var TO_STRING_TAG_SUPPORT = require("397e535b3976d304");
var isCallable = require("eebd8012c2d2c3ae");
var classofRaw = require("8da113eeaf06c4ba");
var wellKnownSymbol = require("df252844008f634");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var $Object = Object;
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
}()) === "Arguments";
// fallback for IE11 Script Access Denied error
var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (error) {}
};
// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
    var O, tag, result;
    return it === undefined ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
};

},{"397e535b3976d304":"3Do6Z","eebd8012c2d2c3ae":"l3Kyn","8da113eeaf06c4ba":"bdfmm","df252844008f634":"gTwyA"}],"3Do6Z":[function(require,module,exports) {
"use strict";
var wellKnownSymbol = require("6306cd4835715127");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var test = {};
test[TO_STRING_TAG] = "z";
module.exports = String(test) === "[object z]";

},{"6306cd4835715127":"gTwyA"}],"hs7nW":[function(require,module,exports) {
"use strict";
var call = require("a4a3a7d4a45c4219");
var anObject = require("feb876e7da2df7bd");
var getMethod = require("2e660cdfabd9c61f");
module.exports = function(iterator, kind, value) {
    var innerResult, innerError;
    anObject(iterator);
    try {
        innerResult = getMethod(iterator, "return");
        if (!innerResult) {
            if (kind === "throw") throw value;
            return value;
        }
        innerResult = call(innerResult, iterator);
    } catch (error) {
        innerError = true;
        innerResult = error;
    }
    if (kind === "throw") throw value;
    if (innerError) throw innerResult;
    anObject(innerResult);
    return value;
};

},{"a4a3a7d4a45c4219":"d7JlP","feb876e7da2df7bd":"4isCr","2e660cdfabd9c61f":"9Zfiw"}],"f9Wim":[function(require,module,exports) {
"use strict";
var uncurryThis = require("89734044d2e98b8d");
// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;
module.exports = {
    // eslint-disable-next-line es/no-map -- safe
    Map: Map,
    set: uncurryThis(MapPrototype.set),
    get: uncurryThis(MapPrototype.get),
    has: uncurryThis(MapPrototype.has),
    remove: uncurryThis(MapPrototype["delete"]),
    proto: MapPrototype
};

},{"89734044d2e98b8d":"7GlkT"}],"b9ez5":[function(require,module,exports) {
"use strict";
var global = require("c050e94c4f6437d6");
var defineWellKnownSymbol = require("efe796c38aca437b");
var defineProperty = require("d6dbf5d754dc3607").f;
var getOwnPropertyDescriptor = require("9075339d618418b3").f;
var Symbol = global.Symbol;
// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-explicit-resource-management
defineWellKnownSymbol("dispose");
if (Symbol) {
    var descriptor = getOwnPropertyDescriptor(Symbol, "dispose");
    // workaround of NodeJS 20.4 bug
    // https://github.com/nodejs/node/issues/48699
    // and incorrect descriptor from some transpilers and userland helpers
    if (descriptor.enumerable && descriptor.configurable && descriptor.writable) defineProperty(Symbol, "dispose", {
        value: descriptor.value,
        enumerable: false,
        configurable: false,
        writable: false
    });
}

},{"c050e94c4f6437d6":"i8HOC","efe796c38aca437b":"en5fF","d6dbf5d754dc3607":"iJR4w","9075339d618418b3":"lk5NI"}],"en5fF":[function(require,module,exports) {
"use strict";
var path = require("8d5159b7d317832f");
var hasOwn = require("42a3ea18819bfbb");
var wrappedWellKnownSymbolModule = require("7ec639749e279eeb");
var defineProperty = require("cbbe4becefd5c21c").f;
module.exports = function(NAME) {
    var Symbol = path.Symbol || (path.Symbol = {});
    if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
        value: wrappedWellKnownSymbolModule.f(NAME)
    });
};

},{"8d5159b7d317832f":"gKjqB","42a3ea18819bfbb":"gC2Q5","7ec639749e279eeb":"9TrPc","cbbe4becefd5c21c":"iJR4w"}],"gKjqB":[function(require,module,exports) {
"use strict";
var global = require("70f8eb6067a24c7e");
module.exports = global;

},{"70f8eb6067a24c7e":"i8HOC"}],"9TrPc":[function(require,module,exports) {
"use strict";
var wellKnownSymbol = require("2e34ececd06658d9");
exports.f = wellKnownSymbol;

},{"2e34ececd06658d9":"gTwyA"}],"49tUX":[function(require,module,exports) {
"use strict";
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("52e9b3eefbbce1ed");
require("292fa64716f5b39e");

},{"52e9b3eefbbce1ed":"fOGFr","292fa64716f5b39e":"l7FDS"}],"fOGFr":[function(require,module,exports) {
"use strict";
var $ = require("79389288a80b279c");
var global = require("22a078687be7e1b6");
var clearImmediate = require("84ba5ca62b8b14c9").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"79389288a80b279c":"dIGt4","22a078687be7e1b6":"i8HOC","84ba5ca62b8b14c9":"7jDg7"}],"7jDg7":[function(require,module,exports) {
"use strict";
var global = require("1e8ed58235e9956a");
var apply = require("e574be68c288c7c8");
var bind = require("df212787338802d3");
var isCallable = require("afdf018c2d01bbc6");
var hasOwn = require("35a3e849940fd612");
var fails = require("b8bf5434d2248ca7");
var html = require("731f9370cc21fc3b");
var arraySlice = require("ec358060964e4bde");
var createElement = require("907adb6d219da7a3");
var validateArgumentsLength = require("f398561ebd49a798");
var IS_IOS = require("fdfdeccf85e81d4f");
var IS_NODE = require("fcf929779abbf29c");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        global.addEventListener("message", eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"1e8ed58235e9956a":"i8HOC","e574be68c288c7c8":"148ka","df212787338802d3":"7vpmS","afdf018c2d01bbc6":"l3Kyn","35a3e849940fd612":"gC2Q5","b8bf5434d2248ca7":"hL6D2","731f9370cc21fc3b":"2pze4","ec358060964e4bde":"RsFXo","907adb6d219da7a3":"4bOHl","f398561ebd49a798":"b9O3D","fdfdeccf85e81d4f":"bzGah","fcf929779abbf29c":"2Jcp4"}],"148ka":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("d07466971ded2aca");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"d07466971ded2aca":"i16Dq"}],"2pze4":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("14cb391fa4a0dda8");
module.exports = getBuiltIn("document", "documentElement");

},{"14cb391fa4a0dda8":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
"use strict";
var uncurryThis = require("5250b5c9324ccbe");
module.exports = uncurryThis([].slice);

},{"5250b5c9324ccbe":"7GlkT"}],"b9O3D":[function(require,module,exports) {
"use strict";
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw new $TypeError("Not enough arguments");
    return passed;
};

},{}],"bzGah":[function(require,module,exports) {
"use strict";
var userAgent = require("d96985a79ddda108");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"d96985a79ddda108":"73xBt"}],"2Jcp4":[function(require,module,exports) {
"use strict";
var global = require("1b4555a3a97d5ef1");
var classof = require("779f783a397f138");
module.exports = classof(global.process) === "process";

},{"1b4555a3a97d5ef1":"i8HOC","779f783a397f138":"bdfmm"}],"l7FDS":[function(require,module,exports) {
"use strict";
var $ = require("33581c362196ed1f");
var global = require("9a84e40db4964af6");
var setTask = require("4219ce460223bd08").set;
var schedulersFix = require("738dc378e6a94c64");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"33581c362196ed1f":"dIGt4","9a84e40db4964af6":"i8HOC","4219ce460223bd08":"7jDg7","738dc378e6a94c64":"cAPb6"}],"cAPb6":[function(require,module,exports) {
"use strict";
var global = require("373dd417176da2c5");
var apply = require("a68ecfcbf29c46f6");
var isCallable = require("7087588d33667af2");
var ENGINE_IS_BUN = require("7679d27a979f2651");
var USER_AGENT = require("7493ba8d8bb8623d");
var arraySlice = require("cff2c830bdea4f24");
var validateArgumentsLength = require("58a74f00cee1ac64");
var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
    var version = global.Bun.version.split(".");
    return version.length < 3 || version[0] === "0" && (version[1] < 3 || version[1] === "3" && version[2] === "0");
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"373dd417176da2c5":"i8HOC","a68ecfcbf29c46f6":"148ka","7087588d33667af2":"l3Kyn","7679d27a979f2651":"2BA6V","7493ba8d8bb8623d":"73xBt","cff2c830bdea4f24":"RsFXo","58a74f00cee1ac64":"b9O3D"}],"2BA6V":[function(require,module,exports) {
"use strict";
/* global Bun -- Bun case */ module.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";

},{}],"i4OI0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "log", ()=>log);
parcelHelpers.export(exports, "trace", ()=>trace);
/**
 * A simple tracer class, that can be used to avoid repetition when using the `trace` function
 *
 * Its goal is to capture more context than a log function.
 * This is simple for now, but can be improved later.
 *
 * @param type A given type (not level) for the current local tracer ("hw", "withDevice", etc.)
 * @param context Anything representing the context where the log occurred
 */ parcelHelpers.export(exports, "LocalTracer", ()=>LocalTracer);
parcelHelpers.export(exports, "listen", ()=>listen);
let id = 0;
const subscribers = [];
const log = (type, message, data)=>{
    const obj = {
        type,
        id: String(++id),
        date: new Date()
    };
    if (message) obj.message = message;
    if (data) obj.data = data;
    dispatch(obj);
};
const trace = ({ type, message, data, context })=>{
    const obj = {
        type,
        id: String(++id),
        date: new Date()
    };
    if (message) obj.message = message;
    if (data) obj.data = data;
    if (context) obj.context = context;
    dispatch(obj);
};
class LocalTracer {
    constructor(type, context){
        this.type = type;
        this.context = context;
    }
    trace(message, data) {
        trace({
            type: this.type,
            message,
            data,
            context: this.context
        });
    }
    getContext() {
        return this.context;
    }
    setContext(context) {
        this.context = context;
    }
    updateContext(contextToAdd) {
        this.context = Object.assign(Object.assign({}, this.context), contextToAdd);
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    /**
     * Create a new instance of the LocalTracer with an updated `type`
     *
     * It does not mutate the calling instance, but returns a new LocalTracer,
     * following a simple builder pattern.
     */ withType(type) {
        return new LocalTracer(type, this.context);
    }
    /**
     * Create a new instance of the LocalTracer with a new `context`
     *
     * It does not mutate the calling instance, but returns a new LocalTracer,
     * following a simple builder pattern.
     *
     * @param context A TraceContext, that can undefined to reset the context
     */ withContext(context) {
        return new LocalTracer(this.type, context);
    }
    /**
     * Create a new instance of the LocalTracer with an updated `context`,
     * on which an additional context is merged with the existing one.
     *
     * It does not mutate the calling instance, but returns a new LocalTracer,
     * following a simple builder pattern.
     */ withUpdatedContext(contextToAdd) {
        return new LocalTracer(this.type, Object.assign(Object.assign({}, this.context), contextToAdd));
    }
}
const listen = (cb)=>{
    subscribers.push(cb);
    return ()=>{
        const i = subscribers.indexOf(cb);
        if (i !== -1) {
            // equivalent of subscribers.splice(i, 1) // https://twitter.com/Rich_Harris/status/1125850391155965952
            subscribers[i] = subscribers[subscribers.length - 1];
            subscribers.pop();
        }
    };
};
function dispatch(log) {
    for(let i = 0; i < subscribers.length; i++)try {
        subscribers[i](log);
    } catch (e) {
        console.error(e);
    }
}
if (typeof window !== "undefined") window.__ledgerLogsListen = listen;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"c7CZM":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WalletPolicy = exports.DefaultWalletPolicy = exports.PsbtV2 = exports.AppClient = void 0;
const appClient_1 = __importDefault(require("1eafe61da3cdeda9"));
exports.AppClient = appClient_1.default;
const policy_1 = require("612916e8fbd850e9");
Object.defineProperty(exports, "DefaultWalletPolicy", {
    enumerable: true,
    get: function() {
        return policy_1.DefaultWalletPolicy;
    }
});
Object.defineProperty(exports, "WalletPolicy", {
    enumerable: true,
    get: function() {
        return policy_1.WalletPolicy;
    }
});
const psbtv2_1 = require("4d72def3e863c189");
Object.defineProperty(exports, "PsbtV2", {
    enumerable: true,
    get: function() {
        return psbtv2_1.PsbtV2;
    }
});
exports.default = appClient_1.default;

},{"1eafe61da3cdeda9":"6zQVE","612916e8fbd850e9":"2et2j","4d72def3e863c189":"dYnvX"}],"6zQVE":[function(require,module,exports) {
var Buffer = require("ce9066453017aad2").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppClient = exports.PartialSignature = void 0;
const bip32_1 = require("9b8362773da84731");
const clientCommands_1 = require("37008d268d268cdd");
const merkelizedPsbt_1 = require("b17473c9906eda6d");
const merkle_1 = require("e1359b81afe1b622");
const psbtv2_1 = require("129efb055a5bbfec");
const varint_1 = require("7eb2b57cabfc197a");
const CLA_BTC = 0xe1;
const CLA_FRAMEWORK = 0xf8;
const CURRENT_PROTOCOL_VERSION = 1; // supported from version 2.1.0 of the app
var BitcoinIns;
(function(BitcoinIns) {
    BitcoinIns[BitcoinIns["GET_PUBKEY"] = 0] = "GET_PUBKEY";
    BitcoinIns[BitcoinIns["REGISTER_WALLET"] = 2] = "REGISTER_WALLET";
    BitcoinIns[BitcoinIns["GET_WALLET_ADDRESS"] = 3] = "GET_WALLET_ADDRESS";
    BitcoinIns[BitcoinIns["SIGN_PSBT"] = 4] = "SIGN_PSBT";
    BitcoinIns[BitcoinIns["GET_MASTER_FINGERPRINT"] = 5] = "GET_MASTER_FINGERPRINT";
    BitcoinIns[BitcoinIns["SIGN_MESSAGE"] = 16] = "SIGN_MESSAGE";
})(BitcoinIns || (BitcoinIns = {}));
var FrameworkIns;
(function(FrameworkIns) {
    FrameworkIns[FrameworkIns["CONTINUE_INTERRUPTED"] = 1] = "CONTINUE_INTERRUPTED";
})(FrameworkIns || (FrameworkIns = {}));
/**
 * This class represents a partial signature produced by the app during signing.
 * It always contains the `signature` and the corresponding `pubkey` whose private key
 * was used for signing; in the case of taproot script paths, it also contains the
 * tapleaf hash.
 */ class PartialSignature {
    constructor(pubkey, signature, tapleafHash){
        this.pubkey = pubkey;
        this.signature = signature;
        this.tapleafHash = tapleafHash;
    }
}
exports.PartialSignature = PartialSignature;
/**
 * Creates an instance of `PartialSignature` from the returned raw augmented pubkey and signature.
 * @param pubkeyAugm the public key, concatenated with the tapleaf hash in the case of taproot script path spend.
 * @param signature the signature
 * @returns an instance of `PartialSignature`.
 */ function makePartialSignature(pubkeyAugm, signature) {
    if (pubkeyAugm.length == 64) // tapscript spend: concatenation of 32-bytes x-only pubkey and 32-bytes tapleaf_hash
    return new PartialSignature(pubkeyAugm.slice(0, 32), signature, pubkeyAugm.slice(32, 64));
    else if (pubkeyAugm.length == 32 || pubkeyAugm.length == 33) // legacy, segwit or taproot keypath spend: pubkeyAugm is just the pubkey
    return new PartialSignature(pubkeyAugm, signature);
    else throw new Error(`Invalid length for pubkeyAugm: ${pubkeyAugm.length} bytes.`);
}
/**
 * Checks whether a descriptor template contains an `a:` fragment.
 */ function containsA(descriptorTemplate) {
    const matches = descriptorTemplate.match(/[asctdvjnlu]+:/g) || [];
    return matches.some((match)=>match.includes("a"));
}
/**
 * This class encapsulates the APDU protocol documented at
 * https://github.com/LedgerHQ/app-bitcoin-new/blob/master/doc/bitcoin.md
 */ class AppClient {
    constructor(transport){
        this.transport = transport;
    }
    async makeRequest(ins, data, cci) {
        let response = await this.transport.send(CLA_BTC, ins, 0, CURRENT_PROTOCOL_VERSION, data, [
            0x9000,
            0xe000
        ]);
        while(response.readUInt16BE(response.length - 2) === 0xe000){
            if (!cci) throw new Error("Unexpected SW_INTERRUPTED_EXECUTION");
            const hwRequest = response.slice(0, -2);
            const commandResponse = cci.execute(hwRequest);
            response = await this.transport.send(CLA_FRAMEWORK, FrameworkIns.CONTINUE_INTERRUPTED, 0, 0, commandResponse, [
                0x9000,
                0xe000
            ]);
        }
        return response.slice(0, -2); // drop the status word (can only be 0x9000 at this point)
    }
    /**
     * Returns an object containing the currently running app's name, version and the device status flags.
     *
     * @returns an object with app name, version and device status flags.
     */ async getAppAndVersion() {
        const r = await this.transport.send(0xb0, 0x01, 0x00, 0x00);
        let i = 0;
        const format = r[i++];
        if (format !== 1) throw new Error("Unexpected response");
        const nameLength = r[i++];
        const name = r.slice(i, i += nameLength).toString("ascii");
        const versionLength = r[i++];
        const version = r.slice(i, i += versionLength).toString("ascii");
        const flagLength = r[i++];
        const flags = r.slice(i, i += flagLength);
        return {
            name,
            version,
            flags
        };
    }
    /**
     * Requests the BIP-32 extended pubkey to the hardware wallet.
     * If `display` is `false`, only standard paths will be accepted; an error is returned if an unusual path is
     * requested.
     * If `display` is `true`, the requested path is shown on screen for user verification; unusual paths can be
     * requested, and a warning is shown to the user in that case.
     *
     * @param path the requested BIP-32 path as a string
     * @param display `false` to silently retrieve a pubkey for a standard path, `true` to display the path on screen
     * @returns the base58-encoded serialized extended pubkey (xpub)
     */ async getExtendedPubkey(path, display = false) {
        const pathElements = (0, bip32_1.pathStringToArray)(path);
        if (pathElements.length > 6) throw new Error("Path too long. At most 6 levels allowed.");
        const response = await this.makeRequest(BitcoinIns.GET_PUBKEY, Buffer.concat([
            Buffer.from(display ? [
                1
            ] : [
                0
            ]),
            (0, bip32_1.pathElementsToBuffer)(pathElements)
        ]));
        return response.toString("ascii");
    }
    /**
     * Registers a `WalletPolicy`, after interactive verification from the user.
     * On success, after user's approval, this function returns the id (which is the same that can be computed with
     * `walletPolicy.getid()`), followed by the 32-byte hmac. The client should store the hmac to use it for future
     * requests to `getWalletAddress` or `signPsbt` using this `WalletPolicy`.
     *
     * @param walletPolicy the `WalletPolicy` to register
     * @returns a pair of two 32-byte arrays: the id of the Wallet Policy, followed by the policy hmac
     */ async registerWallet(walletPolicy) {
        await this.validatePolicy(walletPolicy);
        const clientInterpreter = new clientCommands_1.ClientCommandInterpreter();
        clientInterpreter.addKnownWalletPolicy(walletPolicy);
        const serializedWalletPolicy = walletPolicy.serialize();
        const response = await this.makeRequest(BitcoinIns.REGISTER_WALLET, Buffer.concat([
            (0, varint_1.createVarint)(serializedWalletPolicy.length),
            serializedWalletPolicy
        ]), clientInterpreter);
        if (response.length != 64) throw Error(`Invalid response length. Expected 64 bytes, got ${response.length}`);
        return [
            response.subarray(0, 32),
            response.subarray(32)
        ];
    }
    /**
     * Returns the address of `walletPolicy` for the given `change` and `addressIndex`.
     *
     * @param walletPolicy the `WalletPolicy` to use
     * @param walletHMAC the 32-byte hmac returned during wallet registration for a registered policy; otherwise
     * `null` for a standard policy
     * @param change `0` for a normal receive address, `1` for a change address
     * @param addressIndex the address index to retrieve
     * @param display `True` to show the address on screen, `False` to retrieve it silently
     * @returns the address, as an ascii string.
     */ async getWalletAddress(walletPolicy, walletHMAC, change, addressIndex, display) {
        if (change !== 0 && change !== 1) throw new Error("Change can only be 0 or 1");
        if (addressIndex < 0 || !Number.isInteger(addressIndex)) throw new Error("Invalid address index");
        if (walletHMAC != null && walletHMAC.length != 32) throw new Error("Invalid HMAC length");
        await this.validatePolicy(walletPolicy);
        const clientInterpreter = new clientCommands_1.ClientCommandInterpreter();
        clientInterpreter.addKnownWalletPolicy(walletPolicy);
        const addressIndexBuffer = Buffer.alloc(4);
        addressIndexBuffer.writeUInt32BE(addressIndex, 0);
        const response = await this.makeRequest(BitcoinIns.GET_WALLET_ADDRESS, Buffer.concat([
            Buffer.from(display ? [
                1
            ] : [
                0
            ]),
            walletPolicy.getId(),
            walletHMAC || Buffer.alloc(32, 0),
            Buffer.from([
                change
            ]),
            addressIndexBuffer
        ]), clientInterpreter);
        return response.toString("ascii");
    }
    /**
     * Signs a psbt using a (standard or registered) `WalletPolicy`. This is an interactive command, as user validation
     * is necessary using the device's secure screen.
     * On success, a map of input indexes and signatures is returned.
     * @param psbt a base64-encoded string, or a psbt in a binary Buffer. Using the `PsbtV2` type is deprecated.
     * @param walletPolicy the `WalletPolicy` to use for signing
     * @param walletHMAC the 32-byte hmac obtained during wallet policy registration, or `null` for a standard policy
     * @param progressCallback optionally, a callback that will be called every time a signature is produced during
     * the signing process. The callback does not receive any argument, but can be used to track progress.
     * @returns an array of of tuples with 2 elements containing:
     *    - the index of the input being signed;
     *    - an instance of PartialSignature
     */ async signPsbt(psbt, walletPolicy, walletHMAC, progressCallback) {
        await this.validatePolicy(walletPolicy);
        if (typeof psbt === "string") psbt = Buffer.from(psbt, "base64");
        if (Buffer.isBuffer(psbt)) {
            const psbtObj = new psbtv2_1.PsbtV2();
            psbtObj.deserialize(psbt);
            psbt = psbtObj;
        }
        const merkelizedPsbt = new merkelizedPsbt_1.MerkelizedPsbt(psbt);
        if (walletHMAC != null && walletHMAC.length != 32) throw new Error("Invalid HMAC length");
        const clientInterpreter = new clientCommands_1.ClientCommandInterpreter(progressCallback);
        // prepare ClientCommandInterpreter
        clientInterpreter.addKnownWalletPolicy(walletPolicy);
        clientInterpreter.addKnownMapping(merkelizedPsbt.globalMerkleMap);
        for (const map of merkelizedPsbt.inputMerkleMaps)clientInterpreter.addKnownMapping(map);
        for (const map of merkelizedPsbt.outputMerkleMaps)clientInterpreter.addKnownMapping(map);
        clientInterpreter.addKnownList(merkelizedPsbt.inputMapCommitments);
        const inputMapsRoot = new merkle_1.Merkle(merkelizedPsbt.inputMapCommitments.map((m)=>(0, merkle_1.hashLeaf)(m))).getRoot();
        clientInterpreter.addKnownList(merkelizedPsbt.outputMapCommitments);
        const outputMapsRoot = new merkle_1.Merkle(merkelizedPsbt.outputMapCommitments.map((m)=>(0, merkle_1.hashLeaf)(m))).getRoot();
        await this.makeRequest(BitcoinIns.SIGN_PSBT, Buffer.concat([
            merkelizedPsbt.getGlobalKeysValuesRoot(),
            (0, varint_1.createVarint)(merkelizedPsbt.getGlobalInputCount()),
            inputMapsRoot,
            (0, varint_1.createVarint)(merkelizedPsbt.getGlobalOutputCount()),
            outputMapsRoot,
            walletPolicy.getId(),
            walletHMAC || Buffer.alloc(32, 0)
        ]), clientInterpreter);
        const yielded = clientInterpreter.getYielded();
        const ret = [];
        for (const inputAndSig of yielded){
            // inputAndSig contains:
            // <inputIndex : varint> <pubkeyLen : 1 byte> <pubkey : pubkeyLen bytes (32 or 33)> <signature : variable length>
            const [inputIndex, inputIndexLen] = (0, varint_1.parseVarint)(inputAndSig, 0);
            const pubkeyAugmLen = inputAndSig[inputIndexLen];
            const pubkeyAugm = inputAndSig.subarray(inputIndexLen + 1, inputIndexLen + 1 + pubkeyAugmLen);
            const signature = inputAndSig.subarray(inputIndexLen + 1 + pubkeyAugmLen);
            const partialSig = makePartialSignature(pubkeyAugm, signature);
            ret.push([
                Number(inputIndex),
                partialSig
            ]);
        }
        return ret;
    }
    /**
     * Returns the fingerprint of the master public key, as per BIP-32 standard.
     * @returns the master key fingerprint as a string of 8 hexadecimal digits.
     */ async getMasterFingerprint() {
        const fpr = await this.makeRequest(BitcoinIns.GET_MASTER_FINGERPRINT, Buffer.from([]));
        return fpr.toString("hex");
    }
    /**
     * Signs a message using the legacy Bitcoin Message Signing standard. The signed message is
     * the double-sha256 hash of the concatenation of:
     * - "\x18Bitcoin Signed Message:\n";
     * - the length of `message`, encoded as a Bitcoin-style variable length integer;
     * - `message`.
     *
     * @param message the serialized message to sign
     * @param path the BIP-32 path of the key used to sign the message
     * @returns base64-encoded signature of the message.
     */ async signMessage(message, path) {
        const pathElements = (0, bip32_1.pathStringToArray)(path);
        const clientInterpreter = new clientCommands_1.ClientCommandInterpreter();
        // prepare ClientCommandInterpreter
        const nChunks = Math.ceil(message.length / 64);
        const chunks = [];
        for(let i = 0; i < nChunks; i++)chunks.push(message.subarray(64 * i, 64 * i + 64));
        clientInterpreter.addKnownList(chunks);
        const chunksRoot = new merkle_1.Merkle(chunks.map((m)=>(0, merkle_1.hashLeaf)(m))).getRoot();
        const result = await this.makeRequest(BitcoinIns.SIGN_MESSAGE, Buffer.concat([
            (0, bip32_1.pathElementsToBuffer)(pathElements),
            (0, varint_1.createVarint)(message.length),
            chunksRoot
        ]), clientInterpreter);
        return result.toString("base64");
    }
    /* Performs any additional checks on the policy before using it.*/ async validatePolicy(walletPolicy) {
        if (containsA(walletPolicy.descriptorTemplate)) {
            const appAndVer = await this.getAppAndVersion();
            if ([
                "2.1.0",
                "2.1.1"
            ].includes(appAndVer.version)) // Versions 2.1.0 and 2.1.1 produced incorrect scripts for policies containing
            // the `a:` fragment.
            throw new Error("Please update your Ledger Bitcoin app.");
        }
    }
}
exports.AppClient = AppClient;
exports.default = AppClient;

},{"ce9066453017aad2":"fCgem","9b8362773da84731":"bu4OE","37008d268d268cdd":"asKXS","b17473c9906eda6d":"jTf7S","e1359b81afe1b622":"hT3AF","129efb055a5bbfec":"dYnvX","7eb2b57cabfc197a":"6qINv"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"9c62938f1dccc73c":"eIiSV","aceacb6a4531a9d2":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"bu4OE":[function(require,module,exports) {
var Buffer = require("dcfc4bf4e69e8758").Buffer;
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hardenedPathOf = exports.getXpubComponents = exports.pubkeyFromXpub = exports.pathStringToArray = exports.pathArrayToString = exports.bip32asBuffer = exports.pathElementsToBuffer = void 0;
const bip32_path_1 = __importDefault(require("4269c12612d1f88a")); // TODO: get rid of this dependency
const bs58check_1 = __importDefault(require("514bd853fd42049b"));
function pathElementsToBuffer(paths) {
    const buffer = Buffer.alloc(1 + paths.length * 4);
    buffer[0] = paths.length;
    paths.forEach((element, index)=>{
        buffer.writeUInt32BE(element, 1 + 4 * index);
    });
    return buffer;
}
exports.pathElementsToBuffer = pathElementsToBuffer;
function bip32asBuffer(path) {
    const pathElements = !path ? [] : pathStringToArray(path);
    return pathElementsToBuffer(pathElements);
}
exports.bip32asBuffer = bip32asBuffer;
function pathArrayToString(pathElements) {
    // bippath doesn't handle an empty path.
    if (pathElements.length == 0) return "m";
    return bip32_path_1.default.fromPathArray(pathElements).toString();
}
exports.pathArrayToString = pathArrayToString;
function pathStringToArray(path) {
    // bippath doesn't handle an empty path.
    if (path == "m" || path == "") return [];
    return bip32_path_1.default.fromString(path).toPathArray();
}
exports.pathStringToArray = pathStringToArray;
function pubkeyFromXpub(xpub) {
    const xpubBuf = bs58check_1.default.decode(xpub);
    return xpubBuf.slice(xpubBuf.length - 33);
}
exports.pubkeyFromXpub = pubkeyFromXpub;
function getXpubComponents(xpub) {
    const xpubBuf = bs58check_1.default.decode(xpub);
    return {
        chaincode: xpubBuf.slice(13, 45),
        pubkey: xpubBuf.slice(xpubBuf.length - 33),
        version: xpubBuf.readUInt32BE(0)
    };
}
exports.getXpubComponents = getXpubComponents;
function hardenedPathOf(pathElements) {
    for(let i = pathElements.length - 1; i >= 0; i--){
        if (pathElements[i] >= 0x80000000) return pathElements.slice(0, i + 1);
    }
    return [];
}
exports.hardenedPathOf = hardenedPathOf;

},{"dcfc4bf4e69e8758":"fCgem","4269c12612d1f88a":"6n4iS","514bd853fd42049b":"d8uT8"}],"6n4iS":[function(require,module,exports) {
/*
 * Bitcoin BIP32 path helpers
 * (C) 2016 Alex Beregszaszi
 */ const HARDENED = 0x80000000;
var BIPPath = function(path) {
    if (!Array.isArray(path)) throw new Error("Input must be an Array");
    if (path.length === 0) throw new Error("Path must contain at least one level");
    for(var i = 0; i < path.length; i++){
        if (typeof path[i] !== "number") throw new Error("Path element is not a number");
    }
    this.path = path;
};
BIPPath.validatePathArray = function(path) {
    try {
        BIPPath.fromPathArray(path);
        return true;
    } catch (e) {
        return false;
    }
};
BIPPath.validateString = function(text, reqRoot) {
    try {
        BIPPath.fromString(text, reqRoot);
        return true;
    } catch (e) {
        return false;
    }
};
BIPPath.fromPathArray = function(path) {
    return new BIPPath(path);
};
BIPPath.fromString = function(text, reqRoot) {
    // skip the root
    if (/^m\//i.test(text)) text = text.slice(2);
    else if (reqRoot) throw new Error("Root element is required");
    var path = text.split("/");
    var ret = new Array(path.length);
    for(var i = 0; i < path.length; i++){
        var tmp = /(\d+)([hH\']?)/.exec(path[i]);
        if (tmp === null) throw new Error("Invalid input");
        ret[i] = parseInt(tmp[1], 10);
        if (ret[i] >= HARDENED) throw new Error("Invalid child index");
        if (tmp[2] === "h" || tmp[2] === "H" || tmp[2] === "'") ret[i] += HARDENED;
        else if (tmp[2].length != 0) throw new Error("Invalid modifier");
    }
    return new BIPPath(ret);
};
BIPPath.prototype.toPathArray = function() {
    return this.path;
};
BIPPath.prototype.toString = function(noRoot, oldStyle) {
    var ret = new Array(this.path.length);
    for(var i = 0; i < this.path.length; i++){
        var tmp = this.path[i];
        if (tmp & HARDENED) ret[i] = (tmp & ~HARDENED) + (oldStyle ? "h" : "'");
        else ret[i] = tmp;
    }
    return (noRoot ? "" : "m/") + ret.join("/");
};
BIPPath.prototype.inspect = function() {
    return "BIPPath <" + this.toString() + ">";
};
module.exports = BIPPath;

},{}],"d8uT8":[function(require,module,exports) {
"use strict";
var { sha256 } = require("e292e17e7d543d0d");
var bs58checkBase = require("945e45a6bff39610");
// SHA256(SHA256(buffer))
function sha256x2(buffer) {
    return sha256(sha256(buffer));
}
module.exports = bs58checkBase(sha256x2);

},{"e292e17e7d543d0d":"JjjO8","945e45a6bff39610":"2NZjP"}],"JjjO8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha224 = exports.sha256 = void 0;
const _md_js_1 = require("26520c767e1e1930");
const utils_js_1 = require("dd2d5fab8dc388cf");
// SHA2-256 need to try 2^128 hashes to execute birthday attack.
// BTC network is doing 2^67 hashes/sec as per early 2023.
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const SHA256_K = /* @__PURE__ */ new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
// Initial state:
// first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19
// prettier-ignore
const SHA256_IV = /* @__PURE__ */ new Uint32Array([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA256 extends _md_js_1.HashMD {
    constructor(){
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = SHA256_IV[0] | 0;
        this.B = SHA256_IV[1] | 0;
        this.C = SHA256_IV[2] | 0;
        this.D = SHA256_IV[3] | 0;
        this.E = SHA256_IV[4] | 0;
        this.F = SHA256_IV[5] | 0;
        this.G = SHA256_IV[6] | 0;
        this.H = SHA256_IV[7] | 0;
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, utils_js_1.rotr)(W15, 7) ^ (0, utils_js_1.rotr)(W15, 18) ^ W15 >>> 3;
            const s1 = (0, utils_js_1.rotr)(W2, 17) ^ (0, utils_js_1.rotr)(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, utils_js_1.rotr)(E, 6) ^ (0, utils_js_1.rotr)(E, 11) ^ (0, utils_js_1.rotr)(E, 25);
            const T1 = H + sigma1 + (0, _md_js_1.Chi)(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, utils_js_1.rotr)(A, 2) ^ (0, utils_js_1.rotr)(A, 13) ^ (0, utils_js_1.rotr)(A, 22);
            const T2 = sigma0 + (0, _md_js_1.Maj)(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        SHA256_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
class SHA224 extends SHA256 {
    constructor(){
        super();
        this.A = -1056596264;
        this.B = 914150663;
        this.C = 812702999;
        this.D = -150054599;
        this.E = -4191439;
        this.F = 1750603025;
        this.G = 1694076839;
        this.H = -1090891868;
        this.outputLen = 28;
    }
}
/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */ exports.sha256 = (0, utils_js_1.wrapConstructor)(()=>new SHA256());
exports.sha224 = (0, utils_js_1.wrapConstructor)(()=>new SHA224());

},{"26520c767e1e1930":"4Doa0","dd2d5fab8dc388cf":"2ehgp"}],"4Doa0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HashMD = exports.Maj = exports.Chi = void 0;
const _assert_js_1 = require("444c341b278547c6");
const utils_js_1 = require("e667c0fa26fe74b7");
// Polyfill for Safari 14
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === "function") return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
// Choice: a ? b : c
const Chi = (a, b, c)=>a & b ^ ~a & c;
exports.Chi = Chi;
// Majority function, true if any two inpust is true
const Maj = (a, b, c)=>a & b ^ a & c ^ b & c;
exports.Maj = Maj;
/**
 * Merkle-Damgard hash construction base class.
 * Could be used to create MD5, RIPEMD, SHA1, SHA2.
 */ class HashMD extends utils_js_1.Hash {
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, utils_js_1.createView)(this.buffer);
    }
    update(data) {
        (0, _assert_js_1.exists)(this);
        const { view, buffer, blockLen } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, utils_js_1.createView)(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0, _assert_js_1.exists)(this);
        (0, _assert_js_1.output)(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 128;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in
        // current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, utils_js_1.createView)(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error("_sha2: outputLen bigger than state");
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
}
exports.HashMD = HashMD;

},{"444c341b278547c6":"BFdql","e667c0fa26fe74b7":"2ehgp"}],"BFdql":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.output = exports.exists = exports.hash = exports.bytes = exports.bool = exports.number = exports.isBytes = void 0;
function number(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error(`positive integer expected, not ${n}`);
}
exports.number = number;
function bool(b) {
    if (typeof b !== "boolean") throw new Error(`boolean expected, not ${b}`);
}
exports.bool = bool;
// copied from utils
function isBytes(a) {
    return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
}
exports.isBytes = isBytes;
function bytes(b, ...lengths) {
    if (!isBytes(b)) throw new Error("Uint8Array expected");
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b.length}`);
}
exports.bytes = bytes;
function hash(h) {
    if (typeof h !== "function" || typeof h.create !== "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    number(h.outputLen);
    number(h.blockLen);
}
exports.hash = hash;
function exists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished) throw new Error("Hash#digest() has already been called");
}
exports.exists = exists;
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) throw new Error(`digestInto() expects output buffer of length at least ${min}`);
}
exports.output = output;
const assert = {
    number,
    bool,
    bytes,
    hash,
    exists,
    output
};
exports.default = assert;

},{}],"2ehgp":[function(require,module,exports) {
"use strict";
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomBytes = exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.byteSwap32 = exports.byteSwapIfBE = exports.byteSwap = exports.isLE = exports.rotl = exports.rotr = exports.createView = exports.u32 = exports.u8 = exports.isBytes = void 0;
// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
const crypto_1 = require("308a0f9b8753b4af");
const _assert_js_1 = require("f33264417aee0570");
// export { isBytes } from './_assert.js';
// We can't reuse isBytes from _assert, because somehow this causes huge perf issues
function isBytes(a) {
    return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
}
exports.isBytes = isBytes;
// Cast array to different type
const u8 = (arr)=>new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
exports.u8 = u8;
const u32 = (arr)=>new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
exports.u32 = u32;
// Cast array to view
const createView = (arr)=>new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
exports.createView = createView;
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift)=>word << 32 - shift | word >>> shift;
exports.rotr = rotr;
// The rotate left (circular left shift) operation for uint32
const rotl = (word, shift)=>word << shift | word >>> 32 - shift >>> 0;
exports.rotl = rotl;
exports.isLE = new Uint8Array(new Uint32Array([
    0x11223344
]).buffer)[0] === 0x44;
// The byte swap operation for uint32
const byteSwap = (word)=>word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
exports.byteSwap = byteSwap;
// Conditionally byte swap if on a big-endian platform
exports.byteSwapIfBE = exports.isLE ? (n)=>n : (n)=>(0, exports.byteSwap)(n);
// In place byte swap for Uint32Array
function byteSwap32(arr) {
    for(let i = 0; i < arr.length; i++)arr[i] = (0, exports.byteSwap)(arr[i]);
}
exports.byteSwap32 = byteSwap32;
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, "0"));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */ function bytesToHex(bytes) {
    (0, _assert_js_1.bytes)(bytes);
    // pre-caching improves the speed 6x
    let hex = "";
    for(let i = 0; i < bytes.length; i++)hex += hexes[bytes[i]];
    return hex;
}
exports.bytesToHex = bytesToHex;
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    _A: 65,
    _F: 70,
    _a: 97,
    _f: 102
};
function asciiToBase16(char) {
    if (char >= asciis._0 && char <= asciis._9) return char - asciis._0;
    if (char >= asciis._A && char <= asciis._F) return char - (asciis._A - 10);
    if (char >= asciis._a && char <= asciis._f) return char - (asciis._a - 10);
    return;
}
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */ function hexToBytes(hex) {
    if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error("padded hex string expected, got unpadded hex of length " + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2;
    }
    return array;
}
exports.hexToBytes = hexToBytes;
// There is no setImmediate in browser and setTimeout is slow.
// call of async fn will return Promise, which will be fullfiled only on
// next scheduler queue processing step and this is exactly what we need.
const nextTick = async ()=>{};
exports.nextTick = nextTick;
// Returns control to thread each 'tick' ms to avoid blocking
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await (0, exports.nextTick)();
        ts += diff;
    }
}
exports.asyncLoop = asyncLoop;
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */ function utf8ToBytes(str) {
    if (typeof str !== "string") throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
exports.utf8ToBytes = utf8ToBytes;
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */ function toBytes(data) {
    if (typeof data === "string") data = utf8ToBytes(data);
    (0, _assert_js_1.bytes)(data);
    return data;
}
exports.toBytes = toBytes;
/**
 * Copies several Uint8Arrays into one.
 */ function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        (0, _assert_js_1.bytes)(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
exports.concatBytes = concatBytes;
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
exports.Hash = Hash;
const toStr = {}.toString;
function checkOpts(defaults, opts) {
    if (opts !== undefined && toStr.call(opts) !== "[object Object]") throw new Error("Options should be object or undefined");
    const merged = Object.assign(defaults, opts);
    return merged;
}
exports.checkOpts = checkOpts;
function wrapConstructor(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
exports.wrapConstructor = wrapConstructor;
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
/**
 * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
 */ function randomBytes(bytesLength = 32) {
    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
    throw new Error("crypto.getRandomValues must be defined");
}
exports.randomBytes = randomBytes;

},{"308a0f9b8753b4af":"85XD8","f33264417aee0570":"BFdql"}],"85XD8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crypto = void 0;
exports.crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : undefined;

},{}],"2NZjP":[function(require,module,exports) {
"use strict";
var base58 = require("caf73c5a4abad99");
module.exports = function(checksumFn) {
    // Encode a buffer as a base58-check encoded string
    function encode(payload) {
        var payloadU8 = Uint8Array.from(payload);
        var checksum = checksumFn(payloadU8);
        var length = payloadU8.length + 4;
        var both = new Uint8Array(length);
        both.set(payloadU8, 0);
        both.set(checksum.subarray(0, 4), payloadU8.length);
        return base58.encode(both, length);
    }
    function decodeRaw(buffer) {
        var payload = buffer.slice(0, -4);
        var checksum = buffer.slice(-4);
        var newChecksum = checksumFn(payload);
        if (checksum[0] ^ newChecksum[0] | checksum[1] ^ newChecksum[1] | checksum[2] ^ newChecksum[2] | checksum[3] ^ newChecksum[3]) return;
        return payload;
    }
    // Decode a base58-check encoded string to a buffer, no result if checksum is wrong
    function decodeUnsafe(string) {
        var buffer = base58.decodeUnsafe(string);
        if (!buffer) return;
        return decodeRaw(buffer);
    }
    function decode(string) {
        var buffer = base58.decode(string);
        var payload = decodeRaw(buffer, checksumFn);
        if (!payload) throw new Error("Invalid checksum");
        return payload;
    }
    return {
        encode: encode,
        decode: decode,
        decodeUnsafe: decodeUnsafe
    };
};

},{"caf73c5a4abad99":"4ji3p"}],"4ji3p":[function(require,module,exports) {
const basex = require("819c30266ae09475");
const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
module.exports = basex(ALPHABET);

},{"819c30266ae09475":"inVbl"}],"inVbl":[function(require,module,exports) {
"use strict";
// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
function base(ALPHABET) {
    if (ALPHABET.length >= 255) throw new TypeError("Alphabet too long");
    var BASE_MAP = new Uint8Array(256);
    for(var j = 0; j < BASE_MAP.length; j++)BASE_MAP[j] = 255;
    for(var i = 0; i < ALPHABET.length; i++){
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) throw new TypeError(x + " is ambiguous");
        BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        if (source instanceof Uint8Array) ;
        else if (ArrayBuffer.isView(source)) source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        else if (Array.isArray(source)) source = Uint8Array.from(source);
        if (!(source instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (source.length === 0) return "";
        // Skip & count leading zeroes.
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            var carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            var i = 0;
            for(var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) throw new Error("Non-zero carry");
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        var it2 = size - length;
        while(it2 !== size && b58[it2] === 0)it2++;
        // Translate the result into a string.
        var str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2)str += ALPHABET.charAt(b58[it2]);
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== "string") throw new TypeError("Expected String");
        if (source.length === 0) return new Uint8Array();
        var psz = 0;
        // Skip and count leading '1's.
        var zeroes = 0;
        var length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        var size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        var b256 = new Uint8Array(size);
        // Process the characters.
        while(source[psz]){
            // Decode character
            var carry = BASE_MAP[source.charCodeAt(psz)];
            // Invalid character
            if (carry === 255) return;
            var i = 0;
            for(var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) throw new Error("Non-zero carry");
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        var it4 = size - length;
        while(it4 !== size && b256[it4] === 0)it4++;
        var vch = new Uint8Array(zeroes + (size - it4));
        var j = zeroes;
        while(it4 !== size)vch[j++] = b256[it4++];
        return vch;
    }
    function decode(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) return buffer;
        throw new Error("Non-base" + BASE + " character");
    }
    return {
        encode: encode,
        decodeUnsafe: decodeUnsafe,
        decode: decode
    };
}
module.exports = base;

},{}],"asKXS":[function(require,module,exports) {
var Buffer = require("e20b19c536267189").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ClientCommandInterpreter = exports.GetMoreElementsCommand = exports.GetMerkleLeafIndexCommand = exports.GetMerkleLeafProofCommand = exports.GetPreimageCommand = exports.YieldCommand = void 0;
const bitcoinjs_lib_1 = require("b61f7d766c6efb95");
const buffertools_1 = require("a73b46b0194c746f");
const merkle_1 = require("c7593e716f007ccb");
const varint_1 = require("e14b142c20934258");
var ClientCommandCode;
(function(ClientCommandCode) {
    ClientCommandCode[ClientCommandCode["YIELD"] = 16] = "YIELD";
    ClientCommandCode[ClientCommandCode["GET_PREIMAGE"] = 64] = "GET_PREIMAGE";
    ClientCommandCode[ClientCommandCode["GET_MERKLE_LEAF_PROOF"] = 65] = "GET_MERKLE_LEAF_PROOF";
    ClientCommandCode[ClientCommandCode["GET_MERKLE_LEAF_INDEX"] = 66] = "GET_MERKLE_LEAF_INDEX";
    ClientCommandCode[ClientCommandCode["GET_MORE_ELEMENTS"] = 160] = "GET_MORE_ELEMENTS";
})(ClientCommandCode || (ClientCommandCode = {}));
class ClientCommand {
}
class YieldCommand extends ClientCommand {
    constructor(results, progressCallback){
        super();
        this.progressCallback = progressCallback;
        this.code = ClientCommandCode.YIELD;
        this.results = results;
    }
    execute(request) {
        this.results.push(Buffer.from(request.subarray(1)));
        if (this.progressCallback) this.progressCallback();
        return Buffer.from("");
    }
}
exports.YieldCommand = YieldCommand;
class GetPreimageCommand extends ClientCommand {
    constructor(known_preimages, queue){
        super();
        this.code = ClientCommandCode.GET_PREIMAGE;
        this.known_preimages = known_preimages;
        this.queue = queue;
    }
    execute(request) {
        const req = Buffer.from(request.subarray(1));
        // we expect no more data to read
        if (req.length != 33) throw new Error("Invalid request, unexpected trailing data");
        if (req[0] != 0) throw new Error("Unsupported request, the first byte should be 0");
        // read the hash
        const hash = Buffer.alloc(32);
        for(let i = 0; i < 32; i++)hash[i] = req[1 + i];
        const req_hash_hex = hash.toString("hex");
        const known_preimage = this.known_preimages.get(req_hash_hex);
        if (known_preimage != undefined) {
            const preimage_len_varint = (0, varint_1.createVarint)(known_preimage.length);
            // We can send at most 255 - len(preimage_len_out) - 1 bytes in a single message;
            // the rest will be stored in the queue for GET_MORE_ELEMENTS
            const max_payload_size = 255 - preimage_len_varint.length - 1;
            const payload_size = Math.min(max_payload_size, known_preimage.length);
            if (payload_size < known_preimage.length) for(let i = payload_size; i < known_preimage.length; i++)this.queue.push(Buffer.from([
                known_preimage[i]
            ]));
            return Buffer.concat([
                preimage_len_varint,
                Buffer.from([
                    payload_size
                ]),
                Buffer.from(known_preimage.subarray(0, payload_size))
            ]);
        }
        throw Error(`Requested unknown preimage for: ${req_hash_hex}`);
    }
}
exports.GetPreimageCommand = GetPreimageCommand;
class GetMerkleLeafProofCommand extends ClientCommand {
    constructor(known_trees, queue){
        super();
        this.code = ClientCommandCode.GET_MERKLE_LEAF_PROOF;
        this.known_trees = known_trees;
        this.queue = queue;
    }
    execute(request) {
        const req = Buffer.from(request.subarray(1));
        if (req.length < 34) throw new Error("Invalid request, expected at least 34 bytes");
        const reqBuf = new buffertools_1.BufferReader(req);
        const hash = reqBuf.readSlice(32);
        const hash_hex = hash.toString("hex");
        let tree_size;
        let leaf_index;
        try {
            tree_size = (0, varint_1.sanitizeBigintToNumber)(reqBuf.readVarInt());
            leaf_index = (0, varint_1.sanitizeBigintToNumber)(reqBuf.readVarInt());
        } catch (e) {
            throw new Error("Invalid request, couldn't parse tree_size or leaf_index");
        }
        const mt = this.known_trees.get(hash_hex);
        if (!mt) throw Error(`Requested Merkle leaf proof for unknown tree: ${hash_hex}`);
        if (leaf_index >= tree_size || mt.size() != tree_size) throw Error("Invalid index or tree size.");
        if (this.queue.length != 0) throw Error("This command should not execute when the queue is not empty.");
        const proof = mt.getProof(leaf_index);
        const n_response_elements = Math.min(Math.floor(6.90625), proof.length);
        const n_leftover_elements = proof.length - n_response_elements;
        // Add to the queue any proof elements that do not fit the response
        if (n_leftover_elements > 0) this.queue.push(...proof.slice(-n_leftover_elements));
        return Buffer.concat([
            mt.getLeafHash(leaf_index),
            Buffer.from([
                proof.length
            ]),
            Buffer.from([
                n_response_elements
            ]),
            ...proof.slice(0, n_response_elements)
        ]);
    }
}
exports.GetMerkleLeafProofCommand = GetMerkleLeafProofCommand;
class GetMerkleLeafIndexCommand extends ClientCommand {
    constructor(known_trees){
        super();
        this.code = ClientCommandCode.GET_MERKLE_LEAF_INDEX;
        this.known_trees = known_trees;
    }
    execute(request) {
        const req = Buffer.from(request.subarray(1));
        if (req.length != 64) throw new Error("Invalid request, unexpected trailing data");
        // read the root hash
        const root_hash = Buffer.alloc(32);
        for(let i = 0; i < 32; i++)root_hash[i] = req.readUInt8(i);
        const root_hash_hex = root_hash.toString("hex");
        // read the leaf hash
        const leef_hash = Buffer.alloc(32);
        for(let i = 0; i < 32; i++)leef_hash[i] = req.readUInt8(32 + i);
        const leef_hash_hex = leef_hash.toString("hex");
        const mt = this.known_trees.get(root_hash_hex);
        if (!mt) throw Error(`Requested Merkle leaf index for unknown root: ${root_hash_hex}`);
        let leaf_index = 0;
        let found = 0;
        for(let i = 0; i < mt.size(); i++)if (mt.getLeafHash(i).toString("hex") == leef_hash_hex) {
            found = 1;
            leaf_index = i;
            break;
        }
        return Buffer.concat([
            Buffer.from([
                found
            ]),
            (0, varint_1.createVarint)(leaf_index)
        ]);
    }
}
exports.GetMerkleLeafIndexCommand = GetMerkleLeafIndexCommand;
class GetMoreElementsCommand extends ClientCommand {
    constructor(queue){
        super();
        this.code = ClientCommandCode.GET_MORE_ELEMENTS;
        this.queue = queue;
    }
    execute(request) {
        if (request.length != 1) throw new Error("Invalid request, unexpected trailing data");
        if (this.queue.length === 0) throw new Error("No elements to get");
        // all elements should have the same length
        const element_len = this.queue[0].length;
        if (this.queue.some((el)=>el.length != element_len)) throw new Error("The queue contains elements with different byte length, which is not expected");
        const max_elements = Math.floor(253 / element_len);
        const n_returned_elements = Math.min(max_elements, this.queue.length);
        const returned_elements = this.queue.splice(0, n_returned_elements);
        return Buffer.concat([
            Buffer.from([
                n_returned_elements
            ]),
            Buffer.from([
                element_len
            ]),
            ...returned_elements
        ]);
    }
}
exports.GetMoreElementsCommand = GetMoreElementsCommand;
/**
 * This class will dispatch a client command coming from the hardware device to
 * the appropriate client command implementation. Those client commands
 * typically requests data from a merkle tree or merkelized maps.
 *
 * A ClientCommandInterpreter is prepared by adding the merkle trees and
 * merkelized maps it should be able to serve to the hardware device. This class
 * doesn't know anything about the semantics of the data it holds, it just
 * serves merkle data. It doesn't even know in what context it is being
 * executed, ie SignPsbt, getWalletAddress, etc.
 *
 * If the command yelds results to the client, as signPsbt does, the yielded
 * data will be accessible after the command completed by calling getYielded(),
 * which will return the yields in the same order as they came in.
 */ class ClientCommandInterpreter {
    constructor(progressCallback){
        this.roots = new Map();
        this.preimages = new Map();
        this.yielded = [];
        this.queue = [];
        this.commands = new Map();
        const commands = [
            new YieldCommand(this.yielded, progressCallback),
            new GetPreimageCommand(this.preimages, this.queue),
            new GetMerkleLeafIndexCommand(this.roots),
            new GetMerkleLeafProofCommand(this.roots, this.queue),
            new GetMoreElementsCommand(this.queue)
        ];
        for (const cmd of commands){
            if (this.commands.has(cmd.code)) throw new Error(`Multiple commands with code ${cmd.code}`);
            this.commands.set(cmd.code, cmd);
        }
    }
    getYielded() {
        return this.yielded;
    }
    addKnownPreimage(preimage) {
        this.preimages.set(bitcoinjs_lib_1.crypto.sha256(preimage).toString("hex"), preimage);
    }
    addKnownList(elements) {
        for (const el of elements){
            const preimage = Buffer.concat([
                Buffer.from([
                    0
                ]),
                el
            ]);
            this.addKnownPreimage(preimage);
        }
        const mt = new merkle_1.Merkle(elements.map((el)=>(0, merkle_1.hashLeaf)(el)));
        this.roots.set(mt.getRoot().toString("hex"), mt);
    }
    addKnownMapping(mm) {
        this.addKnownList(mm.keys);
        this.addKnownList(mm.values);
    }
    addKnownWalletPolicy(wp) {
        this.addKnownPreimage(wp.serialize());
        this.addKnownList(wp.keys.map((k)=>Buffer.from(k, "ascii")));
        this.addKnownPreimage(Buffer.from(wp.descriptorTemplate));
    }
    execute(request) {
        if (request.length == 0) throw new Error("Unexpected empty command");
        const cmdCode = request[0];
        const cmd = this.commands.get(cmdCode);
        if (!cmd) throw new Error(`Unexpected command code ${cmdCode}`);
        return cmd.execute(request);
    }
}
exports.ClientCommandInterpreter = ClientCommandInterpreter;

},{"e20b19c536267189":"fCgem","b61f7d766c6efb95":"cl7fJ","a73b46b0194c746f":"270Cc","c7593e716f007ccb":"hT3AF","e14b142c20934258":"6qINv"}],"cl7fJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initEccLib = exports.Transaction = exports.opcodes = exports.Psbt = exports.Block = exports.script = exports.payments = exports.networks = exports.crypto = exports.address = void 0;
const address = require("5643100429fa5d74");
exports.address = address;
const crypto = require("790c4706ffe25527");
exports.crypto = crypto;
const networks = require("fa51fa857ffe212b");
exports.networks = networks;
const payments = require("43bcb140f2c17c1");
exports.payments = payments;
const script = require("d287e37abbb1c4b0");
exports.script = script;
var block_1 = require("4d774d5b9486e7e7");
Object.defineProperty(exports, "Block", {
    enumerable: true,
    get: function() {
        return block_1.Block;
    }
});
var psbt_1 = require("d4f805da50a40f81");
Object.defineProperty(exports, "Psbt", {
    enumerable: true,
    get: function() {
        return psbt_1.Psbt;
    }
});
var ops_1 = require("1f5db7beeb7ffcb1");
Object.defineProperty(exports, "opcodes", {
    enumerable: true,
    get: function() {
        return ops_1.OPS;
    }
});
var transaction_1 = require("f703c4ccf6feb539");
Object.defineProperty(exports, "Transaction", {
    enumerable: true,
    get: function() {
        return transaction_1.Transaction;
    }
});
var ecc_lib_1 = require("59d8227dfbda3b23");
Object.defineProperty(exports, "initEccLib", {
    enumerable: true,
    get: function() {
        return ecc_lib_1.initEccLib;
    }
});

},{"5643100429fa5d74":"2Me89","790c4706ffe25527":"4BCCF","fa51fa857ffe212b":"hpO0s","43bcb140f2c17c1":"g5Tn6","d287e37abbb1c4b0":"28LFb","4d774d5b9486e7e7":"aVKx9","d4f805da50a40f81":"90Km1","1f5db7beeb7ffcb1":"dzR8H","f703c4ccf6feb539":"arhmj","59d8227dfbda3b23":"1dMtR"}],"2Me89":[function(require,module,exports) {
var Buffer = require("1151eb098bb7a030").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toOutputScript = exports.fromOutputScript = exports.toBech32 = exports.toBase58Check = exports.fromBech32 = exports.fromBase58Check = void 0;
const networks = require("e5503de4f312d02f");
const payments = require("9d9899e083f04905");
const bscript = require("1f2ac8b3b271aea8");
const types_1 = require("e26cacb94a21d4c1");
const bech32_1 = require("e06484115deaf226");
const bs58check = require("d7ce81ef0379eea5");
const FUTURE_SEGWIT_MAX_SIZE = 40;
const FUTURE_SEGWIT_MIN_SIZE = 2;
const FUTURE_SEGWIT_MAX_VERSION = 16;
const FUTURE_SEGWIT_MIN_VERSION = 2;
const FUTURE_SEGWIT_VERSION_DIFF = 0x50;
const FUTURE_SEGWIT_VERSION_WARNING = "WARNING: Sending to a future segwit version address can lead to loss of funds. End users MUST be warned carefully in the GUI and asked if they wish to proceed with caution. Wallets should verify the segwit version from the output of fromBech32, then decide when it is safe to use which version of segwit.";
function _toFutureSegwitAddress(output, network) {
    const data = output.slice(2);
    if (data.length < FUTURE_SEGWIT_MIN_SIZE || data.length > FUTURE_SEGWIT_MAX_SIZE) throw new TypeError("Invalid program length for segwit address");
    const version = output[0] - FUTURE_SEGWIT_VERSION_DIFF;
    if (version < FUTURE_SEGWIT_MIN_VERSION || version > FUTURE_SEGWIT_MAX_VERSION) throw new TypeError("Invalid version for segwit address");
    if (output[1] !== data.length) throw new TypeError("Invalid script for segwit address");
    console.warn(FUTURE_SEGWIT_VERSION_WARNING);
    return toBech32(data, version, network.bech32);
}
function fromBase58Check(address) {
    const payload = Buffer.from(bs58check.decode(address));
    // TODO: 4.0.0, move to "toOutputScript"
    if (payload.length < 21) throw new TypeError(address + " is too short");
    if (payload.length > 21) throw new TypeError(address + " is too long");
    const version = payload.readUInt8(0);
    const hash = payload.slice(1);
    return {
        version,
        hash
    };
}
exports.fromBase58Check = fromBase58Check;
function fromBech32(address) {
    let result;
    let version;
    try {
        result = bech32_1.bech32.decode(address);
    } catch (e) {}
    if (result) {
        version = result.words[0];
        if (version !== 0) throw new TypeError(address + " uses wrong encoding");
    } else {
        result = bech32_1.bech32m.decode(address);
        version = result.words[0];
        if (version === 0) throw new TypeError(address + " uses wrong encoding");
    }
    const data = bech32_1.bech32.fromWords(result.words.slice(1));
    return {
        version,
        prefix: result.prefix,
        data: Buffer.from(data)
    };
}
exports.fromBech32 = fromBech32;
function toBase58Check(hash, version) {
    (0, types_1.typeforce)((0, types_1.tuple)(types_1.Hash160bit, types_1.UInt8), arguments);
    const payload = Buffer.allocUnsafe(21);
    payload.writeUInt8(version, 0);
    hash.copy(payload, 1);
    return bs58check.encode(payload);
}
exports.toBase58Check = toBase58Check;
function toBech32(data, version, prefix) {
    const words = bech32_1.bech32.toWords(data);
    words.unshift(version);
    return version === 0 ? bech32_1.bech32.encode(prefix, words) : bech32_1.bech32m.encode(prefix, words);
}
exports.toBech32 = toBech32;
function fromOutputScript(output, network) {
    // TODO: Network
    network = network || networks.bitcoin;
    try {
        return payments.p2pkh({
            output,
            network
        }).address;
    } catch (e) {}
    try {
        return payments.p2sh({
            output,
            network
        }).address;
    } catch (e) {}
    try {
        return payments.p2wpkh({
            output,
            network
        }).address;
    } catch (e) {}
    try {
        return payments.p2wsh({
            output,
            network
        }).address;
    } catch (e) {}
    try {
        return payments.p2tr({
            output,
            network
        }).address;
    } catch (e) {}
    try {
        return _toFutureSegwitAddress(output, network);
    } catch (e) {}
    throw new Error(bscript.toASM(output) + " has no matching Address");
}
exports.fromOutputScript = fromOutputScript;
function toOutputScript(address, network) {
    network = network || networks.bitcoin;
    let decodeBase58;
    let decodeBech32;
    try {
        decodeBase58 = fromBase58Check(address);
    } catch (e) {}
    if (decodeBase58) {
        if (decodeBase58.version === network.pubKeyHash) return payments.p2pkh({
            hash: decodeBase58.hash
        }).output;
        if (decodeBase58.version === network.scriptHash) return payments.p2sh({
            hash: decodeBase58.hash
        }).output;
    } else {
        try {
            decodeBech32 = fromBech32(address);
        } catch (e) {}
        if (decodeBech32) {
            if (decodeBech32.prefix !== network.bech32) throw new Error(address + " has an invalid prefix");
            if (decodeBech32.version === 0) {
                if (decodeBech32.data.length === 20) return payments.p2wpkh({
                    hash: decodeBech32.data
                }).output;
                if (decodeBech32.data.length === 32) return payments.p2wsh({
                    hash: decodeBech32.data
                }).output;
            } else if (decodeBech32.version === 1) {
                if (decodeBech32.data.length === 32) return payments.p2tr({
                    pubkey: decodeBech32.data
                }).output;
            } else if (decodeBech32.version >= FUTURE_SEGWIT_MIN_VERSION && decodeBech32.version <= FUTURE_SEGWIT_MAX_VERSION && decodeBech32.data.length >= FUTURE_SEGWIT_MIN_SIZE && decodeBech32.data.length <= FUTURE_SEGWIT_MAX_SIZE) {
                console.warn(FUTURE_SEGWIT_VERSION_WARNING);
                return bscript.compile([
                    decodeBech32.version + FUTURE_SEGWIT_VERSION_DIFF,
                    decodeBech32.data
                ]);
            }
        }
    }
    throw new Error(address + " has no matching Script");
}
exports.toOutputScript = toOutputScript;

},{"1151eb098bb7a030":"fCgem","e5503de4f312d02f":"hpO0s","9d9899e083f04905":"g5Tn6","1f2ac8b3b271aea8":"28LFb","e26cacb94a21d4c1":"eFC2X","e06484115deaf226":"fgsjs","d7ce81ef0379eea5":"d8uT8"}],"hpO0s":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.testnet = exports.regtest = exports.bitcoin = void 0;
exports.bitcoin = {
    messagePrefix: "\x18Bitcoin Signed Message:\n",
    bech32: "bc",
    bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
};
exports.regtest = {
    messagePrefix: "\x18Bitcoin Signed Message:\n",
    bech32: "bcrt",
    bip32: {
        public: 0x043587cf,
        private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
};
exports.testnet = {
    messagePrefix: "\x18Bitcoin Signed Message:\n",
    bech32: "tb",
    bip32: {
        public: 0x043587cf,
        private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
};

},{}],"g5Tn6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.p2tr = exports.p2wsh = exports.p2wpkh = exports.p2sh = exports.p2pkh = exports.p2pk = exports.p2ms = exports.embed = void 0;
const embed_1 = require("2494b37ccc0d6e77");
Object.defineProperty(exports, "embed", {
    enumerable: true,
    get: function() {
        return embed_1.p2data;
    }
});
const p2ms_1 = require("93db0ca796737c11");
Object.defineProperty(exports, "p2ms", {
    enumerable: true,
    get: function() {
        return p2ms_1.p2ms;
    }
});
const p2pk_1 = require("ff65343fd7a4befa");
Object.defineProperty(exports, "p2pk", {
    enumerable: true,
    get: function() {
        return p2pk_1.p2pk;
    }
});
const p2pkh_1 = require("7b6a4b28b577960a");
Object.defineProperty(exports, "p2pkh", {
    enumerable: true,
    get: function() {
        return p2pkh_1.p2pkh;
    }
});
const p2sh_1 = require("75de597c28bee3cc");
Object.defineProperty(exports, "p2sh", {
    enumerable: true,
    get: function() {
        return p2sh_1.p2sh;
    }
});
const p2wpkh_1 = require("e804bde77f0492ef");
Object.defineProperty(exports, "p2wpkh", {
    enumerable: true,
    get: function() {
        return p2wpkh_1.p2wpkh;
    }
});
const p2wsh_1 = require("789a14e3147c4b3f");
Object.defineProperty(exports, "p2wsh", {
    enumerable: true,
    get: function() {
        return p2wsh_1.p2wsh;
    }
});
const p2tr_1 = require("adc8405d179bc59a");
Object.defineProperty(exports, "p2tr", {
    enumerable: true,
    get: function() {
        return p2tr_1.p2tr;
    }
}); // TODO
 // witness commitment

},{"2494b37ccc0d6e77":"iwu0M","93db0ca796737c11":"bzEJW","ff65343fd7a4befa":"dgFqu","7b6a4b28b577960a":"hr95c","75de597c28bee3cc":"gYQTr","e804bde77f0492ef":"6H3XB","789a14e3147c4b3f":"IfDQ0","adc8405d179bc59a":"8vJ63"}],"iwu0M":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.p2data = void 0;
const networks_1 = require("9ffab620f56f1d");
const bscript = require("e976e18ff07858d5");
const types_1 = require("ebd4b8ce5d3eeada");
const lazy = require("46c7fdc759d12929");
const OPS = bscript.OPS;
function stacksEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((x, i)=>{
        return x.equals(b[i]);
    });
}
// output: OP_RETURN ...
function p2data(a, opts) {
    if (!a.data && !a.output) throw new TypeError("Not enough data");
    opts = Object.assign({
        validate: true
    }, opts || {});
    (0, types_1.typeforce)({
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        output: types_1.typeforce.maybe(types_1.typeforce.Buffer),
        data: types_1.typeforce.maybe(types_1.typeforce.arrayOf(types_1.typeforce.Buffer))
    }, a);
    const network = a.network || networks_1.bitcoin;
    const o = {
        name: "embed",
        network
    };
    lazy.prop(o, "output", ()=>{
        if (!a.data) return;
        return bscript.compile([
            OPS.OP_RETURN
        ].concat(a.data));
    });
    lazy.prop(o, "data", ()=>{
        if (!a.output) return;
        return bscript.decompile(a.output).slice(1);
    });
    // extended validation
    if (opts.validate) {
        if (a.output) {
            const chunks = bscript.decompile(a.output);
            if (chunks[0] !== OPS.OP_RETURN) throw new TypeError("Output is invalid");
            if (!chunks.slice(1).every(types_1.typeforce.Buffer)) throw new TypeError("Output is invalid");
            if (a.data && !stacksEqual(a.data, o.data)) throw new TypeError("Data mismatch");
        }
    }
    return Object.assign(o, a);
}
exports.p2data = p2data;

},{"9ffab620f56f1d":"hpO0s","e976e18ff07858d5":"28LFb","ebd4b8ce5d3eeada":"eFC2X","46c7fdc759d12929":"cHER6"}],"28LFb":[function(require,module,exports) {
var Buffer = require("8c814422076f049b").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signature = exports.number = exports.isCanonicalScriptSignature = exports.isDefinedHashType = exports.isCanonicalPubKey = exports.toStack = exports.fromASM = exports.toASM = exports.decompile = exports.compile = exports.countNonPushOnlyOPs = exports.isPushOnly = exports.OPS = void 0;
const bip66 = require("2a902c712b8e7b68");
const ops_1 = require("8d62f21bf90b8090");
Object.defineProperty(exports, "OPS", {
    enumerable: true,
    get: function() {
        return ops_1.OPS;
    }
});
const pushdata = require("d569fd79c5502b03");
const scriptNumber = require("6964cf95aaccf14e");
const scriptSignature = require("aa6504b1b3c1222a");
const types = require("9416e6598c14cc94");
const { typeforce } = types;
const OP_INT_BASE = ops_1.OPS.OP_RESERVED; // OP_1 - 1
function isOPInt(value) {
    return types.Number(value) && (value === ops_1.OPS.OP_0 || value >= ops_1.OPS.OP_1 && value <= ops_1.OPS.OP_16 || value === ops_1.OPS.OP_1NEGATE);
}
function isPushOnlyChunk(value) {
    return types.Buffer(value) || isOPInt(value);
}
function isPushOnly(value) {
    return types.Array(value) && value.every(isPushOnlyChunk);
}
exports.isPushOnly = isPushOnly;
function countNonPushOnlyOPs(value) {
    return value.length - value.filter(isPushOnlyChunk).length;
}
exports.countNonPushOnlyOPs = countNonPushOnlyOPs;
function asMinimalOP(buffer) {
    if (buffer.length === 0) return ops_1.OPS.OP_0;
    if (buffer.length !== 1) return;
    if (buffer[0] >= 1 && buffer[0] <= 16) return OP_INT_BASE + buffer[0];
    if (buffer[0] === 0x81) return ops_1.OPS.OP_1NEGATE;
}
function chunksIsBuffer(buf) {
    return Buffer.isBuffer(buf);
}
function chunksIsArray(buf) {
    return types.Array(buf);
}
function singleChunkIsBuffer(buf) {
    return Buffer.isBuffer(buf);
}
function compile(chunks) {
    // TODO: remove me
    if (chunksIsBuffer(chunks)) return chunks;
    typeforce(types.Array, chunks);
    const bufferSize = chunks.reduce((accum, chunk)=>{
        // data chunk
        if (singleChunkIsBuffer(chunk)) {
            // adhere to BIP62.3, minimal push policy
            if (chunk.length === 1 && asMinimalOP(chunk) !== undefined) return accum + 1;
            return accum + pushdata.encodingLength(chunk.length) + chunk.length;
        }
        // opcode
        return accum + 1;
    }, 0.0);
    const buffer = Buffer.allocUnsafe(bufferSize);
    let offset = 0;
    chunks.forEach((chunk)=>{
        // data chunk
        if (singleChunkIsBuffer(chunk)) {
            // adhere to BIP62.3, minimal push policy
            const opcode = asMinimalOP(chunk);
            if (opcode !== undefined) {
                buffer.writeUInt8(opcode, offset);
                offset += 1;
                return;
            }
            offset += pushdata.encode(buffer, chunk.length, offset);
            chunk.copy(buffer, offset);
            offset += chunk.length;
        // opcode
        } else {
            buffer.writeUInt8(chunk, offset);
            offset += 1;
        }
    });
    if (offset !== buffer.length) throw new Error("Could not decode chunks");
    return buffer;
}
exports.compile = compile;
function decompile(buffer) {
    // TODO: remove me
    if (chunksIsArray(buffer)) return buffer;
    typeforce(types.Buffer, buffer);
    const chunks = [];
    let i = 0;
    while(i < buffer.length){
        const opcode = buffer[i];
        // data chunk
        if (opcode > ops_1.OPS.OP_0 && opcode <= ops_1.OPS.OP_PUSHDATA4) {
            const d = pushdata.decode(buffer, i);
            // did reading a pushDataInt fail?
            if (d === null) return null;
            i += d.size;
            // attempt to read too much data?
            if (i + d.number > buffer.length) return null;
            const data = buffer.slice(i, i + d.number);
            i += d.number;
            // decompile minimally
            const op = asMinimalOP(data);
            if (op !== undefined) chunks.push(op);
            else chunks.push(data);
        // opcode
        } else {
            chunks.push(opcode);
            i += 1;
        }
    }
    return chunks;
}
exports.decompile = decompile;
function toASM(chunks) {
    if (chunksIsBuffer(chunks)) chunks = decompile(chunks);
    return chunks.map((chunk)=>{
        // data?
        if (singleChunkIsBuffer(chunk)) {
            const op = asMinimalOP(chunk);
            if (op === undefined) return chunk.toString("hex");
            chunk = op;
        }
        // opcode!
        return ops_1.REVERSE_OPS[chunk];
    }).join(" ");
}
exports.toASM = toASM;
function fromASM(asm) {
    typeforce(types.String, asm);
    return compile(asm.split(" ").map((chunkStr)=>{
        // opcode?
        if (ops_1.OPS[chunkStr] !== undefined) return ops_1.OPS[chunkStr];
        typeforce(types.Hex, chunkStr);
        // data!
        return Buffer.from(chunkStr, "hex");
    }));
}
exports.fromASM = fromASM;
function toStack(chunks) {
    chunks = decompile(chunks);
    typeforce(isPushOnly, chunks);
    return chunks.map((op)=>{
        if (singleChunkIsBuffer(op)) return op;
        if (op === ops_1.OPS.OP_0) return Buffer.allocUnsafe(0);
        return scriptNumber.encode(op - OP_INT_BASE);
    });
}
exports.toStack = toStack;
function isCanonicalPubKey(buffer) {
    return types.isPoint(buffer);
}
exports.isCanonicalPubKey = isCanonicalPubKey;
function isDefinedHashType(hashType) {
    const hashTypeMod = hashType & -129;
    // return hashTypeMod > SIGHASH_ALL && hashTypeMod < SIGHASH_SINGLE
    return hashTypeMod > 0x00 && hashTypeMod < 0x04;
}
exports.isDefinedHashType = isDefinedHashType;
function isCanonicalScriptSignature(buffer) {
    if (!Buffer.isBuffer(buffer)) return false;
    if (!isDefinedHashType(buffer[buffer.length - 1])) return false;
    return bip66.check(buffer.slice(0, -1));
}
exports.isCanonicalScriptSignature = isCanonicalScriptSignature;
exports.number = scriptNumber;
exports.signature = scriptSignature;

},{"8c814422076f049b":"fCgem","2a902c712b8e7b68":"1HWM5","8d62f21bf90b8090":"dzR8H","d569fd79c5502b03":"7xjQ3","6964cf95aaccf14e":"dXm7r","aa6504b1b3c1222a":"cel67","9416e6598c14cc94":"eFC2X"}],"1HWM5":[function(require,module,exports) {
var Buffer = require("cd069d1f1cd22f25").Buffer;
"use strict";
// Reference https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki
// Format: 0x30 [total-length] 0x02 [R-length] [R] 0x02 [S-length] [S]
// NOTE: SIGHASH byte ignored AND restricted, truncate before use
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encode = exports.decode = exports.check = void 0;
function check(buffer) {
    if (buffer.length < 8) return false;
    if (buffer.length > 72) return false;
    if (buffer[0] !== 0x30) return false;
    if (buffer[1] !== buffer.length - 2) return false;
    if (buffer[2] !== 0x02) return false;
    const lenR = buffer[3];
    if (lenR === 0) return false;
    if (5 + lenR >= buffer.length) return false;
    if (buffer[4 + lenR] !== 0x02) return false;
    const lenS = buffer[5 + lenR];
    if (lenS === 0) return false;
    if (6 + lenR + lenS !== buffer.length) return false;
    if (buffer[4] & 0x80) return false;
    if (lenR > 1 && buffer[4] === 0x00 && !(buffer[5] & 0x80)) return false;
    if (buffer[lenR + 6] & 0x80) return false;
    if (lenS > 1 && buffer[lenR + 6] === 0x00 && !(buffer[lenR + 7] & 0x80)) return false;
    return true;
}
exports.check = check;
function decode(buffer) {
    if (buffer.length < 8) throw new Error("DER sequence length is too short");
    if (buffer.length > 72) throw new Error("DER sequence length is too long");
    if (buffer[0] !== 0x30) throw new Error("Expected DER sequence");
    if (buffer[1] !== buffer.length - 2) throw new Error("DER sequence length is invalid");
    if (buffer[2] !== 0x02) throw new Error("Expected DER integer");
    const lenR = buffer[3];
    if (lenR === 0) throw new Error("R length is zero");
    if (5 + lenR >= buffer.length) throw new Error("R length is too long");
    if (buffer[4 + lenR] !== 0x02) throw new Error("Expected DER integer (2)");
    const lenS = buffer[5 + lenR];
    if (lenS === 0) throw new Error("S length is zero");
    if (6 + lenR + lenS !== buffer.length) throw new Error("S length is invalid");
    if (buffer[4] & 0x80) throw new Error("R value is negative");
    if (lenR > 1 && buffer[4] === 0x00 && !(buffer[5] & 0x80)) throw new Error("R value excessively padded");
    if (buffer[lenR + 6] & 0x80) throw new Error("S value is negative");
    if (lenS > 1 && buffer[lenR + 6] === 0x00 && !(buffer[lenR + 7] & 0x80)) throw new Error("S value excessively padded");
    // non-BIP66 - extract R, S values
    return {
        r: buffer.slice(4, 4 + lenR),
        s: buffer.slice(6 + lenR)
    };
}
exports.decode = decode;
/*
 * Expects r and s to be positive DER integers.
 *
 * The DER format uses the most significant bit as a sign bit (& 0x80).
 * If the significant bit is set AND the integer is positive, a 0x00 is prepended.
 *
 * Examples:
 *
 *      0 =>     0x00
 *      1 =>     0x01
 *     -1 =>     0xff
 *    127 =>     0x7f
 *   -127 =>     0x81
 *    128 =>   0x0080
 *   -128 =>     0x80
 *    255 =>   0x00ff
 *   -255 =>   0xff01
 *  16300 =>   0x3fac
 * -16300 =>   0xc054
 *  62300 => 0x00f35c
 * -62300 => 0xff0ca4
 */ function encode(r, s) {
    const lenR = r.length;
    const lenS = s.length;
    if (lenR === 0) throw new Error("R length is zero");
    if (lenS === 0) throw new Error("S length is zero");
    if (lenR > 33) throw new Error("R length is too long");
    if (lenS > 33) throw new Error("S length is too long");
    if (r[0] & 0x80) throw new Error("R value is negative");
    if (s[0] & 0x80) throw new Error("S value is negative");
    if (lenR > 1 && r[0] === 0x00 && !(r[1] & 0x80)) throw new Error("R value excessively padded");
    if (lenS > 1 && s[0] === 0x00 && !(s[1] & 0x80)) throw new Error("S value excessively padded");
    const signature = Buffer.allocUnsafe(6 + lenR + lenS);
    // 0x30 [total-length] 0x02 [R-length] [R] 0x02 [S-length] [S]
    signature[0] = 0x30;
    signature[1] = signature.length - 2;
    signature[2] = 0x02;
    signature[3] = r.length;
    r.copy(signature, 4);
    signature[4 + lenR] = 0x02;
    signature[5 + lenR] = s.length;
    s.copy(signature, 6 + lenR);
    return signature;
}
exports.encode = encode;

},{"cd069d1f1cd22f25":"fCgem"}],"dzR8H":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.REVERSE_OPS = exports.OPS = void 0;
const OPS = {
    OP_FALSE: 0,
    OP_0: 0,
    OP_PUSHDATA1: 76,
    OP_PUSHDATA2: 77,
    OP_PUSHDATA4: 78,
    OP_1NEGATE: 79,
    OP_RESERVED: 80,
    OP_TRUE: 81,
    OP_1: 81,
    OP_2: 82,
    OP_3: 83,
    OP_4: 84,
    OP_5: 85,
    OP_6: 86,
    OP_7: 87,
    OP_8: 88,
    OP_9: 89,
    OP_10: 90,
    OP_11: 91,
    OP_12: 92,
    OP_13: 93,
    OP_14: 94,
    OP_15: 95,
    OP_16: 96,
    OP_NOP: 97,
    OP_VER: 98,
    OP_IF: 99,
    OP_NOTIF: 100,
    OP_VERIF: 101,
    OP_VERNOTIF: 102,
    OP_ELSE: 103,
    OP_ENDIF: 104,
    OP_VERIFY: 105,
    OP_RETURN: 106,
    OP_TOALTSTACK: 107,
    OP_FROMALTSTACK: 108,
    OP_2DROP: 109,
    OP_2DUP: 110,
    OP_3DUP: 111,
    OP_2OVER: 112,
    OP_2ROT: 113,
    OP_2SWAP: 114,
    OP_IFDUP: 115,
    OP_DEPTH: 116,
    OP_DROP: 117,
    OP_DUP: 118,
    OP_NIP: 119,
    OP_OVER: 120,
    OP_PICK: 121,
    OP_ROLL: 122,
    OP_ROT: 123,
    OP_SWAP: 124,
    OP_TUCK: 125,
    OP_CAT: 126,
    OP_SUBSTR: 127,
    OP_LEFT: 128,
    OP_RIGHT: 129,
    OP_SIZE: 130,
    OP_INVERT: 131,
    OP_AND: 132,
    OP_OR: 133,
    OP_XOR: 134,
    OP_EQUAL: 135,
    OP_EQUALVERIFY: 136,
    OP_RESERVED1: 137,
    OP_RESERVED2: 138,
    OP_1ADD: 139,
    OP_1SUB: 140,
    OP_2MUL: 141,
    OP_2DIV: 142,
    OP_NEGATE: 143,
    OP_ABS: 144,
    OP_NOT: 145,
    OP_0NOTEQUAL: 146,
    OP_ADD: 147,
    OP_SUB: 148,
    OP_MUL: 149,
    OP_DIV: 150,
    OP_MOD: 151,
    OP_LSHIFT: 152,
    OP_RSHIFT: 153,
    OP_BOOLAND: 154,
    OP_BOOLOR: 155,
    OP_NUMEQUAL: 156,
    OP_NUMEQUALVERIFY: 157,
    OP_NUMNOTEQUAL: 158,
    OP_LESSTHAN: 159,
    OP_GREATERTHAN: 160,
    OP_LESSTHANOREQUAL: 161,
    OP_GREATERTHANOREQUAL: 162,
    OP_MIN: 163,
    OP_MAX: 164,
    OP_WITHIN: 165,
    OP_RIPEMD160: 166,
    OP_SHA1: 167,
    OP_SHA256: 168,
    OP_HASH160: 169,
    OP_HASH256: 170,
    OP_CODESEPARATOR: 171,
    OP_CHECKSIG: 172,
    OP_CHECKSIGVERIFY: 173,
    OP_CHECKMULTISIG: 174,
    OP_CHECKMULTISIGVERIFY: 175,
    OP_NOP1: 176,
    OP_NOP2: 177,
    OP_CHECKLOCKTIMEVERIFY: 177,
    OP_NOP3: 178,
    OP_CHECKSEQUENCEVERIFY: 178,
    OP_NOP4: 179,
    OP_NOP5: 180,
    OP_NOP6: 181,
    OP_NOP7: 182,
    OP_NOP8: 183,
    OP_NOP9: 184,
    OP_NOP10: 185,
    OP_CHECKSIGADD: 186,
    OP_PUBKEYHASH: 253,
    OP_PUBKEY: 254,
    OP_INVALIDOPCODE: 255
};
exports.OPS = OPS;
const REVERSE_OPS = {};
exports.REVERSE_OPS = REVERSE_OPS;
for (const op of Object.keys(OPS)){
    const code = OPS[op];
    REVERSE_OPS[code] = op;
}

},{}],"7xjQ3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decode = exports.encode = exports.encodingLength = void 0;
const ops_1 = require("310956ee39817530");
function encodingLength(i) {
    return i < ops_1.OPS.OP_PUSHDATA1 ? 1 : i <= 0xff ? 2 : i <= 0xffff ? 3 : 5;
}
exports.encodingLength = encodingLength;
function encode(buffer, num, offset) {
    const size = encodingLength(num);
    // ~6 bit
    if (size === 1) buffer.writeUInt8(num, offset);
    else if (size === 2) {
        buffer.writeUInt8(ops_1.OPS.OP_PUSHDATA1, offset);
        buffer.writeUInt8(num, offset + 1);
    // 16 bit
    } else if (size === 3) {
        buffer.writeUInt8(ops_1.OPS.OP_PUSHDATA2, offset);
        buffer.writeUInt16LE(num, offset + 1);
    // 32 bit
    } else {
        buffer.writeUInt8(ops_1.OPS.OP_PUSHDATA4, offset);
        buffer.writeUInt32LE(num, offset + 1);
    }
    return size;
}
exports.encode = encode;
function decode(buffer, offset) {
    const opcode = buffer.readUInt8(offset);
    let num;
    let size;
    // ~6 bit
    if (opcode < ops_1.OPS.OP_PUSHDATA1) {
        num = opcode;
        size = 1;
    // 8 bit
    } else if (opcode === ops_1.OPS.OP_PUSHDATA1) {
        if (offset + 2 > buffer.length) return null;
        num = buffer.readUInt8(offset + 1);
        size = 2;
    // 16 bit
    } else if (opcode === ops_1.OPS.OP_PUSHDATA2) {
        if (offset + 3 > buffer.length) return null;
        num = buffer.readUInt16LE(offset + 1);
        size = 3;
    // 32 bit
    } else {
        if (offset + 5 > buffer.length) return null;
        if (opcode !== ops_1.OPS.OP_PUSHDATA4) throw new Error("Unexpected opcode");
        num = buffer.readUInt32LE(offset + 1);
        size = 5;
    }
    return {
        opcode,
        number: num,
        size
    };
}
exports.decode = decode;

},{"310956ee39817530":"dzR8H"}],"dXm7r":[function(require,module,exports) {
var Buffer = require("3e6b6f0a13264aa6").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encode = exports.decode = void 0;
function decode(buffer, maxLength, minimal) {
    maxLength = maxLength || 4;
    minimal = minimal === undefined ? true : minimal;
    const length = buffer.length;
    if (length === 0) return 0;
    if (length > maxLength) throw new TypeError("Script number overflow");
    if (minimal) {
        if ((buffer[length - 1] & 0x7f) === 0) {
            if (length <= 1 || (buffer[length - 2] & 0x80) === 0) throw new Error("Non-minimally encoded script number");
        }
    }
    // 40-bit
    if (length === 5) {
        const a = buffer.readUInt32LE(0);
        const b = buffer.readUInt8(4);
        if (b & 0x80) return -((b & -129) * 0x100000000 + a);
        return b * 0x100000000 + a;
    }
    // 32-bit / 24-bit / 16-bit / 8-bit
    let result = 0;
    for(let i = 0; i < length; ++i)result |= buffer[i] << 8 * i;
    if (buffer[length - 1] & 0x80) return -(result & ~(0x80 << 8 * (length - 1)));
    return result;
}
exports.decode = decode;
function scriptNumSize(i) {
    return i > 0x7fffffff ? 5 : i > 0x7fffff ? 4 : i > 0x7fff ? 3 : i > 0x7f ? 2 : i > 0x00 ? 1 : 0;
}
function encode(_number) {
    let value = Math.abs(_number);
    const size = scriptNumSize(value);
    const buffer = Buffer.allocUnsafe(size);
    const negative = _number < 0;
    for(let i = 0; i < size; ++i){
        buffer.writeUInt8(value & 0xff, i);
        value >>= 8;
    }
    if (buffer[size - 1] & 0x80) buffer.writeUInt8(negative ? 0x80 : 0x00, size - 1);
    else if (negative) buffer[size - 1] |= 0x80;
    return buffer;
}
exports.encode = encode;

},{"3e6b6f0a13264aa6":"fCgem"}],"cel67":[function(require,module,exports) {
var Buffer = require("9d0276df3a9f61d8").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encode = exports.decode = void 0;
const bip66 = require("cdd1a498e306e88e");
const types = require("2c36b22e1bc51145");
const { typeforce } = types;
const ZERO = Buffer.alloc(1, 0);
function toDER(x) {
    let i = 0;
    while(x[i] === 0)++i;
    if (i === x.length) return ZERO;
    x = x.slice(i);
    if (x[0] & 0x80) return Buffer.concat([
        ZERO,
        x
    ], 1 + x.length);
    return x;
}
function fromDER(x) {
    if (x[0] === 0x00) x = x.slice(1);
    const buffer = Buffer.alloc(32, 0);
    const bstart = Math.max(0, 32 - x.length);
    x.copy(buffer, bstart);
    return buffer;
}
// BIP62: 1 byte hashType flag (only 0x01, 0x02, 0x03, 0x81, 0x82 and 0x83 are allowed)
function decode(buffer) {
    const hashType = buffer.readUInt8(buffer.length - 1);
    const hashTypeMod = hashType & -129;
    if (hashTypeMod <= 0 || hashTypeMod >= 4) throw new Error("Invalid hashType " + hashType);
    const decoded = bip66.decode(buffer.slice(0, -1));
    const r = fromDER(decoded.r);
    const s = fromDER(decoded.s);
    const signature = Buffer.concat([
        r,
        s
    ], 64);
    return {
        signature,
        hashType
    };
}
exports.decode = decode;
function encode(signature, hashType) {
    typeforce({
        signature: types.BufferN(64),
        hashType: types.UInt8
    }, {
        signature,
        hashType
    });
    const hashTypeMod = hashType & -129;
    if (hashTypeMod <= 0 || hashTypeMod >= 4) throw new Error("Invalid hashType " + hashType);
    const hashTypeBuffer = Buffer.allocUnsafe(1);
    hashTypeBuffer.writeUInt8(hashType, 0);
    const r = toDER(signature.slice(0, 32));
    const s = toDER(signature.slice(32, 64));
    return Buffer.concat([
        bip66.encode(r, s),
        hashTypeBuffer
    ]);
}
exports.encode = encode;

},{"9d0276df3a9f61d8":"fCgem","cdd1a498e306e88e":"1HWM5","2c36b22e1bc51145":"eFC2X"}],"eFC2X":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.oneOf = exports.Null = exports.BufferN = exports.Function = exports.UInt32 = exports.UInt8 = exports.tuple = exports.maybe = exports.Hex = exports.Buffer = exports.String = exports.Boolean = exports.Array = exports.Number = exports.Hash256bit = exports.Hash160bit = exports.Buffer256bit = exports.isTaptree = exports.isTapleaf = exports.TAPLEAF_VERSION_MASK = exports.Network = exports.ECPoint = exports.Satoshi = exports.Signer = exports.BIP32Path = exports.UInt31 = exports.isPoint = exports.typeforce = void 0;
const buffer_1 = require("58b9ad8b15273bb8");
exports.typeforce = require("7c90ee7d0a3cd37");
const ZERO32 = buffer_1.Buffer.alloc(32, 0);
const EC_P = buffer_1.Buffer.from("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f", "hex");
function isPoint(p) {
    if (!buffer_1.Buffer.isBuffer(p)) return false;
    if (p.length < 33) return false;
    const t = p[0];
    const x = p.slice(1, 33);
    if (x.compare(ZERO32) === 0) return false;
    if (x.compare(EC_P) >= 0) return false;
    if ((t === 0x02 || t === 0x03) && p.length === 33) return true;
    const y = p.slice(33);
    if (y.compare(ZERO32) === 0) return false;
    if (y.compare(EC_P) >= 0) return false;
    if (t === 0x04 && p.length === 65) return true;
    return false;
}
exports.isPoint = isPoint;
const UINT31_MAX = Math.pow(2, 31) - 1;
function UInt31(value) {
    return exports.typeforce.UInt32(value) && value <= UINT31_MAX;
}
exports.UInt31 = UInt31;
function BIP32Path(value) {
    return exports.typeforce.String(value) && !!value.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
}
exports.BIP32Path = BIP32Path;
BIP32Path.toJSON = ()=>{
    return "BIP32 derivation path";
};
function Signer(obj) {
    return (exports.typeforce.Buffer(obj.publicKey) || typeof obj.getPublicKey === "function") && typeof obj.sign === "function";
}
exports.Signer = Signer;
const SATOSHI_MAX = 21 * 1e14;
function Satoshi(value) {
    return exports.typeforce.UInt53(value) && value <= SATOSHI_MAX;
}
exports.Satoshi = Satoshi;
// external dependent types
exports.ECPoint = exports.typeforce.quacksLike("Point");
// exposed, external API
exports.Network = exports.typeforce.compile({
    messagePrefix: exports.typeforce.oneOf(exports.typeforce.Buffer, exports.typeforce.String),
    bip32: {
        public: exports.typeforce.UInt32,
        private: exports.typeforce.UInt32
    },
    pubKeyHash: exports.typeforce.UInt8,
    scriptHash: exports.typeforce.UInt8,
    wif: exports.typeforce.UInt8
});
exports.TAPLEAF_VERSION_MASK = 0xfe;
function isTapleaf(o) {
    if (!o || !("output" in o)) return false;
    if (!buffer_1.Buffer.isBuffer(o.output)) return false;
    if (o.version !== undefined) return (o.version & exports.TAPLEAF_VERSION_MASK) === o.version;
    return true;
}
exports.isTapleaf = isTapleaf;
function isTaptree(scriptTree) {
    if (!(0, exports.Array)(scriptTree)) return isTapleaf(scriptTree);
    if (scriptTree.length !== 2) return false;
    return scriptTree.every((t)=>isTaptree(t));
}
exports.isTaptree = isTaptree;
exports.Buffer256bit = exports.typeforce.BufferN(32);
exports.Hash160bit = exports.typeforce.BufferN(20);
exports.Hash256bit = exports.typeforce.BufferN(32);
exports.Number = exports.typeforce.Number;
exports.Array = exports.typeforce.Array;
exports.Boolean = exports.typeforce.Boolean;
exports.String = exports.typeforce.String;
exports.Buffer = exports.typeforce.Buffer;
exports.Hex = exports.typeforce.Hex;
exports.maybe = exports.typeforce.maybe;
exports.tuple = exports.typeforce.tuple;
exports.UInt8 = exports.typeforce.UInt8;
exports.UInt32 = exports.typeforce.UInt32;
exports.Function = exports.typeforce.Function;
exports.BufferN = exports.typeforce.BufferN;
exports.Null = exports.typeforce.Null;
exports.oneOf = exports.typeforce.oneOf;

},{"58b9ad8b15273bb8":"fCgem","7c90ee7d0a3cd37":"86sQP"}],"86sQP":[function(require,module,exports) {
var ERRORS = require("b6b8244aff228baf");
var NATIVE = require("627493ef8c0ede79");
// short-hand
var tfJSON = ERRORS.tfJSON;
var TfTypeError = ERRORS.TfTypeError;
var TfPropertyTypeError = ERRORS.TfPropertyTypeError;
var tfSubError = ERRORS.tfSubError;
var getValueTypeName = ERRORS.getValueTypeName;
var TYPES = {
    arrayOf: function arrayOf(type, options) {
        type = compile(type);
        options = options || {};
        function _arrayOf(array, strict) {
            if (!NATIVE.Array(array)) return false;
            if (NATIVE.Nil(array)) return false;
            if (options.minLength !== undefined && array.length < options.minLength) return false;
            if (options.maxLength !== undefined && array.length > options.maxLength) return false;
            if (options.length !== undefined && array.length !== options.length) return false;
            return array.every(function(value, i) {
                try {
                    return typeforce(type, value, strict);
                } catch (e) {
                    throw tfSubError(e, i);
                }
            });
        }
        _arrayOf.toJSON = function() {
            var str = "[" + tfJSON(type) + "]";
            if (options.length !== undefined) str += "{" + options.length + "}";
            else if (options.minLength !== undefined || options.maxLength !== undefined) str += "{" + (options.minLength === undefined ? 0 : options.minLength) + "," + (options.maxLength === undefined ? Infinity : options.maxLength) + "}";
            return str;
        };
        return _arrayOf;
    },
    maybe: function maybe(type) {
        type = compile(type);
        function _maybe(value, strict) {
            return NATIVE.Nil(value) || type(value, strict, maybe);
        }
        _maybe.toJSON = function() {
            return "?" + tfJSON(type);
        };
        return _maybe;
    },
    map: function map(propertyType, propertyKeyType) {
        propertyType = compile(propertyType);
        if (propertyKeyType) propertyKeyType = compile(propertyKeyType);
        function _map(value, strict) {
            if (!NATIVE.Object(value)) return false;
            if (NATIVE.Nil(value)) return false;
            for(var propertyName in value){
                try {
                    if (propertyKeyType) typeforce(propertyKeyType, propertyName, strict);
                } catch (e) {
                    throw tfSubError(e, propertyName, "key");
                }
                try {
                    var propertyValue = value[propertyName];
                    typeforce(propertyType, propertyValue, strict);
                } catch (e) {
                    throw tfSubError(e, propertyName);
                }
            }
            return true;
        }
        if (propertyKeyType) _map.toJSON = function() {
            return "{" + tfJSON(propertyKeyType) + ": " + tfJSON(propertyType) + "}";
        };
        else _map.toJSON = function() {
            return "{" + tfJSON(propertyType) + "}";
        };
        return _map;
    },
    object: function object(uncompiled) {
        var type = {};
        for(var typePropertyName in uncompiled)type[typePropertyName] = compile(uncompiled[typePropertyName]);
        function _object(value, strict) {
            if (!NATIVE.Object(value)) return false;
            if (NATIVE.Nil(value)) return false;
            var propertyName;
            try {
                for(propertyName in type){
                    var propertyType = type[propertyName];
                    var propertyValue = value[propertyName];
                    typeforce(propertyType, propertyValue, strict);
                }
            } catch (e) {
                throw tfSubError(e, propertyName);
            }
            if (strict) for(propertyName in value){
                if (type[propertyName]) continue;
                throw new TfPropertyTypeError(undefined, propertyName);
            }
            return true;
        }
        _object.toJSON = function() {
            return tfJSON(type);
        };
        return _object;
    },
    anyOf: function anyOf() {
        var types = [].slice.call(arguments).map(compile);
        function _anyOf(value, strict) {
            return types.some(function(type) {
                try {
                    return typeforce(type, value, strict);
                } catch (e) {
                    return false;
                }
            });
        }
        _anyOf.toJSON = function() {
            return types.map(tfJSON).join("|");
        };
        return _anyOf;
    },
    allOf: function allOf() {
        var types = [].slice.call(arguments).map(compile);
        function _allOf(value, strict) {
            return types.every(function(type) {
                try {
                    return typeforce(type, value, strict);
                } catch (e) {
                    return false;
                }
            });
        }
        _allOf.toJSON = function() {
            return types.map(tfJSON).join(" & ");
        };
        return _allOf;
    },
    quacksLike: function quacksLike(type) {
        function _quacksLike(value) {
            return type === getValueTypeName(value);
        }
        _quacksLike.toJSON = function() {
            return type;
        };
        return _quacksLike;
    },
    tuple: function tuple() {
        var types = [].slice.call(arguments).map(compile);
        function _tuple(values, strict) {
            if (NATIVE.Nil(values)) return false;
            if (NATIVE.Nil(values.length)) return false;
            if (strict && values.length !== types.length) return false;
            return types.every(function(type, i) {
                try {
                    return typeforce(type, values[i], strict);
                } catch (e) {
                    throw tfSubError(e, i);
                }
            });
        }
        _tuple.toJSON = function() {
            return "(" + types.map(tfJSON).join(", ") + ")";
        };
        return _tuple;
    },
    value: function value(expected) {
        function _value(actual) {
            return actual === expected;
        }
        _value.toJSON = function() {
            return expected;
        };
        return _value;
    }
};
// TODO: deprecate
TYPES.oneOf = TYPES.anyOf;
function compile(type) {
    if (NATIVE.String(type)) {
        if (type[0] === "?") return TYPES.maybe(type.slice(1));
        return NATIVE[type] || TYPES.quacksLike(type);
    } else if (type && NATIVE.Object(type)) {
        if (NATIVE.Array(type)) {
            if (type.length !== 1) throw new TypeError("Expected compile() parameter of type Array of length 1");
            return TYPES.arrayOf(type[0]);
        }
        return TYPES.object(type);
    } else if (NATIVE.Function(type)) return type;
    return TYPES.value(type);
}
function typeforce(type, value, strict, surrogate) {
    if (NATIVE.Function(type)) {
        if (type(value, strict)) return true;
        throw new TfTypeError(surrogate || type, value);
    }
    // JIT
    return typeforce(compile(type), value, strict);
}
// assign types to typeforce function
for(var typeName in NATIVE)typeforce[typeName] = NATIVE[typeName];
for(typeName in TYPES)typeforce[typeName] = TYPES[typeName];
var EXTRA = require("af9cf6b64343d581");
for(typeName in EXTRA)typeforce[typeName] = EXTRA[typeName];
typeforce.compile = compile;
typeforce.TfTypeError = TfTypeError;
typeforce.TfPropertyTypeError = TfPropertyTypeError;
module.exports = typeforce;

},{"b6b8244aff228baf":"6yFEF","627493ef8c0ede79":"2i9Gd","af9cf6b64343d581":"kiAtF"}],"6yFEF":[function(require,module,exports) {
var native = require("594da27a0c728f6e");
function getTypeName(fn) {
    return fn.name || fn.toString().match(/function (.*?)\s*\(/)[1];
}
function getValueTypeName(value) {
    return native.Nil(value) ? "" : getTypeName(value.constructor);
}
function getValue(value) {
    if (native.Function(value)) return "";
    if (native.String(value)) return JSON.stringify(value);
    if (value && native.Object(value)) return "";
    return value;
}
function captureStackTrace(e, t) {
    if (Error.captureStackTrace) Error.captureStackTrace(e, t);
}
function tfJSON(type) {
    if (native.Function(type)) return type.toJSON ? type.toJSON() : getTypeName(type);
    if (native.Array(type)) return "Array";
    if (type && native.Object(type)) return "Object";
    return type !== undefined ? type : "";
}
function tfErrorString(type, value, valueTypeName) {
    var valueJson = getValue(value);
    return "Expected " + tfJSON(type) + ", got" + (valueTypeName !== "" ? " " + valueTypeName : "") + (valueJson !== "" ? " " + valueJson : "");
}
function TfTypeError(type, value, valueTypeName) {
    valueTypeName = valueTypeName || getValueTypeName(value);
    this.message = tfErrorString(type, value, valueTypeName);
    captureStackTrace(this, TfTypeError);
    this.__type = type;
    this.__value = value;
    this.__valueTypeName = valueTypeName;
}
TfTypeError.prototype = Object.create(Error.prototype);
TfTypeError.prototype.constructor = TfTypeError;
function tfPropertyErrorString(type, label, name, value, valueTypeName) {
    var description = '" of type ';
    if (label === "key") description = '" with key type ';
    return tfErrorString('property "' + tfJSON(name) + description + tfJSON(type), value, valueTypeName);
}
function TfPropertyTypeError(type, property, label, value, valueTypeName) {
    if (type) {
        valueTypeName = valueTypeName || getValueTypeName(value);
        this.message = tfPropertyErrorString(type, label, property, value, valueTypeName);
    } else this.message = 'Unexpected property "' + property + '"';
    captureStackTrace(this, TfTypeError);
    this.__label = label;
    this.__property = property;
    this.__type = type;
    this.__value = value;
    this.__valueTypeName = valueTypeName;
}
TfPropertyTypeError.prototype = Object.create(Error.prototype);
TfPropertyTypeError.prototype.constructor = TfTypeError;
function tfCustomError(expected, actual) {
    return new TfTypeError(expected, {}, actual);
}
function tfSubError(e, property, label) {
    // sub child?
    if (e instanceof TfPropertyTypeError) {
        property = property + "." + e.__property;
        e = new TfPropertyTypeError(e.__type, property, e.__label, e.__value, e.__valueTypeName);
    // child?
    } else if (e instanceof TfTypeError) e = new TfPropertyTypeError(e.__type, property, label, e.__value, e.__valueTypeName);
    captureStackTrace(e);
    return e;
}
module.exports = {
    TfTypeError: TfTypeError,
    TfPropertyTypeError: TfPropertyTypeError,
    tfCustomError: tfCustomError,
    tfSubError: tfSubError,
    tfJSON: tfJSON,
    getValueTypeName: getValueTypeName
};

},{"594da27a0c728f6e":"2i9Gd"}],"2i9Gd":[function(require,module,exports) {
var types = {
    Array: function(value) {
        return value !== null && value !== undefined && value.constructor === Array;
    },
    Boolean: function(value) {
        return typeof value === "boolean";
    },
    Function: function(value) {
        return typeof value === "function";
    },
    Nil: function(value) {
        return value === undefined || value === null;
    },
    Number: function(value) {
        return typeof value === "number";
    },
    Object: function(value) {
        return typeof value === "object";
    },
    String: function(value) {
        return typeof value === "string";
    },
    "": function() {
        return true;
    }
};
// TODO: deprecate
types.Null = types.Nil;
for(var typeName in types)types[typeName].toJSON = (function(t) {
    return t;
}).bind(null, typeName);
module.exports = types;

},{}],"kiAtF":[function(require,module,exports) {
var Buffer = require("d58f6654640fbefb").Buffer;
var NATIVE = require("5dc3b5f7dd2c9307");
var ERRORS = require("98ebbf3663d2f194");
function _Buffer(value) {
    return Buffer.isBuffer(value);
}
function Hex(value) {
    return typeof value === "string" && /^([0-9a-f]{2})+$/i.test(value);
}
function _LengthN(type, length) {
    var name = type.toJSON();
    function Length(value) {
        if (!type(value)) return false;
        if (value.length === length) return true;
        throw ERRORS.tfCustomError(name + "(Length: " + length + ")", name + "(Length: " + value.length + ")");
    }
    Length.toJSON = function() {
        return name;
    };
    return Length;
}
var _ArrayN = _LengthN.bind(null, NATIVE.Array);
var _BufferN = _LengthN.bind(null, _Buffer);
var _HexN = _LengthN.bind(null, Hex);
var _StringN = _LengthN.bind(null, NATIVE.String);
function Range(a, b, f) {
    f = f || NATIVE.Number;
    function _range(value, strict) {
        return f(value, strict) && value > a && value < b;
    }
    _range.toJSON = function() {
        return `${f.toJSON()} between [${a}, ${b}]`;
    };
    return _range;
}
var INT53_MAX = Math.pow(2, 53) - 1;
function Finite(value) {
    return typeof value === "number" && isFinite(value);
}
function Int8(value) {
    return value << 24 >> 24 === value;
}
function Int16(value) {
    return value << 16 >> 16 === value;
}
function Int32(value) {
    return (value | 0) === value;
}
function Int53(value) {
    return typeof value === "number" && value >= -INT53_MAX && value <= INT53_MAX && Math.floor(value) === value;
}
function UInt8(value) {
    return (value & 0xff) === value;
}
function UInt16(value) {
    return (value & 0xffff) === value;
}
function UInt32(value) {
    return value >>> 0 === value;
}
function UInt53(value) {
    return typeof value === "number" && value >= 0 && value <= INT53_MAX && Math.floor(value) === value;
}
var types = {
    ArrayN: _ArrayN,
    Buffer: _Buffer,
    BufferN: _BufferN,
    Finite: Finite,
    Hex: Hex,
    HexN: _HexN,
    Int8: Int8,
    Int16: Int16,
    Int32: Int32,
    Int53: Int53,
    Range: Range,
    StringN: _StringN,
    UInt8: UInt8,
    UInt16: UInt16,
    UInt32: UInt32,
    UInt53: UInt53
};
for(var typeName in types)types[typeName].toJSON = (function(t) {
    return t;
}).bind(null, typeName);
module.exports = types;

},{"d58f6654640fbefb":"fCgem","5dc3b5f7dd2c9307":"2i9Gd","98ebbf3663d2f194":"6yFEF"}],"cHER6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.value = exports.prop = void 0;
function prop(object, name, f) {
    Object.defineProperty(object, name, {
        configurable: true,
        enumerable: true,
        get () {
            const _value = f.call(this);
            this[name] = _value;
            return _value;
        },
        set (_value) {
            Object.defineProperty(this, name, {
                configurable: true,
                enumerable: true,
                value: _value,
                writable: true
            });
        }
    });
}
exports.prop = prop;
function value(f) {
    let _value;
    return ()=>{
        if (_value !== undefined) return _value;
        _value = f();
        return _value;
    };
}
exports.value = value;

},{}],"bzEJW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.p2ms = void 0;
const networks_1 = require("b217898e281f5a04");
const bscript = require("f3961ea8c14a4fb4");
const types_1 = require("620642b6994d800b");
const lazy = require("d2a9502e04ffdd9b");
const OPS = bscript.OPS;
const OP_INT_BASE = OPS.OP_RESERVED; // OP_1 - 1
function stacksEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((x, i)=>{
        return x.equals(b[i]);
    });
}
// input: OP_0 [signatures ...]
// output: m [pubKeys ...] n OP_CHECKMULTISIG
function p2ms(a, opts) {
    if (!a.input && !a.output && !(a.pubkeys && a.m !== undefined) && !a.signatures) throw new TypeError("Not enough data");
    opts = Object.assign({
        validate: true
    }, opts || {});
    function isAcceptableSignature(x) {
        return bscript.isCanonicalScriptSignature(x) || (opts.allowIncomplete && x === OPS.OP_0) !== undefined;
    }
    (0, types_1.typeforce)({
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        m: types_1.typeforce.maybe(types_1.typeforce.Number),
        n: types_1.typeforce.maybe(types_1.typeforce.Number),
        output: types_1.typeforce.maybe(types_1.typeforce.Buffer),
        pubkeys: types_1.typeforce.maybe(types_1.typeforce.arrayOf(types_1.isPoint)),
        signatures: types_1.typeforce.maybe(types_1.typeforce.arrayOf(isAcceptableSignature)),
        input: types_1.typeforce.maybe(types_1.typeforce.Buffer)
    }, a);
    const network = a.network || networks_1.bitcoin;
    const o = {
        network
    };
    let chunks = [];
    let decoded = false;
    function decode(output) {
        if (decoded) return;
        decoded = true;
        chunks = bscript.decompile(output);
        o.m = chunks[0] - OP_INT_BASE;
        o.n = chunks[chunks.length - 2] - OP_INT_BASE;
        o.pubkeys = chunks.slice(1, -2);
    }
    lazy.prop(o, "output", ()=>{
        if (!a.m) return;
        if (!o.n) return;
        if (!a.pubkeys) return;
        return bscript.compile([].concat(OP_INT_BASE + a.m, a.pubkeys, OP_INT_BASE + o.n, OPS.OP_CHECKMULTISIG));
    });
    lazy.prop(o, "m", ()=>{
        if (!o.output) return;
        decode(o.output);
        return o.m;
    });
    lazy.prop(o, "n", ()=>{
        if (!o.pubkeys) return;
        return o.pubkeys.length;
    });
    lazy.prop(o, "pubkeys", ()=>{
        if (!a.output) return;
        decode(a.output);
        return o.pubkeys;
    });
    lazy.prop(o, "signatures", ()=>{
        if (!a.input) return;
        return bscript.decompile(a.input).slice(1);
    });
    lazy.prop(o, "input", ()=>{
        if (!a.signatures) return;
        return bscript.compile([
            OPS.OP_0
        ].concat(a.signatures));
    });
    lazy.prop(o, "witness", ()=>{
        if (!o.input) return;
        return [];
    });
    lazy.prop(o, "name", ()=>{
        if (!o.m || !o.n) return;
        return `p2ms(${o.m} of ${o.n})`;
    });
    // extended validation
    if (opts.validate) {
        if (a.output) {
            decode(a.output);
            if (!types_1.typeforce.Number(chunks[0])) throw new TypeError("Output is invalid");
            if (!types_1.typeforce.Number(chunks[chunks.length - 2])) throw new TypeError("Output is invalid");
            if (chunks[chunks.length - 1] !== OPS.OP_CHECKMULTISIG) throw new TypeError("Output is invalid");
            if (o.m <= 0 || o.n > 16 || o.m > o.n || o.n !== chunks.length - 3) throw new TypeError("Output is invalid");
            if (!o.pubkeys.every((x)=>(0, types_1.isPoint)(x))) throw new TypeError("Output is invalid");
            if (a.m !== undefined && a.m !== o.m) throw new TypeError("m mismatch");
            if (a.n !== undefined && a.n !== o.n) throw new TypeError("n mismatch");
            if (a.pubkeys && !stacksEqual(a.pubkeys, o.pubkeys)) throw new TypeError("Pubkeys mismatch");
        }
        if (a.pubkeys) {
            if (a.n !== undefined && a.n !== a.pubkeys.length) throw new TypeError("Pubkey count mismatch");
            o.n = a.pubkeys.length;
            if (o.n < o.m) throw new TypeError("Pubkey count cannot be less than m");
        }
        if (a.signatures) {
            if (a.signatures.length < o.m) throw new TypeError("Not enough signatures provided");
            if (a.signatures.length > o.m) throw new TypeError("Too many signatures provided");
        }
        if (a.input) {
            if (a.input[0] !== OPS.OP_0) throw new TypeError("Input is invalid");
            if (o.signatures.length === 0 || !o.signatures.every(isAcceptableSignature)) throw new TypeError("Input has invalid signature(s)");
            if (a.signatures && !stacksEqual(a.signatures, o.signatures)) throw new TypeError("Signature mismatch");
            if (a.m !== undefined && a.m !== a.signatures.length) throw new TypeError("Signature count mismatch");
        }
    }
    return Object.assign(o, a);
}
exports.p2ms = p2ms;

},{"b217898e281f5a04":"hpO0s","f3961ea8c14a4fb4":"28LFb","620642b6994d800b":"eFC2X","d2a9502e04ffdd9b":"cHER6"}],"dgFqu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.p2pk = void 0;
const networks_1 = require("9afd0cfa6d72aef9");
const bscript = require("fdd0ac01bab5db7a");
const types_1 = require("2a87a327fc34644f");
const lazy = require("88587e1ea257d089");
const OPS = bscript.OPS;
// input: {signature}
// output: {pubKey} OP_CHECKSIG
function p2pk(a, opts) {
    if (!a.input && !a.output && !a.pubkey && !a.input && !a.signature) throw new TypeError("Not enough data");
    opts = Object.assign({
        validate: true
    }, opts || {});
    (0, types_1.typeforce)({
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        output: types_1.typeforce.maybe(types_1.typeforce.Buffer),
        pubkey: types_1.typeforce.maybe(types_1.isPoint),
        signature: types_1.typeforce.maybe(bscript.isCanonicalScriptSignature),
        input: types_1.typeforce.maybe(types_1.typeforce.Buffer)
    }, a);
    const _chunks = lazy.value(()=>{
        return bscript.decompile(a.input);
    });
    const network = a.network || networks_1.bitcoin;
    const o = {
        name: "p2pk",
        network
    };
    lazy.prop(o, "output", ()=>{
        if (!a.pubkey) return;
        return bscript.compile([
            a.pubkey,
            OPS.OP_CHECKSIG
        ]);
    });
    lazy.prop(o, "pubkey", ()=>{
        if (!a.output) return;
        return a.output.slice(1, -1);
    });
    lazy.prop(o, "signature", ()=>{
        if (!a.input) return;
        return _chunks()[0];
    });
    lazy.prop(o, "input", ()=>{
        if (!a.signature) return;
        return bscript.compile([
            a.signature
        ]);
    });
    lazy.prop(o, "witness", ()=>{
        if (!o.input) return;
        return [];
    });
    // extended validation
    if (opts.validate) {
        if (a.output) {
            if (a.output[a.output.length - 1] !== OPS.OP_CHECKSIG) throw new TypeError("Output is invalid");
            if (!(0, types_1.isPoint)(o.pubkey)) throw new TypeError("Output pubkey is invalid");
            if (a.pubkey && !a.pubkey.equals(o.pubkey)) throw new TypeError("Pubkey mismatch");
        }
        if (a.signature) {
            if (a.input && !a.input.equals(o.input)) throw new TypeError("Signature mismatch");
        }
        if (a.input) {
            if (_chunks().length !== 1) throw new TypeError("Input is invalid");
            if (!bscript.isCanonicalScriptSignature(o.signature)) throw new TypeError("Input has invalid signature");
        }
    }
    return Object.assign(o, a);
}
exports.p2pk = p2pk;

},{"9afd0cfa6d72aef9":"hpO0s","fdd0ac01bab5db7a":"28LFb","2a87a327fc34644f":"eFC2X","88587e1ea257d089":"cHER6"}],"hr95c":[function(require,module,exports) {
var Buffer = require("7cd63e6e4ad49018").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.p2pkh = void 0;
const bcrypto = require("2ed83564aa1e3b7e");
const networks_1 = require("93f088a32c181dff");
const bscript = require("8faff36ab611fa24");
const types_1 = require("2a9e3afb6d7a2743");
const lazy = require("a8c6c65f4f76d29b");
const bs58check = require("d9ed3806a3280851");
const OPS = bscript.OPS;
// input: {signature} {pubkey}
// output: OP_DUP OP_HASH160 {hash160(pubkey)} OP_EQUALVERIFY OP_CHECKSIG
function p2pkh(a, opts) {
    if (!a.address && !a.hash && !a.output && !a.pubkey && !a.input) throw new TypeError("Not enough data");
    opts = Object.assign({
        validate: true
    }, opts || {});
    (0, types_1.typeforce)({
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        address: types_1.typeforce.maybe(types_1.typeforce.String),
        hash: types_1.typeforce.maybe(types_1.typeforce.BufferN(20)),
        output: types_1.typeforce.maybe(types_1.typeforce.BufferN(25)),
        pubkey: types_1.typeforce.maybe(types_1.isPoint),
        signature: types_1.typeforce.maybe(bscript.isCanonicalScriptSignature),
        input: types_1.typeforce.maybe(types_1.typeforce.Buffer)
    }, a);
    const _address = lazy.value(()=>{
        const payload = Buffer.from(bs58check.decode(a.address));
        const version = payload.readUInt8(0);
        const hash = payload.slice(1);
        return {
            version,
            hash
        };
    });
    const _chunks = lazy.value(()=>{
        return bscript.decompile(a.input);
    });
    const network = a.network || networks_1.bitcoin;
    const o = {
        name: "p2pkh",
        network
    };
    lazy.prop(o, "address", ()=>{
        if (!o.hash) return;
        const payload = Buffer.allocUnsafe(21);
        payload.writeUInt8(network.pubKeyHash, 0);
        o.hash.copy(payload, 1);
        return bs58check.encode(payload);
    });
    lazy.prop(o, "hash", ()=>{
        if (a.output) return a.output.slice(3, 23);
        if (a.address) return _address().hash;
        if (a.pubkey || o.pubkey) return bcrypto.hash160(a.pubkey || o.pubkey);
    });
    lazy.prop(o, "output", ()=>{
        if (!o.hash) return;
        return bscript.compile([
            OPS.OP_DUP,
            OPS.OP_HASH160,
            o.hash,
            OPS.OP_EQUALVERIFY,
            OPS.OP_CHECKSIG
        ]);
    });
    lazy.prop(o, "pubkey", ()=>{
        if (!a.input) return;
        return _chunks()[1];
    });
    lazy.prop(o, "signature", ()=>{
        if (!a.input) return;
        return _chunks()[0];
    });
    lazy.prop(o, "input", ()=>{
        if (!a.pubkey) return;
        if (!a.signature) return;
        return bscript.compile([
            a.signature,
            a.pubkey
        ]);
    });
    lazy.prop(o, "witness", ()=>{
        if (!o.input) return;
        return [];
    });
    // extended validation
    if (opts.validate) {
        let hash = Buffer.from([]);
        if (a.address) {
            if (_address().version !== network.pubKeyHash) throw new TypeError("Invalid version or Network mismatch");
            if (_address().hash.length !== 20) throw new TypeError("Invalid address");
            hash = _address().hash;
        }
        if (a.hash) {
            if (hash.length > 0 && !hash.equals(a.hash)) throw new TypeError("Hash mismatch");
            else hash = a.hash;
        }
        if (a.output) {
            if (a.output.length !== 25 || a.output[0] !== OPS.OP_DUP || a.output[1] !== OPS.OP_HASH160 || a.output[2] !== 0x14 || a.output[23] !== OPS.OP_EQUALVERIFY || a.output[24] !== OPS.OP_CHECKSIG) throw new TypeError("Output is invalid");
            const hash2 = a.output.slice(3, 23);
            if (hash.length > 0 && !hash.equals(hash2)) throw new TypeError("Hash mismatch");
            else hash = hash2;
        }
        if (a.pubkey) {
            const pkh = bcrypto.hash160(a.pubkey);
            if (hash.length > 0 && !hash.equals(pkh)) throw new TypeError("Hash mismatch");
            else hash = pkh;
        }
        if (a.input) {
            const chunks = _chunks();
            if (chunks.length !== 2) throw new TypeError("Input is invalid");
            if (!bscript.isCanonicalScriptSignature(chunks[0])) throw new TypeError("Input has invalid signature");
            if (!(0, types_1.isPoint)(chunks[1])) throw new TypeError("Input has invalid pubkey");
            if (a.signature && !a.signature.equals(chunks[0])) throw new TypeError("Signature mismatch");
            if (a.pubkey && !a.pubkey.equals(chunks[1])) throw new TypeError("Pubkey mismatch");
            const pkh = bcrypto.hash160(chunks[1]);
            if (hash.length > 0 && !hash.equals(pkh)) throw new TypeError("Hash mismatch");
        }
    }
    return Object.assign(o, a);
}
exports.p2pkh = p2pkh;

},{"7cd63e6e4ad49018":"fCgem","2ed83564aa1e3b7e":"4BCCF","93f088a32c181dff":"hpO0s","8faff36ab611fa24":"28LFb","2a9e3afb6d7a2743":"eFC2X","a8c6c65f4f76d29b":"cHER6","d9ed3806a3280851":"d8uT8"}],"4BCCF":[function(require,module,exports) {
var Buffer = require("53f2d60b9ddbd803").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.taggedHash = exports.TAGGED_HASH_PREFIXES = exports.TAGS = exports.hash256 = exports.hash160 = exports.sha256 = exports.sha1 = exports.ripemd160 = void 0;
const ripemd160_1 = require("54253ee81551a303");
const sha1_1 = require("24aa0bf6edf03437");
const sha256_1 = require("8c1fb648f86b2fd0");
function ripemd160(buffer) {
    return Buffer.from((0, ripemd160_1.ripemd160)(Uint8Array.from(buffer)));
}
exports.ripemd160 = ripemd160;
function sha1(buffer) {
    return Buffer.from((0, sha1_1.sha1)(Uint8Array.from(buffer)));
}
exports.sha1 = sha1;
function sha256(buffer) {
    return Buffer.from((0, sha256_1.sha256)(Uint8Array.from(buffer)));
}
exports.sha256 = sha256;
function hash160(buffer) {
    return Buffer.from((0, ripemd160_1.ripemd160)((0, sha256_1.sha256)(Uint8Array.from(buffer))));
}
exports.hash160 = hash160;
function hash256(buffer) {
    return Buffer.from((0, sha256_1.sha256)((0, sha256_1.sha256)(Uint8Array.from(buffer))));
}
exports.hash256 = hash256;
exports.TAGS = [
    "BIP0340/challenge",
    "BIP0340/aux",
    "BIP0340/nonce",
    "TapLeaf",
    "TapBranch",
    "TapSighash",
    "TapTweak",
    "KeyAgg list",
    "KeyAgg coefficient"
];
/** An object mapping tags to their tagged hash prefix of [SHA256(tag) | SHA256(tag)] */ exports.TAGGED_HASH_PREFIXES = {
    "BIP0340/challenge": Buffer.from([
        123,
        181,
        45,
        122,
        159,
        239,
        88,
        50,
        62,
        177,
        191,
        122,
        64,
        125,
        179,
        130,
        210,
        243,
        242,
        216,
        27,
        177,
        34,
        79,
        73,
        254,
        81,
        143,
        109,
        72,
        211,
        124,
        123,
        181,
        45,
        122,
        159,
        239,
        88,
        50,
        62,
        177,
        191,
        122,
        64,
        125,
        179,
        130,
        210,
        243,
        242,
        216,
        27,
        177,
        34,
        79,
        73,
        254,
        81,
        143,
        109,
        72,
        211,
        124
    ]),
    "BIP0340/aux": Buffer.from([
        241,
        239,
        78,
        94,
        192,
        99,
        202,
        218,
        109,
        148,
        202,
        250,
        157,
        152,
        126,
        160,
        105,
        38,
        88,
        57,
        236,
        193,
        31,
        151,
        45,
        119,
        165,
        46,
        216,
        193,
        204,
        144,
        241,
        239,
        78,
        94,
        192,
        99,
        202,
        218,
        109,
        148,
        202,
        250,
        157,
        152,
        126,
        160,
        105,
        38,
        88,
        57,
        236,
        193,
        31,
        151,
        45,
        119,
        165,
        46,
        216,
        193,
        204,
        144
    ]),
    "BIP0340/nonce": Buffer.from([
        7,
        73,
        119,
        52,
        167,
        155,
        203,
        53,
        91,
        155,
        140,
        125,
        3,
        79,
        18,
        28,
        244,
        52,
        215,
        62,
        247,
        45,
        218,
        25,
        135,
        0,
        97,
        251,
        82,
        191,
        235,
        47,
        7,
        73,
        119,
        52,
        167,
        155,
        203,
        53,
        91,
        155,
        140,
        125,
        3,
        79,
        18,
        28,
        244,
        52,
        215,
        62,
        247,
        45,
        218,
        25,
        135,
        0,
        97,
        251,
        82,
        191,
        235,
        47
    ]),
    TapLeaf: Buffer.from([
        174,
        234,
        143,
        220,
        66,
        8,
        152,
        49,
        5,
        115,
        75,
        88,
        8,
        29,
        30,
        38,
        56,
        211,
        95,
        28,
        181,
        64,
        8,
        212,
        211,
        87,
        202,
        3,
        190,
        120,
        233,
        238,
        174,
        234,
        143,
        220,
        66,
        8,
        152,
        49,
        5,
        115,
        75,
        88,
        8,
        29,
        30,
        38,
        56,
        211,
        95,
        28,
        181,
        64,
        8,
        212,
        211,
        87,
        202,
        3,
        190,
        120,
        233,
        238
    ]),
    TapBranch: Buffer.from([
        25,
        65,
        161,
        242,
        229,
        110,
        185,
        95,
        162,
        169,
        241,
        148,
        190,
        92,
        1,
        247,
        33,
        111,
        51,
        237,
        130,
        176,
        145,
        70,
        52,
        144,
        208,
        91,
        245,
        22,
        160,
        21,
        25,
        65,
        161,
        242,
        229,
        110,
        185,
        95,
        162,
        169,
        241,
        148,
        190,
        92,
        1,
        247,
        33,
        111,
        51,
        237,
        130,
        176,
        145,
        70,
        52,
        144,
        208,
        91,
        245,
        22,
        160,
        21
    ]),
    TapSighash: Buffer.from([
        244,
        10,
        72,
        223,
        75,
        42,
        112,
        200,
        180,
        146,
        75,
        242,
        101,
        70,
        97,
        237,
        61,
        149,
        253,
        102,
        163,
        19,
        235,
        135,
        35,
        117,
        151,
        198,
        40,
        228,
        160,
        49,
        244,
        10,
        72,
        223,
        75,
        42,
        112,
        200,
        180,
        146,
        75,
        242,
        101,
        70,
        97,
        237,
        61,
        149,
        253,
        102,
        163,
        19,
        235,
        135,
        35,
        117,
        151,
        198,
        40,
        228,
        160,
        49
    ]),
    TapTweak: Buffer.from([
        232,
        15,
        225,
        99,
        156,
        156,
        160,
        80,
        227,
        175,
        27,
        57,
        193,
        67,
        198,
        62,
        66,
        156,
        188,
        235,
        21,
        217,
        64,
        251,
        181,
        197,
        161,
        244,
        175,
        87,
        197,
        233,
        232,
        15,
        225,
        99,
        156,
        156,
        160,
        80,
        227,
        175,
        27,
        57,
        193,
        67,
        198,
        62,
        66,
        156,
        188,
        235,
        21,
        217,
        64,
        251,
        181,
        197,
        161,
        244,
        175,
        87,
        197,
        233
    ]),
    "KeyAgg list": Buffer.from([
        72,
        28,
        151,
        28,
        60,
        11,
        70,
        215,
        240,
        178,
        117,
        174,
        89,
        141,
        78,
        44,
        126,
        215,
        49,
        156,
        89,
        74,
        92,
        110,
        199,
        158,
        160,
        212,
        153,
        2,
        148,
        240,
        72,
        28,
        151,
        28,
        60,
        11,
        70,
        215,
        240,
        178,
        117,
        174,
        89,
        141,
        78,
        44,
        126,
        215,
        49,
        156,
        89,
        74,
        92,
        110,
        199,
        158,
        160,
        212,
        153,
        2,
        148,
        240
    ]),
    "KeyAgg coefficient": Buffer.from([
        191,
        201,
        4,
        3,
        77,
        28,
        136,
        232,
        200,
        14,
        34,
        229,
        61,
        36,
        86,
        109,
        100,
        130,
        78,
        214,
        66,
        114,
        129,
        192,
        145,
        0,
        249,
        77,
        205,
        82,
        201,
        129,
        191,
        201,
        4,
        3,
        77,
        28,
        136,
        232,
        200,
        14,
        34,
        229,
        61,
        36,
        86,
        109,
        100,
        130,
        78,
        214,
        66,
        114,
        129,
        192,
        145,
        0,
        249,
        77,
        205,
        82,
        201,
        129
    ])
};
function taggedHash(prefix, data) {
    return sha256(Buffer.concat([
        exports.TAGGED_HASH_PREFIXES[prefix],
        data
    ]));
}
exports.taggedHash = taggedHash;

},{"53f2d60b9ddbd803":"fCgem","54253ee81551a303":"hb7Go","24aa0bf6edf03437":"hWcnG","8c1fb648f86b2fd0":"JjjO8"}],"hb7Go":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ripemd160 = exports.RIPEMD160 = void 0;
const _md_js_1 = require("49888edee0c6a653");
const utils_js_1 = require("bec948ecfb1ca2ac");
// https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
// https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
const Rho = /* @__PURE__ */ new Uint8Array([
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8
]);
const Id = /* @__PURE__ */ new Uint8Array(new Array(16).fill(0).map((_, i)=>i));
const Pi = /* @__PURE__ */ Id.map((i)=>(9 * i + 5) % 16);
let idxL = [
    Id
];
let idxR = [
    Pi
];
for(let i = 0; i < 4; i++)for (let j of [
    idxL,
    idxR
])j.push(j[i].map((k)=>Rho[k]));
const shifts = /* @__PURE__ */ [
    [
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8
    ],
    [
        12,
        13,
        11,
        15,
        6,
        9,
        9,
        7,
        12,
        15,
        11,
        13,
        7,
        8,
        7,
        7
    ],
    [
        13,
        15,
        14,
        11,
        7,
        7,
        6,
        8,
        13,
        14,
        13,
        12,
        5,
        5,
        6,
        9
    ],
    [
        14,
        11,
        12,
        14,
        8,
        6,
        5,
        5,
        15,
        12,
        15,
        14,
        9,
        9,
        8,
        6
    ],
    [
        15,
        12,
        13,
        13,
        9,
        5,
        8,
        6,
        14,
        11,
        12,
        11,
        8,
        6,
        5,
        5
    ]
].map((i)=>new Uint8Array(i));
const shiftsL = /* @__PURE__ */ idxL.map((idx, i)=>idx.map((j)=>shifts[i][j]));
const shiftsR = /* @__PURE__ */ idxR.map((idx, i)=>idx.map((j)=>shifts[i][j]));
const Kl = /* @__PURE__ */ new Uint32Array([
    0x00000000,
    0x5a827999,
    0x6ed9eba1,
    0x8f1bbcdc,
    0xa953fd4e
]);
const Kr = /* @__PURE__ */ new Uint32Array([
    0x50a28be6,
    0x5c4dd124,
    0x6d703ef3,
    0x7a6d76e9,
    0x00000000
]);
// It's called f() in spec.
function f(group, x, y, z) {
    if (group === 0) return x ^ y ^ z;
    else if (group === 1) return x & y | ~x & z;
    else if (group === 2) return (x | ~y) ^ z;
    else if (group === 3) return x & z | y & ~z;
    else return x ^ (y | ~z);
}
// Temporary buffer, not used to store anything between runs
const R_BUF = /* @__PURE__ */ new Uint32Array(16);
class RIPEMD160 extends _md_js_1.HashMD {
    constructor(){
        super(64, 20, 8, true);
        this.h0 = 1732584193;
        this.h1 = -271733879;
        this.h2 = -1732584194;
        this.h3 = 271733878;
        this.h4 = -1009589776;
    }
    get() {
        const { h0, h1, h2, h3, h4 } = this;
        return [
            h0,
            h1,
            h2,
            h3,
            h4
        ];
    }
    set(h0, h1, h2, h3, h4) {
        this.h0 = h0 | 0;
        this.h1 = h1 | 0;
        this.h2 = h2 | 0;
        this.h3 = h3 | 0;
        this.h4 = h4 | 0;
    }
    process(view, offset) {
        for(let i = 0; i < 16; i++, offset += 4)R_BUF[i] = view.getUint32(offset, true);
        // prettier-ignore
        let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
        // Instead of iterating 0 to 80, we split it into 5 groups
        // And use the groups in constants, functions, etc. Much simpler
        for(let group = 0; group < 5; group++){
            const rGroup = 4 - group;
            const hbl = Kl[group], hbr = Kr[group]; // prettier-ignore
            const rl = idxL[group], rr = idxR[group]; // prettier-ignore
            const sl = shiftsL[group], sr = shiftsR[group]; // prettier-ignore
            for(let i = 0; i < 16; i++){
                const tl = (0, utils_js_1.rotl)(al + f(group, bl, cl, dl) + R_BUF[rl[i]] + hbl, sl[i]) + el | 0;
                al = el, el = dl, dl = (0, utils_js_1.rotl)(cl, 10) | 0, cl = bl, bl = tl; // prettier-ignore
            }
            // 2 loops are 10% faster
            for(let i = 0; i < 16; i++){
                const tr = (0, utils_js_1.rotl)(ar + f(rGroup, br, cr, dr) + R_BUF[rr[i]] + hbr, sr[i]) + er | 0;
                ar = er, er = dr, dr = (0, utils_js_1.rotl)(cr, 10) | 0, cr = br, br = tr; // prettier-ignore
            }
        }
        // Add the compressed chunk to the current hash value
        this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
    }
    roundClean() {
        R_BUF.fill(0);
    }
    destroy() {
        this.destroyed = true;
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0);
    }
}
exports.RIPEMD160 = RIPEMD160;
/**
 * RIPEMD-160 - a hash function from 1990s.
 * @param message - msg that would be hashed
 */ exports.ripemd160 = (0, utils_js_1.wrapConstructor)(()=>new RIPEMD160());

},{"49888edee0c6a653":"4Doa0","bec948ecfb1ca2ac":"2ehgp"}],"hWcnG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha1 = void 0;
const _md_js_1 = require("b76101b422243813");
const utils_js_1 = require("efc511ca731923aa");
// SHA1 (RFC 3174) was cryptographically broken. It's still used. Don't use it for a new protocol.
// Initial state
const SHA1_IV = /* @__PURE__ */ new Uint32Array([
    0x67452301,
    0xefcdab89,
    0x98badcfe,
    0x10325476,
    0xc3d2e1f0
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA1_W = /* @__PURE__ */ new Uint32Array(80);
class SHA1 extends _md_js_1.HashMD {
    constructor(){
        super(64, 20, 8, false);
        this.A = SHA1_IV[0] | 0;
        this.B = SHA1_IV[1] | 0;
        this.C = SHA1_IV[2] | 0;
        this.D = SHA1_IV[3] | 0;
        this.E = SHA1_IV[4] | 0;
    }
    get() {
        const { A, B, C, D, E } = this;
        return [
            A,
            B,
            C,
            D,
            E
        ];
    }
    set(A, B, C, D, E) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
    }
    process(view, offset) {
        for(let i = 0; i < 16; i++, offset += 4)SHA1_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 80; i++)SHA1_W[i] = (0, utils_js_1.rotl)(SHA1_W[i - 3] ^ SHA1_W[i - 8] ^ SHA1_W[i - 14] ^ SHA1_W[i - 16], 1);
        // Compression function main loop, 80 rounds
        let { A, B, C, D, E } = this;
        for(let i = 0; i < 80; i++){
            let F, K;
            if (i < 20) {
                F = (0, _md_js_1.Chi)(B, C, D);
                K = 0x5a827999;
            } else if (i < 40) {
                F = B ^ C ^ D;
                K = 0x6ed9eba1;
            } else if (i < 60) {
                F = (0, _md_js_1.Maj)(B, C, D);
                K = 0x8f1bbcdc;
            } else {
                F = B ^ C ^ D;
                K = 0xca62c1d6;
            }
            const T = (0, utils_js_1.rotl)(A, 5) + F + E + K + SHA1_W[i] | 0;
            E = D;
            D = C;
            C = (0, utils_js_1.rotl)(B, 30);
            B = A;
            A = T;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        this.set(A, B, C, D, E);
    }
    roundClean() {
        SHA1_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
exports.sha1 = (0, utils_js_1.wrapConstructor)(()=>new SHA1());

},{"b76101b422243813":"4Doa0","efc511ca731923aa":"2ehgp"}],"gYQTr":[function(require,module,exports) {
var Buffer = require("c6b571691afe0e89").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.p2sh = void 0;
const bcrypto = require("91194c2f7e31c985");
const networks_1 = require("9002de76ada6b23c");
const bscript = require("8f74fc4c7d847f80");
const types_1 = require("56a83ca205eb1db5");
const lazy = require("de67a085acdb2528");
const bs58check = require("ef6a72781420c06f");
const OPS = bscript.OPS;
function stacksEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((x, i)=>{
        return x.equals(b[i]);
    });
}
// input: [redeemScriptSig ...] {redeemScript}
// witness: <?>
// output: OP_HASH160 {hash160(redeemScript)} OP_EQUAL
function p2sh(a, opts) {
    if (!a.address && !a.hash && !a.output && !a.redeem && !a.input) throw new TypeError("Not enough data");
    opts = Object.assign({
        validate: true
    }, opts || {});
    (0, types_1.typeforce)({
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        address: types_1.typeforce.maybe(types_1.typeforce.String),
        hash: types_1.typeforce.maybe(types_1.typeforce.BufferN(20)),
        output: types_1.typeforce.maybe(types_1.typeforce.BufferN(23)),
        redeem: types_1.typeforce.maybe({
            network: types_1.typeforce.maybe(types_1.typeforce.Object),
            output: types_1.typeforce.maybe(types_1.typeforce.Buffer),
            input: types_1.typeforce.maybe(types_1.typeforce.Buffer),
            witness: types_1.typeforce.maybe(types_1.typeforce.arrayOf(types_1.typeforce.Buffer))
        }),
        input: types_1.typeforce.maybe(types_1.typeforce.Buffer),
        witness: types_1.typeforce.maybe(types_1.typeforce.arrayOf(types_1.typeforce.Buffer))
    }, a);
    let network = a.network;
    if (!network) network = a.redeem && a.redeem.network || networks_1.bitcoin;
    const o = {
        network
    };
    const _address = lazy.value(()=>{
        const payload = Buffer.from(bs58check.decode(a.address));
        const version = payload.readUInt8(0);
        const hash = payload.slice(1);
        return {
            version,
            hash
        };
    });
    const _chunks = lazy.value(()=>{
        return bscript.decompile(a.input);
    });
    const _redeem = lazy.value(()=>{
        const chunks = _chunks();
        const lastChunk = chunks[chunks.length - 1];
        return {
            network,
            output: lastChunk === OPS.OP_FALSE ? Buffer.from([]) : lastChunk,
            input: bscript.compile(chunks.slice(0, -1)),
            witness: a.witness || []
        };
    });
    // output dependents
    lazy.prop(o, "address", ()=>{
        if (!o.hash) return;
        const payload = Buffer.allocUnsafe(21);
        payload.writeUInt8(o.network.scriptHash, 0);
        o.hash.copy(payload, 1);
        return bs58check.encode(payload);
    });
    lazy.prop(o, "hash", ()=>{
        // in order of least effort
        if (a.output) return a.output.slice(2, 22);
        if (a.address) return _address().hash;
        if (o.redeem && o.redeem.output) return bcrypto.hash160(o.redeem.output);
    });
    lazy.prop(o, "output", ()=>{
        if (!o.hash) return;
        return bscript.compile([
            OPS.OP_HASH160,
            o.hash,
            OPS.OP_EQUAL
        ]);
    });
    // input dependents
    lazy.prop(o, "redeem", ()=>{
        if (!a.input) return;
        return _redeem();
    });
    lazy.prop(o, "input", ()=>{
        if (!a.redeem || !a.redeem.input || !a.redeem.output) return;
        return bscript.compile([].concat(bscript.decompile(a.redeem.input), a.redeem.output));
    });
    lazy.prop(o, "witness", ()=>{
        if (o.redeem && o.redeem.witness) return o.redeem.witness;
        if (o.input) return [];
    });
    lazy.prop(o, "name", ()=>{
        const nameParts = [
            "p2sh"
        ];
        if (o.redeem !== undefined && o.redeem.name !== undefined) nameParts.push(o.redeem.name);
        return nameParts.join("-");
    });
    if (opts.validate) {
        let hash = Buffer.from([]);
        if (a.address) {
            if (_address().version !== network.scriptHash) throw new TypeError("Invalid version or Network mismatch");
            if (_address().hash.length !== 20) throw new TypeError("Invalid address");
            hash = _address().hash;
        }
        if (a.hash) {
            if (hash.length > 0 && !hash.equals(a.hash)) throw new TypeError("Hash mismatch");
            else hash = a.hash;
        }
        if (a.output) {
            if (a.output.length !== 23 || a.output[0] !== OPS.OP_HASH160 || a.output[1] !== 0x14 || a.output[22] !== OPS.OP_EQUAL) throw new TypeError("Output is invalid");
            const hash2 = a.output.slice(2, 22);
            if (hash.length > 0 && !hash.equals(hash2)) throw new TypeError("Hash mismatch");
            else hash = hash2;
        }
        // inlined to prevent 'no-inner-declarations' failing
        const checkRedeem = (redeem)=>{
            // is the redeem output empty/invalid?
            if (redeem.output) {
                const decompile = bscript.decompile(redeem.output);
                if (!decompile || decompile.length < 1) throw new TypeError("Redeem.output too short");
                if (redeem.output.byteLength > 520) throw new TypeError("Redeem.output unspendable if larger than 520 bytes");
                if (bscript.countNonPushOnlyOPs(decompile) > 201) throw new TypeError("Redeem.output unspendable with more than 201 non-push ops");
                // match hash against other sources
                const hash2 = bcrypto.hash160(redeem.output);
                if (hash.length > 0 && !hash.equals(hash2)) throw new TypeError("Hash mismatch");
                else hash = hash2;
            }
            if (redeem.input) {
                const hasInput = redeem.input.length > 0;
                const hasWitness = redeem.witness && redeem.witness.length > 0;
                if (!hasInput && !hasWitness) throw new TypeError("Empty input");
                if (hasInput && hasWitness) throw new TypeError("Input and witness provided");
                if (hasInput) {
                    const richunks = bscript.decompile(redeem.input);
                    if (!bscript.isPushOnly(richunks)) throw new TypeError("Non push-only scriptSig");
                }
            }
        };
        if (a.input) {
            const chunks = _chunks();
            if (!chunks || chunks.length < 1) throw new TypeError("Input too short");
            if (!Buffer.isBuffer(_redeem().output)) throw new TypeError("Input is invalid");
            checkRedeem(_redeem());
        }
        if (a.redeem) {
            if (a.redeem.network && a.redeem.network !== network) throw new TypeError("Network mismatch");
            if (a.input) {
                const redeem = _redeem();
                if (a.redeem.output && !a.redeem.output.equals(redeem.output)) throw new TypeError("Redeem.output mismatch");
                if (a.redeem.input && !a.redeem.input.equals(redeem.input)) throw new TypeError("Redeem.input mismatch");
            }
            checkRedeem(a.redeem);
        }
        if (a.witness) {
            if (a.redeem && a.redeem.witness && !stacksEqual(a.redeem.witness, a.witness)) throw new TypeError("Witness and redeem.witness mismatch");
        }
    }
    return Object.assign(o, a);
}
exports.p2sh = p2sh;

},{"c6b571691afe0e89":"fCgem","91194c2f7e31c985":"4BCCF","9002de76ada6b23c":"hpO0s","8f74fc4c7d847f80":"28LFb","56a83ca205eb1db5":"eFC2X","de67a085acdb2528":"cHER6","ef6a72781420c06f":"d8uT8"}],"6H3XB":[function(require,module,exports) {
var Buffer = require("405049649d0ed172").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.p2wpkh = void 0;
const bcrypto = require("7d172418db599bc7");
const networks_1 = require("487e81bda7841c55");
const bscript = require("fe665ce0401f37da");
const types_1 = require("e408dd2b4f8473c1");
const lazy = require("6134b4e9abd36ea8");
const bech32_1 = require("82b22dca455ebf20");
const OPS = bscript.OPS;
const EMPTY_BUFFER = Buffer.alloc(0);
// witness: {signature} {pubKey}
// input: <>
// output: OP_0 {pubKeyHash}
function p2wpkh(a, opts) {
    if (!a.address && !a.hash && !a.output && !a.pubkey && !a.witness) throw new TypeError("Not enough data");
    opts = Object.assign({
        validate: true
    }, opts || {});
    (0, types_1.typeforce)({
        address: types_1.typeforce.maybe(types_1.typeforce.String),
        hash: types_1.typeforce.maybe(types_1.typeforce.BufferN(20)),
        input: types_1.typeforce.maybe(types_1.typeforce.BufferN(0)),
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        output: types_1.typeforce.maybe(types_1.typeforce.BufferN(22)),
        pubkey: types_1.typeforce.maybe(types_1.isPoint),
        signature: types_1.typeforce.maybe(bscript.isCanonicalScriptSignature),
        witness: types_1.typeforce.maybe(types_1.typeforce.arrayOf(types_1.typeforce.Buffer))
    }, a);
    const _address = lazy.value(()=>{
        const result = bech32_1.bech32.decode(a.address);
        const version = result.words.shift();
        const data = bech32_1.bech32.fromWords(result.words);
        return {
            version,
            prefix: result.prefix,
            data: Buffer.from(data)
        };
    });
    const network = a.network || networks_1.bitcoin;
    const o = {
        name: "p2wpkh",
        network
    };
    lazy.prop(o, "address", ()=>{
        if (!o.hash) return;
        const words = bech32_1.bech32.toWords(o.hash);
        words.unshift(0x00);
        return bech32_1.bech32.encode(network.bech32, words);
    });
    lazy.prop(o, "hash", ()=>{
        if (a.output) return a.output.slice(2, 22);
        if (a.address) return _address().data;
        if (a.pubkey || o.pubkey) return bcrypto.hash160(a.pubkey || o.pubkey);
    });
    lazy.prop(o, "output", ()=>{
        if (!o.hash) return;
        return bscript.compile([
            OPS.OP_0,
            o.hash
        ]);
    });
    lazy.prop(o, "pubkey", ()=>{
        if (a.pubkey) return a.pubkey;
        if (!a.witness) return;
        return a.witness[1];
    });
    lazy.prop(o, "signature", ()=>{
        if (!a.witness) return;
        return a.witness[0];
    });
    lazy.prop(o, "input", ()=>{
        if (!o.witness) return;
        return EMPTY_BUFFER;
    });
    lazy.prop(o, "witness", ()=>{
        if (!a.pubkey) return;
        if (!a.signature) return;
        return [
            a.signature,
            a.pubkey
        ];
    });
    // extended validation
    if (opts.validate) {
        let hash = Buffer.from([]);
        if (a.address) {
            if (network && network.bech32 !== _address().prefix) throw new TypeError("Invalid prefix or Network mismatch");
            if (_address().version !== 0x00) throw new TypeError("Invalid address version");
            if (_address().data.length !== 20) throw new TypeError("Invalid address data");
            hash = _address().data;
        }
        if (a.hash) {
            if (hash.length > 0 && !hash.equals(a.hash)) throw new TypeError("Hash mismatch");
            else hash = a.hash;
        }
        if (a.output) {
            if (a.output.length !== 22 || a.output[0] !== OPS.OP_0 || a.output[1] !== 0x14) throw new TypeError("Output is invalid");
            if (hash.length > 0 && !hash.equals(a.output.slice(2))) throw new TypeError("Hash mismatch");
            else hash = a.output.slice(2);
        }
        if (a.pubkey) {
            const pkh = bcrypto.hash160(a.pubkey);
            if (hash.length > 0 && !hash.equals(pkh)) throw new TypeError("Hash mismatch");
            else hash = pkh;
            if (!(0, types_1.isPoint)(a.pubkey) || a.pubkey.length !== 33) throw new TypeError("Invalid pubkey for p2wpkh");
        }
        if (a.witness) {
            if (a.witness.length !== 2) throw new TypeError("Witness is invalid");
            if (!bscript.isCanonicalScriptSignature(a.witness[0])) throw new TypeError("Witness has invalid signature");
            if (!(0, types_1.isPoint)(a.witness[1]) || a.witness[1].length !== 33) throw new TypeError("Witness has invalid pubkey");
            if (a.signature && !a.signature.equals(a.witness[0])) throw new TypeError("Signature mismatch");
            if (a.pubkey && !a.pubkey.equals(a.witness[1])) throw new TypeError("Pubkey mismatch");
            const pkh = bcrypto.hash160(a.witness[1]);
            if (hash.length > 0 && !hash.equals(pkh)) throw new TypeError("Hash mismatch");
        }
    }
    return Object.assign(o, a);
}
exports.p2wpkh = p2wpkh;

},{"405049649d0ed172":"fCgem","7d172418db599bc7":"4BCCF","487e81bda7841c55":"hpO0s","fe665ce0401f37da":"28LFb","e408dd2b4f8473c1":"eFC2X","6134b4e9abd36ea8":"cHER6","82b22dca455ebf20":"fgsjs"}],"fgsjs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bech32m = exports.bech32 = void 0;
const ALPHABET = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
const ALPHABET_MAP = {};
for(let z = 0; z < ALPHABET.length; z++){
    const x = ALPHABET.charAt(z);
    ALPHABET_MAP[x] = z;
}
function polymodStep(pre) {
    const b = pre >> 25;
    return (pre & 0x1ffffff) << 5 ^ -(b >> 0 & 1) & 0x3b6a57b2 ^ -(b >> 1 & 1) & 0x26508e6d ^ -(b >> 2 & 1) & 0x1ea119fa ^ -(b >> 3 & 1) & 0x3d4233dd ^ -(b >> 4 & 1) & 0x2a1462b3;
}
function prefixChk(prefix) {
    let chk = 1;
    for(let i = 0; i < prefix.length; ++i){
        const c = prefix.charCodeAt(i);
        if (c < 33 || c > 126) return "Invalid prefix (" + prefix + ")";
        chk = polymodStep(chk) ^ c >> 5;
    }
    chk = polymodStep(chk);
    for(let i = 0; i < prefix.length; ++i){
        const v = prefix.charCodeAt(i);
        chk = polymodStep(chk) ^ v & 0x1f;
    }
    return chk;
}
function convert(data, inBits, outBits, pad) {
    let value = 0;
    let bits = 0;
    const maxV = (1 << outBits) - 1;
    const result = [];
    for(let i = 0; i < data.length; ++i){
        value = value << inBits | data[i];
        bits += inBits;
        while(bits >= outBits){
            bits -= outBits;
            result.push(value >> bits & maxV);
        }
    }
    if (pad) {
        if (bits > 0) result.push(value << outBits - bits & maxV);
    } else {
        if (bits >= inBits) return "Excess padding";
        if (value << outBits - bits & maxV) return "Non-zero padding";
    }
    return result;
}
function toWords(bytes) {
    return convert(bytes, 8, 5, true);
}
function fromWordsUnsafe(words) {
    const res = convert(words, 5, 8, false);
    if (Array.isArray(res)) return res;
}
function fromWords(words) {
    const res = convert(words, 5, 8, false);
    if (Array.isArray(res)) return res;
    throw new Error(res);
}
function getLibraryFromEncoding(encoding) {
    let ENCODING_CONST;
    if (encoding === "bech32") ENCODING_CONST = 1;
    else ENCODING_CONST = 0x2bc830a3;
    function encode(prefix, words, LIMIT) {
        LIMIT = LIMIT || 90;
        if (prefix.length + 7 + words.length > LIMIT) throw new TypeError("Exceeds length limit");
        prefix = prefix.toLowerCase();
        // determine chk mod
        let chk = prefixChk(prefix);
        if (typeof chk === "string") throw new Error(chk);
        let result = prefix + "1";
        for(let i = 0; i < words.length; ++i){
            const x = words[i];
            if (x >> 5 !== 0) throw new Error("Non 5-bit word");
            chk = polymodStep(chk) ^ x;
            result += ALPHABET.charAt(x);
        }
        for(let i = 0; i < 6; ++i)chk = polymodStep(chk);
        chk ^= ENCODING_CONST;
        for(let i = 0; i < 6; ++i){
            const v = chk >> (5 - i) * 5 & 0x1f;
            result += ALPHABET.charAt(v);
        }
        return result;
    }
    function __decode(str, LIMIT) {
        LIMIT = LIMIT || 90;
        if (str.length < 8) return str + " too short";
        if (str.length > LIMIT) return "Exceeds length limit";
        // don't allow mixed case
        const lowered = str.toLowerCase();
        const uppered = str.toUpperCase();
        if (str !== lowered && str !== uppered) return "Mixed-case string " + str;
        str = lowered;
        const split = str.lastIndexOf("1");
        if (split === -1) return "No separator character for " + str;
        if (split === 0) return "Missing prefix for " + str;
        const prefix = str.slice(0, split);
        const wordChars = str.slice(split + 1);
        if (wordChars.length < 6) return "Data too short";
        let chk = prefixChk(prefix);
        if (typeof chk === "string") return chk;
        const words = [];
        for(let i = 0; i < wordChars.length; ++i){
            const c = wordChars.charAt(i);
            const v = ALPHABET_MAP[c];
            if (v === undefined) return "Unknown character " + c;
            chk = polymodStep(chk) ^ v;
            // not in the checksum?
            if (i + 6 >= wordChars.length) continue;
            words.push(v);
        }
        if (chk !== ENCODING_CONST) return "Invalid checksum for " + str;
        return {
            prefix,
            words
        };
    }
    function decodeUnsafe(str, LIMIT) {
        const res = __decode(str, LIMIT);
        if (typeof res === "object") return res;
    }
    function decode(str, LIMIT) {
        const res = __decode(str, LIMIT);
        if (typeof res === "object") return res;
        throw new Error(res);
    }
    return {
        decodeUnsafe,
        decode,
        encode,
        toWords,
        fromWordsUnsafe,
        fromWords
    };
}
exports.bech32 = getLibraryFromEncoding("bech32");
exports.bech32m = getLibraryFromEncoding("bech32m");

},{}],"IfDQ0":[function(require,module,exports) {
var Buffer = require("bb9f882c70e1b5bf").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.p2wsh = void 0;
const bcrypto = require("d335bb5dae17dfa4");
const networks_1 = require("2a1cc648109dcd25");
const bscript = require("5c43b28c6434a577");
const types_1 = require("8d27e2ccb1a60956");
const lazy = require("fdce9f2206aeaf6d");
const bech32_1 = require("a06364c18ec07c74");
const OPS = bscript.OPS;
const EMPTY_BUFFER = Buffer.alloc(0);
function stacksEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((x, i)=>{
        return x.equals(b[i]);
    });
}
function chunkHasUncompressedPubkey(chunk) {
    if (Buffer.isBuffer(chunk) && chunk.length === 65 && chunk[0] === 0x04 && (0, types_1.isPoint)(chunk)) return true;
    else return false;
}
// input: <>
// witness: [redeemScriptSig ...] {redeemScript}
// output: OP_0 {sha256(redeemScript)}
function p2wsh(a, opts) {
    if (!a.address && !a.hash && !a.output && !a.redeem && !a.witness) throw new TypeError("Not enough data");
    opts = Object.assign({
        validate: true
    }, opts || {});
    (0, types_1.typeforce)({
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        address: types_1.typeforce.maybe(types_1.typeforce.String),
        hash: types_1.typeforce.maybe(types_1.typeforce.BufferN(32)),
        output: types_1.typeforce.maybe(types_1.typeforce.BufferN(34)),
        redeem: types_1.typeforce.maybe({
            input: types_1.typeforce.maybe(types_1.typeforce.Buffer),
            network: types_1.typeforce.maybe(types_1.typeforce.Object),
            output: types_1.typeforce.maybe(types_1.typeforce.Buffer),
            witness: types_1.typeforce.maybe(types_1.typeforce.arrayOf(types_1.typeforce.Buffer))
        }),
        input: types_1.typeforce.maybe(types_1.typeforce.BufferN(0)),
        witness: types_1.typeforce.maybe(types_1.typeforce.arrayOf(types_1.typeforce.Buffer))
    }, a);
    const _address = lazy.value(()=>{
        const result = bech32_1.bech32.decode(a.address);
        const version = result.words.shift();
        const data = bech32_1.bech32.fromWords(result.words);
        return {
            version,
            prefix: result.prefix,
            data: Buffer.from(data)
        };
    });
    const _rchunks = lazy.value(()=>{
        return bscript.decompile(a.redeem.input);
    });
    let network = a.network;
    if (!network) network = a.redeem && a.redeem.network || networks_1.bitcoin;
    const o = {
        network
    };
    lazy.prop(o, "address", ()=>{
        if (!o.hash) return;
        const words = bech32_1.bech32.toWords(o.hash);
        words.unshift(0x00);
        return bech32_1.bech32.encode(network.bech32, words);
    });
    lazy.prop(o, "hash", ()=>{
        if (a.output) return a.output.slice(2);
        if (a.address) return _address().data;
        if (o.redeem && o.redeem.output) return bcrypto.sha256(o.redeem.output);
    });
    lazy.prop(o, "output", ()=>{
        if (!o.hash) return;
        return bscript.compile([
            OPS.OP_0,
            o.hash
        ]);
    });
    lazy.prop(o, "redeem", ()=>{
        if (!a.witness) return;
        return {
            output: a.witness[a.witness.length - 1],
            input: EMPTY_BUFFER,
            witness: a.witness.slice(0, -1)
        };
    });
    lazy.prop(o, "input", ()=>{
        if (!o.witness) return;
        return EMPTY_BUFFER;
    });
    lazy.prop(o, "witness", ()=>{
        // transform redeem input to witness stack?
        if (a.redeem && a.redeem.input && a.redeem.input.length > 0 && a.redeem.output && a.redeem.output.length > 0) {
            const stack = bscript.toStack(_rchunks());
            // assign, and blank the existing input
            o.redeem = Object.assign({
                witness: stack
            }, a.redeem);
            o.redeem.input = EMPTY_BUFFER;
            return [].concat(stack, a.redeem.output);
        }
        if (!a.redeem) return;
        if (!a.redeem.output) return;
        if (!a.redeem.witness) return;
        return [].concat(a.redeem.witness, a.redeem.output);
    });
    lazy.prop(o, "name", ()=>{
        const nameParts = [
            "p2wsh"
        ];
        if (o.redeem !== undefined && o.redeem.name !== undefined) nameParts.push(o.redeem.name);
        return nameParts.join("-");
    });
    // extended validation
    if (opts.validate) {
        let hash = Buffer.from([]);
        if (a.address) {
            if (_address().prefix !== network.bech32) throw new TypeError("Invalid prefix or Network mismatch");
            if (_address().version !== 0x00) throw new TypeError("Invalid address version");
            if (_address().data.length !== 32) throw new TypeError("Invalid address data");
            hash = _address().data;
        }
        if (a.hash) {
            if (hash.length > 0 && !hash.equals(a.hash)) throw new TypeError("Hash mismatch");
            else hash = a.hash;
        }
        if (a.output) {
            if (a.output.length !== 34 || a.output[0] !== OPS.OP_0 || a.output[1] !== 0x20) throw new TypeError("Output is invalid");
            const hash2 = a.output.slice(2);
            if (hash.length > 0 && !hash.equals(hash2)) throw new TypeError("Hash mismatch");
            else hash = hash2;
        }
        if (a.redeem) {
            if (a.redeem.network && a.redeem.network !== network) throw new TypeError("Network mismatch");
            // is there two redeem sources?
            if (a.redeem.input && a.redeem.input.length > 0 && a.redeem.witness && a.redeem.witness.length > 0) throw new TypeError("Ambiguous witness source");
            // is the redeem output non-empty/valid?
            if (a.redeem.output) {
                const decompile = bscript.decompile(a.redeem.output);
                if (!decompile || decompile.length < 1) throw new TypeError("Redeem.output is invalid");
                if (a.redeem.output.byteLength > 3600) throw new TypeError("Redeem.output unspendable if larger than 3600 bytes");
                if (bscript.countNonPushOnlyOPs(decompile) > 201) throw new TypeError("Redeem.output unspendable with more than 201 non-push ops");
                // match hash against other sources
                const hash2 = bcrypto.sha256(a.redeem.output);
                if (hash.length > 0 && !hash.equals(hash2)) throw new TypeError("Hash mismatch");
                else hash = hash2;
            }
            if (a.redeem.input && !bscript.isPushOnly(_rchunks())) throw new TypeError("Non push-only scriptSig");
            if (a.witness && a.redeem.witness && !stacksEqual(a.witness, a.redeem.witness)) throw new TypeError("Witness and redeem.witness mismatch");
            if (a.redeem.input && _rchunks().some(chunkHasUncompressedPubkey) || a.redeem.output && (bscript.decompile(a.redeem.output) || []).some(chunkHasUncompressedPubkey)) throw new TypeError("redeem.input or redeem.output contains uncompressed pubkey");
        }
        if (a.witness && a.witness.length > 0) {
            const wScript = a.witness[a.witness.length - 1];
            if (a.redeem && a.redeem.output && !a.redeem.output.equals(wScript)) throw new TypeError("Witness and redeem.output mismatch");
            if (a.witness.some(chunkHasUncompressedPubkey) || (bscript.decompile(wScript) || []).some(chunkHasUncompressedPubkey)) throw new TypeError("Witness contains uncompressed pubkey");
        }
    }
    return Object.assign(o, a);
}
exports.p2wsh = p2wsh;

},{"bb9f882c70e1b5bf":"fCgem","d335bb5dae17dfa4":"4BCCF","2a1cc648109dcd25":"hpO0s","5c43b28c6434a577":"28LFb","8d27e2ccb1a60956":"eFC2X","fdce9f2206aeaf6d":"cHER6","a06364c18ec07c74":"fgsjs"}],"8vJ63":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.p2tr = void 0;
const buffer_1 = require("987acc1d1f81d4a5");
const networks_1 = require("9f225cc5809f44b8");
const bscript = require("b143940debab91c8");
const types_1 = require("aa903208e464ce3");
const ecc_lib_1 = require("c62e6a30276057ee");
const bip341_1 = require("b41258952aefd0f8");
const lazy = require("f4f0be4ab83e96c1");
const bech32_1 = require("c1e07290b17b487e");
const OPS = bscript.OPS;
const TAPROOT_WITNESS_VERSION = 0x01;
const ANNEX_PREFIX = 0x50;
function p2tr(a, opts) {
    if (!a.address && !a.output && !a.pubkey && !a.internalPubkey && !(a.witness && a.witness.length > 1)) throw new TypeError("Not enough data");
    opts = Object.assign({
        validate: true
    }, opts || {});
    (0, types_1.typeforce)({
        address: types_1.typeforce.maybe(types_1.typeforce.String),
        input: types_1.typeforce.maybe(types_1.typeforce.BufferN(0)),
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        output: types_1.typeforce.maybe(types_1.typeforce.BufferN(34)),
        internalPubkey: types_1.typeforce.maybe(types_1.typeforce.BufferN(32)),
        hash: types_1.typeforce.maybe(types_1.typeforce.BufferN(32)),
        pubkey: types_1.typeforce.maybe(types_1.typeforce.BufferN(32)),
        signature: types_1.typeforce.maybe(types_1.typeforce.anyOf(types_1.typeforce.BufferN(64), types_1.typeforce.BufferN(65))),
        witness: types_1.typeforce.maybe(types_1.typeforce.arrayOf(types_1.typeforce.Buffer)),
        scriptTree: types_1.typeforce.maybe(types_1.isTaptree),
        redeem: types_1.typeforce.maybe({
            output: types_1.typeforce.maybe(types_1.typeforce.Buffer),
            redeemVersion: types_1.typeforce.maybe(types_1.typeforce.Number),
            witness: types_1.typeforce.maybe(types_1.typeforce.arrayOf(types_1.typeforce.Buffer))
        }),
        redeemVersion: types_1.typeforce.maybe(types_1.typeforce.Number)
    }, a);
    const _address = lazy.value(()=>{
        const result = bech32_1.bech32m.decode(a.address);
        const version = result.words.shift();
        const data = bech32_1.bech32m.fromWords(result.words);
        return {
            version,
            prefix: result.prefix,
            data: buffer_1.Buffer.from(data)
        };
    });
    // remove annex if present, ignored by taproot
    const _witness = lazy.value(()=>{
        if (!a.witness || !a.witness.length) return;
        if (a.witness.length >= 2 && a.witness[a.witness.length - 1][0] === ANNEX_PREFIX) return a.witness.slice(0, -1);
        return a.witness.slice();
    });
    const _hashTree = lazy.value(()=>{
        if (a.scriptTree) return (0, bip341_1.toHashTree)(a.scriptTree);
        if (a.hash) return {
            hash: a.hash
        };
        return;
    });
    const network = a.network || networks_1.bitcoin;
    const o = {
        name: "p2tr",
        network
    };
    lazy.prop(o, "address", ()=>{
        if (!o.pubkey) return;
        const words = bech32_1.bech32m.toWords(o.pubkey);
        words.unshift(TAPROOT_WITNESS_VERSION);
        return bech32_1.bech32m.encode(network.bech32, words);
    });
    lazy.prop(o, "hash", ()=>{
        const hashTree = _hashTree();
        if (hashTree) return hashTree.hash;
        const w = _witness();
        if (w && w.length > 1) {
            const controlBlock = w[w.length - 1];
            const leafVersion = controlBlock[0] & types_1.TAPLEAF_VERSION_MASK;
            const script = w[w.length - 2];
            const leafHash = (0, bip341_1.tapleafHash)({
                output: script,
                version: leafVersion
            });
            return (0, bip341_1.rootHashFromPath)(controlBlock, leafHash);
        }
        return null;
    });
    lazy.prop(o, "output", ()=>{
        if (!o.pubkey) return;
        return bscript.compile([
            OPS.OP_1,
            o.pubkey
        ]);
    });
    lazy.prop(o, "redeemVersion", ()=>{
        if (a.redeemVersion) return a.redeemVersion;
        if (a.redeem && a.redeem.redeemVersion !== undefined && a.redeem.redeemVersion !== null) return a.redeem.redeemVersion;
        return bip341_1.LEAF_VERSION_TAPSCRIPT;
    });
    lazy.prop(o, "redeem", ()=>{
        const witness = _witness(); // witness without annex
        if (!witness || witness.length < 2) return;
        return {
            output: witness[witness.length - 2],
            witness: witness.slice(0, -2),
            redeemVersion: witness[witness.length - 1][0] & types_1.TAPLEAF_VERSION_MASK
        };
    });
    lazy.prop(o, "pubkey", ()=>{
        if (a.pubkey) return a.pubkey;
        if (a.output) return a.output.slice(2);
        if (a.address) return _address().data;
        if (o.internalPubkey) {
            const tweakedKey = (0, bip341_1.tweakKey)(o.internalPubkey, o.hash);
            if (tweakedKey) return tweakedKey.x;
        }
    });
    lazy.prop(o, "internalPubkey", ()=>{
        if (a.internalPubkey) return a.internalPubkey;
        const witness = _witness();
        if (witness && witness.length > 1) return witness[witness.length - 1].slice(1, 33);
    });
    lazy.prop(o, "signature", ()=>{
        if (a.signature) return a.signature;
        const witness = _witness(); // witness without annex
        if (!witness || witness.length !== 1) return;
        return witness[0];
    });
    lazy.prop(o, "witness", ()=>{
        if (a.witness) return a.witness;
        const hashTree = _hashTree();
        if (hashTree && a.redeem && a.redeem.output && a.internalPubkey) {
            const leafHash = (0, bip341_1.tapleafHash)({
                output: a.redeem.output,
                version: o.redeemVersion
            });
            const path = (0, bip341_1.findScriptPath)(hashTree, leafHash);
            if (!path) return;
            const outputKey = (0, bip341_1.tweakKey)(a.internalPubkey, hashTree.hash);
            if (!outputKey) return;
            const controlBock = buffer_1.Buffer.concat([
                buffer_1.Buffer.from([
                    o.redeemVersion | outputKey.parity
                ]),
                a.internalPubkey
            ].concat(path));
            return [
                a.redeem.output,
                controlBock
            ];
        }
        if (a.signature) return [
            a.signature
        ];
    });
    // extended validation
    if (opts.validate) {
        let pubkey = buffer_1.Buffer.from([]);
        if (a.address) {
            if (network && network.bech32 !== _address().prefix) throw new TypeError("Invalid prefix or Network mismatch");
            if (_address().version !== TAPROOT_WITNESS_VERSION) throw new TypeError("Invalid address version");
            if (_address().data.length !== 32) throw new TypeError("Invalid address data");
            pubkey = _address().data;
        }
        if (a.pubkey) {
            if (pubkey.length > 0 && !pubkey.equals(a.pubkey)) throw new TypeError("Pubkey mismatch");
            else pubkey = a.pubkey;
        }
        if (a.output) {
            if (a.output.length !== 34 || a.output[0] !== OPS.OP_1 || a.output[1] !== 0x20) throw new TypeError("Output is invalid");
            if (pubkey.length > 0 && !pubkey.equals(a.output.slice(2))) throw new TypeError("Pubkey mismatch");
            else pubkey = a.output.slice(2);
        }
        if (a.internalPubkey) {
            const tweakedKey = (0, bip341_1.tweakKey)(a.internalPubkey, o.hash);
            if (pubkey.length > 0 && !pubkey.equals(tweakedKey.x)) throw new TypeError("Pubkey mismatch");
            else pubkey = tweakedKey.x;
        }
        if (pubkey && pubkey.length) {
            if (!(0, ecc_lib_1.getEccLib)().isXOnlyPoint(pubkey)) throw new TypeError("Invalid pubkey for p2tr");
        }
        const hashTree = _hashTree();
        if (a.hash && hashTree) {
            if (!a.hash.equals(hashTree.hash)) throw new TypeError("Hash mismatch");
        }
        if (a.redeem && a.redeem.output && hashTree) {
            const leafHash = (0, bip341_1.tapleafHash)({
                output: a.redeem.output,
                version: o.redeemVersion
            });
            if (!(0, bip341_1.findScriptPath)(hashTree, leafHash)) throw new TypeError("Redeem script not in tree");
        }
        const witness = _witness();
        // compare the provided redeem data with the one computed from witness
        if (a.redeem && o.redeem) {
            if (a.redeem.redeemVersion) {
                if (a.redeem.redeemVersion !== o.redeem.redeemVersion) throw new TypeError("Redeem.redeemVersion and witness mismatch");
            }
            if (a.redeem.output) {
                if (bscript.decompile(a.redeem.output).length === 0) throw new TypeError("Redeem.output is invalid");
                // output redeem is constructed from the witness
                if (o.redeem.output && !a.redeem.output.equals(o.redeem.output)) throw new TypeError("Redeem.output and witness mismatch");
            }
            if (a.redeem.witness) {
                if (o.redeem.witness && !stacksEqual(a.redeem.witness, o.redeem.witness)) throw new TypeError("Redeem.witness and witness mismatch");
            }
        }
        if (witness && witness.length) {
            if (witness.length === 1) {
                // key spending
                if (a.signature && !a.signature.equals(witness[0])) throw new TypeError("Signature mismatch");
            } else {
                // script path spending
                const controlBlock = witness[witness.length - 1];
                if (controlBlock.length < 33) throw new TypeError(`The control-block length is too small. Got ${controlBlock.length}, expected min 33.`);
                if ((controlBlock.length - 33) % 32 !== 0) throw new TypeError(`The control-block length of ${controlBlock.length} is incorrect!`);
                const m = (controlBlock.length - 33) / 32;
                if (m > 128) throw new TypeError(`The script path is too long. Got ${m}, expected max 128.`);
                const internalPubkey = controlBlock.slice(1, 33);
                if (a.internalPubkey && !a.internalPubkey.equals(internalPubkey)) throw new TypeError("Internal pubkey mismatch");
                if (!(0, ecc_lib_1.getEccLib)().isXOnlyPoint(internalPubkey)) throw new TypeError("Invalid internalPubkey for p2tr witness");
                const leafVersion = controlBlock[0] & types_1.TAPLEAF_VERSION_MASK;
                const script = witness[witness.length - 2];
                const leafHash = (0, bip341_1.tapleafHash)({
                    output: script,
                    version: leafVersion
                });
                const hash = (0, bip341_1.rootHashFromPath)(controlBlock, leafHash);
                const outputKey = (0, bip341_1.tweakKey)(internalPubkey, hash);
                if (!outputKey) // todo: needs test data
                throw new TypeError("Invalid outputKey for p2tr witness");
                if (pubkey.length && !pubkey.equals(outputKey.x)) throw new TypeError("Pubkey mismatch for p2tr witness");
                if (outputKey.parity !== (controlBlock[0] & 1)) throw new Error("Incorrect parity");
            }
        }
    }
    return Object.assign(o, a);
}
exports.p2tr = p2tr;
function stacksEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((x, i)=>{
        return x.equals(b[i]);
    });
}

},{"987acc1d1f81d4a5":"fCgem","9f225cc5809f44b8":"hpO0s","b143940debab91c8":"28LFb","aa903208e464ce3":"eFC2X","c62e6a30276057ee":"1dMtR","b41258952aefd0f8":"5qAiz","f4f0be4ab83e96c1":"cHER6","c1e07290b17b487e":"fgsjs"}],"1dMtR":[function(require,module,exports) {
var Buffer = require("13592da65bd9398a").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEccLib = exports.initEccLib = void 0;
const _ECCLIB_CACHE = {};
function initEccLib(eccLib) {
    if (!eccLib) // allow clearing the library
    _ECCLIB_CACHE.eccLib = eccLib;
    else if (eccLib !== _ECCLIB_CACHE.eccLib) {
        // new instance, verify it
        verifyEcc(eccLib);
        _ECCLIB_CACHE.eccLib = eccLib;
    }
}
exports.initEccLib = initEccLib;
function getEccLib() {
    if (!_ECCLIB_CACHE.eccLib) throw new Error("No ECC Library provided. You must call initEccLib() with a valid TinySecp256k1Interface instance");
    return _ECCLIB_CACHE.eccLib;
}
exports.getEccLib = getEccLib;
const h = (hex)=>Buffer.from(hex, "hex");
function verifyEcc(ecc) {
    assert(typeof ecc.isXOnlyPoint === "function");
    assert(ecc.isXOnlyPoint(h("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798")));
    assert(ecc.isXOnlyPoint(h("fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e")));
    assert(ecc.isXOnlyPoint(h("f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9")));
    assert(ecc.isXOnlyPoint(h("0000000000000000000000000000000000000000000000000000000000000001")));
    assert(!ecc.isXOnlyPoint(h("0000000000000000000000000000000000000000000000000000000000000000")));
    assert(!ecc.isXOnlyPoint(h("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f")));
    assert(typeof ecc.xOnlyPointAddTweak === "function");
    tweakAddVectors.forEach((t)=>{
        const r = ecc.xOnlyPointAddTweak(h(t.pubkey), h(t.tweak));
        if (t.result === null) assert(r === null);
        else {
            assert(r !== null);
            assert(r.parity === t.parity);
            assert(Buffer.from(r.xOnlyPubkey).equals(h(t.result)));
        }
    });
}
function assert(bool) {
    if (!bool) throw new Error("ecc library invalid");
}
const tweakAddVectors = [
    {
        pubkey: "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
        tweak: "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140",
        parity: -1,
        result: null
    },
    {
        pubkey: "1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b",
        tweak: "a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac",
        parity: 1,
        result: "e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf"
    },
    {
        pubkey: "2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991",
        tweak: "823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47",
        parity: 0,
        result: "9534f8dc8c6deda2dc007655981c78b49c5d96c778fbf363462a11ec9dfd948c"
    }
];

},{"13592da65bd9398a":"fCgem"}],"5qAiz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tweakKey = exports.tapTweakHash = exports.tapleafHash = exports.findScriptPath = exports.toHashTree = exports.rootHashFromPath = exports.MAX_TAPTREE_DEPTH = exports.LEAF_VERSION_TAPSCRIPT = void 0;
const buffer_1 = require("ed4d05392a1f4a14");
const ecc_lib_1 = require("935deece1534fdc3");
const bcrypto = require("22d9588dde9b89ce");
const bufferutils_1 = require("7212ebce0f6e9a8e");
const types_1 = require("2c2fbaa7f0a444e1");
exports.LEAF_VERSION_TAPSCRIPT = 0xc0;
exports.MAX_TAPTREE_DEPTH = 128;
const isHashBranch = (ht)=>"left" in ht && "right" in ht;
function rootHashFromPath(controlBlock, leafHash) {
    if (controlBlock.length < 33) throw new TypeError(`The control-block length is too small. Got ${controlBlock.length}, expected min 33.`);
    const m = (controlBlock.length - 33) / 32;
    let kj = leafHash;
    for(let j = 0; j < m; j++){
        const ej = controlBlock.slice(33 + 32 * j, 65 + 32 * j);
        if (kj.compare(ej) < 0) kj = tapBranchHash(kj, ej);
        else kj = tapBranchHash(ej, kj);
    }
    return kj;
}
exports.rootHashFromPath = rootHashFromPath;
/**
 * Build a hash tree of merkle nodes from the scripts binary tree.
 * @param scriptTree - the tree of scripts to pairwise hash.
 */ function toHashTree(scriptTree) {
    if ((0, types_1.isTapleaf)(scriptTree)) return {
        hash: tapleafHash(scriptTree)
    };
    const hashes = [
        toHashTree(scriptTree[0]),
        toHashTree(scriptTree[1])
    ];
    hashes.sort((a, b)=>a.hash.compare(b.hash));
    const [left, right] = hashes;
    return {
        hash: tapBranchHash(left.hash, right.hash),
        left,
        right
    };
}
exports.toHashTree = toHashTree;
/**
 * Given a HashTree, finds the path from a particular hash to the root.
 * @param node - the root of the tree
 * @param hash - the hash to search for
 * @returns - array of sibling hashes, from leaf (inclusive) to root
 * (exclusive) needed to prove inclusion of the specified hash. undefined if no
 * path is found
 */ function findScriptPath(node, hash) {
    if (isHashBranch(node)) {
        const leftPath = findScriptPath(node.left, hash);
        if (leftPath !== undefined) return [
            ...leftPath,
            node.right.hash
        ];
        const rightPath = findScriptPath(node.right, hash);
        if (rightPath !== undefined) return [
            ...rightPath,
            node.left.hash
        ];
    } else if (node.hash.equals(hash)) return [];
    return undefined;
}
exports.findScriptPath = findScriptPath;
function tapleafHash(leaf) {
    const version = leaf.version || exports.LEAF_VERSION_TAPSCRIPT;
    return bcrypto.taggedHash("TapLeaf", buffer_1.Buffer.concat([
        buffer_1.Buffer.from([
            version
        ]),
        serializeScript(leaf.output)
    ]));
}
exports.tapleafHash = tapleafHash;
function tapTweakHash(pubKey, h) {
    return bcrypto.taggedHash("TapTweak", buffer_1.Buffer.concat(h ? [
        pubKey,
        h
    ] : [
        pubKey
    ]));
}
exports.tapTweakHash = tapTweakHash;
function tweakKey(pubKey, h) {
    if (!buffer_1.Buffer.isBuffer(pubKey)) return null;
    if (pubKey.length !== 32) return null;
    if (h && h.length !== 32) return null;
    const tweakHash = tapTweakHash(pubKey, h);
    const res = (0, ecc_lib_1.getEccLib)().xOnlyPointAddTweak(pubKey, tweakHash);
    if (!res || res.xOnlyPubkey === null) return null;
    return {
        parity: res.parity,
        x: buffer_1.Buffer.from(res.xOnlyPubkey)
    };
}
exports.tweakKey = tweakKey;
function tapBranchHash(a, b) {
    return bcrypto.taggedHash("TapBranch", buffer_1.Buffer.concat([
        a,
        b
    ]));
}
function serializeScript(s) {
    const varintLen = bufferutils_1.varuint.encodingLength(s.length);
    const buffer = buffer_1.Buffer.allocUnsafe(varintLen); // better
    bufferutils_1.varuint.encode(s.length, buffer);
    return buffer_1.Buffer.concat([
        buffer,
        s
    ]);
}

},{"ed4d05392a1f4a14":"fCgem","935deece1534fdc3":"1dMtR","22d9588dde9b89ce":"4BCCF","7212ebce0f6e9a8e":"jR49q","2c2fbaa7f0a444e1":"eFC2X"}],"jR49q":[function(require,module,exports) {
var Buffer = require("f9c7c081959e55ca").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BufferReader = exports.BufferWriter = exports.cloneBuffer = exports.reverseBuffer = exports.writeUInt64LE = exports.readUInt64LE = exports.varuint = void 0;
const types = require("900ff40b113a19a8");
const { typeforce } = types;
const varuint = require("701e1d136911cf67");
exports.varuint = varuint;
// https://github.com/feross/buffer/blob/master/index.js#L1127
function verifuint(value, max) {
    if (typeof value !== "number") throw new Error("cannot write a non-number as a number");
    if (value < 0) throw new Error("specified a negative value for writing an unsigned value");
    if (value > max) throw new Error("RangeError: value out of range");
    if (Math.floor(value) !== value) throw new Error("value has a fractional component");
}
function readUInt64LE(buffer, offset) {
    const a = buffer.readUInt32LE(offset);
    let b = buffer.readUInt32LE(offset + 4);
    b *= 0x100000000;
    verifuint(b + a, 0x001fffffffffffff);
    return b + a;
}
exports.readUInt64LE = readUInt64LE;
function writeUInt64LE(buffer, value, offset) {
    verifuint(value, 0x001fffffffffffff);
    buffer.writeInt32LE(value & -1, offset);
    buffer.writeUInt32LE(Math.floor(value / 0x100000000), offset + 4);
    return offset + 8;
}
exports.writeUInt64LE = writeUInt64LE;
function reverseBuffer(buffer) {
    if (buffer.length < 1) return buffer;
    let j = buffer.length - 1;
    let tmp = 0;
    for(let i = 0; i < buffer.length / 2; i++){
        tmp = buffer[i];
        buffer[i] = buffer[j];
        buffer[j] = tmp;
        j--;
    }
    return buffer;
}
exports.reverseBuffer = reverseBuffer;
function cloneBuffer(buffer) {
    const clone = Buffer.allocUnsafe(buffer.length);
    buffer.copy(clone);
    return clone;
}
exports.cloneBuffer = cloneBuffer;
/**
 * Helper class for serialization of bitcoin data types into a pre-allocated buffer.
 */ class BufferWriter {
    static withCapacity(size) {
        return new BufferWriter(Buffer.alloc(size));
    }
    constructor(buffer, offset = 0){
        this.buffer = buffer;
        this.offset = offset;
        typeforce(types.tuple(types.Buffer, types.UInt32), [
            buffer,
            offset
        ]);
    }
    writeUInt8(i) {
        this.offset = this.buffer.writeUInt8(i, this.offset);
    }
    writeInt32(i) {
        this.offset = this.buffer.writeInt32LE(i, this.offset);
    }
    writeUInt32(i) {
        this.offset = this.buffer.writeUInt32LE(i, this.offset);
    }
    writeUInt64(i) {
        this.offset = writeUInt64LE(this.buffer, i, this.offset);
    }
    writeVarInt(i) {
        varuint.encode(i, this.buffer, this.offset);
        this.offset += varuint.encode.bytes;
    }
    writeSlice(slice) {
        if (this.buffer.length < this.offset + slice.length) throw new Error("Cannot write slice out of bounds");
        this.offset += slice.copy(this.buffer, this.offset);
    }
    writeVarSlice(slice) {
        this.writeVarInt(slice.length);
        this.writeSlice(slice);
    }
    writeVector(vector) {
        this.writeVarInt(vector.length);
        vector.forEach((buf)=>this.writeVarSlice(buf));
    }
    end() {
        if (this.buffer.length === this.offset) return this.buffer;
        throw new Error(`buffer size ${this.buffer.length}, offset ${this.offset}`);
    }
}
exports.BufferWriter = BufferWriter;
/**
 * Helper class for reading of bitcoin data types from a buffer.
 */ class BufferReader {
    constructor(buffer, offset = 0){
        this.buffer = buffer;
        this.offset = offset;
        typeforce(types.tuple(types.Buffer, types.UInt32), [
            buffer,
            offset
        ]);
    }
    readUInt8() {
        const result = this.buffer.readUInt8(this.offset);
        this.offset++;
        return result;
    }
    readInt32() {
        const result = this.buffer.readInt32LE(this.offset);
        this.offset += 4;
        return result;
    }
    readUInt32() {
        const result = this.buffer.readUInt32LE(this.offset);
        this.offset += 4;
        return result;
    }
    readUInt64() {
        const result = readUInt64LE(this.buffer, this.offset);
        this.offset += 8;
        return result;
    }
    readVarInt() {
        const vi = varuint.decode(this.buffer, this.offset);
        this.offset += varuint.decode.bytes;
        return vi;
    }
    readSlice(n) {
        if (this.buffer.length < this.offset + n) throw new Error("Cannot read slice out of bounds");
        const result = this.buffer.slice(this.offset, this.offset + n);
        this.offset += n;
        return result;
    }
    readVarSlice() {
        return this.readSlice(this.readVarInt());
    }
    readVector() {
        const count = this.readVarInt();
        const vector = [];
        for(let i = 0; i < count; i++)vector.push(this.readVarSlice());
        return vector;
    }
}
exports.BufferReader = BufferReader;

},{"f9c7c081959e55ca":"fCgem","900ff40b113a19a8":"eFC2X","701e1d136911cf67":"amF5b"}],"amF5b":[function(require,module,exports) {
"use strict";
var Buffer = require("76b962a3a7f16e3a").Buffer;
// Number.MAX_SAFE_INTEGER
var MAX_SAFE_INTEGER = 9007199254740991;
function checkUInt53(n) {
    if (n < 0 || n > MAX_SAFE_INTEGER || n % 1 !== 0) throw new RangeError("value out of range");
}
function encode(number, buffer, offset) {
    checkUInt53(number);
    if (!buffer) buffer = Buffer.allocUnsafe(encodingLength(number));
    if (!Buffer.isBuffer(buffer)) throw new TypeError("buffer must be a Buffer instance");
    if (!offset) offset = 0;
    // 8 bit
    if (number < 0xfd) {
        buffer.writeUInt8(number, offset);
        encode.bytes = 1;
    // 16 bit
    } else if (number <= 0xffff) {
        buffer.writeUInt8(0xfd, offset);
        buffer.writeUInt16LE(number, offset + 1);
        encode.bytes = 3;
    // 32 bit
    } else if (number <= 0xffffffff) {
        buffer.writeUInt8(0xfe, offset);
        buffer.writeUInt32LE(number, offset + 1);
        encode.bytes = 5;
    // 64 bit
    } else {
        buffer.writeUInt8(0xff, offset);
        buffer.writeUInt32LE(number >>> 0, offset + 1);
        buffer.writeUInt32LE(number / 0x100000000 | 0, offset + 5);
        encode.bytes = 9;
    }
    return buffer;
}
function decode(buffer, offset) {
    if (!Buffer.isBuffer(buffer)) throw new TypeError("buffer must be a Buffer instance");
    if (!offset) offset = 0;
    var first = buffer.readUInt8(offset);
    // 8 bit
    if (first < 0xfd) {
        decode.bytes = 1;
        return first;
    // 16 bit
    } else if (first === 0xfd) {
        decode.bytes = 3;
        return buffer.readUInt16LE(offset + 1);
    // 32 bit
    } else if (first === 0xfe) {
        decode.bytes = 5;
        return buffer.readUInt32LE(offset + 1);
    // 64 bit
    } else {
        decode.bytes = 9;
        var lo = buffer.readUInt32LE(offset + 1);
        var hi = buffer.readUInt32LE(offset + 5);
        var number = hi * 0x0100000000 + lo;
        checkUInt53(number);
        return number;
    }
}
function encodingLength(number) {
    checkUInt53(number);
    return number < 0xfd ? 1 : number <= 0xffff ? 3 : number <= 0xffffffff ? 5 : 9;
}
module.exports = {
    encode: encode,
    decode: decode,
    encodingLength: encodingLength
};

},{"76b962a3a7f16e3a":"eW7r9"}],"eW7r9":[function(require,module,exports) {
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ var buffer = require("7e0d6ecd698c3ca6");
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src)dst[key] = src[key];
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) module.exports = buffer;
else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
SafeBuffer.prototype = Object.create(Buffer.prototype);
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === "number") throw new TypeError("Argument must not be a number");
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === "string") buf.fill(fill, encoding);
        else buf.fill(fill);
    } else buf.fill(0);
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    return buffer.SlowBuffer(size);
};

},{"7e0d6ecd698c3ca6":"fCgem"}],"aVKx9":[function(require,module,exports) {
var Buffer = require("fef6b6883393c515").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Block = void 0;
const bufferutils_1 = require("10eab07fce0d349f");
const bcrypto = require("af0c09a3af6e6266");
const merkle_1 = require("7fb7e3c290b670d7");
const transaction_1 = require("a511779c7da90ef7");
const types = require("23d107f566cf4d90");
const { typeforce } = types;
const errorMerkleNoTxes = new TypeError("Cannot compute merkle root for zero transactions");
const errorWitnessNotSegwit = new TypeError("Cannot compute witness commit for non-segwit block");
class Block {
    constructor(){
        this.version = 1;
        this.prevHash = undefined;
        this.merkleRoot = undefined;
        this.timestamp = 0;
        this.witnessCommit = undefined;
        this.bits = 0;
        this.nonce = 0;
        this.transactions = undefined;
    }
    static fromBuffer(buffer) {
        if (buffer.length < 80) throw new Error("Buffer too small (< 80 bytes)");
        const bufferReader = new bufferutils_1.BufferReader(buffer);
        const block = new Block();
        block.version = bufferReader.readInt32();
        block.prevHash = bufferReader.readSlice(32);
        block.merkleRoot = bufferReader.readSlice(32);
        block.timestamp = bufferReader.readUInt32();
        block.bits = bufferReader.readUInt32();
        block.nonce = bufferReader.readUInt32();
        if (buffer.length === 80) return block;
        const readTransaction = ()=>{
            const tx = transaction_1.Transaction.fromBuffer(bufferReader.buffer.slice(bufferReader.offset), true);
            bufferReader.offset += tx.byteLength();
            return tx;
        };
        const nTransactions = bufferReader.readVarInt();
        block.transactions = [];
        for(let i = 0; i < nTransactions; ++i){
            const tx = readTransaction();
            block.transactions.push(tx);
        }
        const witnessCommit = block.getWitnessCommit();
        // This Block contains a witness commit
        if (witnessCommit) block.witnessCommit = witnessCommit;
        return block;
    }
    static fromHex(hex) {
        return Block.fromBuffer(Buffer.from(hex, "hex"));
    }
    static calculateTarget(bits) {
        const exponent = ((bits & 0xff000000) >> 24) - 3;
        const mantissa = bits & 0x007fffff;
        const target = Buffer.alloc(32, 0);
        target.writeUIntBE(mantissa, 29 - exponent, 3);
        return target;
    }
    static calculateMerkleRoot(transactions, forWitness) {
        typeforce([
            {
                getHash: types.Function
            }
        ], transactions);
        if (transactions.length === 0) throw errorMerkleNoTxes;
        if (forWitness && !txesHaveWitnessCommit(transactions)) throw errorWitnessNotSegwit;
        const hashes = transactions.map((transaction)=>transaction.getHash(forWitness));
        const rootHash = (0, merkle_1.fastMerkleRoot)(hashes, bcrypto.hash256);
        return forWitness ? bcrypto.hash256(Buffer.concat([
            rootHash,
            transactions[0].ins[0].witness[0]
        ])) : rootHash;
    }
    getWitnessCommit() {
        if (!txesHaveWitnessCommit(this.transactions)) return null;
        // The merkle root for the witness data is in an OP_RETURN output.
        // There is no rule for the index of the output, so use filter to find it.
        // The root is prepended with 0xaa21a9ed so check for 0x6a24aa21a9ed
        // If multiple commits are found, the output with highest index is assumed.
        const witnessCommits = this.transactions[0].outs.filter((out)=>out.script.slice(0, 6).equals(Buffer.from("6a24aa21a9ed", "hex"))).map((out)=>out.script.slice(6, 38));
        if (witnessCommits.length === 0) return null;
        // Use the commit with the highest output (should only be one though)
        const result = witnessCommits[witnessCommits.length - 1];
        if (!(result instanceof Buffer && result.length === 32)) return null;
        return result;
    }
    hasWitnessCommit() {
        if (this.witnessCommit instanceof Buffer && this.witnessCommit.length === 32) return true;
        if (this.getWitnessCommit() !== null) return true;
        return false;
    }
    hasWitness() {
        return anyTxHasWitness(this.transactions);
    }
    weight() {
        const base = this.byteLength(false, false);
        const total = this.byteLength(false, true);
        return base * 3 + total;
    }
    byteLength(headersOnly, allowWitness = true) {
        if (headersOnly || !this.transactions) return 80;
        return 80 + bufferutils_1.varuint.encodingLength(this.transactions.length) + this.transactions.reduce((a, x)=>a + x.byteLength(allowWitness), 0);
    }
    getHash() {
        return bcrypto.hash256(this.toBuffer(true));
    }
    getId() {
        return (0, bufferutils_1.reverseBuffer)(this.getHash()).toString("hex");
    }
    getUTCDate() {
        const date = new Date(0); // epoch
        date.setUTCSeconds(this.timestamp);
        return date;
    }
    // TODO: buffer, offset compatibility
    toBuffer(headersOnly) {
        const buffer = Buffer.allocUnsafe(this.byteLength(headersOnly));
        const bufferWriter = new bufferutils_1.BufferWriter(buffer);
        bufferWriter.writeInt32(this.version);
        bufferWriter.writeSlice(this.prevHash);
        bufferWriter.writeSlice(this.merkleRoot);
        bufferWriter.writeUInt32(this.timestamp);
        bufferWriter.writeUInt32(this.bits);
        bufferWriter.writeUInt32(this.nonce);
        if (headersOnly || !this.transactions) return buffer;
        bufferutils_1.varuint.encode(this.transactions.length, buffer, bufferWriter.offset);
        bufferWriter.offset += bufferutils_1.varuint.encode.bytes;
        this.transactions.forEach((tx)=>{
            const txSize = tx.byteLength(); // TODO: extract from toBuffer?
            tx.toBuffer(buffer, bufferWriter.offset);
            bufferWriter.offset += txSize;
        });
        return buffer;
    }
    toHex(headersOnly) {
        return this.toBuffer(headersOnly).toString("hex");
    }
    checkTxRoots() {
        // If the Block has segwit transactions but no witness commit,
        // there's no way it can be valid, so fail the check.
        const hasWitnessCommit = this.hasWitnessCommit();
        if (!hasWitnessCommit && this.hasWitness()) return false;
        return this.__checkMerkleRoot() && (hasWitnessCommit ? this.__checkWitnessCommit() : true);
    }
    checkProofOfWork() {
        const hash = (0, bufferutils_1.reverseBuffer)(this.getHash());
        const target = Block.calculateTarget(this.bits);
        return hash.compare(target) <= 0;
    }
    __checkMerkleRoot() {
        if (!this.transactions) throw errorMerkleNoTxes;
        const actualMerkleRoot = Block.calculateMerkleRoot(this.transactions);
        return this.merkleRoot.compare(actualMerkleRoot) === 0;
    }
    __checkWitnessCommit() {
        if (!this.transactions) throw errorMerkleNoTxes;
        if (!this.hasWitnessCommit()) throw errorWitnessNotSegwit;
        const actualWitnessCommit = Block.calculateMerkleRoot(this.transactions, true);
        return this.witnessCommit.compare(actualWitnessCommit) === 0;
    }
}
exports.Block = Block;
function txesHaveWitnessCommit(transactions) {
    return transactions instanceof Array && transactions[0] && transactions[0].ins && transactions[0].ins instanceof Array && transactions[0].ins[0] && transactions[0].ins[0].witness && transactions[0].ins[0].witness instanceof Array && transactions[0].ins[0].witness.length > 0;
}
function anyTxHasWitness(transactions) {
    return transactions instanceof Array && transactions.some((tx)=>typeof tx === "object" && tx.ins instanceof Array && tx.ins.some((input)=>typeof input === "object" && input.witness instanceof Array && input.witness.length > 0));
}

},{"fef6b6883393c515":"fCgem","10eab07fce0d349f":"jR49q","af0c09a3af6e6266":"4BCCF","7fb7e3c290b670d7":"4nwKD","a511779c7da90ef7":"arhmj","23d107f566cf4d90":"eFC2X"}],"4nwKD":[function(require,module,exports) {
var Buffer = require("589b1cb00017f618").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fastMerkleRoot = void 0;
function fastMerkleRoot(values, digestFn) {
    if (!Array.isArray(values)) throw TypeError("Expected values Array");
    if (typeof digestFn !== "function") throw TypeError("Expected digest Function");
    let length = values.length;
    const results = values.concat();
    while(length > 1){
        let j = 0;
        for(let i = 0; i < length; i += 2, ++j){
            const left = results[i];
            const right = i + 1 === length ? left : results[i + 1];
            const data = Buffer.concat([
                left,
                right
            ]);
            results[j] = digestFn(data);
        }
        length = j;
    }
    return results[0];
}
exports.fastMerkleRoot = fastMerkleRoot;

},{"589b1cb00017f618":"fCgem"}],"arhmj":[function(require,module,exports) {
var Buffer = require("f552bdfda8ba655c").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Transaction = void 0;
const bufferutils_1 = require("625058161ca49b3");
const bcrypto = require("dabb1ff0618850bf");
const bscript = require("49bb4306cdf0edaf");
const script_1 = require("49bb4306cdf0edaf");
const types = require("89755d038b59b4e0");
const { typeforce } = types;
function varSliceSize(someScript) {
    const length = someScript.length;
    return bufferutils_1.varuint.encodingLength(length) + length;
}
function vectorSize(someVector) {
    const length = someVector.length;
    return bufferutils_1.varuint.encodingLength(length) + someVector.reduce((sum, witness)=>{
        return sum + varSliceSize(witness);
    }, 0);
}
const EMPTY_BUFFER = Buffer.allocUnsafe(0);
const EMPTY_WITNESS = [];
const ZERO = Buffer.from("0000000000000000000000000000000000000000000000000000000000000000", "hex");
const ONE = Buffer.from("0000000000000000000000000000000000000000000000000000000000000001", "hex");
const VALUE_UINT64_MAX = Buffer.from("ffffffffffffffff", "hex");
const BLANK_OUTPUT = {
    script: EMPTY_BUFFER,
    valueBuffer: VALUE_UINT64_MAX
};
function isOutput(out) {
    return out.value !== undefined;
}
class Transaction {
    constructor(){
        this.version = 1;
        this.locktime = 0;
        this.ins = [];
        this.outs = [];
    }
    static fromBuffer(buffer, _NO_STRICT) {
        const bufferReader = new bufferutils_1.BufferReader(buffer);
        const tx = new Transaction();
        tx.version = bufferReader.readInt32();
        const marker = bufferReader.readUInt8();
        const flag = bufferReader.readUInt8();
        let hasWitnesses = false;
        if (marker === Transaction.ADVANCED_TRANSACTION_MARKER && flag === Transaction.ADVANCED_TRANSACTION_FLAG) hasWitnesses = true;
        else bufferReader.offset -= 2;
        const vinLen = bufferReader.readVarInt();
        for(let i = 0; i < vinLen; ++i)tx.ins.push({
            hash: bufferReader.readSlice(32),
            index: bufferReader.readUInt32(),
            script: bufferReader.readVarSlice(),
            sequence: bufferReader.readUInt32(),
            witness: EMPTY_WITNESS
        });
        const voutLen = bufferReader.readVarInt();
        for(let i = 0; i < voutLen; ++i)tx.outs.push({
            value: bufferReader.readUInt64(),
            script: bufferReader.readVarSlice()
        });
        if (hasWitnesses) {
            for(let i = 0; i < vinLen; ++i)tx.ins[i].witness = bufferReader.readVector();
            // was this pointless?
            if (!tx.hasWitnesses()) throw new Error("Transaction has superfluous witness data");
        }
        tx.locktime = bufferReader.readUInt32();
        if (_NO_STRICT) return tx;
        if (bufferReader.offset !== buffer.length) throw new Error("Transaction has unexpected data");
        return tx;
    }
    static fromHex(hex) {
        return Transaction.fromBuffer(Buffer.from(hex, "hex"), false);
    }
    static isCoinbaseHash(buffer) {
        typeforce(types.Hash256bit, buffer);
        for(let i = 0; i < 32; ++i){
            if (buffer[i] !== 0) return false;
        }
        return true;
    }
    isCoinbase() {
        return this.ins.length === 1 && Transaction.isCoinbaseHash(this.ins[0].hash);
    }
    addInput(hash, index, sequence, scriptSig) {
        typeforce(types.tuple(types.Hash256bit, types.UInt32, types.maybe(types.UInt32), types.maybe(types.Buffer)), arguments);
        if (types.Null(sequence)) sequence = Transaction.DEFAULT_SEQUENCE;
        // Add the input and return the input's index
        return this.ins.push({
            hash,
            index,
            script: scriptSig || EMPTY_BUFFER,
            sequence: sequence,
            witness: EMPTY_WITNESS
        }) - 1;
    }
    addOutput(scriptPubKey, value) {
        typeforce(types.tuple(types.Buffer, types.Satoshi), arguments);
        // Add the output and return the output's index
        return this.outs.push({
            script: scriptPubKey,
            value
        }) - 1;
    }
    hasWitnesses() {
        return this.ins.some((x)=>{
            return x.witness.length !== 0;
        });
    }
    weight() {
        const base = this.byteLength(false);
        const total = this.byteLength(true);
        return base * 3 + total;
    }
    virtualSize() {
        return Math.ceil(this.weight() / 4);
    }
    byteLength(_ALLOW_WITNESS = true) {
        const hasWitnesses = _ALLOW_WITNESS && this.hasWitnesses();
        return (hasWitnesses ? 10 : 8) + bufferutils_1.varuint.encodingLength(this.ins.length) + bufferutils_1.varuint.encodingLength(this.outs.length) + this.ins.reduce((sum, input)=>{
            return sum + 40 + varSliceSize(input.script);
        }, 0) + this.outs.reduce((sum, output)=>{
            return sum + 8 + varSliceSize(output.script);
        }, 0) + (hasWitnesses ? this.ins.reduce((sum, input)=>{
            return sum + vectorSize(input.witness);
        }, 0) : 0);
    }
    clone() {
        const newTx = new Transaction();
        newTx.version = this.version;
        newTx.locktime = this.locktime;
        newTx.ins = this.ins.map((txIn)=>{
            return {
                hash: txIn.hash,
                index: txIn.index,
                script: txIn.script,
                sequence: txIn.sequence,
                witness: txIn.witness
            };
        });
        newTx.outs = this.outs.map((txOut)=>{
            return {
                script: txOut.script,
                value: txOut.value
            };
        });
        return newTx;
    }
    /**
   * Hash transaction for signing a specific input.
   *
   * Bitcoin uses a different hash for each signed transaction input.
   * This method copies the transaction, makes the necessary changes based on the
   * hashType, and then hashes the result.
   * This hash can then be used to sign the provided transaction input.
   */ hashForSignature(inIndex, prevOutScript, hashType) {
        typeforce(types.tuple(types.UInt32, types.Buffer, /* types.UInt8 */ types.Number), arguments);
        // https://github.com/bitcoin/bitcoin/blob/master/src/test/sighash_tests.cpp#L29
        if (inIndex >= this.ins.length) return ONE;
        // ignore OP_CODESEPARATOR
        const ourScript = bscript.compile(bscript.decompile(prevOutScript).filter((x)=>{
            return x !== script_1.OPS.OP_CODESEPARATOR;
        }));
        const txTmp = this.clone();
        // SIGHASH_NONE: ignore all outputs? (wildcard payee)
        if ((hashType & 0x1f) === Transaction.SIGHASH_NONE) {
            txTmp.outs = [];
            // ignore sequence numbers (except at inIndex)
            txTmp.ins.forEach((input, i)=>{
                if (i === inIndex) return;
                input.sequence = 0;
            });
        // SIGHASH_SINGLE: ignore all outputs, except at the same index?
        } else if ((hashType & 0x1f) === Transaction.SIGHASH_SINGLE) {
            // https://github.com/bitcoin/bitcoin/blob/master/src/test/sighash_tests.cpp#L60
            if (inIndex >= this.outs.length) return ONE;
            // truncate outputs after
            txTmp.outs.length = inIndex + 1;
            // "blank" outputs before
            for(let i = 0; i < inIndex; i++)txTmp.outs[i] = BLANK_OUTPUT;
            // ignore sequence numbers (except at inIndex)
            txTmp.ins.forEach((input, y)=>{
                if (y === inIndex) return;
                input.sequence = 0;
            });
        }
        // SIGHASH_ANYONECANPAY: ignore inputs entirely?
        if (hashType & Transaction.SIGHASH_ANYONECANPAY) {
            txTmp.ins = [
                txTmp.ins[inIndex]
            ];
            txTmp.ins[0].script = ourScript;
        // SIGHASH_ALL: only ignore input scripts
        } else {
            // "blank" others input scripts
            txTmp.ins.forEach((input)=>{
                input.script = EMPTY_BUFFER;
            });
            txTmp.ins[inIndex].script = ourScript;
        }
        // serialize and hash
        const buffer = Buffer.allocUnsafe(txTmp.byteLength(false) + 4);
        buffer.writeInt32LE(hashType, buffer.length - 4);
        txTmp.__toBuffer(buffer, 0, false);
        return bcrypto.hash256(buffer);
    }
    hashForWitnessV1(inIndex, prevOutScripts, values, hashType, leafHash, annex) {
        // https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#common-signature-message
        typeforce(types.tuple(types.UInt32, typeforce.arrayOf(types.Buffer), typeforce.arrayOf(types.Satoshi), types.UInt32), arguments);
        if (values.length !== this.ins.length || prevOutScripts.length !== this.ins.length) throw new Error("Must supply prevout script and value for all inputs");
        const outputType = hashType === Transaction.SIGHASH_DEFAULT ? Transaction.SIGHASH_ALL : hashType & Transaction.SIGHASH_OUTPUT_MASK;
        const inputType = hashType & Transaction.SIGHASH_INPUT_MASK;
        const isAnyoneCanPay = inputType === Transaction.SIGHASH_ANYONECANPAY;
        const isNone = outputType === Transaction.SIGHASH_NONE;
        const isSingle = outputType === Transaction.SIGHASH_SINGLE;
        let hashPrevouts = EMPTY_BUFFER;
        let hashAmounts = EMPTY_BUFFER;
        let hashScriptPubKeys = EMPTY_BUFFER;
        let hashSequences = EMPTY_BUFFER;
        let hashOutputs = EMPTY_BUFFER;
        if (!isAnyoneCanPay) {
            let bufferWriter = bufferutils_1.BufferWriter.withCapacity(36 * this.ins.length);
            this.ins.forEach((txIn)=>{
                bufferWriter.writeSlice(txIn.hash);
                bufferWriter.writeUInt32(txIn.index);
            });
            hashPrevouts = bcrypto.sha256(bufferWriter.end());
            bufferWriter = bufferutils_1.BufferWriter.withCapacity(8 * this.ins.length);
            values.forEach((value)=>bufferWriter.writeUInt64(value));
            hashAmounts = bcrypto.sha256(bufferWriter.end());
            bufferWriter = bufferutils_1.BufferWriter.withCapacity(prevOutScripts.map(varSliceSize).reduce((a, b)=>a + b));
            prevOutScripts.forEach((prevOutScript)=>bufferWriter.writeVarSlice(prevOutScript));
            hashScriptPubKeys = bcrypto.sha256(bufferWriter.end());
            bufferWriter = bufferutils_1.BufferWriter.withCapacity(4 * this.ins.length);
            this.ins.forEach((txIn)=>bufferWriter.writeUInt32(txIn.sequence));
            hashSequences = bcrypto.sha256(bufferWriter.end());
        }
        if (!(isNone || isSingle)) {
            const txOutsSize = this.outs.map((output)=>8 + varSliceSize(output.script)).reduce((a, b)=>a + b);
            const bufferWriter = bufferutils_1.BufferWriter.withCapacity(txOutsSize);
            this.outs.forEach((out)=>{
                bufferWriter.writeUInt64(out.value);
                bufferWriter.writeVarSlice(out.script);
            });
            hashOutputs = bcrypto.sha256(bufferWriter.end());
        } else if (isSingle && inIndex < this.outs.length) {
            const output = this.outs[inIndex];
            const bufferWriter = bufferutils_1.BufferWriter.withCapacity(8 + varSliceSize(output.script));
            bufferWriter.writeUInt64(output.value);
            bufferWriter.writeVarSlice(output.script);
            hashOutputs = bcrypto.sha256(bufferWriter.end());
        }
        const spendType = (leafHash ? 2 : 0) + (annex ? 1 : 0);
        // Length calculation from:
        // https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#cite_note-14
        // With extension from:
        // https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki#signature-validation
        const sigMsgSize = 174 - (isAnyoneCanPay ? 49 : 0) - (isNone ? 32 : 0) + (annex ? 32 : 0) + (leafHash ? 37 : 0);
        const sigMsgWriter = bufferutils_1.BufferWriter.withCapacity(sigMsgSize);
        sigMsgWriter.writeUInt8(hashType);
        // Transaction
        sigMsgWriter.writeInt32(this.version);
        sigMsgWriter.writeUInt32(this.locktime);
        sigMsgWriter.writeSlice(hashPrevouts);
        sigMsgWriter.writeSlice(hashAmounts);
        sigMsgWriter.writeSlice(hashScriptPubKeys);
        sigMsgWriter.writeSlice(hashSequences);
        if (!(isNone || isSingle)) sigMsgWriter.writeSlice(hashOutputs);
        // Input
        sigMsgWriter.writeUInt8(spendType);
        if (isAnyoneCanPay) {
            const input = this.ins[inIndex];
            sigMsgWriter.writeSlice(input.hash);
            sigMsgWriter.writeUInt32(input.index);
            sigMsgWriter.writeUInt64(values[inIndex]);
            sigMsgWriter.writeVarSlice(prevOutScripts[inIndex]);
            sigMsgWriter.writeUInt32(input.sequence);
        } else sigMsgWriter.writeUInt32(inIndex);
        if (annex) {
            const bufferWriter = bufferutils_1.BufferWriter.withCapacity(varSliceSize(annex));
            bufferWriter.writeVarSlice(annex);
            sigMsgWriter.writeSlice(bcrypto.sha256(bufferWriter.end()));
        }
        // Output
        if (isSingle) sigMsgWriter.writeSlice(hashOutputs);
        // BIP342 extension
        if (leafHash) {
            sigMsgWriter.writeSlice(leafHash);
            sigMsgWriter.writeUInt8(0);
            sigMsgWriter.writeUInt32(0xffffffff);
        }
        // Extra zero byte because:
        // https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#cite_note-19
        return bcrypto.taggedHash("TapSighash", Buffer.concat([
            Buffer.from([
                0x00
            ]),
            sigMsgWriter.end()
        ]));
    }
    hashForWitnessV0(inIndex, prevOutScript, value, hashType) {
        typeforce(types.tuple(types.UInt32, types.Buffer, types.Satoshi, types.UInt32), arguments);
        let tbuffer = Buffer.from([]);
        let bufferWriter;
        let hashOutputs = ZERO;
        let hashPrevouts = ZERO;
        let hashSequence = ZERO;
        if (!(hashType & Transaction.SIGHASH_ANYONECANPAY)) {
            tbuffer = Buffer.allocUnsafe(36 * this.ins.length);
            bufferWriter = new bufferutils_1.BufferWriter(tbuffer, 0);
            this.ins.forEach((txIn)=>{
                bufferWriter.writeSlice(txIn.hash);
                bufferWriter.writeUInt32(txIn.index);
            });
            hashPrevouts = bcrypto.hash256(tbuffer);
        }
        if (!(hashType & Transaction.SIGHASH_ANYONECANPAY) && (hashType & 0x1f) !== Transaction.SIGHASH_SINGLE && (hashType & 0x1f) !== Transaction.SIGHASH_NONE) {
            tbuffer = Buffer.allocUnsafe(4 * this.ins.length);
            bufferWriter = new bufferutils_1.BufferWriter(tbuffer, 0);
            this.ins.forEach((txIn)=>{
                bufferWriter.writeUInt32(txIn.sequence);
            });
            hashSequence = bcrypto.hash256(tbuffer);
        }
        if ((hashType & 0x1f) !== Transaction.SIGHASH_SINGLE && (hashType & 0x1f) !== Transaction.SIGHASH_NONE) {
            const txOutsSize = this.outs.reduce((sum, output)=>{
                return sum + 8 + varSliceSize(output.script);
            }, 0);
            tbuffer = Buffer.allocUnsafe(txOutsSize);
            bufferWriter = new bufferutils_1.BufferWriter(tbuffer, 0);
            this.outs.forEach((out)=>{
                bufferWriter.writeUInt64(out.value);
                bufferWriter.writeVarSlice(out.script);
            });
            hashOutputs = bcrypto.hash256(tbuffer);
        } else if ((hashType & 0x1f) === Transaction.SIGHASH_SINGLE && inIndex < this.outs.length) {
            const output = this.outs[inIndex];
            tbuffer = Buffer.allocUnsafe(8 + varSliceSize(output.script));
            bufferWriter = new bufferutils_1.BufferWriter(tbuffer, 0);
            bufferWriter.writeUInt64(output.value);
            bufferWriter.writeVarSlice(output.script);
            hashOutputs = bcrypto.hash256(tbuffer);
        }
        tbuffer = Buffer.allocUnsafe(156 + varSliceSize(prevOutScript));
        bufferWriter = new bufferutils_1.BufferWriter(tbuffer, 0);
        const input = this.ins[inIndex];
        bufferWriter.writeInt32(this.version);
        bufferWriter.writeSlice(hashPrevouts);
        bufferWriter.writeSlice(hashSequence);
        bufferWriter.writeSlice(input.hash);
        bufferWriter.writeUInt32(input.index);
        bufferWriter.writeVarSlice(prevOutScript);
        bufferWriter.writeUInt64(value);
        bufferWriter.writeUInt32(input.sequence);
        bufferWriter.writeSlice(hashOutputs);
        bufferWriter.writeUInt32(this.locktime);
        bufferWriter.writeUInt32(hashType);
        return bcrypto.hash256(tbuffer);
    }
    getHash(forWitness) {
        // wtxid for coinbase is always 32 bytes of 0x00
        if (forWitness && this.isCoinbase()) return Buffer.alloc(32, 0);
        return bcrypto.hash256(this.__toBuffer(undefined, undefined, forWitness));
    }
    getId() {
        // transaction hash's are displayed in reverse order
        return (0, bufferutils_1.reverseBuffer)(this.getHash(false)).toString("hex");
    }
    toBuffer(buffer, initialOffset) {
        return this.__toBuffer(buffer, initialOffset, true);
    }
    toHex() {
        return this.toBuffer(undefined, undefined).toString("hex");
    }
    setInputScript(index, scriptSig) {
        typeforce(types.tuple(types.Number, types.Buffer), arguments);
        this.ins[index].script = scriptSig;
    }
    setWitness(index, witness) {
        typeforce(types.tuple(types.Number, [
            types.Buffer
        ]), arguments);
        this.ins[index].witness = witness;
    }
    __toBuffer(buffer, initialOffset, _ALLOW_WITNESS = false) {
        if (!buffer) buffer = Buffer.allocUnsafe(this.byteLength(_ALLOW_WITNESS));
        const bufferWriter = new bufferutils_1.BufferWriter(buffer, initialOffset || 0);
        bufferWriter.writeInt32(this.version);
        const hasWitnesses = _ALLOW_WITNESS && this.hasWitnesses();
        if (hasWitnesses) {
            bufferWriter.writeUInt8(Transaction.ADVANCED_TRANSACTION_MARKER);
            bufferWriter.writeUInt8(Transaction.ADVANCED_TRANSACTION_FLAG);
        }
        bufferWriter.writeVarInt(this.ins.length);
        this.ins.forEach((txIn)=>{
            bufferWriter.writeSlice(txIn.hash);
            bufferWriter.writeUInt32(txIn.index);
            bufferWriter.writeVarSlice(txIn.script);
            bufferWriter.writeUInt32(txIn.sequence);
        });
        bufferWriter.writeVarInt(this.outs.length);
        this.outs.forEach((txOut)=>{
            if (isOutput(txOut)) bufferWriter.writeUInt64(txOut.value);
            else bufferWriter.writeSlice(txOut.valueBuffer);
            bufferWriter.writeVarSlice(txOut.script);
        });
        if (hasWitnesses) this.ins.forEach((input)=>{
            bufferWriter.writeVector(input.witness);
        });
        bufferWriter.writeUInt32(this.locktime);
        // avoid slicing unless necessary
        if (initialOffset !== undefined) return buffer.slice(initialOffset, bufferWriter.offset);
        return buffer;
    }
}
exports.Transaction = Transaction;
Transaction.DEFAULT_SEQUENCE = 0xffffffff;
Transaction.SIGHASH_DEFAULT = 0x00;
Transaction.SIGHASH_ALL = 0x01;
Transaction.SIGHASH_NONE = 0x02;
Transaction.SIGHASH_SINGLE = 0x03;
Transaction.SIGHASH_ANYONECANPAY = 0x80;
Transaction.SIGHASH_OUTPUT_MASK = 0x03;
Transaction.SIGHASH_INPUT_MASK = 0x80;
Transaction.ADVANCED_TRANSACTION_MARKER = 0x00;
Transaction.ADVANCED_TRANSACTION_FLAG = 0x01;

},{"f552bdfda8ba655c":"fCgem","625058161ca49b3":"jR49q","dabb1ff0618850bf":"4BCCF","49bb4306cdf0edaf":"28LFb","89755d038b59b4e0":"eFC2X"}],"90Km1":[function(require,module,exports) {
var Buffer = require("bd04018dc1652f62").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Psbt = void 0;
const bip174_1 = require("3cdabce7cf751469");
const varuint = require("7f0c469e1295416c");
const utils_1 = require("15e876c92e186c9a");
const address_1 = require("206460bdf6f8e224");
const bufferutils_1 = require("c66b4b428f6e9b6c");
const networks_1 = require("d819d635cf774913");
const payments = require("147d6fa1a977536e");
const bip341_1 = require("1d60be84f0accf46");
const bscript = require("2f149948dde5be71");
const transaction_1 = require("a441c63dce14b7a7");
const bip371_1 = require("9aa89b7d7b910e2");
const psbtutils_1 = require("36c81f14bf7eb13");
/**
 * These are the default arguments for a Psbt instance.
 */ const DEFAULT_OPTS = {
    /**
   * A bitcoinjs Network object. This is only used if you pass an `address`
   * parameter to addOutput. Otherwise it is not needed and can be left default.
   */ network: networks_1.bitcoin,
    /**
   * When extractTransaction is called, the fee rate is checked.
   * THIS IS NOT TO BE RELIED ON.
   * It is only here as a last ditch effort to prevent sending a 500 BTC fee etc.
   */ maximumFeeRate: 5000
};
/**
 * Psbt class can parse and generate a PSBT binary based off of the BIP174.
 * There are 6 roles that this class fulfills. (Explained in BIP174)
 *
 * Creator: This can be done with `new Psbt()`
 * Updater: This can be done with `psbt.addInput(input)`, `psbt.addInputs(inputs)`,
 *   `psbt.addOutput(output)`, `psbt.addOutputs(outputs)` when you are looking to
 *   add new inputs and outputs to the PSBT, and `psbt.updateGlobal(itemObject)`,
 *   `psbt.updateInput(itemObject)`, `psbt.updateOutput(itemObject)`
 *   addInput requires hash: Buffer | string; and index: number; as attributes
 *   and can also include any attributes that are used in updateInput method.
 *   addOutput requires script: Buffer; and value: number; and likewise can include
 *   data for updateOutput.
 *   For a list of what attributes should be what types. Check the bip174 library.
 *   Also, check the integration tests for some examples of usage.
 * Signer: There are a few methods. signAllInputs and signAllInputsAsync, which will search all input
 *   information for your pubkey or pubkeyhash, and only sign inputs where it finds
 *   your info. Or you can explicitly sign a specific input with signInput and
 *   signInputAsync. For the async methods you can create a SignerAsync object
 *   and use something like a hardware wallet to sign with. (You must implement this)
 * Combiner: psbts can be combined easily with `psbt.combine(psbt2, psbt3, psbt4 ...)`
 *   the psbt calling combine will always have precedence when a conflict occurs.
 *   Combine checks if the internal bitcoin transaction is the same, so be sure that
 *   all sequences, version, locktime, etc. are the same before combining.
 * Input Finalizer: This role is fairly important. Not only does it need to construct
 *   the input scriptSigs and witnesses, but it SHOULD verify the signatures etc.
 *   Before running `psbt.finalizeAllInputs()` please run `psbt.validateSignaturesOfAllInputs()`
 *   Running any finalize method will delete any data in the input(s) that are no longer
 *   needed due to the finalized scripts containing the information.
 * Transaction Extractor: This role will perform some checks before returning a
 *   Transaction object. Such as fee rate not being larger than maximumFeeRate etc.
 */ class Psbt {
    static fromBase64(data, opts = {}) {
        const buffer = Buffer.from(data, "base64");
        return this.fromBuffer(buffer, opts);
    }
    static fromHex(data, opts = {}) {
        const buffer = Buffer.from(data, "hex");
        return this.fromBuffer(buffer, opts);
    }
    static fromBuffer(buffer, opts = {}) {
        const psbtBase = bip174_1.Psbt.fromBuffer(buffer, transactionFromBuffer);
        const psbt = new Psbt(opts, psbtBase);
        checkTxForDupeIns(psbt.__CACHE.__TX, psbt.__CACHE);
        return psbt;
    }
    constructor(opts = {}, data = new bip174_1.Psbt(new PsbtTransaction())){
        this.data = data;
        // set defaults
        this.opts = Object.assign({}, DEFAULT_OPTS, opts);
        this.__CACHE = {
            __NON_WITNESS_UTXO_TX_CACHE: [],
            __NON_WITNESS_UTXO_BUF_CACHE: [],
            __TX_IN_CACHE: {},
            __TX: this.data.globalMap.unsignedTx.tx,
            // Psbt's predecesor (TransactionBuilder - now removed) behavior
            // was to not confirm input values  before signing.
            // Even though we highly encourage people to get
            // the full parent transaction to verify values, the ability to
            // sign non-segwit inputs without the full transaction was often
            // requested. So the only way to activate is to use @ts-ignore.
            // We will disable exporting the Psbt when unsafe sign is active.
            // because it is not BIP174 compliant.
            __UNSAFE_SIGN_NONSEGWIT: false
        };
        if (this.data.inputs.length === 0) this.setVersion(2);
        // Make data hidden when enumerating
        const dpew = (obj, attr, enumerable, writable)=>Object.defineProperty(obj, attr, {
                enumerable,
                writable
            });
        dpew(this, "__CACHE", false, true);
        dpew(this, "opts", false, true);
    }
    get inputCount() {
        return this.data.inputs.length;
    }
    get version() {
        return this.__CACHE.__TX.version;
    }
    set version(version) {
        this.setVersion(version);
    }
    get locktime() {
        return this.__CACHE.__TX.locktime;
    }
    set locktime(locktime) {
        this.setLocktime(locktime);
    }
    get txInputs() {
        return this.__CACHE.__TX.ins.map((input)=>({
                hash: (0, bufferutils_1.cloneBuffer)(input.hash),
                index: input.index,
                sequence: input.sequence
            }));
    }
    get txOutputs() {
        return this.__CACHE.__TX.outs.map((output)=>{
            let address;
            try {
                address = (0, address_1.fromOutputScript)(output.script, this.opts.network);
            } catch (_) {}
            return {
                script: (0, bufferutils_1.cloneBuffer)(output.script),
                value: output.value,
                address
            };
        });
    }
    combine(...those) {
        this.data.combine(...those.map((o)=>o.data));
        return this;
    }
    clone() {
        // TODO: more efficient cloning
        const res = Psbt.fromBuffer(this.data.toBuffer());
        res.opts = JSON.parse(JSON.stringify(this.opts));
        return res;
    }
    setMaximumFeeRate(satoshiPerByte) {
        check32Bit(satoshiPerByte); // 42.9 BTC per byte IS excessive... so throw
        this.opts.maximumFeeRate = satoshiPerByte;
    }
    setVersion(version) {
        check32Bit(version);
        checkInputsForPartialSig(this.data.inputs, "setVersion");
        const c = this.__CACHE;
        c.__TX.version = version;
        c.__EXTRACTED_TX = undefined;
        return this;
    }
    setLocktime(locktime) {
        check32Bit(locktime);
        checkInputsForPartialSig(this.data.inputs, "setLocktime");
        const c = this.__CACHE;
        c.__TX.locktime = locktime;
        c.__EXTRACTED_TX = undefined;
        return this;
    }
    setInputSequence(inputIndex, sequence) {
        check32Bit(sequence);
        checkInputsForPartialSig(this.data.inputs, "setInputSequence");
        const c = this.__CACHE;
        if (c.__TX.ins.length <= inputIndex) throw new Error("Input index too high");
        c.__TX.ins[inputIndex].sequence = sequence;
        c.__EXTRACTED_TX = undefined;
        return this;
    }
    addInputs(inputDatas) {
        inputDatas.forEach((inputData)=>this.addInput(inputData));
        return this;
    }
    addInput(inputData) {
        if (arguments.length > 1 || !inputData || inputData.hash === undefined || inputData.index === undefined) throw new Error(`Invalid arguments for Psbt.addInput. ` + `Requires single object with at least [hash] and [index]`);
        (0, bip371_1.checkTaprootInputFields)(inputData, inputData, "addInput");
        checkInputsForPartialSig(this.data.inputs, "addInput");
        if (inputData.witnessScript) checkInvalidP2WSH(inputData.witnessScript);
        const c = this.__CACHE;
        this.data.addInput(inputData);
        const txIn = c.__TX.ins[c.__TX.ins.length - 1];
        checkTxInputCache(c, txIn);
        const inputIndex = this.data.inputs.length - 1;
        const input = this.data.inputs[inputIndex];
        if (input.nonWitnessUtxo) addNonWitnessTxCache(this.__CACHE, input, inputIndex);
        c.__FEE = undefined;
        c.__FEE_RATE = undefined;
        c.__EXTRACTED_TX = undefined;
        return this;
    }
    addOutputs(outputDatas) {
        outputDatas.forEach((outputData)=>this.addOutput(outputData));
        return this;
    }
    addOutput(outputData) {
        if (arguments.length > 1 || !outputData || outputData.value === undefined || outputData.address === undefined && outputData.script === undefined) throw new Error(`Invalid arguments for Psbt.addOutput. ` + `Requires single object with at least [script or address] and [value]`);
        checkInputsForPartialSig(this.data.inputs, "addOutput");
        const { address } = outputData;
        if (typeof address === "string") {
            const { network } = this.opts;
            const script = (0, address_1.toOutputScript)(address, network);
            outputData = Object.assign(outputData, {
                script
            });
        }
        (0, bip371_1.checkTaprootOutputFields)(outputData, outputData, "addOutput");
        const c = this.__CACHE;
        this.data.addOutput(outputData);
        c.__FEE = undefined;
        c.__FEE_RATE = undefined;
        c.__EXTRACTED_TX = undefined;
        return this;
    }
    extractTransaction(disableFeeCheck) {
        if (!this.data.inputs.every(isFinalized)) throw new Error("Not finalized");
        const c = this.__CACHE;
        if (!disableFeeCheck) checkFees(this, c, this.opts);
        if (c.__EXTRACTED_TX) return c.__EXTRACTED_TX;
        const tx = c.__TX.clone();
        inputFinalizeGetAmts(this.data.inputs, tx, c, true);
        return tx;
    }
    getFeeRate() {
        return getTxCacheValue("__FEE_RATE", "fee rate", this.data.inputs, this.__CACHE);
    }
    getFee() {
        return getTxCacheValue("__FEE", "fee", this.data.inputs, this.__CACHE);
    }
    finalizeAllInputs() {
        (0, utils_1.checkForInput)(this.data.inputs, 0); // making sure we have at least one
        range(this.data.inputs.length).forEach((idx)=>this.finalizeInput(idx));
        return this;
    }
    finalizeInput(inputIndex, finalScriptsFunc) {
        const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
        if ((0, bip371_1.isTaprootInput)(input)) return this._finalizeTaprootInput(inputIndex, input, undefined, finalScriptsFunc);
        return this._finalizeInput(inputIndex, input, finalScriptsFunc);
    }
    finalizeTaprootInput(inputIndex, tapLeafHashToFinalize, finalScriptsFunc = bip371_1.tapScriptFinalizer) {
        const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
        if ((0, bip371_1.isTaprootInput)(input)) return this._finalizeTaprootInput(inputIndex, input, tapLeafHashToFinalize, finalScriptsFunc);
        throw new Error(`Cannot finalize input #${inputIndex}. Not Taproot.`);
    }
    _finalizeInput(inputIndex, input, finalScriptsFunc = getFinalScripts) {
        const { script, isP2SH, isP2WSH, isSegwit } = getScriptFromInput(inputIndex, input, this.__CACHE);
        if (!script) throw new Error(`No script found for input #${inputIndex}`);
        checkPartialSigSighashes(input);
        const { finalScriptSig, finalScriptWitness } = finalScriptsFunc(inputIndex, input, script, isSegwit, isP2SH, isP2WSH);
        if (finalScriptSig) this.data.updateInput(inputIndex, {
            finalScriptSig
        });
        if (finalScriptWitness) this.data.updateInput(inputIndex, {
            finalScriptWitness
        });
        if (!finalScriptSig && !finalScriptWitness) throw new Error(`Unknown error finalizing input #${inputIndex}`);
        this.data.clearFinalizedInput(inputIndex);
        return this;
    }
    _finalizeTaprootInput(inputIndex, input, tapLeafHashToFinalize, finalScriptsFunc = bip371_1.tapScriptFinalizer) {
        if (!input.witnessUtxo) throw new Error(`Cannot finalize input #${inputIndex}. Missing withness utxo.`);
        // Check key spend first. Increased privacy and reduced block space.
        if (input.tapKeySig) {
            const payment = payments.p2tr({
                output: input.witnessUtxo.script,
                signature: input.tapKeySig
            });
            const finalScriptWitness = (0, psbtutils_1.witnessStackToScriptWitness)(payment.witness);
            this.data.updateInput(inputIndex, {
                finalScriptWitness
            });
        } else {
            const { finalScriptWitness } = finalScriptsFunc(inputIndex, input, tapLeafHashToFinalize);
            this.data.updateInput(inputIndex, {
                finalScriptWitness
            });
        }
        this.data.clearFinalizedInput(inputIndex);
        return this;
    }
    getInputType(inputIndex) {
        const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
        const script = getScriptFromUtxo(inputIndex, input, this.__CACHE);
        const result = getMeaningfulScript(script, inputIndex, "input", input.redeemScript || redeemFromFinalScriptSig(input.finalScriptSig), input.witnessScript || redeemFromFinalWitnessScript(input.finalScriptWitness));
        const type = result.type === "raw" ? "" : result.type + "-";
        const mainType = classifyScript(result.meaningfulScript);
        return type + mainType;
    }
    inputHasPubkey(inputIndex, pubkey) {
        const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
        return pubkeyInInput(pubkey, input, inputIndex, this.__CACHE);
    }
    inputHasHDKey(inputIndex, root) {
        const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
        const derivationIsMine = bip32DerivationIsMine(root);
        return !!input.bip32Derivation && input.bip32Derivation.some(derivationIsMine);
    }
    outputHasPubkey(outputIndex, pubkey) {
        const output = (0, utils_1.checkForOutput)(this.data.outputs, outputIndex);
        return pubkeyInOutput(pubkey, output, outputIndex, this.__CACHE);
    }
    outputHasHDKey(outputIndex, root) {
        const output = (0, utils_1.checkForOutput)(this.data.outputs, outputIndex);
        const derivationIsMine = bip32DerivationIsMine(root);
        return !!output.bip32Derivation && output.bip32Derivation.some(derivationIsMine);
    }
    validateSignaturesOfAllInputs(validator) {
        (0, utils_1.checkForInput)(this.data.inputs, 0); // making sure we have at least one
        const results = range(this.data.inputs.length).map((idx)=>this.validateSignaturesOfInput(idx, validator));
        return results.reduce((final, res)=>res === true && final, true);
    }
    validateSignaturesOfInput(inputIndex, validator, pubkey) {
        const input = this.data.inputs[inputIndex];
        if ((0, bip371_1.isTaprootInput)(input)) return this.validateSignaturesOfTaprootInput(inputIndex, validator, pubkey);
        return this._validateSignaturesOfInput(inputIndex, validator, pubkey);
    }
    _validateSignaturesOfInput(inputIndex, validator, pubkey) {
        const input = this.data.inputs[inputIndex];
        const partialSig = (input || {}).partialSig;
        if (!input || !partialSig || partialSig.length < 1) throw new Error("No signatures to validate");
        if (typeof validator !== "function") throw new Error("Need validator function to validate signatures");
        const mySigs = pubkey ? partialSig.filter((sig)=>sig.pubkey.equals(pubkey)) : partialSig;
        if (mySigs.length < 1) throw new Error("No signatures for this pubkey");
        const results = [];
        let hashCache;
        let scriptCache;
        let sighashCache;
        for (const pSig of mySigs){
            const sig = bscript.signature.decode(pSig.signature);
            const { hash, script } = sighashCache !== sig.hashType ? getHashForSig(inputIndex, Object.assign({}, input, {
                sighashType: sig.hashType
            }), this.__CACHE, true) : {
                hash: hashCache,
                script: scriptCache
            };
            sighashCache = sig.hashType;
            hashCache = hash;
            scriptCache = script;
            checkScriptForPubkey(pSig.pubkey, script, "verify");
            results.push(validator(pSig.pubkey, hash, sig.signature));
        }
        return results.every((res)=>res === true);
    }
    validateSignaturesOfTaprootInput(inputIndex, validator, pubkey) {
        const input = this.data.inputs[inputIndex];
        const tapKeySig = (input || {}).tapKeySig;
        const tapScriptSig = (input || {}).tapScriptSig;
        if (!input && !tapKeySig && !(tapScriptSig && !tapScriptSig.length)) throw new Error("No signatures to validate");
        if (typeof validator !== "function") throw new Error("Need validator function to validate signatures");
        pubkey = pubkey && (0, bip371_1.toXOnly)(pubkey);
        const allHashses = pubkey ? getTaprootHashesForSig(inputIndex, input, this.data.inputs, pubkey, this.__CACHE) : getAllTaprootHashesForSig(inputIndex, input, this.data.inputs, this.__CACHE);
        if (!allHashses.length) throw new Error("No signatures for this pubkey");
        const tapKeyHash = allHashses.find((h)=>!h.leafHash);
        let validationResultCount = 0;
        if (tapKeySig && tapKeyHash) {
            const isValidTapkeySig = validator(tapKeyHash.pubkey, tapKeyHash.hash, trimTaprootSig(tapKeySig));
            if (!isValidTapkeySig) return false;
            validationResultCount++;
        }
        if (tapScriptSig) for (const tapSig of tapScriptSig){
            const tapSigHash = allHashses.find((h)=>tapSig.pubkey.equals(h.pubkey));
            if (tapSigHash) {
                const isValidTapScriptSig = validator(tapSig.pubkey, tapSigHash.hash, trimTaprootSig(tapSig.signature));
                if (!isValidTapScriptSig) return false;
                validationResultCount++;
            }
        }
        return validationResultCount > 0;
    }
    signAllInputsHD(hdKeyPair, sighashTypes = [
        transaction_1.Transaction.SIGHASH_ALL
    ]) {
        if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) throw new Error("Need HDSigner to sign input");
        const results = [];
        for (const i of range(this.data.inputs.length))try {
            this.signInputHD(i, hdKeyPair, sighashTypes);
            results.push(true);
        } catch (err) {
            results.push(false);
        }
        if (results.every((v)=>v === false)) throw new Error("No inputs were signed");
        return this;
    }
    signAllInputsHDAsync(hdKeyPair, sighashTypes = [
        transaction_1.Transaction.SIGHASH_ALL
    ]) {
        return new Promise((resolve, reject)=>{
            if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) return reject(new Error("Need HDSigner to sign input"));
            const results = [];
            const promises = [];
            for (const i of range(this.data.inputs.length))promises.push(this.signInputHDAsync(i, hdKeyPair, sighashTypes).then(()=>{
                results.push(true);
            }, ()=>{
                results.push(false);
            }));
            return Promise.all(promises).then(()=>{
                if (results.every((v)=>v === false)) return reject(new Error("No inputs were signed"));
                resolve();
            });
        });
    }
    signInputHD(inputIndex, hdKeyPair, sighashTypes = [
        transaction_1.Transaction.SIGHASH_ALL
    ]) {
        if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) throw new Error("Need HDSigner to sign input");
        const signers = getSignersFromHD(inputIndex, this.data.inputs, hdKeyPair);
        signers.forEach((signer)=>this.signInput(inputIndex, signer, sighashTypes));
        return this;
    }
    signInputHDAsync(inputIndex, hdKeyPair, sighashTypes = [
        transaction_1.Transaction.SIGHASH_ALL
    ]) {
        return new Promise((resolve, reject)=>{
            if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) return reject(new Error("Need HDSigner to sign input"));
            const signers = getSignersFromHD(inputIndex, this.data.inputs, hdKeyPair);
            const promises = signers.map((signer)=>this.signInputAsync(inputIndex, signer, sighashTypes));
            return Promise.all(promises).then(()=>{
                resolve();
            }).catch(reject);
        });
    }
    signAllInputs(keyPair, sighashTypes) {
        if (!keyPair || !keyPair.publicKey) throw new Error("Need Signer to sign input");
        // TODO: Add a pubkey/pubkeyhash cache to each input
        // as input information is added, then eventually
        // optimize this method.
        const results = [];
        for (const i of range(this.data.inputs.length))try {
            this.signInput(i, keyPair, sighashTypes);
            results.push(true);
        } catch (err) {
            results.push(false);
        }
        if (results.every((v)=>v === false)) throw new Error("No inputs were signed");
        return this;
    }
    signAllInputsAsync(keyPair, sighashTypes) {
        return new Promise((resolve, reject)=>{
            if (!keyPair || !keyPair.publicKey) return reject(new Error("Need Signer to sign input"));
            // TODO: Add a pubkey/pubkeyhash cache to each input
            // as input information is added, then eventually
            // optimize this method.
            const results = [];
            const promises = [];
            for (const [i] of this.data.inputs.entries())promises.push(this.signInputAsync(i, keyPair, sighashTypes).then(()=>{
                results.push(true);
            }, ()=>{
                results.push(false);
            }));
            return Promise.all(promises).then(()=>{
                if (results.every((v)=>v === false)) return reject(new Error("No inputs were signed"));
                resolve();
            });
        });
    }
    signInput(inputIndex, keyPair, sighashTypes) {
        if (!keyPair || !keyPair.publicKey) throw new Error("Need Signer to sign input");
        const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
        if ((0, bip371_1.isTaprootInput)(input)) return this._signTaprootInput(inputIndex, input, keyPair, undefined, sighashTypes);
        return this._signInput(inputIndex, keyPair, sighashTypes);
    }
    signTaprootInput(inputIndex, keyPair, tapLeafHashToSign, sighashTypes) {
        if (!keyPair || !keyPair.publicKey) throw new Error("Need Signer to sign input");
        const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
        if ((0, bip371_1.isTaprootInput)(input)) return this._signTaprootInput(inputIndex, input, keyPair, tapLeafHashToSign, sighashTypes);
        throw new Error(`Input #${inputIndex} is not of type Taproot.`);
    }
    _signInput(inputIndex, keyPair, sighashTypes = [
        transaction_1.Transaction.SIGHASH_ALL
    ]) {
        const { hash, sighashType } = getHashAndSighashType(this.data.inputs, inputIndex, keyPair.publicKey, this.__CACHE, sighashTypes);
        const partialSig = [
            {
                pubkey: keyPair.publicKey,
                signature: bscript.signature.encode(keyPair.sign(hash), sighashType)
            }
        ];
        this.data.updateInput(inputIndex, {
            partialSig
        });
        return this;
    }
    _signTaprootInput(inputIndex, input, keyPair, tapLeafHashToSign, allowedSighashTypes = [
        transaction_1.Transaction.SIGHASH_DEFAULT
    ]) {
        const hashesForSig = this.checkTaprootHashesForSig(inputIndex, input, keyPair, tapLeafHashToSign, allowedSighashTypes);
        const tapKeySig = hashesForSig.filter((h)=>!h.leafHash).map((h)=>(0, bip371_1.serializeTaprootSignature)(keyPair.signSchnorr(h.hash), input.sighashType))[0];
        const tapScriptSig = hashesForSig.filter((h)=>!!h.leafHash).map((h)=>({
                pubkey: (0, bip371_1.toXOnly)(keyPair.publicKey),
                signature: (0, bip371_1.serializeTaprootSignature)(keyPair.signSchnorr(h.hash), input.sighashType),
                leafHash: h.leafHash
            }));
        if (tapKeySig) this.data.updateInput(inputIndex, {
            tapKeySig
        });
        if (tapScriptSig.length) this.data.updateInput(inputIndex, {
            tapScriptSig
        });
        return this;
    }
    signInputAsync(inputIndex, keyPair, sighashTypes) {
        return Promise.resolve().then(()=>{
            if (!keyPair || !keyPair.publicKey) throw new Error("Need Signer to sign input");
            const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
            if ((0, bip371_1.isTaprootInput)(input)) return this._signTaprootInputAsync(inputIndex, input, keyPair, undefined, sighashTypes);
            return this._signInputAsync(inputIndex, keyPair, sighashTypes);
        });
    }
    signTaprootInputAsync(inputIndex, keyPair, tapLeafHash, sighashTypes) {
        return Promise.resolve().then(()=>{
            if (!keyPair || !keyPair.publicKey) throw new Error("Need Signer to sign input");
            const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
            if ((0, bip371_1.isTaprootInput)(input)) return this._signTaprootInputAsync(inputIndex, input, keyPair, tapLeafHash, sighashTypes);
            throw new Error(`Input #${inputIndex} is not of type Taproot.`);
        });
    }
    _signInputAsync(inputIndex, keyPair, sighashTypes = [
        transaction_1.Transaction.SIGHASH_ALL
    ]) {
        const { hash, sighashType } = getHashAndSighashType(this.data.inputs, inputIndex, keyPair.publicKey, this.__CACHE, sighashTypes);
        return Promise.resolve(keyPair.sign(hash)).then((signature)=>{
            const partialSig = [
                {
                    pubkey: keyPair.publicKey,
                    signature: bscript.signature.encode(signature, sighashType)
                }
            ];
            this.data.updateInput(inputIndex, {
                partialSig
            });
        });
    }
    async _signTaprootInputAsync(inputIndex, input, keyPair, tapLeafHash, sighashTypes = [
        transaction_1.Transaction.SIGHASH_DEFAULT
    ]) {
        const hashesForSig = this.checkTaprootHashesForSig(inputIndex, input, keyPair, tapLeafHash, sighashTypes);
        const signaturePromises = [];
        const tapKeyHash = hashesForSig.filter((h)=>!h.leafHash)[0];
        if (tapKeyHash) {
            const tapKeySigPromise = Promise.resolve(keyPair.signSchnorr(tapKeyHash.hash)).then((sig)=>{
                return {
                    tapKeySig: (0, bip371_1.serializeTaprootSignature)(sig, input.sighashType)
                };
            });
            signaturePromises.push(tapKeySigPromise);
        }
        const tapScriptHashes = hashesForSig.filter((h)=>!!h.leafHash);
        if (tapScriptHashes.length) {
            const tapScriptSigPromises = tapScriptHashes.map((tsh)=>{
                return Promise.resolve(keyPair.signSchnorr(tsh.hash)).then((signature)=>{
                    const tapScriptSig = [
                        {
                            pubkey: (0, bip371_1.toXOnly)(keyPair.publicKey),
                            signature: (0, bip371_1.serializeTaprootSignature)(signature, input.sighashType),
                            leafHash: tsh.leafHash
                        }
                    ];
                    return {
                        tapScriptSig
                    };
                });
            });
            signaturePromises.push(...tapScriptSigPromises);
        }
        return Promise.all(signaturePromises).then((results)=>{
            results.forEach((v)=>this.data.updateInput(inputIndex, v));
        });
    }
    checkTaprootHashesForSig(inputIndex, input, keyPair, tapLeafHashToSign, allowedSighashTypes) {
        if (typeof keyPair.signSchnorr !== "function") throw new Error(`Need Schnorr Signer to sign taproot input #${inputIndex}.`);
        const hashesForSig = getTaprootHashesForSig(inputIndex, input, this.data.inputs, keyPair.publicKey, this.__CACHE, tapLeafHashToSign, allowedSighashTypes);
        if (!hashesForSig || !hashesForSig.length) throw new Error(`Can not sign for input #${inputIndex} with the key ${keyPair.publicKey.toString("hex")}`);
        return hashesForSig;
    }
    toBuffer() {
        checkCache(this.__CACHE);
        return this.data.toBuffer();
    }
    toHex() {
        checkCache(this.__CACHE);
        return this.data.toHex();
    }
    toBase64() {
        checkCache(this.__CACHE);
        return this.data.toBase64();
    }
    updateGlobal(updateData) {
        this.data.updateGlobal(updateData);
        return this;
    }
    updateInput(inputIndex, updateData) {
        if (updateData.witnessScript) checkInvalidP2WSH(updateData.witnessScript);
        (0, bip371_1.checkTaprootInputFields)(this.data.inputs[inputIndex], updateData, "updateInput");
        this.data.updateInput(inputIndex, updateData);
        if (updateData.nonWitnessUtxo) addNonWitnessTxCache(this.__CACHE, this.data.inputs[inputIndex], inputIndex);
        return this;
    }
    updateOutput(outputIndex, updateData) {
        const outputData = this.data.outputs[outputIndex];
        (0, bip371_1.checkTaprootOutputFields)(outputData, updateData, "updateOutput");
        this.data.updateOutput(outputIndex, updateData);
        return this;
    }
    addUnknownKeyValToGlobal(keyVal) {
        this.data.addUnknownKeyValToGlobal(keyVal);
        return this;
    }
    addUnknownKeyValToInput(inputIndex, keyVal) {
        this.data.addUnknownKeyValToInput(inputIndex, keyVal);
        return this;
    }
    addUnknownKeyValToOutput(outputIndex, keyVal) {
        this.data.addUnknownKeyValToOutput(outputIndex, keyVal);
        return this;
    }
    clearFinalizedInput(inputIndex) {
        this.data.clearFinalizedInput(inputIndex);
        return this;
    }
}
exports.Psbt = Psbt;
/**
 * This function is needed to pass to the bip174 base class's fromBuffer.
 * It takes the "transaction buffer" portion of the psbt buffer and returns a
 * Transaction (From the bip174 library) interface.
 */ const transactionFromBuffer = (buffer)=>new PsbtTransaction(buffer);
/**
 * This class implements the Transaction interface from bip174 library.
 * It contains a bitcoinjs-lib Transaction object.
 */ class PsbtTransaction {
    constructor(buffer = Buffer.from([
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ])){
        this.tx = transaction_1.Transaction.fromBuffer(buffer);
        checkTxEmpty(this.tx);
        Object.defineProperty(this, "tx", {
            enumerable: false,
            writable: true
        });
    }
    getInputOutputCounts() {
        return {
            inputCount: this.tx.ins.length,
            outputCount: this.tx.outs.length
        };
    }
    addInput(input) {
        if (input.hash === undefined || input.index === undefined || !Buffer.isBuffer(input.hash) && typeof input.hash !== "string" || typeof input.index !== "number") throw new Error("Error adding input.");
        const hash = typeof input.hash === "string" ? (0, bufferutils_1.reverseBuffer)(Buffer.from(input.hash, "hex")) : input.hash;
        this.tx.addInput(hash, input.index, input.sequence);
    }
    addOutput(output) {
        if (output.script === undefined || output.value === undefined || !Buffer.isBuffer(output.script) || typeof output.value !== "number") throw new Error("Error adding output.");
        this.tx.addOutput(output.script, output.value);
    }
    toBuffer() {
        return this.tx.toBuffer();
    }
}
function canFinalize(input, script, scriptType) {
    switch(scriptType){
        case "pubkey":
        case "pubkeyhash":
        case "witnesspubkeyhash":
            return hasSigs(1, input.partialSig);
        case "multisig":
            const p2ms = payments.p2ms({
                output: script
            });
            return hasSigs(p2ms.m, input.partialSig, p2ms.pubkeys);
        default:
            return false;
    }
}
function checkCache(cache) {
    if (cache.__UNSAFE_SIGN_NONSEGWIT !== false) throw new Error("Not BIP174 compliant, can not export");
}
function hasSigs(neededSigs, partialSig, pubkeys) {
    if (!partialSig) return false;
    let sigs;
    if (pubkeys) sigs = pubkeys.map((pkey)=>{
        const pubkey = compressPubkey(pkey);
        return partialSig.find((pSig)=>pSig.pubkey.equals(pubkey));
    }).filter((v)=>!!v);
    else sigs = partialSig;
    if (sigs.length > neededSigs) throw new Error("Too many signatures");
    return sigs.length === neededSigs;
}
function isFinalized(input) {
    return !!input.finalScriptSig || !!input.finalScriptWitness;
}
function bip32DerivationIsMine(root) {
    return (d)=>{
        if (!d.masterFingerprint.equals(root.fingerprint)) return false;
        if (!root.derivePath(d.path).publicKey.equals(d.pubkey)) return false;
        return true;
    };
}
function check32Bit(num) {
    if (typeof num !== "number" || num !== Math.floor(num) || num > 0xffffffff || num < 0) throw new Error("Invalid 32 bit integer");
}
function checkFees(psbt, cache, opts) {
    const feeRate = cache.__FEE_RATE || psbt.getFeeRate();
    const vsize = cache.__EXTRACTED_TX.virtualSize();
    const satoshis = feeRate * vsize;
    if (feeRate >= opts.maximumFeeRate) throw new Error(`Warning: You are paying around ${(satoshis / 1e8).toFixed(8)} in ` + `fees, which is ${feeRate} satoshi per byte for a transaction ` + `with a VSize of ${vsize} bytes (segwit counted as 0.25 byte per ` + `byte). Use setMaximumFeeRate method to raise your threshold, or ` + `pass true to the first arg of extractTransaction.`);
}
function checkInputsForPartialSig(inputs, action) {
    inputs.forEach((input)=>{
        const throws = (0, bip371_1.isTaprootInput)(input) ? (0, bip371_1.checkTaprootInputForSigs)(input, action) : (0, psbtutils_1.checkInputForSig)(input, action);
        if (throws) throw new Error("Can not modify transaction, signatures exist.");
    });
}
function checkPartialSigSighashes(input) {
    if (!input.sighashType || !input.partialSig) return;
    const { partialSig, sighashType } = input;
    partialSig.forEach((pSig)=>{
        const { hashType } = bscript.signature.decode(pSig.signature);
        if (sighashType !== hashType) throw new Error("Signature sighash does not match input sighash type");
    });
}
function checkScriptForPubkey(pubkey, script, action) {
    if (!(0, psbtutils_1.pubkeyInScript)(pubkey, script)) throw new Error(`Can not ${action} for this input with the key ${pubkey.toString("hex")}`);
}
function checkTxEmpty(tx) {
    const isEmpty = tx.ins.every((input)=>input.script && input.script.length === 0 && input.witness && input.witness.length === 0);
    if (!isEmpty) throw new Error("Format Error: Transaction ScriptSigs are not empty");
}
function checkTxForDupeIns(tx, cache) {
    tx.ins.forEach((input)=>{
        checkTxInputCache(cache, input);
    });
}
function checkTxInputCache(cache, input) {
    const key = (0, bufferutils_1.reverseBuffer)(Buffer.from(input.hash)).toString("hex") + ":" + input.index;
    if (cache.__TX_IN_CACHE[key]) throw new Error("Duplicate input detected.");
    cache.__TX_IN_CACHE[key] = 1;
}
function scriptCheckerFactory(payment, paymentScriptName) {
    return (inputIndex, scriptPubKey, redeemScript, ioType)=>{
        const redeemScriptOutput = payment({
            redeem: {
                output: redeemScript
            }
        }).output;
        if (!scriptPubKey.equals(redeemScriptOutput)) throw new Error(`${paymentScriptName} for ${ioType} #${inputIndex} doesn't match the scriptPubKey in the prevout`);
    };
}
const checkRedeemScript = scriptCheckerFactory(payments.p2sh, "Redeem script");
const checkWitnessScript = scriptCheckerFactory(payments.p2wsh, "Witness script");
function getTxCacheValue(key, name, inputs, c) {
    if (!inputs.every(isFinalized)) throw new Error(`PSBT must be finalized to calculate ${name}`);
    if (key === "__FEE_RATE" && c.__FEE_RATE) return c.__FEE_RATE;
    if (key === "__FEE" && c.__FEE) return c.__FEE;
    let tx;
    let mustFinalize = true;
    if (c.__EXTRACTED_TX) {
        tx = c.__EXTRACTED_TX;
        mustFinalize = false;
    } else tx = c.__TX.clone();
    inputFinalizeGetAmts(inputs, tx, c, mustFinalize);
    if (key === "__FEE_RATE") return c.__FEE_RATE;
    else if (key === "__FEE") return c.__FEE;
}
function getFinalScripts(inputIndex, input, script, isSegwit, isP2SH, isP2WSH) {
    const scriptType = classifyScript(script);
    if (!canFinalize(input, script, scriptType)) throw new Error(`Can not finalize input #${inputIndex}`);
    return prepareFinalScripts(script, scriptType, input.partialSig, isSegwit, isP2SH, isP2WSH);
}
function prepareFinalScripts(script, scriptType, partialSig, isSegwit, isP2SH, isP2WSH) {
    let finalScriptSig;
    let finalScriptWitness;
    // Wow, the payments API is very handy
    const payment = getPayment(script, scriptType, partialSig);
    const p2wsh = !isP2WSH ? null : payments.p2wsh({
        redeem: payment
    });
    const p2sh = !isP2SH ? null : payments.p2sh({
        redeem: p2wsh || payment
    });
    if (isSegwit) {
        if (p2wsh) finalScriptWitness = (0, psbtutils_1.witnessStackToScriptWitness)(p2wsh.witness);
        else finalScriptWitness = (0, psbtutils_1.witnessStackToScriptWitness)(payment.witness);
        if (p2sh) finalScriptSig = p2sh.input;
    } else if (p2sh) finalScriptSig = p2sh.input;
    else finalScriptSig = payment.input;
    return {
        finalScriptSig,
        finalScriptWitness
    };
}
function getHashAndSighashType(inputs, inputIndex, pubkey, cache, sighashTypes) {
    const input = (0, utils_1.checkForInput)(inputs, inputIndex);
    const { hash, sighashType, script } = getHashForSig(inputIndex, input, cache, false, sighashTypes);
    checkScriptForPubkey(pubkey, script, "sign");
    return {
        hash,
        sighashType
    };
}
function getHashForSig(inputIndex, input, cache, forValidate, sighashTypes) {
    const unsignedTx = cache.__TX;
    const sighashType = input.sighashType || transaction_1.Transaction.SIGHASH_ALL;
    checkSighashTypeAllowed(sighashType, sighashTypes);
    let hash;
    let prevout;
    if (input.nonWitnessUtxo) {
        const nonWitnessUtxoTx = nonWitnessUtxoTxFromCache(cache, input, inputIndex);
        const prevoutHash = unsignedTx.ins[inputIndex].hash;
        const utxoHash = nonWitnessUtxoTx.getHash();
        // If a non-witness UTXO is provided, its hash must match the hash specified in the prevout
        if (!prevoutHash.equals(utxoHash)) throw new Error(`Non-witness UTXO hash for input #${inputIndex} doesn't match the hash specified in the prevout`);
        const prevoutIndex = unsignedTx.ins[inputIndex].index;
        prevout = nonWitnessUtxoTx.outs[prevoutIndex];
    } else if (input.witnessUtxo) prevout = input.witnessUtxo;
    else throw new Error("Need a Utxo input item for signing");
    const { meaningfulScript, type } = getMeaningfulScript(prevout.script, inputIndex, "input", input.redeemScript, input.witnessScript);
    if ([
        "p2sh-p2wsh",
        "p2wsh"
    ].indexOf(type) >= 0) hash = unsignedTx.hashForWitnessV0(inputIndex, meaningfulScript, prevout.value, sighashType);
    else if ((0, psbtutils_1.isP2WPKH)(meaningfulScript)) {
        // P2WPKH uses the P2PKH template for prevoutScript when signing
        const signingScript = payments.p2pkh({
            hash: meaningfulScript.slice(2)
        }).output;
        hash = unsignedTx.hashForWitnessV0(inputIndex, signingScript, prevout.value, sighashType);
    } else {
        // non-segwit
        if (input.nonWitnessUtxo === undefined && cache.__UNSAFE_SIGN_NONSEGWIT === false) throw new Error(`Input #${inputIndex} has witnessUtxo but non-segwit script: ` + `${meaningfulScript.toString("hex")}`);
        if (!forValidate && cache.__UNSAFE_SIGN_NONSEGWIT !== false) console.warn("Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as Psbt's predecesor (TransactionBuilder - now removed) when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.\n*********************\nPROCEED WITH CAUTION!\n*********************");
        hash = unsignedTx.hashForSignature(inputIndex, meaningfulScript, sighashType);
    }
    return {
        script: meaningfulScript,
        sighashType,
        hash
    };
}
function getAllTaprootHashesForSig(inputIndex, input, inputs, cache) {
    const allPublicKeys = [];
    if (input.tapInternalKey) {
        const key = getPrevoutTaprootKey(inputIndex, input, cache);
        if (key) allPublicKeys.push(key);
    }
    if (input.tapScriptSig) {
        const tapScriptPubkeys = input.tapScriptSig.map((tss)=>tss.pubkey);
        allPublicKeys.push(...tapScriptPubkeys);
    }
    const allHashes = allPublicKeys.map((pubicKey)=>getTaprootHashesForSig(inputIndex, input, inputs, pubicKey, cache));
    return allHashes.flat();
}
function getPrevoutTaprootKey(inputIndex, input, cache) {
    const { script } = getScriptAndAmountFromUtxo(inputIndex, input, cache);
    return (0, psbtutils_1.isP2TR)(script) ? script.subarray(2, 34) : null;
}
function trimTaprootSig(signature) {
    return signature.length === 64 ? signature : signature.subarray(0, 64);
}
function getTaprootHashesForSig(inputIndex, input, inputs, pubkey, cache, tapLeafHashToSign, allowedSighashTypes) {
    const unsignedTx = cache.__TX;
    const sighashType = input.sighashType || transaction_1.Transaction.SIGHASH_DEFAULT;
    checkSighashTypeAllowed(sighashType, allowedSighashTypes);
    const prevOuts = inputs.map((i, index)=>getScriptAndAmountFromUtxo(index, i, cache));
    const signingScripts = prevOuts.map((o)=>o.script);
    const values = prevOuts.map((o)=>o.value);
    const hashes = [];
    if (input.tapInternalKey && !tapLeafHashToSign) {
        const outputKey = getPrevoutTaprootKey(inputIndex, input, cache) || Buffer.from([]);
        if ((0, bip371_1.toXOnly)(pubkey).equals(outputKey)) {
            const tapKeyHash = unsignedTx.hashForWitnessV1(inputIndex, signingScripts, values, sighashType);
            hashes.push({
                pubkey,
                hash: tapKeyHash
            });
        }
    }
    const tapLeafHashes = (input.tapLeafScript || []).filter((tapLeaf)=>(0, psbtutils_1.pubkeyInScript)(pubkey, tapLeaf.script)).map((tapLeaf)=>{
        const hash = (0, bip341_1.tapleafHash)({
            output: tapLeaf.script,
            version: tapLeaf.leafVersion
        });
        return Object.assign({
            hash
        }, tapLeaf);
    }).filter((tapLeaf)=>!tapLeafHashToSign || tapLeafHashToSign.equals(tapLeaf.hash)).map((tapLeaf)=>{
        const tapScriptHash = unsignedTx.hashForWitnessV1(inputIndex, signingScripts, values, transaction_1.Transaction.SIGHASH_DEFAULT, tapLeaf.hash);
        return {
            pubkey,
            hash: tapScriptHash,
            leafHash: tapLeaf.hash
        };
    });
    return hashes.concat(tapLeafHashes);
}
function checkSighashTypeAllowed(sighashType, sighashTypes) {
    if (sighashTypes && sighashTypes.indexOf(sighashType) < 0) {
        const str = sighashTypeToString(sighashType);
        throw new Error(`Sighash type is not allowed. Retry the sign method passing the ` + `sighashTypes array of whitelisted types. Sighash type: ${str}`);
    }
}
function getPayment(script, scriptType, partialSig) {
    let payment;
    switch(scriptType){
        case "multisig":
            const sigs = getSortedSigs(script, partialSig);
            payment = payments.p2ms({
                output: script,
                signatures: sigs
            });
            break;
        case "pubkey":
            payment = payments.p2pk({
                output: script,
                signature: partialSig[0].signature
            });
            break;
        case "pubkeyhash":
            payment = payments.p2pkh({
                output: script,
                pubkey: partialSig[0].pubkey,
                signature: partialSig[0].signature
            });
            break;
        case "witnesspubkeyhash":
            payment = payments.p2wpkh({
                output: script,
                pubkey: partialSig[0].pubkey,
                signature: partialSig[0].signature
            });
            break;
    }
    return payment;
}
function getScriptFromInput(inputIndex, input, cache) {
    const unsignedTx = cache.__TX;
    const res = {
        script: null,
        isSegwit: false,
        isP2SH: false,
        isP2WSH: false
    };
    res.isP2SH = !!input.redeemScript;
    res.isP2WSH = !!input.witnessScript;
    if (input.witnessScript) res.script = input.witnessScript;
    else if (input.redeemScript) res.script = input.redeemScript;
    else {
        if (input.nonWitnessUtxo) {
            const nonWitnessUtxoTx = nonWitnessUtxoTxFromCache(cache, input, inputIndex);
            const prevoutIndex = unsignedTx.ins[inputIndex].index;
            res.script = nonWitnessUtxoTx.outs[prevoutIndex].script;
        } else if (input.witnessUtxo) res.script = input.witnessUtxo.script;
    }
    if (input.witnessScript || (0, psbtutils_1.isP2WPKH)(res.script)) res.isSegwit = true;
    return res;
}
function getSignersFromHD(inputIndex, inputs, hdKeyPair) {
    const input = (0, utils_1.checkForInput)(inputs, inputIndex);
    if (!input.bip32Derivation || input.bip32Derivation.length === 0) throw new Error("Need bip32Derivation to sign with HD");
    const myDerivations = input.bip32Derivation.map((bipDv)=>{
        if (bipDv.masterFingerprint.equals(hdKeyPair.fingerprint)) return bipDv;
        else return;
    }).filter((v)=>!!v);
    if (myDerivations.length === 0) throw new Error("Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint");
    const signers = myDerivations.map((bipDv)=>{
        const node = hdKeyPair.derivePath(bipDv.path);
        if (!bipDv.pubkey.equals(node.publicKey)) throw new Error("pubkey did not match bip32Derivation");
        return node;
    });
    return signers;
}
function getSortedSigs(script, partialSig) {
    const p2ms = payments.p2ms({
        output: script
    });
    // for each pubkey in order of p2ms script
    return p2ms.pubkeys.map((pk)=>{
        // filter partialSig array by pubkey being equal
        return (partialSig.filter((ps)=>{
            return ps.pubkey.equals(pk);
        })[0] || {}).signature;
    // Any pubkey without a match will return undefined
    // this last filter removes all the undefined items in the array.
    }).filter((v)=>!!v);
}
function scriptWitnessToWitnessStack(buffer) {
    let offset = 0;
    function readSlice(n) {
        offset += n;
        return buffer.slice(offset - n, offset);
    }
    function readVarInt() {
        const vi = varuint.decode(buffer, offset);
        offset += varuint.decode.bytes;
        return vi;
    }
    function readVarSlice() {
        return readSlice(readVarInt());
    }
    function readVector() {
        const count = readVarInt();
        const vector = [];
        for(let i = 0; i < count; i++)vector.push(readVarSlice());
        return vector;
    }
    return readVector();
}
function sighashTypeToString(sighashType) {
    let text = sighashType & transaction_1.Transaction.SIGHASH_ANYONECANPAY ? "SIGHASH_ANYONECANPAY | " : "";
    const sigMod = sighashType & 0x1f;
    switch(sigMod){
        case transaction_1.Transaction.SIGHASH_ALL:
            text += "SIGHASH_ALL";
            break;
        case transaction_1.Transaction.SIGHASH_SINGLE:
            text += "SIGHASH_SINGLE";
            break;
        case transaction_1.Transaction.SIGHASH_NONE:
            text += "SIGHASH_NONE";
            break;
    }
    return text;
}
function addNonWitnessTxCache(cache, input, inputIndex) {
    cache.__NON_WITNESS_UTXO_BUF_CACHE[inputIndex] = input.nonWitnessUtxo;
    const tx = transaction_1.Transaction.fromBuffer(input.nonWitnessUtxo);
    cache.__NON_WITNESS_UTXO_TX_CACHE[inputIndex] = tx;
    const self = cache;
    const selfIndex = inputIndex;
    delete input.nonWitnessUtxo;
    Object.defineProperty(input, "nonWitnessUtxo", {
        enumerable: true,
        get () {
            const buf = self.__NON_WITNESS_UTXO_BUF_CACHE[selfIndex];
            const txCache = self.__NON_WITNESS_UTXO_TX_CACHE[selfIndex];
            if (buf !== undefined) return buf;
            else {
                const newBuf = txCache.toBuffer();
                self.__NON_WITNESS_UTXO_BUF_CACHE[selfIndex] = newBuf;
                return newBuf;
            }
        },
        set (data) {
            self.__NON_WITNESS_UTXO_BUF_CACHE[selfIndex] = data;
        }
    });
}
function inputFinalizeGetAmts(inputs, tx, cache, mustFinalize) {
    let inputAmount = 0;
    inputs.forEach((input, idx)=>{
        if (mustFinalize && input.finalScriptSig) tx.ins[idx].script = input.finalScriptSig;
        if (mustFinalize && input.finalScriptWitness) tx.ins[idx].witness = scriptWitnessToWitnessStack(input.finalScriptWitness);
        if (input.witnessUtxo) inputAmount += input.witnessUtxo.value;
        else if (input.nonWitnessUtxo) {
            const nwTx = nonWitnessUtxoTxFromCache(cache, input, idx);
            const vout = tx.ins[idx].index;
            const out = nwTx.outs[vout];
            inputAmount += out.value;
        }
    });
    const outputAmount = tx.outs.reduce((total, o)=>total + o.value, 0);
    const fee = inputAmount - outputAmount;
    if (fee < 0) throw new Error("Outputs are spending more than Inputs");
    const bytes = tx.virtualSize();
    cache.__FEE = fee;
    cache.__EXTRACTED_TX = tx;
    cache.__FEE_RATE = Math.floor(fee / bytes);
}
function nonWitnessUtxoTxFromCache(cache, input, inputIndex) {
    const c = cache.__NON_WITNESS_UTXO_TX_CACHE;
    if (!c[inputIndex]) addNonWitnessTxCache(cache, input, inputIndex);
    return c[inputIndex];
}
function getScriptFromUtxo(inputIndex, input, cache) {
    const { script } = getScriptAndAmountFromUtxo(inputIndex, input, cache);
    return script;
}
function getScriptAndAmountFromUtxo(inputIndex, input, cache) {
    if (input.witnessUtxo !== undefined) return {
        script: input.witnessUtxo.script,
        value: input.witnessUtxo.value
    };
    else if (input.nonWitnessUtxo !== undefined) {
        const nonWitnessUtxoTx = nonWitnessUtxoTxFromCache(cache, input, inputIndex);
        const o = nonWitnessUtxoTx.outs[cache.__TX.ins[inputIndex].index];
        return {
            script: o.script,
            value: o.value
        };
    } else throw new Error("Can't find pubkey in input without Utxo data");
}
function pubkeyInInput(pubkey, input, inputIndex, cache) {
    const script = getScriptFromUtxo(inputIndex, input, cache);
    const { meaningfulScript } = getMeaningfulScript(script, inputIndex, "input", input.redeemScript, input.witnessScript);
    return (0, psbtutils_1.pubkeyInScript)(pubkey, meaningfulScript);
}
function pubkeyInOutput(pubkey, output, outputIndex, cache) {
    const script = cache.__TX.outs[outputIndex].script;
    const { meaningfulScript } = getMeaningfulScript(script, outputIndex, "output", output.redeemScript, output.witnessScript);
    return (0, psbtutils_1.pubkeyInScript)(pubkey, meaningfulScript);
}
function redeemFromFinalScriptSig(finalScript) {
    if (!finalScript) return;
    const decomp = bscript.decompile(finalScript);
    if (!decomp) return;
    const lastItem = decomp[decomp.length - 1];
    if (!Buffer.isBuffer(lastItem) || isPubkeyLike(lastItem) || isSigLike(lastItem)) return;
    const sDecomp = bscript.decompile(lastItem);
    if (!sDecomp) return;
    return lastItem;
}
function redeemFromFinalWitnessScript(finalScript) {
    if (!finalScript) return;
    const decomp = scriptWitnessToWitnessStack(finalScript);
    const lastItem = decomp[decomp.length - 1];
    if (isPubkeyLike(lastItem)) return;
    const sDecomp = bscript.decompile(lastItem);
    if (!sDecomp) return;
    return lastItem;
}
function compressPubkey(pubkey) {
    if (pubkey.length === 65) {
        const parity = pubkey[64] & 1;
        const newKey = pubkey.slice(0, 33);
        newKey[0] = 2 | parity;
        return newKey;
    }
    return pubkey.slice();
}
function isPubkeyLike(buf) {
    return buf.length === 33 && bscript.isCanonicalPubKey(buf);
}
function isSigLike(buf) {
    return bscript.isCanonicalScriptSignature(buf);
}
function getMeaningfulScript(script, index, ioType, redeemScript, witnessScript) {
    const isP2SH = (0, psbtutils_1.isP2SHScript)(script);
    const isP2SHP2WSH = isP2SH && redeemScript && (0, psbtutils_1.isP2WSHScript)(redeemScript);
    const isP2WSH = (0, psbtutils_1.isP2WSHScript)(script);
    if (isP2SH && redeemScript === undefined) throw new Error("scriptPubkey is P2SH but redeemScript missing");
    if ((isP2WSH || isP2SHP2WSH) && witnessScript === undefined) throw new Error("scriptPubkey or redeemScript is P2WSH but witnessScript missing");
    let meaningfulScript;
    if (isP2SHP2WSH) {
        meaningfulScript = witnessScript;
        checkRedeemScript(index, script, redeemScript, ioType);
        checkWitnessScript(index, redeemScript, witnessScript, ioType);
        checkInvalidP2WSH(meaningfulScript);
    } else if (isP2WSH) {
        meaningfulScript = witnessScript;
        checkWitnessScript(index, script, witnessScript, ioType);
        checkInvalidP2WSH(meaningfulScript);
    } else if (isP2SH) {
        meaningfulScript = redeemScript;
        checkRedeemScript(index, script, redeemScript, ioType);
    } else meaningfulScript = script;
    return {
        meaningfulScript,
        type: isP2SHP2WSH ? "p2sh-p2wsh" : isP2SH ? "p2sh" : isP2WSH ? "p2wsh" : "raw"
    };
}
function checkInvalidP2WSH(script) {
    if ((0, psbtutils_1.isP2WPKH)(script) || (0, psbtutils_1.isP2SHScript)(script)) throw new Error("P2WPKH or P2SH can not be contained within P2WSH");
}
function classifyScript(script) {
    if ((0, psbtutils_1.isP2WPKH)(script)) return "witnesspubkeyhash";
    if ((0, psbtutils_1.isP2PKH)(script)) return "pubkeyhash";
    if ((0, psbtutils_1.isP2MS)(script)) return "multisig";
    if ((0, psbtutils_1.isP2PK)(script)) return "pubkey";
    return "nonstandard";
}
function range(n) {
    return [
        ...Array(n).keys()
    ];
}

},{"bd04018dc1652f62":"fCgem","3cdabce7cf751469":"8k3Hp","7f0c469e1295416c":"1mjPW","15e876c92e186c9a":"f992a","206460bdf6f8e224":"2Me89","c66b4b428f6e9b6c":"jR49q","d819d635cf774913":"hpO0s","147d6fa1a977536e":"g5Tn6","1d60be84f0accf46":"5qAiz","2f149948dde5be71":"28LFb","a441c63dce14b7a7":"arhmj","9aa89b7d7b910e2":"iM70e","36c81f14bf7eb13":"4W1dv"}],"8k3Hp":[function(require,module,exports) {
var Buffer = require("9f7dbb5a1a52093b").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const combiner_1 = require("66e97b846feca30a");
const parser_1 = require("c05d7c91183f6ebd");
const typeFields_1 = require("f50e19d1acfe2b7e");
const utils_1 = require("627662a4106d5e06");
class Psbt {
    constructor(tx){
        this.inputs = [];
        this.outputs = [];
        this.globalMap = {
            unsignedTx: tx
        };
    }
    static fromBase64(data, txFromBuffer) {
        const buffer = Buffer.from(data, "base64");
        return this.fromBuffer(buffer, txFromBuffer);
    }
    static fromHex(data, txFromBuffer) {
        const buffer = Buffer.from(data, "hex");
        return this.fromBuffer(buffer, txFromBuffer);
    }
    static fromBuffer(buffer, txFromBuffer) {
        const results = parser_1.psbtFromBuffer(buffer, txFromBuffer);
        const psbt = new this(results.globalMap.unsignedTx);
        Object.assign(psbt, results);
        return psbt;
    }
    toBase64() {
        const buffer = this.toBuffer();
        return buffer.toString("base64");
    }
    toHex() {
        const buffer = this.toBuffer();
        return buffer.toString("hex");
    }
    toBuffer() {
        return parser_1.psbtToBuffer(this);
    }
    updateGlobal(updateData) {
        utils_1.updateGlobal(updateData, this.globalMap);
        return this;
    }
    updateInput(inputIndex, updateData) {
        const input = utils_1.checkForInput(this.inputs, inputIndex);
        utils_1.updateInput(updateData, input);
        return this;
    }
    updateOutput(outputIndex, updateData) {
        const output = utils_1.checkForOutput(this.outputs, outputIndex);
        utils_1.updateOutput(updateData, output);
        return this;
    }
    addUnknownKeyValToGlobal(keyVal) {
        utils_1.checkHasKey(keyVal, this.globalMap.unknownKeyVals, utils_1.getEnumLength(typeFields_1.GlobalTypes));
        if (!this.globalMap.unknownKeyVals) this.globalMap.unknownKeyVals = [];
        this.globalMap.unknownKeyVals.push(keyVal);
        return this;
    }
    addUnknownKeyValToInput(inputIndex, keyVal) {
        const input = utils_1.checkForInput(this.inputs, inputIndex);
        utils_1.checkHasKey(keyVal, input.unknownKeyVals, utils_1.getEnumLength(typeFields_1.InputTypes));
        if (!input.unknownKeyVals) input.unknownKeyVals = [];
        input.unknownKeyVals.push(keyVal);
        return this;
    }
    addUnknownKeyValToOutput(outputIndex, keyVal) {
        const output = utils_1.checkForOutput(this.outputs, outputIndex);
        utils_1.checkHasKey(keyVal, output.unknownKeyVals, utils_1.getEnumLength(typeFields_1.OutputTypes));
        if (!output.unknownKeyVals) output.unknownKeyVals = [];
        output.unknownKeyVals.push(keyVal);
        return this;
    }
    addInput(inputData) {
        this.globalMap.unsignedTx.addInput(inputData);
        this.inputs.push({
            unknownKeyVals: []
        });
        const addKeyVals = inputData.unknownKeyVals || [];
        const inputIndex = this.inputs.length - 1;
        if (!Array.isArray(addKeyVals)) throw new Error("unknownKeyVals must be an Array");
        addKeyVals.forEach((keyVal)=>this.addUnknownKeyValToInput(inputIndex, keyVal));
        utils_1.addInputAttributes(this.inputs, inputData);
        return this;
    }
    addOutput(outputData) {
        this.globalMap.unsignedTx.addOutput(outputData);
        this.outputs.push({
            unknownKeyVals: []
        });
        const addKeyVals = outputData.unknownKeyVals || [];
        const outputIndex = this.outputs.length - 1;
        if (!Array.isArray(addKeyVals)) throw new Error("unknownKeyVals must be an Array");
        addKeyVals.forEach((keyVal)=>this.addUnknownKeyValToOutput(outputIndex, keyVal));
        utils_1.addOutputAttributes(this.outputs, outputData);
        return this;
    }
    clearFinalizedInput(inputIndex) {
        const input = utils_1.checkForInput(this.inputs, inputIndex);
        utils_1.inputCheckUncleanFinalized(inputIndex, input);
        for (const key of Object.keys(input))if (![
            "witnessUtxo",
            "nonWitnessUtxo",
            "finalScriptSig",
            "finalScriptWitness",
            "unknownKeyVals"
        ].includes(key)) // @ts-ignore
        delete input[key];
        return this;
    }
    combine(...those) {
        // Combine this with those.
        // Return self for chaining.
        const result = combiner_1.combine([
            this
        ].concat(those));
        Object.assign(this, result);
        return this;
    }
    getTransaction() {
        return this.globalMap.unsignedTx.toBuffer();
    }
}
exports.Psbt = Psbt;

},{"9f7dbb5a1a52093b":"fCgem","66e97b846feca30a":"aHjAQ","c05d7c91183f6ebd":"2GuBB","f50e19d1acfe2b7e":"3089x","627662a4106d5e06":"f992a"}],"aHjAQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const parser_1 = require("d12cbe7f1844ffb1");
function combine(psbts) {
    const self = psbts[0];
    const selfKeyVals = parser_1.psbtToKeyVals(self);
    const others = psbts.slice(1);
    if (others.length === 0) throw new Error("Combine: Nothing to combine");
    const selfTx = getTx(self);
    if (selfTx === undefined) throw new Error("Combine: Self missing transaction");
    const selfGlobalSet = getKeySet(selfKeyVals.globalKeyVals);
    const selfInputSets = selfKeyVals.inputKeyVals.map(getKeySet);
    const selfOutputSets = selfKeyVals.outputKeyVals.map(getKeySet);
    for (const other of others){
        const otherTx = getTx(other);
        if (otherTx === undefined || !otherTx.toBuffer().equals(selfTx.toBuffer())) throw new Error("Combine: One of the Psbts does not have the same transaction.");
        const otherKeyVals = parser_1.psbtToKeyVals(other);
        const otherGlobalSet = getKeySet(otherKeyVals.globalKeyVals);
        otherGlobalSet.forEach(keyPusher(selfGlobalSet, selfKeyVals.globalKeyVals, otherKeyVals.globalKeyVals));
        const otherInputSets = otherKeyVals.inputKeyVals.map(getKeySet);
        otherInputSets.forEach((inputSet, idx)=>inputSet.forEach(keyPusher(selfInputSets[idx], selfKeyVals.inputKeyVals[idx], otherKeyVals.inputKeyVals[idx])));
        const otherOutputSets = otherKeyVals.outputKeyVals.map(getKeySet);
        otherOutputSets.forEach((outputSet, idx)=>outputSet.forEach(keyPusher(selfOutputSets[idx], selfKeyVals.outputKeyVals[idx], otherKeyVals.outputKeyVals[idx])));
    }
    return parser_1.psbtFromKeyVals(selfTx, {
        globalMapKeyVals: selfKeyVals.globalKeyVals,
        inputKeyVals: selfKeyVals.inputKeyVals,
        outputKeyVals: selfKeyVals.outputKeyVals
    });
}
exports.combine = combine;
function keyPusher(selfSet, selfKeyVals, otherKeyVals) {
    return (key)=>{
        if (selfSet.has(key)) return;
        const newKv = otherKeyVals.filter((kv)=>kv.key.toString("hex") === key)[0];
        selfKeyVals.push(newKv);
        selfSet.add(key);
    };
}
function getTx(psbt) {
    return psbt.globalMap.unsignedTx;
}
function getKeySet(keyVals) {
    const set = new Set();
    keyVals.forEach((keyVal)=>{
        const hex = keyVal.key.toString("hex");
        if (set.has(hex)) throw new Error("Combine: KeyValue Map keys should be unique");
        set.add(hex);
    });
    return set;
}

},{"d12cbe7f1844ffb1":"2GuBB"}],"2GuBB":[function(require,module,exports) {
"use strict";
function __export(m) {
    for(var p in m)if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
__export(require("d839361a7fddc552"));
__export(require("35f5b003239d6547"));

},{"d839361a7fddc552":"26X49","35f5b003239d6547":"jUzwk"}],"26X49":[function(require,module,exports) {
var Buffer = require("27cc1123cac1870d").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const convert = require("fa12ea4f9abfc39d");
const tools_1 = require("7ea84d5fdd09890b");
const varuint = require("a37bcc3f403dd8ac");
const typeFields_1 = require("ad0cb35bafe0b747");
function psbtFromBuffer(buffer, txGetter) {
    let offset = 0;
    function varSlice() {
        const keyLen = varuint.decode(buffer, offset);
        offset += varuint.encodingLength(keyLen);
        const key = buffer.slice(offset, offset + keyLen);
        offset += keyLen;
        return key;
    }
    function readUInt32BE() {
        const num = buffer.readUInt32BE(offset);
        offset += 4;
        return num;
    }
    function readUInt8() {
        const num = buffer.readUInt8(offset);
        offset += 1;
        return num;
    }
    function getKeyValue() {
        const key = varSlice();
        const value = varSlice();
        return {
            key,
            value
        };
    }
    function checkEndOfKeyValPairs() {
        if (offset >= buffer.length) throw new Error("Format Error: Unexpected End of PSBT");
        const isEnd = buffer.readUInt8(offset) === 0;
        if (isEnd) offset++;
        return isEnd;
    }
    if (readUInt32BE() !== 0x70736274) throw new Error("Format Error: Invalid Magic Number");
    if (readUInt8() !== 0xff) throw new Error("Format Error: Magic Number must be followed by 0xff separator");
    const globalMapKeyVals = [];
    const globalKeyIndex = {};
    while(!checkEndOfKeyValPairs()){
        const keyVal = getKeyValue();
        const hexKey = keyVal.key.toString("hex");
        if (globalKeyIndex[hexKey]) throw new Error("Format Error: Keys must be unique for global keymap: key " + hexKey);
        globalKeyIndex[hexKey] = 1;
        globalMapKeyVals.push(keyVal);
    }
    const unsignedTxMaps = globalMapKeyVals.filter((keyVal)=>keyVal.key[0] === typeFields_1.GlobalTypes.UNSIGNED_TX);
    if (unsignedTxMaps.length !== 1) throw new Error("Format Error: Only one UNSIGNED_TX allowed");
    const unsignedTx = txGetter(unsignedTxMaps[0].value);
    // Get input and output counts to loop the respective fields
    const { inputCount, outputCount } = unsignedTx.getInputOutputCounts();
    const inputKeyVals = [];
    const outputKeyVals = [];
    // Get input fields
    for (const index of tools_1.range(inputCount)){
        const inputKeyIndex = {};
        const input = [];
        while(!checkEndOfKeyValPairs()){
            const keyVal = getKeyValue();
            const hexKey = keyVal.key.toString("hex");
            if (inputKeyIndex[hexKey]) throw new Error("Format Error: Keys must be unique for each input: input index " + index + " key " + hexKey);
            inputKeyIndex[hexKey] = 1;
            input.push(keyVal);
        }
        inputKeyVals.push(input);
    }
    for (const index of tools_1.range(outputCount)){
        const outputKeyIndex = {};
        const output = [];
        while(!checkEndOfKeyValPairs()){
            const keyVal = getKeyValue();
            const hexKey = keyVal.key.toString("hex");
            if (outputKeyIndex[hexKey]) throw new Error("Format Error: Keys must be unique for each output: output index " + index + " key " + hexKey);
            outputKeyIndex[hexKey] = 1;
            output.push(keyVal);
        }
        outputKeyVals.push(output);
    }
    return psbtFromKeyVals(unsignedTx, {
        globalMapKeyVals,
        inputKeyVals,
        outputKeyVals
    });
}
exports.psbtFromBuffer = psbtFromBuffer;
function checkKeyBuffer(type, keyBuf, keyNum) {
    if (!keyBuf.equals(Buffer.from([
        keyNum
    ]))) throw new Error(`Format Error: Invalid ${type} key: ${keyBuf.toString("hex")}`);
}
exports.checkKeyBuffer = checkKeyBuffer;
function psbtFromKeyVals(unsignedTx, { globalMapKeyVals, inputKeyVals, outputKeyVals }) {
    // That was easy :-)
    const globalMap = {
        unsignedTx
    };
    let txCount = 0;
    for (const keyVal of globalMapKeyVals)// If a globalMap item needs pubkey, uncomment
    // const pubkey = convert.globals.checkPubkey(keyVal);
    switch(keyVal.key[0]){
        case typeFields_1.GlobalTypes.UNSIGNED_TX:
            checkKeyBuffer("global", keyVal.key, typeFields_1.GlobalTypes.UNSIGNED_TX);
            if (txCount > 0) throw new Error("Format Error: GlobalMap has multiple UNSIGNED_TX");
            txCount++;
            break;
        case typeFields_1.GlobalTypes.GLOBAL_XPUB:
            if (globalMap.globalXpub === undefined) globalMap.globalXpub = [];
            globalMap.globalXpub.push(convert.globals.globalXpub.decode(keyVal));
            break;
        default:
            // This will allow inclusion during serialization.
            if (!globalMap.unknownKeyVals) globalMap.unknownKeyVals = [];
            globalMap.unknownKeyVals.push(keyVal);
    }
    // Get input and output counts to loop the respective fields
    const inputCount = inputKeyVals.length;
    const outputCount = outputKeyVals.length;
    const inputs = [];
    const outputs = [];
    // Get input fields
    for (const index of tools_1.range(inputCount)){
        const input = {};
        for (const keyVal of inputKeyVals[index]){
            convert.inputs.checkPubkey(keyVal);
            switch(keyVal.key[0]){
                case typeFields_1.InputTypes.NON_WITNESS_UTXO:
                    checkKeyBuffer("input", keyVal.key, typeFields_1.InputTypes.NON_WITNESS_UTXO);
                    if (input.nonWitnessUtxo !== undefined) throw new Error("Format Error: Input has multiple NON_WITNESS_UTXO");
                    input.nonWitnessUtxo = convert.inputs.nonWitnessUtxo.decode(keyVal);
                    break;
                case typeFields_1.InputTypes.WITNESS_UTXO:
                    checkKeyBuffer("input", keyVal.key, typeFields_1.InputTypes.WITNESS_UTXO);
                    if (input.witnessUtxo !== undefined) throw new Error("Format Error: Input has multiple WITNESS_UTXO");
                    input.witnessUtxo = convert.inputs.witnessUtxo.decode(keyVal);
                    break;
                case typeFields_1.InputTypes.PARTIAL_SIG:
                    if (input.partialSig === undefined) input.partialSig = [];
                    input.partialSig.push(convert.inputs.partialSig.decode(keyVal));
                    break;
                case typeFields_1.InputTypes.SIGHASH_TYPE:
                    checkKeyBuffer("input", keyVal.key, typeFields_1.InputTypes.SIGHASH_TYPE);
                    if (input.sighashType !== undefined) throw new Error("Format Error: Input has multiple SIGHASH_TYPE");
                    input.sighashType = convert.inputs.sighashType.decode(keyVal);
                    break;
                case typeFields_1.InputTypes.REDEEM_SCRIPT:
                    checkKeyBuffer("input", keyVal.key, typeFields_1.InputTypes.REDEEM_SCRIPT);
                    if (input.redeemScript !== undefined) throw new Error("Format Error: Input has multiple REDEEM_SCRIPT");
                    input.redeemScript = convert.inputs.redeemScript.decode(keyVal);
                    break;
                case typeFields_1.InputTypes.WITNESS_SCRIPT:
                    checkKeyBuffer("input", keyVal.key, typeFields_1.InputTypes.WITNESS_SCRIPT);
                    if (input.witnessScript !== undefined) throw new Error("Format Error: Input has multiple WITNESS_SCRIPT");
                    input.witnessScript = convert.inputs.witnessScript.decode(keyVal);
                    break;
                case typeFields_1.InputTypes.BIP32_DERIVATION:
                    if (input.bip32Derivation === undefined) input.bip32Derivation = [];
                    input.bip32Derivation.push(convert.inputs.bip32Derivation.decode(keyVal));
                    break;
                case typeFields_1.InputTypes.FINAL_SCRIPTSIG:
                    checkKeyBuffer("input", keyVal.key, typeFields_1.InputTypes.FINAL_SCRIPTSIG);
                    input.finalScriptSig = convert.inputs.finalScriptSig.decode(keyVal);
                    break;
                case typeFields_1.InputTypes.FINAL_SCRIPTWITNESS:
                    checkKeyBuffer("input", keyVal.key, typeFields_1.InputTypes.FINAL_SCRIPTWITNESS);
                    input.finalScriptWitness = convert.inputs.finalScriptWitness.decode(keyVal);
                    break;
                case typeFields_1.InputTypes.POR_COMMITMENT:
                    checkKeyBuffer("input", keyVal.key, typeFields_1.InputTypes.POR_COMMITMENT);
                    input.porCommitment = convert.inputs.porCommitment.decode(keyVal);
                    break;
                case typeFields_1.InputTypes.TAP_KEY_SIG:
                    checkKeyBuffer("input", keyVal.key, typeFields_1.InputTypes.TAP_KEY_SIG);
                    input.tapKeySig = convert.inputs.tapKeySig.decode(keyVal);
                    break;
                case typeFields_1.InputTypes.TAP_SCRIPT_SIG:
                    if (input.tapScriptSig === undefined) input.tapScriptSig = [];
                    input.tapScriptSig.push(convert.inputs.tapScriptSig.decode(keyVal));
                    break;
                case typeFields_1.InputTypes.TAP_LEAF_SCRIPT:
                    if (input.tapLeafScript === undefined) input.tapLeafScript = [];
                    input.tapLeafScript.push(convert.inputs.tapLeafScript.decode(keyVal));
                    break;
                case typeFields_1.InputTypes.TAP_BIP32_DERIVATION:
                    if (input.tapBip32Derivation === undefined) input.tapBip32Derivation = [];
                    input.tapBip32Derivation.push(convert.inputs.tapBip32Derivation.decode(keyVal));
                    break;
                case typeFields_1.InputTypes.TAP_INTERNAL_KEY:
                    checkKeyBuffer("input", keyVal.key, typeFields_1.InputTypes.TAP_INTERNAL_KEY);
                    input.tapInternalKey = convert.inputs.tapInternalKey.decode(keyVal);
                    break;
                case typeFields_1.InputTypes.TAP_MERKLE_ROOT:
                    checkKeyBuffer("input", keyVal.key, typeFields_1.InputTypes.TAP_MERKLE_ROOT);
                    input.tapMerkleRoot = convert.inputs.tapMerkleRoot.decode(keyVal);
                    break;
                default:
                    // This will allow inclusion during serialization.
                    if (!input.unknownKeyVals) input.unknownKeyVals = [];
                    input.unknownKeyVals.push(keyVal);
            }
        }
        inputs.push(input);
    }
    for (const index of tools_1.range(outputCount)){
        const output = {};
        for (const keyVal of outputKeyVals[index]){
            convert.outputs.checkPubkey(keyVal);
            switch(keyVal.key[0]){
                case typeFields_1.OutputTypes.REDEEM_SCRIPT:
                    checkKeyBuffer("output", keyVal.key, typeFields_1.OutputTypes.REDEEM_SCRIPT);
                    if (output.redeemScript !== undefined) throw new Error("Format Error: Output has multiple REDEEM_SCRIPT");
                    output.redeemScript = convert.outputs.redeemScript.decode(keyVal);
                    break;
                case typeFields_1.OutputTypes.WITNESS_SCRIPT:
                    checkKeyBuffer("output", keyVal.key, typeFields_1.OutputTypes.WITNESS_SCRIPT);
                    if (output.witnessScript !== undefined) throw new Error("Format Error: Output has multiple WITNESS_SCRIPT");
                    output.witnessScript = convert.outputs.witnessScript.decode(keyVal);
                    break;
                case typeFields_1.OutputTypes.BIP32_DERIVATION:
                    if (output.bip32Derivation === undefined) output.bip32Derivation = [];
                    output.bip32Derivation.push(convert.outputs.bip32Derivation.decode(keyVal));
                    break;
                case typeFields_1.OutputTypes.TAP_INTERNAL_KEY:
                    checkKeyBuffer("output", keyVal.key, typeFields_1.OutputTypes.TAP_INTERNAL_KEY);
                    output.tapInternalKey = convert.outputs.tapInternalKey.decode(keyVal);
                    break;
                case typeFields_1.OutputTypes.TAP_TREE:
                    checkKeyBuffer("output", keyVal.key, typeFields_1.OutputTypes.TAP_TREE);
                    output.tapTree = convert.outputs.tapTree.decode(keyVal);
                    break;
                case typeFields_1.OutputTypes.TAP_BIP32_DERIVATION:
                    if (output.tapBip32Derivation === undefined) output.tapBip32Derivation = [];
                    output.tapBip32Derivation.push(convert.outputs.tapBip32Derivation.decode(keyVal));
                    break;
                default:
                    if (!output.unknownKeyVals) output.unknownKeyVals = [];
                    output.unknownKeyVals.push(keyVal);
            }
        }
        outputs.push(output);
    }
    return {
        globalMap,
        inputs,
        outputs
    };
}
exports.psbtFromKeyVals = psbtFromKeyVals;

},{"27cc1123cac1870d":"fCgem","fa12ea4f9abfc39d":"31Gpb","7ea84d5fdd09890b":"5okq8","a37bcc3f403dd8ac":"1mjPW","ad0cb35bafe0b747":"3089x"}],"31Gpb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typeFields_1 = require("3522f952cc10bc59");
const globalXpub = require("b8c49967535d9e2c");
const unsignedTx = require("ea7255dafabdaf1");
const finalScriptSig = require("7ad3124c9ecb0a60");
const finalScriptWitness = require("4080dc96df0d6c1c");
const nonWitnessUtxo = require("cc4ef1382415d502");
const partialSig = require("29638b609b34702b");
const porCommitment = require("c3dd17aa1c97cd08");
const sighashType = require("bf80a84ca00bbe5e");
const tapKeySig = require("40417eb6e2e958f9");
const tapLeafScript = require("b3a1ec784d0c3a44");
const tapMerkleRoot = require("e46685aeda0dfc52");
const tapScriptSig = require("e524e22b83fbfdcd");
const witnessUtxo = require("c8f2bf08e888d28");
const tapTree = require("61e72e62c776373b");
const bip32Derivation = require("bb73a45394180c7f");
const checkPubkey = require("ee8df50614281766");
const redeemScript = require("f6b2341107e3e835");
const tapBip32Derivation = require("8fe75b166c11db7a");
const tapInternalKey = require("8115fcf8f8cb57b1");
const witnessScript = require("188279375127d353");
const globals = {
    unsignedTx,
    globalXpub,
    // pass an Array of key bytes that require pubkey beside the key
    checkPubkey: checkPubkey.makeChecker([])
};
exports.globals = globals;
const inputs = {
    nonWitnessUtxo,
    partialSig,
    sighashType,
    finalScriptSig,
    finalScriptWitness,
    porCommitment,
    witnessUtxo,
    bip32Derivation: bip32Derivation.makeConverter(typeFields_1.InputTypes.BIP32_DERIVATION),
    redeemScript: redeemScript.makeConverter(typeFields_1.InputTypes.REDEEM_SCRIPT),
    witnessScript: witnessScript.makeConverter(typeFields_1.InputTypes.WITNESS_SCRIPT),
    checkPubkey: checkPubkey.makeChecker([
        typeFields_1.InputTypes.PARTIAL_SIG,
        typeFields_1.InputTypes.BIP32_DERIVATION
    ]),
    tapKeySig,
    tapScriptSig,
    tapLeafScript,
    tapBip32Derivation: tapBip32Derivation.makeConverter(typeFields_1.InputTypes.TAP_BIP32_DERIVATION),
    tapInternalKey: tapInternalKey.makeConverter(typeFields_1.InputTypes.TAP_INTERNAL_KEY),
    tapMerkleRoot
};
exports.inputs = inputs;
const outputs = {
    bip32Derivation: bip32Derivation.makeConverter(typeFields_1.OutputTypes.BIP32_DERIVATION),
    redeemScript: redeemScript.makeConverter(typeFields_1.OutputTypes.REDEEM_SCRIPT),
    witnessScript: witnessScript.makeConverter(typeFields_1.OutputTypes.WITNESS_SCRIPT),
    checkPubkey: checkPubkey.makeChecker([
        typeFields_1.OutputTypes.BIP32_DERIVATION
    ]),
    tapBip32Derivation: tapBip32Derivation.makeConverter(typeFields_1.OutputTypes.TAP_BIP32_DERIVATION),
    tapTree,
    tapInternalKey: tapInternalKey.makeConverter(typeFields_1.OutputTypes.TAP_INTERNAL_KEY)
};
exports.outputs = outputs;

},{"3522f952cc10bc59":"3089x","b8c49967535d9e2c":"eRxnG","ea7255dafabdaf1":"kPyZn","7ad3124c9ecb0a60":"jXPYu","4080dc96df0d6c1c":"4MksQ","cc4ef1382415d502":"djKIf","29638b609b34702b":"4Eb9z","c3dd17aa1c97cd08":"aRknq","bf80a84ca00bbe5e":"bnHKd","40417eb6e2e958f9":"6koTX","b3a1ec784d0c3a44":"lpl9n","e46685aeda0dfc52":"6kUou","e524e22b83fbfdcd":"3DeoD","c8f2bf08e888d28":"kZrBw","61e72e62c776373b":"bS0Du","bb73a45394180c7f":"257pN","ee8df50614281766":"guzzQ","f6b2341107e3e835":"eO5Wf","8fe75b166c11db7a":"4v2dA","8115fcf8f8cb57b1":"cvCQq","188279375127d353":"9pdcz"}],"3089x":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var GlobalTypes;
(function(GlobalTypes) {
    GlobalTypes[GlobalTypes["UNSIGNED_TX"] = 0] = "UNSIGNED_TX";
    GlobalTypes[GlobalTypes["GLOBAL_XPUB"] = 1] = "GLOBAL_XPUB";
})(GlobalTypes = exports.GlobalTypes || (exports.GlobalTypes = {}));
exports.GLOBAL_TYPE_NAMES = [
    "unsignedTx",
    "globalXpub"
];
var InputTypes;
(function(InputTypes) {
    InputTypes[InputTypes["NON_WITNESS_UTXO"] = 0] = "NON_WITNESS_UTXO";
    InputTypes[InputTypes["WITNESS_UTXO"] = 1] = "WITNESS_UTXO";
    InputTypes[InputTypes["PARTIAL_SIG"] = 2] = "PARTIAL_SIG";
    InputTypes[InputTypes["SIGHASH_TYPE"] = 3] = "SIGHASH_TYPE";
    InputTypes[InputTypes["REDEEM_SCRIPT"] = 4] = "REDEEM_SCRIPT";
    InputTypes[InputTypes["WITNESS_SCRIPT"] = 5] = "WITNESS_SCRIPT";
    InputTypes[InputTypes["BIP32_DERIVATION"] = 6] = "BIP32_DERIVATION";
    InputTypes[InputTypes["FINAL_SCRIPTSIG"] = 7] = "FINAL_SCRIPTSIG";
    InputTypes[InputTypes["FINAL_SCRIPTWITNESS"] = 8] = "FINAL_SCRIPTWITNESS";
    InputTypes[InputTypes["POR_COMMITMENT"] = 9] = "POR_COMMITMENT";
    InputTypes[InputTypes["TAP_KEY_SIG"] = 19] = "TAP_KEY_SIG";
    InputTypes[InputTypes["TAP_SCRIPT_SIG"] = 20] = "TAP_SCRIPT_SIG";
    InputTypes[InputTypes["TAP_LEAF_SCRIPT"] = 21] = "TAP_LEAF_SCRIPT";
    InputTypes[InputTypes["TAP_BIP32_DERIVATION"] = 22] = "TAP_BIP32_DERIVATION";
    InputTypes[InputTypes["TAP_INTERNAL_KEY"] = 23] = "TAP_INTERNAL_KEY";
    InputTypes[InputTypes["TAP_MERKLE_ROOT"] = 24] = "TAP_MERKLE_ROOT";
})(InputTypes = exports.InputTypes || (exports.InputTypes = {}));
exports.INPUT_TYPE_NAMES = [
    "nonWitnessUtxo",
    "witnessUtxo",
    "partialSig",
    "sighashType",
    "redeemScript",
    "witnessScript",
    "bip32Derivation",
    "finalScriptSig",
    "finalScriptWitness",
    "porCommitment",
    "tapKeySig",
    "tapScriptSig",
    "tapLeafScript",
    "tapBip32Derivation",
    "tapInternalKey",
    "tapMerkleRoot"
];
var OutputTypes;
(function(OutputTypes) {
    OutputTypes[OutputTypes["REDEEM_SCRIPT"] = 0] = "REDEEM_SCRIPT";
    OutputTypes[OutputTypes["WITNESS_SCRIPT"] = 1] = "WITNESS_SCRIPT";
    OutputTypes[OutputTypes["BIP32_DERIVATION"] = 2] = "BIP32_DERIVATION";
    OutputTypes[OutputTypes["TAP_INTERNAL_KEY"] = 5] = "TAP_INTERNAL_KEY";
    OutputTypes[OutputTypes["TAP_TREE"] = 6] = "TAP_TREE";
    OutputTypes[OutputTypes["TAP_BIP32_DERIVATION"] = 7] = "TAP_BIP32_DERIVATION";
})(OutputTypes = exports.OutputTypes || (exports.OutputTypes = {}));
exports.OUTPUT_TYPE_NAMES = [
    "redeemScript",
    "witnessScript",
    "bip32Derivation",
    "tapInternalKey",
    "tapTree",
    "tapBip32Derivation"
];

},{}],"eRxnG":[function(require,module,exports) {
var Buffer = require("a2ab83522979293b").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typeFields_1 = require("72cdd17df1cb35db");
const range = (n)=>[
        ...Array(n).keys()
    ];
function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.GlobalTypes.GLOBAL_XPUB) throw new Error("Decode Error: could not decode globalXpub with key 0x" + keyVal.key.toString("hex"));
    if (keyVal.key.length !== 79 || ![
        2,
        3
    ].includes(keyVal.key[46])) throw new Error("Decode Error: globalXpub has invalid extended pubkey in key 0x" + keyVal.key.toString("hex"));
    if (keyVal.value.length / 4 % 1 !== 0) throw new Error("Decode Error: Global GLOBAL_XPUB value length should be multiple of 4");
    const extendedPubkey = keyVal.key.slice(1);
    const data = {
        masterFingerprint: keyVal.value.slice(0, 4),
        extendedPubkey,
        path: "m"
    };
    for (const i of range(keyVal.value.length / 4 - 1)){
        const val = keyVal.value.readUInt32LE(i * 4 + 4);
        const isHard = !!(val & 0x80000000);
        const idx = val & 0x7fffffff;
        data.path += "/" + idx.toString(10) + (isHard ? "'" : "");
    }
    return data;
}
exports.decode = decode;
function encode(data) {
    const head = Buffer.from([
        typeFields_1.GlobalTypes.GLOBAL_XPUB
    ]);
    const key = Buffer.concat([
        head,
        data.extendedPubkey
    ]);
    const splitPath = data.path.split("/");
    const value = Buffer.allocUnsafe(splitPath.length * 4);
    data.masterFingerprint.copy(value, 0);
    let offset = 4;
    splitPath.slice(1).forEach((level)=>{
        const isHard = level.slice(-1) === "'";
        let num = 0x7fffffff & parseInt(isHard ? level.slice(0, -1) : level, 10);
        if (isHard) num += 0x80000000;
        value.writeUInt32LE(num, offset);
        offset += 4;
    });
    return {
        key,
        value
    };
}
exports.encode = encode;
exports.expected = "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }";
function check(data) {
    const epk = data.extendedPubkey;
    const mfp = data.masterFingerprint;
    const p = data.path;
    return Buffer.isBuffer(epk) && epk.length === 78 && [
        2,
        3
    ].indexOf(epk[45]) > -1 && Buffer.isBuffer(mfp) && mfp.length === 4 && typeof p === "string" && !!p.match(/^m(\/\d+'?)*$/);
}
exports.check = check;
function canAddToArray(array, item, dupeSet) {
    const dupeString = item.extendedPubkey.toString("hex");
    if (dupeSet.has(dupeString)) return false;
    dupeSet.add(dupeString);
    return array.filter((v)=>v.extendedPubkey.equals(item.extendedPubkey)).length === 0;
}
exports.canAddToArray = canAddToArray;

},{"a2ab83522979293b":"fCgem","72cdd17df1cb35db":"3089x"}],"kPyZn":[function(require,module,exports) {
var Buffer = require("a94cdebb019e5fea").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typeFields_1 = require("c321222a52320541");
function encode(data) {
    return {
        key: Buffer.from([
            typeFields_1.GlobalTypes.UNSIGNED_TX
        ]),
        value: data.toBuffer()
    };
}
exports.encode = encode;

},{"a94cdebb019e5fea":"fCgem","c321222a52320541":"3089x"}],"jXPYu":[function(require,module,exports) {
var Buffer = require("8e9f5dee508c45ae").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typeFields_1 = require("68548f774361c4f7");
function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.FINAL_SCRIPTSIG) throw new Error("Decode Error: could not decode finalScriptSig with key 0x" + keyVal.key.toString("hex"));
    return keyVal.value;
}
exports.decode = decode;
function encode(data) {
    const key = Buffer.from([
        typeFields_1.InputTypes.FINAL_SCRIPTSIG
    ]);
    return {
        key,
        value: data
    };
}
exports.encode = encode;
exports.expected = "Buffer";
function check(data) {
    return Buffer.isBuffer(data);
}
exports.check = check;
function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.finalScriptSig === undefined;
}
exports.canAdd = canAdd;

},{"8e9f5dee508c45ae":"fCgem","68548f774361c4f7":"3089x"}],"4MksQ":[function(require,module,exports) {
var Buffer = require("f31e1b14ccb200e7").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typeFields_1 = require("845fd5f9f0a63745");
function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.FINAL_SCRIPTWITNESS) throw new Error("Decode Error: could not decode finalScriptWitness with key 0x" + keyVal.key.toString("hex"));
    return keyVal.value;
}
exports.decode = decode;
function encode(data) {
    const key = Buffer.from([
        typeFields_1.InputTypes.FINAL_SCRIPTWITNESS
    ]);
    return {
        key,
        value: data
    };
}
exports.encode = encode;
exports.expected = "Buffer";
function check(data) {
    return Buffer.isBuffer(data);
}
exports.check = check;
function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.finalScriptWitness === undefined;
}
exports.canAdd = canAdd;

},{"f31e1b14ccb200e7":"fCgem","845fd5f9f0a63745":"3089x"}],"djKIf":[function(require,module,exports) {
var Buffer = require("7661f74626de43ee").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typeFields_1 = require("4b725b965390e6ad");
function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.NON_WITNESS_UTXO) throw new Error("Decode Error: could not decode nonWitnessUtxo with key 0x" + keyVal.key.toString("hex"));
    return keyVal.value;
}
exports.decode = decode;
function encode(data) {
    return {
        key: Buffer.from([
            typeFields_1.InputTypes.NON_WITNESS_UTXO
        ]),
        value: data
    };
}
exports.encode = encode;
exports.expected = "Buffer";
function check(data) {
    return Buffer.isBuffer(data);
}
exports.check = check;
function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.nonWitnessUtxo === undefined;
}
exports.canAdd = canAdd;

},{"7661f74626de43ee":"fCgem","4b725b965390e6ad":"3089x"}],"4Eb9z":[function(require,module,exports) {
var Buffer = require("ab65f4cb1a43027e").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typeFields_1 = require("2319fc790acc3089");
function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.PARTIAL_SIG) throw new Error("Decode Error: could not decode partialSig with key 0x" + keyVal.key.toString("hex"));
    if (!(keyVal.key.length === 34 || keyVal.key.length === 66) || ![
        2,
        3,
        4
    ].includes(keyVal.key[1])) throw new Error("Decode Error: partialSig has invalid pubkey in key 0x" + keyVal.key.toString("hex"));
    const pubkey = keyVal.key.slice(1);
    return {
        pubkey,
        signature: keyVal.value
    };
}
exports.decode = decode;
function encode(pSig) {
    const head = Buffer.from([
        typeFields_1.InputTypes.PARTIAL_SIG
    ]);
    return {
        key: Buffer.concat([
            head,
            pSig.pubkey
        ]),
        value: pSig.signature
    };
}
exports.encode = encode;
exports.expected = "{ pubkey: Buffer; signature: Buffer; }";
function check(data) {
    return Buffer.isBuffer(data.pubkey) && Buffer.isBuffer(data.signature) && [
        33,
        65
    ].includes(data.pubkey.length) && [
        2,
        3,
        4
    ].includes(data.pubkey[0]) && isDerSigWithSighash(data.signature);
}
exports.check = check;
function isDerSigWithSighash(buf) {
    if (!Buffer.isBuffer(buf) || buf.length < 9) return false;
    if (buf[0] !== 0x30) return false;
    if (buf.length !== buf[1] + 3) return false;
    if (buf[2] !== 0x02) return false;
    const rLen = buf[3];
    if (rLen > 33 || rLen < 1) return false;
    if (buf[3 + rLen + 1] !== 0x02) return false;
    const sLen = buf[3 + rLen + 2];
    if (sLen > 33 || sLen < 1) return false;
    if (buf.length !== 3 + rLen + 2 + sLen + 2) return false;
    return true;
}
function canAddToArray(array, item, dupeSet) {
    const dupeString = item.pubkey.toString("hex");
    if (dupeSet.has(dupeString)) return false;
    dupeSet.add(dupeString);
    return array.filter((v)=>v.pubkey.equals(item.pubkey)).length === 0;
}
exports.canAddToArray = canAddToArray;

},{"ab65f4cb1a43027e":"fCgem","2319fc790acc3089":"3089x"}],"aRknq":[function(require,module,exports) {
var Buffer = require("d31ec771dff282e9").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typeFields_1 = require("719ea9236a680ec");
function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.POR_COMMITMENT) throw new Error("Decode Error: could not decode porCommitment with key 0x" + keyVal.key.toString("hex"));
    return keyVal.value.toString("utf8");
}
exports.decode = decode;
function encode(data) {
    const key = Buffer.from([
        typeFields_1.InputTypes.POR_COMMITMENT
    ]);
    return {
        key,
        value: Buffer.from(data, "utf8")
    };
}
exports.encode = encode;
exports.expected = "string";
function check(data) {
    return typeof data === "string";
}
exports.check = check;
function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.porCommitment === undefined;
}
exports.canAdd = canAdd;

},{"d31ec771dff282e9":"fCgem","719ea9236a680ec":"3089x"}],"bnHKd":[function(require,module,exports) {
var Buffer = require("96d9b72362899a80").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typeFields_1 = require("280e64761d0aef24");
function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.SIGHASH_TYPE) throw new Error("Decode Error: could not decode sighashType with key 0x" + keyVal.key.toString("hex"));
    return keyVal.value.readUInt32LE(0);
}
exports.decode = decode;
function encode(data) {
    const key = Buffer.from([
        typeFields_1.InputTypes.SIGHASH_TYPE
    ]);
    const value = Buffer.allocUnsafe(4);
    value.writeUInt32LE(data, 0);
    return {
        key,
        value
    };
}
exports.encode = encode;
exports.expected = "number";
function check(data) {
    return typeof data === "number";
}
exports.check = check;
function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.sighashType === undefined;
}
exports.canAdd = canAdd;

},{"96d9b72362899a80":"fCgem","280e64761d0aef24":"3089x"}],"6koTX":[function(require,module,exports) {
var Buffer = require("abeae0f61abbe7e4").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typeFields_1 = require("4ef7e0bcad67ca99");
function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.TAP_KEY_SIG || keyVal.key.length !== 1) throw new Error("Decode Error: could not decode tapKeySig with key 0x" + keyVal.key.toString("hex"));
    if (!check(keyVal.value)) throw new Error("Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature");
    return keyVal.value;
}
exports.decode = decode;
function encode(value) {
    const key = Buffer.from([
        typeFields_1.InputTypes.TAP_KEY_SIG
    ]);
    return {
        key,
        value
    };
}
exports.encode = encode;
exports.expected = "Buffer";
function check(data) {
    return Buffer.isBuffer(data) && (data.length === 64 || data.length === 65);
}
exports.check = check;
function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.tapKeySig === undefined;
}
exports.canAdd = canAdd;

},{"abeae0f61abbe7e4":"fCgem","4ef7e0bcad67ca99":"3089x"}],"lpl9n":[function(require,module,exports) {
var Buffer = require("143e5785a75c31f4").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typeFields_1 = require("c9279336d3a74745");
function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.TAP_LEAF_SCRIPT) throw new Error("Decode Error: could not decode tapLeafScript with key 0x" + keyVal.key.toString("hex"));
    if ((keyVal.key.length - 2) % 32 !== 0) throw new Error("Decode Error: tapLeafScript has invalid control block in key 0x" + keyVal.key.toString("hex"));
    const leafVersion = keyVal.value[keyVal.value.length - 1];
    if ((keyVal.key[1] & 0xfe) !== leafVersion) throw new Error("Decode Error: tapLeafScript bad leaf version in key 0x" + keyVal.key.toString("hex"));
    const script = keyVal.value.slice(0, -1);
    const controlBlock = keyVal.key.slice(1);
    return {
        controlBlock,
        script,
        leafVersion
    };
}
exports.decode = decode;
function encode(tScript) {
    const head = Buffer.from([
        typeFields_1.InputTypes.TAP_LEAF_SCRIPT
    ]);
    const verBuf = Buffer.from([
        tScript.leafVersion
    ]);
    return {
        key: Buffer.concat([
            head,
            tScript.controlBlock
        ]),
        value: Buffer.concat([
            tScript.script,
            verBuf
        ])
    };
}
exports.encode = encode;
exports.expected = "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }";
function check(data) {
    return Buffer.isBuffer(data.controlBlock) && (data.controlBlock.length - 1) % 32 === 0 && (data.controlBlock[0] & 0xfe) === data.leafVersion && Buffer.isBuffer(data.script);
}
exports.check = check;
function canAddToArray(array, item, dupeSet) {
    const dupeString = item.controlBlock.toString("hex");
    if (dupeSet.has(dupeString)) return false;
    dupeSet.add(dupeString);
    return array.filter((v)=>v.controlBlock.equals(item.controlBlock)).length === 0;
}
exports.canAddToArray = canAddToArray;

},{"143e5785a75c31f4":"fCgem","c9279336d3a74745":"3089x"}],"6kUou":[function(require,module,exports) {
var Buffer = require("8589f69570a4bdac").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typeFields_1 = require("2cae3356ba7a8de7");
function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.TAP_MERKLE_ROOT || keyVal.key.length !== 1) throw new Error("Decode Error: could not decode tapMerkleRoot with key 0x" + keyVal.key.toString("hex"));
    if (!check(keyVal.value)) throw new Error("Decode Error: tapMerkleRoot not a 32-byte hash");
    return keyVal.value;
}
exports.decode = decode;
function encode(value) {
    const key = Buffer.from([
        typeFields_1.InputTypes.TAP_MERKLE_ROOT
    ]);
    return {
        key,
        value
    };
}
exports.encode = encode;
exports.expected = "Buffer";
function check(data) {
    return Buffer.isBuffer(data) && data.length === 32;
}
exports.check = check;
function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.tapMerkleRoot === undefined;
}
exports.canAdd = canAdd;

},{"8589f69570a4bdac":"fCgem","2cae3356ba7a8de7":"3089x"}],"3DeoD":[function(require,module,exports) {
var Buffer = require("7f168173e8d729f3").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typeFields_1 = require("4b0303628738a9bb");
function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.TAP_SCRIPT_SIG) throw new Error("Decode Error: could not decode tapScriptSig with key 0x" + keyVal.key.toString("hex"));
    if (keyVal.key.length !== 65) throw new Error("Decode Error: tapScriptSig has invalid key 0x" + keyVal.key.toString("hex"));
    if (keyVal.value.length !== 64 && keyVal.value.length !== 65) throw new Error("Decode Error: tapScriptSig has invalid signature in key 0x" + keyVal.key.toString("hex"));
    const pubkey = keyVal.key.slice(1, 33);
    const leafHash = keyVal.key.slice(33);
    return {
        pubkey,
        leafHash,
        signature: keyVal.value
    };
}
exports.decode = decode;
function encode(tSig) {
    const head = Buffer.from([
        typeFields_1.InputTypes.TAP_SCRIPT_SIG
    ]);
    return {
        key: Buffer.concat([
            head,
            tSig.pubkey,
            tSig.leafHash
        ]),
        value: tSig.signature
    };
}
exports.encode = encode;
exports.expected = "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }";
function check(data) {
    return Buffer.isBuffer(data.pubkey) && Buffer.isBuffer(data.leafHash) && Buffer.isBuffer(data.signature) && data.pubkey.length === 32 && data.leafHash.length === 32 && (data.signature.length === 64 || data.signature.length === 65);
}
exports.check = check;
function canAddToArray(array, item, dupeSet) {
    const dupeString = item.pubkey.toString("hex") + item.leafHash.toString("hex");
    if (dupeSet.has(dupeString)) return false;
    dupeSet.add(dupeString);
    return array.filter((v)=>v.pubkey.equals(item.pubkey) && v.leafHash.equals(item.leafHash)).length === 0;
}
exports.canAddToArray = canAddToArray;

},{"7f168173e8d729f3":"fCgem","4b0303628738a9bb":"3089x"}],"kZrBw":[function(require,module,exports) {
var Buffer = require("a6e6247f8794a6bd").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typeFields_1 = require("8a18eb38147e221e");
const tools_1 = require("1dcac9ee5df22d54");
const varuint = require("2915bb7f19f5fe46");
function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.InputTypes.WITNESS_UTXO) throw new Error("Decode Error: could not decode witnessUtxo with key 0x" + keyVal.key.toString("hex"));
    const value = tools_1.readUInt64LE(keyVal.value, 0);
    let _offset = 8;
    const scriptLen = varuint.decode(keyVal.value, _offset);
    _offset += varuint.encodingLength(scriptLen);
    const script = keyVal.value.slice(_offset);
    if (script.length !== scriptLen) throw new Error("Decode Error: WITNESS_UTXO script is not proper length");
    return {
        script,
        value
    };
}
exports.decode = decode;
function encode(data) {
    const { script, value } = data;
    const varintLen = varuint.encodingLength(script.length);
    const result = Buffer.allocUnsafe(8 + varintLen + script.length);
    tools_1.writeUInt64LE(result, value, 0);
    varuint.encode(script.length, result, 8);
    script.copy(result, 8 + varintLen);
    return {
        key: Buffer.from([
            typeFields_1.InputTypes.WITNESS_UTXO
        ]),
        value: result
    };
}
exports.encode = encode;
exports.expected = "{ script: Buffer; value: number; }";
function check(data) {
    return Buffer.isBuffer(data.script) && typeof data.value === "number";
}
exports.check = check;
function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.witnessUtxo === undefined;
}
exports.canAdd = canAdd;

},{"a6e6247f8794a6bd":"fCgem","8a18eb38147e221e":"3089x","1dcac9ee5df22d54":"5okq8","2915bb7f19f5fe46":"1mjPW"}],"5okq8":[function(require,module,exports) {
var Buffer = require("6c809102e8f63b72").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const varuint = require("da35a02d1d632300");
exports.range = (n)=>[
        ...Array(n).keys()
    ];
function reverseBuffer(buffer) {
    if (buffer.length < 1) return buffer;
    let j = buffer.length - 1;
    let tmp = 0;
    for(let i = 0; i < buffer.length / 2; i++){
        tmp = buffer[i];
        buffer[i] = buffer[j];
        buffer[j] = tmp;
        j--;
    }
    return buffer;
}
exports.reverseBuffer = reverseBuffer;
function keyValsToBuffer(keyVals) {
    const buffers = keyVals.map(keyValToBuffer);
    buffers.push(Buffer.from([
        0
    ]));
    return Buffer.concat(buffers);
}
exports.keyValsToBuffer = keyValsToBuffer;
function keyValToBuffer(keyVal) {
    const keyLen = keyVal.key.length;
    const valLen = keyVal.value.length;
    const keyVarIntLen = varuint.encodingLength(keyLen);
    const valVarIntLen = varuint.encodingLength(valLen);
    const buffer = Buffer.allocUnsafe(keyVarIntLen + keyLen + valVarIntLen + valLen);
    varuint.encode(keyLen, buffer, 0);
    keyVal.key.copy(buffer, keyVarIntLen);
    varuint.encode(valLen, buffer, keyVarIntLen + keyLen);
    keyVal.value.copy(buffer, keyVarIntLen + keyLen + valVarIntLen);
    return buffer;
}
exports.keyValToBuffer = keyValToBuffer;
// https://github.com/feross/buffer/blob/master/index.js#L1127
function verifuint(value, max) {
    if (typeof value !== "number") throw new Error("cannot write a non-number as a number");
    if (value < 0) throw new Error("specified a negative value for writing an unsigned value");
    if (value > max) throw new Error("RangeError: value out of range");
    if (Math.floor(value) !== value) throw new Error("value has a fractional component");
}
function readUInt64LE(buffer, offset) {
    const a = buffer.readUInt32LE(offset);
    let b = buffer.readUInt32LE(offset + 4);
    b *= 0x100000000;
    verifuint(b + a, 0x001fffffffffffff);
    return b + a;
}
exports.readUInt64LE = readUInt64LE;
function writeUInt64LE(buffer, value, offset) {
    verifuint(value, 0x001fffffffffffff);
    buffer.writeInt32LE(value & -1, offset);
    buffer.writeUInt32LE(Math.floor(value / 0x100000000), offset + 4);
    return offset + 8;
}
exports.writeUInt64LE = writeUInt64LE;

},{"6c809102e8f63b72":"fCgem","da35a02d1d632300":"1mjPW"}],"1mjPW":[function(require,module,exports) {
var Buffer = require("dbbbaae54d1fc4b3").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
// Number.MAX_SAFE_INTEGER
const MAX_SAFE_INTEGER = 9007199254740991;
function checkUInt53(n) {
    if (n < 0 || n > MAX_SAFE_INTEGER || n % 1 !== 0) throw new RangeError("value out of range");
}
function encode(_number, buffer, offset) {
    checkUInt53(_number);
    if (!buffer) buffer = Buffer.allocUnsafe(encodingLength(_number));
    if (!Buffer.isBuffer(buffer)) throw new TypeError("buffer must be a Buffer instance");
    if (!offset) offset = 0;
    // 8 bit
    if (_number < 0xfd) {
        buffer.writeUInt8(_number, offset);
        Object.assign(encode, {
            bytes: 1
        });
    // 16 bit
    } else if (_number <= 0xffff) {
        buffer.writeUInt8(0xfd, offset);
        buffer.writeUInt16LE(_number, offset + 1);
        Object.assign(encode, {
            bytes: 3
        });
    // 32 bit
    } else if (_number <= 0xffffffff) {
        buffer.writeUInt8(0xfe, offset);
        buffer.writeUInt32LE(_number, offset + 1);
        Object.assign(encode, {
            bytes: 5
        });
    // 64 bit
    } else {
        buffer.writeUInt8(0xff, offset);
        buffer.writeUInt32LE(_number >>> 0, offset + 1);
        buffer.writeUInt32LE(_number / 0x100000000 | 0, offset + 5);
        Object.assign(encode, {
            bytes: 9
        });
    }
    return buffer;
}
exports.encode = encode;
function decode(buffer, offset) {
    if (!Buffer.isBuffer(buffer)) throw new TypeError("buffer must be a Buffer instance");
    if (!offset) offset = 0;
    const first = buffer.readUInt8(offset);
    // 8 bit
    if (first < 0xfd) {
        Object.assign(decode, {
            bytes: 1
        });
        return first;
    // 16 bit
    } else if (first === 0xfd) {
        Object.assign(decode, {
            bytes: 3
        });
        return buffer.readUInt16LE(offset + 1);
    // 32 bit
    } else if (first === 0xfe) {
        Object.assign(decode, {
            bytes: 5
        });
        return buffer.readUInt32LE(offset + 1);
    // 64 bit
    } else {
        Object.assign(decode, {
            bytes: 9
        });
        const lo = buffer.readUInt32LE(offset + 1);
        const hi = buffer.readUInt32LE(offset + 5);
        const _number = hi * 0x0100000000 + lo;
        checkUInt53(_number);
        return _number;
    }
}
exports.decode = decode;
function encodingLength(_number) {
    checkUInt53(_number);
    return _number < 0xfd ? 1 : _number <= 0xffff ? 3 : _number <= 0xffffffff ? 5 : 9;
}
exports.encodingLength = encodingLength;

},{"dbbbaae54d1fc4b3":"fCgem"}],"bS0Du":[function(require,module,exports) {
var Buffer = require("408bf6f64e6bc6e").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const typeFields_1 = require("4a68f387b600a601");
const varuint = require("11be3cac4fccd00e");
function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1.OutputTypes.TAP_TREE || keyVal.key.length !== 1) throw new Error("Decode Error: could not decode tapTree with key 0x" + keyVal.key.toString("hex"));
    let _offset = 0;
    const data = [];
    while(_offset < keyVal.value.length){
        const depth = keyVal.value[_offset++];
        const leafVersion = keyVal.value[_offset++];
        const scriptLen = varuint.decode(keyVal.value, _offset);
        _offset += varuint.encodingLength(scriptLen);
        data.push({
            depth,
            leafVersion,
            script: keyVal.value.slice(_offset, _offset + scriptLen)
        });
        _offset += scriptLen;
    }
    return {
        leaves: data
    };
}
exports.decode = decode;
function encode(tree) {
    const key = Buffer.from([
        typeFields_1.OutputTypes.TAP_TREE
    ]);
    const bufs = [].concat(...tree.leaves.map((tapLeaf)=>[
            Buffer.of(tapLeaf.depth, tapLeaf.leafVersion),
            varuint.encode(tapLeaf.script.length),
            tapLeaf.script
        ]));
    return {
        key,
        value: Buffer.concat(bufs)
    };
}
exports.encode = encode;
exports.expected = "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }";
function check(data) {
    return Array.isArray(data.leaves) && data.leaves.every((tapLeaf)=>tapLeaf.depth >= 0 && tapLeaf.depth <= 128 && (tapLeaf.leafVersion & 0xfe) === tapLeaf.leafVersion && Buffer.isBuffer(tapLeaf.script));
}
exports.check = check;
function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.tapTree === undefined;
}
exports.canAdd = canAdd;

},{"408bf6f64e6bc6e":"fCgem","4a68f387b600a601":"3089x","11be3cac4fccd00e":"1mjPW"}],"257pN":[function(require,module,exports) {
var Buffer = require("8d84916f39fa78a2").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const range = (n)=>[
        ...Array(n).keys()
    ];
const isValidDERKey = (pubkey)=>pubkey.length === 33 && [
        2,
        3
    ].includes(pubkey[0]) || pubkey.length === 65 && 4 === pubkey[0];
function makeConverter(TYPE_BYTE, isValidPubkey = isValidDERKey) {
    function decode(keyVal) {
        if (keyVal.key[0] !== TYPE_BYTE) throw new Error("Decode Error: could not decode bip32Derivation with key 0x" + keyVal.key.toString("hex"));
        const pubkey = keyVal.key.slice(1);
        if (!isValidPubkey(pubkey)) throw new Error("Decode Error: bip32Derivation has invalid pubkey in key 0x" + keyVal.key.toString("hex"));
        if (keyVal.value.length / 4 % 1 !== 0) throw new Error("Decode Error: Input BIP32_DERIVATION value length should be multiple of 4");
        const data = {
            masterFingerprint: keyVal.value.slice(0, 4),
            pubkey,
            path: "m"
        };
        for (const i of range(keyVal.value.length / 4 - 1)){
            const val = keyVal.value.readUInt32LE(i * 4 + 4);
            const isHard = !!(val & 0x80000000);
            const idx = val & 0x7fffffff;
            data.path += "/" + idx.toString(10) + (isHard ? "'" : "");
        }
        return data;
    }
    function encode(data) {
        const head = Buffer.from([
            TYPE_BYTE
        ]);
        const key = Buffer.concat([
            head,
            data.pubkey
        ]);
        const splitPath = data.path.split("/");
        const value = Buffer.allocUnsafe(splitPath.length * 4);
        data.masterFingerprint.copy(value, 0);
        let offset = 4;
        splitPath.slice(1).forEach((level)=>{
            const isHard = level.slice(-1) === "'";
            let num = 0x7fffffff & parseInt(isHard ? level.slice(0, -1) : level, 10);
            if (isHard) num += 0x80000000;
            value.writeUInt32LE(num, offset);
            offset += 4;
        });
        return {
            key,
            value
        };
    }
    const expected = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }";
    function check(data) {
        return Buffer.isBuffer(data.pubkey) && Buffer.isBuffer(data.masterFingerprint) && typeof data.path === "string" && isValidPubkey(data.pubkey) && data.masterFingerprint.length === 4;
    }
    function canAddToArray(array, item, dupeSet) {
        const dupeString = item.pubkey.toString("hex");
        if (dupeSet.has(dupeString)) return false;
        dupeSet.add(dupeString);
        return array.filter((v)=>v.pubkey.equals(item.pubkey)).length === 0;
    }
    return {
        decode,
        encode,
        check,
        expected,
        canAddToArray
    };
}
exports.makeConverter = makeConverter;

},{"8d84916f39fa78a2":"fCgem"}],"guzzQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function makeChecker(pubkeyTypes) {
    return checkPubkey;
    function checkPubkey(keyVal) {
        let pubkey;
        if (pubkeyTypes.includes(keyVal.key[0])) {
            pubkey = keyVal.key.slice(1);
            if (!(pubkey.length === 33 || pubkey.length === 65) || ![
                2,
                3,
                4
            ].includes(pubkey[0])) throw new Error("Format Error: invalid pubkey in key 0x" + keyVal.key.toString("hex"));
        }
        return pubkey;
    }
}
exports.makeChecker = makeChecker;

},{}],"eO5Wf":[function(require,module,exports) {
var Buffer = require("c00a0cff7132dc57").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function makeConverter(TYPE_BYTE) {
    function decode(keyVal) {
        if (keyVal.key[0] !== TYPE_BYTE) throw new Error("Decode Error: could not decode redeemScript with key 0x" + keyVal.key.toString("hex"));
        return keyVal.value;
    }
    function encode(data) {
        const key = Buffer.from([
            TYPE_BYTE
        ]);
        return {
            key,
            value: data
        };
    }
    const expected = "Buffer";
    function check(data) {
        return Buffer.isBuffer(data);
    }
    function canAdd(currentData, newData) {
        return !!currentData && !!newData && currentData.redeemScript === undefined;
    }
    return {
        decode,
        encode,
        check,
        expected,
        canAdd
    };
}
exports.makeConverter = makeConverter;

},{"c00a0cff7132dc57":"fCgem"}],"4v2dA":[function(require,module,exports) {
var Buffer = require("219254e58bfcd582").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const varuint = require("fa8868fa49cf66d6");
const bip32Derivation = require("60a8dc54cbe5d3f2");
const isValidBIP340Key = (pubkey)=>pubkey.length === 32;
function makeConverter(TYPE_BYTE) {
    const parent = bip32Derivation.makeConverter(TYPE_BYTE, isValidBIP340Key);
    function decode(keyVal) {
        const nHashes = varuint.decode(keyVal.value);
        const nHashesLen = varuint.encodingLength(nHashes);
        const base = parent.decode({
            key: keyVal.key,
            value: keyVal.value.slice(nHashesLen + nHashes * 32)
        });
        const leafHashes = new Array(nHashes);
        for(let i = 0, _offset = nHashesLen; i < nHashes; i++, _offset += 32)leafHashes[i] = keyVal.value.slice(_offset, _offset + 32);
        return Object.assign({}, base, {
            leafHashes
        });
    }
    function encode(data) {
        const base = parent.encode(data);
        const nHashesLen = varuint.encodingLength(data.leafHashes.length);
        const nHashesBuf = Buffer.allocUnsafe(nHashesLen);
        varuint.encode(data.leafHashes.length, nHashesBuf);
        const value = Buffer.concat([
            nHashesBuf,
            ...data.leafHashes,
            base.value
        ]);
        return Object.assign({}, base, {
            value
        });
    }
    const expected = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }";
    function check(data) {
        return Array.isArray(data.leafHashes) && data.leafHashes.every((leafHash)=>Buffer.isBuffer(leafHash) && leafHash.length === 32) && parent.check(data);
    }
    return {
        decode,
        encode,
        check,
        expected,
        canAddToArray: parent.canAddToArray
    };
}
exports.makeConverter = makeConverter;

},{"219254e58bfcd582":"fCgem","fa8868fa49cf66d6":"1mjPW","60a8dc54cbe5d3f2":"257pN"}],"cvCQq":[function(require,module,exports) {
var Buffer = require("942bce34a8710cfc").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function makeConverter(TYPE_BYTE) {
    function decode(keyVal) {
        if (keyVal.key[0] !== TYPE_BYTE || keyVal.key.length !== 1) throw new Error("Decode Error: could not decode tapInternalKey with key 0x" + keyVal.key.toString("hex"));
        if (keyVal.value.length !== 32) throw new Error("Decode Error: tapInternalKey not a 32-byte x-only pubkey");
        return keyVal.value;
    }
    function encode(value) {
        const key = Buffer.from([
            TYPE_BYTE
        ]);
        return {
            key,
            value
        };
    }
    const expected = "Buffer";
    function check(data) {
        return Buffer.isBuffer(data) && data.length === 32;
    }
    function canAdd(currentData, newData) {
        return !!currentData && !!newData && currentData.tapInternalKey === undefined;
    }
    return {
        decode,
        encode,
        check,
        expected,
        canAdd
    };
}
exports.makeConverter = makeConverter;

},{"942bce34a8710cfc":"fCgem"}],"9pdcz":[function(require,module,exports) {
var Buffer = require("e2201fd1a4ddc4bd").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function makeConverter(TYPE_BYTE) {
    function decode(keyVal) {
        if (keyVal.key[0] !== TYPE_BYTE) throw new Error("Decode Error: could not decode witnessScript with key 0x" + keyVal.key.toString("hex"));
        return keyVal.value;
    }
    function encode(data) {
        const key = Buffer.from([
            TYPE_BYTE
        ]);
        return {
            key,
            value: data
        };
    }
    const expected = "Buffer";
    function check(data) {
        return Buffer.isBuffer(data);
    }
    function canAdd(currentData, newData) {
        return !!currentData && !!newData && currentData.witnessScript === undefined;
    }
    return {
        decode,
        encode,
        check,
        expected,
        canAdd
    };
}
exports.makeConverter = makeConverter;

},{"e2201fd1a4ddc4bd":"fCgem"}],"jUzwk":[function(require,module,exports) {
var Buffer = require("92b568f299bbc988").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const convert = require("2ed8aa87e4b5e66c");
const tools_1 = require("22a4c89c36c959c9");
function psbtToBuffer({ globalMap, inputs, outputs }) {
    const { globalKeyVals, inputKeyVals, outputKeyVals } = psbtToKeyVals({
        globalMap,
        inputs,
        outputs
    });
    const globalBuffer = tools_1.keyValsToBuffer(globalKeyVals);
    const keyValsOrEmptyToBuffer = (keyVals)=>keyVals.length === 0 ? [
            Buffer.from([
                0
            ])
        ] : keyVals.map(tools_1.keyValsToBuffer);
    const inputBuffers = keyValsOrEmptyToBuffer(inputKeyVals);
    const outputBuffers = keyValsOrEmptyToBuffer(outputKeyVals);
    const header = Buffer.allocUnsafe(5);
    header.writeUIntBE(0x70736274ff, 0, 5);
    return Buffer.concat([
        header,
        globalBuffer
    ].concat(inputBuffers, outputBuffers));
}
exports.psbtToBuffer = psbtToBuffer;
const sortKeyVals = (a, b)=>{
    return a.key.compare(b.key);
};
function keyValsFromMap(keyValMap, converterFactory) {
    const keyHexSet = new Set();
    const keyVals = Object.entries(keyValMap).reduce((result, [key, value])=>{
        if (key === "unknownKeyVals") return result;
        // We are checking for undefined anyways. So ignore TS error
        // @ts-ignore
        const converter = converterFactory[key];
        if (converter === undefined) return result;
        const encodedKeyVals = (Array.isArray(value) ? value : [
            value
        ]).map(converter.encode);
        const keyHexes = encodedKeyVals.map((kv)=>kv.key.toString("hex"));
        keyHexes.forEach((hex)=>{
            if (keyHexSet.has(hex)) throw new Error("Serialize Error: Duplicate key: " + hex);
            keyHexSet.add(hex);
        });
        return result.concat(encodedKeyVals);
    }, []);
    // Get other keyVals that have not yet been gotten
    const otherKeyVals = keyValMap.unknownKeyVals ? keyValMap.unknownKeyVals.filter((keyVal)=>{
        return !keyHexSet.has(keyVal.key.toString("hex"));
    }) : [];
    return keyVals.concat(otherKeyVals).sort(sortKeyVals);
}
function psbtToKeyVals({ globalMap, inputs, outputs }) {
    // First parse the global keyVals
    // Get any extra keyvals to pass along
    return {
        globalKeyVals: keyValsFromMap(globalMap, convert.globals),
        inputKeyVals: inputs.map((i)=>keyValsFromMap(i, convert.inputs)),
        outputKeyVals: outputs.map((o)=>keyValsFromMap(o, convert.outputs))
    };
}
exports.psbtToKeyVals = psbtToKeyVals;

},{"92b568f299bbc988":"fCgem","2ed8aa87e4b5e66c":"31Gpb","22a4c89c36c959c9":"5okq8"}],"f992a":[function(require,module,exports) {
var Buffer = require("2833a8b71f7b13ec").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const converter = require("2bdc21d0bef9f86d");
function checkForInput(inputs, inputIndex) {
    const input = inputs[inputIndex];
    if (input === undefined) throw new Error(`No input #${inputIndex}`);
    return input;
}
exports.checkForInput = checkForInput;
function checkForOutput(outputs, outputIndex) {
    const output = outputs[outputIndex];
    if (output === undefined) throw new Error(`No output #${outputIndex}`);
    return output;
}
exports.checkForOutput = checkForOutput;
function checkHasKey(checkKeyVal, keyVals, enumLength) {
    if (checkKeyVal.key[0] < enumLength) throw new Error(`Use the method for your specific key instead of addUnknownKeyVal*`);
    if (keyVals && keyVals.filter((kv)=>kv.key.equals(checkKeyVal.key)).length !== 0) throw new Error(`Duplicate Key: ${checkKeyVal.key.toString("hex")}`);
}
exports.checkHasKey = checkHasKey;
function getEnumLength(myenum) {
    let count = 0;
    Object.keys(myenum).forEach((val)=>{
        if (Number(isNaN(Number(val)))) count++;
    });
    return count;
}
exports.getEnumLength = getEnumLength;
function inputCheckUncleanFinalized(inputIndex, input) {
    let result = false;
    if (input.nonWitnessUtxo || input.witnessUtxo) {
        const needScriptSig = !!input.redeemScript;
        const needWitnessScript = !!input.witnessScript;
        const scriptSigOK = !needScriptSig || !!input.finalScriptSig;
        const witnessScriptOK = !needWitnessScript || !!input.finalScriptWitness;
        const hasOneFinal = !!input.finalScriptSig || !!input.finalScriptWitness;
        result = scriptSigOK && witnessScriptOK && hasOneFinal;
    }
    if (result === false) throw new Error(`Input #${inputIndex} has too much or too little data to clean`);
}
exports.inputCheckUncleanFinalized = inputCheckUncleanFinalized;
function throwForUpdateMaker(typeName, name, expected, data) {
    throw new Error(`Data for ${typeName} key ${name} is incorrect: Expected ` + `${expected} and got ${JSON.stringify(data)}`);
}
function updateMaker(typeName) {
    return (updateData, mainData)=>{
        for (const name of Object.keys(updateData)){
            // @ts-ignore
            const data = updateData[name];
            // @ts-ignore
            const { canAdd, canAddToArray, check, expected } = // @ts-ignore
            converter[typeName + "s"][name] || {};
            const isArray = !!canAddToArray;
            // If unknown data. ignore and do not add
            if (check) {
                if (isArray) {
                    if (!Array.isArray(data) || // @ts-ignore
                    mainData[name] && !Array.isArray(mainData[name])) throw new Error(`Key type ${name} must be an array`);
                    if (!data.every(check)) throwForUpdateMaker(typeName, name, expected, data);
                    // @ts-ignore
                    const arr = mainData[name] || [];
                    const dupeCheckSet = new Set();
                    if (!data.every((v)=>canAddToArray(arr, v, dupeCheckSet))) throw new Error("Can not add duplicate data to array");
                    // @ts-ignore
                    mainData[name] = arr.concat(data);
                } else {
                    if (!check(data)) throwForUpdateMaker(typeName, name, expected, data);
                    if (!canAdd(mainData, data)) throw new Error(`Can not add duplicate data to ${typeName}`);
                    // @ts-ignore
                    mainData[name] = data;
                }
            }
        }
    };
}
exports.updateGlobal = updateMaker("global");
exports.updateInput = updateMaker("input");
exports.updateOutput = updateMaker("output");
function addInputAttributes(inputs, data) {
    const index = inputs.length - 1;
    const input = checkForInput(inputs, index);
    exports.updateInput(data, input);
}
exports.addInputAttributes = addInputAttributes;
function addOutputAttributes(outputs, data) {
    const index = outputs.length - 1;
    const output = checkForOutput(outputs, index);
    exports.updateOutput(data, output);
}
exports.addOutputAttributes = addOutputAttributes;
function defaultVersionSetter(version, txBuf) {
    if (!Buffer.isBuffer(txBuf) || txBuf.length < 4) throw new Error("Set Version: Invalid Transaction");
    txBuf.writeUInt32LE(version, 0);
    return txBuf;
}
exports.defaultVersionSetter = defaultVersionSetter;
function defaultLocktimeSetter(locktime, txBuf) {
    if (!Buffer.isBuffer(txBuf) || txBuf.length < 4) throw new Error("Set Locktime: Invalid Transaction");
    txBuf.writeUInt32LE(locktime, txBuf.length - 4);
    return txBuf;
}
exports.defaultLocktimeSetter = defaultLocktimeSetter;

},{"2833a8b71f7b13ec":"fCgem","2bdc21d0bef9f86d":"31Gpb"}],"iM70e":[function(require,module,exports) {
var Buffer = require("dad6229f5258e16b").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkTaprootInputForSigs = exports.tapTreeFromList = exports.tapTreeToList = exports.tweakInternalPubKey = exports.checkTaprootOutputFields = exports.checkTaprootInputFields = exports.isTaprootOutput = exports.isTaprootInput = exports.serializeTaprootSignature = exports.tapScriptFinalizer = exports.toXOnly = void 0;
const types_1 = require("e08dc29c61610a48");
const transaction_1 = require("5a2b9cb706fd58af");
const psbtutils_1 = require("71a165fce7806436");
const bip341_1 = require("3a6fa45b2b6d9f4f");
const payments_1 = require("7fd8463ce186a582");
const psbtutils_2 = require("71a165fce7806436");
const toXOnly = (pubKey)=>pubKey.length === 32 ? pubKey : pubKey.slice(1, 33);
exports.toXOnly = toXOnly;
/**
 * Default tapscript finalizer. It searches for the `tapLeafHashToFinalize` if provided.
 * Otherwise it will search for the tapleaf that has at least one signature and has the shortest path.
 * @param inputIndex the position of the PSBT input.
 * @param input the PSBT input.
 * @param tapLeafHashToFinalize optional, if provided the finalizer will search for a tapleaf that has this hash
 *                              and will try to build the finalScriptWitness.
 * @returns the finalScriptWitness or throws an exception if no tapleaf found.
 */ function tapScriptFinalizer(inputIndex, input, tapLeafHashToFinalize) {
    const tapLeaf = findTapLeafToFinalize(input, inputIndex, tapLeafHashToFinalize);
    try {
        const sigs = sortSignatures(input, tapLeaf);
        const witness = sigs.concat(tapLeaf.script).concat(tapLeaf.controlBlock);
        return {
            finalScriptWitness: (0, psbtutils_1.witnessStackToScriptWitness)(witness)
        };
    } catch (err) {
        throw new Error(`Can not finalize taproot input #${inputIndex}: ${err}`);
    }
}
exports.tapScriptFinalizer = tapScriptFinalizer;
function serializeTaprootSignature(sig, sighashType) {
    const sighashTypeByte = sighashType ? Buffer.from([
        sighashType
    ]) : Buffer.from([]);
    return Buffer.concat([
        sig,
        sighashTypeByte
    ]);
}
exports.serializeTaprootSignature = serializeTaprootSignature;
function isTaprootInput(input) {
    return input && !!(input.tapInternalKey || input.tapMerkleRoot || input.tapLeafScript && input.tapLeafScript.length || input.tapBip32Derivation && input.tapBip32Derivation.length || input.witnessUtxo && (0, psbtutils_1.isP2TR)(input.witnessUtxo.script));
}
exports.isTaprootInput = isTaprootInput;
function isTaprootOutput(output, script) {
    return output && !!(output.tapInternalKey || output.tapTree || output.tapBip32Derivation && output.tapBip32Derivation.length || script && (0, psbtutils_1.isP2TR)(script));
}
exports.isTaprootOutput = isTaprootOutput;
function checkTaprootInputFields(inputData, newInputData, action) {
    checkMixedTaprootAndNonTaprootInputFields(inputData, newInputData, action);
    checkIfTapLeafInTree(inputData, newInputData, action);
}
exports.checkTaprootInputFields = checkTaprootInputFields;
function checkTaprootOutputFields(outputData, newOutputData, action) {
    checkMixedTaprootAndNonTaprootOutputFields(outputData, newOutputData, action);
    checkTaprootScriptPubkey(outputData, newOutputData);
}
exports.checkTaprootOutputFields = checkTaprootOutputFields;
function checkTaprootScriptPubkey(outputData, newOutputData) {
    if (!newOutputData.tapTree && !newOutputData.tapInternalKey) return;
    const tapInternalKey = newOutputData.tapInternalKey || outputData.tapInternalKey;
    const tapTree = newOutputData.tapTree || outputData.tapTree;
    if (tapInternalKey) {
        const { script: scriptPubkey } = outputData;
        const script = getTaprootScripPubkey(tapInternalKey, tapTree);
        if (scriptPubkey && !scriptPubkey.equals(script)) throw new Error("Error adding output. Script or address missmatch.");
    }
}
function getTaprootScripPubkey(tapInternalKey, tapTree) {
    const scriptTree = tapTree && tapTreeFromList(tapTree.leaves);
    const { output } = (0, payments_1.p2tr)({
        internalPubkey: tapInternalKey,
        scriptTree
    });
    return output;
}
function tweakInternalPubKey(inputIndex, input) {
    const tapInternalKey = input.tapInternalKey;
    const outputKey = tapInternalKey && (0, bip341_1.tweakKey)(tapInternalKey, input.tapMerkleRoot);
    if (!outputKey) throw new Error(`Cannot tweak tap internal key for input #${inputIndex}. Public key: ${tapInternalKey && tapInternalKey.toString("hex")}`);
    return outputKey.x;
}
exports.tweakInternalPubKey = tweakInternalPubKey;
/**
 * Convert a binary tree to a BIP371 type list. Each element of the list is (according to BIP371):
 * One or more tuples representing the depth, leaf version, and script for a leaf in the Taproot tree,
 * allowing the entire tree to be reconstructed. The tuples must be in depth first search order so that
 * the tree is correctly reconstructed.
 * @param tree the binary tap tree
 * @returns a list of BIP 371 tapleaves
 */ function tapTreeToList(tree) {
    if (!(0, types_1.isTaptree)(tree)) throw new Error("Cannot convert taptree to tapleaf list. Expecting a tapree structure.");
    return _tapTreeToList(tree);
}
exports.tapTreeToList = tapTreeToList;
/**
 * Convert a BIP371 TapLeaf list to a TapTree (binary).
 * @param leaves a list of tapleaves where each element of the list is (according to BIP371):
 * One or more tuples representing the depth, leaf version, and script for a leaf in the Taproot tree,
 * allowing the entire tree to be reconstructed. The tuples must be in depth first search order so that
 * the tree is correctly reconstructed.
 * @returns the corresponding taptree, or throws an exception if the tree cannot be reconstructed
 */ function tapTreeFromList(leaves = []) {
    if (leaves.length === 1 && leaves[0].depth === 0) return {
        output: leaves[0].script,
        version: leaves[0].leafVersion
    };
    return instertLeavesInTree(leaves);
}
exports.tapTreeFromList = tapTreeFromList;
function checkTaprootInputForSigs(input, action) {
    const sigs = extractTaprootSigs(input);
    return sigs.some((sig)=>(0, psbtutils_2.signatureBlocksAction)(sig, decodeSchnorrSignature, action));
}
exports.checkTaprootInputForSigs = checkTaprootInputForSigs;
function decodeSchnorrSignature(signature) {
    return {
        signature: signature.slice(0, 64),
        hashType: signature.slice(64)[0] || transaction_1.Transaction.SIGHASH_DEFAULT
    };
}
function extractTaprootSigs(input) {
    const sigs = [];
    if (input.tapKeySig) sigs.push(input.tapKeySig);
    if (input.tapScriptSig) sigs.push(...input.tapScriptSig.map((s)=>s.signature));
    if (!sigs.length) {
        const finalTapKeySig = getTapKeySigFromWithness(input.finalScriptWitness);
        if (finalTapKeySig) sigs.push(finalTapKeySig);
    }
    return sigs;
}
function getTapKeySigFromWithness(finalScriptWitness) {
    if (!finalScriptWitness) return;
    const witness = finalScriptWitness.slice(2);
    // todo: add schnorr signature validation
    if (witness.length === 64 || witness.length === 65) return witness;
}
function _tapTreeToList(tree, leaves = [], depth = 0) {
    if (depth > bip341_1.MAX_TAPTREE_DEPTH) throw new Error("Max taptree depth exceeded.");
    if (!tree) return [];
    if ((0, types_1.isTapleaf)(tree)) {
        leaves.push({
            depth,
            leafVersion: tree.version || bip341_1.LEAF_VERSION_TAPSCRIPT,
            script: tree.output
        });
        return leaves;
    }
    if (tree[0]) _tapTreeToList(tree[0], leaves, depth + 1);
    if (tree[1]) _tapTreeToList(tree[1], leaves, depth + 1);
    return leaves;
}
function instertLeavesInTree(leaves) {
    let tree;
    for (const leaf of leaves){
        tree = instertLeafInTree(leaf, tree);
        if (!tree) throw new Error(`No room left to insert tapleaf in tree`);
    }
    return tree;
}
function instertLeafInTree(leaf, tree, depth = 0) {
    if (depth > bip341_1.MAX_TAPTREE_DEPTH) throw new Error("Max taptree depth exceeded.");
    if (leaf.depth === depth) {
        if (!tree) return {
            output: leaf.script,
            version: leaf.leafVersion
        };
        return;
    }
    if ((0, types_1.isTapleaf)(tree)) return;
    const leftSide = instertLeafInTree(leaf, tree && tree[0], depth + 1);
    if (leftSide) return [
        leftSide,
        tree && tree[1]
    ];
    const rightSide = instertLeafInTree(leaf, tree && tree[1], depth + 1);
    if (rightSide) return [
        tree && tree[0],
        rightSide
    ];
}
function checkMixedTaprootAndNonTaprootInputFields(inputData, newInputData, action) {
    const isBadTaprootUpdate = isTaprootInput(inputData) && hasNonTaprootFields(newInputData);
    const isBadNonTaprootUpdate = hasNonTaprootFields(inputData) && isTaprootInput(newInputData);
    const hasMixedFields = inputData === newInputData && isTaprootInput(newInputData) && hasNonTaprootFields(newInputData); // todo: bad? use !===
    if (isBadTaprootUpdate || isBadNonTaprootUpdate || hasMixedFields) throw new Error(`Invalid arguments for Psbt.${action}. ` + `Cannot use both taproot and non-taproot fields.`);
}
function checkMixedTaprootAndNonTaprootOutputFields(inputData, newInputData, action) {
    const isBadTaprootUpdate = isTaprootOutput(inputData) && hasNonTaprootFields(newInputData);
    const isBadNonTaprootUpdate = hasNonTaprootFields(inputData) && isTaprootOutput(newInputData);
    const hasMixedFields = inputData === newInputData && isTaprootOutput(newInputData) && hasNonTaprootFields(newInputData);
    if (isBadTaprootUpdate || isBadNonTaprootUpdate || hasMixedFields) throw new Error(`Invalid arguments for Psbt.${action}. ` + `Cannot use both taproot and non-taproot fields.`);
}
function checkIfTapLeafInTree(inputData, newInputData, action) {
    if (newInputData.tapMerkleRoot) {
        const newLeafsInTree = (newInputData.tapLeafScript || []).every((l)=>isTapLeafInTree(l, newInputData.tapMerkleRoot));
        const oldLeafsInTree = (inputData.tapLeafScript || []).every((l)=>isTapLeafInTree(l, newInputData.tapMerkleRoot));
        if (!newLeafsInTree || !oldLeafsInTree) throw new Error(`Invalid arguments for Psbt.${action}. Tapleaf not part of taptree.`);
    } else if (inputData.tapMerkleRoot) {
        const newLeafsInTree = (newInputData.tapLeafScript || []).every((l)=>isTapLeafInTree(l, inputData.tapMerkleRoot));
        if (!newLeafsInTree) throw new Error(`Invalid arguments for Psbt.${action}. Tapleaf not part of taptree.`);
    }
}
function isTapLeafInTree(tapLeaf, merkleRoot) {
    if (!merkleRoot) return true;
    const leafHash = (0, bip341_1.tapleafHash)({
        output: tapLeaf.script,
        version: tapLeaf.leafVersion
    });
    const rootHash = (0, bip341_1.rootHashFromPath)(tapLeaf.controlBlock, leafHash);
    return rootHash.equals(merkleRoot);
}
function sortSignatures(input, tapLeaf) {
    const leafHash = (0, bip341_1.tapleafHash)({
        output: tapLeaf.script,
        version: tapLeaf.leafVersion
    });
    return (input.tapScriptSig || []).filter((tss)=>tss.leafHash.equals(leafHash)).map((tss)=>addPubkeyPositionInScript(tapLeaf.script, tss)).sort((t1, t2)=>t2.positionInScript - t1.positionInScript).map((t)=>t.signature);
}
function addPubkeyPositionInScript(script, tss) {
    return Object.assign({
        positionInScript: (0, psbtutils_1.pubkeyPositionInScript)(tss.pubkey, script)
    }, tss);
}
/**
 * Find tapleaf by hash, or get the signed tapleaf with the shortest path.
 */ function findTapLeafToFinalize(input, inputIndex, leafHashToFinalize) {
    if (!input.tapScriptSig || !input.tapScriptSig.length) throw new Error(`Can not finalize taproot input #${inputIndex}. No tapleaf script signature provided.`);
    const tapLeaf = (input.tapLeafScript || []).sort((a, b)=>a.controlBlock.length - b.controlBlock.length).find((leaf)=>canFinalizeLeaf(leaf, input.tapScriptSig, leafHashToFinalize));
    if (!tapLeaf) throw new Error(`Can not finalize taproot input #${inputIndex}. Signature for tapleaf script not found.`);
    return tapLeaf;
}
function canFinalizeLeaf(leaf, tapScriptSig, hash) {
    const leafHash = (0, bip341_1.tapleafHash)({
        output: leaf.script,
        version: leaf.leafVersion
    });
    const whiteListedHash = !hash || hash.equals(leafHash);
    return whiteListedHash && tapScriptSig.find((tss)=>tss.leafHash.equals(leafHash)) !== undefined;
}
function hasNonTaprootFields(io) {
    return io && !!(io.redeemScript || io.witnessScript || io.bip32Derivation && io.bip32Derivation.length);
}

},{"dad6229f5258e16b":"fCgem","e08dc29c61610a48":"eFC2X","5a2b9cb706fd58af":"arhmj","71a165fce7806436":"4W1dv","3a6fa45b2b6d9f4f":"5qAiz","7fd8463ce186a582":"g5Tn6"}],"4W1dv":[function(require,module,exports) {
var Buffer = require("8da49d8145603528").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signatureBlocksAction = exports.checkInputForSig = exports.pubkeyInScript = exports.pubkeyPositionInScript = exports.witnessStackToScriptWitness = exports.isP2TR = exports.isP2SHScript = exports.isP2WSHScript = exports.isP2WPKH = exports.isP2PKH = exports.isP2PK = exports.isP2MS = void 0;
const varuint = require("417ee9075206396f");
const bscript = require("470fb8ba7f00df89");
const transaction_1 = require("f1c5ddddc52568ed");
const crypto_1 = require("baaf88ab710239f8");
const payments = require("931610060d741a61");
function isPaymentFactory(payment) {
    return (script)=>{
        try {
            payment({
                output: script
            });
            return true;
        } catch (err) {
            return false;
        }
    };
}
exports.isP2MS = isPaymentFactory(payments.p2ms);
exports.isP2PK = isPaymentFactory(payments.p2pk);
exports.isP2PKH = isPaymentFactory(payments.p2pkh);
exports.isP2WPKH = isPaymentFactory(payments.p2wpkh);
exports.isP2WSHScript = isPaymentFactory(payments.p2wsh);
exports.isP2SHScript = isPaymentFactory(payments.p2sh);
exports.isP2TR = isPaymentFactory(payments.p2tr);
function witnessStackToScriptWitness(witness) {
    let buffer = Buffer.allocUnsafe(0);
    function writeSlice(slice) {
        buffer = Buffer.concat([
            buffer,
            Buffer.from(slice)
        ]);
    }
    function writeVarInt(i) {
        const currentLen = buffer.length;
        const varintLen = varuint.encodingLength(i);
        buffer = Buffer.concat([
            buffer,
            Buffer.allocUnsafe(varintLen)
        ]);
        varuint.encode(i, buffer, currentLen);
    }
    function writeVarSlice(slice) {
        writeVarInt(slice.length);
        writeSlice(slice);
    }
    function writeVector(vector) {
        writeVarInt(vector.length);
        vector.forEach(writeVarSlice);
    }
    writeVector(witness);
    return buffer;
}
exports.witnessStackToScriptWitness = witnessStackToScriptWitness;
function pubkeyPositionInScript(pubkey, script) {
    const pubkeyHash = (0, crypto_1.hash160)(pubkey);
    const pubkeyXOnly = pubkey.slice(1, 33); // slice before calling?
    const decompiled = bscript.decompile(script);
    if (decompiled === null) throw new Error("Unknown script error");
    return decompiled.findIndex((element)=>{
        if (typeof element === "number") return false;
        return element.equals(pubkey) || element.equals(pubkeyHash) || element.equals(pubkeyXOnly);
    });
}
exports.pubkeyPositionInScript = pubkeyPositionInScript;
function pubkeyInScript(pubkey, script) {
    return pubkeyPositionInScript(pubkey, script) !== -1;
}
exports.pubkeyInScript = pubkeyInScript;
function checkInputForSig(input, action) {
    const pSigs = extractPartialSigs(input);
    return pSigs.some((pSig)=>signatureBlocksAction(pSig, bscript.signature.decode, action));
}
exports.checkInputForSig = checkInputForSig;
function signatureBlocksAction(signature, signatureDecodeFn, action) {
    const { hashType } = signatureDecodeFn(signature);
    const whitelist = [];
    const isAnyoneCanPay = hashType & transaction_1.Transaction.SIGHASH_ANYONECANPAY;
    if (isAnyoneCanPay) whitelist.push("addInput");
    const hashMod = hashType & 0x1f;
    switch(hashMod){
        case transaction_1.Transaction.SIGHASH_ALL:
            break;
        case transaction_1.Transaction.SIGHASH_SINGLE:
        case transaction_1.Transaction.SIGHASH_NONE:
            whitelist.push("addOutput");
            whitelist.push("setInputSequence");
            break;
    }
    if (whitelist.indexOf(action) === -1) return true;
    return false;
}
exports.signatureBlocksAction = signatureBlocksAction;
function extractPartialSigs(input) {
    let pSigs = [];
    if ((input.partialSig || []).length === 0) {
        if (!input.finalScriptSig && !input.finalScriptWitness) return [];
        pSigs = getPsigsFromInputFinalScripts(input);
    } else pSigs = input.partialSig;
    return pSigs.map((p)=>p.signature);
}
function getPsigsFromInputFinalScripts(input) {
    const scriptItems = !input.finalScriptSig ? [] : bscript.decompile(input.finalScriptSig) || [];
    const witnessItems = !input.finalScriptWitness ? [] : bscript.decompile(input.finalScriptWitness) || [];
    return scriptItems.concat(witnessItems).filter((item)=>{
        return Buffer.isBuffer(item) && bscript.isCanonicalScriptSignature(item);
    }).map((sig)=>({
            signature: sig
        }));
}

},{"8da49d8145603528":"fCgem","417ee9075206396f":"1mjPW","470fb8ba7f00df89":"28LFb","f1c5ddddc52568ed":"arhmj","baaf88ab710239f8":"4BCCF","931610060d741a61":"g5Tn6"}],"270Cc":[function(require,module,exports) {
var Buffer = require("2ff2f21c6587b981").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BufferReader = exports.BufferWriter = exports.unsafeFrom64bitLE = exports.unsafeTo64bitLE = void 0;
const varint_1 = require("e7a56c18b329f88f");
function unsafeTo64bitLE(n) {
    // we want to represent the input as a 8-bytes array
    if (n > Number.MAX_SAFE_INTEGER) throw new Error("Can't convert numbers > MAX_SAFE_INT");
    const byteArray = Buffer.alloc(8, 0);
    for(let index = 0; index < byteArray.length; index++){
        const byte = n & 0xff;
        byteArray[index] = byte;
        n = (n - byte) / 256;
    }
    return byteArray;
}
exports.unsafeTo64bitLE = unsafeTo64bitLE;
function unsafeFrom64bitLE(byteArray) {
    let value = 0;
    if (byteArray.length != 8) throw new Error("Expected Bufffer of lenght 8");
    if (byteArray[7] != 0) throw new Error("Can't encode numbers > MAX_SAFE_INT");
    if (byteArray[6] > 0x1f) throw new Error("Can't encode numbers > MAX_SAFE_INT");
    for(let i = byteArray.length - 1; i >= 0; i--)value = value * 256 + byteArray[i];
    return value;
}
exports.unsafeFrom64bitLE = unsafeFrom64bitLE;
class BufferWriter {
    constructor(){
        this.bufs = [];
    }
    write(alloc, fn) {
        const b = Buffer.alloc(alloc);
        fn(b);
        this.bufs.push(b);
    }
    writeUInt8(i) {
        this.write(1, (b)=>b.writeUInt8(i, 0));
    }
    writeInt32(i) {
        this.write(4, (b)=>b.writeInt32LE(i, 0));
    }
    writeUInt32(i) {
        this.write(4, (b)=>b.writeUInt32LE(i, 0));
    }
    writeUInt64(i) {
        const bytes = unsafeTo64bitLE(i);
        this.writeSlice(bytes);
    }
    writeVarInt(i) {
        this.bufs.push((0, varint_1.createVarint)(i));
    }
    writeSlice(slice) {
        this.bufs.push(Buffer.from(slice));
    }
    writeVarSlice(slice) {
        this.writeVarInt(slice.length);
        this.writeSlice(slice);
    }
    buffer() {
        return Buffer.concat(this.bufs);
    }
}
exports.BufferWriter = BufferWriter;
class BufferReader {
    constructor(buffer, offset = 0){
        this.buffer = buffer;
        this.offset = offset;
    }
    available() {
        return this.buffer.length - this.offset;
    }
    readUInt8() {
        const result = this.buffer.readUInt8(this.offset);
        this.offset++;
        return result;
    }
    readInt32() {
        const result = this.buffer.readInt32LE(this.offset);
        this.offset += 4;
        return result;
    }
    readUInt32() {
        const result = this.buffer.readUInt32LE(this.offset);
        this.offset += 4;
        return result;
    }
    readUInt64() {
        const buf = this.readSlice(8);
        return unsafeFrom64bitLE(buf);
    }
    readVarInt() {
        const [vi, vi_size] = (0, varint_1.parseVarint)(this.buffer, this.offset);
        this.offset += vi_size;
        return vi;
    }
    readSlice(n) {
        if (this.buffer.length < this.offset + n) throw new Error("Cannot read slice out of bounds");
        const result = this.buffer.slice(this.offset, this.offset + n);
        this.offset += n;
        return result;
    }
    readVarSlice() {
        const n = (0, varint_1.sanitizeBigintToNumber)(this.readVarInt());
        return this.readSlice(n);
    }
    readVector() {
        const count = this.readVarInt();
        const vector = [];
        for(let i = 0; i < count; i++)vector.push(this.readVarSlice());
        return vector;
    }
}
exports.BufferReader = BufferReader;

},{"2ff2f21c6587b981":"fCgem","e7a56c18b329f88f":"6qINv"}],"6qINv":[function(require,module,exports) {
var Buffer = require("e145e9a7fa835a23").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createVarint = exports.parseVarint = exports.sanitizeBigintToNumber = void 0;
function bigintToSmallEndian(value, length, buffer, offset) {
    for(let i = 0; i < length; i++){
        if (buffer[i + offset] == undefined) throw Error("Buffer too small");
        buffer[i + offset] = Number(value % BigInt(256));
        value = value >> BigInt(8);
    }
}
function smallEndianToBigint(buffer, offset, length) {
    let result = BigInt(0);
    for(let i = 0; i < length; i++){
        if (buffer[i + offset] == undefined) throw Error("Buffer too small");
        result += BigInt(buffer[i + offset]) << BigInt(i * 8);
    }
    return result;
}
/**
 * Converts a `bigint` to a `number` if it non-negative and at most MAX_SAFE_INTEGER; throws `RangeError` otherwise.
 * Used when converting a Bitcoin-style varint to a `number`, since varints could be larger than what the `Number`
 * class can represent without loss of precision.
 *
 * @param n the number to convert
 * @returns `n` as a `number`
 */ function sanitizeBigintToNumber(n) {
    if (n < 0) throw RangeError("Negative bigint is not a valid varint");
    if (n > Number.MAX_SAFE_INTEGER) throw RangeError("Too large for a Number");
    return Number(n);
}
exports.sanitizeBigintToNumber = sanitizeBigintToNumber;
function getVarintSize(value) {
    if (typeof value == "number") value = sanitizeBigintToNumber(value);
    if (value < BigInt(0)) throw new RangeError("Negative numbers are not supported");
    if (value >= BigInt(1) << BigInt(64)) throw new RangeError("Too large for a Bitcoin-style varint");
    if (value < BigInt(0xfd)) return 1;
    else if (value <= BigInt(0xffff)) return 3;
    else if (value <= BigInt(0xffffffff)) return 5;
    else return 9;
}
/**
 * Parses a Bitcoin-style variable length integer from a buffer, starting at the given `offset`. Returns a pair
 * containing the parsed `BigInt`, and its length in bytes from the buffer.
 *
 * @param data the `Buffer` from which the variable-length integer is read
 * @param offset a non-negative offset to read from
 * @returns a pair where the first element is the parsed BigInt, and the second element is the length in bytes parsed
 * from the buffer.
 *
 * @throws `RangeError` if offset is negative.
 * @throws `Error` if the buffer's end is reached withut parsing being completed.
 */ function parseVarint(data, offset) {
    if (offset < 0) throw RangeError("Negative offset is invalid");
    if (data[offset] == undefined) throw Error("Buffer too small");
    if (data[offset] < 0xfd) return [
        BigInt(data[offset]),
        1
    ];
    else {
        let size;
        if (data[offset] === 0xfd) size = 2;
        else if (data[offset] === 0xfe) size = 4;
        else size = 8;
        return [
            smallEndianToBigint(data, offset + 1, size),
            size + 1
        ];
    }
}
exports.parseVarint = parseVarint;
function createVarint(value) {
    if (typeof value == "number") value = sanitizeBigintToNumber(value);
    const size = getVarintSize(value);
    value = BigInt(value);
    const buffer = Buffer.alloc(size);
    if (size == 1) buffer[0] = Number(value);
    else {
        if (size == 3) buffer[0] = 0xfd;
        else if (size === 5) buffer[0] = 0xfe;
        else buffer[0] = 0xff;
        bigintToSmallEndian(value, size - 1, buffer, 1);
    }
    return buffer;
}
exports.createVarint = createVarint;

},{"e145e9a7fa835a23":"fCgem"}],"hT3AF":[function(require,module,exports) {
var Buffer = require("7e530b26a6a1f82a").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashLeaf = exports.Merkle = void 0;
const bitcoinjs_lib_1 = require("ca47b7997212ae56");
/**
 * This class implements the merkle tree used by Ledger Bitcoin app v2+,
 * which is documented at
 * https://github.com/LedgerHQ/app-bitcoin-new/blob/master/doc/merkle.md
 */ class Merkle {
    constructor(leaves, hasher = bitcoinjs_lib_1.crypto.sha256){
        this.leaves = leaves;
        this.h = hasher;
        const nodes = this.calculateRoot(leaves);
        this.rootNode = nodes.root;
        this.leafNodes = nodes.leaves;
    }
    getRoot() {
        return this.rootNode.hash;
    }
    size() {
        return this.leaves.length;
    }
    getLeaves() {
        return this.leaves;
    }
    getLeafHash(index) {
        return this.leafNodes[index].hash;
    }
    getProof(index) {
        if (index >= this.leaves.length) throw Error("Index out of bounds");
        return proveNode(this.leafNodes[index]);
    }
    calculateRoot(leaves) {
        const n = leaves.length;
        if (n == 0) return {
            root: new Node(undefined, undefined, Buffer.alloc(32, 0)),
            leaves: []
        };
        if (n == 1) {
            const newNode = new Node(undefined, undefined, leaves[0]);
            return {
                root: newNode,
                leaves: [
                    newNode
                ]
            };
        }
        const leftCount = highestPowerOf2LessThan(n);
        const leftBranch = this.calculateRoot(leaves.slice(0, leftCount));
        const rightBranch = this.calculateRoot(leaves.slice(leftCount));
        const leftChild = leftBranch.root;
        const rightChild = rightBranch.root;
        const hash = this.hashNode(leftChild.hash, rightChild.hash);
        const node = new Node(leftChild, rightChild, hash);
        leftChild.parent = node;
        rightChild.parent = node;
        return {
            root: node,
            leaves: leftBranch.leaves.concat(rightBranch.leaves)
        };
    }
    hashNode(left, right) {
        return this.h(Buffer.concat([
            Buffer.from([
                1
            ]),
            left,
            right
        ]));
    }
}
exports.Merkle = Merkle;
function hashLeaf(buf, hashFunction = bitcoinjs_lib_1.crypto.sha256) {
    return hashConcat(Buffer.from([
        0
    ]), buf, hashFunction);
}
exports.hashLeaf = hashLeaf;
function hashConcat(bufA, bufB, hashFunction) {
    return hashFunction(Buffer.concat([
        bufA,
        bufB
    ]));
}
class Node {
    constructor(left, right, hash){
        this.leftChild = left;
        this.rightChild = right;
        this.hash = hash;
    }
    isLeaf() {
        return this.leftChild == undefined;
    }
}
function proveNode(node) {
    if (!node.parent) return [];
    if (node.parent.leftChild == node) {
        if (!node.parent.rightChild) throw new Error("Expected right child to exist");
        return [
            node.parent.rightChild.hash,
            ...proveNode(node.parent)
        ];
    } else {
        if (!node.parent.leftChild) throw new Error("Expected left child to exist");
        return [
            node.parent.leftChild.hash,
            ...proveNode(node.parent)
        ];
    }
}
function highestPowerOf2LessThan(n) {
    if (n < 2) throw Error("Expected n >= 2");
    if (isPowerOf2(n)) return n / 2;
    return 1 << Math.floor(Math.log2(n));
}
function isPowerOf2(n) {
    return (n & n - 1) == 0;
}

},{"7e530b26a6a1f82a":"fCgem","ca47b7997212ae56":"cl7fJ"}],"jTf7S":[function(require,module,exports) {
var Buffer = require("25f41b490d58ea14").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MerkelizedPsbt = void 0;
const merkleMap_1 = require("bfb3821b09a9e04f");
const psbtv2_1 = require("c3eaa6616f220eed");
/**
 * This class merkelizes a PSBTv2, by merkelizing the different
 * maps of the psbt. This is used during the transaction signing process,
 * where the hardware app can request specific parts of the psbt from the
 * client code and be sure that the response data actually belong to the psbt.
 * The reason for this is the limited amount of memory available to the app,
 * so it can't always store the full psbt in memory.
 *
 * The signing process is documented at
 * https://github.com/LedgerHQ/app-bitcoin-new/blob/master/doc/bitcoin.md#sign_psbt
 */ class MerkelizedPsbt extends psbtv2_1.PsbtV2 {
    constructor(psbt){
        super();
        this.inputMerkleMaps = [];
        this.outputMerkleMaps = [];
        psbt.copy(this);
        this.globalMerkleMap = MerkelizedPsbt.createMerkleMap(this.globalMap);
        for(let i = 0; i < this.getGlobalInputCount(); i++)this.inputMerkleMaps.push(MerkelizedPsbt.createMerkleMap(this.inputMaps[i]));
        this.inputMapCommitments = [
            ...this.inputMerkleMaps.values()
        ].map((v)=>v.commitment());
        for(let i = 0; i < this.getGlobalOutputCount(); i++)this.outputMerkleMaps.push(MerkelizedPsbt.createMerkleMap(this.outputMaps[i]));
        this.outputMapCommitments = [
            ...this.outputMerkleMaps.values()
        ].map((v)=>v.commitment());
    }
    // These public functions are for MerkelizedPsbt.
    getGlobalSize() {
        return this.globalMap.size;
    }
    getGlobalKeysValuesRoot() {
        return this.globalMerkleMap.commitment();
    }
    static createMerkleMap(map) {
        const sortedKeysStrings = [
            ...map.keys()
        ].sort();
        const values = sortedKeysStrings.map((k)=>{
            const v = map.get(k);
            if (!v) throw new Error("No value for key " + k);
            return v;
        });
        const sortedKeys = sortedKeysStrings.map((k)=>Buffer.from(k, "hex"));
        return new merkleMap_1.MerkleMap(sortedKeys, values);
    }
}
exports.MerkelizedPsbt = MerkelizedPsbt;

},{"25f41b490d58ea14":"fCgem","bfb3821b09a9e04f":"7MOhw","c3eaa6616f220eed":"dYnvX"}],"7MOhw":[function(require,module,exports) {
var Buffer = require("95de36fd98dbb8d3").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MerkleMap = void 0;
const merkle_1 = require("6749cfdc03b628a4");
const varint_1 = require("a716957428440b36");
/**
 * This implements "Merkelized Maps", documented at
 * https://github.com/LedgerHQ/app-bitcoin-new/blob/master/doc/merkle.md#merkleized-maps
 *
 * A merkelized map consist of two merkle trees, one for the keys of
 * a map and one for the values of the same map, thus the two merkle
 * trees have the same shape. The commitment is the number elements
 * in the map followed by the keys' merkle root followed by the
 * values' merkle root.
 */ class MerkleMap {
    /**
     * @param keys Sorted list of (unhashed) keys
     * @param values values, in corresponding order as the keys, and of equal length
     */ constructor(keys, values){
        if (keys.length != values.length) throw new Error("keys and values should have the same length");
        // Sanity check: verify that keys are actually sorted and with no duplicates
        for(let i = 0; i < keys.length - 1; i++){
            if (keys[i].toString("hex") >= keys[i + 1].toString("hex")) throw new Error("keys must be in strictly increasing order");
        }
        this.keys = keys;
        this.keysTree = new merkle_1.Merkle(keys.map((k)=>(0, merkle_1.hashLeaf)(k)));
        this.values = values;
        this.valuesTree = new merkle_1.Merkle(values.map((v)=>(0, merkle_1.hashLeaf)(v)));
    }
    commitment() {
        // returns a buffer between 65 and 73 (included) bytes long
        return Buffer.concat([
            (0, varint_1.createVarint)(this.keys.length),
            this.keysTree.getRoot(),
            this.valuesTree.getRoot()
        ]);
    }
}
exports.MerkleMap = MerkleMap;

},{"95de36fd98dbb8d3":"fCgem","6749cfdc03b628a4":"hT3AF","a716957428440b36":"6qINv"}],"dYnvX":[function(require,module,exports) {
var Buffer = require("2eae7ef5e1c76688").Buffer;
"use strict";
/* eslint-disable @typescript-eslint/no-non-null-assertion */ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PsbtV2 = exports.NoSuchEntry = exports.psbtOut = exports.psbtIn = exports.psbtGlobal = void 0;
const bjs = __importStar(require("edf1f1b6954964fd"));
const buffertools_1 = require("e59acc6a12ca0d20");
const varint_1 = require("7a53f1b3959afdda");
var psbtGlobal;
(function(psbtGlobal) {
    psbtGlobal[psbtGlobal["UNSIGNED_TX"] = 0] = "UNSIGNED_TX";
    psbtGlobal[psbtGlobal["XPUB"] = 1] = "XPUB";
    psbtGlobal[psbtGlobal["TX_VERSION"] = 2] = "TX_VERSION";
    psbtGlobal[psbtGlobal["FALLBACK_LOCKTIME"] = 3] = "FALLBACK_LOCKTIME";
    psbtGlobal[psbtGlobal["INPUT_COUNT"] = 4] = "INPUT_COUNT";
    psbtGlobal[psbtGlobal["OUTPUT_COUNT"] = 5] = "OUTPUT_COUNT";
    psbtGlobal[psbtGlobal["TX_MODIFIABLE"] = 6] = "TX_MODIFIABLE";
    psbtGlobal[psbtGlobal["VERSION"] = 251] = "VERSION";
})(psbtGlobal = exports.psbtGlobal || (exports.psbtGlobal = {}));
var psbtIn;
(function(psbtIn) {
    psbtIn[psbtIn["NON_WITNESS_UTXO"] = 0] = "NON_WITNESS_UTXO";
    psbtIn[psbtIn["WITNESS_UTXO"] = 1] = "WITNESS_UTXO";
    psbtIn[psbtIn["PARTIAL_SIG"] = 2] = "PARTIAL_SIG";
    psbtIn[psbtIn["SIGHASH_TYPE"] = 3] = "SIGHASH_TYPE";
    psbtIn[psbtIn["REDEEM_SCRIPT"] = 4] = "REDEEM_SCRIPT";
    psbtIn[psbtIn["WITNESS_SCRIPT"] = 5] = "WITNESS_SCRIPT";
    psbtIn[psbtIn["BIP32_DERIVATION"] = 6] = "BIP32_DERIVATION";
    psbtIn[psbtIn["FINAL_SCRIPTSIG"] = 7] = "FINAL_SCRIPTSIG";
    psbtIn[psbtIn["FINAL_SCRIPTWITNESS"] = 8] = "FINAL_SCRIPTWITNESS";
    psbtIn[psbtIn["PREVIOUS_TXID"] = 14] = "PREVIOUS_TXID";
    psbtIn[psbtIn["OUTPUT_INDEX"] = 15] = "OUTPUT_INDEX";
    psbtIn[psbtIn["SEQUENCE"] = 16] = "SEQUENCE";
    psbtIn[psbtIn["TAP_KEY_SIG"] = 19] = "TAP_KEY_SIG";
    psbtIn[psbtIn["TAP_BIP32_DERIVATION"] = 22] = "TAP_BIP32_DERIVATION";
})(psbtIn = exports.psbtIn || (exports.psbtIn = {}));
var psbtOut;
(function(psbtOut) {
    psbtOut[psbtOut["REDEEM_SCRIPT"] = 0] = "REDEEM_SCRIPT";
    psbtOut[psbtOut["WITNESS_SCRIPT"] = 1] = "WITNESS_SCRIPT";
    psbtOut[psbtOut["BIP_32_DERIVATION"] = 2] = "BIP_32_DERIVATION";
    psbtOut[psbtOut["AMOUNT"] = 3] = "AMOUNT";
    psbtOut[psbtOut["SCRIPT"] = 4] = "SCRIPT";
    psbtOut[psbtOut["TAP_BIP32_DERIVATION"] = 7] = "TAP_BIP32_DERIVATION";
})(psbtOut = exports.psbtOut || (exports.psbtOut = {}));
const PSBT_MAGIC_BYTES = Buffer.from([
    0x70,
    0x73,
    0x62,
    0x74,
    0xff
]);
class NoSuchEntry extends Error {
}
exports.NoSuchEntry = NoSuchEntry;
/**
 * Implements Partially Signed Bitcoin Transaction version 2, BIP370, as
 * documented at https://github.com/bitcoin/bips/blob/master/bip-0370.mediawiki
 * and https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki
 *
 * A psbt is a data structure that can carry all relevant information about a
 * transaction through all stages of the signing process. From constructing an
 * unsigned transaction to extracting the final serialized transaction ready for
 * broadcast.
 *
 * This implementation is limited to what's needed in ledgerjs to carry out its
 * duties, which means that support for features like multisig or taproot script
 * path spending are not implemented. Specifically, it supports p2pkh,
 * p2wpkhWrappedInP2sh, p2wpkh and p2tr key path spending.
 *
 * This class is made purposefully dumb, so it's easy to add support for
 * complemantary fields as needed in the future.
 */ class PsbtV2 {
    constructor(){
        this.globalMap = new Map();
        this.inputMaps = [];
        this.outputMaps = [];
    }
    setGlobalTxVersion(version) {
        this.setGlobal(psbtGlobal.TX_VERSION, uint32LE(version));
    }
    getGlobalTxVersion() {
        return this.getGlobal(psbtGlobal.TX_VERSION).readUInt32LE(0);
    }
    setGlobalFallbackLocktime(locktime) {
        this.setGlobal(psbtGlobal.FALLBACK_LOCKTIME, uint32LE(locktime));
    }
    getGlobalFallbackLocktime() {
        var _a;
        return (_a = this.getGlobalOptional(psbtGlobal.FALLBACK_LOCKTIME)) === null || _a === void 0 ? void 0 : _a.readUInt32LE(0);
    }
    setGlobalInputCount(inputCount) {
        this.setGlobal(psbtGlobal.INPUT_COUNT, varint(inputCount));
    }
    getGlobalInputCount() {
        return fromVarint(this.getGlobal(psbtGlobal.INPUT_COUNT));
    }
    setGlobalOutputCount(outputCount) {
        this.setGlobal(psbtGlobal.OUTPUT_COUNT, varint(outputCount));
    }
    getGlobalOutputCount() {
        return fromVarint(this.getGlobal(psbtGlobal.OUTPUT_COUNT));
    }
    setGlobalTxModifiable(byte) {
        this.setGlobal(psbtGlobal.TX_MODIFIABLE, byte);
    }
    getGlobalTxModifiable() {
        return this.getGlobalOptional(psbtGlobal.TX_MODIFIABLE);
    }
    setGlobalPsbtVersion(psbtVersion) {
        this.setGlobal(psbtGlobal.VERSION, uint32LE(psbtVersion));
    }
    getGlobalPsbtVersion() {
        return this.getGlobal(psbtGlobal.VERSION).readUInt32LE(0);
    }
    setInputNonWitnessUtxo(inputIndex, transaction) {
        this.setInput(inputIndex, psbtIn.NON_WITNESS_UTXO, b(), transaction);
    }
    getInputNonWitnessUtxo(inputIndex) {
        return this.getInputOptional(inputIndex, psbtIn.NON_WITNESS_UTXO, b());
    }
    setInputWitnessUtxo(inputIndex, amount, scriptPubKey) {
        const buf = new buffertools_1.BufferWriter();
        buf.writeSlice(uint64LE(amount));
        buf.writeVarSlice(scriptPubKey);
        this.setInput(inputIndex, psbtIn.WITNESS_UTXO, b(), buf.buffer());
    }
    getInputWitnessUtxo(inputIndex) {
        const utxo = this.getInputOptional(inputIndex, psbtIn.WITNESS_UTXO, b());
        if (!utxo) return undefined;
        const buf = new buffertools_1.BufferReader(utxo);
        return {
            amount: (0, buffertools_1.unsafeFrom64bitLE)(buf.readSlice(8)),
            scriptPubKey: buf.readVarSlice()
        };
    }
    setInputPartialSig(inputIndex, pubkey, signature) {
        this.setInput(inputIndex, psbtIn.PARTIAL_SIG, pubkey, signature);
    }
    getInputPartialSig(inputIndex, pubkey) {
        return this.getInputOptional(inputIndex, psbtIn.PARTIAL_SIG, pubkey);
    }
    setInputSighashType(inputIndex, sigHashtype) {
        this.setInput(inputIndex, psbtIn.SIGHASH_TYPE, b(), uint32LE(sigHashtype));
    }
    getInputSighashType(inputIndex) {
        const result = this.getInputOptional(inputIndex, psbtIn.SIGHASH_TYPE, b());
        if (!result) return undefined;
        return result.readUInt32LE(0);
    }
    setInputRedeemScript(inputIndex, redeemScript) {
        this.setInput(inputIndex, psbtIn.REDEEM_SCRIPT, b(), redeemScript);
    }
    getInputRedeemScript(inputIndex) {
        return this.getInputOptional(inputIndex, psbtIn.REDEEM_SCRIPT, b());
    }
    setInputWitnessScript(inputIndex, witnessScript) {
        this.setInput(inputIndex, psbtIn.WITNESS_SCRIPT, b(), witnessScript);
    }
    getInputWitnessScript(inputIndex) {
        return this.getInputOptional(inputIndex, psbtIn.WITNESS_SCRIPT, b());
    }
    setInputBip32Derivation(inputIndex, pubkey, masterFingerprint, path) {
        if (pubkey.length != 33) throw new Error("Invalid pubkey length: " + pubkey.length);
        this.setInput(inputIndex, psbtIn.BIP32_DERIVATION, pubkey, this.encodeBip32Derivation(masterFingerprint, path));
    }
    getInputBip32Derivation(inputIndex, pubkey) {
        const buf = this.getInputOptional(inputIndex, psbtIn.BIP32_DERIVATION, pubkey);
        if (!buf) return undefined;
        return this.decodeBip32Derivation(buf);
    }
    setInputFinalScriptsig(inputIndex, scriptSig) {
        this.setInput(inputIndex, psbtIn.FINAL_SCRIPTSIG, b(), scriptSig);
    }
    getInputFinalScriptsig(inputIndex) {
        return this.getInputOptional(inputIndex, psbtIn.FINAL_SCRIPTSIG, b());
    }
    setInputFinalScriptwitness(inputIndex, scriptWitness) {
        this.setInput(inputIndex, psbtIn.FINAL_SCRIPTWITNESS, b(), scriptWitness);
    }
    getInputFinalScriptwitness(inputIndex) {
        return this.getInput(inputIndex, psbtIn.FINAL_SCRIPTWITNESS, b());
    }
    setInputPreviousTxId(inputIndex, txid) {
        this.setInput(inputIndex, psbtIn.PREVIOUS_TXID, b(), txid);
    }
    getInputPreviousTxid(inputIndex) {
        return this.getInput(inputIndex, psbtIn.PREVIOUS_TXID, b());
    }
    setInputOutputIndex(inputIndex, outputIndex) {
        this.setInput(inputIndex, psbtIn.OUTPUT_INDEX, b(), uint32LE(outputIndex));
    }
    getInputOutputIndex(inputIndex) {
        return this.getInput(inputIndex, psbtIn.OUTPUT_INDEX, b()).readUInt32LE(0);
    }
    setInputSequence(inputIndex, sequence) {
        this.setInput(inputIndex, psbtIn.SEQUENCE, b(), uint32LE(sequence));
    }
    getInputSequence(inputIndex) {
        var _a, _b;
        return (_b = (_a = this.getInputOptional(inputIndex, psbtIn.SEQUENCE, b())) === null || _a === void 0 ? void 0 : _a.readUInt32LE(0)) !== null && _b !== void 0 ? _b : 0xffffffff;
    }
    setInputTapKeySig(inputIndex, sig) {
        this.setInput(inputIndex, psbtIn.TAP_KEY_SIG, b(), sig);
    }
    getInputTapKeySig(inputIndex) {
        return this.getInputOptional(inputIndex, psbtIn.TAP_KEY_SIG, b());
    }
    setInputTapBip32Derivation(inputIndex, pubkey, hashes, masterFingerprint, path) {
        if (pubkey.length != 32) throw new Error("Invalid pubkey length: " + pubkey.length);
        const buf = this.encodeTapBip32Derivation(hashes, masterFingerprint, path);
        this.setInput(inputIndex, psbtIn.TAP_BIP32_DERIVATION, pubkey, buf);
    }
    getInputTapBip32Derivation(inputIndex, pubkey) {
        const buf = this.getInput(inputIndex, psbtIn.TAP_BIP32_DERIVATION, pubkey);
        return this.decodeTapBip32Derivation(buf);
    }
    getInputKeyDatas(inputIndex, keyType) {
        return this.getKeyDatas(this.inputMaps[inputIndex], keyType);
    }
    setOutputRedeemScript(outputIndex, redeemScript) {
        this.setOutput(outputIndex, psbtOut.REDEEM_SCRIPT, b(), redeemScript);
    }
    getOutputRedeemScript(outputIndex) {
        return this.getOutput(outputIndex, psbtOut.REDEEM_SCRIPT, b());
    }
    setOutputBip32Derivation(outputIndex, pubkey, masterFingerprint, path) {
        this.setOutput(outputIndex, psbtOut.BIP_32_DERIVATION, pubkey, this.encodeBip32Derivation(masterFingerprint, path));
    }
    getOutputBip32Derivation(outputIndex, pubkey) {
        const buf = this.getOutput(outputIndex, psbtOut.BIP_32_DERIVATION, pubkey);
        return this.decodeBip32Derivation(buf);
    }
    setOutputAmount(outputIndex, amount) {
        this.setOutput(outputIndex, psbtOut.AMOUNT, b(), uint64LE(amount));
    }
    getOutputAmount(outputIndex) {
        const buf = this.getOutput(outputIndex, psbtOut.AMOUNT, b());
        return (0, buffertools_1.unsafeFrom64bitLE)(buf);
    }
    setOutputScript(outputIndex, scriptPubKey) {
        this.setOutput(outputIndex, psbtOut.SCRIPT, b(), scriptPubKey);
    }
    getOutputScript(outputIndex) {
        return this.getOutput(outputIndex, psbtOut.SCRIPT, b());
    }
    setOutputTapBip32Derivation(outputIndex, pubkey, hashes, fingerprint, path) {
        const buf = this.encodeTapBip32Derivation(hashes, fingerprint, path);
        this.setOutput(outputIndex, psbtOut.TAP_BIP32_DERIVATION, pubkey, buf);
    }
    getOutputTapBip32Derivation(outputIndex, pubkey) {
        const buf = this.getOutput(outputIndex, psbtOut.TAP_BIP32_DERIVATION, pubkey);
        return this.decodeTapBip32Derivation(buf);
    }
    deleteInputEntries(inputIndex, keyTypes) {
        const map = this.inputMaps[inputIndex];
        map.forEach((_v, k, m)=>{
            if (this.isKeyType(k, keyTypes)) m.delete(k);
        });
    }
    copy(to) {
        this.copyMap(this.globalMap, to.globalMap);
        this.copyMaps(this.inputMaps, to.inputMaps);
        this.copyMaps(this.outputMaps, to.outputMaps);
    }
    copyMaps(from, to) {
        from.forEach((m, index)=>{
            const to_index = new Map();
            this.copyMap(m, to_index);
            to[index] = to_index;
        });
    }
    copyMap(from, to) {
        from.forEach((v, k)=>to.set(k, Buffer.from(v)));
    }
    serialize() {
        const buf = new buffertools_1.BufferWriter();
        buf.writeSlice(Buffer.from([
            0x70,
            0x73,
            0x62,
            0x74,
            0xff
        ]));
        serializeMap(buf, this.globalMap);
        this.inputMaps.forEach((map)=>{
            serializeMap(buf, map);
        });
        this.outputMaps.forEach((map)=>{
            serializeMap(buf, map);
        });
        return buf.buffer();
    }
    deserialize(psbt) {
        const buf = new buffertools_1.BufferReader(psbt);
        if (!buf.readSlice(5).equals(PSBT_MAGIC_BYTES)) throw new Error("Invalid magic bytes");
        while(this.readKeyPair(this.globalMap, buf));
        let psbtVersion;
        try {
            psbtVersion = this.getGlobalPsbtVersion();
        } catch (_a) {
            psbtVersion = 0;
        }
        if (psbtVersion !== 0 && psbtVersion !== 2) throw new Error("Only PSBTs of version 0 or 2 are supported");
        let nInputs;
        let nOutputs;
        if (psbtVersion == 0) {
            // if PSBTv0, we parse the PSBT_GLOBAL_UNSIGNED_TX field
            const txRaw = this.getGlobal(psbtGlobal.UNSIGNED_TX);
            const tx = bjs.Transaction.fromBuffer(txRaw);
            nInputs = tx.ins.length;
            nOutputs = tx.outs.length;
        } else {
            // if PSBTv2, we already have the counts
            nInputs = this.getGlobalInputCount();
            nOutputs = this.getGlobalOutputCount();
        }
        for(let i = 0; i < nInputs; i++){
            this.inputMaps[i] = new Map();
            while(this.readKeyPair(this.inputMaps[i], buf));
        }
        for(let i = 0; i < nOutputs; i++){
            this.outputMaps[i] = new Map();
            while(this.readKeyPair(this.outputMaps[i], buf));
        }
        this.normalizeToV2();
    }
    normalizeToV2() {
        var _a;
        // if the psbt is a PsbtV0, convert it to PsbtV2 instead.
        // throw an error for any version other than 0 or 2,
        const psbtVersion = (_a = this.getGlobalOptional(psbtGlobal.VERSION)) === null || _a === void 0 ? void 0 : _a.readInt32LE(0);
        if (psbtVersion === 2) return;
        else if (psbtVersion !== undefined) throw new Error("Invalid or unsupported value for PSBT_GLOBAL_VERSION");
        // Convert PsbtV0 to PsbtV2 by parsing the PSBT_GLOBAL_UNSIGNED_TX field
        // and filling in the corresponding fields.
        const txRaw = this.getGlobal(psbtGlobal.UNSIGNED_TX);
        const tx = bjs.Transaction.fromBuffer(txRaw);
        this.setGlobalPsbtVersion(2);
        this.setGlobalTxVersion(tx.version);
        this.setGlobalFallbackLocktime(tx.locktime);
        this.setGlobalInputCount(tx.ins.length);
        this.setGlobalOutputCount(tx.outs.length);
        for(let i = 0; i < tx.ins.length; i++){
            this.setInputPreviousTxId(i, tx.ins[i].hash);
            this.setInputOutputIndex(i, tx.ins[i].index);
            this.setInputSequence(i, tx.ins[i].sequence);
        }
        for(let i = 0; i < tx.outs.length; i++){
            this.setOutputAmount(i, tx.outs[i].value);
            this.setOutputScript(i, tx.outs[i].script);
        }
        // PSBT_GLOBAL_UNSIGNED_TX must be removed in a valid PSBTv2
        this.globalMap.delete(psbtGlobal.UNSIGNED_TX.toString(16).padStart(2, "0"));
    }
    /**
     * Imports a BitcoinJS (bitcoinjs-lib) Psbt object.
     * https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/ts_src/psbt.ts
     *
     * Prepares the fields required for signing a Psbt on a Ledger
     * device. It should be used exclusively before calling
     * `appClient.signPsbt()` and not as a general Psbt conversion method.
     *
     * Note: This method supports all the policies that the Ledger is able to
     * sign, with the exception of taproot: tr(@0).
     */ fromBitcoinJS(psbtBJS) {
        function isTaprootInput(input) {
            let isP2TR;
            try {
                bjs.payments.p2tr({
                    output: input.witnessUtxo.script
                });
                isP2TR = true;
            } catch (err) {
                isP2TR = false;
            }
            return input && !!(input.tapInternalKey || input.tapMerkleRoot || input.tapLeafScript && input.tapLeafScript.length || input.tapBip32Derivation && input.tapBip32Derivation.length || isP2TR);
        }
        this.setGlobalPsbtVersion(2);
        this.setGlobalTxVersion(psbtBJS.version);
        this.setGlobalInputCount(psbtBJS.data.inputs.length);
        this.setGlobalOutputCount(psbtBJS.txOutputs.length);
        if (psbtBJS.locktime !== undefined) this.setGlobalFallbackLocktime(psbtBJS.locktime);
        psbtBJS.data.inputs.forEach((input, index)=>{
            if (isTaprootInput(input)) throw new Error(`Taproot inputs not supported`);
            this.setInputPreviousTxId(index, psbtBJS.txInputs[index].hash);
            if (psbtBJS.txInputs[index].sequence !== undefined) this.setInputSequence(index, psbtBJS.txInputs[index].sequence);
            this.setInputOutputIndex(index, psbtBJS.txInputs[index].index);
            if (input.sighashType !== undefined) this.setInputSighashType(index, input.sighashType);
            if (input.nonWitnessUtxo) this.setInputNonWitnessUtxo(index, input.nonWitnessUtxo);
            if (input.witnessUtxo) this.setInputWitnessUtxo(index, input.witnessUtxo.value, input.witnessUtxo.script);
            if (input.witnessScript) this.setInputWitnessScript(index, input.witnessScript);
            if (input.redeemScript) this.setInputRedeemScript(index, input.redeemScript);
            psbtBJS.data.inputs[index].bip32Derivation.forEach((derivation)=>{
                if (!/^m\//i.test(derivation.path)) throw new Error(`Invalid input bip32 derivation`);
                const pathArray = derivation.path.replace(/m\//i, "").split("/").map((level)=>level.match(/['h]/i) ? parseInt(level) + 0x80000000 : Number(level));
                this.setInputBip32Derivation(index, derivation.pubkey, derivation.masterFingerprint, pathArray);
            });
        });
        psbtBJS.txOutputs.forEach((output, index)=>{
            this.setOutputAmount(index, output.value);
            this.setOutputScript(index, output.script);
        });
        return this;
    }
    readKeyPair(map, buf) {
        const keyLen = (0, varint_1.sanitizeBigintToNumber)(buf.readVarInt());
        if (keyLen == 0) return false;
        const keyType = buf.readUInt8();
        const keyData = buf.readSlice(keyLen - 1);
        const value = buf.readVarSlice();
        set(map, keyType, keyData, value);
        return true;
    }
    getKeyDatas(map, keyType) {
        const result = [];
        map.forEach((_v, k)=>{
            if (this.isKeyType(k, [
                keyType
            ])) result.push(Buffer.from(k.substring(2), "hex"));
        });
        return result;
    }
    isKeyType(hexKey, keyTypes) {
        const keyType = Buffer.from(hexKey.substring(0, 2), "hex").readUInt8(0);
        return keyTypes.some((k)=>k == keyType);
    }
    setGlobal(keyType, value) {
        const key = new Key(keyType, Buffer.from([]));
        this.globalMap.set(key.toString(), value);
    }
    getGlobal(keyType) {
        return get(this.globalMap, keyType, b(), false);
    }
    getGlobalOptional(keyType) {
        return get(this.globalMap, keyType, b(), true);
    }
    setInput(index, keyType, keyData, value) {
        set(this.getMap(index, this.inputMaps), keyType, keyData, value);
    }
    getInput(index, keyType, keyData) {
        return get(this.inputMaps[index], keyType, keyData, false);
    }
    getInputOptional(index, keyType, keyData) {
        return get(this.inputMaps[index], keyType, keyData, true);
    }
    setOutput(index, keyType, keyData, value) {
        set(this.getMap(index, this.outputMaps), keyType, keyData, value);
    }
    getOutput(index, keyType, keyData) {
        return get(this.outputMaps[index], keyType, keyData, false);
    }
    getMap(index, maps) {
        if (maps[index]) return maps[index];
        return maps[index] = new Map();
    }
    encodeBip32Derivation(masterFingerprint, path) {
        const buf = new buffertools_1.BufferWriter();
        this.writeBip32Derivation(buf, masterFingerprint, path);
        return buf.buffer();
    }
    decodeBip32Derivation(buffer) {
        const buf = new buffertools_1.BufferReader(buffer);
        return this.readBip32Derivation(buf);
    }
    writeBip32Derivation(buf, masterFingerprint, path) {
        buf.writeSlice(masterFingerprint);
        path.forEach((element)=>{
            buf.writeUInt32(element);
        });
    }
    readBip32Derivation(buf) {
        const masterFingerprint = buf.readSlice(4);
        const path = [];
        while(buf.offset < buf.buffer.length)path.push(buf.readUInt32());
        return {
            masterFingerprint,
            path
        };
    }
    encodeTapBip32Derivation(hashes, masterFingerprint, path) {
        const buf = new buffertools_1.BufferWriter();
        buf.writeVarInt(hashes.length);
        hashes.forEach((h)=>{
            buf.writeSlice(h);
        });
        this.writeBip32Derivation(buf, masterFingerprint, path);
        return buf.buffer();
    }
    decodeTapBip32Derivation(buffer) {
        const buf = new buffertools_1.BufferReader(buffer);
        const hashCount = (0, varint_1.sanitizeBigintToNumber)(buf.readVarInt());
        const hashes = [];
        for(let i = 0; i < hashCount; i++)hashes.push(buf.readSlice(32));
        const deriv = this.readBip32Derivation(buf);
        return Object.assign({
            hashes
        }, deriv);
    }
}
exports.PsbtV2 = PsbtV2;
function get(map, keyType, keyData, acceptUndefined) {
    if (!map) throw Error("No such map");
    const key = new Key(keyType, keyData);
    const value = map.get(key.toString());
    if (!value) {
        if (acceptUndefined) return undefined;
        throw new NoSuchEntry(key.toString());
    }
    // Make sure to return a copy, to protect the underlying data.
    return Buffer.from(value);
}
class Key {
    constructor(keyType, keyData){
        this.keyType = keyType;
        this.keyData = keyData;
    }
    toString() {
        const buf = new buffertools_1.BufferWriter();
        this.toBuffer(buf);
        return buf.buffer().toString("hex");
    }
    serialize(buf) {
        buf.writeVarInt(1 + this.keyData.length);
        this.toBuffer(buf);
    }
    toBuffer(buf) {
        buf.writeUInt8(this.keyType);
        buf.writeSlice(this.keyData);
    }
}
class KeyPair {
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
    serialize(buf) {
        this.key.serialize(buf);
        buf.writeVarSlice(this.value);
    }
}
function createKey(buf) {
    return new Key(buf.readUInt8(0), buf.slice(1));
}
function serializeMap(buf, map) {
    // serialize in lexicographical order of keys
    for (let [key, value] of [
        ...map
    ].sort(([k1], [k2])=>k1.localeCompare(k2))){
        const keyPair = new KeyPair(createKey(Buffer.from(key, "hex")), value);
        keyPair.serialize(buf);
    }
    buf.writeUInt8(0);
}
function b() {
    return Buffer.from([]);
}
function set(map, keyType, keyData, value) {
    const key = new Key(keyType, keyData);
    map.set(key.toString(), value);
}
function uint32LE(n) {
    const buf = Buffer.alloc(4);
    buf.writeUInt32LE(n, 0);
    return buf;
}
function uint64LE(n) {
    return (0, buffertools_1.unsafeTo64bitLE)(n);
}
function varint(n) {
    const buf = new buffertools_1.BufferWriter();
    buf.writeVarInt(n);
    return buf.buffer();
}
function fromVarint(buf) {
    return (0, varint_1.sanitizeBigintToNumber)(new buffertools_1.BufferReader(buf).readVarInt());
}

},{"2eae7ef5e1c76688":"fCgem","edf1f1b6954964fd":"cl7fJ","e59acc6a12ca0d20":"270Cc","7a53f1b3959afdda":"6qINv"}],"2et2j":[function(require,module,exports) {
var Buffer = require("6b93eaf5bc3dea26").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DefaultWalletPolicy = exports.WalletPolicy = void 0;
const bitcoinjs_lib_1 = require("8f8bd665e657f7d");
const buffertools_1 = require("c13455a0cfa0c3e5");
const merkle_1 = require("d04c1a24247ce9fb");
const WALLET_POLICY_V2 = 2;
/**
 * The Bitcon hardware app uses a descriptors-like thing to describe
 * how to construct output scripts from keys. A "Wallet Policy" consists
 * of a "Descriptor Template" and a list of "keys". A key is basically
 * a serialized BIP32 extended public key with some added derivation path
 * information. This is documented at
 * https://github.com/LedgerHQ/app-bitcoin-new/blob/master/doc/wallet.md
 */ class WalletPolicy {
    /**
     * Creates and instance of a wallet policy.
     * @param name an ascii string, up to 16 bytes long; it must be an empty string for default wallet policies
     * @param descriptorTemplate the wallet policy template
     * @param keys and array of the keys, with the key derivation information
     */ constructor(name, descriptorTemplate, keys){
        this.name = name;
        this.descriptorTemplate = descriptorTemplate;
        this.keys = keys;
    }
    /**
     * Returns the unique 32-bytes id of this wallet policy.
     */ getId() {
        return bitcoinjs_lib_1.crypto.sha256(this.serialize());
    }
    /**
     * Serializes the wallet policy for transmission via the hardware wallet protocol.
     * @returns the serialized wallet policy
     */ serialize() {
        const keyBuffers = this.keys.map((k)=>{
            return Buffer.from(k, "ascii");
        });
        const m = new merkle_1.Merkle(keyBuffers.map((k)=>(0, merkle_1.hashLeaf)(k)));
        const buf = new buffertools_1.BufferWriter();
        buf.writeUInt8(WALLET_POLICY_V2); // wallet version
        // length of wallet name, and wallet name
        buf.writeVarSlice(Buffer.from(this.name, "ascii"));
        // length of descriptor template
        buf.writeVarInt(this.descriptorTemplate.length);
        // sha256 hash of descriptor template
        buf.writeSlice(bitcoinjs_lib_1.crypto.sha256(Buffer.from(this.descriptorTemplate)));
        // number of keys
        buf.writeVarInt(this.keys.length);
        // root of Merkle tree of keys
        buf.writeSlice(m.getRoot());
        return buf.buffer();
    }
}
exports.WalletPolicy = WalletPolicy;
/**
 * Simplified class to handle default wallet policies that can be used without policy registration.
 */ class DefaultWalletPolicy extends WalletPolicy {
    constructor(descriptorTemplate, key){
        super("", descriptorTemplate, [
            key
        ]);
    }
}
exports.DefaultWalletPolicy = DefaultWalletPolicy;

},{"6b93eaf5bc3dea26":"fCgem","8f8bd665e657f7d":"cl7fJ","c13455a0cfa0c3e5":"270Cc","d04c1a24247ce9fb":"hT3AF"}],"9zmIA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hwTransport = require("@ledgerhq/hw-transport");
var _hwTransportDefault = parcelHelpers.interopDefault(_hwTransport);
var _hidFraming = require("@ledgerhq/devices/hid-framing");
var _hidFramingDefault = parcelHelpers.interopDefault(_hidFraming);
var _devices = require("@ledgerhq/devices");
var _logs = require("@ledgerhq/logs");
var _errors = require("@ledgerhq/errors");
var _webusb = require("./webusb");
var Buffer = require("2f1c1569be106a3").Buffer;
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const configurationValue = 1;
const endpointNumber = 3;
/**
 * WebUSB Transport implementation
 * @example
 * import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
 * ...
 * TransportWebUSB.create().then(transport => ...)
 */ class TransportWebUSB extends (0, _hwTransportDefault.default) {
    constructor(device, interfaceNumber){
        super();
        this.channel = Math.floor(Math.random() * 0xffff);
        this.packetSize = 64;
        this._disconnectEmitted = false;
        this._emitDisconnect = (e)=>{
            if (this._disconnectEmitted) return;
            this._disconnectEmitted = true;
            this.emit("disconnect", e);
        };
        this.device = device;
        this.interfaceNumber = interfaceNumber;
        this.deviceModel = (0, _devices.identifyUSBProductId)(device.productId);
    }
    /**
     * Similar to create() except it will always display the device permission (even if some devices are already accepted).
     */ static request() {
        return __awaiter(this, void 0, void 0, function*() {
            const device = yield (0, _webusb.requestLedgerDevice)();
            return TransportWebUSB.open(device);
        });
    }
    /**
     * Similar to create() except it will never display the device permission (it returns a Promise<?Transport>, null if it fails to find a device).
     */ static openConnected() {
        return __awaiter(this, void 0, void 0, function*() {
            const devices = yield (0, _webusb.getLedgerDevices)();
            if (devices.length === 0) return null;
            return TransportWebUSB.open(devices[0]);
        });
    }
    /**
     * Create a Ledger transport with a USBDevice
     */ static open(device) {
        return __awaiter(this, void 0, void 0, function*() {
            yield device.open();
            if (device.configuration === null) yield device.selectConfiguration(configurationValue);
            yield gracefullyResetDevice(device);
            const iface = device.configurations[0].interfaces.find(({ alternates })=>alternates.some((a)=>a.interfaceClass === 255));
            if (!iface) throw new (0, _errors.TransportInterfaceNotAvailable)("No WebUSB interface found for your Ledger device. Please upgrade firmware or contact techsupport.");
            const interfaceNumber = iface.interfaceNumber;
            try {
                yield device.claimInterface(interfaceNumber);
            } catch (e) {
                yield device.close();
                throw new (0, _errors.TransportInterfaceNotAvailable)(e.message);
            }
            const transport = new TransportWebUSB(device, interfaceNumber);
            const onDisconnect = (e)=>{
                if (device === e.device) {
                    // $FlowFixMe
                    navigator.usb.removeEventListener("disconnect", onDisconnect);
                    transport._emitDisconnect(new (0, _errors.DisconnectedDevice)());
                }
            };
            // $FlowFixMe
            navigator.usb.addEventListener("disconnect", onDisconnect);
            return transport;
        });
    }
    /**
     * Release the transport device
     */ close() {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.exchangeBusyPromise;
            yield this.device.releaseInterface(this.interfaceNumber);
            yield gracefullyResetDevice(this.device);
            yield this.device.close();
        });
    }
    /**
     * Exchange with the device using APDU protocol.
     * @param apdu
     * @returns a promise of apdu response
     */ exchange(apdu) {
        return __awaiter(this, void 0, void 0, function*() {
            const b = yield this.exchangeAtomicImpl(()=>__awaiter(this, void 0, void 0, function*() {
                    const { channel, packetSize } = this;
                    (0, _logs.log)("apdu", "=> " + apdu.toString("hex"));
                    const framing = (0, _hidFramingDefault.default)(channel, packetSize);
                    // Write...
                    const blocks = framing.makeBlocks(apdu);
                    for(let i = 0; i < blocks.length; i++)yield this.device.transferOut(endpointNumber, blocks[i]);
                    // Read...
                    let result;
                    let acc;
                    while(!(result = framing.getReducedResult(acc))){
                        const r = yield this.device.transferIn(endpointNumber, packetSize);
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        const buffer = Buffer.from(r.data.buffer);
                        acc = framing.reduceResponse(acc, buffer);
                    }
                    (0, _logs.log)("apdu", "<= " + result.toString("hex"));
                    return result;
                })).catch((e)=>{
                if (e && e.message && e.message.includes("disconnected")) {
                    this._emitDisconnect(e);
                    throw new (0, _errors.DisconnectedDeviceDuringOperation)(e.message);
                }
                throw e;
            });
            return b;
        });
    }
    setScrambleKey() {}
}
/**
 * Check if WebUSB transport is supported.
 */ TransportWebUSB.isSupported = (0, _webusb.isSupported);
/**
 * List the WebUSB devices that was previously authorized by the user.
 */ TransportWebUSB.list = (0, _webusb.getLedgerDevices);
/**
 * Actively listen to WebUSB devices and emit ONE device
 * that was either accepted before, if not it will trigger the native permission UI.
 *
 * Important: it must be called in the context of a UI click!
 */ TransportWebUSB.listen = (observer)=>{
    let unsubscribed = false;
    (0, _webusb.getFirstLedgerDevice)().then((device)=>{
        if (!unsubscribed) {
            const deviceModel = (0, _devices.identifyUSBProductId)(device.productId);
            observer.next({
                type: "add",
                descriptor: device,
                deviceModel
            });
            observer.complete();
        }
    }, (error)=>{
        if (window.DOMException && error instanceof window.DOMException && error.code === 18) observer.error(new (0, _errors.TransportWebUSBGestureRequired)(error.message));
        else observer.error(new (0, _errors.TransportOpenUserCancelled)(error.message));
    });
    function unsubscribe() {
        unsubscribed = true;
    }
    return {
        unsubscribe
    };
};
exports.default = TransportWebUSB;
function gracefullyResetDevice(device) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            yield device.reset();
        } catch (err) {
            console.warn(err);
        }
    });
}

},{"2f1c1569be106a3":"fCgem","@ledgerhq/hw-transport":"59Ey9","@ledgerhq/devices/hid-framing":"3BsQA","@ledgerhq/devices":"fnHxP","@ledgerhq/logs":"i4OI0","@ledgerhq/errors":"EVZMy","./webusb":"7NNG8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59Ey9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TransportError", ()=>(0, _errors.TransportError));
parcelHelpers.export(exports, "TransportStatusError", ()=>(0, _errors.TransportStatusError));
parcelHelpers.export(exports, "StatusCodes", ()=>(0, _errors.StatusCodes));
parcelHelpers.export(exports, "getAltStatusMessage", ()=>(0, _errors.getAltStatusMessage));
var _events = require("events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
var _errors = require("@ledgerhq/errors");
var _logs = require("@ledgerhq/logs");
var Buffer = require("88b312045e1ca92b").Buffer;
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DEFAULT_LOG_TYPE = "transport";
/**
 * The Transport class defines a generic interface for communicating with a Ledger hardware wallet.
 * There are different kind of transports based on the technology (channels like U2F, HID, Bluetooth, Webusb) and environment (Node, Web,...).
 * It is an abstract class that needs to be implemented.
 */ class Transport {
    constructor({ context, logType } = {}){
        this.exchangeTimeout = 30000;
        this.unresponsiveTimeout = 15000;
        this.deviceModel = null;
        this._events = new (0, _eventsDefault.default)();
        /**
         * Send data to the device using the higher level API.
         *
         * @param {number} cla - The instruction class for the command.
         * @param {number} ins - The instruction code for the command.
         * @param {number} p1 - The first parameter for the instruction.
         * @param {number} p2 - The second parameter for the instruction.
         * @param {Buffer} data - The data to be sent. Defaults to an empty buffer.
         * @param {Array<number>} statusList - A list of acceptable status codes for the response. Defaults to [StatusCodes.OK].
         * @param {Object} options - Contains optional options for the exchange function
         *  - abortTimeoutMs: stop the send after a given timeout. Another timeout exists
         *    to detect unresponsive device (see `unresponsiveTimeout`). This timeout aborts the exchange.
         * @returns {Promise<Buffer>} A promise that resolves with the response data from the device.
         */ this.send = (cla, ins, p1, p2, data = Buffer.alloc(0), statusList = [
            (0, _errors.StatusCodes).OK
        ], { abortTimeoutMs } = {})=>__awaiter(this, void 0, void 0, function*() {
                const tracer = this.tracer.withUpdatedContext({
                    function: "send"
                });
                if (data.length >= 256) {
                    tracer.trace("data.length exceeded 256 bytes limit", {
                        dataLength: data.length
                    });
                    throw new (0, _errors.TransportError)("data.length exceed 256 bytes limit. Got: " + data.length, "DataLengthTooBig");
                }
                tracer.trace("Starting an exchange", {
                    abortTimeoutMs
                });
                const response = yield this.exchange(// The size of the data is added in 1 byte just before `data`
                Buffer.concat([
                    Buffer.from([
                        cla,
                        ins,
                        p1,
                        p2
                    ]),
                    Buffer.from([
                        data.length
                    ]),
                    data
                ]), {
                    abortTimeoutMs
                });
                tracer.trace("Received response from exchange");
                const sw = response.readUInt16BE(response.length - 2);
                if (!statusList.some((s)=>s === sw)) throw new (0, _errors.TransportStatusError)(sw);
                return response;
            });
        this._appAPIlock = null;
        this.tracer = new (0, _logs.LocalTracer)(logType !== null && logType !== void 0 ? logType : DEFAULT_LOG_TYPE, context);
    }
    /**
     * Send data to the device using a low level API.
     * It's recommended to use the "send" method for a higher level API.
     * @param {Buffer} apdu - The data to send.
     * @param {Object} options - Contains optional options for the exchange function
     *  - abortTimeoutMs: stop the exchange after a given timeout. Another timeout exists
     *    to detect unresponsive device (see `unresponsiveTimeout`). This timeout aborts the exchange.
     * @returns {Promise<Buffer>} A promise that resolves with the response data from the device.
     */ exchange(_apdu, { abortTimeoutMs: _abortTimeoutMs } = {}) {
        throw new Error("exchange not implemented");
    }
    /**
     * Send apdus in batch to the device using a low level API.
     * The default implementation is to call exchange for each apdu.
     * @param {Array<Buffer>} apdus - array of apdus to send.
     * @param {Observer<Buffer>} observer - an observer that will receive the response of each apdu.
     * @returns {Subscription} A Subscription object on which you can call ".unsubscribe()" to stop sending apdus.
     */ exchangeBulk(apdus, observer) {
        let unsubscribed = false;
        const unsubscribe = ()=>{
            unsubscribed = true;
        };
        const main = ()=>__awaiter(this, void 0, void 0, function*() {
                if (unsubscribed) return;
                for (const apdu of apdus){
                    const r = yield this.exchange(apdu);
                    if (unsubscribed) return;
                    const status = r.readUInt16BE(r.length - 2);
                    if (status !== (0, _errors.StatusCodes).OK) throw new (0, _errors.TransportStatusError)(status);
                    observer.next(r);
                }
            });
        main().then(()=>!unsubscribed && observer.complete(), (e)=>!unsubscribed && observer.error(e));
        return {
            unsubscribe
        };
    }
    /**
     * Set the "scramble key" for the next data exchanges with the device.
     * Each app can have a different scramble key and it is set internally during instantiation.
     * @param {string} key - The scramble key to set.
     * deprecated This method is no longer needed for modern transports and should be migrated away from.
     * no @ before deprecated as it breaks documentationjs on version 14.0.2
     * https://github.com/documentationjs/documentation/issues/1596
     */ setScrambleKey(_key) {}
    /**
     * Close the connection with the device.
     *
     * Note: for certain transports (hw-transport-node-hid-singleton for ex), once the promise resolved,
     * the transport instance is actually still cached, and the device is disconnected only after a defined timeout.
     * But for the consumer of the Transport, this does not matter and it can consider the transport to be closed.
     *
     * @returns {Promise<void>} A promise that resolves when the transport is closed.
     */ close() {
        return Promise.resolve();
    }
    /**
     * Listen for an event on the transport instance.
     * Transport implementations may have specific events. Common events include:
     * "disconnect" : triggered when the transport is disconnected.
     * @param {string} eventName - The name of the event to listen for.
     * @param {(...args: Array<any>) => any} cb - The callback function to be invoked when the event occurs.
     */ on(eventName, cb) {
        this._events.on(eventName, cb);
    }
    /**
     * Stop listening to an event on an instance of transport.
     */ off(eventName, cb) {
        this._events.removeListener(eventName, cb);
    }
    emit(event, ...args) {
        this._events.emit(event, ...args);
    }
    /**
     * Enable or not logs of the binary exchange
     */ setDebugMode() {
        console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.");
    }
    /**
     * Set a timeout (in milliseconds) for the exchange call. Only some transport might implement it. (e.g. U2F)
     */ setExchangeTimeout(exchangeTimeout) {
        this.exchangeTimeout = exchangeTimeout;
    }
    /**
     * Define the delay before emitting "unresponsive" on an exchange that does not respond
     */ setExchangeUnresponsiveTimeout(unresponsiveTimeout) {
        this.unresponsiveTimeout = unresponsiveTimeout;
    }
    /**
     * create() allows to open the first descriptor available or
     * throw if there is none or if timeout is reached.
     * This is a light helper, alternative to using listen() and open() (that you may need for any more advanced usecase)
     * @example
    TransportFoo.create().then(transport => ...)
     */ static create(openTimeout = 3000, listenTimeout) {
        return new Promise((resolve, reject)=>{
            let found = false;
            const sub = this.listen({
                next: (e)=>{
                    found = true;
                    if (sub) sub.unsubscribe();
                    if (listenTimeoutId) clearTimeout(listenTimeoutId);
                    this.open(e.descriptor, openTimeout).then(resolve, reject);
                },
                error: (e)=>{
                    if (listenTimeoutId) clearTimeout(listenTimeoutId);
                    reject(e);
                },
                complete: ()=>{
                    if (listenTimeoutId) clearTimeout(listenTimeoutId);
                    if (!found) reject(new (0, _errors.TransportError)(this.ErrorMessage_NoDeviceFound, "NoDeviceFound"));
                }
            });
            const listenTimeoutId = listenTimeout ? setTimeout(()=>{
                sub.unsubscribe();
                reject(new (0, _errors.TransportError)(this.ErrorMessage_ListenTimeout, "ListenTimeout"));
            }, listenTimeout) : null;
        });
    }
    /**
     * Wrapper to make an exchange "atomic" (blocking any other exchange)
     *
     * It also handles "unresponsiveness" by emitting "unresponsive" and "responsive" events.
     *
     * @param f The exchange job, using the transport to run
     * @returns a Promise resolving with the output of the given job
     */ exchangeAtomicImpl(f) {
        return __awaiter(this, void 0, void 0, function*() {
            const tracer = this.tracer.withUpdatedContext({
                function: "exchangeAtomicImpl",
                unresponsiveTimeout: this.unresponsiveTimeout
            });
            if (this.exchangeBusyPromise) {
                tracer.trace("Atomic exchange is already busy");
                throw new (0, _errors.TransportPendingOperation)("An action was already pending on the Ledger device. Please deny or reconnect.");
            }
            // Sets the atomic guard
            let resolveBusy;
            const busyPromise = new Promise((r)=>{
                resolveBusy = r;
            });
            this.exchangeBusyPromise = busyPromise;
            // The device unresponsiveness handler
            let unresponsiveReached = false;
            const timeout = setTimeout(()=>{
                tracer.trace(`Timeout reached, emitting Transport event "unresponsive"`, {
                    unresponsiveTimeout: this.unresponsiveTimeout
                });
                unresponsiveReached = true;
                this.emit("unresponsive");
            }, this.unresponsiveTimeout);
            try {
                const res = yield f();
                if (unresponsiveReached) {
                    tracer.trace("Device was unresponsive, emitting responsive");
                    this.emit("responsive");
                }
                return res;
            } finally{
                tracer.trace("Finalize, clearing busy guard");
                clearTimeout(timeout);
                if (resolveBusy) resolveBusy();
                this.exchangeBusyPromise = null;
            }
        });
    }
    decorateAppAPIMethods(self, methods, scrambleKey) {
        for (const methodName of methods)self[methodName] = this.decorateAppAPIMethod(methodName, self[methodName], self, scrambleKey);
    }
    decorateAppAPIMethod(methodName, f, ctx, scrambleKey) {
        return (...args)=>__awaiter(this, void 0, void 0, function*() {
                const { _appAPIlock } = this;
                if (_appAPIlock) return Promise.reject(new (0, _errors.TransportError)("Ledger Device is busy (lock " + _appAPIlock + ")", "TransportLocked"));
                try {
                    this._appAPIlock = methodName;
                    this.setScrambleKey(scrambleKey);
                    return yield f.apply(ctx, args);
                } finally{
                    this._appAPIlock = null;
                }
            });
    }
    /**
     * Sets the context used by the logging/tracing mechanism
     *
     * Useful when re-using (cached) the same Transport instance,
     * but with a new tracing context.
     *
     * @param context A TraceContext, that can undefined to reset the context
     */ setTraceContext(context) {
        this.tracer = this.tracer.withContext(context);
    }
    /**
     * Updates the context used by the logging/tracing mechanism
     *
     * The update only overrides the key-value that are already defined in the current context.
     *
     * @param contextToAdd A TraceContext that will be added to the current context
     */ updateTraceContext(contextToAdd) {
        this.tracer.updateContext(contextToAdd);
    }
    /**
     * Gets the tracing context of the transport instance
     */ getTraceContext() {
        return this.tracer.getContext();
    }
}
Transport.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)";
Transport.ErrorMessage_NoDeviceFound = "No Ledger device found";
exports.default = Transport;

},{"88b312045e1ca92b":"fCgem","events":"1VQLm","@ledgerhq/errors":"EVZMy","@ledgerhq/logs":"i4OI0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VQLm":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var R = typeof Reflect === "object" ? Reflect : null;
var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === "function") ReflectOwnKeys = R.ownKeys;
else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
};
function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function EventEmitter() {
    EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === "error";
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === "function") ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit("newListener", type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === "function") // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
    } else if (typeof list !== "function") {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit("removeListener", type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === "function") this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === "function") return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") return emitter.listenerCount(type);
    else return listenerCount.call(emitter, type);
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === "function") return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === "function") emitter.removeListener("error", errorListener);
            resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== "error") addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") eventTargetAgnosticAddListener(emitter, "error", handler, flags);
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === "function") // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

},{}],"EVZMy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "serializeError", ()=>(0, _helpers.serializeError));
parcelHelpers.export(exports, "deserializeError", ()=>(0, _helpers.deserializeError));
parcelHelpers.export(exports, "createCustomErrorClass", ()=>(0, _helpers.createCustomErrorClass));
parcelHelpers.export(exports, "addCustomErrorDeserializer", ()=>(0, _helpers.addCustomErrorDeserializer));
parcelHelpers.export(exports, "AccountNameRequiredError", ()=>AccountNameRequiredError);
parcelHelpers.export(exports, "AccountNotSupported", ()=>AccountNotSupported);
parcelHelpers.export(exports, "AmountRequired", ()=>AmountRequired);
parcelHelpers.export(exports, "BluetoothRequired", ()=>BluetoothRequired);
parcelHelpers.export(exports, "BtcUnmatchedApp", ()=>BtcUnmatchedApp);
parcelHelpers.export(exports, "CantOpenDevice", ()=>CantOpenDevice);
parcelHelpers.export(exports, "CashAddrNotSupported", ()=>CashAddrNotSupported);
parcelHelpers.export(exports, "ClaimRewardsFeesWarning", ()=>ClaimRewardsFeesWarning);
parcelHelpers.export(exports, "CurrencyNotSupported", ()=>CurrencyNotSupported);
parcelHelpers.export(exports, "DeviceAppVerifyNotSupported", ()=>DeviceAppVerifyNotSupported);
parcelHelpers.export(exports, "DeviceGenuineSocketEarlyClose", ()=>DeviceGenuineSocketEarlyClose);
parcelHelpers.export(exports, "DeviceNotGenuineError", ()=>DeviceNotGenuineError);
parcelHelpers.export(exports, "DeviceOnDashboardExpected", ()=>DeviceOnDashboardExpected);
parcelHelpers.export(exports, "DeviceOnDashboardUnexpected", ()=>DeviceOnDashboardUnexpected);
parcelHelpers.export(exports, "DeviceInOSUExpected", ()=>DeviceInOSUExpected);
parcelHelpers.export(exports, "DeviceHalted", ()=>DeviceHalted);
parcelHelpers.export(exports, "DeviceNameInvalid", ()=>DeviceNameInvalid);
parcelHelpers.export(exports, "DeviceSocketFail", ()=>DeviceSocketFail);
parcelHelpers.export(exports, "DeviceSocketNoBulkStatus", ()=>DeviceSocketNoBulkStatus);
parcelHelpers.export(exports, "DeviceNeedsRestart", ()=>DeviceNeedsRestart);
parcelHelpers.export(exports, "UnresponsiveDeviceError", ()=>UnresponsiveDeviceError);
parcelHelpers.export(exports, "DisconnectedDevice", ()=>DisconnectedDevice);
parcelHelpers.export(exports, "DisconnectedDeviceDuringOperation", ()=>DisconnectedDeviceDuringOperation);
parcelHelpers.export(exports, "DeviceExtractOnboardingStateError", ()=>DeviceExtractOnboardingStateError);
parcelHelpers.export(exports, "DeviceOnboardingStatePollingError", ()=>DeviceOnboardingStatePollingError);
parcelHelpers.export(exports, "EnpointConfigError", ()=>EnpointConfigError);
parcelHelpers.export(exports, "EthAppPleaseEnableContractData", ()=>EthAppPleaseEnableContractData);
parcelHelpers.export(exports, "FeeEstimationFailed", ()=>FeeEstimationFailed);
parcelHelpers.export(exports, "FirmwareNotRecognized", ()=>FirmwareNotRecognized);
parcelHelpers.export(exports, "HardResetFail", ()=>HardResetFail);
parcelHelpers.export(exports, "InvalidXRPTag", ()=>InvalidXRPTag);
parcelHelpers.export(exports, "InvalidAddress", ()=>InvalidAddress);
parcelHelpers.export(exports, "InvalidNonce", ()=>InvalidNonce);
parcelHelpers.export(exports, "InvalidAddressBecauseDestinationIsAlsoSource", ()=>InvalidAddressBecauseDestinationIsAlsoSource);
parcelHelpers.export(exports, "LatestMCUInstalledError", ()=>LatestMCUInstalledError);
parcelHelpers.export(exports, "UnknownMCU", ()=>UnknownMCU);
parcelHelpers.export(exports, "LedgerAPIError", ()=>LedgerAPIError);
parcelHelpers.export(exports, "LedgerAPIErrorWithMessage", ()=>LedgerAPIErrorWithMessage);
parcelHelpers.export(exports, "LedgerAPINotAvailable", ()=>LedgerAPINotAvailable);
parcelHelpers.export(exports, "ManagerAppAlreadyInstalledError", ()=>ManagerAppAlreadyInstalledError);
parcelHelpers.export(exports, "ManagerAppRelyOnBTCError", ()=>ManagerAppRelyOnBTCError);
parcelHelpers.export(exports, "ManagerAppDepInstallRequired", ()=>ManagerAppDepInstallRequired);
parcelHelpers.export(exports, "ManagerAppDepUninstallRequired", ()=>ManagerAppDepUninstallRequired);
parcelHelpers.export(exports, "ManagerDeviceLockedError", ()=>ManagerDeviceLockedError);
parcelHelpers.export(exports, "ManagerFirmwareNotEnoughSpaceError", ()=>ManagerFirmwareNotEnoughSpaceError);
parcelHelpers.export(exports, "ManagerNotEnoughSpaceError", ()=>ManagerNotEnoughSpaceError);
parcelHelpers.export(exports, "ManagerUninstallBTCDep", ()=>ManagerUninstallBTCDep);
parcelHelpers.export(exports, "NetworkDown", ()=>NetworkDown);
parcelHelpers.export(exports, "NetworkError", ()=>NetworkError);
parcelHelpers.export(exports, "NoAddressesFound", ()=>NoAddressesFound);
parcelHelpers.export(exports, "NotEnoughBalance", ()=>NotEnoughBalance);
parcelHelpers.export(exports, "NotEnoughBalanceToDelegate", ()=>NotEnoughBalanceToDelegate);
parcelHelpers.export(exports, "NotEnoughBalanceInParentAccount", ()=>NotEnoughBalanceInParentAccount);
parcelHelpers.export(exports, "NotEnoughSpendableBalance", ()=>NotEnoughSpendableBalance);
parcelHelpers.export(exports, "NotEnoughBalanceBecauseDestinationNotCreated", ()=>NotEnoughBalanceBecauseDestinationNotCreated);
parcelHelpers.export(exports, "NoAccessToCamera", ()=>NoAccessToCamera);
parcelHelpers.export(exports, "NotEnoughGas", ()=>NotEnoughGas);
parcelHelpers.export(exports, "NotEnoughGasSwap", ()=>NotEnoughGasSwap);
parcelHelpers.export(exports, "NotSupportedLegacyAddress", ()=>NotSupportedLegacyAddress);
parcelHelpers.export(exports, "GasLessThanEstimate", ()=>GasLessThanEstimate);
parcelHelpers.export(exports, "PriorityFeeTooLow", ()=>PriorityFeeTooLow);
parcelHelpers.export(exports, "PriorityFeeTooHigh", ()=>PriorityFeeTooHigh);
parcelHelpers.export(exports, "PriorityFeeHigherThanMaxFee", ()=>PriorityFeeHigherThanMaxFee);
parcelHelpers.export(exports, "MaxFeeTooLow", ()=>MaxFeeTooLow);
parcelHelpers.export(exports, "PasswordsDontMatchError", ()=>PasswordsDontMatchError);
parcelHelpers.export(exports, "PasswordIncorrectError", ()=>PasswordIncorrectError);
parcelHelpers.export(exports, "RecommendSubAccountsToEmpty", ()=>RecommendSubAccountsToEmpty);
parcelHelpers.export(exports, "RecommendUndelegation", ()=>RecommendUndelegation);
parcelHelpers.export(exports, "TimeoutTagged", ()=>TimeoutTagged);
parcelHelpers.export(exports, "UnexpectedBootloader", ()=>UnexpectedBootloader);
parcelHelpers.export(exports, "MCUNotGenuineToDashboard", ()=>MCUNotGenuineToDashboard);
parcelHelpers.export(exports, "RecipientRequired", ()=>RecipientRequired);
parcelHelpers.export(exports, "UnavailableTezosOriginatedAccountReceive", ()=>UnavailableTezosOriginatedAccountReceive);
parcelHelpers.export(exports, "UnavailableTezosOriginatedAccountSend", ()=>UnavailableTezosOriginatedAccountSend);
parcelHelpers.export(exports, "UpdateFetchFileFail", ()=>UpdateFetchFileFail);
parcelHelpers.export(exports, "UpdateIncorrectHash", ()=>UpdateIncorrectHash);
parcelHelpers.export(exports, "UpdateIncorrectSig", ()=>UpdateIncorrectSig);
parcelHelpers.export(exports, "UpdateYourApp", ()=>UpdateYourApp);
parcelHelpers.export(exports, "UserRefusedDeviceNameChange", ()=>UserRefusedDeviceNameChange);
parcelHelpers.export(exports, "UserRefusedAddress", ()=>UserRefusedAddress);
parcelHelpers.export(exports, "UserRefusedFirmwareUpdate", ()=>UserRefusedFirmwareUpdate);
parcelHelpers.export(exports, "UserRefusedAllowManager", ()=>UserRefusedAllowManager);
parcelHelpers.export(exports, "UserRefusedOnDevice", ()=>UserRefusedOnDevice);
parcelHelpers.export(exports, "ExpertModeRequired", ()=>ExpertModeRequired);
parcelHelpers.export(exports, "TransportOpenUserCancelled", ()=>TransportOpenUserCancelled);
parcelHelpers.export(exports, "TransportInterfaceNotAvailable", ()=>TransportInterfaceNotAvailable);
parcelHelpers.export(exports, "TransportPendingOperation", ()=>TransportPendingOperation);
parcelHelpers.export(exports, "TransportWebUSBGestureRequired", ()=>TransportWebUSBGestureRequired);
parcelHelpers.export(exports, "TransactionHasBeenValidatedError", ()=>TransactionHasBeenValidatedError);
parcelHelpers.export(exports, "TransportExchangeTimeoutError", ()=>TransportExchangeTimeoutError);
parcelHelpers.export(exports, "DeviceShouldStayInApp", ()=>DeviceShouldStayInApp);
parcelHelpers.export(exports, "WebsocketConnectionError", ()=>WebsocketConnectionError);
parcelHelpers.export(exports, "WebsocketConnectionFailed", ()=>WebsocketConnectionFailed);
parcelHelpers.export(exports, "WrongDeviceForAccount", ()=>WrongDeviceForAccount);
parcelHelpers.export(exports, "WrongDeviceForAccountPayout", ()=>WrongDeviceForAccountPayout);
parcelHelpers.export(exports, "WrongDeviceForAccountRefund", ()=>WrongDeviceForAccountRefund);
parcelHelpers.export(exports, "WrongAppForCurrency", ()=>WrongAppForCurrency);
parcelHelpers.export(exports, "ETHAddressNonEIP", ()=>ETHAddressNonEIP);
parcelHelpers.export(exports, "CantScanQRCode", ()=>CantScanQRCode);
parcelHelpers.export(exports, "FeeNotLoaded", ()=>FeeNotLoaded);
parcelHelpers.export(exports, "FeeNotLoadedSwap", ()=>FeeNotLoadedSwap);
parcelHelpers.export(exports, "FeeRequired", ()=>FeeRequired);
parcelHelpers.export(exports, "FeeTooHigh", ()=>FeeTooHigh);
parcelHelpers.export(exports, "PendingOperation", ()=>PendingOperation);
parcelHelpers.export(exports, "SyncError", ()=>SyncError);
parcelHelpers.export(exports, "PairingFailed", ()=>PairingFailed);
parcelHelpers.export(exports, "PeerRemovedPairing", ()=>PeerRemovedPairing);
parcelHelpers.export(exports, "GenuineCheckFailed", ()=>GenuineCheckFailed);
parcelHelpers.export(exports, "LedgerAPI4xx", ()=>LedgerAPI4xx);
parcelHelpers.export(exports, "LedgerAPI5xx", ()=>LedgerAPI5xx);
parcelHelpers.export(exports, "FirmwareOrAppUpdateRequired", ()=>FirmwareOrAppUpdateRequired);
parcelHelpers.export(exports, "ReplacementTransactionUnderpriced", ()=>ReplacementTransactionUnderpriced);
parcelHelpers.export(exports, "OpReturnDataSizeLimit", ()=>OpReturnDataSizeLimit);
parcelHelpers.export(exports, "DustLimit", ()=>DustLimit);
parcelHelpers.export(exports, "LanguageNotFound", ()=>LanguageNotFound);
parcelHelpers.export(exports, "NoDBPathGiven", ()=>NoDBPathGiven);
parcelHelpers.export(exports, "DBWrongPassword", ()=>DBWrongPassword);
parcelHelpers.export(exports, "DBNotReset", ()=>DBNotReset);
parcelHelpers.export(exports, "SequenceNumberError", ()=>SequenceNumberError);
parcelHelpers.export(exports, "DisabledTransactionBroadcastError", ()=>DisabledTransactionBroadcastError);
parcelHelpers.export(exports, "HwTransportErrorType", ()=>HwTransportErrorType);
/**
 * Represents an error coming from the usage of any Transport implementation.
 *
 * Needed to map a specific implementation error into an error that
 * can be managed by any code unaware of the specific Transport implementation
 * that was used.
 */ parcelHelpers.export(exports, "HwTransportError", ()=>HwTransportError);
/**
 * TransportError is used for any generic transport errors.
 * e.g. Error thrown when data received by exchanges are incorrect or if exchanged failed to communicate with the device for various reason.
 */ parcelHelpers.export(exports, "TransportError", ()=>TransportError);
parcelHelpers.export(exports, "StatusCodes", ()=>StatusCodes);
parcelHelpers.export(exports, "getAltStatusMessage", ()=>getAltStatusMessage);
/**
 * Error thrown when a device returned a non success status.
 * the error.statusCode is one of the `StatusCodes` exported by this library.
 */ parcelHelpers.export(exports, "TransportStatusError", ()=>TransportStatusError);
parcelHelpers.export(exports, "LockedDeviceError", ()=>LockedDeviceError);
var _helpers = require("./helpers");
const AccountNameRequiredError = (0, _helpers.createCustomErrorClass)("AccountNameRequired");
const AccountNotSupported = (0, _helpers.createCustomErrorClass)("AccountNotSupported");
const AmountRequired = (0, _helpers.createCustomErrorClass)("AmountRequired");
const BluetoothRequired = (0, _helpers.createCustomErrorClass)("BluetoothRequired");
const BtcUnmatchedApp = (0, _helpers.createCustomErrorClass)("BtcUnmatchedApp");
const CantOpenDevice = (0, _helpers.createCustomErrorClass)("CantOpenDevice");
const CashAddrNotSupported = (0, _helpers.createCustomErrorClass)("CashAddrNotSupported");
const ClaimRewardsFeesWarning = (0, _helpers.createCustomErrorClass)("ClaimRewardsFeesWarning");
const CurrencyNotSupported = (0, _helpers.createCustomErrorClass)("CurrencyNotSupported");
const DeviceAppVerifyNotSupported = (0, _helpers.createCustomErrorClass)("DeviceAppVerifyNotSupported");
const DeviceGenuineSocketEarlyClose = (0, _helpers.createCustomErrorClass)("DeviceGenuineSocketEarlyClose");
const DeviceNotGenuineError = (0, _helpers.createCustomErrorClass)("DeviceNotGenuine");
const DeviceOnDashboardExpected = (0, _helpers.createCustomErrorClass)("DeviceOnDashboardExpected");
const DeviceOnDashboardUnexpected = (0, _helpers.createCustomErrorClass)("DeviceOnDashboardUnexpected");
const DeviceInOSUExpected = (0, _helpers.createCustomErrorClass)("DeviceInOSUExpected");
const DeviceHalted = (0, _helpers.createCustomErrorClass)("DeviceHalted");
const DeviceNameInvalid = (0, _helpers.createCustomErrorClass)("DeviceNameInvalid");
const DeviceSocketFail = (0, _helpers.createCustomErrorClass)("DeviceSocketFail");
const DeviceSocketNoBulkStatus = (0, _helpers.createCustomErrorClass)("DeviceSocketNoBulkStatus");
const DeviceNeedsRestart = (0, _helpers.createCustomErrorClass)("DeviceSocketNoBulkStatus");
const UnresponsiveDeviceError = (0, _helpers.createCustomErrorClass)("UnresponsiveDeviceError");
const DisconnectedDevice = (0, _helpers.createCustomErrorClass)("DisconnectedDevice");
const DisconnectedDeviceDuringOperation = (0, _helpers.createCustomErrorClass)("DisconnectedDeviceDuringOperation");
const DeviceExtractOnboardingStateError = (0, _helpers.createCustomErrorClass)("DeviceExtractOnboardingStateError");
const DeviceOnboardingStatePollingError = (0, _helpers.createCustomErrorClass)("DeviceOnboardingStatePollingError");
const EnpointConfigError = (0, _helpers.createCustomErrorClass)("EnpointConfig");
const EthAppPleaseEnableContractData = (0, _helpers.createCustomErrorClass)("EthAppPleaseEnableContractData");
const FeeEstimationFailed = (0, _helpers.createCustomErrorClass)("FeeEstimationFailed");
const FirmwareNotRecognized = (0, _helpers.createCustomErrorClass)("FirmwareNotRecognized");
const HardResetFail = (0, _helpers.createCustomErrorClass)("HardResetFail");
const InvalidXRPTag = (0, _helpers.createCustomErrorClass)("InvalidXRPTag");
const InvalidAddress = (0, _helpers.createCustomErrorClass)("InvalidAddress");
const InvalidNonce = (0, _helpers.createCustomErrorClass)("InvalidNonce");
const InvalidAddressBecauseDestinationIsAlsoSource = (0, _helpers.createCustomErrorClass)("InvalidAddressBecauseDestinationIsAlsoSource");
const LatestMCUInstalledError = (0, _helpers.createCustomErrorClass)("LatestMCUInstalledError");
const UnknownMCU = (0, _helpers.createCustomErrorClass)("UnknownMCU");
const LedgerAPIError = (0, _helpers.createCustomErrorClass)("LedgerAPIError");
const LedgerAPIErrorWithMessage = (0, _helpers.createCustomErrorClass)("LedgerAPIErrorWithMessage");
const LedgerAPINotAvailable = (0, _helpers.createCustomErrorClass)("LedgerAPINotAvailable");
const ManagerAppAlreadyInstalledError = (0, _helpers.createCustomErrorClass)("ManagerAppAlreadyInstalled");
const ManagerAppRelyOnBTCError = (0, _helpers.createCustomErrorClass)("ManagerAppRelyOnBTC");
const ManagerAppDepInstallRequired = (0, _helpers.createCustomErrorClass)("ManagerAppDepInstallRequired");
const ManagerAppDepUninstallRequired = (0, _helpers.createCustomErrorClass)("ManagerAppDepUninstallRequired");
const ManagerDeviceLockedError = (0, _helpers.createCustomErrorClass)("ManagerDeviceLocked");
const ManagerFirmwareNotEnoughSpaceError = (0, _helpers.createCustomErrorClass)("ManagerFirmwareNotEnoughSpace");
const ManagerNotEnoughSpaceError = (0, _helpers.createCustomErrorClass)("ManagerNotEnoughSpace");
const ManagerUninstallBTCDep = (0, _helpers.createCustomErrorClass)("ManagerUninstallBTCDep");
const NetworkDown = (0, _helpers.createCustomErrorClass)("NetworkDown");
const NetworkError = (0, _helpers.createCustomErrorClass)("NetworkError");
const NoAddressesFound = (0, _helpers.createCustomErrorClass)("NoAddressesFound");
const NotEnoughBalance = (0, _helpers.createCustomErrorClass)("NotEnoughBalance");
const NotEnoughBalanceToDelegate = (0, _helpers.createCustomErrorClass)("NotEnoughBalanceToDelegate");
const NotEnoughBalanceInParentAccount = (0, _helpers.createCustomErrorClass)("NotEnoughBalanceInParentAccount");
const NotEnoughSpendableBalance = (0, _helpers.createCustomErrorClass)("NotEnoughSpendableBalance");
const NotEnoughBalanceBecauseDestinationNotCreated = (0, _helpers.createCustomErrorClass)("NotEnoughBalanceBecauseDestinationNotCreated");
const NoAccessToCamera = (0, _helpers.createCustomErrorClass)("NoAccessToCamera");
const NotEnoughGas = (0, _helpers.createCustomErrorClass)("NotEnoughGas");
const NotEnoughGasSwap = (0, _helpers.createCustomErrorClass)("NotEnoughGasSwap");
const NotSupportedLegacyAddress = (0, _helpers.createCustomErrorClass)("NotSupportedLegacyAddress");
const GasLessThanEstimate = (0, _helpers.createCustomErrorClass)("GasLessThanEstimate");
const PriorityFeeTooLow = (0, _helpers.createCustomErrorClass)("PriorityFeeTooLow");
const PriorityFeeTooHigh = (0, _helpers.createCustomErrorClass)("PriorityFeeTooHigh");
const PriorityFeeHigherThanMaxFee = (0, _helpers.createCustomErrorClass)("PriorityFeeHigherThanMaxFee");
const MaxFeeTooLow = (0, _helpers.createCustomErrorClass)("MaxFeeTooLow");
const PasswordsDontMatchError = (0, _helpers.createCustomErrorClass)("PasswordsDontMatch");
const PasswordIncorrectError = (0, _helpers.createCustomErrorClass)("PasswordIncorrect");
const RecommendSubAccountsToEmpty = (0, _helpers.createCustomErrorClass)("RecommendSubAccountsToEmpty");
const RecommendUndelegation = (0, _helpers.createCustomErrorClass)("RecommendUndelegation");
const TimeoutTagged = (0, _helpers.createCustomErrorClass)("TimeoutTagged");
const UnexpectedBootloader = (0, _helpers.createCustomErrorClass)("UnexpectedBootloader");
const MCUNotGenuineToDashboard = (0, _helpers.createCustomErrorClass)("MCUNotGenuineToDashboard");
const RecipientRequired = (0, _helpers.createCustomErrorClass)("RecipientRequired");
const UnavailableTezosOriginatedAccountReceive = (0, _helpers.createCustomErrorClass)("UnavailableTezosOriginatedAccountReceive");
const UnavailableTezosOriginatedAccountSend = (0, _helpers.createCustomErrorClass)("UnavailableTezosOriginatedAccountSend");
const UpdateFetchFileFail = (0, _helpers.createCustomErrorClass)("UpdateFetchFileFail");
const UpdateIncorrectHash = (0, _helpers.createCustomErrorClass)("UpdateIncorrectHash");
const UpdateIncorrectSig = (0, _helpers.createCustomErrorClass)("UpdateIncorrectSig");
const UpdateYourApp = (0, _helpers.createCustomErrorClass)("UpdateYourApp");
const UserRefusedDeviceNameChange = (0, _helpers.createCustomErrorClass)("UserRefusedDeviceNameChange");
const UserRefusedAddress = (0, _helpers.createCustomErrorClass)("UserRefusedAddress");
const UserRefusedFirmwareUpdate = (0, _helpers.createCustomErrorClass)("UserRefusedFirmwareUpdate");
const UserRefusedAllowManager = (0, _helpers.createCustomErrorClass)("UserRefusedAllowManager");
const UserRefusedOnDevice = (0, _helpers.createCustomErrorClass)("UserRefusedOnDevice"); // TODO rename because it's just for transaction refusal
const ExpertModeRequired = (0, _helpers.createCustomErrorClass)("ExpertModeRequired");
const TransportOpenUserCancelled = (0, _helpers.createCustomErrorClass)("TransportOpenUserCancelled");
const TransportInterfaceNotAvailable = (0, _helpers.createCustomErrorClass)("TransportInterfaceNotAvailable");
const TransportPendingOperation = (0, _helpers.createCustomErrorClass)("TransportPendingOperation");
const TransportWebUSBGestureRequired = (0, _helpers.createCustomErrorClass)("TransportWebUSBGestureRequired");
const TransactionHasBeenValidatedError = (0, _helpers.createCustomErrorClass)("TransactionHasBeenValidatedError");
const TransportExchangeTimeoutError = (0, _helpers.createCustomErrorClass)("TransportExchangeTimeoutError");
const DeviceShouldStayInApp = (0, _helpers.createCustomErrorClass)("DeviceShouldStayInApp");
const WebsocketConnectionError = (0, _helpers.createCustomErrorClass)("WebsocketConnectionError");
const WebsocketConnectionFailed = (0, _helpers.createCustomErrorClass)("WebsocketConnectionFailed");
const WrongDeviceForAccount = (0, _helpers.createCustomErrorClass)("WrongDeviceForAccount");
const WrongDeviceForAccountPayout = (0, _helpers.createCustomErrorClass)("WrongDeviceForAccountPayout");
const WrongDeviceForAccountRefund = (0, _helpers.createCustomErrorClass)("WrongDeviceForAccountRefund");
const WrongAppForCurrency = (0, _helpers.createCustomErrorClass)("WrongAppForCurrency");
const ETHAddressNonEIP = (0, _helpers.createCustomErrorClass)("ETHAddressNonEIP");
const CantScanQRCode = (0, _helpers.createCustomErrorClass)("CantScanQRCode");
const FeeNotLoaded = (0, _helpers.createCustomErrorClass)("FeeNotLoaded");
const FeeNotLoadedSwap = (0, _helpers.createCustomErrorClass)("FeeNotLoadedSwap");
const FeeRequired = (0, _helpers.createCustomErrorClass)("FeeRequired");
const FeeTooHigh = (0, _helpers.createCustomErrorClass)("FeeTooHigh");
const PendingOperation = (0, _helpers.createCustomErrorClass)("PendingOperation");
const SyncError = (0, _helpers.createCustomErrorClass)("SyncError");
const PairingFailed = (0, _helpers.createCustomErrorClass)("PairingFailed");
const PeerRemovedPairing = (0, _helpers.createCustomErrorClass)("PeerRemovedPairing");
const GenuineCheckFailed = (0, _helpers.createCustomErrorClass)("GenuineCheckFailed");
const LedgerAPI4xx = (0, _helpers.createCustomErrorClass)("LedgerAPI4xx");
const LedgerAPI5xx = (0, _helpers.createCustomErrorClass)("LedgerAPI5xx");
const FirmwareOrAppUpdateRequired = (0, _helpers.createCustomErrorClass)("FirmwareOrAppUpdateRequired");
const ReplacementTransactionUnderpriced = (0, _helpers.createCustomErrorClass)("ReplacementTransactionUnderpriced");
const OpReturnDataSizeLimit = (0, _helpers.createCustomErrorClass)("OpReturnSizeLimit");
const DustLimit = (0, _helpers.createCustomErrorClass)("DustLimit");
const LanguageNotFound = (0, _helpers.createCustomErrorClass)("LanguageNotFound");
const NoDBPathGiven = (0, _helpers.createCustomErrorClass)("NoDBPathGiven");
const DBWrongPassword = (0, _helpers.createCustomErrorClass)("DBWrongPassword");
const DBNotReset = (0, _helpers.createCustomErrorClass)("DBNotReset");
const SequenceNumberError = (0, _helpers.createCustomErrorClass)("SequenceNumberError");
const DisabledTransactionBroadcastError = (0, _helpers.createCustomErrorClass)("DisabledTransactionBroadcastError");
var HwTransportErrorType;
(function(HwTransportErrorType) {
    HwTransportErrorType["Unknown"] = "Unknown";
    HwTransportErrorType["LocationServicesDisabled"] = "LocationServicesDisabled";
    HwTransportErrorType["LocationServicesUnauthorized"] = "LocationServicesUnauthorized";
    HwTransportErrorType["BluetoothScanStartFailed"] = "BluetoothScanStartFailed";
})(HwTransportErrorType || (HwTransportErrorType = {}));
class HwTransportError extends Error {
    constructor(type, message){
        super(message);
        this.name = "HwTransportError";
        this.type = type;
        // Needed as long as we target < ES6
        Object.setPrototypeOf(this, HwTransportError.prototype);
    }
}
class TransportError extends Error {
    constructor(message, id){
        const name = "TransportError";
        super(message || name);
        this.name = name;
        this.message = message;
        this.stack = new Error(message).stack;
        this.id = id;
    }
}
(0, _helpers.addCustomErrorDeserializer)("TransportError", (e)=>new TransportError(e.message, e.id));
const StatusCodes = {
    ACCESS_CONDITION_NOT_FULFILLED: 0x9804,
    ALGORITHM_NOT_SUPPORTED: 0x9484,
    CLA_NOT_SUPPORTED: 0x6e00,
    CODE_BLOCKED: 0x9840,
    CODE_NOT_INITIALIZED: 0x9802,
    COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 0x6981,
    CONDITIONS_OF_USE_NOT_SATISFIED: 0x6985,
    CONTRADICTION_INVALIDATION: 0x9810,
    CONTRADICTION_SECRET_CODE_STATUS: 0x9808,
    CUSTOM_IMAGE_BOOTLOADER: 0x662f,
    CUSTOM_IMAGE_EMPTY: 0x662e,
    FILE_ALREADY_EXISTS: 0x6a89,
    FILE_NOT_FOUND: 0x9404,
    GP_AUTH_FAILED: 0x6300,
    HALTED: 0x6faa,
    INCONSISTENT_FILE: 0x9408,
    INCORRECT_DATA: 0x6a80,
    INCORRECT_LENGTH: 0x6700,
    INCORRECT_P1_P2: 0x6b00,
    INS_NOT_SUPPORTED: 0x6d00,
    DEVICE_NOT_ONBOARDED: 0x6d07,
    DEVICE_NOT_ONBOARDED_2: 0x6611,
    INVALID_KCV: 0x9485,
    INVALID_OFFSET: 0x9402,
    LICENSING: 0x6f42,
    LOCKED_DEVICE: 0x5515,
    MAX_VALUE_REACHED: 0x9850,
    MEMORY_PROBLEM: 0x9240,
    MISSING_CRITICAL_PARAMETER: 0x6800,
    NO_EF_SELECTED: 0x9400,
    NOT_ENOUGH_MEMORY_SPACE: 0x6a84,
    OK: 0x9000,
    PIN_REMAINING_ATTEMPTS: 0x63c0,
    REFERENCED_DATA_NOT_FOUND: 0x6a88,
    SECURITY_STATUS_NOT_SATISFIED: 0x6982,
    TECHNICAL_PROBLEM: 0x6f00,
    UNKNOWN_APDU: 0x6d02,
    USER_REFUSED_ON_DEVICE: 0x5501,
    NOT_ENOUGH_SPACE: 0x5102
};
function getAltStatusMessage(code) {
    switch(code){
        // improve text of most common errors
        case 0x6700:
            return "Incorrect length";
        case 0x6800:
            return "Missing critical parameter";
        case 0x6982:
            return "Security not satisfied (dongle locked or have invalid access rights)";
        case 0x6985:
            return "Condition of use not satisfied (denied by the user?)";
        case 0x6a80:
            return "Invalid data received";
        case 0x6b00:
            return "Invalid parameter received";
        case 0x5515:
            return "Locked device";
    }
    if (0x6f00 <= code && code <= 0x6fff) return "Internal error, please report";
}
class TransportStatusError extends Error {
    /**
     * @param statusCode The error status code coming from a Transport implementation
     * @param options containing:
     *  - canBeMappedToChildError: enable the mapping of TransportStatusError to an error extending/inheriting from it
     *  . Ex: LockedDeviceError. Default to true.
     */ constructor(statusCode, { canBeMappedToChildError = true } = {}){
        const statusText = Object.keys(StatusCodes).find((k)=>StatusCodes[k] === statusCode) || "UNKNOWN_ERROR";
        const smsg = getAltStatusMessage(statusCode) || statusText;
        const statusCodeStr = statusCode.toString(16);
        const message = `Ledger device: ${smsg} (0x${statusCodeStr})`;
        super(message);
        this.name = "TransportStatusError";
        this.statusCode = statusCode;
        this.statusText = statusText;
        Object.setPrototypeOf(this, TransportStatusError.prototype);
        // Maps to a LockedDeviceError
        if (canBeMappedToChildError && statusCode === StatusCodes.LOCKED_DEVICE) return new LockedDeviceError(message);
    }
}
class LockedDeviceError extends TransportStatusError {
    constructor(message){
        super(StatusCodes.LOCKED_DEVICE, {
            canBeMappedToChildError: false
        });
        if (message) this.message = message;
        this.name = "LockedDeviceError";
        Object.setPrototypeOf(this, LockedDeviceError.prototype);
    }
}
(0, _helpers.addCustomErrorDeserializer)("TransportStatusError", (e)=>new TransportStatusError(e.statusCode));

},{"./helpers":"blDCg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"blDCg":[function(require,module,exports) {
/* eslint-disable no-continue */ /* eslint-disable no-unused-vars */ /* eslint-disable no-param-reassign */ /* eslint-disable no-prototype-builtins */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addCustomErrorDeserializer", ()=>addCustomErrorDeserializer);
parcelHelpers.export(exports, "createCustomErrorClass", ()=>createCustomErrorClass);
parcelHelpers.export(exports, "deserializeError", ()=>deserializeError);
parcelHelpers.export(exports, "serializeError", ()=>serializeError);
const errorClasses = {};
const deserializers = {};
const addCustomErrorDeserializer = (name, deserializer)=>{
    deserializers[name] = deserializer;
};
const createCustomErrorClass = (name)=>{
    class CustomErrorClass extends Error {
        constructor(message, fields, options){
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            super(message || name, options);
            // Set the prototype explicitly. See https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
            Object.setPrototypeOf(this, CustomErrorClass.prototype);
            this.name = name;
            if (fields) for(const k in fields)// eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this[k] = fields[k];
            if (options && isObject(options) && "cause" in options && !("cause" in this)) {
                // .cause was specified but the superconstructor
                // did not create an instance property.
                const cause = options.cause;
                this.cause = cause;
                if ("stack" in cause) this.stack = this.stack + "\nCAUSE: " + cause.stack;
            }
        }
    }
    errorClasses[name] = CustomErrorClass;
    return CustomErrorClass;
};
function isObject(value) {
    return typeof value === "object";
}
const deserializeError = (object)=>{
    if (object && typeof object === "object") {
        try {
            if (typeof object.message === "string") {
                const msg = JSON.parse(object.message);
                if (msg.message && msg.name) object = msg;
            }
        } catch (e) {
        // nothing
        }
        let error;
        if (typeof object.name === "string") {
            const { name } = object;
            const des = deserializers[name];
            if (des) error = des(object);
            else {
                let constructor = name === "Error" ? Error : errorClasses[name];
                if (!constructor) {
                    console.warn("deserializing an unknown class '" + name + "'");
                    constructor = createCustomErrorClass(name);
                }
                error = Object.create(constructor.prototype);
                try {
                    for(const prop in object)if (object.hasOwnProperty(prop)) error[prop] = object[prop];
                } catch (e) {
                // sometimes setting a property can fail (e.g. .name)
                }
            }
        } else if (typeof object.message === "string") error = new Error(object.message);
        if (error && !error.stack && Error.captureStackTrace) Error.captureStackTrace(error, deserializeError);
        return error;
    }
    return new Error(String(object));
};
const serializeError = (value)=>{
    if (!value) return value;
    if (typeof value === "object") return destroyCircular(value, []);
    if (typeof value === "function") return `[Function: ${value.name || "anonymous"}]`;
    return value;
};
// https://www.npmjs.com/package/destroy-circular
function destroyCircular(from, seen) {
    const to = {};
    seen.push(from);
    for (const key of Object.keys(from)){
        const value = from[key];
        if (typeof value === "function") continue;
        if (!value || typeof value !== "object") {
            to[key] = value;
            continue;
        }
        if (seen.indexOf(from[key]) === -1) {
            to[key] = destroyCircular(from[key], seen.slice(0));
            continue;
        }
        to[key] = "[Circular]";
    }
    if (typeof from.name === "string") to.name = from.name;
    if (typeof from.message === "string") to.message = from.message;
    if (typeof from.stack === "string") to.stack = from.stack;
    return to;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3BsQA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _errors = require("@ledgerhq/errors");
var Buffer = require("ebb2a684f25c5c57").Buffer;
const Tag = 0x05;
function asUInt16BE(value) {
    const b = Buffer.alloc(2);
    b.writeUInt16BE(value, 0);
    return b;
}
const initialAcc = {
    data: Buffer.alloc(0),
    dataLength: 0,
    sequence: 0
};
/**
 * Object to handle HID frames (encoding and decoding)
 *
 * @param channel
 * @param packetSize The HID protocol packet size in bytes (usually 64)
 */ const createHIDframing = (channel, packetSize)=>{
    return {
        /**
         * Frames/encodes an APDU message into HID USB packets/frames
         *
         * @param apdu The APDU message to send, in a Buffer containing [cla, ins, p1, p2, data length, data(if not empty)]
         * @returns an array of HID USB frames ready to be sent
         */ makeBlocks (apdu) {
            // Encodes the APDU length in 2 bytes before the APDU itself.
            // The length is measured as the number of bytes.
            // As the size of the APDU `data` should have been added in 1 byte just before `data`,
            // the minimum size of an APDU is 5 bytes.
            let data = Buffer.concat([
                asUInt16BE(apdu.length),
                apdu
            ]);
            const blockSize = packetSize - 5;
            const nbBlocks = Math.ceil(data.length / blockSize);
            // Fills data with 0-padding
            data = Buffer.concat([
                data,
                Buffer.alloc(nbBlocks * blockSize - data.length + 1).fill(0)
            ]);
            const blocks = [];
            for(let i = 0; i < nbBlocks; i++){
                const head = Buffer.alloc(5);
                head.writeUInt16BE(channel, 0);
                head.writeUInt8(Tag, 2);
                head.writeUInt16BE(i, 3);
                // `slice` and not `subarray`: this might not be a Node Buffer, but probably only a Uint8Array
                const chunk = data.slice(i * blockSize, (i + 1) * blockSize);
                blocks.push(Buffer.concat([
                    head,
                    chunk
                ]));
            }
            return blocks;
        },
        /**
         * Reduces HID USB packets/frames to one response.
         *
         * @param acc The value resulting from (accumulating) the previous call of reduceResponse.
         *   On first call initialized to `initialAcc`. The accumulator enables handling multi-frames messages.
         * @param chunk Current chunk to reduce into accumulator
         * @returns An accumulator value updated with the current chunk
         */ reduceResponse (acc, chunk) {
            let { data, dataLength, sequence } = acc || initialAcc;
            if (chunk.readUInt16BE(0) !== channel) throw new (0, _errors.TransportError)("Invalid channel", "InvalidChannel");
            if (chunk.readUInt8(2) !== Tag) throw new (0, _errors.TransportError)("Invalid tag", "InvalidTag");
            if (chunk.readUInt16BE(3) !== sequence) throw new (0, _errors.TransportError)("Invalid sequence", "InvalidSequence");
            // Gets the total length of the response from the 1st frame
            if (!acc) dataLength = chunk.readUInt16BE(5);
            sequence++;
            // The total length on the 1st frame takes 2 more bytes
            const chunkData = chunk.slice(acc ? 5 : 7);
            data = Buffer.concat([
                data,
                chunkData
            ]);
            // Removes any 0 padding
            if (data.length > dataLength) data = data.slice(0, dataLength);
            return {
                data,
                dataLength,
                sequence
            };
        },
        /**
         * Returns the response message that has been reduced from the HID USB frames
         *
         * @param acc The accumulator
         * @returns A Buffer containing the cleaned response message, or null if no response message, or undefined if the
         *   accumulator is incorrect (message length is not valid)
         */ getReducedResult (acc) {
            if (acc && acc.dataLength === acc.data.length) return acc.data;
        }
    };
};
exports.default = createHIDframing;

},{"ebb2a684f25c5c57":"fCgem","@ledgerhq/errors":"EVZMy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fnHxP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IIGenericHID", ()=>IIGenericHID);
parcelHelpers.export(exports, "IIKeyboardHID", ()=>IIKeyboardHID);
parcelHelpers.export(exports, "IIU2F", ()=>IIU2F);
parcelHelpers.export(exports, "IICCID", ()=>IICCID);
parcelHelpers.export(exports, "IIWebUSB", ()=>IIWebUSB);
parcelHelpers.export(exports, "DeviceModelId", ()=>DeviceModelId);
parcelHelpers.export(exports, "ledgerUSBVendorId", ()=>ledgerUSBVendorId);
parcelHelpers.export(exports, "getDeviceModel", ()=>getDeviceModel);
parcelHelpers.export(exports, "identifyTargetId", ()=>identifyTargetId);
parcelHelpers.export(exports, "identifyUSBProductId", ()=>identifyUSBProductId);
parcelHelpers.export(exports, "identifyProductName", ()=>identifyProductName);
parcelHelpers.export(exports, "getBluetoothServiceUuids", ()=>getBluetoothServiceUuids);
parcelHelpers.export(exports, "getInfosForServiceUuid", ()=>getInfosForServiceUuid);
var _semver = require("semver");
var _semverDefault = parcelHelpers.interopDefault(_semver);
const IIGenericHID = 0x01;
const IIKeyboardHID = 0x02;
const IIU2F = 0x04;
const IICCID = 0x08;
const IIWebUSB = 0x10;
var DeviceModelId;
(function(DeviceModelId) {
    DeviceModelId["blue"] = "blue";
    DeviceModelId["nanoS"] = "nanoS";
    DeviceModelId["nanoSP"] = "nanoSP";
    DeviceModelId["nanoX"] = "nanoX";
    DeviceModelId["stax"] = "stax";
    DeviceModelId["europa"] = "europa";
})(DeviceModelId || (DeviceModelId = {}));
const devices = {
    [DeviceModelId.blue]: {
        id: DeviceModelId.blue,
        productName: "Ledger\xa0Blue",
        productIdMM: 0x00,
        legacyUsbProductId: 0x0000,
        usbOnly: true,
        memorySize: 491520,
        masks: [
            0x31000000,
            0x31010000
        ],
        getBlockSize: (_firwareVersion)=>4096
    },
    [DeviceModelId.nanoS]: {
        id: DeviceModelId.nanoS,
        productName: "Ledger\xa0Nano\xa0S",
        productIdMM: 0x10,
        legacyUsbProductId: 0x0001,
        usbOnly: true,
        memorySize: 327680,
        masks: [
            0x31100000
        ],
        getBlockSize: (firmwareVersion)=>{
            var _a;
            return (0, _semverDefault.default).lt((_a = (0, _semverDefault.default).coerce(firmwareVersion)) !== null && _a !== void 0 ? _a : "", "2.0.0") ? 4096 : 2048;
        }
    },
    [DeviceModelId.nanoX]: {
        id: DeviceModelId.nanoX,
        productName: "Ledger\xa0Nano\xa0X",
        productIdMM: 0x40,
        legacyUsbProductId: 0x0004,
        usbOnly: false,
        memorySize: 2097152,
        masks: [
            0x33000000
        ],
        getBlockSize: (_firwareVersion)=>4096,
        bluetoothSpec: [
            {
                serviceUuid: "13d63400-2c97-0004-0000-4c6564676572",
                notifyUuid: "13d63400-2c97-0004-0001-4c6564676572",
                writeUuid: "13d63400-2c97-0004-0002-4c6564676572",
                writeCmdUuid: "13d63400-2c97-0004-0003-4c6564676572"
            }
        ]
    },
    [DeviceModelId.nanoSP]: {
        id: DeviceModelId.nanoSP,
        productName: "Ledger Nano S Plus",
        productIdMM: 0x50,
        legacyUsbProductId: 0x0005,
        usbOnly: true,
        memorySize: 1569792,
        masks: [
            0x33100000
        ],
        getBlockSize: (_firmwareVersion)=>32
    },
    [DeviceModelId.stax]: {
        id: DeviceModelId.stax,
        productName: "Ledger\xa0Stax",
        productIdMM: 0x60,
        legacyUsbProductId: 0x0006,
        usbOnly: false,
        memorySize: 1569792,
        masks: [
            0x33200000
        ],
        getBlockSize: (_firmwareVersion)=>32,
        bluetoothSpec: [
            {
                serviceUuid: "13d63400-2c97-6004-0000-4c6564676572",
                notifyUuid: "13d63400-2c97-6004-0001-4c6564676572",
                writeUuid: "13d63400-2c97-6004-0002-4c6564676572",
                writeCmdUuid: "13d63400-2c97-6004-0003-4c6564676572"
            }
        ]
    },
    [DeviceModelId.europa]: {
        id: DeviceModelId.europa,
        productName: "Ledger Europa",
        productIdMM: 0x70,
        legacyUsbProductId: 0x0007,
        usbOnly: false,
        memorySize: 1569792,
        masks: [
            0x33300000
        ],
        getBlockSize: (_firmwareVersion)=>32,
        bluetoothSpec: [
            {
                serviceUuid: "13d63400-2c97-3004-0000-4c6564676572",
                notifyUuid: "13d63400-2c97-3004-0001-4c6564676572",
                writeUuid: "13d63400-2c97-3004-0002-4c6564676572",
                writeCmdUuid: "13d63400-2c97-3004-0003-4c6564676572"
            }
        ]
    }
};
const productMap = {
    Blue: DeviceModelId.blue,
    "Nano S": DeviceModelId.nanoS,
    "Nano S Plus": DeviceModelId.nanoSP,
    "Nano X": DeviceModelId.nanoX,
    Stax: DeviceModelId.stax,
    Europa: DeviceModelId.europa
};
const devicesList = Object.values(devices);
const ledgerUSBVendorId = 0x2c97;
const getDeviceModel = (id)=>{
    const info = devices[id];
    if (!info) throw new Error("device '" + id + "' does not exist");
    return info;
};
const identifyTargetId = (targetId)=>{
    const deviceModel = devicesList.find(({ masks })=>masks.find((mask)=>(targetId & 0xffff0000) === mask));
    return deviceModel;
};
const identifyUSBProductId = (usbProductId)=>{
    const legacy = devicesList.find((d)=>d.legacyUsbProductId === usbProductId);
    if (legacy) return legacy;
    const mm = usbProductId >> 8;
    const deviceModel = devicesList.find((d)=>d.productIdMM === mm);
    return deviceModel;
};
const identifyProductName = (productName)=>{
    const deviceModel = devicesList.find((d)=>d.id === productMap[productName]);
    return deviceModel;
};
const bluetoothServices = [];
const serviceUuidToInfos = {};
for(const id in devices){
    const deviceModel = devices[id];
    const { bluetoothSpec } = deviceModel;
    if (bluetoothSpec) for(let i = 0; i < bluetoothSpec.length; i++){
        const spec = bluetoothSpec[i];
        bluetoothServices.push(spec.serviceUuid);
        serviceUuidToInfos[spec.serviceUuid] = serviceUuidToInfos[spec.serviceUuid.replace(/-/g, "")] = Object.assign({
            deviceModel
        }, spec);
    }
}
const getBluetoothServiceUuids = ()=>bluetoothServices;
const getInfosForServiceUuid = (uuid)=>serviceUuidToInfos[uuid.toLowerCase()];

},{"semver":"1bOrY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1bOrY":[function(require,module,exports) {
// just pre-load all the stuff that index.js lazily exports
const internalRe = require("f303acc93861989e");
const constants = require("c00555cf5ee287b3");
const SemVer = require("694b186f848ac7c6");
const identifiers = require("5b90ff1a54ecd364");
const parse = require("8005f7b2b343fdfa");
const valid = require("d8e3073ded361931");
const clean = require("907bdd461dea5cf5");
const inc = require("c4e13e4935d9bdbe");
const diff = require("1340da654bd81c39");
const major = require("a69e598153f09e70");
const minor = require("ce9006e183bb9380");
const patch = require("ab3ccb798d03ef13");
const prerelease = require("7fc09b445e082ce");
const compare = require("5b5c1ac10f692046");
const rcompare = require("b189e26ea8a12118");
const compareLoose = require("b0be4d6d20d43d6d");
const compareBuild = require("6fbf6f8ffd60d041");
const sort = require("14c130f49f154257");
const rsort = require("6805ac2ada26659c");
const gt = require("4f9f206fccf2e0f7");
const lt = require("c1179b1780cd1639");
const eq = require("31e3538960d51b95");
const neq = require("b48f205bbd3e3887");
const gte = require("ba62d2a5e0567155");
const lte = require("e2e57074fa66f4");
const cmp = require("70fc8f2125dc2c45");
const coerce = require("5ed8809cab388f7f");
const Comparator = require("eae100b492dbd10f");
const Range = require("dadefc9b4d222087");
const satisfies = require("b9a5094da9aa21be");
const toComparators = require("b8adc53d08c12be0");
const maxSatisfying = require("ec6423a9459e56bb");
const minSatisfying = require("b1307608f7e6d49e");
const minVersion = require("47b0044789e9342d");
const validRange = require("702b3c6496f98b43");
const outside = require("b7130d2177c4a04f");
const gtr = require("e5e6eb80fe4b73ac");
const ltr = require("ceca413f11fd0847");
const intersects = require("1bb0fc4e19df1dce");
const simplifyRange = require("5bbac9dc022cfcc5");
const subset = require("2a4e38896e73f236");
module.exports = {
    parse,
    valid,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants.RELEASE_TYPES,
    compareIdentifiers: identifiers.compareIdentifiers,
    rcompareIdentifiers: identifiers.rcompareIdentifiers
};

},{"f303acc93861989e":"fM3gb","c00555cf5ee287b3":"36kox","694b186f848ac7c6":"kgTdE","5b90ff1a54ecd364":"gfu2O","8005f7b2b343fdfa":"gcpPf","d8e3073ded361931":"gWiRZ","907bdd461dea5cf5":"aiTKa","c4e13e4935d9bdbe":"aJfKw","1340da654bd81c39":"4hrxk","a69e598153f09e70":"8P6hj","ce9006e183bb9380":"jpEiD","ab3ccb798d03ef13":"9pRhW","7fc09b445e082ce":"luzbM","5b5c1ac10f692046":"1VfgV","b189e26ea8a12118":"cgrtc","b0be4d6d20d43d6d":"Q3pnc","6fbf6f8ffd60d041":"eYE5A","14c130f49f154257":"8TvEb","6805ac2ada26659c":"4isEq","4f9f206fccf2e0f7":"h68v7","c1179b1780cd1639":"6ucE6","31e3538960d51b95":"k1aRj","b48f205bbd3e3887":"7Y3tc","ba62d2a5e0567155":"ehmrd","e2e57074fa66f4":"2J3QH","70fc8f2125dc2c45":"1k1O9","5ed8809cab388f7f":"iXNTl","eae100b492dbd10f":"5Yodu","dadefc9b4d222087":"f4j9g","b9a5094da9aa21be":"7OcsV","b8adc53d08c12be0":"iR5Mh","ec6423a9459e56bb":"jPYT1","b1307608f7e6d49e":"juckF","47b0044789e9342d":"5VviM","702b3c6496f98b43":"d8BN4","b7130d2177c4a04f":"jz7Jf","e5e6eb80fe4b73ac":"kboF2","ceca413f11fd0847":"4bUsl","1bb0fc4e19df1dce":"hpFPQ","5bbac9dc022cfcc5":"kb0TI","2a4e38896e73f236":"lNExW"}],"fM3gb":[function(require,module,exports) {
const { MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_LENGTH } = require("d0acc9ab4292c946");
const debug = require("a395ac4a980f619e");
exports = module.exports = {};
// The actual regexps go on exports.re
const re = exports.re = [];
const safeRe = exports.safeRe = [];
const src = exports.src = [];
const t = exports.t = {};
let R = 0;
const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
// Replace some greedy regex tokens to prevent regex dos issues. These regex are
// used internally via the safeRe object since all inputs in this library get
// normalized first to trim and collapse all extra whitespace. The original
// regexes are exported for userland consumption and lower level usage. A
// future breaking change could export the safer regex only with a note that
// all input should have extra whitespace removed.
const safeRegexReplacements = [
    [
        "\\s",
        1
    ],
    [
        "\\d",
        MAX_LENGTH
    ],
    [
        LETTERDASHNUMBER,
        MAX_SAFE_BUILD_LENGTH
    ]
];
const makeSafeRegex = (value)=>{
    for (const [token, max] of safeRegexReplacements)value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
    return value;
};
const createToken = (name, value, isGlobal)=>{
    const safe = makeSafeRegex(value);
    const index = R++;
    debug(name, index, value);
    t[name] = index;
    src[index] = value;
    re[index] = new RegExp(value, isGlobal ? "g" : undefined);
    safeRe[index] = new RegExp(safe, isGlobal ? "g" : undefined);
};
// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.
createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.
createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
// ## Main Version
// Three dot-separated numeric identifiers.
createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})`);
createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.
createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.
createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.
createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.
createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.
createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
createToken("FULL", `^${src[t.FULLPLAIN]}$`);
// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
createToken("GTLT", "((?:<|>)?=?)");
// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?` + `)?)?`);
createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?` + `)?)?`);
createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?` + `(?:${src[t.BUILD]})?` + `(?:$|[^\\d])`);
createToken("COERCERTL", src[t.COERCE], true);
createToken("COERCERTLFULL", src[t.COERCEFULL], true);
// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken("LONETILDE", "(?:~>?)");
createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = "$1~";
createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken("LONECARET", "(?:\\^)");
createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
exports.caretTrimReplace = "$1^";
createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = "$1$2$3";
// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAIN]})` + `\\s*$`);
createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAINLOOSE]})` + `\\s*$`);
// Star ranges basically just allow anything at all.
createToken("STAR", "(<|>)?=?\\s*\\*");
// >=0.0.0 is like a star
createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");

},{"d0acc9ab4292c946":"36kox","a395ac4a980f619e":"5sQBx"}],"36kox":[function(require,module,exports) {
// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = "2.0.0";
const MAX_LENGTH = 256;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */ 9007199254740991;
// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16;
// Max safe length for a build identifier. The max length minus 6 characters for
// the shortest version with a build 0.0.0+BUILD.
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
const RELEASE_TYPES = [
    "major",
    "premajor",
    "minor",
    "preminor",
    "patch",
    "prepatch",
    "prerelease"
];
module.exports = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
};

},{}],"5sQBx":[function(require,module,exports) {
var process = require("30fa90db8012bcdb");
const debug = (typeof process === "object" && process.env && undefined, ()=>{});
module.exports = debug;

},{"30fa90db8012bcdb":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"kgTdE":[function(require,module,exports) {
const debug = require("ae67fd8ecc10cfc");
const { MAX_LENGTH, MAX_SAFE_INTEGER } = require("3231b81208cd4164");
const { safeRe: re, t } = require("3e365bc1fdacdde1");
const parseOptions = require("9317a28174b181c8");
const { compareIdentifiers } = require("f6653555b22c88e8");
class SemVer {
    constructor(version, options){
        options = parseOptions(options);
        if (version instanceof SemVer) {
            if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) return version;
            else version = version.version;
        } else if (typeof version !== "string") throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        if (version.length > MAX_LENGTH) throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        // this isn't actually relevant for versions, but keep it so that we
        // don't run into trouble passing this.options around.
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) throw new TypeError(`Invalid Version: ${version}`);
        this.raw = version;
        // these are actually numbers
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError("Invalid major version");
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError("Invalid minor version");
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError("Invalid patch version");
        // numberify any prerelease numeric ids
        if (!m[4]) this.prerelease = [];
        else this.prerelease = m[4].split(".").map((id)=>{
            if (/^[0-9]+$/.test(id)) {
                const num = +id;
                if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
            }
            return id;
        });
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
    }
    format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) this.version += `-${this.prerelease.join(".")}`;
        return this.version;
    }
    toString() {
        return this.version;
    }
    compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof SemVer)) {
            if (typeof other === "string" && other === this.version) return 0;
            other = new SemVer(other, this.options);
        }
        if (other.version === this.version) return 0;
        return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
        if (!(other instanceof SemVer)) other = new SemVer(other, this.options);
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
    }
    comparePre(other) {
        if (!(other instanceof SemVer)) other = new SemVer(other, this.options);
        // NOT having a prerelease is > having one
        if (this.prerelease.length && !other.prerelease.length) return -1;
        else if (!this.prerelease.length && other.prerelease.length) return 1;
        else if (!this.prerelease.length && !other.prerelease.length) return 0;
        let i = 0;
        do {
            const a = this.prerelease[i];
            const b = other.prerelease[i];
            debug("prerelease compare", i, a, b);
            if (a === undefined && b === undefined) return 0;
            else if (b === undefined) return 1;
            else if (a === undefined) return -1;
            else if (a === b) continue;
            else return compareIdentifiers(a, b);
        }while (++i);
    }
    compareBuild(other) {
        if (!(other instanceof SemVer)) other = new SemVer(other, this.options);
        let i = 0;
        do {
            const a = this.build[i];
            const b = other.build[i];
            debug("prerelease compare", i, a, b);
            if (a === undefined && b === undefined) return 0;
            else if (b === undefined) return 1;
            else if (a === undefined) return -1;
            else if (a === b) continue;
            else return compareIdentifiers(a, b);
        }while (++i);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier, identifierBase) {
        switch(release){
            case "premajor":
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor = 0;
                this.major++;
                this.inc("pre", identifier, identifierBase);
                break;
            case "preminor":
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor++;
                this.inc("pre", identifier, identifierBase);
                break;
            case "prepatch":
                // If this is already a prerelease, it will bump to the next version
                // drop any prereleases that might already exist, since they are not
                // relevant at this point.
                this.prerelease.length = 0;
                this.inc("patch", identifier, identifierBase);
                this.inc("pre", identifier, identifierBase);
                break;
            // If the input is a non-prerelease version, this acts the same as
            // prepatch.
            case "prerelease":
                if (this.prerelease.length === 0) this.inc("patch", identifier, identifierBase);
                this.inc("pre", identifier, identifierBase);
                break;
            case "major":
                // If this is a pre-major version, bump up to the same major version.
                // Otherwise increment major.
                // 1.0.0-5 bumps to 1.0.0
                // 1.1.0 bumps to 2.0.0
                if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
                this.minor = 0;
                this.patch = 0;
                this.prerelease = [];
                break;
            case "minor":
                // If this is a pre-minor version, bump up to the same minor version.
                // Otherwise increment minor.
                // 1.2.0-5 bumps to 1.2.0
                // 1.2.1 bumps to 1.3.0
                if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
                this.patch = 0;
                this.prerelease = [];
                break;
            case "patch":
                // If this is not a pre-release version, it will increment the patch.
                // If it is a pre-release it will bump up to the same patch version.
                // 1.2.0-5 patches to 1.2.0
                // 1.2.0 patches to 1.2.1
                if (this.prerelease.length === 0) this.patch++;
                this.prerelease = [];
                break;
            // This probably shouldn't be used publicly.
            // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
            case "pre":
                {
                    const base = Number(identifierBase) ? 1 : 0;
                    if (!identifier && identifierBase === false) throw new Error("invalid increment argument: identifier is empty");
                    if (this.prerelease.length === 0) this.prerelease = [
                        base
                    ];
                    else {
                        let i = this.prerelease.length;
                        while(--i >= 0)if (typeof this.prerelease[i] === "number") {
                            this.prerelease[i]++;
                            i = -2;
                        }
                        if (i === -1) {
                            // didn't increment anything
                            if (identifier === this.prerelease.join(".") && identifierBase === false) throw new Error("invalid increment argument: identifier already exists");
                            this.prerelease.push(base);
                        }
                    }
                    if (identifier) {
                        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                        let prerelease = [
                            identifier,
                            base
                        ];
                        if (identifierBase === false) prerelease = [
                            identifier
                        ];
                        if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                            if (isNaN(this.prerelease[1])) this.prerelease = prerelease;
                        } else this.prerelease = prerelease;
                    }
                    break;
                }
            default:
                throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) this.raw += `+${this.build.join(".")}`;
        return this;
    }
}
module.exports = SemVer;

},{"ae67fd8ecc10cfc":"5sQBx","3231b81208cd4164":"36kox","3e365bc1fdacdde1":"fM3gb","9317a28174b181c8":"aIQkG","f6653555b22c88e8":"gfu2O"}],"aIQkG":[function(require,module,exports) {
// parse out just the options we care about
const looseOption = Object.freeze({
    loose: true
});
const emptyOpts = Object.freeze({});
const parseOptions = (options)=>{
    if (!options) return emptyOpts;
    if (typeof options !== "object") return looseOption;
    return options;
};
module.exports = parseOptions;

},{}],"gfu2O":[function(require,module,exports) {
const numeric = /^[0-9]+$/;
const compareIdentifiers = (a, b)=>{
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
        a = +a;
        b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b)=>compareIdentifiers(b, a);
module.exports = {
    compareIdentifiers,
    rcompareIdentifiers
};

},{}],"gcpPf":[function(require,module,exports) {
const SemVer = require("b37d8a80e28c3eea");
const parse = (version, options, throwErrors = false)=>{
    if (version instanceof SemVer) return version;
    try {
        return new SemVer(version, options);
    } catch (er) {
        if (!throwErrors) return null;
        throw er;
    }
};
module.exports = parse;

},{"b37d8a80e28c3eea":"kgTdE"}],"gWiRZ":[function(require,module,exports) {
const parse = require("568f4ad01504a79b");
const valid = (version, options)=>{
    const v = parse(version, options);
    return v ? v.version : null;
};
module.exports = valid;

},{"568f4ad01504a79b":"gcpPf"}],"aiTKa":[function(require,module,exports) {
const parse = require("f399126897f4e801");
const clean = (version, options)=>{
    const s = parse(version.trim().replace(/^[=v]+/, ""), options);
    return s ? s.version : null;
};
module.exports = clean;

},{"f399126897f4e801":"gcpPf"}],"aJfKw":[function(require,module,exports) {
const SemVer = require("74e107d7284fc74f");
const inc = (version, release, options, identifier, identifierBase)=>{
    if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = undefined;
    }
    try {
        return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier, identifierBase).version;
    } catch (er) {
        return null;
    }
};
module.exports = inc;

},{"74e107d7284fc74f":"kgTdE"}],"4hrxk":[function(require,module,exports) {
const parse = require("49348d5c3c3ea99");
const diff = (version1, version2)=>{
    const v1 = parse(version1, null, true);
    const v2 = parse(version2, null, true);
    const comparison = v1.compare(v2);
    if (comparison === 0) return null;
    const v1Higher = comparison > 0;
    const highVersion = v1Higher ? v1 : v2;
    const lowVersion = v1Higher ? v2 : v1;
    const highHasPre = !!highVersion.prerelease.length;
    const lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
        // Going from prerelease -> no prerelease requires some special casing
        // If the low version has only a major, then it will always be a major
        // Some examples:
        // 1.0.0-1 -> 1.0.0
        // 1.0.0-1 -> 1.1.1
        // 1.0.0-1 -> 2.0.0
        if (!lowVersion.patch && !lowVersion.minor) return "major";
        // Otherwise it can be determined by checking the high version
        if (highVersion.patch) // anything higher than a patch bump would result in the wrong version
        return "patch";
        if (highVersion.minor) // anything higher than a minor bump would result in the wrong version
        return "minor";
        // bumping major/minor/patch all have same result
        return "major";
    }
    // add the `pre` prefix if we are going to a prerelease version
    const prefix = highHasPre ? "pre" : "";
    if (v1.major !== v2.major) return prefix + "major";
    if (v1.minor !== v2.minor) return prefix + "minor";
    if (v1.patch !== v2.patch) return prefix + "patch";
    // high and low are preleases
    return "prerelease";
};
module.exports = diff;

},{"49348d5c3c3ea99":"gcpPf"}],"8P6hj":[function(require,module,exports) {
const SemVer = require("523b2aa00858d705");
const major = (a, loose)=>new SemVer(a, loose).major;
module.exports = major;

},{"523b2aa00858d705":"kgTdE"}],"jpEiD":[function(require,module,exports) {
const SemVer = require("88536475486c8fec");
const minor = (a, loose)=>new SemVer(a, loose).minor;
module.exports = minor;

},{"88536475486c8fec":"kgTdE"}],"9pRhW":[function(require,module,exports) {
const SemVer = require("7f27e8c0c7fb45");
const patch = (a, loose)=>new SemVer(a, loose).patch;
module.exports = patch;

},{"7f27e8c0c7fb45":"kgTdE"}],"luzbM":[function(require,module,exports) {
const parse = require("ee2f99b2b64bb0a");
const prerelease = (version, options)=>{
    const parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};
module.exports = prerelease;

},{"ee2f99b2b64bb0a":"gcpPf"}],"1VfgV":[function(require,module,exports) {
const SemVer = require("bf0c84b9edf7b7b8");
const compare = (a, b, loose)=>new SemVer(a, loose).compare(new SemVer(b, loose));
module.exports = compare;

},{"bf0c84b9edf7b7b8":"kgTdE"}],"cgrtc":[function(require,module,exports) {
const compare = require("15467716bdc3aa5f");
const rcompare = (a, b, loose)=>compare(b, a, loose);
module.exports = rcompare;

},{"15467716bdc3aa5f":"1VfgV"}],"Q3pnc":[function(require,module,exports) {
const compare = require("761fa2910e64d5fb");
const compareLoose = (a, b)=>compare(a, b, true);
module.exports = compareLoose;

},{"761fa2910e64d5fb":"1VfgV"}],"eYE5A":[function(require,module,exports) {
const SemVer = require("98b8cf45fa8bffeb");
const compareBuild = (a, b, loose)=>{
    const versionA = new SemVer(a, loose);
    const versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
module.exports = compareBuild;

},{"98b8cf45fa8bffeb":"kgTdE"}],"8TvEb":[function(require,module,exports) {
const compareBuild = require("a2c7f1a746999aac");
const sort = (list, loose)=>list.sort((a, b)=>compareBuild(a, b, loose));
module.exports = sort;

},{"a2c7f1a746999aac":"eYE5A"}],"4isEq":[function(require,module,exports) {
const compareBuild = require("d17845eed81e87b7");
const rsort = (list, loose)=>list.sort((a, b)=>compareBuild(b, a, loose));
module.exports = rsort;

},{"d17845eed81e87b7":"eYE5A"}],"h68v7":[function(require,module,exports) {
const compare = require("cee2ca7810f80621");
const gt = (a, b, loose)=>compare(a, b, loose) > 0;
module.exports = gt;

},{"cee2ca7810f80621":"1VfgV"}],"6ucE6":[function(require,module,exports) {
const compare = require("9bf608ab4083a4db");
const lt = (a, b, loose)=>compare(a, b, loose) < 0;
module.exports = lt;

},{"9bf608ab4083a4db":"1VfgV"}],"k1aRj":[function(require,module,exports) {
const compare = require("b72944c3e36a347b");
const eq = (a, b, loose)=>compare(a, b, loose) === 0;
module.exports = eq;

},{"b72944c3e36a347b":"1VfgV"}],"7Y3tc":[function(require,module,exports) {
const compare = require("36920dd7b3b50510");
const neq = (a, b, loose)=>compare(a, b, loose) !== 0;
module.exports = neq;

},{"36920dd7b3b50510":"1VfgV"}],"ehmrd":[function(require,module,exports) {
const compare = require("a54566b347e082f5");
const gte = (a, b, loose)=>compare(a, b, loose) >= 0;
module.exports = gte;

},{"a54566b347e082f5":"1VfgV"}],"2J3QH":[function(require,module,exports) {
const compare = require("7b67213c6dadb774");
const lte = (a, b, loose)=>compare(a, b, loose) <= 0;
module.exports = lte;

},{"7b67213c6dadb774":"1VfgV"}],"1k1O9":[function(require,module,exports) {
const eq = require("1e0d96b3c7885d4b");
const neq = require("78564d86b119ce4b");
const gt = require("7ab851c46ce76b6c");
const gte = require("8430a8e66a7c7703");
const lt = require("b251e640b70938db");
const lte = require("4833d1282be3dc59");
const cmp = (a, op, b, loose)=>{
    switch(op){
        case "===":
            if (typeof a === "object") a = a.version;
            if (typeof b === "object") b = b.version;
            return a === b;
        case "!==":
            if (typeof a === "object") a = a.version;
            if (typeof b === "object") b = b.version;
            return a !== b;
        case "":
        case "=":
        case "==":
            return eq(a, b, loose);
        case "!=":
            return neq(a, b, loose);
        case ">":
            return gt(a, b, loose);
        case ">=":
            return gte(a, b, loose);
        case "<":
            return lt(a, b, loose);
        case "<=":
            return lte(a, b, loose);
        default:
            throw new TypeError(`Invalid operator: ${op}`);
    }
};
module.exports = cmp;

},{"1e0d96b3c7885d4b":"k1aRj","78564d86b119ce4b":"7Y3tc","7ab851c46ce76b6c":"h68v7","8430a8e66a7c7703":"ehmrd","b251e640b70938db":"6ucE6","4833d1282be3dc59":"2J3QH"}],"iXNTl":[function(require,module,exports) {
const SemVer = require("92bcfda207b385ea");
const parse = require("dca0444bbc9100be");
const { safeRe: re, t } = require("1fe3448b9bf961b3");
const coerce = (version, options)=>{
    if (version instanceof SemVer) return version;
    if (typeof version === "number") version = String(version);
    if (typeof version !== "string") return null;
    options = options || {};
    let match = null;
    if (!options.rtl) match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
    else {
        // Find the right-most coercible string that does not share
        // a terminus with a more left-ward coercible string.
        // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
        // With includePrerelease option set, '1.2.3.4-rc' wants to coerce '2.3.4-rc', not '2.3.4'
        //
        // Walk through the string checking with a /g regexp
        // Manually set the index so as to pick up overlapping matches.
        // Stop when we get a match that ends at the string end, since no
        // coercible string can be more right-ward without the same terminus.
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)){
            if (!match || next.index + next[0].length !== match.index + match[0].length) match = next;
            coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        // leave it in a clean state
        coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) return null;
    const major = match[2];
    const minor = match[3] || "0";
    const patch = match[4] || "0";
    const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
    const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
};
module.exports = coerce;

},{"92bcfda207b385ea":"kgTdE","dca0444bbc9100be":"gcpPf","1fe3448b9bf961b3":"fM3gb"}],"5Yodu":[function(require,module,exports) {
const ANY = Symbol("SemVer ANY");
// hoisted class for cyclic dependency
class Comparator {
    static get ANY() {
        return ANY;
    }
    constructor(comp, options){
        options = parseOptions(options);
        if (comp instanceof Comparator) {
            if (comp.loose === !!options.loose) return comp;
            else comp = comp.value;
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) this.value = "";
        else this.value = this.operator + this.semver.version;
        debug("comp", this);
    }
    parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) throw new TypeError(`Invalid comparator: ${comp}`);
        this.operator = m[1] !== undefined ? m[1] : "";
        if (this.operator === "=") this.operator = "";
        // if it literally is just '>' or '' then allow anything.
        if (!m[2]) this.semver = ANY;
        else this.semver = new SemVer(m[2], this.options.loose);
    }
    toString() {
        return this.value;
    }
    test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) return true;
        if (typeof version === "string") try {
            version = new SemVer(version, this.options);
        } catch (er) {
            return false;
        }
        return cmp(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
        if (!(comp instanceof Comparator)) throw new TypeError("a Comparator is required");
        if (this.operator === "") {
            if (this.value === "") return true;
            return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
            if (comp.value === "") return true;
            return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        // Special cases where nothing can possibly be lower
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) return false;
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) return false;
        // Same direction increasing (> or >=)
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) return true;
        // Same direction decreasing (< or <=)
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) return true;
        // same SemVer and both sides are inclusive (<= or >=)
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) return true;
        // opposite directions less than
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) return true;
        // opposite directions greater than
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) return true;
        return false;
    }
}
module.exports = Comparator;
const parseOptions = require("7e954815c5fe1a22");
const { safeRe: re, t } = require("f180554cf29af6ff");
const cmp = require("b17870b0099d1cbd");
const debug = require("20bda6468c022ae8");
const SemVer = require("77e91093eef3a32d");
const Range = require("f83d6f11d9be7b45");

},{"7e954815c5fe1a22":"aIQkG","f180554cf29af6ff":"fM3gb","b17870b0099d1cbd":"1k1O9","20bda6468c022ae8":"5sQBx","77e91093eef3a32d":"kgTdE","f83d6f11d9be7b45":"f4j9g"}],"f4j9g":[function(require,module,exports) {
// hoisted class for cyclic dependency
class Range {
    constructor(range, options){
        options = parseOptions(options);
        if (range instanceof Range) {
            if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) return range;
            else return new Range(range.raw, options);
        }
        if (range instanceof Comparator) {
            // just put it in the set and return
            this.raw = range.value;
            this.set = [
                [
                    range
                ]
            ];
            this.format();
            return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        // First reduce all whitespace as much as possible so we do not have to rely
        // on potentially slow regexes like \s*. This is then stored and used for
        // future error messages as well.
        this.raw = range.trim().split(/\s+/).join(" ");
        // First, split on ||
        this.set = this.raw.split("||")// map the range to a 2d array of comparators
        .map((r)=>this.parseRange(r.trim()))// throw out any comparator lists that are empty
        // this generally means that it was not a valid range, which is allowed
        // in loose mode, but will still throw if the WHOLE range is invalid.
        .filter((c)=>c.length);
        if (!this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        // if we have any that are not the null set, throw out null sets.
        if (this.set.length > 1) {
            // keep the first one, in case they're all null sets
            const first = this.set[0];
            this.set = this.set.filter((c)=>!isNullSet(c[0]));
            if (this.set.length === 0) this.set = [
                first
            ];
            else if (this.set.length > 1) {
                // if we have any that are *, then the range is just *
                for (const c of this.set)if (c.length === 1 && isAny(c[0])) {
                    this.set = [
                        c
                    ];
                    break;
                }
            }
        }
        this.format();
    }
    format() {
        this.range = this.set.map((comps)=>comps.join(" ").trim()).join("||").trim();
        return this.range;
    }
    toString() {
        return this.range;
    }
    parseRange(range) {
        // memoize range parsing for performance.
        // this is a very hot path, and fully deterministic.
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) return cached;
        const loose = this.options.loose;
        // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        // `~ 1.2.3` => `~1.2.3`
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        // `^ 1.2.3` => `^1.2.3`
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        // At this point, the range is completely trimmed and
        // ready to be split into comparators.
        let rangeList = range.split(" ").map((comp)=>parseComparator(comp, this.options)).join(" ").split(/\s+/)// >=0.0.0 is equivalent to *
        .map((comp)=>replaceGTE0(comp, this.options));
        if (loose) // in loose mode, throw out any that are not valid comparators
        rangeList = rangeList.filter((comp)=>{
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
        });
        debug("range list", rangeList);
        // if any comparators are the null set, then replace with JUST null set
        // if more than one comparator, remove any * comparators
        // also, don't include the same comparator more than once
        const rangeMap = new Map();
        const comparators = rangeList.map((comp)=>new Comparator(comp, this.options));
        for (const comp of comparators){
            if (isNullSet(comp)) return [
                comp
            ];
            rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) rangeMap.delete("");
        const result = [
            ...rangeMap.values()
        ];
        cache.set(memoKey, result);
        return result;
    }
    intersects(range, options) {
        if (!(range instanceof Range)) throw new TypeError("a Range is required");
        return this.set.some((thisComparators)=>{
            return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators)=>{
                return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator)=>{
                    return rangeComparators.every((rangeComparator)=>{
                        return thisComparator.intersects(rangeComparator, options);
                    });
                });
            });
        });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
        if (!version) return false;
        if (typeof version === "string") try {
            version = new SemVer(version, this.options);
        } catch (er) {
            return false;
        }
        for(let i = 0; i < this.set.length; i++){
            if (testSet(this.set[i], version, this.options)) return true;
        }
        return false;
    }
}
module.exports = Range;
const LRU = require("81e172b2ac4f251c");
const cache = new LRU({
    max: 1000
});
const parseOptions = require("93cc4b731ed99b0c");
const Comparator = require("4f594ceb7abfc45a");
const debug = require("fe9c444ac341f5e1");
const SemVer = require("8b10b4fa39198104");
const { safeRe: re, t, comparatorTrimReplace, tildeTrimReplace, caretTrimReplace } = require("6ed51ba60ef37f97");
const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require("4095a82e16b31b0a");
const isNullSet = (c)=>c.value === "<0.0.0-0";
const isAny = (c)=>c.value === "";
// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options)=>{
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while(result && remainingComparators.length){
        result = remainingComparators.every((otherComparator)=>{
            return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
    }
    return result;
};
// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options)=>{
    debug("comp", comp, options);
    comp = replaceCarets(comp, options);
    debug("caret", comp);
    comp = replaceTildes(comp, options);
    debug("tildes", comp);
    comp = replaceXRanges(comp, options);
    debug("xrange", comp);
    comp = replaceStars(comp, options);
    debug("stars", comp);
    return comp;
};
const isX = (id)=>!id || id.toLowerCase() === "x" || id === "*";
// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
// ~0.0.1 --> >=0.0.1 <0.1.0-0
const replaceTildes = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceTilde(c, options)).join(" ");
};
const replaceTilde = (comp, options)=>{
    const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) ret = "";
        else if (isX(m)) ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        else if (isX(p)) // ~1.2 == >=1.2.0 <1.3.0-0
        ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        else if (pr) {
            debug("replaceTilde pr", pr);
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else // ~1.2.3 == >=1.2.3 <1.3.0-0
        ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        debug("tilde return", ret);
        return ret;
    });
};
// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
// ^0.0.1 --> >=0.0.1 <0.0.2-0
// ^0.1.0 --> >=0.1.0 <0.2.0-0
const replaceCarets = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceCaret(c, options)).join(" ");
};
const replaceCaret = (comp, options)=>{
    debug("caret", comp, options);
    const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
    const z = options.includePrerelease ? "-0" : "";
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) ret = "";
        else if (isX(m)) ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        else if (isX(p)) {
            if (M === "0") ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
            else ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
        } else if (pr) {
            debug("replaceCaret pr", pr);
            if (M === "0") {
                if (m === "0") ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
                else ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            } else ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
        } else {
            debug("no pr");
            if (M === "0") {
                if (m === "0") ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
                else ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
            } else ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
        }
        debug("caret return", ret);
        return ret;
    });
};
const replaceXRanges = (comp, options)=>{
    debug("replaceXRanges", comp, options);
    return comp.split(/\s+/).map((c)=>replaceXRange(c, options)).join(" ");
};
const replaceXRange = (comp, options)=>{
    comp = comp.trim();
    const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr)=>{
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) gtlt = "";
        // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
            if (gtlt === ">" || gtlt === "<") // nothing is allowed
            ret = "<0.0.0-0";
            else // nothing is forbidden
            ret = "*";
        } else if (gtlt && anyX) {
            // we know patch is an x, because we have any x at all.
            // replace X with 0
            if (xm) m = 0;
            p = 0;
            if (gtlt === ">") {
                // >1 => >=2.0.0
                // >1.2 => >=1.3.0
                gtlt = ">=";
                if (xm) {
                    M = +M + 1;
                    m = 0;
                    p = 0;
                } else {
                    m = +m + 1;
                    p = 0;
                }
            } else if (gtlt === "<=") {
                // <=0.7.x is actually <0.8.0, since any 0.7.x should
                // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                gtlt = "<";
                if (xm) M = +M + 1;
                else m = +m + 1;
            }
            if (gtlt === "<") pr = "-0";
            ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        else if (xp) ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        debug("xRange return", ret);
        return ret;
    });
};
// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options)=>{
    debug("replaceStars", comp, options);
    // Looseness is ignored here.  star is always as loose as it gets!
    return comp.trim().replace(re[t.STAR], "");
};
const replaceGTE0 = (comp, options)=>{
    debug("replaceGTE0", comp, options);
    return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
};
// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
const hyphenReplace = (incPr)=>($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb)=>{
        if (isX(fM)) from = "";
        else if (isX(fm)) from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
        else if (isX(fp)) from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
        else if (fpr) from = `>=${from}`;
        else from = `>=${from}${incPr ? "-0" : ""}`;
        if (isX(tM)) to = "";
        else if (isX(tm)) to = `<${+tM + 1}.0.0-0`;
        else if (isX(tp)) to = `<${tM}.${+tm + 1}.0-0`;
        else if (tpr) to = `<=${tM}.${tm}.${tp}-${tpr}`;
        else if (incPr) to = `<${tM}.${tm}.${+tp + 1}-0`;
        else to = `<=${to}`;
        return `${from} ${to}`.trim();
    };
const testSet = (set, version, options)=>{
    for(let i = 0; i < set.length; i++){
        if (!set[i].test(version)) return false;
    }
    if (version.prerelease.length && !options.includePrerelease) {
        // Find the set of versions that are allowed to have prereleases
        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
        // That should allow `1.2.3-pr.2` to pass.
        // However, `1.2.4-alpha.notready` should NOT be allowed,
        // even though it's within the range set by the comparators.
        for(let i = 0; i < set.length; i++){
            debug(set[i].semver);
            if (set[i].semver === Comparator.ANY) continue;
            if (set[i].semver.prerelease.length > 0) {
                const allowed = set[i].semver;
                if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return true;
            }
        }
        // Version has a -pre, but it's not one of the ones we like.
        return false;
    }
    return true;
};

},{"81e172b2ac4f251c":"JVw6S","93cc4b731ed99b0c":"aIQkG","4f594ceb7abfc45a":"5Yodu","fe9c444ac341f5e1":"5sQBx","8b10b4fa39198104":"kgTdE","6ed51ba60ef37f97":"fM3gb","4095a82e16b31b0a":"36kox"}],"JVw6S":[function(require,module,exports) {
"use strict";
// A linked list to keep track of recently-used-ness
const Yallist = require("9abd7eb38cb2d295");
const MAX = Symbol("max");
const LENGTH = Symbol("length");
const LENGTH_CALCULATOR = Symbol("lengthCalculator");
const ALLOW_STALE = Symbol("allowStale");
const MAX_AGE = Symbol("maxAge");
const DISPOSE = Symbol("dispose");
const NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
const LRU_LIST = Symbol("lruList");
const CACHE = Symbol("cache");
const UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
const naiveLength = ()=>1;
// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
    constructor(options){
        if (typeof options === "number") options = {
            max: options
        };
        if (!options) options = {};
        if (options.max && (typeof options.max !== "number" || options.max < 0)) throw new TypeError("max must be a non-negative number");
        // Kind of weird to have a default max of Infinity, but oh well.
        const max = this[MAX] = options.max || Infinity;
        const lc = options.length || naiveLength;
        this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
        this[ALLOW_STALE] = options.stale || false;
        if (options.maxAge && typeof options.maxAge !== "number") throw new TypeError("maxAge must be a number");
        this[MAX_AGE] = options.maxAge || 0;
        this[DISPOSE] = options.dispose;
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
        this.reset();
    }
    // resize the cache when the max changes.
    set max(mL) {
        if (typeof mL !== "number" || mL < 0) throw new TypeError("max must be a non-negative number");
        this[MAX] = mL || Infinity;
        trim(this);
    }
    get max() {
        return this[MAX];
    }
    set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
    }
    get allowStale() {
        return this[ALLOW_STALE];
    }
    set maxAge(mA) {
        if (typeof mA !== "number") throw new TypeError("maxAge must be a non-negative number");
        this[MAX_AGE] = mA;
        trim(this);
    }
    get maxAge() {
        return this[MAX_AGE];
    }
    // resize the cache when the lengthCalculator changes.
    set lengthCalculator(lC) {
        if (typeof lC !== "function") lC = naiveLength;
        if (lC !== this[LENGTH_CALCULATOR]) {
            this[LENGTH_CALCULATOR] = lC;
            this[LENGTH] = 0;
            this[LRU_LIST].forEach((hit)=>{
                hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
                this[LENGTH] += hit.length;
            });
        }
        trim(this);
    }
    get lengthCalculator() {
        return this[LENGTH_CALCULATOR];
    }
    get length() {
        return this[LENGTH];
    }
    get itemCount() {
        return this[LRU_LIST].length;
    }
    rforEach(fn, thisp) {
        thisp = thisp || this;
        for(let walker = this[LRU_LIST].tail; walker !== null;){
            const prev = walker.prev;
            forEachStep(this, fn, walker, thisp);
            walker = prev;
        }
    }
    forEach(fn, thisp) {
        thisp = thisp || this;
        for(let walker = this[LRU_LIST].head; walker !== null;){
            const next = walker.next;
            forEachStep(this, fn, walker, thisp);
            walker = next;
        }
    }
    keys() {
        return this[LRU_LIST].toArray().map((k)=>k.key);
    }
    values() {
        return this[LRU_LIST].toArray().map((k)=>k.value);
    }
    reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) this[LRU_LIST].forEach((hit)=>this[DISPOSE](hit.key, hit.value));
        this[CACHE] = new Map() // hash of items by key
        ;
        this[LRU_LIST] = new Yallist() // list of items in order of use recency
        ;
        this[LENGTH] = 0 // length of items in the list
        ;
    }
    dump() {
        return this[LRU_LIST].map((hit)=>isStale(this, hit) ? false : {
                k: hit.key,
                v: hit.value,
                e: hit.now + (hit.maxAge || 0)
            }).toArray().filter((h)=>h);
    }
    dumpLru() {
        return this[LRU_LIST];
    }
    set(key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE];
        if (maxAge && typeof maxAge !== "number") throw new TypeError("maxAge must be a number");
        const now = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value, key);
        if (this[CACHE].has(key)) {
            if (len > this[MAX]) {
                del(this, this[CACHE].get(key));
                return false;
            }
            const node = this[CACHE].get(key);
            const item = node.value;
            // dispose of the old one before overwriting
            // split out into 2 ifs for better coverage tracking
            if (this[DISPOSE]) {
                if (!this[NO_DISPOSE_ON_SET]) this[DISPOSE](key, item.value);
            }
            item.now = now;
            item.maxAge = maxAge;
            item.value = value;
            this[LENGTH] += len - item.length;
            item.length = len;
            this.get(key);
            trim(this);
            return true;
        }
        const hit = new Entry(key, value, len, now, maxAge);
        // oversized objects fall out of cache automatically.
        if (hit.length > this[MAX]) {
            if (this[DISPOSE]) this[DISPOSE](key, value);
            return false;
        }
        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key, this[LRU_LIST].head);
        trim(this);
        return true;
    }
    has(key) {
        if (!this[CACHE].has(key)) return false;
        const hit = this[CACHE].get(key).value;
        return !isStale(this, hit);
    }
    get(key) {
        return get(this, key, true);
    }
    peek(key) {
        return get(this, key, false);
    }
    pop() {
        const node = this[LRU_LIST].tail;
        if (!node) return null;
        del(this, node);
        return node.value;
    }
    del(key) {
        del(this, this[CACHE].get(key));
    }
    load(arr) {
        // reset the cache
        this.reset();
        const now = Date.now();
        // A previous serialized cache has the most recent items first
        for(let l = arr.length - 1; l >= 0; l--){
            const hit = arr[l];
            const expiresAt = hit.e || 0;
            if (expiresAt === 0) // the item was created without expiration in a non aged cache
            this.set(hit.k, hit.v);
            else {
                const maxAge = expiresAt - now;
                // dont add already expired items
                if (maxAge > 0) this.set(hit.k, hit.v, maxAge);
            }
        }
    }
    prune() {
        this[CACHE].forEach((value, key)=>get(this, key, false));
    }
}
const get = (self, key, doUse)=>{
    const node = self[CACHE].get(key);
    if (node) {
        const hit = node.value;
        if (isStale(self, hit)) {
            del(self, node);
            if (!self[ALLOW_STALE]) return undefined;
        } else if (doUse) {
            if (self[UPDATE_AGE_ON_GET]) node.value.now = Date.now();
            self[LRU_LIST].unshiftNode(node);
        }
        return hit.value;
    }
};
const isStale = (self, hit)=>{
    if (!hit || !hit.maxAge && !self[MAX_AGE]) return false;
    const diff = Date.now() - hit.now;
    return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
};
const trim = (self)=>{
    if (self[LENGTH] > self[MAX]) for(let walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null;){
        // We know that we're about to delete this one, and also
        // what the next least recently used key will be, so just
        // go ahead and set it now.
        const prev = walker.prev;
        del(self, walker);
        walker = prev;
    }
};
const del = (self, node)=>{
    if (node) {
        const hit = node.value;
        if (self[DISPOSE]) self[DISPOSE](hit.key, hit.value);
        self[LENGTH] -= hit.length;
        self[CACHE].delete(hit.key);
        self[LRU_LIST].removeNode(node);
    }
};
class Entry {
    constructor(key, value, length, now, maxAge){
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now;
        this.maxAge = maxAge || 0;
    }
}
const forEachStep = (self, fn, node, thisp)=>{
    let hit = node.value;
    if (isStale(self, hit)) {
        del(self, node);
        if (!self[ALLOW_STALE]) hit = undefined;
    }
    if (hit) fn.call(thisp, hit.value, hit.key, self);
};
module.exports = LRUCache;

},{"9abd7eb38cb2d295":"d9kUa"}],"d9kUa":[function(require,module,exports) {
"use strict";
module.exports = Yallist;
Yallist.Node = Node;
Yallist.create = Yallist;
function Yallist(list) {
    var self = this;
    if (!(self instanceof Yallist)) self = new Yallist();
    self.tail = null;
    self.head = null;
    self.length = 0;
    if (list && typeof list.forEach === "function") list.forEach(function(item) {
        self.push(item);
    });
    else if (arguments.length > 0) for(var i = 0, l = arguments.length; i < l; i++)self.push(arguments[i]);
    return self;
}
Yallist.prototype.removeNode = function(node) {
    if (node.list !== this) throw new Error("removing node which does not belong to this list");
    var next = node.next;
    var prev = node.prev;
    if (next) next.prev = prev;
    if (prev) prev.next = next;
    if (node === this.head) this.head = next;
    if (node === this.tail) this.tail = prev;
    node.list.length--;
    node.next = null;
    node.prev = null;
    node.list = null;
    return next;
};
Yallist.prototype.unshiftNode = function(node) {
    if (node === this.head) return;
    if (node.list) node.list.removeNode(node);
    var head = this.head;
    node.list = this;
    node.next = head;
    if (head) head.prev = node;
    this.head = node;
    if (!this.tail) this.tail = node;
    this.length++;
};
Yallist.prototype.pushNode = function(node) {
    if (node === this.tail) return;
    if (node.list) node.list.removeNode(node);
    var tail = this.tail;
    node.list = this;
    node.prev = tail;
    if (tail) tail.next = node;
    this.tail = node;
    if (!this.head) this.head = node;
    this.length++;
};
Yallist.prototype.push = function() {
    for(var i = 0, l = arguments.length; i < l; i++)push(this, arguments[i]);
    return this.length;
};
Yallist.prototype.unshift = function() {
    for(var i = 0, l = arguments.length; i < l; i++)unshift(this, arguments[i]);
    return this.length;
};
Yallist.prototype.pop = function() {
    if (!this.tail) return undefined;
    var res = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    this.length--;
    return res;
};
Yallist.prototype.shift = function() {
    if (!this.head) return undefined;
    var res = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.length--;
    return res;
};
Yallist.prototype.forEach = function(fn, thisp) {
    thisp = thisp || this;
    for(var walker = this.head, i = 0; walker !== null; i++){
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
    }
};
Yallist.prototype.forEachReverse = function(fn, thisp) {
    thisp = thisp || this;
    for(var walker = this.tail, i = this.length - 1; walker !== null; i--){
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
    }
};
Yallist.prototype.get = function(n) {
    for(var i = 0, walker = this.head; walker !== null && i < n; i++)// abort out of the list early if we hit a cycle
    walker = walker.next;
    if (i === n && walker !== null) return walker.value;
};
Yallist.prototype.getReverse = function(n) {
    for(var i = 0, walker = this.tail; walker !== null && i < n; i++)// abort out of the list early if we hit a cycle
    walker = walker.prev;
    if (i === n && walker !== null) return walker.value;
};
Yallist.prototype.map = function(fn, thisp) {
    thisp = thisp || this;
    var res = new Yallist();
    for(var walker = this.head; walker !== null;){
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
    }
    return res;
};
Yallist.prototype.mapReverse = function(fn, thisp) {
    thisp = thisp || this;
    var res = new Yallist();
    for(var walker = this.tail; walker !== null;){
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
    }
    return res;
};
Yallist.prototype.reduce = function(fn, initial) {
    var acc;
    var walker = this.head;
    if (arguments.length > 1) acc = initial;
    else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
    } else throw new TypeError("Reduce of empty list with no initial value");
    for(var i = 0; walker !== null; i++){
        acc = fn(acc, walker.value, i);
        walker = walker.next;
    }
    return acc;
};
Yallist.prototype.reduceReverse = function(fn, initial) {
    var acc;
    var walker = this.tail;
    if (arguments.length > 1) acc = initial;
    else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
    } else throw new TypeError("Reduce of empty list with no initial value");
    for(var i = this.length - 1; walker !== null; i--){
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
    }
    return acc;
};
Yallist.prototype.toArray = function() {
    var arr = new Array(this.length);
    for(var i = 0, walker = this.head; walker !== null; i++){
        arr[i] = walker.value;
        walker = walker.next;
    }
    return arr;
};
Yallist.prototype.toArrayReverse = function() {
    var arr = new Array(this.length);
    for(var i = 0, walker = this.tail; walker !== null; i++){
        arr[i] = walker.value;
        walker = walker.prev;
    }
    return arr;
};
Yallist.prototype.slice = function(from, to) {
    to = to || this.length;
    if (to < 0) to += this.length;
    from = from || 0;
    if (from < 0) from += this.length;
    var ret = new Yallist();
    if (to < from || to < 0) return ret;
    if (from < 0) from = 0;
    if (to > this.length) to = this.length;
    for(var i = 0, walker = this.head; walker !== null && i < from; i++)walker = walker.next;
    for(; walker !== null && i < to; i++, walker = walker.next)ret.push(walker.value);
    return ret;
};
Yallist.prototype.sliceReverse = function(from, to) {
    to = to || this.length;
    if (to < 0) to += this.length;
    from = from || 0;
    if (from < 0) from += this.length;
    var ret = new Yallist();
    if (to < from || to < 0) return ret;
    if (from < 0) from = 0;
    if (to > this.length) to = this.length;
    for(var i = this.length, walker = this.tail; walker !== null && i > to; i--)walker = walker.prev;
    for(; walker !== null && i > from; i--, walker = walker.prev)ret.push(walker.value);
    return ret;
};
Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
    if (start > this.length) start = this.length - 1;
    if (start < 0) start = this.length + start;
    for(var i = 0, walker = this.head; walker !== null && i < start; i++)walker = walker.next;
    var ret = [];
    for(var i = 0; walker && i < deleteCount; i++){
        ret.push(walker.value);
        walker = this.removeNode(walker);
    }
    if (walker === null) walker = this.tail;
    if (walker !== this.head && walker !== this.tail) walker = walker.prev;
    for(var i = 0; i < nodes.length; i++)walker = insert(this, walker, nodes[i]);
    return ret;
};
Yallist.prototype.reverse = function() {
    var head = this.head;
    var tail = this.tail;
    for(var walker = head; walker !== null; walker = walker.prev){
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
    }
    this.head = tail;
    this.tail = head;
    return this;
};
function insert(self, node, value) {
    var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);
    if (inserted.next === null) self.tail = inserted;
    if (inserted.prev === null) self.head = inserted;
    self.length++;
    return inserted;
}
function push(self, item) {
    self.tail = new Node(item, self.tail, null, self);
    if (!self.head) self.head = self.tail;
    self.length++;
}
function unshift(self, item) {
    self.head = new Node(item, null, self.head, self);
    if (!self.tail) self.tail = self.head;
    self.length++;
}
function Node(value, prev, next, list) {
    if (!(this instanceof Node)) return new Node(value, prev, next, list);
    this.list = list;
    this.value = value;
    if (prev) {
        prev.next = this;
        this.prev = prev;
    } else this.prev = null;
    if (next) {
        next.prev = this;
        this.next = next;
    } else this.next = null;
}
try {
    // add if support for Symbol.iterator is present
    require("7f2becb339d5e747")(Yallist);
} catch (er) {}

},{"7f2becb339d5e747":"9psHD"}],"9psHD":[function(require,module,exports) {
"use strict";
module.exports = function(Yallist) {
    Yallist.prototype[Symbol.iterator] = function*() {
        for(let walker = this.head; walker; walker = walker.next)yield walker.value;
    };
};

},{}],"7OcsV":[function(require,module,exports) {
const Range = require("940f1352c5fd5547");
const satisfies = (version, range, options)=>{
    try {
        range = new Range(range, options);
    } catch (er) {
        return false;
    }
    return range.test(version);
};
module.exports = satisfies;

},{"940f1352c5fd5547":"f4j9g"}],"iR5Mh":[function(require,module,exports) {
const Range = require("ede5d214a7b8173e");
// Mostly just for testing and legacy API reasons
const toComparators = (range, options)=>new Range(range, options).set.map((comp)=>comp.map((c)=>c.value).join(" ").trim().split(" "));
module.exports = toComparators;

},{"ede5d214a7b8173e":"f4j9g"}],"jPYT1":[function(require,module,exports) {
const SemVer = require("6679afad9f06aeb6");
const Range = require("4b6ac0b49679b359");
const maxSatisfying = (versions, range, options)=>{
    let max = null;
    let maxSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) // satisfies(v, range, options)
        {
            if (!max || maxSV.compare(v) === -1) {
                // compare(max, v, true)
                max = v;
                maxSV = new SemVer(max, options);
            }
        }
    });
    return max;
};
module.exports = maxSatisfying;

},{"6679afad9f06aeb6":"kgTdE","4b6ac0b49679b359":"f4j9g"}],"juckF":[function(require,module,exports) {
const SemVer = require("169f0ea06c9fbad5");
const Range = require("c947da84346b5c2d");
const minSatisfying = (versions, range, options)=>{
    let min = null;
    let minSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) // satisfies(v, range, options)
        {
            if (!min || minSV.compare(v) === 1) {
                // compare(min, v, true)
                min = v;
                minSV = new SemVer(min, options);
            }
        }
    });
    return min;
};
module.exports = minSatisfying;

},{"169f0ea06c9fbad5":"kgTdE","c947da84346b5c2d":"f4j9g"}],"5VviM":[function(require,module,exports) {
const SemVer = require("b1f7bf8bb6908ef5");
const Range = require("22ad6821389280bf");
const gt = require("40416b3e4021f616");
const minVersion = (range, loose)=>{
    range = new Range(range, loose);
    let minver = new SemVer("0.0.0");
    if (range.test(minver)) return minver;
    minver = new SemVer("0.0.0-0");
    if (range.test(minver)) return minver;
    minver = null;
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator)=>{
            // Clone to avoid manipulating the comparator's semver object.
            const compver = new SemVer(comparator.semver.version);
            switch(comparator.operator){
                case ">":
                    if (compver.prerelease.length === 0) compver.patch++;
                    else compver.prerelease.push(0);
                    compver.raw = compver.format();
                /* fallthrough */ case "":
                case ">=":
                    if (!setMin || gt(compver, setMin)) setMin = compver;
                    break;
                case "<":
                case "<=":
                    break;
                /* istanbul ignore next */ default:
                    throw new Error(`Unexpected operation: ${comparator.operator}`);
            }
        });
        if (setMin && (!minver || gt(minver, setMin))) minver = setMin;
    }
    if (minver && range.test(minver)) return minver;
    return null;
};
module.exports = minVersion;

},{"b1f7bf8bb6908ef5":"kgTdE","22ad6821389280bf":"f4j9g","40416b3e4021f616":"h68v7"}],"d8BN4":[function(require,module,exports) {
const Range = require("ffb577e17ae7d471");
const validRange = (range, options)=>{
    try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return new Range(range, options).range || "*";
    } catch (er) {
        return null;
    }
};
module.exports = validRange;

},{"ffb577e17ae7d471":"f4j9g"}],"jz7Jf":[function(require,module,exports) {
const SemVer = require("ae1c8222a4c6e373");
const Comparator = require("f60b48adeedf8e20");
const { ANY } = Comparator;
const Range = require("8e3fc534e2ba4703");
const satisfies = require("150ec1cafcd32bce");
const gt = require("1c41875a79278de0");
const lt = require("13fdf257d49ba76e");
const lte = require("13287bd710b68792");
const gte = require("d1d067e930c8e9e8");
const outside = (version, range, hilo, options)=>{
    version = new SemVer(version, options);
    range = new Range(range, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch(hilo){
        case ">":
            gtfn = gt;
            ltefn = lte;
            ltfn = lt;
            comp = ">";
            ecomp = ">=";
            break;
        case "<":
            gtfn = lt;
            ltefn = gte;
            ltfn = gt;
            comp = "<";
            ecomp = "<=";
            break;
        default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    // If it satisfies the range it is not outside
    if (satisfies(version, range, options)) return false;
    // From now on, variable terms are as if we're in "gtr" mode.
    // but note that everything is flipped for the "ltr" function.
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator)=>{
            if (comparator.semver === ANY) comparator = new Comparator(">=0.0.0");
            high = high || comparator;
            low = low || comparator;
            if (gtfn(comparator.semver, high.semver, options)) high = comparator;
            else if (ltfn(comparator.semver, low.semver, options)) low = comparator;
        });
        // If the edge version comparator has a operator then our version
        // isn't outside it
        if (high.operator === comp || high.operator === ecomp) return false;
        // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) return false;
        else if (low.operator === ecomp && ltfn(version, low.semver)) return false;
    }
    return true;
};
module.exports = outside;

},{"ae1c8222a4c6e373":"kgTdE","f60b48adeedf8e20":"5Yodu","8e3fc534e2ba4703":"f4j9g","150ec1cafcd32bce":"7OcsV","1c41875a79278de0":"h68v7","13fdf257d49ba76e":"6ucE6","13287bd710b68792":"2J3QH","d1d067e930c8e9e8":"ehmrd"}],"kboF2":[function(require,module,exports) {
// Determine if version is greater than all the versions possible in the range.
const outside = require("3c88fa13be9b62ed");
const gtr = (version, range, options)=>outside(version, range, ">", options);
module.exports = gtr;

},{"3c88fa13be9b62ed":"jz7Jf"}],"4bUsl":[function(require,module,exports) {
const outside = require("8a5e3f84f23531fc");
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options)=>outside(version, range, "<", options);
module.exports = ltr;

},{"8a5e3f84f23531fc":"jz7Jf"}],"hpFPQ":[function(require,module,exports) {
const Range = require("198114d56381cb1b");
const intersects = (r1, r2, options)=>{
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
};
module.exports = intersects;

},{"198114d56381cb1b":"f4j9g"}],"kb0TI":[function(require,module,exports) {
// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = require("be3352088801e7f2");
const compare = require("e1cbb8506c17f75f");
module.exports = (versions, range, options)=>{
    const set = [];
    let first = null;
    let prev = null;
    const v = versions.sort((a, b)=>compare(a, b, options));
    for (const version of v){
        const included = satisfies(version, range, options);
        if (included) {
            prev = version;
            if (!first) first = version;
        } else {
            if (prev) set.push([
                first,
                prev
            ]);
            prev = null;
            first = null;
        }
    }
    if (first) set.push([
        first,
        null
    ]);
    const ranges = [];
    for (const [min, max] of set){
        if (min === max) ranges.push(min);
        else if (!max && min === v[0]) ranges.push("*");
        else if (!max) ranges.push(`>=${min}`);
        else if (min === v[0]) ranges.push(`<=${max}`);
        else ranges.push(`${min} - ${max}`);
    }
    const simplified = ranges.join(" || ");
    const original = typeof range.raw === "string" ? range.raw : String(range);
    return simplified.length < original.length ? simplified : range;
};

},{"be3352088801e7f2":"7OcsV","e1cbb8506c17f75f":"1VfgV"}],"lNExW":[function(require,module,exports) {
const Range = require("b92b8939ff19a1f7");
const Comparator = require("cce28445c1624435");
const { ANY } = Comparator;
const satisfies = require("f9cabcc7acdab60");
const compare = require("5ad2674999bb065f");
// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true
const subset = (sub, dom, options = {})=>{
    if (sub === dom) return true;
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (const simpleSub of sub.set){
        for (const simpleDom of dom.set){
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) continue OUTER;
        }
        // the null set is a subset of everything, but null simple ranges in
        // a complex range should be ignored.  so if we saw a non-null range,
        // then we know this isn't a subset, but if EVERY simple range was null,
        // then it is a subset.
        if (sawNonNull) return false;
    }
    return true;
};
const minimumVersionWithPreRelease = [
    new Comparator(">=0.0.0-0")
];
const minimumVersion = [
    new Comparator(">=0.0.0")
];
const simpleSubset = (sub, dom, options)=>{
    if (sub === dom) return true;
    if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) return true;
        else if (options.includePrerelease) sub = minimumVersionWithPreRelease;
        else sub = minimumVersion;
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) return true;
        else dom = minimumVersion;
    }
    const eqSet = new Set();
    let gt, lt;
    for (const c of sub){
        if (c.operator === ">" || c.operator === ">=") gt = higherGT(gt, c, options);
        else if (c.operator === "<" || c.operator === "<=") lt = lowerLT(lt, c, options);
        else eqSet.add(c.semver);
    }
    if (eqSet.size > 1) return null;
    let gtltComp;
    if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) return null;
        else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) return null;
    }
    // will iterate one or zero times
    for (const eq of eqSet){
        if (gt && !satisfies(eq, String(gt), options)) return null;
        if (lt && !satisfies(eq, String(lt), options)) return null;
        for (const c of dom){
            if (!satisfies(eq, String(c), options)) return false;
        }
        return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    // if the subset has a prerelease, we need a comparator in the superset
    // with the same tuple and a prerelease, or it's not a subset
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    // exception: <1.2.3-0 is the same as <1.2.3
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) needDomLTPre = false;
    for (const c of dom){
        hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
        hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
        if (gt) {
            if (needDomGTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) needDomGTPre = false;
            }
            if (c.operator === ">" || c.operator === ">=") {
                higher = higherGT(gt, c, options);
                if (higher === c && higher !== gt) return false;
            } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) return false;
        }
        if (lt) {
            if (needDomLTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) needDomLTPre = false;
            }
            if (c.operator === "<" || c.operator === "<=") {
                lower = lowerLT(lt, c, options);
                if (lower === c && lower !== lt) return false;
            } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) return false;
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) return false;
    }
    // if there was a < or >, and nothing in the dom, then must be false
    // UNLESS it was limited by another range in the other direction.
    // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
    if (gt && hasDomLT && !lt && gtltComp !== 0) return false;
    if (lt && hasDomGT && !gt && gtltComp !== 0) return false;
    // we needed a prerelease range in a specific tuple, but didn't get one
    // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
    // because it includes prereleases in the 1.2.3 tuple
    if (needDomGTPre || needDomLTPre) return false;
    return true;
};
// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options)=>{
    if (!a) return b;
    const comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
};
// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options)=>{
    if (!a) return b;
    const comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
};
module.exports = subset;

},{"b92b8939ff19a1f7":"f4j9g","cce28445c1624435":"5Yodu","f9cabcc7acdab60":"7OcsV","5ad2674999bb065f":"1VfgV"}],"7NNG8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "requestLedgerDevice", ()=>requestLedgerDevice);
parcelHelpers.export(exports, "getLedgerDevices", ()=>getLedgerDevices);
parcelHelpers.export(exports, "getFirstLedgerDevice", ()=>getFirstLedgerDevice);
parcelHelpers.export(exports, "isSupported", ()=>isSupported);
var _devices = require("@ledgerhq/devices");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ledgerDevices = [
    {
        vendorId: (0, _devices.ledgerUSBVendorId)
    }
];
function requestLedgerDevice() {
    return __awaiter(this, void 0, void 0, function*() {
        const device = yield navigator.usb.requestDevice({
            filters: ledgerDevices
        });
        return device;
    });
}
function getLedgerDevices() {
    return __awaiter(this, void 0, void 0, function*() {
        const devices = yield navigator.usb.getDevices();
        return devices.filter((d)=>d.vendorId === (0, _devices.ledgerUSBVendorId));
    });
}
function getFirstLedgerDevice() {
    return __awaiter(this, void 0, void 0, function*() {
        const existingDevices = yield getLedgerDevices();
        if (existingDevices.length > 0) return existingDevices[0];
        return requestLedgerDevice();
    });
}
const isSupported = ()=>Promise.resolve(!!navigator && !!navigator.usb && typeof navigator.usb.getDevices === "function");

},{"@ledgerhq/devices":"fnHxP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["anvqh","gLLPy"], "gLLPy", "parcelRequireede8")

//# sourceMappingURL=index.4d6bcbeb.js.map
