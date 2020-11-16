/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function (s) {
    let counter = 0, value = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === 'R' ? counter++ : counter--;
         counter === 0 ? value++ : value;
    }
    return value;
};

console.log(balancedStringSplit('RLRRLLRLRL'))
/**
 *Example 1:

 Input: s = "RLRRLLRLRL"
 Output: 4
 Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

 Example 2:

 Input: s = "RLLLLRRRLR"
 Output: 3
 Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

 Example 3:

 Input: s = "LLLLRRRR"
 Output: 1
 Explanation: s can be split into "LLLLRRRR".

 Example 4:

 Input: s = "RLRRRLLRLL"
 Output: 2
 Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'



 Constraints:

 1 <= s.length <= 1000
 s[i] = 'L' or 'R'
 *
 * * */