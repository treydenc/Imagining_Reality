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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! request */ \"./node_modules/request/index.js\");\n/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showCamera, setShowCamera] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showGen, setShowGen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = async (event)=>{\n        console.log(\"insubmit:\" + imageUrl + inputValue);\n        event.preventDefault();\n        setLoading(true);\n        var options = {\n            \"method\": \"POST\",\n            \"url\": \"https://stablediffusionapi.com/api/v3/img2img\",\n            \"headers\": {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"key\": \"knAkCZMcfHBnG7GUfuUpTvwFqa9Bhitmb27DTzlLqK7weju2MLSo5cvEmyYY\",\n                \"prompt\": inputValue + \" with an old time style, retro feel. aged filter\",\n                \"negative_prompt\": \"disfigured, kitsch, ugly, oversaturated, grain, low-res, Deformed, blurry, bad anatomy, disfigured, poorly drawn face, mutation, mutated, extra limb, ugly, poorly drawn hands, missing limb, blurry, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, ugly, disgusting, poorly drawn, childish, mutilated, cartoonish, mangled, old, surreal\",\n                \"init_image\": imageUrl || \"https://raw.githubusercontent.com/CompVis/stable-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png\",\n                \"width\": \"512\",\n                \"height\": \"512\",\n                \"samples\": \"1\",\n                \"num_inference_steps\": \"30\",\n                \"safety_checker\": \"no\",\n                \"enhance_prompt\": \"no\",\n                \"guidance_scale\": 7.5,\n                \"strength\": 0.7,\n                \"seed\": null,\n                \"webhook\": null,\n                \"track_id\": null\n            })\n        };\n        request__WEBPACK_IMPORTED_MODULE_4___default()(options, (error, response)=>{\n            console.log(\"inrequest! YAYAAY\");\n            if (error) {\n                console.error(\"Error:\", error);\n            } else {\n                console.log(response.body);\n                const responseData = JSON.parse(response.body);\n                if (responseData && responseData.output && responseData.output[0]) {\n                    setImageUrl(responseData.output[0]);\n                    console.log(\"this is our image:\" + imageUrl);\n                } else {\n                    console.error(\"Unexpected response format\");\n                }\n            }\n            setShowGen(true);\n            setLoading(false);\n        });\n    };\n    const handleConfirm = (imageSrc)=>{\n        console.log(\"inHandleConfirm:\" + imageSrc);\n        setImageUrl(imageSrc);\n        setShowForm(true); // Show the form when the image is confirmed\n    };\n    // WebcamCapture Component\n    const WebcamCapture = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"pages_Webcam_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Webcam */ \"./pages/Webcam.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"index.js -> \" + \"./Webcam\"\n            ]\n        },\n        ssr: false,\n        loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 20\n            }, this) // Optional loading component\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-8a9894d0d2203c05\" + \" \" + \"min-h-screen bg-gray-100 flex flex-col justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                autoPlay: true,\n                loop: true,\n                muted: true,\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"absolute z-0 w-full h-full object-cover\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: \"/background2.mp4\",\n                    type: \"video/mp4\",\n                    className: \"jsx-8a9894d0d2203c05\"\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            showForm ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"relative py-3 sm:max-w-xl sm:mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-8a9894d0d2203c05\" + \" \" + \"relative px-4 z-10 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>handleSubmit(e),\n                        className: \"jsx-8a9894d0d2203c05\" + \" \" + \"max-w-2xl mx-auto space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: inputValue,\n                                onChange: (e)=>setInputValue(e.target.value),\n                                placeholder: \"Describe the scene. What do you feel right now?\",\n                                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"w-full px-7 py-5 text-gray-700 bg-gray-200 rounded\"\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                disabled: loading,\n                                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"w-full px-3 py-4 text-white bg-black rounded-md focus:outline-none\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 20\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WebcamCapture, {\n                onConfirm: handleConfirm,\n                className: \"jsx-8a9894d0d2203c05\"\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"mt-12 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-8a9894d0d2203c05\" + \" \" + \"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12\"\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 103,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, this),\n            imageUrl && !loading && showGen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-8a9894d0d2203c05\" + \" \" + \"mt-12 z-10 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imageUrl,\n                    alt: \"Generated image\",\n                    className: \"jsx-8a9894d0d2203c05\" + \" \" + \"rounded-2xl shadow-lg\"\n                }, void 0, false, {\n                    fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"8a9894d0d2203c05\",\n                children: \".loader.jsx-8a9894d0d2203c05{-webkit-animation:spin 1s linear infinite;-moz-animation:spin 1s linear infinite;-o-animation:spin 1s linear infinite;animation:spin 1s linear infinite;border-top-color:#3498db}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"Z:\\\\Projects\\\\SD_next\\\\pages\\\\index.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"cvAJArh9IAEbS2vlC7hwzNBaKEQ=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFFSSxNQUFNLENBQUNGLEtBQUs7Z0NBRTdDRyxhQUFZOzBFQURGOzs7Ozs7MENBR1osOERBQUNDO2dDQUFPVCxNQUFLO2dDQUF3RlUsVUFBVTVDOzBFQUEvRTswQ0FBd0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FPNUgsOERBQUN3QjtnQkFBY3FCLFdBQVd2Qjs7Ozs7O29CQUMzQjtZQUNBdEIseUJBQ0MsOERBQUMyQjswREFBYzswQkFDYiw0RUFBQ0E7OERBQWM7Ozs7Ozs7Ozs7O1lBR2xCN0IsWUFBWSxDQUFDRSxXQUFXTSx5QkFDdkIsOERBQUNxQjswREFBYzswQkFDYiw0RUFBQ21CO29CQUFJYixLQUFLbkM7b0JBQVVpRCxLQUFJOzhEQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0I5RDtHQXpIU3BEO0tBQUFBO0FBMkhULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0JztcclxuXHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93Q2FtZXJhLCBzZXRTaG93Q2FtZXJhXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd0dlbiwgc2V0U2hvd0dlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2luc3VibWl0OicgKyBpbWFnZVVybCArIGlucHV0VmFsdWUpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgJ21ldGhvZCc6ICdQT1NUJyxcclxuICAgICAgJ3VybCc6ICdodHRwczovL3N0YWJsZWRpZmZ1c2lvbmFwaS5jb20vYXBpL3YzL2ltZzJpbWcnLFxyXG4gICAgICAnaGVhZGVycyc6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBcImtleVwiOiAna25Ba0NaTWNmSEJuRzdHVWZ1VXBUdndGcWE5QmhpdG1iMjdEVHpsTHFLN3dlanUyTUxTbzVjdkVteVlZJyxcclxuICAgICAgICBcInByb21wdFwiOiBpbnB1dFZhbHVlICsgXCIgd2l0aCBhbiBvbGQgdGltZSBzdHlsZSwgcmV0cm8gZmVlbC4gYWdlZCBmaWx0ZXJcIixcclxuICAgICAgICBcIm5lZ2F0aXZlX3Byb21wdFwiOiAnZGlzZmlndXJlZCwga2l0c2NoLCB1Z2x5LCBvdmVyc2F0dXJhdGVkLCBncmFpbiwgbG93LXJlcywgRGVmb3JtZWQsIGJsdXJyeSwgYmFkIGFuYXRvbXksIGRpc2ZpZ3VyZWQsIHBvb3JseSBkcmF3biBmYWNlLCBtdXRhdGlvbiwgbXV0YXRlZCwgZXh0cmEgbGltYiwgdWdseSwgcG9vcmx5IGRyYXduIGhhbmRzLCBtaXNzaW5nIGxpbWIsIGJsdXJyeSwgZmxvYXRpbmcgbGltYnMsIGRpc2Nvbm5lY3RlZCBsaW1icywgbWFsZm9ybWVkIGhhbmRzLCBibHVyLCBvdXQgb2YgZm9jdXMsIGxvbmcgbmVjaywgbG9uZyBib2R5LCB1Z2x5LCBkaXNndXN0aW5nLCBwb29ybHkgZHJhd24sIGNoaWxkaXNoLCBtdXRpbGF0ZWQsIGNhcnRvb25pc2gsIG1hbmdsZWQsIG9sZCwgc3VycmVhbCcsXHJcbiAgICAgICAgXCJpbml0X2ltYWdlXCI6IGltYWdlVXJsIHx8IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0NvbXBWaXMvc3RhYmxlLWRpZmZ1c2lvbi9tYWluL2RhdGEvaW5wYWludGluZ19leGFtcGxlcy9vdmVydHVyZS1jcmVhdGlvbnMtNXNJNmZRZ1lJdW8ucG5nXCIsXHJcbiAgICAgICAgXCJ3aWR0aFwiOiBcIjUxMlwiLFxyXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiNTEyXCIsXHJcbiAgICAgICAgXCJzYW1wbGVzXCI6IFwiMVwiLFxyXG4gICAgICAgIFwibnVtX2luZmVyZW5jZV9zdGVwc1wiOiBcIjMwXCIsXHJcbiAgICAgICAgXCJzYWZldHlfY2hlY2tlclwiOiBcIm5vXCIsXHJcbiAgICAgICAgXCJlbmhhbmNlX3Byb21wdFwiOiBcIm5vXCIsXHJcbiAgICAgICAgXCJndWlkYW5jZV9zY2FsZVwiOiA3LjUsXHJcbiAgICAgICAgXCJzdHJlbmd0aFwiOiAwLjcsXHJcbiAgICAgICAgXCJzZWVkXCI6IG51bGwsXHJcbiAgICAgICAgXCJ3ZWJob29rXCI6IG51bGwsXHJcbiAgICAgICAgXCJ0cmFja19pZFwiOiBudWxsXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIHJlcXVlc3Qob3B0aW9ucywgKGVycm9yLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnaW5yZXF1ZXN0ISBZQVlBQVknKTtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmJvZHkpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UuYm9keSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlRGF0YSAmJiByZXNwb25zZURhdGEub3V0cHV0ICYmIHJlc3BvbnNlRGF0YS5vdXRwdXRbMF0pIHtcclxuICAgICAgICAgIHNldEltYWdlVXJsKHJlc3BvbnNlRGF0YS5vdXRwdXRbMF0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgb3VyIGltYWdlOicgKyBpbWFnZVVybCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIHJlc3BvbnNlIGZvcm1hdCcpO1xyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2V0U2hvd0dlbih0cnVlKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29uZmlybSA9IChpbWFnZVNyYykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbkhhbmRsZUNvbmZpcm06XCIgKyBpbWFnZVNyYyk7XHJcbiAgICBzZXRJbWFnZVVybChpbWFnZVNyYyk7XHJcbiAgICBzZXRTaG93Rm9ybSh0cnVlKTsgIC8vIFNob3cgdGhlIGZvcm0gd2hlbiB0aGUgaW1hZ2UgaXMgY29uZmlybWVkXHJcbiAgfTtcclxuXHJcbiAgLy8gV2ViY2FtQ2FwdHVyZSBDb21wb25lbnRcclxuICBjb25zdCBXZWJjYW1DYXB0dXJlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vV2ViY2FtJyksIHtcclxuICAgIHNzcjogZmFsc2UsICAvLyBUaGlzIHdpbGwgbG9hZCB0aGUgY29tcG9uZW50IGNsaWVudCBzaWRlIG9ubHlcclxuICAgIGxvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcuLi48L3A+ICAvLyBPcHRpb25hbCBsb2FkaW5nIGNvbXBvbmVudFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS0xMDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICB7LyogQmFja2dyb3VuZCBWaWRlbyAqL31cclxuICAgICAgPHZpZGVvIGF1dG9QbGF5IGxvb3AgbXV0ZWQgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei0wIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCI+XHJcbiAgICAgICAgPHNvdXJjZSBzcmM9XCIvYmFja2dyb3VuZDIubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XHJcbiAgICAgIDwvdmlkZW8+XHJcbiAgICAgIHtzaG93Rm9ybSA/ICg8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHB5LTMgc206bWF4LXcteGwgc206bXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHgtNCB6LTEwIHB5LTEwIGJnLXdoaXRlIHNoYWRvdy1sZyBzbTpyb3VuZGVkLTN4bCBzbTpwLTIwXCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBteC1hdXRvIHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNyBweS01IHRleHQtZ3JheS03MDAgYmctZ3JheS0yMDAgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB0aGUgc2NlbmUuIFdoYXQgZG8geW91IGZlZWwgcmlnaHQgbm93P1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTQgdGV4dC13aGl0ZSBiZy1ibGFjayByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZVwiIGRpc2FibGVkPXtsb2FkaW5nfT5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxXZWJjYW1DYXB0dXJlIG9uQ29uZmlybT17aGFuZGxlQ29uZmlybX0gLz5cclxuICAgICAgKX1cclxuICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXIgZWFzZS1saW5lYXIgcm91bmRlZC1mdWxsIGJvcmRlci00IGJvcmRlci10LTQgYm9yZGVyLWdyYXktMjAwIGgtMTIgdy0xMlwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7aW1hZ2VVcmwgJiYgIWxvYWRpbmcgJiYgc2hvd0dlbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiB6LTEwIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwiR2VuZXJhdGVkIGltYWdlXCIgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgc2hhZG93LWxnXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5sb2FkZXIge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMzNDk4ZGI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJSZWFjdCIsImR5bmFtaWMiLCJyZXF1ZXN0IiwiSG9tZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2hvd0NhbWVyYSIsInNldFNob3dDYW1lcmEiLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwic2hvd0dlbiIsInNldFNob3dHZW4iLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsIm9wdGlvbnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwicmVzcG9uc2UiLCJyZXNwb25zZURhdGEiLCJwYXJzZSIsIm91dHB1dCIsImhhbmRsZUNvbmZpcm0iLCJpbWFnZVNyYyIsIldlYmNhbUNhcHR1cmUiLCJzc3IiLCJwIiwiZGl2IiwidmlkZW8iLCJhdXRvUGxheSIsImxvb3AiLCJtdXRlZCIsInNvdXJjZSIsInNyYyIsInR5cGUiLCJmb3JtIiwib25TdWJtaXQiLCJlIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ29uZmlybSIsImltZyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});