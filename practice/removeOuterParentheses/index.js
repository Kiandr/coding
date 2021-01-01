/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let counter = 0;
    let val = ''
    for (let i = 0; i <= S.length; i++) {
        counter = S[i] === ')' ? --counter : counter;
        val= counter>0 ? val+=S[i] : val
        counter = S[i] === '(' ? ++counter : counter;
    }
    return val;
};

var removeOuterParentheses02 = function(S) {
    let result = ''
    let level = 0

    for(const item of S) {
        if(item === ')') {
            level--
        }
        if(level >= 1) {
            result += item
        }
        if(item === '(') {
            level++
        }
    }

    return result
};
console.log(removeOuterParentheses("(()())(())"))

/*
https://leetcode.com/problems/remove-outermost-parentheses/
https://leetcode.com/problems/remove-outermost-parentheses/discuss/996154/Runtime%3A-88-ms-faster-than-34.73-Memory-Usage%3A-41.5-MB-less-than-10.10
Runtime: 88 ms, faster than 34.73% of JavaScript online submissions for Remove Outermost Parentheses.
Memory Usage: 41.5 MB, less than 10.10% of JavaScript online submissions for Remove Outermost Parentheses.
Easy

A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

 

Example 1:

Input: "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Example 2:

Input: "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

Example 3:

Input: "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".

 

Note:

    S.length <= 10000
    S[i] is "(" or ")"
    S is a valid parentheses string

*/