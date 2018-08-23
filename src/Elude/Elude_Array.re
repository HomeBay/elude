let empty = [||];
let pure = v => [|v|];
let append = Belt.Array.concat;
let cons = (x, xs) => append(pure(x), xs);
let map = (fn, arr) => Belt.Array.map(arr, fn);
let foldl = (fn, init, arr) => Belt.Array.reduce(arr, init, fn);

let traverseOption = (fn, arr) => {
  let ap = Elude_Option.ap;
  let pure = Elude_Option.pure;
  let folder = (acc, curr) => ap(ap(pure(cons), fn(curr)), acc);
  foldl(folder, pure(empty), arr);
};

let traverseResult = (fn, arr) => {
  let ap = Elude_Result.ap;
  let pure = Elude_Result.pure;
  let folder = (acc, curr) => ap(ap(pure(cons), fn(curr)), acc);
  foldl(folder, pure(empty), arr);
};

let sequenceOption(v) = traverseOption(x => x, v);
let sequenceResult(v) = traverseResult(x => x, v);