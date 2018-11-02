/**
 * Determine if any item satisfies the predicate.
 */
let any = (pred, lst) => Belt.List.some(lst, pred);

/**
 * Transform each element in a list by applying the provided function to it.
 */
let map = (fn, lst) => Belt.List.map(lst, fn);

/**
 * Accumulate the items of a list.
 */
let foldl = (fn, init, lst) => Belt.List.reduce(lst, init, fn);

let filter = (pred, lst) => Belt.List.keep(lst, pred);

/**
 * Reverse a list.
 */
let reverse = Belt.List.reverse;

/**
 * Given a function from `'a => option('b)`, transform a `list('a)` to a
 * `list('b)`, filtering out all of the `None` values.
 */
let mapOption = (fn: 'a => option('b), lst) =>
  foldl(
    (acc, curr) =>
      switch (fn(curr)) {
      | Some(b) => [b, ...acc]
      | None => acc
      },
    [],
    lst,
  )
  |> reverse;

/**
 * Check if list is empty, running time O(1)
 */
let null = lst : bool =>
  switch (lst) {
  | [] => true
  | _ => false
  };

/**
 * Given a comparison function for 'a, determine if any element matches the
 * provided element.
 */
let elem = (eq, el, lst) => any(eq(el), lst);

/**
 * Return the first value in the list that satisfies the given predicate.
 */
let find = (pred, lst) =>
  foldl(
    (acc, curr) =>
      switch (acc) {
      | None when pred(curr) => Some(curr)
      | _ => acc
      },
    None,
    lst,
  );

/**
 * Remove all elements from a list that satisfy a predicate (inverse of filter)
 */
let removeAll = (eq, el, lst) => filter(v => ! eq(v, el), lst);

/**
 * Remove the first element of a list that satisfies a predicate
 */
let rec removeFirst = (eq, el, lst) =>
  switch (lst) {
  | [] => []
  | [x, ...xs] when eq(x, el) => xs
  | [x, ...xs] => [x, ...removeFirst(eq, el, xs)]
  };
