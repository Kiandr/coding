/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
num = num.toString().split('')
    for (let i = 0; i < num.length; i++) {
        if(num[i] === '6')
        {
            num.splice(i,1,'9')
            return Number(num.join(''))
        }
    }
    return Number(num.join(''))
};
console.log(maximum69Number(9669))
console.log(maximum69Number(9996))
console.log(maximum69Number(9999))
/*
Runtime: 80 ms, faster than 60.93% of JavaScript online submissions for Maximum 69 Number.
Memory Usage: 38.7 MB, less than 48.02% of JavaScript online submissions for Maximum 69 Number.
https://leetcode.com/problems/maximum-69-number/discuss/1000623/Runtime%3A-80-ms-faster-than-60.93-Memory-Usage%3A-38.7-MB-less-than-48.02
https://leetcode.com/problems/maximum-69-number/
1323. Maximum 69 Number
Easy

Given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).



Example 1:

Input: num = 9669
Output: 9969
Explanation:
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.

Example 2:

Input: num = 9996
Output: 9999
Explanation: Changing the last digit 6 to 9 results in the maximum number.

Example 3:

Input: num = 9999
Output: 9999
Explanation: It is better not to apply any change.



Constraints:

    1 <= num <= 10^4
    num's digits are 6 or 9.
*/