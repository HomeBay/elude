'use strict';

var Relude_Array = require("relude/lib/js/src/Relude_Array.bs.js");
var Relude_Extensions_Array = require("relude/lib/js/src/extensions/Relude_Extensions_Array.bs.js");

var traverseOption = Relude_Extensions_Array.$$Option[/* traverse */6];

var traverseResult = Relude_Extensions_Array.Result[/* traverse */0];

var sequenceOption = Relude_Extensions_Array.$$Option[/* sequence */7];

var sequenceResult = Relude_Extensions_Array.Result[/* sequence */1];

var empty = Relude_Array.empty;

var pure = Relude_Array.pure;

var append = Relude_Array.concat;

var cons = Relude_Array.cons;

var map = Relude_Array.map;

var foldl = Relude_Array.foldLeft;

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
/* Relude_Array Not a pure module */
