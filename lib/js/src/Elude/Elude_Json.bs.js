'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Elude_Array = require("./Elude_Array.bs.js");
var Elude_Result = require("./Elude_Result.bs.js");

function decode(err, decoder, v) {
  return Elude_Result.fromOption(err, Curry._1(decoder, v));
}

function decodeString(param) {
  return Elude_Result.fromOption("Expected JSON to be a String", Js_json.decodeString(param));
}

function decodeFloat(param) {
  return Elude_Result.fromOption("Expected JSON to be a Float", Js_json.decodeNumber(param));
}

function decodeObject(param) {
  return Elude_Result.fromOption("Expected JSON to be a Object", Js_json.decodeObject(param));
}

function decodeArray(param) {
  return Elude_Result.fromOption("Expected JSON to be an Array", Js_json.decodeArray(param));
}

function decodeArrayOfObject(v) {
  return Elude_Result.flatMap((function (param) {
                return Elude_Array.traverseResult(decodeObject, param);
              }), decodeArray(v));
}

exports.decode = decode;
exports.decodeString = decodeString;
exports.decodeFloat = decodeFloat;
exports.decodeObject = decodeObject;
exports.decodeArray = decodeArray;
exports.decodeArrayOfObject = decodeArrayOfObject;
/* No side effect */
