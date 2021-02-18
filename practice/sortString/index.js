/**
 * @param {string[]} s
 * @return {string}
 */

const sortString = function (s) {

    s = s.split('').sort();
    let res = [];
    for (const sKey in s) {
        res[res.length++]=new Array()
        for (let i = 0; i < s.length; i++) {
            console.log(res)
            if (s[i] <= s[i + 1]) {
                if (res[res.length-1].includes(s[i]) === false) {
                    res[res.length-1].push(s[i])
                    s.splice(i, 1)
                }
            }

        }
    // s.reverse()
    }




    console.log(res);
    console.log(s);
    // return s;
};

const removeByLength = function (s) {
    s = s.split('')
    s.length = s.length - 1;
    return s;
}

const removeByShift = function (s) {
    s = s.split('')
    s.shift()
    return s;
}

const removeByPop = function (s) {
    s = s.split('')
    s.pop()
    return s;
}

const removeBySplice = function (s, from = null, len = null, replaceWith = null) {
    s = s.split('')
    s.splice(from, len, replaceWith)
    return s;
}

const removeByDelete = function (s, index = null) {
    s = s.split('')
    delete s[index];
    return s;
}

// console.log(removeByLength("aaaabbbbcccc"));
// console.log(("aaaabbbbcccc").split(''));
// console.log(sortString('aaaabbbbcccc'))
console.log(sortString('aaaabbbbcccc'))
console.log(sortString('spo'))
// console.log('removeByShift',removeByLength("abcd"));
// console.log('removeByShift',removeByShift("abcd"));
// console.log('removeByPop',removeByPop("abcd"));
// console.log('removeBySplice',removeBySplice("abcd",0,2,'k'));
// console.log('removeByDelete',removeByDelete("abcd",0));
/*
https://leetcode.com/problems/increasing-decreasing-string/
Given a string s. You should re-order the string using the following algorithm:

    Pick the smallest character from s and append it to the result.
    Pick the smallest character from s which is greater than the last appended character to the result and append it.
    Repeat step 2 until you cannot pick more characters.
    Pick the largest character from s and append it to the result.
    Pick the largest character from s which is smaller than the last appended character to the result and append it.
    Repeat step 5 until you cannot pick more characters.
    Repeat the steps from 1 to 6 until you pick all characters from s.

In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.



Example 1:

Input: s = "aaaabbbbcccc"
Output: "abccbaabccba"
Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
After steps 4, 5 and 6 of the first iteration, result = "abccba"
First iteration is done. Now s = "aabbcc" and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"

Example 2:

Input: s = "rat"
Output: "art"
Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.

Example 3:

Input: s = "leetcode"
Output: "cdelotee"

Example 4:

Input: s = "ggggggg"
Output: "ggggggg"

Example 5:

Input: s = "spo"
Output: "ops"



Constraints:

    1 <= s.length <= 500
    s contains only lower-case English letters.

*/