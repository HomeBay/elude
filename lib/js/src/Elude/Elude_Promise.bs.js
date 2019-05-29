'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Relude_List = require("relude/lib/js/src/Relude_List.bs.js");
var Relude_Result = require("relude/lib/js/src/Relude_Result.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");

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
  if (opt !== undefined) {
    return Promise.resolve(Caml_option.valFromOption(opt));
  } else {
    return rejectStr(errorMsg);
  }
}

function fromResult(errToExn, result) {
  return Relude_Result.fold((function (e) {
                return Promise.reject(Curry._1(errToExn, e));
              }), pure, result);
}

function fromStringResult(v) {
  return fromResult((function (str) {
                return [
                        PromiseFailure,
                        str
                      ];
              }), v);
}

function success(fn, prom) {
  return map((function (a) {
                Curry._1(fn, a);
                return a;
              }), prom);
}

function failure(fn, prom) {
  return prom.catch((function (err) {
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
                  return Promise.reject(Caml_js_exceptions.internalToOCamlException(raw_exn));
                }
              }));
}

function doInOrder(go, data) {
  return Relude_List.foldLeft((function (acc, curr) {
                  return acc.then((function (promises) {
                                return map((function (v) {
                                              return /* :: */[
                                                      v,
                                                      promises
                                                    ];
                                            }), Curry._1(go, curr));
                              }));
                }), Promise.resolve(/* [] */0))(data);
}

exports.Exn = Exn;
exports.pure = pure;
exports.reject = reject;
exports.rejectStr = rejectStr;
exports.flatMap = flatMap;
exports.map = map;
exports.fromOption = fromOption;
exports.fromResult = fromResult;
exports.fromStringResult = fromStringResult;
exports.success = success;
exports.failure = failure;
exports.recover = recover;
exports.recoverWith = recoverWith;
exports.tries = tries;
exports.doInOrder = doInOrder;
/* Relude_List Not a pure module */
