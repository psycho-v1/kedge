/** Vendored from psycho-v1/splitkit browser/splitkit.js */
(function (global) {
  "use strict";
  function hostOf(url) {
    try { return new URL(url).hostname.toLowerCase(); }
    catch (e) { throw new Error("Invalid RPC URL: " + url); }
  }
  function DeniedHostError(url, matched) {
    var err = new Error('RPC host denied by pin: ' + url + ' matched "' + matched + '"');
    err.name = "DeniedHostError"; err.url = url; err.matched = matched; return err;
  }
  function assertAllowed(url, deniedHostSubstrings) {
    var host = hostOf(url);
    var list = deniedHostSubstrings || [];
    for (var i = 0; i < list.length; i++) {
      var needle = String(list[i] || "").toLowerCase();
      if (needle && host.indexOf(needle) !== -1) throw DeniedHostError(url, list[i]);
    }
  }
  global.Splitkit = { version: "0.1.0", hostOf: hostOf, assertAllowed: assertAllowed };
})(typeof window !== "undefined" ? window : globalThis);
