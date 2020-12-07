/**
 * @param {string} str
 * @return {string}
 */
function replaceAt(a,b,i){
     return  a.substring(0, i) + b + a.substring(i + 1);
}

function replaceAt(a,b,i){
     a = a.split('');
     a[i]=b;
     return a.join('');
}

var toLowerCase = function (str) {
     str = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) < (65 + 32)) {
             str[i]=String.fromCharCode(str[i].charCodeAt(0)+32);

        }
    }
    return str.join('');
};
console.log(toLowerCase("Hello"));

/**
 *
 https://leetcode.com/problems/to-lower-case/discuss/963576/Memory-Usage%3A-37.9-MB-less-than-93.64-Runtime%3A-104-ms-faster-than-10.79
 Runtime: 104 ms, faster than 10.79% of JavaScript online submissions for To Lower Case.
 Memory Usage: 37.9 MB, less than 93.64% of JavaScript online submissions for To Lower Case.
METHOD1: split the string using two substrings and stuff the character between them
METHOD2: convert the string to character array, replace one array member and join it

 var s = "Hello world";
var index = 3;
s = s.substring(0, index) + 'x' + s.substring(index + 1);


Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 

Example 1:

Input: "Hello"
Output: "hello"

Example 2:

Input: "here"
Output: "here"

Example 3:

Input: "LOVELY"
Output: "lovely"


*/