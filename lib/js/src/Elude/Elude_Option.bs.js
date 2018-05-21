'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");

function maybe(b, fn, opt) {
  return Belt_Option.mapWithDefault(opt, b, fn);
}

function foldl(fn, b, opt) {
  if (opt) {
    return Curry._2(fn, b, opt[0]);
  } else {
    return b;
  }
}

function alt(l, r) {
  if (l) {
    return l;
  } else {
    return r;
  }
}

function fromOption(v, opt) {
  return Belt_Option.getWithDefault(opt, v);
}

function map(fn, opt) {
  return Belt_Option.map(opt, fn);
}

function flatMap(fn, opt) {
  return Belt_Option.flatMap(opt, fn);
}

function ap(fn, opt) {
  if (fn) {
    return Belt_Option.map(opt, fn[0]);
  } else {
    return /* None */0;
  }
}

function map2(fn, a, b) {
  if (a && b) {
    return /* Some */[Curry._2(fn, a[0], b[0])];
  } else {
    return /* None */0;
  }
}

var $less$pipe$great = alt;

exports.maybe = maybe;
exports.foldl = foldl;
exports.alt = alt;
exports.$less$pipe$great = $less$pipe$great;
exports.fromOption = fromOption;
exports.map = map;
exports.flatMap = flatMap;
exports.ap = ap;
exports.map2 = map2;
/* No side effect */
