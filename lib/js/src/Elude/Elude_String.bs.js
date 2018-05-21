'use strict';

var $$String = require("bs-platform/lib/js/string.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");

function replaceAll(toReplace, replaceWith, src) {
  return $$String.concat(replaceWith, Belt_List.fromArray(src.split(toReplace)));
}

function remove(toRemove, src) {
  return replaceAll(toRemove, "", src);
}

exports.replaceAll = replaceAll;
exports.remove = remove;
/* No side effect */
