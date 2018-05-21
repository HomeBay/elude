/**
 * If the provided option is `Some(a)`, convert `a` by applying the provided
 * function to it. If the provided option is `None`, return the fallback value.
 */
let maybe = (b, fn, opt) =>
  Belt.Option.mapWithDefault(opt, b, fn);

/**
 * Similar to `maybe`, but the provided function is given the provided fallback
 * value, in addition to the value from the `Some`.
 */
let foldl = (fn, b, opt) => switch opt {
| None => b
| Some(x) => fn(b, x)
};

/**
 * Given two `option('a)` values, prefer the first if it is `Some` or the second
 * if the first is `None`.
 *
 * ```
 * alt(None, None) == None
 * alt(Some(1), Some(2)) == Some(1)
 * alt(None, Some(2)) == Some(2)
 * alt(Some(1), None) == Some(1)
 * ```
 */
let alt = (l, r) => switch l {
| None => r
| _    => l
};

/**
 * Infix operator for `alt`. `None <|> Some(3) == Some(3)`
 */
let (<|>) = alt;

/**
 * Gets a value of type `'a` by providing a fallback value in case the option is
 * `None`.
 */
let fromOption = (v, opt) =>
  Belt.Option.getWithDefault(opt, v);

/**
 * Apply the provided function to the inner value of the option if it is `Some`
 * or return None.
 */
let map = (fn, opt) => Belt.Option.map(opt, fn);

/**
 * Given a function that returns another option, apply it to the value of the
 * provided option if the option is Some. If the provided option is `None` or
 * the result of the function is `None`, this returns `None`, otherwise it
 * returns the `Some` value returned by the provided function.
 *
 * Some languages call this `bind`, `chain`, or `andThen`.
 */
let flatMap = (fn, opt) => Belt.Option.flatMap(opt, fn);

/**
 * Given a function wraped in an option, `map` the provided value if the given
 * function is `Some`, otherwise return `None`.
 */
let ap = (fn: option('a => 'b), opt: option('a)): option('b) => switch fn {
| Some(f) => map(f, opt)
| None => None
};

/**
 * Given two options, apply the provided function to the inner values if both
 * options are `Some`. If any option is `None`, return `None`.
 *
 * This function could be written in terms of `ap`, but making it special
 * provides cleaner JavaScript output.
 */
let map2 = (fn, a, b) => switch (a, b) {
| (Some(x), Some(y)) => Some(fn(x, y))
| _ => None
};

