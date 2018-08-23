type t('e, 'a) =
  | Err('e)
  | Ok('a)
  ;

let fromBelt = v => switch v {
| Belt.Result.Ok(a) => Ok(a)
| Belt.Result.Error(e) => Err(e)
};

let toBelt = v => switch v {
| Ok(a) => Belt.Result.Ok(a)
| Err(e) => Belt.Result.Error(e)
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

let ap = (fn, either: t('e, 'a)): t('e, 'b) => switch either {
| Err(err) => Err(err)
| Ok(v) => switch fn {
  | Err(x) => Err(x) /* compiler gets confused when we implement this in terms of map */
  | Ok(f) => Ok(f(v))
  }
};

let flatMap = (fn, r) => switch r {
| Ok(a) => fn(a)
| Err(x) => Err(x)
};

let toOption = r => switch r {
| Ok(a) => Some(a)
| Err(_) => None
};

let fromOption = (err, opt) => switch opt {
| Some(a) => Ok(a)
| None => Err(err)
};
