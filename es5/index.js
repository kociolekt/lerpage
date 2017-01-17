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