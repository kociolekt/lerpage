(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lerpage;
function lerpage(steps, a, b) {
  var retval = [],
      count = steps - 1;

  for (var i = 0; i <= count; i++) {
    retval.push(a + i / count * (b - a));
  }

  return retval;
}

},{}],2:[function(require,module,exports){
'use strict';

var _index = require('./es5/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('lerpage(11, 0, 10)');
console.log((0, _index2.default)(11, 0, 10)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('lerpage(5, 0, 1)');
console.log((0, _index2.default)(5, 0, 1)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

},{"./es5/index":1}]},{},[2]);
