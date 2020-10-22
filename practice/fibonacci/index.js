/**
 ------------------------------------------------
 * https://leetcode.com/problems/add-binary/submissions/
 ------------------------------------------------
 * Given two binary strings, return their sum (also a binary string).
 * The input strings are both non-empty and contains only characters 1 or 0.
 ------------------------------------------------
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 ------------------------------------------------
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 ------------------------------------------------
 * Constraints:
 ------------------------------------------------
 * Each string consists only of '0' or '1' characters.
 * 1 <= a.length, b.length <= 10^4
 * Each string is either "0" or doesn't contain any leading zero.
 ------------------------------------------------
 * */

function foo(a, b){
  // return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
  console.log(BigInt(`0b${a}`))
}
console.log(foo(11,1))