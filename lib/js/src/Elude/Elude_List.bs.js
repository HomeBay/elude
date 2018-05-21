'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");

function any(pred, lst) {
  return Belt_List.some(lst, pred);
}

function map(fn, lst) {
  return Belt_List.map(lst, fn);
}

function foldl(fn, init, lst) {
  return Belt_List.reduce(lst, init, fn);
}

function filter(pred, lst) {
  return Belt_List.keep(lst, pred);
}

function mapOption(fn, lst) {
  return Belt_List.reverse(Belt_List.reduce(lst, /* [] */0, (function (acc, curr) {
                    var match = Curry._1(fn, curr);
                    if (match) {
                      return /* :: */[
                              match[0],
                              acc
                            ];
                    } else {
                      return acc;
                    }
                  })));
}

function $$null(lst) {
  if (lst) {
    return false;
  } else {
    return true;
  }
}

function elem(eq, el, lst) {
  var pred = Curry._1(eq, el);
  return Belt_List.some(lst, pred);
}

function removeAll(eq, el, lst) {
  return Belt_List.keep(lst, (function (v) {
                return !Curry._2(eq, v, el);
              }));
}

function removeFirst(eq, el, lst) {
  if (lst) {
    var xs = lst[1];
    var x = lst[0];
    if (Curry._2(eq, x, el)) {
      return xs;
    } else {
      return /* :: */[
              x,
              removeFirst(eq, el, xs)
            ];
    }
  } else {
    return /* [] */0;
  }
}

var reverse = Belt_List.reverse;

exports.any = any;
exports.map = map;
exports.foldl = foldl;
exports.filter = filter;
exports.reverse = reverse;
exports.mapOption = mapOption;
exports.$$null = $$null;
exports.elem = elem;
exports.removeAll = removeAll;
exports.removeFirst = removeFirst;
/* No side effect */
