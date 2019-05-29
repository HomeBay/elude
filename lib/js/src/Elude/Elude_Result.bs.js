'use strict';

var Relude_Result = require("relude/lib/js/src/Relude_Result.bs.js");

var pure = Relude_Result.pure;

var mapOk = Relude_Result.map;

var map = Relude_Result.map;

var mapErr = Relude_Result.mapError;

var ap = Relude_Result.apply;

var flatMap = Relude_Result.flatMap;

var toOption = Relude_Result.getOk;

var fromOption = Relude_Result.fromOption;

exports.pure = pure;
exports.mapOk = mapOk;
exports.map = map;
exports.mapErr = mapErr;
exports.ap = ap;
exports.flatMap = flatMap;
exports.toOption = toOption;
exports.fromOption = fromOption;
/* Relude_Result Not a pure module */
