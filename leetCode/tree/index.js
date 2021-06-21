'use strict'

const tree = require('./binaryTree.js')

let root = new tree.node(4);
let arr = [2, 7, 1, 3, 5];
for (let i = 0; i < arr.length; i++) {
    tree.insertInOrder(root, arr[i])
}

// console.log(arr);

let arr2 = [4,2, 7, 1, 3, 5];
let root02= tree.initWithArray(arr2)
// console.log(root02)

tree.printPostOrder(root);