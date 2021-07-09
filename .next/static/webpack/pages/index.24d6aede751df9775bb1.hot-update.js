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

      (0,_home_angel_projects_web3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(Array(60)).forEach(function () {
        var eth = document.createElement("img");
        eth.setAttribute("src", "/eth.png");
        eth.setAttribute("class", "star");
        eth.style.height = "4rem";
        eth.style.position = "absolute";
        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.fromTo(eth, {
          autoAlpha: 0,
          x: gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.random(0, 2000, 200),
          y: gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.random(0, 1000, 150)
        }, {
          autoAlpha: 0.1,
          duration: 1
        });
        console.log("hello");
        ethField.appendChild(eth);
      });
    }
  });
  var handleM;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EthField, {
      className: "ethField",
      zIndex: 1,
      height: "100vh",
      onMouseMove: handleMouseMove
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
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
        lineNumber: 33,
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
        lineNumber: 41,
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
          lineNumber: 51,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, _this);
};

_s(HomeComp, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = HomeComp;
var DocumentationButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default)(function (props) {
  return "\n    transition: transform ease-in 150ms;\n    transform-origin: 50% 50%;\n    \n    &:hover {\n        transform: scale(1.05);\n    }\n";
});
var EthField = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(_components_Box__WEBPACK_IMPORTED_MODULE_3__.default)(function (pros) {
  return "\n    position: fixed;\n\n";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSG9tZUNvbXAvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVDb21wIiwidXNlRWZmZWN0IiwiZXRoRmllbGQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJBcnJheSIsImZvckVhY2giLCJldGgiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJoZWlnaHQiLCJwb3NpdGlvbiIsImdzYXAiLCJhdXRvQWxwaGEiLCJ4IiwieSIsImR1cmF0aW9uIiwiY29uc29sZSIsImxvZyIsImFwcGVuZENoaWxkIiwiaGFuZGxlTSIsImhhbmRsZU1vdXNlTW92ZSIsIm1vYmlsZVhzIiwidGFibGV0TWQiLCJEb2N1bWVudGF0aW9uQnV0dG9uIiwic3R5bGVkIiwiQm94IiwicHJvcHMiLCJFdGhGaWVsZCIsInByb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUVuQkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osY0FBcUI7QUFDakIsVUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLFVBQWhDLEVBQTRDLENBQTVDLENBQWpCOztBQUVBLGtJQUFJQyxLQUFLLENBQUMsRUFBRCxDQUFULEVBQWVDLE9BQWYsQ0FBdUIsWUFBTTtBQUN6QixZQUFNQyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FELFdBQUcsQ0FBQ0UsWUFBSixDQUFpQixLQUFqQixFQUF3QixVQUF4QjtBQUNBRixXQUFHLENBQUNFLFlBQUosQ0FBaUIsT0FBakIsRUFBMEIsTUFBMUI7QUFDQUYsV0FBRyxDQUFDRyxLQUFKLENBQVVDLE1BQVYsR0FBbUIsTUFBbkI7QUFDQUosV0FBRyxDQUFDRyxL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QUFDQyxvREFBRCxDQUFOLENBQVksVUFBQUcsSUFBSTtBQUFBO0FBQUEsQ0FBaEIsQ0FBakI7QUFJQSwrREFBZTlCLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjRkNmFlZGU3NTFkZjk3NzViYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm94IGZyb20gJ0AvY29tcG9uZW50cy9Cb3gnO1xuaW1wb3J0IE5hdkJhciBmcm9tICdAL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnO1xuXG5jb25zdCBIb21lQ29tcCA9ICgpID0+IHtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV0aEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImV0aEZpZWxkXCIpWzBdO1xuXG4gICAgICAgICAgICBbLi4uQXJyYXkoNjApXS5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIGV0aC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIvZXRoLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICBldGguc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdGFyXCIpO1xuICAgICAgICAgICAgICAgIGV0aC5zdHlsZS5oZWlnaHQgPSBcIjRyZW1cIjtcbiAgICAgICAgICAgICAgICBldGguc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICAgICAgZ3NhcC5mcm9tVG8oZXRoLCB7IGF1dG9BbHBoYTogMCwgeDogZ3NhcC51dGlscy5yYW5kb20oMCwgMjAwMCwgMjAwKSwgeTogZ3NhcC51dGlscy5yYW5kb20oMCwgMTAwMCwgMTUwKSB9LCB7IGF1dG9BbHBoYTogMC4xLCBkdXJhdGlvbjogMSB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICAgICAgICAgICAgICAgIGV0aEZpZWxkLmFwcGVuZENoaWxkKGV0aCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlTVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxFdGhGaWVsZCBjbGFzc05hbWU9XCJldGhGaWVsZFwiIHpJbmRleD17MX0gaGVpZ2h0PVwiMTAwdmhcIiBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfS8+XG4gICAgICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgICAgICA8Qm94IGNvbHVtbiBjZW50ZXIgdGV4dEFsaWduPVwiY2VudGVyXCIgbXg9XCIxLjhyZW1cIj5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiMTEwcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgbW9iaWxlWHM6IFwiMy4ycmVtXCIsIHRhYmxldE1kOiBcIjYuOHJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIG10PXtbXCIxNHJlbVwiLCBcIjI2cmVtXCJdfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInB1cnBsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEludGVyYWN0IFlvdXIgQXBwcyB3aXRoIHRoZSBFdGhlcmV1bSBCbG9ja2NoYWluXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBtb2JpbGVYczogXCIxLjZyZW1cIiwgdGFibGV0TWQ6IFwiMi40cmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI2MHJlbVwiXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI2MDAwXCJcbiAgICAgICAgICAgICAgICAgICAgbXQ9e3sgbW9iaWxlWHM6IFwiMnJlbVwiLCB0YWJsZXRNZDogXCI1cmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwdXJwbGUtNTBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgV2ViMy5qcyBpcyBhIGNvbGxlY3Rpb24gb2YgbGlicmFyaWVzIHRoYXQgYWxsb3cgeW91IHRvIGludGVyYWN0IHdpdGggYSBsb2NhbCBvciByZW1vdGUgZXRoZXJldW0gbm9kZSB1c2luZyBIVFRQLCBJUEMgb3IgV2ViU29ja2V0LlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3dlYjNqcy5yZWFkdGhlZG9jcy5pby9lbi92MS4zLjQvXCIgdGFyZ2V0PVwiX3NlbGZcIj5cbiAgICAgICAgICAgICAgICAgICAgPERvY3VtZW50YXRpb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnPVwicHVycGxlLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgbW9iaWxlWHM6IFwiMS42cmVtXCIsIHRhYmxldE1kOiBcIjJyZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgcD17eyBtb2JpbGVYczogXCIxcmVtXCIsIHRhYmxldE1kOiBcIjJyZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbXQ9e3sgbW9iaWxlWHM6IFwiMnJlbVwiLCB0YWJsZXRNZDogXCI0cmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMC41cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGUtMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBEb2N1bWVudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIDwvRG9jdW1lbnRhdGlvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3ggPlxuICAgICk7XG59XG5cblxuY29uc3QgRG9jdW1lbnRhdGlvbkJ1dHRvbiA9IHN0eWxlZChCb3gpKHByb3BzID0+IGBcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbiAxNTBtcztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIH1cbmApXG5cbmNvbnN0IEV0aEZpZWxkID0gc3R5bGVkKEJveCkocHJvcyA9PiBgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG5gKTtcbmV4cG9ydCBkZWZhdWx0IEhvbWVDb21wOyJdLCJzb3VyY2VSb290IjoiIn0=