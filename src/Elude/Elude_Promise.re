module Exn = {
  exception PromiseFailure(string);
};

let pure = Js.Promise.resolve;
let reject = Js.Promise.reject;
let rejectStr = (str) => reject(Exn.PromiseFailure(str));
let flatMap = Js.Promise.then_;

/**
 * Map the result of the provided promise to a new value given a fn `'a => 'b`.
 * In JavaScript, this looks like returning a value instead of a new promise
 * from a `.then(...)` function.
 */
let map = (fn, prom) => flatMap(v => pure(fn(v)), prom);

/**
 * Given an error message and an option, create a successful promise if the
 * option is `Some`, or a rejected promise if the option is `None`, failing with
 * the provided error message.
 */
let fromOption = (errorMsg, opt) => switch opt {
| Some(v) => pure(v);
| None => rejectStr(errorMsg);
};

/**
 * Given a function from `'a => 'b` that can throw an exception, and a promise
 * of `'a`, flatMap into a promise of 'b, rejecting if the function throws.
 */
let tries = (fnExn, prom) =>
  flatMap(a =>
    try (pure(fnExn(a))) {
    | exn => reject(exn)
    }, prom);

let doInOrder = (go: 'a => Js.Promise.t('b), data: list('a)) => {
  Elude_List.foldl((acc, curr) => {
    flatMap(promises => map(v => [v, ...promises], go(curr)), acc);
  }, pure([]), data);
};
