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
  var handleMouseMove;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvSG9tZUNvbXAvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVDb21wIiwidXNlRWZmZWN0IiwiZXRoRmllbGQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJBcnJheSIsImZvckVhY2giLCJldGgiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJoZWlnaHQiLCJwb3NpdGlvbiIsImdzYXAiLCJhdXRvQWxwaGEiLCJ4IiwieSIsImR1cmF0aW9uIiwiY29uc29sZSIsImxvZyIsImFwcGVuZENoaWxkIiwiaGFuZGxlTW91c2VNb3ZlIiwibW9iaWxlWHMiLCJ0YWJsZXRNZCIsIkRvY3VtZW50YXRpb25CdXR0b24iLCJzdHlsZWQiLCJCb3giLCJwcm9wcyIsIkV0aEZpZWxkIiwicHJvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBRW5CQyxrREFBUyxDQUFDLFlBQU07QUFDWixjQUFxQjtBQUNqQixVQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsVUFBaEMsRUFBNEMsQ0FBNUMsQ0FBakI7O0FBRUEsa0lBQUlDLEtBQUssQ0FBQyxFQUFELENBQVQsRUFBZUMsT0FBZixDQUF1QixZQUFNO0FBQ3pCLFlBQU1DLEdBQUcsR0FBR0osUUFBUSxDQUFDSyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUQsV0FBRyxDQUFDRSxZQUFKLENBQWlCLEtBQWpCLEVBQXdCLFVBQXhCO0FBQ0FGLFdBQUcsQ0FBQ0UsWUFBSixDQUFpQixPQUFqQixFQUEwQixNQUExQjtBQUNBRixXQUFHLENBQUNHLEtBQUosQ0FBVUMsTUFBVixHQUFtQixNQUFuQjtBQUNBSixXQUFHLENBQUNHLEtBQUosQ0FBVUUs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LENBQU4sQ0FBWSxVQUFBRyxJQUFJO0FBQUE7QUFBQSxDQUFoQixDQUFqQjtBQUlBLCtEQUFlN0IsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41M2M2ZGY5ZTIyOTQ5NjM1YjQ2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3ggZnJvbSAnQC9jb21wb25lbnRzL0JveCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJ0AvY29tcG9uZW50cy9OYXZCYXInO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCc7XG5cbmNvbnN0IEhvbWVDb21wID0gKCkgPT4ge1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICAgICAgY29uc3QgZXRoRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZXRoRmllbGRcIilbMF07XG5cbiAgICAgICAgICAgIFsuLi5BcnJheSg2MCldLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgZXRoLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9ldGgucG5nXCIpO1xuICAgICAgICAgICAgICAgIGV0aC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN0YXJcIik7XG4gICAgICAgICAgICAgICAgZXRoLnN0eWxlLmhlaWdodCA9IFwiNHJlbVwiO1xuICAgICAgICAgICAgICAgIGV0aC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICBnc2FwLmZyb21UbyhldGgsIHsgYXV0b0FscGhhOiAwLCB4OiBnc2FwLnV0aWxzLnJhbmRvbSgwLCAyMDAwLCAyMDApLCB5OiBnc2FwLnV0aWxzLnJhbmRvbSgwLCAxMDAwLCAxNTApIH0sIHsgYXV0b0FscGhhOiAwLjEsIGR1cmF0aW9uOiAxIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgICAgICAgICAgICAgZXRoRmllbGQuYXBwZW5kQ2hpbGQoZXRoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmVcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8RXRoRmllbGQgY2xhc3NOYW1lPVwiZXRoRmllbGRcIiB6SW5kZXg9ezF9IGhlaWdodD1cIjEwMHZoXCIgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX0vPlxuICAgICAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICAgICAgPEJveCBjb2x1bW4gY2VudGVyIHRleHRBbGlnbj1cImNlbnRlclwiIG14PVwiMS44cmVtXCI+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjExMHJlbVwiXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IG1vYmlsZVhzOiBcIjMuMnJlbVwiLCB0YWJsZXRNZDogXCI2LjhyZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICBtdD17W1wiMTRyZW1cIiwgXCIyNnJlbVwiXX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwdXJwbGUtdGV4dFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBJbnRlcmFjdCBZb3VyIEFwcHMgd2l0aCB0aGUgRXRoZXJldW0gQmxvY2tjaGFpblxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgbW9iaWxlWHM6IFwiMS42cmVtXCIsIHRhYmxldE1kOiBcIjIuNHJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiNjByZW1cIlxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNjAwMFwiXG4gICAgICAgICAgICAgICAgICAgIG10PXt7IG1vYmlsZVhzOiBcIjJyZW1cIiwgdGFibGV0TWQ6IFwiNXJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHVycGxlLTUwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFdlYjMuanMgaXMgYSBjb2xsZWN0aW9uIG9mIGxpYnJhcmllcyB0aGF0IGFsbG93IHlvdSB0byBpbnRlcmFjdCB3aXRoIGEgbG9jYWwgb3IgcmVtb3RlIGV0aGVyZXVtIG5vZGUgdXNpbmcgSFRUUCwgSVBDIG9yIFdlYlNvY2tldC5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93ZWIzanMucmVhZHRoZWRvY3MuaW8vZW4vdjEuMy40L1wiIHRhcmdldD1cIl9zZWxmXCI+XG4gICAgICAgICAgICAgICAgICAgIDxEb2N1bWVudGF0aW9uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBiZz1cInB1cnBsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IG1vYmlsZVhzOiBcIjEuNnJlbVwiLCB0YWJsZXRNZDogXCIycmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHA9e3sgbW9iaWxlWHM6IFwiMXJlbVwiLCB0YWJsZXRNZDogXCIycmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG10PXt7IG1vYmlsZVhzOiBcIjJyZW1cIiwgdGFibGV0TWQ6IFwiNHJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjAuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgICAgICAgICA8L0RvY3VtZW50YXRpb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94ID5cbiAgICApO1xufVxuXG5cbmNvbnN0IERvY3VtZW50YXRpb25CdXR0b24gPSBzdHlsZWQoQm94KShwcm9wcyA9PiBgXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4gMTUwbXM7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG5gKVxuXG5jb25zdCBFdGhGaWVsZCA9IHN0eWxlZChCb3gpKHByb3MgPT4gYFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuYCk7XG5leHBvcnQgZGVmYXVsdCBIb21lQ29tcDsiXSwic291cmNlUm9vdCI6IiJ9