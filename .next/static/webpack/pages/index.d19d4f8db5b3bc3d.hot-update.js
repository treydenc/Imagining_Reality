"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/firebase.js":
/*!***************************!*\
  !*** ./pages/firebase.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"./node_modules/firebase/analytics/dist/esm/index.esm.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n// Import the functions you need from the SDKs you need\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,\n    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,\n    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,\n    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,\n    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,\n    appId: process.env.REACT_APP_FIREBASE_APP_ID,\n    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.getAnalytics)(app);\nconst storage = firebase.storage();\n/* harmony default export */ __webpack_exports__[\"default\"] = (storage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsdURBQXVEO0FBQ1Y7QUFDSztBQUNsRCw0REFBNEQ7QUFDNUQsaUVBQWlFO0FBRWpFLHdDQUF3QztBQUN4QyxtRUFBbUU7QUFDbkUsTUFBTUUsaUJBQWlCO0lBQ3ZCQyxRQUFRQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLDBCQUEwQjtJQUM5Q0MsWUFBWUgsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDRyw4QkFBOEI7SUFDdERDLFdBQVdMLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0ssNkJBQTZCO0lBQ3BEQyxlQUFlUCxPQUFPQSxDQUFDQyxHQUFHLENBQUNPLGlDQUFpQztJQUM1REMsbUJBQW1CVCxPQUFPQSxDQUFDQyxHQUFHLENBQUNTLHNDQUFzQztJQUNyRUMsT0FBT1gsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDVyx5QkFBeUI7SUFDNUNDLGVBQWViLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ2EsaUNBQWlDO0FBQzVEO0FBRUEsc0JBQXNCO0FBQ3RCLE1BQU1DLE1BQU1uQiwyREFBYUEsQ0FBQ0U7QUFDMUIsTUFBTWtCLFlBQVluQixnRUFBWUEsQ0FBQ2tCO0FBQy9CLE1BQU1FLFVBQVVDLFNBQVNELE9BQU87QUFDaEMsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlyZWJhc2UuanM/MzRjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcclxuLy8gVE9ETzogQWRkIFNES3MgZm9yIEZpcmViYXNlIHByb2R1Y3RzIHRoYXQgeW91IHdhbnQgdG8gdXNlXHJcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXHJcblxyXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbmFwaUtleTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX0FQSV9LRVksXHJcbmF1dGhEb21haW46IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9BVVRIX0RPTUFJTixcclxucHJvamVjdElkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRklSRUJBU0VfUFJPSkVDVF9JRCxcclxuc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG5tZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbmFwcElkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRklSRUJBU0VfQVBQX0lELFxyXG5tZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRklSRUJBU0VfTUVBU1VSRU1FTlRfSUQsXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBhbmFseXRpY3MgPSBnZXRBbmFseXRpY3MoYXBwKTtcclxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTsiXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFuYWx5dGljcyIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9GSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsIlJFQUNUX0FQUF9GSVJFQkFTRV9BVVRIX0RPTUFJTiIsInByb2plY3RJZCIsIlJFQUNUX0FQUF9GSVJFQkFTRV9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIlJFQUNUX0FQUF9GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiUkVBQ1RfQVBQX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQiLCJhcHBJZCIsIlJFQUNUX0FQUF9GSVJFQkFTRV9BUFBfSUQiLCJtZWFzdXJlbWVudElkIiwiUkVBQ1RfQVBQX0ZJUkVCQVNFX01FQVNVUkVNRU5UX0lEIiwiYXBwIiwiYW5hbHl0aWNzIiwic3RvcmFnZSIsImZpcmViYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/firebase.js\n"));

/***/ })

});