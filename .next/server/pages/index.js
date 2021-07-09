(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_HomeComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/HomeComp */ "./src/containers/HomeComp/index.tsx");

var _jsxFileName = "/home/angel/projects/web3/pages/index.js";



function HomePage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_HomeComp__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/components/Box.tsx":
/*!********************************!*\
  !*** ./src/components/Box.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleguide_filterStyledSystemProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styleguide/filterStyledSystemProps */ "./src/styleguide/filterStyledSystemProps.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




// Note: Add custom Box Props here
const customProps = {
  boxShadow: {
    property: 'boxShadow',
    scale: 'boxShadow'
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'borderRadii'
  },
  textTransform: true,
  textDecoration: true,
  fontStyle: true,
  cursor: true,
  wordBreak: true,
  visibility: true,
  scrollSnapAlign: true,
  scrollSnapType: true,
  scrollBehavior: true,
  scrollMarginTop: true,
  outline: true,
  objectFit: true,
  transform: true,
  backgroundRepeat: true,
  backgroundPosition: true,
  backgroundSize: true,
  whiteSpace: true,
  WebkitBoxOrient: true,
  WebkitLineClamp: true
};
const customPropsStyleFn = (0,styled_system__WEBPACK_IMPORTED_MODULE_1__.system)(customProps);

const allBoxProps = _objectSpread(_objectSpread({}, _styleguide_filterStyledSystemProps__WEBPACK_IMPORTED_MODULE_2__.allStyledSystemProps), customProps);

const filterStyledSytemProps = (prop, defaultValidatorFn) => !allBoxProps[prop] && defaultValidatorFn(prop);

const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  shouldForwardProp: filterStyledSytemProps
})`
	${props => props.row && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
			display: flex;
			flex-direction: row;
		`};
	${props => props.column && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
			display: flex;
			flex-direction: column;
		`};
	${props => props.center && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
			display: flex;
			justify-content: center;
			align-items: center;
		`};
	${props => props.between && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
			display: flex;
			justify-content: space-between;
			align-items: center;
		`};

	${styled_system__WEBPACK_IMPORTED_MODULE_1__.color};
	${styled_system__WEBPACK_IMPORTED_MODULE_1__.flexbox};
	${styled_system__WEBPACK_IMPORTED_MODULE_1__.grid}
	${styled_system__WEBPACK_IMPORTED_MODULE_1__.fontSize};
	${styled_system__WEBPACK_IMPORTED_MODULE_1__.fontWeight};
	${styled_system__WEBPACK_IMPORTED_MODULE_1__.layout};
	${styled_system__WEBPACK_IMPORTED_MODULE_1__.typography};
	${styled_system__WEBPACK_IMPORTED_MODULE_1__.space};
	${styled_system__WEBPACK_IMPORTED_MODULE_1__.shadow};
	${styled_system__WEBPACK_IMPORTED_MODULE_1__.border};
	${styled_system__WEBPACK_IMPORTED_MODULE_1__.position};
	${styled_system__WEBPACK_IMPORTED_MODULE_1__.backgroundImage};
	${customPropsStyleFn};
`;
/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Box */ "./src/components/Box.tsx");

var _jsxFileName = "/home/angel/projects/web3/src/components/NavBar.tsx";



const NavBar = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    pt: "1.5rem",
    position: "fixed",
    width: "100vw",
    zIndex: 2,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {
      mx: ["1.8rem"],
      py: {
        mobileXs: "1rem",
        tabletMd: "2rem"
      },
      fontSize: "3rem",
      display: "flex",
      width: "80%",
      borderRadius: "1rem",
      px: "1.5rem",
      bg: "white-100",
      boxShadow: "0 0 1.5rem 0.5rem #f9f9f9, 0 0 1.5rem 1rem #fdfdfd",
      maxWidth: ["100%", "110rem"],
      alignItems: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {
        as: "img",
        src: "/web3_logo.png",
        alt: "",
        height: ["3rem", "4rem"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {
        ml: "1rem",
        fontSize: {
          mobileXs: "1.6rem",
          tabletMd: "2rem"
        },
        color: "purple-50",
        fontFamily: "Mukta",
        fontWeight: "600",
        children: "web3.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/containers/HomeComp/index.tsx":
/*!*******************************************!*\
  !*** ./src/containers/HomeComp/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Box */ "./src/components/Box.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/home/angel/projects/web3/src/containers/HomeComp/index.tsx";






const HomeComp = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (false) {}
  });

  const handleMouseMove = e => {};

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EthField, {
      className: "ethField",
      zIndex: 1,
      height: "100vh",
      onMouseMove: handleMouseMove
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {
      column: true,
      center: true,
      textAlign: "center",
      mx: "1.8rem",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {
        maxWidth: "110rem",
        fontSize: {
          mobileXs: "3.2rem",
          tabletMd: "6.8rem"
        },
        mt: ["14rem", "26rem"],
        color: "purple-text",
        children: "Interact Your Apps with the Ethereum Blockchain"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {
        fontSize: {
          mobileXs: "1.6rem",
          tabletMd: "2.4rem"
        },
        maxWidth: "60rem",
        fontWeight: "6000",
        mt: {
          mobileXs: "2rem",
          tabletMd: "5rem"
        },
        color: "purple-50",
        children: "Web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://web3js.readthedocs.io/en/v1.3.4/",
        target: "_self",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DocumentationButton, {
          as: "button",
          bg: "purple-text",
          fontSize: {
            mobileXs: "1.6rem",
            tabletMd: "2rem"
          },
          p: {
            mobileXs: "1rem",
            tabletMd: "2rem"
          },
          mt: {
            mobileXs: "2rem",
            tabletMd: "4rem"
          },
          border: "none",
          borderRadius: "0.5rem",
          color: "white-100",
          cursor: "pointer",
          children: "Documentation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, undefined);
};

const DocumentationButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_components_Box__WEBPACK_IMPORTED_MODULE_2__.default)(props => `
    transition: transform ease-in 150ms;
    transform-origin: 50% 50%;
    
    &:hover {
        transform: scale(1.05);
    }
`);
const EthField = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_components_Box__WEBPACK_IMPORTED_MODULE_2__.default)(pros => `
    position: fixed;

`);
/* harmony default export */ __webpack_exports__["default"] = (HomeComp);

/***/ }),

/***/ "./src/styleguide/filterStyledSystemProps.ts":
/*!***************************************************!*\
  !*** ./src/styleguide/filterStyledSystemProps.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allStyledSystemProps": function() { return /* binding */ allStyledSystemProps; },
/* harmony export */   "filterStyledSytemProps": function() { return /* binding */ filterStyledSytemProps; }
/* harmony export */ });
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/prop-types */ "@styled-system/prop-types");
/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0__);
 // An object where keys are all props in styled-system and value is true.
// For example: { color: true, fontSize: true, ...}
// It is used in filtering props from styled components

const allStyledSystemProps = Object.keys((_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default())).reduce((acc, curr) => {
  const key = (_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_0___default())[curr];

  if (typeof key === 'object') {
    Object.keys(key).forEach(k => {
      acc[k] = true;
    });
  } else {
    acc[key] = true;
  }

  return acc;
}, {}); // A filter function that can be passed with 'shouldForwardProp'
// in styled components to filter out all the style props from
// the HTML

const filterStyledSytemProps = (prop, defaultValidatorFn) => !allStyledSystemProps[prop] && defaultValidatorFn(prop);

/***/ }),

/***/ "@styled-system/prop-types":
/*!********************************************!*\
  !*** external "@styled-system/prop-types" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@styled-system/prop-types");;

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("gsap");;

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

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-system");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIzLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViMy8uL3NyYy9jb21wb25lbnRzL0JveC50c3giLCJ3ZWJwYWNrOi8vd2ViMy8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3giLCJ3ZWJwYWNrOi8vd2ViMy8uL3NyYy9jb250YWluZXJzL0hvbWVDb21wL2luZGV4LnRzeCIsIndlYnBhY2s6Ly93ZWIzLy4vc3JjL3N0eWxlZ3VpZGUvZmlsdGVyU3R5bGVkU3lzdGVtUHJvcHMudHMiLCJ3ZWJwYWNrOi8vd2ViMy9leHRlcm5hbCBcIkBzdHlsZWQtc3lzdGVtL3Byb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly93ZWIzL2V4dGVybmFsIFwiZ3NhcFwiIiwid2VicGFjazovL3dlYjMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dlYjMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly93ZWIzL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly93ZWIzL2V4dGVybmFsIFwic3R5bGVkLXN5c3RlbVwiIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiY3VzdG9tUHJvcHMiLCJib3hTaGFkb3ciLCJwcm9wZXJ0eSIsInNjYWxlIiwiYm9yZGVyUmFkaXVzIiwidGV4dFRyYW5zZm9ybSIsInRleHREZWNvcmF0aW9uIiwiZm9udFN0eWxlIiwiY3Vyc29yIiwid29yZEJyZWFrIiwidmlzaWJpbGl0eSIsInNjcm9sbFNuYXBBbGlnbiIsInNjcm9sbFNuYXBUeXBlIiwic2Nyb2xsQmVoYXZpb3IiLCJzY3JvbGxNYXJnaW5Ub3AiLCJvdXRsaW5lIiwib2JqZWN0Rml0IiwidHJhbnNmb3JtIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwid2hpdGVTcGFjZSIsIldlYmtpdEJveE9yaWVudCIsIldlYmtpdExpbmVDbGFtcCIsImN1c3RvbVByb3BzU3R5bGVGbiIsInN5c3RlbSIsImFsbEJveFByb3BzIiwiYWxsU3R5bGVkU3lzdGVtUHJvcHMiLCJmaWx0ZXJTdHlsZWRTeXRlbVByb3BzIiwicHJvcCIsImRlZmF1bHRWYWxpZGF0b3JGbiIsIkJveCIsInN0eWxlZCIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcHMiLCJyb3ciLCJjc3MiLCJjb2x1bW4iLCJjZW50ZXIiLCJiZXR3ZWVuIiwiY29sb3IiLCJmbGV4Ym94IiwiZ3JpZCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxheW91dCIsInR5cG9ncmFwaHkiLCJzcGFjZSIsInNoYWRvdyIsImJvcmRlciIsInBvc2l0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwiTmF2QmFyIiwibW9iaWxlWHMiLCJ0YWJsZXRNZCIsIkhvbWVDb21wIiwidXNlRWZmZWN0IiwiaGFuZGxlTW91c2VNb3ZlIiwiZSIsIkRvY3VtZW50YXRpb25CdXR0b24iLCJFdGhGaWVsZCIsInByb3MiLCJPYmplY3QiLCJrZXlzIiwic3R5bGVkU3lzdGVtUHJvcFR5cGVzIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsImtleSIsImZvckVhY2giLCJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDaEIsc0JBQU8sOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0FBRUQsK0RBQWVBLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBNkJBO0FBa0VBO0FBQ0EsTUFBTUMsV0FBVyxHQUFHO0FBQ25CQyxXQUFTLEVBQUU7QUFDVkMsWUFBUSxFQUFFLFdBREE7QUFFVkMsU0FBSyxFQUFFO0FBRkcsR0FEUTtBQUtuQkMsY0FBWSxFQUFFO0FBQ2JGLFlBQVEsRUFBRSxjQURHO0FBRWJDLFNBQUssRUFBRTtBQUZNLEdBTEs7QUFTbkJFLGVBQWEsRUFBRSxJQVRJO0FBVW5CQyxnQkFBYyxFQUFF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Ozs7Ozs7O0FDckJQLHVEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDJDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhvbWVDb21wIGZyb20gXCJAL2NvbnRhaW5lcnMvSG9tZUNvbXBcIjtcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gICAgcmV0dXJuIDxIb21lQ29tcCAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcblx0Y29sb3IsXG5cdGZsZXhib3gsXG5cdGZvbnRTaXplLFxuXHRmb250V2VpZ2h0LFxuXHRsYXlvdXQsXG5cdHNwYWNlLFxuXHRzaGFkb3csXG5cdGJvcmRlcixcblx0dHlwb2dyYXBoeSxcblx0cG9zaXRpb24sXG5cdENvbG9yUHJvcHMsXG5cdEZvbnRTaXplUHJvcHMsXG5cdEZvbnRXZWlnaHRQcm9wcyxcblx0TGF5b3V0UHJvcHMsXG5cdFNwYWNlUHJvcHMsXG5cdEZsZXhib3hQcm9wcyxcblx0R3JpZFByb3BzLFxuXHRTaGFkb3dQcm9wcyxcblx0Qm9yZGVyUHJvcHMsXG5cdFR5cG9ncmFwaHlQcm9wcyxcblx0UG9zaXRpb25Qcm9wcyxcblx0c3lzdGVtLFxuXHRiYWNrZ3JvdW5kSW1hZ2UsXG5cdEJhY2tncm91bmRJbWFnZVByb3BzLFxuXHRSZXNwb25zaXZlVmFsdWUsXG5cdGdyaWQsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgeyBhbGxTdHlsZWRTeXN0ZW1Qcm9wcyB9IGZyb20gJ0Avc3R5bGVndWlkZS9maWx0ZXJTdHlsZWRTeXN0ZW1Qcm9wcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm94UHJvcHNcblx0ZXh0ZW5kcyBDb2xvclByb3BzLFxuXHRGb250U2l6ZVByb3BzLFxuXHRGb250V2VpZ2h0UHJvcHMsXG5cdExheW91dFByb3BzLFxuXHRTcGFjZVByb3BzLFxuXHRGbGV4Ym94UHJvcHMsXG5cdEdyaWRQcm9wcyxcblx0VHlwb2dyYXBoeVByb3BzLFxuXHRTaGFkb3dQcm9wcyxcblx0Qm9yZGVyUHJvcHMsXG5cdFBvc2l0aW9uUHJvcHMsXG5cdEJhY2tncm91bmRJbWFnZVByb3BzIHtcblx0Ym94U2hhZG93PzogYW55O1xuXHRib3JkZXJSYWRpdXM/OiBhbnk7XG5cdHRleHRUcmFuc2Zvcm0/OiBSZXNwb25zaXZlVmFsdWU8J25vbmUnIHwgJ2NhcGl0YWxpemUnIHwgJ3VwcGVyY2FzZScgfCAnbG93ZXJjYXNlJz47XG5cdHRleHREZWNvcmF0aW9uPzogUmVzcG9uc2l2ZVZhbHVlPCdub25lJyB8ICd1bmRlcmxpbmUnIHwgJ292ZXJsaW5lJz47XG5cdGZvbnRTdHlsZT86IFJlc3BvbnNpdmVWYWx1ZTwnbm9ybWFsJyB8ICdpdGFsaWMnIHwgJ29ibGlxdWUnPjtcblx0Y3Vyc29yPzogJ3BvaW50ZXInIHwgJ2F1dG8nIHwgJ3dhaXQnIHwgJ2Nyb3NzaGFpcicgfCAnbm90LWFsbG93ZWQnIHwgJ3pvb20taW4nIHwgJ2dyYWInO1xuXHR3b3JkQnJlYWs/OiAnbm9ybWFsJyB8ICdicmVhay1hbGwnIHwgJ2tlZXAtYWxsJyB8ICdicmVhay13b3JkJyB8ICdpbml0aWFsJyB8ICdpbmhlcml0Jztcblx0dmlzaWJpbGl0eT86IFJlc3BvbnNpdmVWYWx1ZTwndmlzaWJsZScgfCAnaGlkZGVuJyB8ICdjb2xsYXBzZSc+O1xuXHRzY3JvbGxTbmFwQWxpZ24/OiAnbm9uZScgfCAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJztcblx0c2Nyb2xsU25hcFR5cGU/OiAneCBtYW5kYXRvcnknIHwgJ3kgbWFuZGF0b3J5Jztcblx0c2Nyb2xsQmVoYXZpb3I/OiAnYXV0bycgfCAnc21vb3RoJztcblx0c2Nyb2xsTWFyZ2luVG9wPzogc3RyaW5nO1xuXHRvYmplY3RGaXQ/OiAnY292ZXInIHwgJ2ZpbGwnIHwgJ2NvbnRhaW4nIHwgJ25vbmUnIHwgJ3NjYWxlLWRvd24nO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcblx0b3V0bGluZT86XG5cdHwgJ2Rhc2hlZCdcblx0fCAnZG90dGVkJ1xuXHR8ICdkb3VibGUnXG5cdHwgJ2dyb292ZSdcblx0fCAnaGlkZGVuJ1xuXHR8ICdpbnNldCdcblx0fCAnbm9uZSdcblx0fCAnb3V0c2V0J1xuXHR8ICdyaWRnZSdcblx0fCAnc29saWQnO1xuXHRiYWNrZ3JvdW5kUmVwZWF0PzogJ25vLXJlcGVhdCcgfCAncmVwZWF0JyB8ICdyZXBlYXQteCcgfCAncmVwZWF0LXknIHwgJ3JvdW5kJyB8ICdzcGFjZSc7XG5cdGJhY2tncm91bmRQb3NpdGlvbj86ICdib3R0b20nIHwgJ2NlbnRlcicgfCAnbGVmdCcgfCAncmlnaHQnIHwgJ3RvcCc7XG5cdGJhY2tncm91bmRTaXplPzogJ2F1dG8nIHwgJ2NvbnRhaW4nIHwgJ2NvdmVyJztcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG5cdHdoaXRlU3BhY2U/OlxuXHR8ICctbW96LXByZS13cmFwJ1xuXHR8ICdicmVhay1zcGFjZXMnXG5cdHwgJ25vcm1hbCdcblx0fCAnbm93cmFwJ1xuXHR8ICdwcmUnXG5cdHwgJ3ByZS1saW5lJ1xuXHR8ICdwcmUtd3JhcCc7XG5cdFdlYmtpdEJveE9yaWVudD86ICdibG9jay1heGlzJyB8ICdob3Jpem9udGFsJyB8ICdpbmhlcml0JyB8ICdpbmxpbmUtYXhpcycgfCAndmVydGljYWwnO1xuXHRXZWJraXRMaW5lQ2xhbXA/OiAnbm9uZScgfCBudW1iZXI7XG5cdHRyYW5zZm9ybT86IFJlc3BvbnNpdmVWYWx1ZTxzdHJpbmc+O1xuXHRyb3c/OiBib29sZWFuO1xuXHRjb2x1bW4/OiBib29sZWFuO1xuXHRjZW50ZXI/OiBib29sZWFuO1xuXHRiZXR3ZWVuPzogYm9vbGVhbjtcblx0aGlkZVNjcm9sbEJhcj86IGJvb2xlYW47XG5cdGhpZGRlbj86IGJvb2xlYW47XG5cdHRydW5jYXRlPzogYm9vbGVhbjtcblx0Y3NzPzogc3RyaW5nO1xuXHRyZWY/OiBSZWFjdC5SZWY8SFRNTERpdkVsZW1lbnQ+O1xufVxuXG4vLyBOb3RlOiBBZGQgY3VzdG9tIEJveCBQcm9wcyBoZXJlXG5jb25zdCBjdXN0b21Qcm9wcyA9IHtcblx0Ym94U2hhZG93OiB7XG5cdFx0cHJvcGVydHk6ICdib3hTaGFkb3cnLFxuXHRcdHNjYWxlOiAnYm94U2hhZG93Jyxcblx0fSxcblx0Ym9yZGVyUmFkaXVzOiB7XG5cdFx0cHJvcGVydHk6ICdib3JkZXJSYWRpdXMnLFxuXHRcdHNjYWxlOiAnYm9yZGVyUmFkaWknLFxuXHR9LFxuXHR0ZXh0VHJhbnNmb3JtOiB0cnVlLFxuXHR0ZXh0RGVjb3JhdGlvbjogdHJ1ZSxcblx0Zm9udFN0eWxlOiB0cnVlLFxuXHRjdXJzb3I6IHRydWUsXG5cdHdvcmRCcmVhazogdHJ1ZSxcblx0dmlzaWJpbGl0eTogdHJ1ZSxcblx0c2Nyb2xsU25hcEFsaWduOiB0cnVlLFxuXHRzY3JvbGxTbmFwVHlwZTogdHJ1ZSxcblx0c2Nyb2xsQmVoYXZpb3I6IHRydWUsXG5cdHNjcm9sbE1hcmdpblRvcDogdHJ1ZSxcblx0b3V0bGluZTogdHJ1ZSxcblx0b2JqZWN0Rml0OiB0cnVlLFxuXHR0cmFuc2Zvcm06IHRydWUsXG5cdGJhY2tncm91bmRSZXBlYXQ6IHRydWUsXG5cdGJhY2tncm91bmRQb3NpdGlvbjogdHJ1ZSxcblx0YmFja2dyb3VuZFNpemU6IHRydWUsXG5cdHdoaXRlU3BhY2U6IHRydWUsXG5cdFdlYmtpdEJveE9yaWVudDogdHJ1ZSxcblx0V2Via2l0TGluZUNsYW1wOiB0cnVlLFxufTtcblxuY29uc3QgY3VzdG9tUHJvcHNTdHlsZUZuID0gc3lzdGVtKGN1c3RvbVByb3BzIGFzIGFueSk7XG5cbmNvbnN0IGFsbEJveFByb3BzID0geyAuLi5hbGxTdHlsZWRTeXN0ZW1Qcm9wcywgLi4uY3VzdG9tUHJvcHMgfTtcbmNvbnN0IGZpbHRlclN0eWxlZFN5dGVtUHJvcHMgPSAocHJvcCwgZGVmYXVsdFZhbGlkYXRvckZuKSA9PiAoIWFsbEJveFByb3BzW3Byb3BdICYmIGRlZmF1bHRWYWxpZGF0b3JGbihwcm9wKSk7XG5cbmNvbnN0IEJveCA9IHN0eWxlZC5kaXYud2l0aENvbmZpZyh7IHNob3VsZEZvcndhcmRQcm9wOiBmaWx0ZXJTdHlsZWRTeXRlbVByb3BzIH0pIDxCb3hQcm9wcz5gXG5cdCR7KHByb3BzKSA9PlxuXHRcdHByb3BzLnJvdyAmJlxuXHRcdGNzc2Bcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGBcblx0fTtcblx0JHsocHJvcHMpID0+XG5cdFx0cHJvcHMuY29sdW1uICYmXG5cdFx0Y3NzYFxuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YFxuXHR9O1xuXHQkeyhwcm9wcykgPT5cblx0XHRwcm9wcy5jZW50ZXIgJiZcblx0XHRjc3NgXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGBcblx0fTtcblx0JHsocHJvcHMpID0+XG5cdFx0cHJvcHMuYmV0d2VlbiAmJlxuXHRcdGNzc2Bcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGBcblx0fTtcblxuXHQke2NvbG9yfTtcblx0JHtmbGV4Ym94fTtcblx0JHtncmlkfVxuXHQke2ZvbnRTaXplfTtcblx0JHtmb250V2VpZ2h0fTtcblx0JHtsYXlvdXR9O1xuXHQke3R5cG9ncmFwaHl9O1xuXHQke3NwYWNlfTtcblx0JHtzaGFkb3d9O1xuXHQke2JvcmRlcn07XG5cdCR7cG9zaXRpb259O1xuXHQke2JhY2tncm91bmRJbWFnZX07XG5cdCR7Y3VzdG9tUHJvcHNTdHlsZUZufTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCb3ggZnJvbSAnQC9jb21wb25lbnRzL0JveCc7XG5cbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgcHQ9XCIxLjVyZW1cIlxuICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgICAgICB3aWR0aD1cIjEwMHZ3XCJcbiAgICAgICAgICAgIHpJbmRleD17Mn1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIG14PXtbXCIxLjhyZW1cIixdfVxuICAgICAgICAgICAgICAgIHB5PXt7IG1vYmlsZVhzOiBcIjFyZW1cIiwgdGFibGV0TWQ6IFwiMnJlbVwiIH19XG4gICAgICAgICAgICAgICAgZm9udFNpemU9XCIzcmVtXCJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI4MCVcIlxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjFyZW1cIlxuICAgICAgICAgICAgICAgIHB4PVwiMS41cmVtXCJcbiAgICAgICAgICAgICAgICBiZz1cIndoaXRlLTEwMFwiXG4gICAgICAgICAgICAgICAgYm94U2hhZG93PVwiMCAwIDEuNXJlbSAwLjVyZW0gI2Y5ZjlmOSwgMCAwIDEuNXJlbSAxcmVtICNmZGZkZmRcIlxuICAgICAgICAgICAgICAgIG1heFdpZHRoPXtbXCIxMDAlXCIsIFwiMTEwcmVtXCJdfVxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvd2ViM19sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17W1wiM3JlbVwiLCBcIjRyZW1cIl19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIG1sPVwiMXJlbVwiXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IG1vYmlsZVhzOiBcIjEuNnJlbVwiLCB0YWJsZXRNZDogXCIycmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwdXJwbGUtNTBcIlxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwiTXVrdGFcIlxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNjAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHdlYjMuanNcbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveCA+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm94IGZyb20gJ0AvY29tcG9uZW50cy9Cb3gnO1xuaW1wb3J0IE5hdkJhciBmcm9tICdAL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnO1xuXG5jb25zdCBIb21lQ29tcCA9ICgpID0+IHtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV0aEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImV0aEZpZWxkXCIpWzBdO1xuXG4gICAgICAgICAgICBbLi4uQXJyYXkoNjApXS5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIGV0aC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIvZXRoLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICBldGguc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdGFyXCIpO1xuICAgICAgICAgICAgICAgIGV0aC5zdHlsZS5oZWlnaHQgPSBcIjRyZW1cIjtcbiAgICAgICAgICAgICAgICBldGguc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgZ3NhcC5mcm9tVG8oZXRoLCB7IGF1dG9BbHBoYTogMCwgeDogZ3NhcC51dGlscy5yYW5kb20oMCwgMjAwMCwgMjAwKSwgeTogZ3NhcC51dGlscy5yYW5kb20oMCwgMTAwMCwgMTUwKSB9LCB7IGF1dG9BbHBoYTogMC4xLCBkdXJhdGlvbjogMSB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICAgICAgICAgICAgICAgIGV0aEZpZWxkLmFwcGVuZENoaWxkKGV0aCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGUpID0+IHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxFdGhGaWVsZCBjbGFzc05hbWU9XCJldGhGaWVsZFwiIHpJbmRleD17MX0gaGVpZ2h0PVwiMTAwdmhcIiBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfS8+XG4gICAgICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgICAgICA8Qm94IGNvbHVtbiBjZW50ZXIgdGV4dEFsaWduPVwiY2VudGVyXCIgbXg9XCIxLjhyZW1cIj5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiMTEwcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgbW9iaWxlWHM6IFwiMy4ycmVtXCIsIHRhYmxldE1kOiBcIjYuOHJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIG10PXtbXCIxNHJlbVwiLCBcIjI2cmVtXCJdfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInB1cnBsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEludGVyYWN0IFlvdXIgQXBwcyB3aXRoIHRoZSBFdGhlcmV1bSBCbG9ja2NoYWluXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBtb2JpbGVYczogXCIxLjZyZW1cIiwgdGFibGV0TWQ6IFwiMi40cmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI2MHJlbVwiXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI2MDAwXCJcbiAgICAgICAgICAgICAgICAgICAgbXQ9e3sgbW9iaWxlWHM6IFwiMnJlbVwiLCB0YWJsZXRNZDogXCI1cmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwdXJwbGUtNTBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgV2ViMy5qcyBpcyBhIGNvbGxlY3Rpb24gb2YgbGlicmFyaWVzIHRoYXQgYWxsb3cgeW91IHRvIGludGVyYWN0IHdpdGggYSBsb2NhbCBvciByZW1vdGUgZXRoZXJldW0gbm9kZSB1c2luZyBIVFRQLCBJUEMgb3IgV2ViU29ja2V0LlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3dlYjNqcy5yZWFkdGhlZG9jcy5pby9lbi92MS4zLjQvXCIgdGFyZ2V0PVwiX3NlbGZcIj5cbiAgICAgICAgICAgICAgICAgICAgPERvY3VtZW50YXRpb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnPVwicHVycGxlLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgbW9iaWxlWHM6IFwiMS42cmVtXCIsIHRhYmxldE1kOiBcIjJyZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgcD17eyBtb2JpbGVYczogXCIxcmVtXCIsIHRhYmxldE1kOiBcIjJyZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbXQ9e3sgbW9iaWxlWHM6IFwiMnJlbVwiLCB0YWJsZXRNZDogXCI0cmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMC41cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGUtMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBEb2N1bWVudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIDwvRG9jdW1lbnRhdGlvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3ggPlxuICAgICk7XG59XG5cblxuY29uc3QgRG9jdW1lbnRhdGlvbkJ1dHRvbiA9IHN0eWxlZChCb3gpKHByb3BzID0+IGBcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbiAxNTBtcztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIH1cbmApXG5cbmNvbnN0IEV0aEZpZWxkID0gc3R5bGVkKEJveCkocHJvcyA9PiBgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG5gKTtcbmV4cG9ydCBkZWZhdWx0IEhvbWVDb21wOyIsImltcG9ydCBzdHlsZWRTeXN0ZW1Qcm9wVHlwZXMgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vcHJvcC10eXBlcyc7XG5cbi8vIEFuIG9iamVjdCB3aGVyZSBrZXlzIGFyZSBhbGwgcHJvcHMgaW4gc3R5bGVkLXN5c3RlbSBhbmQgdmFsdWUgaXMgdHJ1ZS5cbi8vIEZvciBleGFtcGxlOiB7IGNvbG9yOiB0cnVlLCBmb250U2l6ZTogdHJ1ZSwgLi4ufVxuLy8gSXQgaXMgdXNlZCBpbiBmaWx0ZXJpbmcgcHJvcHMgZnJvbSBzdHlsZWQgY29tcG9uZW50c1xuZXhwb3J0IGNvbnN0IGFsbFN0eWxlZFN5c3RlbVByb3BzID0gT2JqZWN0LmtleXMoc3R5bGVkU3lzdGVtUHJvcFR5cGVzKS5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuXHRjb25zdCBrZXkgPSBzdHlsZWRTeXN0ZW1Qcm9wVHlwZXNbY3Vycl07XG5cdGlmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jykge1xuXHRcdE9iamVjdC5rZXlzKGtleSkuZm9yRWFjaCgoaykgPT4ge1xuXHRcdFx0YWNjW2tdID0gdHJ1ZTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRhY2Nba2V5XSA9IHRydWU7XG5cdH1cblxuXHRyZXR1cm4gYWNjO1xufSwge30pO1xuXG4vLyBBIGZpbHRlciBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQgd2l0aCAnc2hvdWxkRm9yd2FyZFByb3AnXG4vLyBpbiBzdHlsZWQgY29tcG9uZW50cyB0byBmaWx0ZXIgb3V0IGFsbCB0aGUgc3R5bGUgcHJvcHMgZnJvbVxuLy8gdGhlIEhUTUxcbmV4cG9ydCBjb25zdCBmaWx0ZXJTdHlsZWRTeXRlbVByb3BzID0gKHByb3AsIGRlZmF1bHRWYWxpZGF0b3JGbikgPT5cblx0IWFsbFN0eWxlZFN5c3RlbVByb3BzW3Byb3BdICYmIGRlZmF1bHRWYWxpZGF0b3JGbihwcm9wKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL3Byb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdzYXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtc3lzdGVtXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9