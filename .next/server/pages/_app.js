(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globalStyles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globalStyles.css */ "./styles/globalStyles.css");
/* harmony import */ var _styles_globalStyles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globalStyles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styleguide_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styleguide/theme */ "./src/styleguide/theme.ts");

var _jsxFileName = "/home/angel/projects/web3/pages/_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // eslint-disable-next-line react/prop-types

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
    theme: _styleguide_theme__WEBPACK_IMPORTED_MODULE_4__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/styleguide/theme.ts":
/*!*********************************!*\
  !*** ./src/styleguide/theme.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const breakpoints = ['320px', '480px', '576px', '768px', '992px', '1200px', '1440px', '1920px'];
breakpoints.desktopLg = breakpoints[7]; // 1920px

breakpoints.desktopMd = breakpoints[6]; // 1440px

breakpoints.desktopSm = breakpoints[5]; // 1200px

breakpoints.tabletLg = breakpoints[4]; // 992px

breakpoints.tabletMd = breakpoints[3]; // 768px

breakpoints.mobileMd = breakpoints[2]; // 576px

breakpoints.mobileSm = breakpoints[1]; // 480px

breakpoints.mobileXs = breakpoints[0]; // 320px

const mediaQueries = {
  mobile: `@media screen and (max-width: ${breakpoints.tabletMd})`,
  tablet: `@media screen and (max-width: ${breakpoints.desktopSm} and min-width: ${breakpoints.tabletMd})`,
  tabWeb: `@media screen and (min-width: ${breakpoints.tabletMd})`
};
const space = ['0', '0.4rem', '0.8rem', '1.2rem', '1.6rem', '2.4rem', '3.2rem', '4rem', '4.8rem', '5.6rem', '8rem', '12rem'];
space.mobXxl2 = space[8]; // 48px

space.mobXxl = space[7]; // 40px

space.mobXl = space[6]; // 32px

space.mobL = space[5]; // 24px

space.mobM = space[4]; // 16px

space.mobS = space[3]; // 12px

space.mobXs = space[2]; // 8px

space.mobXxs = space[1]; // 4px

space.webXxl3 = space[11]; // 120px

space.webXxl2 = space[10]; // 80px

space.webXxl = space[9]; // 56px

space.webXl = space[7]; // 40px

space.webL = space[6]; // 32px

space.webM = space[5]; // 24px

space.webS = space[4]; // 16px

space.webXs = space[2]; // 8px

space.webXxs = space[1]; // 4px

const fontSizes = ['0.8rem', '1.2rem', '1.4rem', '1.6rem', '1.8rem', '2.0rem', '2.4rem', '2.8rem', '3.2rem'];
fontSizes.xxl3 = fontSizes[8]; // 32px

fontSizes.xxl2 = fontSizes[7]; // 28px

fontSizes.xxl = fontSizes[6]; // 24px

fontSizes.xl = fontSizes[5]; // 20px

fontSizes.l = fontSizes[4]; // 18px

fontSizes.m = fontSizes[3]; // 16px

fontSizes.s = fontSizes[2]; // 14px

fontSizes.xs = fontSizes[1]; // 12px

fontSizes.xxs = fontSizes[0]; // 8px

const fontWeights = [400, 600, 700];
fontWeights.regular = fontWeights[0];
fontWeights.medium = fontWeights[1];
fontWeights.bold = fontWeights[2];
const boxShadow = ['0 12px 24px -8px rgba(33, 42, 57, 0.18), 0 -2px 12px -2px rgba(33, 42, 57, 0.08)', '0 8px 32px -2px rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.12)', '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 4px 16px -2px rgba(0, 0, 0, 0.12)'];
boxShadow.shadowLg = boxShadow[0];
boxShadow.shadowSm = boxShadow[1];
boxShadow.shadowMd = boxShadow[2];
const borderRadii = ['2rem', '1.2rem', '1.6rem', '0.8rem', '0.4rem'];
borderRadii.webH = borderRadii[0]; // 20px

borderRadii.webL = borderRadii[1]; // 12px

borderRadii.mobH = borderRadii[2]; // 16px

borderRadii.mobL = borderRadii[3]; // 8px

borderRadii.mobS = borderRadii[4]; // 4px

const colors = {
  'starkid-purple-1': '#475edd',
  'starkid-purple-2': '#7960f8',
  'buttons-green-pressed': '#069f7e',
  'buttons-green-hover': '#29c8a2',
  'yellow-text': '#ea9219',
  'yellow-100': '#ffb61e',
  'yellow-50': '#fedc4d',
  'yellow-25': '#ffeb93',
  'yellow-15': '#fff6cf',
  'yellow-06': '#fefae9',
  'green-text': '#009955',
  'green-100': '#00bd90',
  'green-50': '#7CDBC4',
  'green-25': '#c2f2e5',
  'green-15': '#def7f2',
  'green-06': '#f0fbf9',
  'pink-text': '#cb2e9c',
  'pink-100': '#f180cf',
  'pink-50': '#fdc2eb',
  'pink-25': '#ffdbff',
  'pink-15': '#fdeffa',
  'pink-06': '#fef8fc',
  'blue-text': '#187cc9',
  'blue-100': '#2aaaee',
  'blue-50': '#8ed6fe',
  'blue-25': '#d1efff',
  'blue-15': '#e3f5fd',
  'blue-06': '#f3fafe',
  'blue-05': '#231656',
  'purple-text': '#352182',
  'purple-100': '#1833DE',
  'purple-50': '#c5cdfb',
  'purple-25': '#e1e5ff',
  'purple-15': '#eef0fd',
  'purple-06': '#f7f8fe',
  'orange-text': '#EA8731',
  'orange-100': '#FCAB64',
  'orange-50': '#FDD5B1',
  'orange-25': '#FEEAD8',
  'orange-15': '#FFF3E8',
  'orange-06': '#FFF9F3',
  'teal-text': '#0E918C',
  'teal-100': '#28ABB9',
  'teal-50': '#93D5DC',
  'teal-25': '#C9EAED',
  'teal-15': '#DFF3F5',
  'teal-06': '#F2FAFB',
  'body-text': '#212a39',
  'body-text-75': '#59606b',
  'body-text-50': '#90949c',
  'body-text-25': '#c7cacd',
  'black-100': '#000000',
  'black-40': '#979797',
  'black-20': '#cecece',
  'black-10': '#e8e8e8',
  'black-05': '#f3f3f3',
  'white-100': '#ffffff',
  'error-red-100': '#ed695f',
  'dull-gray': 'rgba(243, 243, 243, 0.3)' // batch card background

};
const theme = {
  breakpoints,
  space,
  fontSizes,
  fontWeights,
  boxShadow,
  borderRadii,
  colors,
  mediaQueries
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./styles/globalStyles.css":
/*!*********************************!*\
  !*** ./styles/globalStyles.css ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIzLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly93ZWIzLy4vc3JjL3N0eWxlZ3VpZGUvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vd2ViMy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2ViMy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3dlYjMvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsImRlc2t0b3BMZyIsImRlc2t0b3BNZCIsImRlc2t0b3BTbSIsInRhYmxldExnIiwidGFibGV0TWQiLCJtb2JpbGVNZCIsIm1vYmlsZVNtIiwibW9iaWxlWHMiLCJtZWRpYVF1ZXJpZXMiLCJtb2JpbGUiLCJ0YWJsZXQiLCJ0YWJXZWIiLCJzcGFjZSIsIm1vYlh4bDIiLCJtb2JYeGwiLCJtb2JYbCIsIm1vYkwiLCJtb2JNIiwibW9iUyIsIm1vYlhzIiwibW9iWHhzIiwid2ViWHhsMyIsIndlYlh4bDIiLCJ3ZWJYeGwiLCJ3ZWJYbCIsIndlYkwiLCJ3ZWJNIiwid2ViUyIsIndlYlhzIiwid2ViWHhzIiwiZm9udFNpemVzIiwieHhsMyIsInh4bDIiLCJ4eGwiLCJ4bCIsImwiLCJtIiwicyIsInhzIiwieHhzIiwiZm9udFdlaWdodHMiLCJyZWd1bGFyIiwibWVkaXVtIiwiYm9sZCIsImJveFNoYWRvdyIsInNoYWRvd0xnIiwic2hhZG93U20iLCJzaGFkb3dNZCIsImJvcmRlclJhZGlpIiwid2ViSCIsIm1vYkgiLCJjb2xvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFLDhEQUFD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QUE4RGQsZUFBYSxTQTlEQztBQStEZCxjQUFZLFNBL0RFO0FBZ0VkLGNBQVksU0FoRUU7QUFpRWQsY0FBWSxTQWpFRTtBQWtFZCxjQUFZLFNBbEVFO0FBbUVkLGVBQWEsU0FuRUM7QUFxRWQsbUJBQWlCLFNBckVIO0FBc0VkLGVBQWEsMEJBdEVDLENBc0UyQjs7QUF0RTNCLENBQWY7QUF5RUEsTUFBTXJELEtBQW1CLEdBQUc7QUFDM0JDLGFBRDJCO0FBRTNCYSxPQUYyQjtBQUczQmtCLFdBSDJCO0FBSTNCVSxhQUoyQjtBQUszQkksV0FMMkI7QUFNM0JJLGFBTjJCO0FBTzNCRyxRQVAyQjtBQVEzQjNDO0FBUjJCLENBQTVCO0FBV0EsK0RBQWVWLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE1BLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFsU3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB0aGVtZSBmcm9tICdAL3N0eWxlZ3VpZGUvdGhlbWUnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7IiwiaW1wb3J0IHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBicmVha3BvaW50czogRGVmYXVsdFRoZW1lWydicmVha3BvaW50cyddID0gW1xuXHQnMzIwcHgnLFxuXHQnNDgwcHgnLFxuXHQnNTc2cHgnLFxuXHQnNzY4cHgnLFxuXHQnOTkycHgnLFxuXHQnMTIwMHB4Jyxcblx0JzE0NDBweCcsXG5cdCcxOTIwcHgnLFxuXTtcblxuYnJlYWtwb2ludHMuZGVza3RvcExnID0gYnJlYWtwb2ludHNbN107IC8vIDE5MjBweFxuYnJlYWtwb2ludHMuZGVza3RvcE1kID0gYnJlYWtwb2ludHNbNl07IC8vIDE0NDBweFxuYnJlYWtwb2ludHMuZGVza3RvcFNtID0gYnJlYWtwb2ludHNbNV07IC8vIDEyMDBweFxuYnJlYWtwb2ludHMudGFibGV0TGcgPSBicmVha3BvaW50c1s0XTsgLy8gOTkycHhcbmJyZWFrcG9pbnRzLnRhYmxldE1kID0gYnJlYWtwb2ludHNbM107IC8vIDc2OHB4XG5icmVha3BvaW50cy5tb2JpbGVNZCA9IGJyZWFrcG9pbnRzWzJdOyAvLyA1NzZweFxuYnJlYWtwb2ludHMubW9iaWxlU20gPSBicmVha3BvaW50c1sxXTsgLy8gNDgwcHhcbmJyZWFrcG9pbnRzLm1vYmlsZVhzID0gYnJlYWtwb2ludHNbMF07IC8vIDMyMHB4XG5cbmNvbnN0IG1lZGlhUXVlcmllcyA9IHtcblx0bW9iaWxlOiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHticmVha3BvaW50cy50YWJsZXRNZH0pYCxcblx0dGFibGV0OiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHticmVha3BvaW50cy5kZXNrdG9wU219IGFuZCBtaW4td2lkdGg6ICR7YnJlYWtwb2ludHMudGFibGV0TWR9KWAsXG5cdHRhYldlYjogYEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7YnJlYWtwb2ludHMudGFibGV0TWR9KWAsXG59O1xuXG5jb25zdCBzcGFjZTogRGVmYXVsdFRoZW1lWydzcGFjZSddID0gW1xuXHQnMCcsXG5cdCcwLjRyZW0nLFxuXHQnMC44cmVtJyxcblx0JzEuMnJlbScsXG5cdCcxLjZyZW0nLFxuXHQnMi40cmVtJyxcblx0JzMuMnJlbScsXG5cdCc0cmVtJyxcblx0JzQuOHJlbScsXG5cdCc1LjZyZW0nLFxuXHQnOHJlbScsXG5cdCcxMnJlbScsXG5dO1xuXG5zcGFjZS5tb2JYeGwyID0gc3BhY2VbOF07IC8vIDQ4cHhcbnNwYWNlLm1vYlh4bCA9IHNwYWNlWzddOyAvLyA0MHB4XG5zcGFjZS5tb2JYbCA9IHNwYWNlWzZdOyAvLyAzMnB4XG5zcGFjZS5tb2JMID0gc3BhY2VbNV07IC8vIDI0cHhcbnNwYWNlLm1vYk0gPSBzcGFjZVs0XTsgLy8gMTZweFxuc3BhY2UubW9iUyA9IHNwYWNlWzNdOyAvLyAxMnB4XG5zcGFjZS5tb2JYcyA9IHNwYWNlWzJdOyAvLyA4cHhcbnNwYWNlLm1vYlh4cyA9IHNwYWNlWzFdOyAvLyA0cHhcblxuc3BhY2Uud2ViWHhsMyA9IHNwYWNlWzExXTsgLy8gMTIwcHhcbnNwYWNlLndlYlh4bDIgPSBzcGFjZVsxMF07IC8vIDgwcHhcbnNwYWNlLndlYlh4bCA9IHNwYWNlWzldOyAvLyA1NnB4XG5zcGFjZS53ZWJYbCA9IHNwYWNlWzddOyAvLyA0MHB4XG5zcGFjZS53ZWJMID0gc3BhY2VbNl07IC8vIDMycHhcbnNwYWNlLndlYk0gPSBzcGFjZVs1XTsgLy8gMjRweFxuc3BhY2Uud2ViUyA9IHNwYWNlWzRdOyAvLyAxNnB4XG5zcGFjZS53ZWJYcyA9IHNwYWNlWzJdOyAvLyA4cHhcbnNwYWNlLndlYlh4cyA9IHNwYWNlWzFdOyAvLyA0cHhcblxuY29uc3QgZm9udFNpemVzOiBEZWZhdWx0VGhlbWVbJ2ZvbnRTaXplcyddID0gW1xuXHQnMC44cmVtJyxcblx0JzEuMnJlbScsXG5cdCcxLjRyZW0nLFxuXHQnMS42cmVtJyxcblx0JzEuOHJlbScsXG5cdCcyLjByZW0nLFxuXHQnMi40cmVtJyxcblx0JzIuOHJlbScsXG5cdCczLjJyZW0nLFxuXTtcblxuZm9udFNpemVzLnh4bDMgPSBmb250U2l6ZXNbOF07IC8vIDMycHhcbmZvbnRTaXplcy54eGwyID0gZm9udFNpemVzWzddOyAvLyAyOHB4XG5mb250U2l6ZXMueHhsID0gZm9udFNpemVzWzZdOyAvLyAyNHB4XG5mb250U2l6ZXMueGwgPSBmb250U2l6ZXNbNV07IC8vIDIwcHhcbmZvbnRTaXplcy5sID0gZm9udFNpemVzWzRdOyAvLyAxOHB4XG5mb250U2l6ZXMubSA9IGZvbnRTaXplc1szXTsgLy8gMTZweFxuZm9udFNpemVzLnMgPSBmb250U2l6ZXNbMl07IC8vIDE0cHhcbmZvbnRTaXplcy54cyA9IGZvbnRTaXplc1sxXTsgLy8gMTJweFxuZm9udFNpemVzLnh4cyA9IGZvbnRTaXplc1swXTsgLy8gOHB4XG5cbmNvbnN0IGZvbnRXZWlnaHRzOiBEZWZhdWx0VGhlbWVbJ2ZvbnRXZWlnaHRzJ10gPSBbNDAwLCA2MDAsIDcwMF07XG5mb250V2VpZ2h0cy5yZWd1bGFyID0gZm9udFdlaWdodHNbMF07XG5mb250V2VpZ2h0cy5tZWRpdW0gPSBmb250V2VpZ2h0c1sxXTtcbmZvbnRXZWlnaHRzLmJvbGQgPSBmb250V2VpZ2h0c1syXTtcblxuY29uc3QgYm94U2hhZG93OiBEZWZhdWx0VGhlbWVbJ2JveFNoYWRvdyddID0gW1xuXHQnMCAxMnB4IDI0cHggLThweCByZ2JhKDMzLCA0MiwgNTcsIDAuMTgpLCAwIC0ycHggMTJweCAtMnB4IHJnYmEoMzMsIDQyLCA1NywgMC4wOCknLFxuXHQnMCA4cHggMzJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiknLFxuXHQnMCAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNHB4IDE2cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbl07XG5cbmJveFNoYWRvdy5zaGFkb3dMZyA9IGJveFNoYWRvd1swXTtcbmJveFNoYWRvdy5zaGFkb3dTbSA9IGJveFNoYWRvd1sxXTtcbmJveFNoYWRvdy5zaGFkb3dNZCA9IGJveFNoYWRvd1syXTtcblxuY29uc3QgYm9yZGVyUmFkaWk6IERlZmF1bHRUaGVtZVsnYm9yZGVyUmFkaWknXSA9IFsnMnJlbScsICcxLjJyZW0nLCAnMS42cmVtJywgJzAuOHJlbScsICcwLjRyZW0nXTtcblxuYm9yZGVyUmFkaWkud2ViSCA9IGJvcmRlclJhZGlpWzBdOyAvLyAyMHB4XG5ib3JkZXJSYWRpaS53ZWJMID0gYm9yZGVyUmFkaWlbMV07IC8vIDEycHhcblxuYm9yZGVyUmFkaWkubW9iSCA9IGJvcmRlclJhZGlpWzJdOyAvLyAxNnB4XG5ib3JkZXJSYWRpaS5tb2JMID0gYm9yZGVyUmFkaWlbM107IC8vIDhweFxuYm9yZGVyUmFkaWkubW9iUyA9IGJvcmRlclJhZGlpWzRdOyAvLyA0cHhcblxuY29uc3QgY29sb3JzID0ge1xuXHQnc3RhcmtpZC1wdXJwbGUtMSc6ICcjNDc1ZWRkJyxcblx0J3N0YXJraWQtcHVycGxlLTInOiAnIzc5NjBmOCcsXG5cblx0J2J1dHRvbnMtZ3JlZW4tcHJlc3NlZCc6ICcjMDY5ZjdlJyxcblx0J2J1dHRvbnMtZ3JlZW4taG92ZXInOiAnIzI5YzhhMicsXG5cblx0J3llbGxvdy10ZXh0JzogJyNlYTkyMTknLFxuXHQneWVsbG93LTEwMCc6ICcjZmZiNjFlJyxcblx0J3llbGxvdy01MCc6ICcjZmVkYzRkJyxcblx0J3llbGxvdy0yNSc6ICcjZmZlYjkzJyxcblx0J3llbGxvdy0xNSc6ICcjZmZmNmNmJyxcblx0J3llbGxvdy0wNic6ICcjZmVmYWU5JyxcblxuXHQnZ3JlZW4tdGV4dCc6ICcjMDA5OTU1Jyxcblx0J2dyZWVuLTEwMCc6ICcjMDBiZDkwJyxcblx0J2dyZWVuLTUwJzogJyM3Q0RCQzQnLFxuXHQnZ3JlZW4tMjUnOiAnI2MyZjJlNScsXG5cdCdncmVlbi0xNSc6ICcjZGVmN2YyJyxcblx0J2dyZWVuLTA2JzogJyNmMGZiZjknLFxuXG5cdCdwaW5rLXRleHQnOiAnI2NiMmU5YycsXG5cdCdwaW5rLTEwMCc6ICcjZjE4MGNmJyxcblx0J3BpbmstNTAnOiAnI2ZkYzJlYicsXG5cdCdwaW5rLTI1JzogJyNmZmRiZmYnLFxuXHQncGluay0xNSc6ICcjZmRlZmZhJyxcblx0J3BpbmstMDYnOiAnI2ZlZjhmYycsXG5cblx0J2JsdWUtdGV4dCc6ICcjMTg3Y2M5Jyxcblx0J2JsdWUtMTAwJzogJyMyYWFhZWUnLFxuXHQnYmx1ZS01MCc6ICcjOGVkNmZlJyxcblx0J2JsdWUtMjUnOiAnI2QxZWZmZicsXG5cdCdibHVlLTE1JzogJyNlM2Y1ZmQnLFxuXHQnYmx1ZS0wNic6ICcjZjNmYWZlJyxcblx0J2JsdWUtMDUnOiAnIzIzMTY1NicsXG5cblx0J3B1cnBsZS10ZXh0JzogJyMzNTIxODInLFxuXHQncHVycGxlLTEwMCc6ICcjMTgzM0RFJyxcblx0J3B1cnBsZS01MCc6ICcjYzVjZGZiJyxcblx0J3B1cnBsZS0yNSc6ICcjZTFlNWZmJyxcblx0J3B1cnBsZS0xNSc6ICcjZWVmMGZkJyxcblx0J3B1cnBsZS0wNic6ICcjZjdmOGZlJyxcblxuXHQnb3JhbmdlLXRleHQnOiAnI0VBODczMScsXG5cdCdvcmFuZ2UtMTAwJzogJyNGQ0FCNjQnLFxuXHQnb3JhbmdlLTUwJzogJyNGREQ1QjEnLFxuXHQnb3JhbmdlLTI1JzogJyNGRUVBRDgnLFxuXHQnb3JhbmdlLTE1JzogJyNGRkYzRTgnLFxuXHQnb3JhbmdlLTA2JzogJyNGRkY5RjMnLFxuXG5cdCd0ZWFsLXRleHQnOiAnIzBFOTE4QycsXG5cdCd0ZWFsLTEwMCc6ICcjMjhBQkI5Jyxcblx0J3RlYWwtNTAnOiAnIzkzRDVEQycsXG5cdCd0ZWFsLTI1JzogJyNDOUVBRUQnLFxuXHQndGVhbC0xNSc6ICcjREZGM0Y1Jyxcblx0J3RlYWwtMDYnOiAnI0YyRkFGQicsXG5cblxuXHQnYm9keS10ZXh0JzogJyMyMTJhMzknLFxuXHQnYm9keS10ZXh0LTc1JzogJyM1OTYwNmInLFxuXHQnYm9keS10ZXh0LTUwJzogJyM5MDk0OWMnLFxuXHQnYm9keS10ZXh0LTI1JzogJyNjN2NhY2QnLFxuXHQnYmxhY2stMTAwJzogJyMwMDAwMDAnLFxuXHQnYmxhY2stNDAnOiAnIzk3OTc5NycsXG5cdCdibGFjay0yMCc6ICcjY2VjZWNlJyxcblx0J2JsYWNrLTEwJzogJyNlOGU4ZTgnLFxuXHQnYmxhY2stMDUnOiAnI2YzZjNmMycsXG5cdCd3aGl0ZS0xMDAnOiAnI2ZmZmZmZicsXG5cblx0J2Vycm9yLXJlZC0xMDAnOiAnI2VkNjk1ZicsXG5cdCdkdWxsLWdyYXknOiAncmdiYSgyNDMsIDI0MywgMjQzLCAwLjMpJywgLy8gYmF0Y2ggY2FyZCBiYWNrZ3JvdW5kXG59O1xuXG5jb25zdCB0aGVtZTogRGVmYXVsdFRoZW1lID0ge1xuXHRicmVha3BvaW50cyxcblx0c3BhY2UsXG5cdGZvbnRTaXplcyxcblx0Zm9udFdlaWdodHMsXG5cdGJveFNoYWRvdyxcblx0Ym9yZGVyUmFkaWksXG5cdGNvbG9ycyxcblx0bWVkaWFRdWVyaWVzLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==