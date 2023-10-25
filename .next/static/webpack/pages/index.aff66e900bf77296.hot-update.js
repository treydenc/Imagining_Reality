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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! request */ \"./node_modules/request/index.js\");\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showCamera, setShowCamera] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = async (event)=>{\n        console.log(\"insubmit:\" + imageUrl + inputValue);\n        event.preventDefault();\n        setLoading(true);\n        var options = {\n            \"method\": \"POST\",\n            \"url\": \"https://stablediffusionapi.com/api/v3/img2img\",\n            \"headers\": {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"key\": \"knAkCZMcfHBnG7GUfuUpTvwFqa9Bhitmb27DTzlLqK7weju2MLSo5cvEmyYY\",\n                \"prompt\": inputValue + \" with an old time style, retro feel. \",\n                \"negative_prompt\": \"disfigured, kitsch, ugly, oversaturated, grain, low-res, Deformed, blurry, bad anatomy, disfigured, poorly drawn face, mutation, mutated, extra limb, ugly, poorly drawn hands, missing limb, blurry, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, ugly, disgusting, poorly drawn, childish, mutilated, cartoonish, mangled, old, surreal\",\n                \"init_image\": imageUrl || \"https://raw.githubusercontent.com/CompVis/stable-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png\",\n                \"width\": \"512\",\n                \"height\": \"512\",\n                \"samples\": \"1\",\n                \"num_inference_steps\": \"30\",\n                \"safety_checker\": \"no\",\n                \"enhance_prompt\": \"no\",\n                \"guidance_scale\": 7.5,\n                \"strength\": 0.7,\n                \"seed\": null,\n                \"webhook\": null,\n                \"track_id\": null\n            })\n        };\n        request__WEBPACK_IMPORTED_MODULE_4___default()(options, (error, response)=>{\n            console.log(\"inrequest! YAYAAY\");\n            if (error) {\n                console.error(\"Error:\", error);\n            } else {\n                console.log(response.body);\n                const responseData = JSON.parse(response.body);\n                if (responseData && responseData.output && responseData.output[0]) {\n                    setImageUrl(responseData.output[0]);\n                    console.log(\"this is our image:\" + imageUrl);\n                } else {\n                    console.error(\"Unexpected response format\");\n                }\n            }\n            setLoading(false);\n        });\n    };\n    const handleConfirm = (imageSrc)=>{\n        console.log(\"inHandleConfirm:\" + imageSrc);\n        setImageUrl(imageSrc);\n        setShowForm(true); // Show the form when the image is confirmed\n    };\n    // WebcamCapture Component\n    const WebcamCapture = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"pages_Webcam_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Webcam */ \"./pages/Webcam.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"index.js -> \" + \"./Webcam\"\n            ]\n        },\n        ssr: false,\n        loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 20\n            }, this) // Optional loading component\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-8a9894d0d2203c05\" + \" \" + \"min-h-screen bg-gray-100 flex flex-col justify-center\",\n        children: [\n            showForm ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"relative py-3 sm:max-w-xl sm:mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-8a9894d0d2203c05\" + \" \" + \"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>handleSubmit(e),\n                        className: \"jsx-8a9894d0d2203c05\" + \" \" + \"max-w-md mx-auto space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: inputValue,\n                                onChange: (e)=>setInputValue(e.target.value),\n                                placeholder: \"what do you feel like right now...\",\n                                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"w-full px-5 py-3 text-gray-700 bg-gray-200 rounded\"\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                disabled: loading,\n                                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"w-full px-3 py-4 text-white bg-black rounded-md focus:outline-none\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 76,\n                columnNumber: 20\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WebcamCapture, {\n                onConfirm: handleConfirm,\n                className: \"jsx-8a9894d0d2203c05\"\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"mt-12 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-8a9894d0d2203c05\" + \" \" + \"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12\"\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this),\n            imageUrl && !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"mt-12 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imageUrl,\n                    alt: \"Generated image\",\n                    className: \"jsx-8a9894d0d2203c05\" + \" \" + \"rounded-xl shadow-lg\"\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 102,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"8a9894d0d2203c05\",\n                children: \".loader.jsx-8a9894d0d2203c05{-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;-o-animation:spin 1s linear infinite;animation:spin 1s linear infinite;border-top-color:#3498db}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"S0qIW5mIKLueTtbZ8qOB4jmpTUs=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDeUI7MERBQWM7MEJBQ2IsNEVBQUNBOzhEQUFjOzs7Ozs7Ozs7OztZQUdsQjNCLFlBQVksQ0FBQ0UseUJBQ1osOERBQUN5QjswREFBYzswQkFDYiw0RUFBQ2E7b0JBQUlDLEtBQUt6QztvQkFBVTBDLEtBQUk7OERBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQjlEO0dBbkhTN0M7S0FBQUE7QUFxSFQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3JlcXVlc3QnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDYW1lcmEsIHNldFNob3dDYW1lcmFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Rm9ybSwgc2V0U2hvd0Zvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdpbnN1Ym1pdDonICsgaW1hZ2VVcmwgKyBpbnB1dFZhbHVlKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICdtZXRob2QnOiAnUE9TVCcsXHJcbiAgICAgICd1cmwnOiAnaHR0cHM6Ly9zdGFibGVkaWZmdXNpb25hcGkuY29tL2FwaS92My9pbWcyaW1nJyxcclxuICAgICAgJ2hlYWRlcnMnOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgXCJrZXlcIjogJ2tuQWtDWk1jZkhCbkc3R1VmdVVwVHZ3RnFhOUJoaXRtYjI3RFR6bExxSzd3ZWp1Mk1MU281Y3ZFbXlZWScsXHJcbiAgICAgICAgXCJwcm9tcHRcIjogaW5wdXRWYWx1ZSArIFwiIHdpdGggYW4gb2xkIHRpbWUgc3R5bGUsIHJldHJvIGZlZWwuIFwiLFxyXG4gICAgICAgIFwibmVnYXRpdmVfcHJvbXB0XCI6ICdkaXNmaWd1cmVkLCBraXRzY2gsIHVnbHksIG92ZXJzYXR1cmF0ZWQsIGdyYWluLCBsb3ctcmVzLCBEZWZvcm1lZCwgYmx1cnJ5LCBiYWQgYW5hdG9teSwgZGlzZmlndXJlZCwgcG9vcmx5IGRyYXduIGZhY2UsIG11dGF0aW9uLCBtdXRhdGVkLCBleHRyYSBsaW1iLCB1Z2x5LCBwb29ybHkgZHJhd24gaGFuZHMsIG1pc3NpbmcgbGltYiwgYmx1cnJ5LCBmbG9hdGluZyBsaW1icywgZGlzY29ubmVjdGVkIGxpbWJzLCBtYWxmb3JtZWQgaGFuZHMsIGJsdXIsIG91dCBvZiBmb2N1cywgbG9uZyBuZWNrLCBsb25nIGJvZHksIHVnbHksIGRpc2d1c3RpbmcsIHBvb3JseSBkcmF3biwgY2hpbGRpc2gsIG11dGlsYXRlZCwgY2FydG9vbmlzaCwgbWFuZ2xlZCwgb2xkLCBzdXJyZWFsJyxcclxuICAgICAgICBcImluaXRfaW1hZ2VcIjogaW1hZ2VVcmwgfHwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQ29tcFZpcy9zdGFibGUtZGlmZnVzaW9uL21haW4vZGF0YS9pbnBhaW50aW5nX2V4YW1wbGVzL292ZXJ0dXJlLWNyZWF0aW9ucy01c0k2ZlFnWUl1by5wbmdcIixcclxuICAgICAgICBcIndpZHRoXCI6IFwiNTEyXCIsXHJcbiAgICAgICAgXCJoZWlnaHRcIjogXCI1MTJcIixcclxuICAgICAgICBcInNhbXBsZXNcIjogXCIxXCIsXHJcbiAgICAgICAgXCJudW1faW5mZXJlbmNlX3N0ZXBzXCI6IFwiMzBcIixcclxuICAgICAgICBcInNhZmV0eV9jaGVja2VyXCI6IFwibm9cIixcclxuICAgICAgICBcImVuaGFuY2VfcHJvbXB0XCI6IFwibm9cIixcclxuICAgICAgICBcImd1aWRhbmNlX3NjYWxlXCI6IDcuNSxcclxuICAgICAgICBcInN0cmVuZ3RoXCI6IDAuNyxcclxuICAgICAgICBcInNlZWRcIjogbnVsbCxcclxuICAgICAgICBcIndlYmhvb2tcIjogbnVsbCxcclxuICAgICAgICBcInRyYWNrX2lkXCI6IG51bGxcclxuICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgcmVxdWVzdChvcHRpb25zLCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpbnJlcXVlc3QhIFlBWUFBWScpO1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuYm9keSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZS5ib2R5KTtcclxuICAgICAgICBpZiAocmVzcG9uc2VEYXRhICYmIHJlc3BvbnNlRGF0YS5vdXRwdXQgJiYgcmVzcG9uc2VEYXRhLm91dHB1dFswXSkge1xyXG4gICAgICAgICAgc2V0SW1hZ2VVcmwocmVzcG9uc2VEYXRhLm91dHB1dFswXSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBvdXIgaW1hZ2U6JyArIGltYWdlVXJsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgcmVzcG9uc2UgZm9ybWF0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuICBjb25zdCBoYW5kbGVDb25maXJtID0gKGltYWdlU3JjKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImluSGFuZGxlQ29uZmlybTpcIiArIGltYWdlU3JjKTtcclxuICAgIHNldEltYWdlVXJsKGltYWdlU3JjKTtcclxuICAgIHNldFNob3dGb3JtKHRydWUpOyAgLy8gU2hvdyB0aGUgZm9ybSB3aGVuIHRoZSBpbWFnZSBpcyBjb25maXJtZWRcclxuICB9O1xyXG5cclxuICAvLyBXZWJjYW1DYXB0dXJlIENvbXBvbmVudFxyXG4gIGNvbnN0IFdlYmNhbUNhcHR1cmUgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi9XZWJjYW0nKSwge1xyXG4gICAgc3NyOiBmYWxzZSwgIC8vIFRoaXMgd2lsbCBsb2FkIHRoZSBjb21wb25lbnQgY2xpZW50IHNpZGUgb25seVxyXG4gICAgbG9hZGluZzogKCkgPT4gPHA+TG9hZGluZy4uLjwvcD4gIC8vIE9wdGlvbmFsIGxvYWRpbmcgY29tcG9uZW50XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIHtzaG93Rm9ybSA/ICg8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHB5LTMgc206bWF4LXcteGwgc206bXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHgtNCBweS0xMCBiZy13aGl0ZSBzaGFkb3ctbGcgc206cm91bmRlZC0zeGwgc206cC0yMFwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VibWl0KGUpfSBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNSBweS0zIHRleHQtZ3JheS03MDAgYmctZ3JheS0yMDAgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ3aGF0IGRvIHlvdSBmZWVsIGxpa2UgcmlnaHQgbm93Li4uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktNCB0ZXh0LXdoaXRlIGJnLWJsYWNrIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lXCIgZGlzYWJsZWQ9e2xvYWRpbmd9PlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFdlYmNhbUNhcHR1cmUgb25Db25maXJtPXtoYW5kbGVDb25maXJtfSAvPlxyXG4gICAgICApfVxyXG4gICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlciBlYXNlLWxpbmVhciByb3VuZGVkLWZ1bGwgYm9yZGVyLTQgYm9yZGVyLXQtNCBib3JkZXItZ3JheS0yMDAgaC0xMiB3LTEyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtpbWFnZVVybCAmJiAhbG9hZGluZyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cIkdlbmVyYXRlZCBpbWFnZVwiIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgc2hhZG93LWxnXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5sb2FkZXIge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMzNDk4ZGI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJSZWFjdCIsImR5bmFtaWMiLCJyZXF1ZXN0IiwiSG9tZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2hvd0NhbWVyYSIsInNldFNob3dDYW1lcmEiLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJvcHRpb25zIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsInJlc3BvbnNlIiwicmVzcG9uc2VEYXRhIiwicGFyc2UiLCJvdXRwdXQiLCJoYW5kbGVDb25maXJtIiwiaW1hZ2VTcmMiLCJXZWJjYW1DYXB0dXJlIiwic3NyIiwicCIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ29uZmlybSIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});