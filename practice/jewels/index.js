'use strict';

function foo(J, S) {
  let count = 0;
  if (isNaN(J) == false || isNaN(S) === false) {return 0;}
  for (let i = 0; i < J.length; i++) {
    for (let j = 0; j < S.length; j++) {
      count = J[i] === S[j] ? count + 1 : count;
    }
  }
  return count;
}

console.log(foo('aA', 'aAAbbbb'));