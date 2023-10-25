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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! request */ \"./node_modules/request/index.js\");\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showCamera, setShowCamera] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = async (event)=>{\n        console.log(\"insubmit:\" + imageUrl + inputValue);\n        event.preventDefault();\n        setLoading(true);\n        var options = {\n            \"method\": \"POST\",\n            \"url\": \"https://stablediffusionapi.com/api/v3/img2img\",\n            \"headers\": {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"key\": \"\",\n                \"prompt\": inputValue,\n                \"negative_prompt\": null,\n                \"init_image\": imageUrl || \"https://raw.githubusercontent.com/CompVis/stable-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png\",\n                \"width\": \"512\",\n                \"height\": \"512\",\n                \"samples\": \"1\",\n                \"num_inference_steps\": \"30\",\n                \"safety_checker\": \"no\",\n                \"enhance_prompt\": \"yes\",\n                \"guidance_scale\": 7.5,\n                \"strength\": 0.7,\n                \"seed\": null,\n                \"webhook\": null,\n                \"track_id\": null\n            })\n        };\n        request__WEBPACK_IMPORTED_MODULE_4___default()(options, (error, response)=>{\n            console.log(\"inrequest! YAYAAY\");\n            if (error) {\n                console.error(\"Error:\", error);\n            } else {\n                console.log(response.body);\n                const responseData = JSON.parse(response.body);\n                if (responseData && responseData.output && responseData.output[0]) {\n                    setImageUrl(responseData.output[0]);\n                    console.log(\"this is our image:\" + imageUrl);\n                } else {\n                    console.error(\"Unexpected response format\");\n                }\n            }\n            setLoading(false);\n        });\n    };\n    const handleConfirm = (imageSrc)=>{\n        console.log(\"inHandleConfirm:\" + imageSrc);\n        setImageUrl(imageSrc);\n        setShowForm(true); // Show the form when the image is confirmed\n    };\n    // WebcamCapture Component\n    const WebcamCapture = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"pages_Webcam_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Webcam */ \"./pages/Webcam.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"index.js -> \" + \"./Webcam\"\n            ]\n        },\n        ssr: false,\n        loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 20\n            }, this) // Optional loading component\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-8a9894d0d2203c05\" + \" \" + \"min-h-screen bg-gray-100 flex flex-col justify-center\",\n        children: [\n            showForm ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"relative py-3 sm:max-w-xl sm:mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-8a9894d0d2203c05\" + \" \" + \"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>handleSubmit(e),\n                        className: \"jsx-8a9894d0d2203c05\" + \" \" + \"max-w-md mx-auto space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: inputValue,\n                                onChange: (e)=>setInputValue(e.target.value),\n                                placeholder: \"what do you feel like right now...\",\n                                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"w-full px-5 py-3 text-gray-700 bg-gray-200 rounded\"\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                disabled: loading,\n                                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"w-full px-3 py-4 text-white bg-gradient-to-r from-cyan-400 via-green-500 to-cyan-400 rounded-md focus:outline-none\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 76,\n                columnNumber: 20\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WebcamCapture, {\n                onConfirm: handleConfirm,\n                className: \"jsx-8a9894d0d2203c05\"\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"mt-12 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-8a9894d0d2203c05\" + \" \" + \"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12\"\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this),\n            imageUrl && !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"mt-12 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imageUrl,\n                    alt: \"Generated image\",\n                    className: \"jsx-8a9894d0d2203c05\" + \" \" + \"rounded-xl shadow-lg\"\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 102,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"8a9894d0d2203c05\",\n                children: \".loader.jsx-8a9894d0d2203c05{-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;-o-animation:spin 1s linear infinite;animation:spin 1s linear infinite;border-top-color:#3498db}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"S0qIW5mIKLueTtbZ8qOB4jmpTUs=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUN5QjswREFBYzswQkFDYiw0RUFBQ0E7OERBQWM7Ozs7Ozs7Ozs7O1lBR2xCM0IsWUFBWSxDQUFDRSx5QkFDWiw4REFBQ3lCOzBEQUFjOzBCQUNiLDRFQUFDYTtvQkFBSUMsS0FBS3pDO29CQUFVMEMsS0FBSTs4REFBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9COUQ7R0FuSFM3QztLQUFBQTtBQXFIVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0NhbWVyYSwgc2V0U2hvd0NhbWVyYV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dGb3JtLCBzZXRTaG93Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2luc3VibWl0OicgKyBpbWFnZVVybCArIGlucHV0VmFsdWUpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgJ21ldGhvZCc6ICdQT1NUJyxcclxuICAgICAgJ3VybCc6ICdodHRwczovL3N0YWJsZWRpZmZ1c2lvbmFwaS5jb20vYXBpL3YzL2ltZzJpbWcnLFxyXG4gICAgICAnaGVhZGVycyc6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBcImtleVwiOiAnJyxcclxuICAgICAgICBcInByb21wdFwiOiBpbnB1dFZhbHVlLFxyXG4gICAgICAgIFwibmVnYXRpdmVfcHJvbXB0XCI6IG51bGwsXHJcbiAgICAgICAgXCJpbml0X2ltYWdlXCI6IGltYWdlVXJsIHx8IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0NvbXBWaXMvc3RhYmxlLWRpZmZ1c2lvbi9tYWluL2RhdGEvaW5wYWludGluZ19leGFtcGxlcy9vdmVydHVyZS1jcmVhdGlvbnMtNXNJNmZRZ1lJdW8ucG5nXCIsXHJcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUxMlwiLFxyXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiNTEyXCIsXHJcbiAgICAgICAgXCJzYW1wbGVzXCI6IFwiMVwiLFxyXG4gICAgICAgIFwibnVtX2luZmVyZW5jZV9zdGVwc1wiOiBcIjMwXCIsXHJcbiAgICAgICAgXCJzYWZldHlfY2hlY2tlclwiOiBcIm5vXCIsXHJcbiAgICAgICAgXCJlbmhhbmNlX3Byb21wdFwiOiBcInllc1wiLFxyXG4gICAgICAgIFwiZ3VpZGFuY2Vfc2NhbGVcIjogNy41LFxyXG4gICAgICAgIFwic3RyZW5ndGhcIjogMC43LFxyXG4gICAgICAgIFwic2VlZFwiOiBudWxsLFxyXG4gICAgICAgIFwid2ViaG9va1wiOiBudWxsLFxyXG4gICAgICAgIFwidHJhY2tfaWRcIjogbnVsbFxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICByZXF1ZXN0KG9wdGlvbnMsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2lucmVxdWVzdCEgWUFZQUFZJyk7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5ib2R5KTtcclxuICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlLmJvZHkpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZURhdGEgJiYgcmVzcG9uc2VEYXRhLm91dHB1dCAmJiByZXNwb25zZURhdGEub3V0cHV0WzBdKSB7XHJcbiAgICAgICAgICBzZXRJbWFnZVVybChyZXNwb25zZURhdGEub3V0cHV0WzBdKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIG91ciBpbWFnZTonICsgaW1hZ2VVcmwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCByZXNwb25zZSBmb3JtYXQnKTtcclxuICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm0gPSAoaW1hZ2VTcmMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5IYW5kbGVDb25maXJtOlwiICsgaW1hZ2VTcmMpO1xyXG4gICAgc2V0SW1hZ2VVcmwoaW1hZ2VTcmMpO1xyXG4gICAgc2V0U2hvd0Zvcm0odHJ1ZSk7ICAvLyBTaG93IHRoZSBmb3JtIHdoZW4gdGhlIGltYWdlIGlzIGNvbmZpcm1lZFxyXG4gIH07XHJcblxyXG4gIC8vIFdlYmNhbUNhcHR1cmUgQ29tcG9uZW50XHJcbiAgY29uc3QgV2ViY2FtQ2FwdHVyZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL1dlYmNhbScpLCB7XHJcbiAgICBzc3I6IGZhbHNlLCAgLy8gVGhpcyB3aWxsIGxvYWQgdGhlIGNvbXBvbmVudCBjbGllbnQgc2lkZSBvbmx5XHJcbiAgICBsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nLi4uPC9wPiAgLy8gT3B0aW9uYWwgbG9hZGluZyBjb21wb25lbnRcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktMTAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAge3Nob3dGb3JtID8gKDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHktMyBzbTptYXgtdy14bCBzbTpteC1hdXRvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweC00IHB5LTEwIGJnLXdoaXRlIHNoYWRvdy1sZyBzbTpyb3VuZGVkLTN4bCBzbTpwLTIwXCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC01IHB5LTMgdGV4dC1ncmF5LTcwMCBiZy1ncmF5LTIwMCByb3VuZGVkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIndoYXQgZG8geW91IGZlZWwgbGlrZSByaWdodCBub3cuLi5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS00IHRleHQtd2hpdGUgYmctZ3JhZGllbnQtdG8tciBmcm9tLWN5YW4tNDAwIHZpYS1ncmVlbi01MDAgdG8tY3lhbi00MDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmVcIiBkaXNhYmxlZD17bG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8V2ViY2FtQ2FwdHVyZSBvbkNvbmZpcm09e2hhbmRsZUNvbmZpcm19IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyIGVhc2UtbGluZWFyIHJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXItdC00IGJvcmRlci1ncmF5LTIwMCBoLTEyIHctMTJcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge2ltYWdlVXJsICYmICFsb2FkaW5nICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwiR2VuZXJhdGVkIGltYWdlXCIgY2xhc3NOYW1lPVwicm91bmRlZC14bCBzaGFkb3ctbGdcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmxvYWRlciB7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzM0OThkYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIlJlYWN0IiwiZHluYW1pYyIsInJlcXVlc3QiLCJIb21lIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzaG93Q2FtZXJhIiwic2V0U2hvd0NhbWVyYSIsInNob3dGb3JtIiwic2V0U2hvd0Zvcm0iLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsIm9wdGlvbnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwicmVzcG9uc2UiLCJyZXNwb25zZURhdGEiLCJwYXJzZSIsIm91dHB1dCIsImhhbmRsZUNvbmZpcm0iLCJpbWFnZVNyYyIsIldlYmNhbUNhcHR1cmUiLCJzc3IiLCJwIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsImRpc2FibGVkIiwib25Db25maXJtIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});