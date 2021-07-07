'use strict'

const tree = require('./binaryTree.js')

// let root = new tree.node(4);
// let arr = [2, 7, 1, 3, 5];
// for (let i = 0; i < arr.length; i++) {
//     tree.insertInOrder(root, arr[i])
// }

// console.log(arr);

console.log(tree.isBalanced(tree.initWithArray([3,9,20,null,null,15,7]))); // true
console.log(tree.isBalanced(tree.initWithArray([1,2,2,3,3,null,null,4,4]))); // false
console.log(tree.isBalanced(tree.initWithArray([]))); // true
console.log(tree.isBalanced(tree.initWithArray([1,2,2,3,3,null,null,4,4]))); //false