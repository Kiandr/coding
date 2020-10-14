'use strict';
/**
We are given two strings, A and B.
A shift on A consists of taking string A and moving the leftmost character to the rightmost position.
For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only
if A can become B after some number of shifts on A.
*/

function foo(A, B){
if (!isNaN(A)||!isNaN(B)||A.length<=0 || B.length<=0 || A.length !== B.length) return false;
for(let i=0; i<A.length; i++){
  for (let d=0; d<A.length; d++){
    console.log (`B[${d}+${i}]=${A[d+i]} A[${i}]=${B[i]} `);
  }
}
// if A[i]

}

foo('abcde','bcdea');
// console.log(foo('abcde','cdeab')===true)
// console.log(foo('abcde','abced')===false)