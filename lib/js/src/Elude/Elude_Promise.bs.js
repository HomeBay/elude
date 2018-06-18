'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Elude_List = require("./Elude_List.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var PromiseFailure = Caml_exceptions.create("Elude_Promise.Exn.PromiseFailure");

var Exn = /* module */[/* PromiseFailure */PromiseFailure];

function pure(prim) {
  return Promise.resolve(prim);
}

function reject(prim) {
  return Promise.reject(prim);
}

function rejectStr(str) {
  return Promise.reject([
              PromiseFailure,
              str
            ]);
}

function flatMap(prim, prim$1) {
  return prim$1.then(Curry.__1(prim));
}

function map(fn, prom) {
  return prom.then((function (v) {
                return Promise.resolve(Curry._1(fn, v));
              }));
}

function fromOption(errorMsg, opt) {
  if (opt) {
    return Promise.resolve(opt[0]);
  } else {
    return rejectStr(errorMsg);
  }
}

function success(fn, prom) {
  return map((function (a) {
                Curry._1(fn, a);
                return a;
              }), prom);
}

function failure(fn, prom) {
  return prom.then((function (err) {
                Curry._1(fn, err);
                return prom;
              }));
}

function recover(fn, prom) {
  return prom.catch((function (err) {
                return Promise.resolve(Curry._1(fn, err));
              }));
}

function recoverWith(fn, prom) {
  return prom.catch(Curry.__1(fn));
}

function tries(fnExn, prom) {
  return prom.then((function (a) {
                try {
                  return Promise.resolve(Curry._1(fnExn, a));
                }
                catch (raw_exn){
                  return Promise.reject(Js_exn.internalToOCamlException(raw_exn));
                }
              }));
}

function doInOrder(go, data) {
  return Elude_List.foldl((function (acc, curr) {
                return acc.then((function (promises) {
                              return map((function (v) {
                                            return /* :: */[
                                                    v,
                                                    promises
                                                  ];
                                          }), Curry._1(go, curr));
                            }));
              }), Promise.resolve(/* [] */0), data);
}

exports.Exn = Exn;
exports.pure = pure;
exports.reject = reject;
exports.rejectStr = rejectStr;
exports.flatMap = flatMap;
exports.map = map;
exports.fromOption = fromOption;
exports.success = success;
exports.failure = failure;
exports.recover = recover;
exports.recoverWith = recoverWith;
exports.tries = tries;
exports.doInOrder = doInOrder;
/* No side effect */
