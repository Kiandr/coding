/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    for (let i = 0; i < (s.length - 1) / 2; i++) {
        let temp = s[i]
        s[i] = s[(s.length - 1) - i]
        s[(s.length - 1) - i] = temp
    }
    return s;
};
// console.log(reverseString(["h","e","l","l"]))
console.log(reverseString(['a', 'b', 'c', 'd']))
/*
https://leetcode.com/problems/reverse-string/discuss/962878/Runtime%3A-104-ms-faster-than-90.82-Memory-Usage%3A-45.8-MB-less-than-39.05
Runtime: 104 ms, faster than 90.82% of JavaScript online submissions for Reverse String.
Memory Usage: 45.8 MB, less than 39.05% of JavaScript online submissions for Reverse String.
* Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.



Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/