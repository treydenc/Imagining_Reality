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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! request */ \"./node_modules/request/index.js\");\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showCamera, setShowCamera] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = async (event)=>{\n        console.log(\"insubmit:\" + imageUrl + inputValue);\n        event.preventDefault();\n        setLoading(true);\n        var options = {\n            \"method\": \"POST\",\n            \"url\": \"https://stablediffusionapi.com/api/v3/img2img\",\n            \"headers\": {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"key\": \"knAkCZMcfHBnG7GUfuUpTvwFqa9Bhitmb27DTzlLqK7weju2MLSo5cvEmyYY\",\n                \"prompt\": inputValue,\n                \"negative_prompt\": null,\n                \"init_image\": imageUrl || \"https://raw.githubusercontent.com/CompVis/stable-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png\",\n                \"height\": \"512\",\n                \"samples\": \"1\",\n                \"num_inference_steps\": \"30\",\n                \"safety_checker\": \"no\",\n                \"enhance_prompt\": \"yes\",\n                \"guidance_scale\": 7.5,\n                \"strength\": 0.7,\n                \"seed\": null,\n                \"webhook\": null,\n                \"track_id\": null\n            })\n        };\n        request__WEBPACK_IMPORTED_MODULE_4___default()(options, (error, response)=>{\n            console.log(\"inrequest\");\n            if (error) {\n                console.error(\"Error:\", error);\n            } else {\n                console.log(response.body);\n                const responseData = JSON.parse(response.body);\n                if (responseData && responseData[0]) {\n                    setImageUrl(responseData[0]);\n                } else {\n                    console.error(\"Unexpected response format\");\n                }\n            }\n            setLoading(false);\n        });\n    };\n    const handleConfirm = (imageSrc)=>{\n        console.log(\"inHandleConfirm:\" + imageSrc);\n        setImageUrl(imageSrc);\n        setShowForm(true); // Show the form when the image is confirmed\n    };\n    // WebcamCapture Component\n    const WebcamCapture = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"pages_Webcam_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Webcam */ \"./pages/Webcam.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"index.js -> \" + \"./Webcam\"\n            ]\n        },\n        ssr: false,\n        loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 69,\n                columnNumber: 20\n            }, this) // Optional loading component\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-8a9894d0d2203c05\" + \" \" + \"min-h-screen bg-gray-100 flex flex-col justify-center\",\n        children: [\n            showForm ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"relative py-3 sm:max-w-xl sm:mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-8a9894d0d2203c05\" + \" \" + \"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>handleSubmit(e),\n                        className: \"jsx-8a9894d0d2203c05\" + \" \" + \"max-w-md mx-auto space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: inputValue,\n                                onChange: (e)=>setInputValue(e.target.value),\n                                placeholder: \"Enter a prompt...\",\n                                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"w-full px-5 py-3 text-gray-700 bg-gray-200 rounded\"\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                disabled: loading,\n                                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"w-full px-3 py-4 text-white bg-gradient-to-r from-cyan-400 via-green-500 to-cyan-400 rounded-md focus:outline-none\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 74,\n                columnNumber: 20\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WebcamCapture, {\n                onConfirm: handleConfirm,\n                className: \"jsx-8a9894d0d2203c05\"\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"mt-12 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-8a9894d0d2203c05\" + \" \" + \"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12\"\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 95,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, this),\n            imageUrl && !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"mt-12 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imageUrl,\n                    alt: \"Generated image\",\n                    className: \"jsx-8a9894d0d2203c05\" + \" \" + \"rounded-xl shadow-lg\"\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 100,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"8a9894d0d2203c05\",\n                children: \".loader.jsx-8a9894d0d2203c05{-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;-o-animation:spin 1s linear infinite;animation:spin 1s linear infinite;border-top-color:#3498db}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"S0qIW5mIKLueTtbZ8qOB4jmpTUs=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0I7MERBQWM7MEJBQ2IsNEVBQUNhO29CQUFJQyxLQUFLeEM7b0JBQVV5QyxLQUFJOzhEQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0I5RDtHQWpIUzVDO0tBQUFBO0FBbUhULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0JztcclxuXHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Q2FtZXJhLCBzZXRTaG93Q2FtZXJhXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaW5zdWJtaXQ6JyArIGltYWdlVXJsICsgaW5wdXRWYWx1ZSk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAnbWV0aG9kJzogJ1BPU1QnLFxyXG4gICAgICAndXJsJzogJ2h0dHBzOi8vc3RhYmxlZGlmZnVzaW9uYXBpLmNvbS9hcGkvdjMvaW1nMmltZycsXHJcbiAgICAgICdoZWFkZXJzJzoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIFwia2V5XCI6IFwia25Ba0NaTWNmSEJuRzdHVWZ1VXBUdndGcWE5QmhpdG1iMjdEVHpsTHFLN3dlanUyTUxTbzVjdkVteVlZXCIsXHJcbiAgICAgICAgXCJwcm9tcHRcIjogaW5wdXRWYWx1ZSxcclxuICAgICAgICBcIm5lZ2F0aXZlX3Byb21wdFwiOiBudWxsLFxyXG4gICAgICAgIFwiaW5pdF9pbWFnZVwiOiBpbWFnZVVybCB8fCBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Db21wVmlzL3N0YWJsZS1kaWZmdXNpb24vbWFpbi9kYXRhL2lucGFpbnRpbmdfZXhhbXBsZXMvb3ZlcnR1cmUtY3JlYXRpb25zLTVzSTZmUWdZSXVvLnBuZ1wiLFxyXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiNTEyXCIsXHJcbiAgICAgICAgXCJzYW1wbGVzXCI6IFwiMVwiLFxyXG4gICAgICAgIFwibnVtX2luZmVyZW5jZV9zdGVwc1wiOiBcIjMwXCIsXHJcbiAgICAgICAgXCJzYWZldHlfY2hlY2tlclwiOiBcIm5vXCIsXHJcbiAgICAgICAgXCJlbmhhbmNlX3Byb21wdFwiOiBcInllc1wiLFxyXG4gICAgICAgIFwiZ3VpZGFuY2Vfc2NhbGVcIjogNy41LFxyXG4gICAgICAgIFwic3RyZW5ndGhcIjogMC43LFxyXG4gICAgICAgIFwic2VlZFwiOiBudWxsLFxyXG4gICAgICAgIFwid2ViaG9va1wiOiBudWxsLFxyXG4gICAgICAgIFwidHJhY2tfaWRcIjogbnVsbFxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICByZXF1ZXN0KG9wdGlvbnMsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2lucmVxdWVzdCcpO1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuYm9keSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZS5ib2R5KTtcclxuICAgICAgICBpZiAocmVzcG9uc2VEYXRhICYmIHJlc3BvbnNlRGF0YVswXSkge1xyXG4gICAgICAgICAgc2V0SW1hZ2VVcmwocmVzcG9uc2VEYXRhWzBdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCByZXNwb25zZSBmb3JtYXQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29uZmlybSA9IChpbWFnZVNyYykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbkhhbmRsZUNvbmZpcm06XCIgKyBpbWFnZVNyYyk7XHJcbiAgICBzZXRJbWFnZVVybChpbWFnZVNyYyk7XHJcbiAgICBzZXRTaG93Rm9ybSh0cnVlKTsgIC8vIFNob3cgdGhlIGZvcm0gd2hlbiB0aGUgaW1hZ2UgaXMgY29uZmlybWVkXHJcbiAgfTtcclxuXHJcbiAgLy8gV2ViY2FtQ2FwdHVyZSBDb21wb25lbnRcclxuICBjb25zdCBXZWJjYW1DYXB0dXJlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vV2ViY2FtJyksIHtcclxuICAgIHNzcjogZmFsc2UsICAvLyBUaGlzIHdpbGwgbG9hZCB0aGUgY29tcG9uZW50IGNsaWVudCBzaWRlIG9ubHlcclxuICAgIGxvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcuLi48L3A+ICAvLyBPcHRpb25hbCBsb2FkaW5nIGNvbXBvbmVudFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS0xMDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICB7c2hvd0Zvcm0gPyAoPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweS0zIHNtOm1heC13LXhsIHNtOm14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHB4LTQgcHktMTAgYmctd2hpdGUgc2hhZG93LWxnIHNtOnJvdW5kZWQtM3hsIHNtOnAtMjBcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0gY2xhc3NOYW1lPVwibWF4LXctbWQgbXgtYXV0byBzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTUgcHktMyB0ZXh0LWdyYXktNzAwIGJnLWdyYXktMjAwIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBwcm9tcHQuLi5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS00IHRleHQtd2hpdGUgYmctZ3JhZGllbnQtdG8tciBmcm9tLWN5YW4tNDAwIHZpYS1ncmVlbi01MDAgdG8tY3lhbi00MDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmVcIiBkaXNhYmxlZD17bG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8V2ViY2FtQ2FwdHVyZSBvbkNvbmZpcm09e2hhbmRsZUNvbmZpcm19IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyIGVhc2UtbGluZWFyIHJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXItdC00IGJvcmRlci1ncmF5LTIwMCBoLTEyIHctMTJcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge2ltYWdlVXJsICYmICFsb2FkaW5nICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwiR2VuZXJhdGVkIGltYWdlXCIgY2xhc3NOYW1lPVwicm91bmRlZC14bCBzaGFkb3ctbGdcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmxvYWRlciB7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzM0OThkYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIlJlYWN0IiwiZHluYW1pYyIsInJlcXVlc3QiLCJIb21lIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzaG93Q2FtZXJhIiwic2V0U2hvd0NhbWVyYSIsInNob3dGb3JtIiwic2V0U2hvd0Zvcm0iLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsIm9wdGlvbnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwicmVzcG9uc2UiLCJyZXNwb25zZURhdGEiLCJwYXJzZSIsImhhbmRsZUNvbmZpcm0iLCJpbWFnZVNyYyIsIldlYmNhbUNhcHR1cmUiLCJzc3IiLCJwIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsImRpc2FibGVkIiwib25Db25maXJtIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});