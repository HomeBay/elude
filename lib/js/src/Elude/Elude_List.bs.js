'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Relude_List = require("relude/lib/js/src/Relude_List.bs.js");

function any(pred, lst) {
  return Curry._2(Relude_List.any, pred, lst);
}

function map(fn, lst) {
  return Relude_List.map(fn)(lst);
}

function foldl(fn, init, lst) {
  return Relude_List.foldLeft(fn, init)(lst);
}

var filter = Relude_List.filter;

var mapOption = Relude_List.mapOption;

var $$null = Relude_List.isEmpty;

function elem(eq, el, lst) {
  return Curry._3(Relude_List.containsF, eq, el, lst);
}

function find(pred, lst) {
  return Curry._2(Relude_List.find, pred, lst);
}

var removeFirst = Relude_List.removeF;

var removeAll = Relude_List.removeEachF;

var reverse = Relude_List.reverse;

exports.any = any;
exports.map = map;
exports.foldl = foldl;
exports.filter = filter;
exports.reverse = reverse;
exports.mapOption = mapOption;
exports.$$null = $$null;
exports.elem = elem;
exports.find = find;
exports.removeFirst = removeFirst;
exports.removeAll = removeAll;
/* Relude_List Not a pure module */
