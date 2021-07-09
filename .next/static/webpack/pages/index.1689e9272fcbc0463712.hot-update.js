self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/containers/HomeComp/index.tsx":
/*!*******************************************!*\
  !*** ./src/containers/HomeComp/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_angel_projects_web3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Box */ "./src/components/Box.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/angel/projects/web3/src/containers/HomeComp/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var HomeComp = function HomeComp() {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (true) {
      var ethField = document.getElementsByClassName("ethField")[0];

      (0,_home_angel_projects_web3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(Array(80)).forEach(function () {
        var eth = document.createElement("img");
        eth.setAttribute("src", "/eth.png");
        eth.setAttribute("class", "star");
        eth.style.height = "4rem";
        eth.style.opacity = "0.2";
        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.fromTo(eth, {
          autoAlpha: 0,
          xPercent: gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.random(0, 200),
          yPercent: gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.random(0, 200)
        }, {
          autoAlpha: 0.2,
          duration: 1
        });
        console.log("hello");
        ethField.appendChild(eth);
      });
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EthField, {
      className: "ethField",
      zIndex: 1,
      height: "100vh",
      border: "1px solid black"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
      column: true,
      center: true,
      textAlign: "center",
      mx: "1.8rem",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
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
        lineNumber: 31,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
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
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
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
          lineNumber: 49,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, _this);
};

_s(HomeComp, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = HomeComp;
var DocumentationButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default)(function (props) {
  return "\n    transition: transform ease-in 150ms;\n    transform-origin: 50% 50%;\n    \n    &:hover {\n        transform: scale(1.05);\n    }\n";
});
var EthField = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default)(function (pros) {
  return "\n    position: absolute;\n\n";
});
/* harmony default export */ __webpack_exports__["default"] = (HomeComp);

var _c;

$RefreshReg$(_c, "HomeComp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSG9tZUNvbXAvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVDb21wIiwidXNlRWZmZWN0IiwiZXRoRmllbGQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJBcnJheSIsImZvckVhY2giLCJldGgiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiZ3NhcCIsImF1dG9BbHBoYSIsInhQZXJjZW50IiwieVBlcmNlbnQiLCJkdXJhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJhcHBlbmRDaGlsZCIsIm1vYmlsZVhzIiwidGFibGV0TWQiLCJEb2N1bWVudGF0aW9uQnV0dG9uIiwic3R5bGVkIiwiQm94IiwicHJvcHMiLCJFdGhGaWVsZCIsInByb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUVuQkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osY0FBcUI7QUFDakIsVUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLFVBQWhDLEVBQTRDLENBQTVDLENBQWpCOztBQUVBLGtJQUFJQyxLQUFLLENBQUMsRUFBRCxDQUFULEVBQWVDLE9BQWYsQ0FBdUIsWUFBTTtBQUN6QixZQUFNQyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FELFdBQUcsQ0FBQ0UsWUFBSixDQUFpQixLQUFqQixFQUF3QixVQUF4QjtBQUNBRixXQUFHLENBQUNFLFlBQUosQ0FBaUIsT0FBakIsRUFBMEIsTUFBMUI7QUFDQUYsV0FBRyxDQUFDRyxLQUFKLENBQVVDLE1BQVYsR0FBbUIsTUFBbkI7QUFDQUosV0FBRyxDQUFDRyxLQUFKLENBQVVFLE9BQVYs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QUlBLCtEQUFlNUIsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNjg5ZTkyNzJmY2JjMDQ2MzcxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3ggZnJvbSAnQC9jb21wb25lbnRzL0JveCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJ0AvY29tcG9uZW50cy9OYXZCYXInO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCc7XG5cbmNvbnN0IEhvbWVDb21wID0gKCkgPT4ge1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICAgICAgY29uc3QgZXRoRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZXRoRmllbGRcIilbMF07XG5cbiAgICAgICAgICAgIFsuLi5BcnJheSg4MCldLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgZXRoLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9ldGgucG5nXCIpO1xuICAgICAgICAgICAgICAgIGV0aC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN0YXJcIik7XG4gICAgICAgICAgICAgICAgZXRoLnN0eWxlLmhlaWdodCA9IFwiNHJlbVwiO1xuICAgICAgICAgICAgICAgIGV0aC5zdHlsZS5vcGFjaXR5ID0gXCIwLjJcIjtcbiAgICAgICAgICAgICAgICBnc2FwLmZyb21UbyhldGgsIHsgYXV0b0FscGhhOiAwLCB4UGVyY2VudDogZ3NhcC51dGlscy5yYW5kb20oMCwgMjAwKSwgeVBlcmNlbnQ6IGdzYXAudXRpbHMucmFuZG9tKDAsIDIwMCkgfSwgeyBhdXRvQWxwaGE6IDAuMiwgZHVyYXRpb246IDEgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgICAgICAgICAgICAgICBldGhGaWVsZC5hcHBlbmRDaGlsZChldGgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8RXRoRmllbGQgY2xhc3NOYW1lPVwiZXRoRmllbGRcIiB6SW5kZXg9ezF9IGhlaWdodD1cIjEwMHZoXCIgYm9yZGVyPVwiMXB4IHNvbGlkIGJsYWNrXCIgLz5cbiAgICAgICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgICAgIDxCb3ggY29sdW1uIGNlbnRlciB0ZXh0QWxpZ249XCJjZW50ZXJcIiBteD1cIjEuOHJlbVwiPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCIxMTByZW1cIlxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBtb2JpbGVYczogXCIzLjJyZW1cIiwgdGFibGV0TWQ6IFwiNi44cmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgbXQ9e1tcIjE0cmVtXCIsIFwiMjZyZW1cIl19XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHVycGxlLXRleHRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgSW50ZXJhY3QgWW91ciBBcHBzIHdpdGggdGhlIEV0aGVyZXVtIEJsb2NrY2hhaW5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IG1vYmlsZVhzOiBcIjEuNnJlbVwiLCB0YWJsZXRNZDogXCIyLjRyZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjYwcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjYwMDBcIlxuICAgICAgICAgICAgICAgICAgICBtdD17eyBtb2JpbGVYczogXCIycmVtXCIsIHRhYmxldE1kOiBcIjVyZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInB1cnBsZS01MFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBXZWIzLmpzIGlzIGEgY29sbGVjdGlvbiBvZiBsaWJyYXJpZXMgdGhhdCBhbGxvdyB5b3UgdG8gaW50ZXJhY3Qgd2l0aCBhIGxvY2FsIG9yIHJlbW90ZSBldGhlcmV1bSBub2RlIHVzaW5nIEhUVFAsIElQQyBvciBXZWJTb2NrZXQuXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd2ViM2pzLnJlYWR0aGVkb2NzLmlvL2VuL3YxLjMuNC9cIiB0YXJnZXQ9XCJfc2VsZlwiPlxuICAgICAgICAgICAgICAgICAgICA8RG9jdW1lbnRhdGlvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgYmc9XCJwdXJwbGUtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBtb2JpbGVYczogXCIxLjZyZW1cIiwgdGFibGV0TWQ6IFwiMnJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBwPXt7IG1vYmlsZVhzOiBcIjFyZW1cIiwgdGFibGV0TWQ6IFwiMnJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBtdD17eyBtb2JpbGVYczogXCIycmVtXCIsIHRhYmxldE1kOiBcIjRyZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIwLjVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIERvY3VtZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgPC9Eb2N1bWVudGF0aW9uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveCA+XG4gICAgKTtcbn1cblxuXG5jb25zdCBEb2N1bWVudGF0aW9uQnV0dG9uID0gc3R5bGVkKEJveCkocHJvcHMgPT4gYFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluIDE1MG1zO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgfVxuYClcblxuY29uc3QgRXRoRmllbGQgPSBzdHlsZWQoQm94KShwcm9zID0+IGBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbmApO1xuZXhwb3J0IGRlZmF1bHQgSG9tZUNvbXA7Il0sInNvdXJjZVJvb3QiOiIifQ==