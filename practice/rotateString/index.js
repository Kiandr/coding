'use strict';

/**
 We are given two strings, A and B.
 A shift on A consists of taking string A and moving the leftmost character to the rightmost position.
 For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only
 if A can become B after some number of shifts on A.
 https://leetcode.com/problems/rotate-string/
 */

function foo(A, B) {
  if (A.length < 0 || B.length < 0 || A.length !== B.length) return false;
  if (A === B) return true;

  for (let i = 0; i < A.length; i++) {
    console.log(`no stitching ${A.substring(i,A.length)} === ${B.substring(0,B.length-i-1)}`)
    console.log(`with stitching${A.substring(i,A.length)} === ${B[B.length-1] + B.substring(0,B.length-i-1)}`)
    if (A.substring(i, A.length) === (B[B.length - 1] + B.substring(0, B.length - i - 1))) return true;
  }
  return false;
}

// console.log(foo('', ''));
// console.log(foo('kian', 'kian'));
console.log(foo('abc', 'bca'));
// console.log(foo('abcde', 'abced'));