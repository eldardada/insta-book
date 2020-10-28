"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var sum = function sum() {
  var sum = 0;

  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  for (var _i = 0, _numbers = numbers; _i < _numbers.length; _i++) {
    var num = _numbers[_i];
    sum += num;
  }

  return sum;
};

var avg = function avg() {
  return sum.apply(void 0, arguments) / arguments.length;
};

var _default = avg;
exports["default"] = _default;