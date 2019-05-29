'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Relude_Option = require("relude/lib/js/src/Relude_Option.bs.js");

var maybe = Relude_Option.fold;

function foldl(fn, b, opt) {
  return Relude_Option.foldLeft(fn, b)(opt);
}

var alt = Relude_Option.alt;

var $less$pipe$great = Relude_Option.Infix[/* <|> */6];

var fromOption = Relude_Option.getOrElse;

var map = Relude_Option.map;

function flatMap(fn, opt) {
  return Curry._2(Relude_Option.flatMap, fn, opt);
}

var ap = Relude_Option.apply;

function map2(fn, a, b) {
  return Curry._3(Relude_Option.map2, fn, a, b);
}

var pure = Relude_Option.pure;

function toList(v) {
  return Curry._1(Relude_Option.toList, v);
}

var eq = Relude_Option.eqBy;

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
/* Relude_Option Not a pure module */
