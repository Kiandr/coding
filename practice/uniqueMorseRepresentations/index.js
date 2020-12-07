/**
 * @param {string[]} words
 * @return {number}
 */
/*
The charCodeAt() method returns an integer between 0 and 65535 representing the
ASCII table a = 97
*/
const toMorse = (char) => {
    const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    return morse[char.charCodeAt(0) - 97];

}
var uniqueMorseRepresentations = function (words) {
    let array = []
    for (let i = 0; i < words.length; i++) {
        let code=''
        words[i].split('').forEach(value =>{
            code+=toMorse(value)
        })
        if(array.includes(code)===false)
            array.push(code)
    }
return array.length
};
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
/*
https://leetcode.com/problems/unique-morse-code-words/discuss/962849/Memory-Usage%3A-40-MB-less-than-58.67-Runtime%3A-96-ms-faster-than-7.64
Runtime: 96 ms, faster than 7.64% of JavaScript online submissions for Unique Morse Code Words.
Memory Usage: 40 MB, less than 58.67% of JavaScript online submissions for Unique Morse Code Words.
* International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation:
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".

Note:

    The length of words will be at most 100.
    Each words[i] will have length in range [1, 12].
    words[i] will only consist of lowercase letters.

*/