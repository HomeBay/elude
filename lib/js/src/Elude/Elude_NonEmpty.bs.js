'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");

function singleton(x) {
  return /* NonEmpty */[
          x,
          /* [] */0
        ];
}

function fromList(l) {
  if (l) {
    return /* NonEmpty */[
            l[0],
            l[1]
          ];
  }
  
}

function toList(param) {
  return /* :: */[
          param[0],
          param[1]
        ];
}

function toArray(nel) {
  return Belt_List.toArray(toList(nel));
}

function head(param) {
  return param[0];
}

function tail(param) {
  return param[1];
}

function map(f, param) {
  return /* NonEmpty */[
          Curry._1(f, param[0]),
          Belt_List.map(param[1], f)
        ];
}

function foldl(f, init, data) {
  return Belt_List.reduce(toList(data), init, f);
}

exports.singleton = singleton;
exports.fromList = fromList;
exports.toList = toList;
exports.toArray = toArray;
exports.head = head;
exports.tail = tail;
exports.map = map;
exports.foldl = foldl;
/* No side effect */
