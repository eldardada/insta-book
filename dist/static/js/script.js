/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/static/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/static/js/index.js":
/*!********************************!*\
  !*** ./app/static/js/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_some_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/some.js */ \"./app/static/js/modules/some.js\");\n// import 'core-js/features/promise';\n\nconsole.log(Object(_modules_some_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, 2, 3));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzL2luZGV4LmpzP2MwM2MiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImF2ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdFQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQWYiLCJmaWxlIjoiLi9hcHAvc3RhdGljL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL3Byb21pc2UnO1xuaW1wb3J0IGF2ZyBmcm9tICcuL21vZHVsZXMvc29tZS5qcyc7XG5cbmNvbnNvbGUubG9nKGF2ZygxLDIsMykpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/static/js/index.js\n");

/***/ }),

/***/ "./app/static/js/modules/some.js":
/*!***************************************!*\
  !*** ./app/static/js/modules/some.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar sum = function sum() {\n  var sum = 0;\n\n  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {\n    numbers[_key] = arguments[_key];\n  }\n\n  for (var _i = 0, _numbers = numbers; _i < _numbers.length; _i++) {\n    var num = _numbers[_i];\n    sum += num;\n  }\n\n  return sum;\n};\n\nvar avg = function avg() {\n  return sum.apply(void 0, arguments) / arguments.length;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (avg);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3RhdGljL2pzL21vZHVsZXMvc29tZS5qcz84YjJlIl0sIm5hbWVzIjpbInN1bSIsIm51bWJlcnMiLCJudW0iLCJhdmciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsSUFBSUEsR0FBRyxHQUFHLGVBQXFCO0FBQzNCLE1BQUlBLEdBQUcsR0FBRyxDQUFWOztBQUQyQixvQ0FBVEMsT0FBUztBQUFUQSxXQUFTO0FBQUE7O0FBRzNCLDhCQUFlQSxPQUFmLDhCQUF3QjtBQUFwQixRQUFJQyxHQUFHLGVBQVA7QUFDQUYsT0FBRyxJQUFJRSxHQUFQO0FBQ0g7O0FBRUQsU0FBT0YsR0FBUDtBQUNILENBUkQ7O0FBVUEsSUFBSUcsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBcUI7QUFDM0IsU0FBT0gsR0FBRyxNQUFILHNCQUFrQixVQUFRSSxNQUFqQztBQUNILENBRkQ7O0FBSWVELGtFQUFmIiwiZmlsZSI6Ii4vYXBwL3N0YXRpYy9qcy9tb2R1bGVzL3NvbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc3VtID0gZnVuY3Rpb24oLi4ubnVtYmVycykge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIFxuICAgIGZvcihsZXQgbnVtIG9mIG51bWJlcnMpIHtcbiAgICAgICAgc3VtICs9IG51bTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VtO1xufVxuXG5sZXQgYXZnID0gZnVuY3Rpb24oLi4ubnVtYmVycykge1xuICAgIHJldHVybiBzdW0oLi4ubnVtYmVycykgLyBudW1iZXJzLmxlbmd0aDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXZnOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/static/js/modules/some.js\n");

/***/ })

/******/ });