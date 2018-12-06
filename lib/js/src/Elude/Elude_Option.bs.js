'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Option$Relude = require("relude/lib/js/src/Option.bs.js");

var maybe = Option$Relude.fold;

function foldl(fn, b, opt) {
  return Option$Relude.foldLeft(fn, b)(opt);
}

var alt = Option$Relude.alt;

function fromOption(v, opt) {
  return Option$Relude.getOrElse(v)(opt);
}

var map = Option$Relude.map;

var flatMap = Option$Relude.flatMap;

var ap = Option$Relude.apply;

var map2 = Option$Relude.map2;

var pure = Option$Relude.pure;

var toList = Option$Relude.toList;

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
exports.pure = pure;
exports.toList = toList;
exports.eq = eq;
/* Option-Relude Not a pure module */
