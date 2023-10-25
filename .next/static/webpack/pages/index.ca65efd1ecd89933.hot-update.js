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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! request */ \"./node_modules/request/index.js\");\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showCamera, setShowCamera] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = async (event, imageUrl)=>{\n        event.preventDefault();\n        setLoading(true);\n        var options = {\n            \"method\": \"POST\",\n            \"url\": \"https://stablediffusionapi.com/api/v3/img2img\",\n            \"headers\": {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"key\": \"knAkCZMcfHBnG7GUfuUpTvwFqa9Bhitmb27DTzlLqK7weju2MLSo5cvEmyYY\",\n                \"prompt\": inputValue,\n                \"negative_prompt\": null,\n                \"init_image\": imageUrl || \"https://raw.githubusercontent.com/CompVis/stable-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png\",\n                \"height\": \"512\",\n                \"samples\": \"1\",\n                \"num_inference_steps\": \"30\",\n                \"safety_checker\": \"no\",\n                \"enhance_prompt\": \"yes\",\n                \"guidance_scale\": 7.5,\n                \"strength\": 0.7,\n                \"seed\": null,\n                \"webhook\": null,\n                \"track_id\": null\n            })\n        };\n        request__WEBPACK_IMPORTED_MODULE_4___default()(options, (error, response)=>{\n            console.log(\"inrequest\");\n            if (error) {\n                console.error(\"Error:\", error);\n            } else {\n                console.log(response.body);\n                const responseData = JSON.parse(response.body);\n                if (responseData && responseData[0]) {\n                    setImageUrl(responseData[0]);\n                } else {\n                    console.error(\"Unexpected response format\");\n                }\n            }\n            setLoading(false);\n        });\n    };\n    const handleConfirm = (imageSrc)=>{\n        console.log(\"inHandleConfirm:\" + imageSrc);\n        setImageUrl(imageSrc);\n        setShowForm(true); // Show the form when the image is confirmed\n    };\n    // WebcamCapture Component\n    const WebcamCapture = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"pages_Webcam_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Webcam */ \"./pages/Webcam.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"index.js -> \" + \"./Webcam\"\n            ]\n        },\n        ssr: false,\n        loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 68,\n                columnNumber: 20\n            }, this) // Optional loading component\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-8a9894d0d2203c05\" + \" \" + \"min-h-screen bg-gray-100 flex flex-col justify-center\",\n        children: [\n            showForm ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"relative py-3 sm:max-w-xl sm:mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-8a9894d0d2203c05\" + \" \" + \"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>handleSubmit(e),\n                        className: \"jsx-8a9894d0d2203c05\" + \" \" + \"max-w-md mx-auto space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: inputValue,\n                                onChange: (e)=>setInputValue(e.target.value),\n                                placeholder: \"Enter a prompt...\",\n                                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"w-full px-5 py-3 text-gray-700 bg-gray-200 rounded\"\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                disabled: loading,\n                                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"w-full px-3 py-4 text-white bg-gradient-to-r from-cyan-400 via-green-500 to-cyan-400 rounded-md focus:outline-none\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 20\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WebcamCapture, {\n                onConfirm: handleConfirm,\n                className: \"jsx-8a9894d0d2203c05\"\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"mt-12 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-8a9894d0d2203c05\" + \" \" + \"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12\"\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this),\n            imageUrl && !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"mt-12 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imageUrl,\n                    alt: \"Generated image\",\n                    className: \"jsx-8a9894d0d2203c05\" + \" \" + \"rounded-xl shadow-lg\"\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"8a9894d0d2203c05\",\n                children: \".loader.jsx-8a9894d0d2203c05{-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;-o-animation:spin 1s linear infinite;animation:spin 1s linear infinite;border-top-color:#3498db}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"S0qIW5mIKLueTtbZ8qOB4jmpTUs=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLeEM7b0JBQVV5QyxLQUFJOzhEQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0I5RDtHQWhIUzVDO0tBQUFBO0FBa0hULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0JztcclxuXHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Q2FtZXJhLCBzZXRTaG93Q2FtZXJhXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50LCBpbWFnZVVybCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgJ21ldGhvZCc6ICdQT1NUJyxcclxuICAgICAgJ3VybCc6ICdodHRwczovL3N0YWJsZWRpZmZ1c2lvbmFwaS5jb20vYXBpL3YzL2ltZzJpbWcnLFxyXG4gICAgICAnaGVhZGVycyc6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBcImtleVwiOiBcImtuQWtDWk1jZkhCbkc3R1VmdVVwVHZ3RnFhOUJoaXRtYjI3RFR6bExxSzd3ZWp1Mk1MU281Y3ZFbXlZWVwiLFxyXG4gICAgICAgIFwicHJvbXB0XCI6IGlucHV0VmFsdWUsXHJcbiAgICAgICAgXCJuZWdhdGl2ZV9wcm9tcHRcIjogbnVsbCxcclxuICAgICAgICBcImluaXRfaW1hZ2VcIjogaW1hZ2VVcmwgfHwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQ29tcFZpcy9zdGFibGUtZGlmZnVzaW9uL21haW4vZGF0YS9pbnBhaW50aW5nX2V4YW1wbGVzL292ZXJ0dXJlLWNyZWF0aW9ucy01c0k2ZlFnWUl1by5wbmdcIixcclxuICAgICAgICBcImhlaWdodFwiOiBcIjUxMlwiLFxyXG4gICAgICAgIFwic2FtcGxlc1wiOiBcIjFcIixcclxuICAgICAgICBcIm51bV9pbmZlcmVuY2Vfc3RlcHNcIjogXCIzMFwiLFxyXG4gICAgICAgIFwic2FmZXR5X2NoZWNrZXJcIjogXCJub1wiLFxyXG4gICAgICAgIFwiZW5oYW5jZV9wcm9tcHRcIjogXCJ5ZXNcIixcclxuICAgICAgICBcImd1aWRhbmNlX3NjYWxlXCI6IDcuNSxcclxuICAgICAgICBcInN0cmVuZ3RoXCI6IDAuNyxcclxuICAgICAgICBcInNlZWRcIjogbnVsbCxcclxuICAgICAgICBcIndlYmhvb2tcIjogbnVsbCxcclxuICAgICAgICBcInRyYWNrX2lkXCI6IG51bGxcclxuICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgcmVxdWVzdChvcHRpb25zLCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpbnJlcXVlc3QnKTtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmJvZHkpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UuYm9keSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlRGF0YSAmJiByZXNwb25zZURhdGFbMF0pIHtcclxuICAgICAgICAgIHNldEltYWdlVXJsKHJlc3BvbnNlRGF0YVswXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgcmVzcG9uc2UgZm9ybWF0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm0gPSAoaW1hZ2VTcmMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5IYW5kbGVDb25maXJtOlwiICsgaW1hZ2VTcmMpO1xyXG4gICAgc2V0SW1hZ2VVcmwoaW1hZ2VTcmMpO1xyXG4gICAgc2V0U2hvd0Zvcm0odHJ1ZSk7ICAvLyBTaG93IHRoZSBmb3JtIHdoZW4gdGhlIGltYWdlIGlzIGNvbmZpcm1lZFxyXG4gIH07XHJcblxyXG4gIC8vIFdlYmNhbUNhcHR1cmUgQ29tcG9uZW50XHJcbiAgY29uc3QgV2ViY2FtQ2FwdHVyZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL1dlYmNhbScpLCB7XHJcbiAgICBzc3I6IGZhbHNlLCAgLy8gVGhpcyB3aWxsIGxvYWQgdGhlIGNvbXBvbmVudCBjbGllbnQgc2lkZSBvbmx5XHJcbiAgICBsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nLi4uPC9wPiAgLy8gT3B0aW9uYWwgbG9hZGluZyBjb21wb25lbnRcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktMTAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAge3Nob3dGb3JtID8gKDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHktMyBzbTptYXgtdy14bCBzbTpteC1hdXRvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweC00IHB5LTEwIGJnLXdoaXRlIHNoYWRvdy1sZyBzbTpyb3VuZGVkLTN4bCBzbTpwLTIwXCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC01IHB5LTMgdGV4dC1ncmF5LTcwMCBiZy1ncmF5LTIwMCByb3VuZGVkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgcHJvbXB0Li4uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktNCB0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1jeWFuLTQwMCB2aWEtZ3JlZW4tNTAwIHRvLWN5YW4tNDAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lXCIgZGlzYWJsZWQ9e2xvYWRpbmd9PlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFdlYmNhbUNhcHR1cmUgb25Db25maXJtPXtoYW5kbGVDb25maXJtfSAvPlxyXG4gICAgICApfVxyXG4gICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlciBlYXNlLWxpbmVhciByb3VuZGVkLWZ1bGwgYm9yZGVyLTQgYm9yZGVyLXQtNCBib3JkZXItZ3JheS0yMDAgaC0xMiB3LTEyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtpbWFnZVVybCAmJiAhbG9hZGluZyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cIkdlbmVyYXRlZCBpbWFnZVwiIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgc2hhZG93LWxnXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5sb2FkZXIge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMzNDk4ZGI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJSZWFjdCIsImR5bmFtaWMiLCJyZXF1ZXN0IiwiSG9tZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2hvd0NhbWVyYSIsInNldFNob3dDYW1lcmEiLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9wdGlvbnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2VEYXRhIiwicGFyc2UiLCJoYW5kbGVDb25maXJtIiwiaW1hZ2VTcmMiLCJXZWJjYW1DYXB0dXJlIiwic3NyIiwicCIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ29uZmlybSIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});