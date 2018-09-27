'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Elude_Option = require("./Elude_Option.bs.js");
var Elude_Result = require("./Elude_Result.bs.js");

var empty = /* array */[];

function pure(v) {
  return /* array */[v];
}

function cons(x, xs) {
  return Belt_Array.concat(/* array */[x], xs);
}

function map(fn, arr) {
  return Belt_Array.map(arr, fn);
}

function foldl(fn, init, arr) {
  return Belt_Array.reduce(arr, init, fn);
}

function traverseOption(fn, arr) {
  var folder = function (acc, curr) {
    return Elude_Option.ap(Elude_Option.ap(Elude_Option.pure(cons), Curry._1(fn, curr)), acc);
  };
  var init = Elude_Option.pure(empty);
  return Belt_Array.reduce(arr, init, folder);
}

function traverseResult(fn, arr) {
  var folder = function (acc, curr) {
    return Elude_Result.ap(Elude_Result.ap(Elude_Result.pure(cons), Curry._1(fn, curr)), acc);
  };
  var init = Elude_Result.pure(empty);
  return Belt_Array.reduce(arr, init, folder);
}

function sequenceOption(v) {
  return traverseOption((function (x) {
                return x;
              }), v);
}

function sequenceResult(v) {
  return traverseResult((function (x) {
                return x;
              }), v);
}

var append = Belt_Array.concat;

exports.empty = empty;
exports.pure = pure;
exports.append = append;
exports.cons = cons;
exports.map = map;
exports.foldl = foldl;
exports.traverseOption = traverseOption;
exports.traverseResult = traverseResult;
exports.sequenceOption = sequenceOption;
exports.sequenceResult = sequenceResult;
/* No side effect */
