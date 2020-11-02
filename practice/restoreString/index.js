'use strict';
var restoreString = function (s, indices) {
  if (isNaN(s) === false || s.length != indices.length || s.length <= 0) return false;
  let r = [];
  for (let i = 0; i < s.length; i++) {
    r[indices[i]] = s[i]
  }

  return r.join('');
};

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));