'use strict'
/**
 * https://leetcode.com/problems/determine-if-string-halves-are-alike/discuss/994610/Runtime%3A-80-ms-faster-than-87.30-Memory-Usage%3A-40-MB-less-than-37.13
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    s = s.split('');
    const vows = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let counter = 0;

    for (let i = 0; i < s.length / 2; i++) {
        counter = vows.includes(s[i]) ? ++counter : counter;
    }

    for (let j = s.length / 2; j <= s.length; j++) {
        counter = vows.includes(s[j]) ? --counter : counter;
    }
    return counter === 0;
}

console.log(halvesAreAlike("book"))
console.log(halvesAreAlike("textbook"))
console.log(halvesAreAlike("AbCdEfGh"))

/*
https://leetcode.com/problems/determine-if-string-halves-are-alike/
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.



Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.

Example 3:

Input: s = "MerryChristmas"
Output: false

Example 4:

Input: s = "AbCdEfGh"
Output: true



Constraints:

    2 <= s.length <= 1000
    s.length is even.
    s consists of uppercase and lowercase letters.
Runtime: 80 ms, faster than 87.30% of JavaScript online submissions for Determine if String Halves Are Alike.
Memory Usage: 40 MB, less than 37.13% of JavaScript online submissions for Determine if String Halves Are Alike.

* */