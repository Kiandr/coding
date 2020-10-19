/***
 * https://leetcode.com/problems/reverse-integer/
 * Given a 32-bit signed integer, reverse digits of an integer.

 Note:
 Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range:
 [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 Example 1:

 Input: x = 123
 Output: 321

 Example 2:

 Input: x = -123
 Output: -321

 Example 3:

 Input: x = 120
 Output: 21

 Example 4:

 Input: x = 0
 Output: 0

 */
function foo(x) {
  let originalValue = x;
  let z = '';
  if (x === null || x === undefined || typeof (x) !== 'number' || parseInt(x) === 0 || isNaN(x) === true) return x;
  if (x < 0) { x = x * -1;}

  x = String(x).split('');

  for (let i = x.length - 1; i >= 0; i--) {
    z += x[i];
  }

  if (z * 1 > 2 ** 31 - 1) { return 0; }
  ;

  if (originalValue < 0) {
    z = parseInt(z) * -1;
  }

  return z;

}

//
// console.log(foo(123));
console.log(foo(-123));
// console.log(foo(0));
// console.log(foo(120));
// console.log(foo(-120));
console.log(foo(-2147483648));

var reverse = function (x) {
  // Make the number positive and turn it into a string
  let s = Math.abs(x).toString();
  let arr = [];
  // Push each "number" from last to first into an array
  for (let i = s.length - 1; i >= 0; i--) {
    arr.push(s[i]);
  }
  // Turn the reversed string into a number
  let result = Number(arr.join(''));
  console.log(`result ${result}`);
  // If the number exceeds the range, return 0
  if (result > 2 ** 31 - 1) {
    return 0;
  }
  // If the original input number was negative, turn the final number negative
  if (x < 0) {
    result *= -1;
  }

  return result;

};
console.log(reverse(-2147483648));