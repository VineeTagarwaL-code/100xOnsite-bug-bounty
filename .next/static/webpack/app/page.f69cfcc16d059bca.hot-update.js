"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./component/TodoForm.js":
/*!*******************************!*\
  !*** ./component/TodoForm.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst TodoForm = (param)=>{\n    let { onAddTodo } = param;\n    _s();\n    const [newTodo, setNewTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (newTodo.trim() !== \"\") {\n            onAddTodo(newTodo);\n            setNewTodo(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"flex flex-col w-full mt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: newTodo,\n                onChange: (e)=>setNewTodo(e.target.value),\n                placeholder: \"Add a new todo\",\n                className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-2\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mujju\\\\OneDrive\\\\Desktop\\\\100xOnsite-bug-bounty\\\\component\\\\TodoForm.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700\",\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mujju\\\\OneDrive\\\\Desktop\\\\100xOnsite-bug-bounty\\\\component\\\\TodoForm.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mujju\\\\OneDrive\\\\Desktop\\\\100xOnsite-bug-bounty\\\\component\\\\TodoForm.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoForm, \"oyCy+yC4LrN9rT+2zASGlvYyUZ8=\");\n_c = TodoForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoForm);\nvar _c;\n$RefreshReg$(_c, \"TodoForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudC9Ub2RvRm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFFeEMsTUFBTUUsV0FBVztRQUFDLEVBQUVDLFNBQVMsRUFBRTs7SUFDN0IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1LLGVBQWUsQ0FBQ0M7UUFDcEJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSUosUUFBUUssSUFBSSxPQUFPLElBQUk7WUFDekJOLFVBQVVDO1lBQ1ZDLFdBQVc7UUFDYjtJQUNGO0lBRUEscUJBQ0UsOERBQUNLO1FBQUtDLFVBQVVMO1FBQWNNLFdBQVU7OzBCQUN0Qyw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLE9BQU9YO2dCQUNQWSxVQUFVLENBQUNULElBQU1GLFdBQVdFLEVBQUVVLE1BQU0sQ0FBQ0YsS0FBSztnQkFDMUNHLGFBQVk7Z0JBQ1pOLFdBQVU7Ozs7OzswQkFFWiw4REFBQ087Z0JBQ0NMLE1BQUs7Z0JBQ0xGLFdBQVU7MEJBQ1g7Ozs7Ozs7Ozs7OztBQUtQO0dBNUJNVjtLQUFBQTtBQTZCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvVG9kb0Zvcm0uanM/YjhmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRvZG9Gb3JtID0gKHsgb25BZGRUb2RvIH0pID0+IHtcclxuICBjb25zdCBbbmV3VG9kbywgc2V0TmV3VG9kb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChuZXdUb2RvLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICBvbkFkZFRvZG8obmV3VG9kbyk7XHJcbiAgICAgIHNldE5ld1RvZG8oXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIG10LTRcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHZhbHVlPXtuZXdUb2RvfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VG9kbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBuZXcgdG9kb1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6cmluZy1vcGFjaXR5LTUwIG1iLTJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctYmx1ZS03MDBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgQWRkXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9Gb3JtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvZG9Gb3JtIiwib25BZGRUb2RvIiwibmV3VG9kbyIsInNldE5ld1RvZG8iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./component/TodoForm.js\n"));

/***/ })

});