'use strict';

/**
 * Takes an input string and counts contiguous sequences of the same character
 * and replaces them with XC (X = count, C = character).
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string} str [description]
 * @return {[type]}     [description]
 */
function compressString(str) {
  if (!str) {
    return str;
  }

  let cStr = '';
  for (let i = 0; i < str.length; ++i) {
    let char = str[i],
      start = i;
    while (i + 1 < str.length && char === str[i + 1]) {
      ++i;
    }
    // JS does not have a StringBuilder/StringBuffer style class for creating strings
    // string concatenation has been heavily optimised in JS implementations and
    // is faster than creating a string via an array then using a .join('') at the end
    cStr += (i - start + 1) + char;
  }

  return cStr.length < str.length ? cStr : str;
}
function countString(str) {
  if (str === null || str === undefined || str === '' || isNaN(str) === false || parseInt(str) >= 0 || str.length <= 0) return str;
  let returnString = '';
  let counter = 1;

  for (let i = 0; i <str.length;i++,  counter = 1) {
    while (str[i] === str[i + 1] && i <= str.length) {
      counter = counter === 0 ? 1 : counter + 1;
      i++;
    }
     returnString+= counter+str[i];

  }
  console.log(returnString);
  return returnString.length<str.length? returnString:str;
}

module.exports={
  compressString,
  countString
};
