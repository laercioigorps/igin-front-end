"use strict";
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./data/use-data.js":
/*!**************************!*\
  !*** ./data/use-data.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUser": function() { return /* binding */ useUser; },
/* harmony export */   "useActiveIteration": function() { return /* binding */ useActiveIteration; },
/* harmony export */   "useGoals": function() { return /* binding */ useGoals; },
/* harmony export */   "useGoal": function() { return /* binding */ useGoal; },
/* harmony export */   "useNeeds": function() { return /* binding */ useNeeds; },
/* harmony export */   "useSteps": function() { return /* binding */ useSteps; },
/* harmony export */   "useStep": function() { return /* binding */ useStep; },
/* harmony export */   "useTasks": function() { return /* binding */ useTasks; },
/* harmony export */   "useTask": function() { return /* binding */ useTask; },
/* harmony export */   "useTasksByIteration": function() { return /* binding */ useTasksByIteration; }
/* harmony export */ });
/* harmony import */ var C_Users_Patricia_Cardoso_Documents_Dev_nextjs_igin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Patricia_Cardoso_Documents_Dev_nextjs_igin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Patricia_Cardoso_Documents_Dev_nextjs_igin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Patricia_Cardoso_Documents_Dev_nextjs_igin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$(),
    _s6 = $RefreshSig$(),
    _s7 = $RefreshSig$(),
    _s8 = $RefreshSig$(),
    _s9 = $RefreshSig$(),
    _s10 = $RefreshSig$();



var fetcher = /*#__PURE__*/function () {
  var _ref = (0,C_Users_Patricia_Cardoso_Documents_Dev_nextjs_igin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Patricia_Cardoso_Documents_Dev_nextjs_igin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url, token) {
    var res, error;
    return C_Users_Patricia_Cardoso_Documents_Dev_nextjs_igin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, {
              method: "get",
              headers: new Headers({
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Token " + token
              })
            });

          case 2:
            res = _context.sent;

            if (res.ok) {
              _context.next = 10;
              break;
            }

            error = new Error("An error ocurred while fetching the data");
            _context.next = 7;
            return res.json();

          case 7:
            error.info = _context.sent;
            error.status = res.status;
            throw error;

          case 10:
            return _context.abrupt("return", res.json());

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetcher(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function useUser() {
  _s();

  var loggedOut = !( true && localStorage.getItem("token") != "null");

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__.default)(!loggedOut ? ["http://127.0.0.1:8000/rest-auth/user/", localStorage.token] : null, fetcher),
      data = _useSWR.data,
      error = _useSWR.error; //const { data, error } = useSWR( ()=>(["http://127.0.0.1:8000/rest-auth/user/", localStorage.token]), fetcher);


  var loading = !data && !error && !loggedOut;
  return {
    loading: loading,
    loggedOut: loggedOut,
    user: data
  };
}

_s(useUser, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__.default];
});

function useActiveIteration() {
  _s2();

  var loggedOut = !( true && localStorage.getItem("token") != "null");

  var _useSWR2 = (0,swr__WEBPACK_IMPORTED_MODULE_2__.default)(!loggedOut ? ["http://127.0.0.1:8000/iteration/active/", localStorage.token] : null, fetcher),
      data = _useSWR2.data,
      error = _useSWR2.error;

  var loading = !data && !error;
  return {
    iterationLoading: loading,
    loggedOut: loggedOut,
    iteration: data,
    iterationError: error
  };
}

_s2(useActiveIteration, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__.default];
});

function useGoals() {
  _s3();

  var loggedOut = !( true && localStorage.getItem("token") != "null");

  var _useSWR3 = (0,swr__WEBPACK_IMPORTED_MODULE_2__.default)(!loggedOut ? ["http://127.0.0.1:8000/goal/", localStorage.token] : null, fetcher),
      data = _useSWR3.data,
      error = _useSWR3.error;

  var loading = !data && !error;
  return {
    loading: loading,
    loggedOut: loggedOut,
    data: data
  };
}

_s3(useGoals, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__.default];
});

function useGoal(id) {
  _s4();

  var loggedOut = !( true && localStorage.getItem("token") != "null");

  var _useSWR4 = (0,swr__WEBPACK_IMPORTED_MODULE_2__.default)(!loggedOut && id ? ["http://127.0.0.1:8000/goal/" + id, localStorage.token] : null, fetcher),
      data = _useSWR4.data,
      error = _useSWR4.error;

  var loading = !data && !error;
  return {
    loading: loading,
    loggedOut: loggedOut,
    data: data
  };
}

_s4(useGoal, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__.default];
});

function useNeeds() {
  _s5();

  var loggedOut = !( true && localStorage.getItem("token") != "null");

  var _useSWR5 = (0,swr__WEBPACK_IMPORTED_MODULE_2__.default)(!loggedOut ? ["http://127.0.0.1:8000/need/", localStorage.token] : null, fetcher),
      data = _useSWR5.data,
      error = _useSWR5.error;

  var loading = !data && !error && !loggedOut;
  return {
    needsLoading: loading,
    needsLoggedOut: loggedOut,
    needs: data,
    needsError: error
  };
}

_s5(useNeeds, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__.default];
});

function useSteps(goal) {
  _s6();

  var loggedOut = !( true && localStorage.getItem("token") != "null");

  var _useSWR6 = (0,swr__WEBPACK_IMPORTED_MODULE_2__.default)(!loggedOut && goal ? ["http://127.0.0.1:8000/" + goal + "/steps/", localStorage.token] : null, fetcher),
      data = _useSWR6.data,
      error = _useSWR6.error;

  var loading = !data && !error;
  3;
  return {
    loading: loading,
    loggedOut: loggedOut,
    data: data
  };
}

_s6(useSteps, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__.default];
});

function useStep(id) {
  _s7();

  var loggedOut = !( true && localStorage.getItem("token") != "null");

  var _useSWR7 = (0,swr__WEBPACK_IMPORTED_MODULE_2__.default)(!loggedOut && id ? ["http://127.0.0.1:8000/goal/" + id, localStorage.token] : null, fetcher),
      data = _useSWR7.data,
      error = _useSWR7.error;

  var loading = !data && !error;
  3;
  return {
    loading: loading,
    loggedOut: loggedOut,
    data: data
  };
}

_s7(useStep, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__.default];
});

function useTasks(step) {
  _s8();

  var loggedOut = !( true && localStorage.getItem("token") != "null");

  var _useSWR8 = (0,swr__WEBPACK_IMPORTED_MODULE_2__.default)(!loggedOut && step ? ["http://127.0.0.1:8000/" + step + "/delivery/", localStorage.token] : null, fetcher),
      data = _useSWR8.data,
      error = _useSWR8.error,
      mutate = _useSWR8.mutate;

  var loading = !data && !error;
  3;
  return {
    loading: loading,
    loggedOut: loggedOut,
    data: data,
    mutate: mutate
  };
}

_s8(useTasks, "pbBX9XurWnZRjcYBDDzfT5aPhoI=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__.default];
});

function useTask(id) {
  _s9();

  var loggedOut = !( true && localStorage.getItem("token") != "null");

  var _useSWR9 = (0,swr__WEBPACK_IMPORTED_MODULE_2__.default)(!loggedOut && id ? ["http://127.0.0.1:8000/delivery/" + id, localStorage.token] : null, fetcher),
      data = _useSWR9.data,
      error = _useSWR9.error;

  var loading = !data && !error;
  3;
  return {
    loading: loading,
    loggedOut: loggedOut,
    data: data
  };
}

_s9(useTask, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__.default];
});

function useTasksByIteration(iteration) {
  _s10();

  var loggedOut = !( true && localStorage.getItem("token") != "null");

  var _useSWR10 = (0,swr__WEBPACK_IMPORTED_MODULE_2__.default)(!loggedOut && iteration ? ["http://127.0.0.1:8000/iteration/" + iteration + "/delivery/", localStorage.token] : null, fetcher),
      data = _useSWR10.data,
      error = _useSWR10.error;

  var loading = !data && !error;
  return {
    tasksLoading: loading,
    loggedOut: loggedOut,
    tasks: data,
    tasksError: error
  };
}

_s10(useTasksByIteration, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__.default];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjcwNWFhMDJmN2QzNzQwYjRkOWQyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQyxPQUFPO0FBQUEscVRBQUcsaUJBQU9DLEdBQVAsRUFBWUMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNJQyxLQUFLLENBQUNGLEdBQUQsRUFBTTtBQUMzQkcsY0FBQUEsTUFBTSxFQUFFLEtBRG1CO0FBRTNCQyxjQUFBQSxPQUFPLEVBQUUsSUFBSUMsT0FBSixDQUFZO0FBQ25CQyxnQkFBQUEsTUFBTSxFQUFFLGtCQURXO0FBRW5CLGdDQUFnQixtQ0FGRztBQUduQkMsZ0JBQUFBLGFBQWEsRUFBRSxXQUFXTjtBQUhQLGVBQVo7QUFGa0IsYUFBTixDQURUOztBQUFBO0FBQ1JPLFlBQUFBLEdBRFE7O0FBQUEsZ0JBVVRBLEdBQUcsQ0FBQ0MsRUFWSztBQUFBO0FBQUE7QUFBQTs7QUFXTkMsWUFBQUEsS0FYTSxHQVdFLElBQUlDLEtBQUosQ0FBVSwwQ0FBVixDQVhGO0FBQUE7QUFBQSxtQkFZT0gsR0FBRyxDQUFDSSxJQUFKLEVBWlA7O0FBQUE7QUFZWkYsWUFBQUEsS0FBSyxDQUFDRyxJQVpNO0FBYVpILFlBQUFBLEtBQUssQ0FBQ0ksTUFBTixHQUFlTixHQUFHLENBQUNNLE1BQW5CO0FBYlksa0JBY05KLEtBZE07O0FBQUE7QUFBQSw2Q0FpQlBGLEdBQUcsQ0FBQ0ksSUFBSixFQWpCTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFQYixPQUFPO0FBQUE7QUFBQTtBQUFBLEdBQWI7O0FBb0JPLFNBQVNnQixPQUFULEdBQW1CO0FBQUE7O0FBQ3hCLE1BQU1DLFNBQVMsR0FBRyxFQUNoQixTQUFpQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9B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cUIsT0FBckIsS0FBaUMsTUFEbEQsQ0FBbEI7O0FBRDZDLGtCQUlyQnBCLDRDQUFNLENBQzVCLENBQUNrQixTQUFELElBQWNRLFNBQWQsR0FDSSxDQUNFLHFDQUFxQ0EsU0FBckMsR0FBaUQsWUFEbkQsRUFFRVAsWUFBWSxDQUFDaEIsS0FGZixDQURKLEdBS0ksSUFOd0IsRUFPNUJGLE9BUDRCLENBSmU7QUFBQSxNQUlyQ29CLElBSnFDLGFBSXJDQSxJQUpxQztBQUFBLE1BSS9CVCxLQUorQixhQUkvQkEsS0FKK0I7O0FBYzdDLE1BQU1VLE9BQU8sR0FBRyxDQUFDRCxJQUFELElBQVMsQ0FBQ1QsS0FBMUI7QUFFQSxTQUFPO0FBQ0xnQyxJQUFBQSxZQUFZLEVBQUV0QixPQURUO0FBRUxKLElBQUFBLFNBQVMsRUFBVEEsU0FGSztBQUdMMkIsSUFBQUEsS0FBSyxFQUFFeEIsSUFIRjtBQUlMeUIsSUFBQUEsVUFBVSxFQUFFbEM7QUFKUCxHQUFQO0FBTUQ7O0tBdEJlK0I7VUFJVTNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGEvdXNlLWRhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgQXV0aG9yaXphdGlvbjogXCJUb2tlbiBcIiArIHRva2VuLFxyXG4gICAgfSksXHJcbiAgfSk7XHJcblxyXG4gIGlmICghcmVzLm9rKSB7XHJcbiAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcIkFuIGVycm9yIG9jdXJyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGRhdGFcIik7XHJcbiAgICBlcnJvci5pbmZvID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGVycm9yLnN0YXR1cyA9IHJlcy5zdGF0dXM7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXMuanNvbigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVzZXIoKSB7XHJcbiAgY29uc3QgbG9nZ2VkT3V0ID0gIShcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSAhPSBcIm51bGxcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICFsb2dnZWRPdXRcclxuICAgICAgPyBbXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvcmVzdC1hdXRoL3VzZXIvXCIsIGxvY2FsU3RvcmFnZS50b2tlbl1cclxuICAgICAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcbiAgLy9jb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoICgpPT4oW1wiaHR0cDovLzEyNy4wLjAuMTo4MDAwL3Jlc3QtYXV0aC91c2VyL1wiLCBsb2NhbFN0b3JhZ2UudG9rZW5dKSwgZmV0Y2hlcik7XHJcblxyXG4gIGNvbnN0IGxvYWRpbmcgPSAhZGF0YSAmJiAhZXJyb3IgJiYgIWxvZ2dlZE91dDtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICBsb2dnZWRPdXQsXHJcbiAgICB1c2VyOiBkYXRhLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBY3RpdmVJdGVyYXRpb24oKSB7XHJcbiAgY29uc3QgbG9nZ2VkT3V0ID0gIShcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSAhPSBcIm51bGxcIlxyXG4gICk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgIWxvZ2dlZE91dFxyXG4gICAgICA/IFtcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9pdGVyYXRpb24vYWN0aXZlL1wiLCBsb2NhbFN0b3JhZ2UudG9rZW5dXHJcbiAgICAgIDogbnVsbCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG5cclxuICBjb25zdCBsb2FkaW5nID0gIWRhdGEgJiYgIWVycm9yO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXRlcmF0aW9uTG9hZGluZzogbG9hZGluZyxcclxuICAgIGxvZ2dlZE91dCxcclxuICAgIGl0ZXJhdGlvbjogZGF0YSxcclxuICAgIGl0ZXJhdGlvbkVycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlR29hbHMoKSB7XHJcbiAgY29uc3QgbG9nZ2VkT3V0ID0gIShcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSAhPSBcIm51bGxcIlxyXG4gICk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgIWxvZ2dlZE91dCA/IFtcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9nb2FsL1wiLCBsb2NhbFN0b3JhZ2UudG9rZW5dIDogbnVsbCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG5cclxuICBjb25zdCBsb2FkaW5nID0gIWRhdGEgJiYgIWVycm9yO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbG9hZGluZyxcclxuICAgIGxvZ2dlZE91dCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdvYWwoaWQpIHtcclxuICBjb25zdCBsb2dnZWRPdXQgPSAhKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpICE9IFwibnVsbFwiXHJcbiAgKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAhbG9nZ2VkT3V0ICYmIGlkXHJcbiAgICAgID8gW1wiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2dvYWwvXCIgKyBpZCwgbG9jYWxTdG9yYWdlLnRva2VuXVxyXG4gICAgICA6IG51bGwsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbG9hZGluZyA9ICFkYXRhICYmICFlcnJvcjtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICBsb2dnZWRPdXQsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VOZWVkcygpIHtcclxuICBjb25zdCBsb2dnZWRPdXQgPSAhKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpICE9IFwibnVsbFwiXHJcbiAgKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAhbG9nZ2VkT3V0XHJcbiAgICAgID8gW1wiaHR0cDovLzEyNy4wLjAuMTo4MDAwL25lZWQvXCIsIGxvY2FsU3RvcmFnZS50b2tlbl1cclxuICAgICAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGxvYWRpbmcgPSAhZGF0YSAmJiAhZXJyb3IgJiYgIWxvZ2dlZE91dDtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5lZWRzTG9hZGluZyA6IGxvYWRpbmcsXHJcbiAgICBuZWVkc0xvZ2dlZE91dDogbG9nZ2VkT3V0LFxyXG4gICAgbmVlZHM6IGRhdGEsXHJcbiAgICBuZWVkc0Vycm9yIDogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0ZXBzKGdvYWwpIHtcclxuICBjb25zdCBsb2dnZWRPdXQgPSAhKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpICE9IFwibnVsbFwiXHJcbiAgKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAhbG9nZ2VkT3V0ICYmIGdvYWxcclxuICAgICAgPyBbXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvXCIgKyBnb2FsICsgXCIvc3RlcHMvXCIsIGxvY2FsU3RvcmFnZS50b2tlbl1cclxuICAgICAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGxvYWRpbmcgPSAhZGF0YSAmJiAhZXJyb3I7XHJcbiAgMztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICBsb2dnZWRPdXQsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGVwKGlkKSB7XHJcbiAgY29uc3QgbG9nZ2VkT3V0ID0gIShcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSAhPSBcIm51bGxcIlxyXG4gICk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgIWxvZ2dlZE91dCAmJiBpZFxyXG4gICAgICA/IFtcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9nb2FsL1wiICsgaWQsIGxvY2FsU3RvcmFnZS50b2tlbl1cclxuICAgICAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGxvYWRpbmcgPSAhZGF0YSAmJiAhZXJyb3I7XHJcbiAgMztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICBsb2dnZWRPdXQsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUYXNrcyhzdGVwKSB7XHJcbiAgY29uc3QgbG9nZ2VkT3V0ID0gIShcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSAhPSBcIm51bGxcIlxyXG4gICk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbXV0YXRlIH0gPSB1c2VTV1IoXHJcbiAgICAhbG9nZ2VkT3V0ICYmIHN0ZXBcclxuICAgICAgPyBbXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvXCIgKyBzdGVwICsgXCIvZGVsaXZlcnkvXCIsIGxvY2FsU3RvcmFnZS50b2tlbl1cclxuICAgICAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGxvYWRpbmcgPSAhZGF0YSAmJiAhZXJyb3I7XHJcbiAgMztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICBsb2dnZWRPdXQsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgbXV0YXRlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUYXNrKGlkKSB7XHJcbiAgY29uc3QgbG9nZ2VkT3V0ID0gIShcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSAhPSBcIm51bGxcIlxyXG4gICk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgIWxvZ2dlZE91dCAmJiBpZFxyXG4gICAgICA/IFtcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kZWxpdmVyeS9cIiArIGlkLCBsb2NhbFN0b3JhZ2UudG9rZW5dXHJcbiAgICAgIDogbnVsbCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG5cclxuICBjb25zdCBsb2FkaW5nID0gIWRhdGEgJiYgIWVycm9yO1xyXG4gIDM7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBsb2FkaW5nLFxyXG4gICAgbG9nZ2VkT3V0LFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFza3NCeUl0ZXJhdGlvbihpdGVyYXRpb24pIHtcclxuICBjb25zdCBsb2dnZWRPdXQgPSAhKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpICE9IFwibnVsbFwiXHJcbiAgKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAhbG9nZ2VkT3V0ICYmIGl0ZXJhdGlvblxyXG4gICAgICA/IFtcclxuICAgICAgICAgIFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2l0ZXJhdGlvbi9cIiArIGl0ZXJhdGlvbiArIFwiL2RlbGl2ZXJ5L1wiLFxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnRva2VuLFxyXG4gICAgICAgIF1cclxuICAgICAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGxvYWRpbmcgPSAhZGF0YSAmJiAhZXJyb3I7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0YXNrc0xvYWRpbmc6IGxvYWRpbmcsXHJcbiAgICBsb2dnZWRPdXQsXHJcbiAgICB0YXNrczogZGF0YSxcclxuICAgIHRhc2tzRXJyb3I6IGVycm9yXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU1dSIiwiZmV0Y2hlciIsInVybCIsInRva2VuIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJyZXMiLCJvayIsImVycm9yIiwiRXJyb3IiLCJqc29uIiwiaW5mbyIsInN0YXR1cyIsInVzZVVzZXIiLCJsb2dnZWRPdXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0YSIsImxvYWRpbmciLCJ1c2VyIiwidXNlQWN0aXZlSXRlcmF0aW9uIiwiaXRlcmF0aW9uTG9hZGluZyIsIml0ZXJhdGlvbiIsIml0ZXJhdGlvbkVycm9yIiwidXNlR29hbHMiLCJ1c2VHb2FsIiwiaWQiLCJ1c2VOZWVkcyIsIm5lZWRzTG9hZGluZyIsIm5lZWRzTG9nZ2VkT3V0IiwibmVlZHMiLCJuZWVkc0Vycm9yIiwidXNlU3RlcHMiLCJnb2FsIiwidXNlU3RlcCIsInVzZVRhc2tzIiwic3RlcCIsIm11dGF0ZSIsInVzZVRhc2siLCJ1c2VUYXNrc0J5SXRlcmF0aW9uIiwidGFza3NMb2FkaW5nIiwidGFza3MiLCJ0YXNrc0Vycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==