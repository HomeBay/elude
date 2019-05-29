module Exn = {
  exception PromiseFailure(string);
};

let pure = Js.Promise.resolve;
let reject = Js.Promise.reject;
let rejectStr = str => reject(Exn.PromiseFailure(str));
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
let fromOption = (errorMsg, opt) =>
  switch (opt) {
  | Some(v) => pure(v)
  | None => rejectStr(errorMsg)
  };

/**
 * Convert a `Result.t` to a `Promise.t`
 */
let fromResult = (errToExn, result) =>
  Relude.Result.fold(e => reject(errToExn(e)), pure, result);

/**
 * Convert a `result` with a string error to a `promise`
 */
let fromStringResult = v => fromResult(str => Exn.PromiseFailure(str), v);

/**
 * Perform a side effect with the result of a successful promise.
 */
let success = (fn: 'a => unit, prom) =>
  map(
    a => {
      fn(a);
      a;
    },
    prom,
  );

/**
 * Perform a side effect using the error from a failed promise.
 */
let failure = (fn: Js.Promise.error => unit, prom: Js.Promise.t('a)) =>
  Js.Promise.catch(
    err => {
      fn(err);
      prom;
    },
    prom,
  );

/**
 * Convert a failed promise into a successful promise of some time.
 */
let recover = (fn: Js.Promise.error => 'a, prom) =>
  Js.Promise.catch(err => pure(fn(err)), prom);

/**
 * Convert a failed promise into a new promise that may or may not succeed.
 */
let recoverWith = (fn: Js.Promise.error => Js.Promise.t('a), prom) =>
  Js.Promise.catch(fn, prom);

/**
 * Given a function from `'a => 'b` that can throw an exception, and a promise
 * of `'a`, flatMap into a promise of 'b, rejecting if the function throws.
 */
let tries = (fnExn, prom) =>
  flatMap(
    a =>
      try (pure(fnExn(a))) {
      | exn => reject(exn)
      },
    prom,
  );

let doInOrder = (go: 'a => Js.Promise.t('b), data) =>
  Relude.List.foldLeft(
    (acc, curr) =>
      flatMap(promises => map(v => [v, ...promises], go(curr)), acc),
    pure([]),
    data,
  );
