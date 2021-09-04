"use strict";
self["webpackHotUpdate_N_E"]("pages/goals/register",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ29hbHMvcmVnaXN0ZXIuNzA1YWEwMmY3ZDM3NDBiNGQ5ZDIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLE9BQU87QUFBQSxxVEFBRyxpQkFBT0MsR0FBUCxFQUFZQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0lDLEtBQUssQ0FBQ0YsR0FBRCxFQUFNO0FBQzNCRyxjQUFBQSxNQUFNLEVBQUUsS0FEbUI7QUFFM0JDLGNBQUFBLE9BQU8sRUFBRSxJQUFJQyxPQUFKLENBQVk7QUFDbkJDLGdCQUFBQSxNQUFNLEVBQUUsa0JBRFc7QUFFbkIsZ0NBQWdCLG1DQUZHO0FBR25CQyxnQkFBQUEsYUFBYSxFQUFFLFdBQVdOO0FBSFAsZUFBWjtBQUZrQixhQUFOLENBRFQ7O0FBQUE7QUFDUk8sWUFBQUEsR0FEUTs7QUFBQSxnQkFVVEEsR0FBRyxDQUFDQyxFQVZLO0FBQUE7QUFBQTtBQUFBOztBQVdOQyxZQUFBQSxLQVhNLEdBV0UsSUFBSUMsS0FBSixDQUFVLDBDQUFWLENBWEY7QUFBQTtBQUFBLG1CQVlPSCxHQUFHLENBQUNJLElBQUosRUFaUDs7QUFBQTtBQVlaRixZQUFBQSxLQUFLLENBQUNHLElBWk07QUFhWkgsWUFBQUEsS0FBSyxDQUFDSSxNQUFOLEdBQWVOLEdBQUcsQ0FBQ00sTUFBbkI7QUFiWSxrQkFjTkosS0FkTTs7QUFBQTtBQUFBLDZDQWlCUEYsR0FBRyxDQUFDSSxJQUFKLEVBakJPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVBiLE9BQU87QUFBQTtBQUFBO0FBQUEsR0FBYjs7QUFvQk8sU0FBU2dCLE9BQVQsR0FBbUI7QUFBQTs7QUFDeEIsTUFBTUMsU0FBUyxHQUFHLEVBQ2hCLFNBQWlDQyxZQUFZLENBQUNDLE9BQWIsQ0FB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YixDQUFxQixPQUFyQixLQUFpQyxNQURsRCxDQUFsQjs7QUFENkMsa0JBSXJCcEIsNENBQU0sQ0FDNUIsQ0FBQ2tCLFNBQUQsSUFBY1EsU0FBZCxHQUNJLENBQ0UscUNBQXFDQSxTQUFyQyxHQUFpRCxZQURuRCxFQUVFUCxZQUFZLENBQUNoQixLQUZmLENBREosR0FLSSxJQU53QixFQU81QkYsT0FQNEIsQ0FKZTtBQUFBLE1BSXJDb0IsSUFKcUMsYUFJckNBLElBSnFDO0FBQUEsTUFJL0JULEtBSitCLGFBSS9CQSxLQUorQjs7QUFjN0MsTUFBTVUsT0FBTyxHQUFHLENBQUNELElBQUQsSUFBUyxDQUFDVCxLQUExQjtBQUVBLFNBQU87QUFDTGdDLElBQUFBLFlBQVksRUFBRXRCLE9BRFQ7QUFFTEosSUFBQUEsU0FBUyxFQUFUQSxTQUZLO0FBR0wyQixJQUFBQSxLQUFLLEVBQUV4QixJQUhGO0FBSUx5QixJQUFBQSxVQUFVLEVBQUVsQztBQUpQLEdBQVA7QUFNRDs7S0F0QmUrQjtVQUlVM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS91c2UtZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsLCB0b2tlbikgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBcIlRva2VuIFwiICsgdG9rZW4sXHJcbiAgICB9KSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCFyZXMub2spIHtcclxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFwiQW4gZXJyb3Igb2N1cnJlZCB3aGlsZSBmZXRjaGluZyB0aGUgZGF0YVwiKTtcclxuICAgIGVycm9yLmluZm8gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgZXJyb3Iuc3RhdHVzID0gcmVzLnN0YXR1cztcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVXNlcigpIHtcclxuICBjb25zdCBsb2dnZWRPdXQgPSAhKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpICE9IFwibnVsbFwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgIWxvZ2dlZE91dFxyXG4gICAgICA/IFtcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9yZXN0LWF1dGgvdXNlci9cIiwgbG9jYWxTdG9yYWdlLnRva2VuXVxyXG4gICAgICA6IG51bGwsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuICAvL2NvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUiggKCk9PihbXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvcmVzdC1hdXRoL3VzZXIvXCIsIGxvY2FsU3RvcmFnZS50b2tlbl0pLCBmZXRjaGVyKTtcclxuXHJcbiAgY29uc3QgbG9hZGluZyA9ICFkYXRhICYmICFlcnJvciAmJiAhbG9nZ2VkT3V0O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbG9hZGluZyxcclxuICAgIGxvZ2dlZE91dCxcclxuICAgIHVzZXI6IGRhdGEsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGl2ZUl0ZXJhdGlvbigpIHtcclxuICBjb25zdCBsb2dnZWRPdXQgPSAhKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpICE9IFwibnVsbFwiXHJcbiAgKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAhbG9nZ2VkT3V0XHJcbiAgICAgID8gW1wiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2l0ZXJhdGlvbi9hY3RpdmUvXCIsIGxvY2FsU3RvcmFnZS50b2tlbl1cclxuICAgICAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGxvYWRpbmcgPSAhZGF0YSAmJiAhZXJyb3I7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpdGVyYXRpb25Mb2FkaW5nOiBsb2FkaW5nLFxyXG4gICAgbG9nZ2VkT3V0LFxyXG4gICAgaXRlcmF0aW9uOiBkYXRhLFxyXG4gICAgaXRlcmF0aW9uRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHb2FscygpIHtcclxuICBjb25zdCBsb2dnZWRPdXQgPSAhKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpICE9IFwibnVsbFwiXHJcbiAgKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAhbG9nZ2VkT3V0ID8gW1wiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2dvYWwvXCIsIGxvY2FsU3RvcmFnZS50b2tlbl0gOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGxvYWRpbmcgPSAhZGF0YSAmJiAhZXJyb3I7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBsb2FkaW5nLFxyXG4gICAgbG9nZ2VkT3V0LFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlR29hbChpZCkge1xyXG4gIGNvbnN0IGxvZ2dlZE91dCA9ICEoXHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikgIT0gXCJudWxsXCJcclxuICApO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICFsb2dnZWRPdXQgJiYgaWRcclxuICAgICAgPyBbXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvZ29hbC9cIiArIGlkLCBsb2NhbFN0b3JhZ2UudG9rZW5dXHJcbiAgICAgIDogbnVsbCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG5cclxuICBjb25zdCBsb2FkaW5nID0gIWRhdGEgJiYgIWVycm9yO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbG9hZGluZyxcclxuICAgIGxvZ2dlZE91dCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU5lZWRzKCkge1xyXG4gIGNvbnN0IGxvZ2dlZE91dCA9ICEoXHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikgIT0gXCJudWxsXCJcclxuICApO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICFsb2dnZWRPdXRcclxuICAgICAgPyBbXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbmVlZC9cIiwgbG9jYWxTdG9yYWdlLnRva2VuXVxyXG4gICAgICA6IG51bGwsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbG9hZGluZyA9ICFkYXRhICYmICFlcnJvciAmJiAhbG9nZ2VkT3V0O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmVlZHNMb2FkaW5nIDogbG9hZGluZyxcclxuICAgIG5lZWRzTG9nZ2VkT3V0OiBsb2dnZWRPdXQsXHJcbiAgICBuZWVkczogZGF0YSxcclxuICAgIG5lZWRzRXJyb3IgOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RlcHMoZ29hbCkge1xyXG4gIGNvbnN0IGxvZ2dlZE91dCA9ICEoXHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikgIT0gXCJudWxsXCJcclxuICApO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICFsb2dnZWRPdXQgJiYgZ29hbFxyXG4gICAgICA/IFtcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9cIiArIGdvYWwgKyBcIi9zdGVwcy9cIiwgbG9jYWxTdG9yYWdlLnRva2VuXVxyXG4gICAgICA6IG51bGwsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbG9hZGluZyA9ICFkYXRhICYmICFlcnJvcjtcclxuICAzO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbG9hZGluZyxcclxuICAgIGxvZ2dlZE91dCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0ZXAoaWQpIHtcclxuICBjb25zdCBsb2dnZWRPdXQgPSAhKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpICE9IFwibnVsbFwiXHJcbiAgKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAhbG9nZ2VkT3V0ICYmIGlkXHJcbiAgICAgID8gW1wiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2dvYWwvXCIgKyBpZCwgbG9jYWxTdG9yYWdlLnRva2VuXVxyXG4gICAgICA6IG51bGwsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbG9hZGluZyA9ICFkYXRhICYmICFlcnJvcjtcclxuICAzO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbG9hZGluZyxcclxuICAgIGxvZ2dlZE91dCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhc2tzKHN0ZXApIHtcclxuICBjb25zdCBsb2dnZWRPdXQgPSAhKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpICE9IFwibnVsbFwiXHJcbiAgKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBtdXRhdGUgfSA9IHVzZVNXUihcclxuICAgICFsb2dnZWRPdXQgJiYgc3RlcFxyXG4gICAgICA/IFtcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9cIiArIHN0ZXAgKyBcIi9kZWxpdmVyeS9cIiwgbG9jYWxTdG9yYWdlLnRva2VuXVxyXG4gICAgICA6IG51bGwsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbG9hZGluZyA9ICFkYXRhICYmICFlcnJvcjtcclxuICAzO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbG9hZGluZyxcclxuICAgIGxvZ2dlZE91dCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBtdXRhdGUsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhc2soaWQpIHtcclxuICBjb25zdCBsb2dnZWRPdXQgPSAhKFxyXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpICE9IFwibnVsbFwiXHJcbiAgKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAhbG9nZ2VkT3V0ICYmIGlkXHJcbiAgICAgID8gW1wiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2RlbGl2ZXJ5L1wiICsgaWQsIGxvY2FsU3RvcmFnZS50b2tlbl1cclxuICAgICAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGxvYWRpbmcgPSAhZGF0YSAmJiAhZXJyb3I7XHJcbiAgMztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICBsb2dnZWRPdXQsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUYXNrc0J5SXRlcmF0aW9uKGl0ZXJhdGlvbikge1xyXG4gIGNvbnN0IGxvZ2dlZE91dCA9ICEoXHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikgIT0gXCJudWxsXCJcclxuICApO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICFsb2dnZWRPdXQgJiYgaXRlcmF0aW9uXHJcbiAgICAgID8gW1xyXG4gICAgICAgICAgXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvaXRlcmF0aW9uL1wiICsgaXRlcmF0aW9uICsgXCIvZGVsaXZlcnkvXCIsXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UudG9rZW4sXHJcbiAgICAgICAgXVxyXG4gICAgICA6IG51bGwsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbG9hZGluZyA9ICFkYXRhICYmICFlcnJvcjtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRhc2tzTG9hZGluZzogbG9hZGluZyxcclxuICAgIGxvZ2dlZE91dCxcclxuICAgIHRhc2tzOiBkYXRhLFxyXG4gICAgdGFza3NFcnJvcjogZXJyb3JcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJmZXRjaGVyIiwidXJsIiwidG9rZW4iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsInJlcyIsIm9rIiwiZXJyb3IiLCJFcnJvciIsImpzb24iLCJpbmZvIiwic3RhdHVzIiwidXNlVXNlciIsImxvZ2dlZE91dCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkYXRhIiwibG9hZGluZyIsInVzZXIiLCJ1c2VBY3RpdmVJdGVyYXRpb24iLCJpdGVyYXRpb25Mb2FkaW5nIiwiaXRlcmF0aW9uIiwiaXRlcmF0aW9uRXJyb3IiLCJ1c2VHb2FscyIsInVzZUdvYWwiLCJpZCIsInVzZU5lZWRzIiwibmVlZHNMb2FkaW5nIiwibmVlZHNMb2dnZWRPdXQiLCJuZWVkcyIsIm5lZWRzRXJyb3IiLCJ1c2VTdGVwcyIsImdvYWwiLCJ1c2VTdGVwIiwidXNlVGFza3MiLCJzdGVwIiwibXV0YXRlIiwidXNlVGFzayIsInVzZVRhc2tzQnlJdGVyYXRpb24iLCJ0YXNrc0xvYWRpbmciLCJ0YXNrcyIsInRhc2tzRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9