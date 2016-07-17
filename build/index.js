"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

require("babel-polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('==='); // babel index.js -o a.js
// bable index.js --out-file a.js

// babel src --out-dir build
// babel src -d build

var sum = function sum(a, b) {
  return a + b;
};
var x = sum(3, 2);
console.log(x);

(0, _assign2.default)();