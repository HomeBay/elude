type t('a) =
  | NonEmpty('a, list('a));

let singleton = (x: 'a) => NonEmpty(x, []);
let fromList = (l: list('a)): option(t('a)) => switch l {
| [] => None
| [x, ...xs] => Some(NonEmpty(x, xs))
};
let toList = (NonEmpty(x, xs)) => [x, ...xs];
let toArray = nel => Belt.List.toArray(toList(nel));

let head = (NonEmpty(x, _)) => x;
let tail = (NonEmpty(_, xs)) => xs;

let map = (f: 'a => 'b, (NonEmpty(x, xs))) =>
  NonEmpty(f(x), Belt.List.map(xs, f));

let foldl = (f: ('b => 'a => 'b), init: 'b, data: t('a)): 'b =>
  Belt.List.reduce(toList(data), init, f);