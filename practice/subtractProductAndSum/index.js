'use strict';

/**
 * Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 Example 1:

 Input: n = 234
 Output: 15
 Explanation:
 Product of digits = 2 * 3 * 4 = 24
 Sum of digits = 2 + 3 + 4 = 9
 Result = 24 - 9 = 15

 Input: n = 4421
 Output: 21
 Explanation:
 Product of digits = 4 * 4 * 2 * 1 = 32
 Sum of digits = 4 + 4 + 2 + 1 = 11
 Result = 32 - 11 = 21
 * */

function foo(n) {
  if (isNaN(n) === true || parseInt(n) <= 0 || n === undefined || n === null) return false;
  n = String(n).split('');
  let p = 1;
  let s = 0;
  for (let i = 0; i < n.length; i++) {
    p *= parseInt(n[i]);
    s  += parseInt(n[i]);
  }
  return p - s;

}

console.log(foo(234));
console.log(foo(234) === 15);
console.log(foo(4421));
console.log(foo(4421) === 21);