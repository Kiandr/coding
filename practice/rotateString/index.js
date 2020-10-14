'use strict';
/**
We are given two strings, A and B.
A shift on A consists of taking string A and moving the leftmost character to the rightmost position.
For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only
if A can become B after some number of shifts on A.
 https://leetcode.com/problems/rotate-string/
 */

function foo(A, B){
if (!isNaN(A)||!isNaN(B)||A.length<=0 || B.length<=0 || A.length !== B.length) return false;
// find d as distance between
  let distance =0;
for(let i=1; i<=A.length; ++i) {
  for (let d = i; d <= A.length; ++d) {
    // console.log(`A[${i}]=${A[i]} B[${d}]=${B[d]}`)
    if(A[i] === B[d])
      distance = d;
    else distance = 0;
  }
}
// console.log(distance<= A.length);
return (distance<= A.length)

}

console.log(foo('kian','kian'));

// console.log(foo('abcde','cdeab')===true)
// console.log(foo('abcde','abced')===false)