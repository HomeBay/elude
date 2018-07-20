'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

function maybe(b, fn, opt) {
  return Belt_Option.mapWithDefault(opt, b, fn);
}

function foldl(fn, b, opt) {
  if (opt !== undefined) {
    return Curry._2(fn, b, Js_primitive.valFromOption(opt));
  } else {
    return b;
  }
}

function alt(l, r) {
  if (l !== undefined) {
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
  if (fn !== undefined) {
    return Belt_Option.map(opt, fn);
  }
  
}

function map2(fn, a, b) {
  if (a !== undefined && b !== undefined) {
    return Js_primitive.some(Curry._2(fn, Js_primitive.valFromOption(a), Js_primitive.valFromOption(b)));
  }
  
}

function toList(v) {
  if (v !== undefined) {
    return /* :: */[
            Js_primitive.valFromOption(v),
            /* [] */0
          ];
  } else {
    return /* [] */0;
  }
}

function eq(innerEq, a, b) {
  if (a !== undefined) {
    if (b !== undefined) {
      return Curry._2(innerEq, Js_primitive.valFromOption(a), Js_primitive.valFromOption(b));
    } else {
      return false;
    }
  } else {
    return b === undefined;
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
exports.toList = toList;
exports.eq = eq;
/* No side effect */
