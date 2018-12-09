'use strict';

var Relude_Option = require("relude/lib/js/src/Relude_Option.bs.js");

var maybe = Relude_Option.fold;

function foldl(fn, b, opt) {
  return Relude_Option.foldLeft(fn, b)(opt);
}

var alt = Relude_Option.alt;

var $less$pipe$great = Relude_Option.Infix[/* <|> */1];

function fromOption(v, opt) {
  return Relude_Option.getOrElse(v)(opt);
}

var map = Relude_Option.map;

var flatMap = Relude_Option.flatMap;

var ap = Relude_Option.apply;

var map2 = Relude_Option.map2;

var pure = Relude_Option.pure;

var toList = Relude_Option.toList;

var eq = Relude_Option.eqF;

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
