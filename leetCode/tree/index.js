'use strict'

const tree = require('./binaryTree.js')

// let root = new tree.node(4);
// let arr = [2, 7, 1, 3, 5];
// for (let i = 0; i < arr.length; i++) {
//     tree.insertInOrder(root, arr[i])
// }

// console.log(arr);

// console.log(tree.minDepth(tree.initWithArray([3,9,20,null,null,15,7])));
console.log(tree.minDepth(tree.initWithArray([2,null,3,null,4,null,5,null,6])));
console.log(tree.maxDepth(tree.initWithArray([2,null,3,null,4,null,5,null,6])));