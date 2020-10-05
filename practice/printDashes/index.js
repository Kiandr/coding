'use strict';

function foo(n = 0) {
  if (n === 0 || n < 0 || parseInt(n, 10) < 0 || isNaN(n)) return n;
  let str = "";
  for (let j = 1; j <= n; j++) {
    for (let i = j; i <= j; i++) {
      if (n - j >= j) // 4-1 = 3
        str += '#';
      else
        str += '*';
    }
    console.log(str.split("").reverse().join(""))
  }
}

foo(4);