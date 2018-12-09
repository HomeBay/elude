/**
 * Determine if any item satisfies the predicate.
 */
let any = (pred, lst) => Relude.List.any(pred, lst);

/**
 * Transform each element in a list by applying the provided function to it.
 */
let map = (fn, lst) => Relude.List.map(fn, lst);

/**
 * Accumulate the items of a list.
 */
let foldl = (fn, init, lst) => Relude.List.foldLeft(fn, init, lst);

let filter = (pred, lst) => Relude.List.filter(pred, lst);

/**
 * Reverse a list.
 */
let reverse = Relude.List.reverse;

/**
 * Given a function from `'a => option('b)`, transform a `list('a)` to a
 * `list('b)`, filtering out all of the `None` values.
 */
let mapOption = (fn, lst) => Relude.List.mapOption(fn, lst);

/**
 * Check if list is empty, running time O(1)
 */
let null = lst => Relude.List.isEmpty(lst);

/**
 * Given a comparison function for 'a, determine if any element matches the
 * provided element.
 */
let elem = (eq, el, lst) => Relude.List.containsF(eq, el, lst);

/**
 * Return the first value in the list that satisfies the given predicate.
 */
let find = (pred, lst) => Relude.List.find(pred, lst);

/**
 * Remove the first element of a list that satisfies a predicate
 */
let removeFirst = (eq, el, lst) => Relude.List.removeF(eq, el, lst);

/**
 * Remove all elements from a list that satisfy a predicate (inverse of filter)
 */
let removeAll = (eq, el, lst) => Relude.List.removeEachF(eq, el, lst);
