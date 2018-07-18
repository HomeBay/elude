type t('e, 'a) =
  | Err('e)
  | Ok('a)
  ;

let fromBelt = v => switch v {
| Belt.Result.Ok(a) => Ok(a)
| Belt.Result.Error(e) => Err(e)
};

let pure = v => Ok(v);

let mapOk = (fn, r) => switch r {
| Ok(a) => Ok(fn(a))
| _ => r
};

let mapErr = (fn, r) => switch r {
| Err(x) => Err(fn(x))
| _ => r
};

let map = mapOk;

let flatMap = (fn, r) => switch r {
| Ok(a) => fn(a)
| _ => r
};

let toPromise = (errToExn, r) => switch r {
| Ok(a) => Elude_Promise.pure(a)
| Err(e) => Elude_Promise.reject(errToExn(e))
};

let toOption = r => switch r {
| Ok(a) => Some(a)
| Err(_) => None
};

let fromOption = (err, opt) => switch opt {
| Some(a) => Ok(a)
| None => Err(err)
};
