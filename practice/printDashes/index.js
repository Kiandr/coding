'use strict';

function foo(n = 0) {
  if (n === 0 || n < 0 || parseInt(n, 10) < 0 || isNaN(n)) return n;
  let str = '';
  for (let j = 1; j <= n; j++)
    str += '$'
    for (let i = n; i >0; i--)
        str += '*';
    console.log(str.split('').reverse().join(''));

}

foo(4);

/*
* $$$*
* $$**
* $***
* ****
* */