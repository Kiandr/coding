/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    return n%2===0 ? (new Array(n).fill('a').join('').toLocaleLowerCase()) : (new Array(n-1).fill('a').join('').toLocaleLowerCase()+'b');
    
};

console.log(generateTheString(4))
console.log(generateTheString(2))
console.log(generateTheString(3))
/*
https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/discuss/1124222/80-ms-faster-than-59.38-AND-39-MB-less-than-45.49
Runtime: 80 ms, faster than 59.38% of JavaScript online submissions for Generate a String With Characters That Have Odd Counts.
Memory Usage: 39 MB, less than 45.49% of JavaScript online submissions for Generate a String With Characters That Have Odd Counts.

https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

 

Example 1:

Input: n = 4
Output: "pppz"
Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".

Example 2:

Input: n = 2
Output: "xy"
Explanation: "xy" is a valid string since the characters 'x' and 'y' occur once. Note that there are many other valid strings such as "ag" and "ur".

Example 3:

Input: n = 7
Output: "holasss"

 

Constraints:

    1 <= n <= 500


*/