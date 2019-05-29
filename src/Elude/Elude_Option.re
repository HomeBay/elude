/**
 * If the provided option is `Some(a)`, convert `a` by applying the provided
 * function to it. If the provided option is `None`, return the fallback value.
 */
let maybe = (b, fn, opt) => Relude.Option.fold(b, fn, opt);

/**
 * Similar to `maybe`, but the provided function is given the provided fallback
 * value, in addition to the value from the `Some`.
 */
let foldl = (fn, b, opt) => Relude.Option.foldLeft(fn, b, opt);

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
let alt = (l, r) => Relude.Option.alt(l, r);

/**
 * Infix operator for `alt`. `None <|> Some(3) == Some(3)`
 */
let (<|>) = Relude.Option.Infix.(<|>);

/**
 * Gets a value of type `'a` by providing a fallback value in case the option is
 * `None`.
 */
let fromOption = (v, opt) => Relude.Option.getOrElse(v, opt);

/**
 * Apply the provided function to the inner value of the option if it is `Some`
 * or return None.
 */
let map = (fn, opt) => Relude.Option.map(fn, opt);

/**
 * Given a function that returns another option, apply it to the value of the
 * provided option if the option is Some. If the provided option is `None` or
 * the result of the function is `None`, this returns `None`, otherwise it
 * returns the `Some` value returned by the provided function.
 *
 * Some languages call this `bind`, `chain`, or `andThen`.
 */
let flatMap = (fn, opt) => Relude.Option.flatMap(fn, opt);

/**
 * Given a function wraped in an option, `map` the provided value if the given
 * function is `Some`, otherwise return `None`.
 */
let ap = (fn, opt) => Relude.Option.apply(fn, opt);

/**
 * Given two options, apply the provided function to the inner values if both
 * options are `Some`. If any option is `None`, return `None`.
 *
 * This function could be written in terms of `ap`, but making it special
 * provides cleaner JavaScript output.
 */
let map2 = (fn, a, b) => Relude.Option.map2(fn, a, b);

/**
 * Turn any value into an option (e.g. `pure(4) == Some(4)`)
 */
let pure = v => Relude.Option.pure(v);

/**
 * Returns an empty list if the provided value is `None` and a list with one
 * element if the value is `Some(...)`
 */
let toList = v => Relude.Option.toList(v);

/**
 * Compare two options by determining whether the values they hold are equal.
 *
 * e.g.
 *
 * `eq(Some(a), Some(b)) == true /* if innerEq(a, b) */`
 * `eq(None, None) == true`
 *
 * Any other combination is `false`
 */
let eq = (innerEq, a, b) => Relude.Option.eqBy(innerEq, a, b);
