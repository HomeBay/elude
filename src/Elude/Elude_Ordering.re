type t =
  | GT
  | LT
  | EQ;

let fromInt = i =>
  if (i < 0) {
    LT;
  } else if (i == 0) {
    EQ;
  } else {
    GT;
  };

let toInt = v =>
  switch (v) {
  | LT => (-1)
  | EQ => 0
  | GT => 1
  };

let compareInt = (a, b) => fromInt(a - b);
