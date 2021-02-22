/**
 * @param {string[]} s
 * @return {string}
 */

const sortString02 = function (s) {

    s = s.split('').sort();
    let res = [];
    for (const sKey in s) {
        res[res.length++] = new Array()
        for (let i = 0; i < s.length; i++) {
            if (s[i] <= s[i + 1]) {
                if (res[res.length - 1].includes(s[i]) === false) {
                    res[res.length - 1].push(s[i])
                    s.splice(i, 1)
                }
            }

        }
    }


    // console.log(res);
    console.log(s);
    return res;
};
const sortString03 = function (s) {

    s = s.split('').sort();
    console.log(s)
    let response = [[s[0]]]
    while (s.length - 1 > 0) {
        for (let i = 1; i < s.length; i++) {
            // console.log(response[response.length - 1][response[response.length - 1].length-1])
            // console.log(s[i],i)
            if (!response[response.length - 1].includes(s[i]) && s[i] > response[response.length - 1][response[response.length - 1].length - 1]) {
                response[response.length - 1].push(s[i])
                s.splice(i, 1)
            }
        }
        response[response.length++] = new Array();
        response[response.length - 1].push(s[s.length - 1])
        // for (let i = s.length-2; i >=0; i--) {
        //     if (!response[response.length - 1].includes(s[i]) && s[i] < response[response.length - 1][response[response.length - 1].length-1]) {
        //         response[response.length - 1].push(s[i])
        //         s.splice(i, 1)
        //     }
        console.log(s.length)
    }
    // }
    console.log(s)
    return response;
};
const sortString04 = function (s) {

    s = s.split('').sort();
    let response = ''
    let freqAlphabets = new Map()
    for (let i = 0; i < 26; i++) {
        freqAlphabets.set(String.fromCharCode(97 + i), 0)
    }
    for (let i = 0; i < s.length; i++) {
        freqAlphabets.set(s[i], freqAlphabets.get(s[i]) + 1)
        s.splice(i, 1)
    }

    while (freqAlphabets.size > 0) {
        freqAlphabets.forEach((value, key) => {
            if (value > 0) {
                response += key;
                freqAlphabets.set(key, value--)
            } else {
                freqAlphabets.delete(key)
            }
            console.log(freqAlphabets.size)

        })
    }
    console.log(response)
    return freqAlphabets;
};
const sortString = function (s) {

    s = s.split('').sort();
    let response = ''
    let alphaBet = new Array(26);
    let freq = new Array(26).fill(0);
    for (let i = 0; i < alphaBet.length; i++) {
        alphaBet[i] = String.fromCharCode(97 + i);
    }
    for (let i = 0; i < s.length; i++) {
        freq[alphaBet.indexOf(s[i])]++;
    }
    for (let i = 0; i < alphaBet.length; i++) {
        for (let i = 0; i <= alphaBet.length; i++) {
            if (freq[alphaBet.indexOf(alphaBet[i])] > 0) {
                console.log(freq[i], alphaBet[i], alphaBet.indexOf(alphaBet[i]))
                response += alphaBet[i]
                freq[alphaBet.indexOf(alphaBet[i])]--;
            }
        }
        for (let i = alphaBet.length; i >= 0; i--) {
            if (freq[alphaBet.indexOf(alphaBet[i])] > 0) {
                console.log(freq[i], alphaBet[i], alphaBet.indexOf(alphaBet[i]))
                response += alphaBet[i]
                freq[alphaBet.indexOf(alphaBet[i])]--;
            }
        }
        if (freq.filter(value => value<=0)) return response;
    }
    return response
}

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
console.log(sortString("jcdlgiszuuzsigldcj"))
//"cdgijlsuzusljigdcz"
// console.log(sortString('spo'))
// console.log('removeByShift',removeByLength("abcd"));
// console.log('removeByShift',removeByShift("abcd"));
// console.log('removeByPop',removeByPop("abcd"));
// console.log('removeBySplice',removeBySplice("abcd",0,2,'k'));
// console.log('removeByDelete',removeByDelete("abcd",0));

/*
https://leetcode.com/problems/increasing-decreasing-string/
https://leetcode.com/problems/increasing-decreasing-string/discuss/1077192/faster-than-9.33-of-JavaScript
https://leetcode.com/problems/increasing-decreasing-string/discuss/1077192/faster-than-9.33-of-JavaScript
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

Runtime: 332 ms, faster than 9.33% of JavaScript online submissions for Increasing Decreasing String.
Memory Usage: 48 MB, less than 7.33% of JavaScript online submissions for Increasing Decreasing String.
*/
