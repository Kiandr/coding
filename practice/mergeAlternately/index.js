'use strict';

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

    let arr = [];
    let wLong = word1.length < word2.length ? word2 : word1;

    for (let i = 0; i < wLong.length;i++) {
        if(word1.length > i) {
            arr.push(word1[i]);
        }
        if(word2.length > i) {
            arr.push(word2[i]);
        }
    }
    return arr.join('');
};

// console.log(mergeAlternately("abc", "pqr"))
console.log(mergeAlternately("ab", "pqrs"), "apbqrs");




/*
https://leetcode.com/problems/merge-strings-alternately/discuss/1134731

Runtime: 72 ms, faster than 94.79% of JavaScript online submissions for Merge Strings Alternately.
Memory Usage: 38.8 MB, less than 80.63% of JavaScript online submissions for Merge Strings Alternately.

* You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.
Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q
merged: a p b q c   d



Constraints:

    1 <= word1.length, word2.length <= 100
    word1 and word2 consist of lowercase English letters.

* */