'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

function fromBelt(v) {
  if (v.tag) {
    return /* Err */Block.__(0, [v[0]]);
  } else {
    return /* Ok */Block.__(1, [v[0]]);
  }
}

function toBelt(v) {
  if (v.tag) {
    return /* Ok */Block.__(0, [v[0]]);
  } else {
    return /* Error */Block.__(1, [v[0]]);
  }
}

function pure(v) {
  return /* Ok */Block.__(1, [v]);
}

function mapOk(fn, r) {
  if (r.tag) {
    return /* Ok */Block.__(1, [Curry._1(fn, r[0])]);
  } else {
    return /* Err */Block.__(0, [r[0]]);
  }
}

function mapErr(fn, r) {
  if (r.tag) {
    return /* Ok */Block.__(1, [r[0]]);
  } else {
    return /* Err */Block.__(0, [Curry._1(fn, r[0])]);
  }
}

function ap(fn, either) {
  if (either.tag) {
    var v = either[0];
    return mapOk((function (f) {
                  return Curry._1(f, v);
                }), fn);
  } else {
    return /* Err */Block.__(0, [either[0]]);
  }
}

function flatMap(fn, r) {
  if (r.tag) {
    return Curry._1(fn, r[0]);
  } else {
    return /* Err */Block.__(0, [r[0]]);
  }
}

function toOption(r) {
  if (r.tag) {
    return Js_primitive.some(r[0]);
  }
  
}

function fromOption(err, opt) {
  if (opt !== undefined) {
    return /* Ok */Block.__(1, [Js_primitive.valFromOption(opt)]);
  } else {
    return /* Err */Block.__(0, [err]);
  }
}

var map = mapOk;

exports.fromBelt = fromBelt;
exports.toBelt = toBelt;
exports.pure = pure;
exports.mapOk = mapOk;
exports.mapErr = mapErr;
exports.map = map;
exports.ap = ap;
exports.flatMap = flatMap;
exports.toOption = toOption;
exports.fromOption = fromOption;
/* No side effect */
