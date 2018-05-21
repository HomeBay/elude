'use strict';


function fromInt(i) {
  if (i < 0) {
    return /* LT */1;
  } else if (i === 0) {
    return /* EQ */2;
  } else {
    return /* GT */0;
  }
}

function toInt(v) {
  switch (v) {
    case 0 : 
        return 1;
    case 1 : 
        return -1;
    case 2 : 
        return 0;
    
  }
}

function compareInt(a, b) {
  return fromInt(a - b | 0);
}

exports.fromInt = fromInt;
exports.toInt = toInt;
exports.compareInt = compareInt;
/* No side effect */
