'use strict'

function tree(node = undefined) {

}

function insert(node = undefined) {
    console.log('insert')
}

function isBalanced02(node = undefined) {
    if (typeof root === 'undefined') {
        return undefined;
    }
    return maxDepth(root) - minDepth(root) <= 1;
}

function maxDepth02(node = undefined) {
    if (typeof node === 'undefined') {
        return 0;
    }
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}

function minDepth02(node = undefined) {
    if (typeof node === 'undefined') {
        return 0;
    }
    return 1 + Math.min(minDepth(node.left), minDepth(node.right));
}

function getLeftLeaf(node = undefined) {
    if (typeof node === 'unidentified')
        return node;
    let res = node.left ? getLeftLeaf.left : node
    return res;
}

function node(root = undefined, left = undefined, right = undefined) {
    this.root = root
    this.val = root
    this.left = left
    this.right = right
}

function insertInOrder(root = undefined, val = undefined) {

    if (typeof root === 'undefined')
        return new node();


    if (root.val > val) { //ture left
        if (root.left == null) { // if there is no left child node, we create a new one
            root.left = new node(val);
        } else insertInOrder(root.left, val); //otherwise, continue to traverse the tree
    }
    if (root.val < val) { //ture left
        if (root.right == null) {
            root.right = new node(val);  // if there is no right child node, we create a new one
        } else insertInOrder(root.right, val);////otherwise, continue to traverse the tree
    }


    return root;
}

function initWithArray(arr = []) {
    if (arr.length < 1) return new node(arr[0])
    let root = new node(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        insertInOrder(root, arr[i])
    }
    return root;
}

function printInOrder(root) {
    if (typeof root === 'undefined' || root === null || root === undefined)
        return root;

    printInOrder(root.left)
    console.log(root.val)
    printInOrder(root.right)
}

function printPreOrder(root) {
    if (typeof root === 'undefined' || root === null || root === undefined)
        return root;

    console.log(root.val)
    printInOrder(root.left)
    printInOrder(root.right)
}

function printPostOrder(root) {
    if (typeof root === 'undefined' || root === null || root === undefined)
        return root;


    printInOrder(root.left)
    printInOrder(root.right)
    console.log(root.val)
}

/*
    https://leetcode.com/problems/minimum-depth-of-binary-tree/
    solution: https://leetcode.com/submissions/detail/513093111/
* */

function minDepth(root) {
    if (!root) return 0;
    return (root.left && root.right ?
        Math.min(maxDepth(root.left), maxDepth(root.right) ?
            minDepth(root.left) : minDepth(root.right)) : Math.max(minDepth(root.left), minDepth(root.right))) + 1;
};

function maxDepth(root) {
    if (!root) return 0;
    return (root.left && root.right ?
        Math.max(maxDepth(root.left), maxDepth(root.right) ?
            maxDepth(root.left) : maxDepth(root.right)) :
        Math.max(maxDepth(root.left), maxDepth(root.right))) + 1;
};
//https://leetcode.com/problems/balanced-binary-tree/
function isBalanced(root = undefined) {
    let res = true
    const go = (root) => {
        if (!root) return 0
        let left = go(root.left)
        let right = go(root.right)
        if (left - right > 1 || right - left > 1) {
            res = false
        }
        return Math.max(left, right) + 1

    }
    console.log(go(root))
    return res
}

module.exports = {
    tree: tree,
    node: node,
    insert: insert,
    isBalanced: isBalanced,
    maxDepth: maxDepth,
    minDepth: minDepth,
    minDepth02: minDepth02,
    insertInOrder: insertInOrder,
    initWithArray: initWithArray,
    printInOrder: printInOrder,
    printPreOrder: printPreOrder,
    printPostOrder: printPostOrder
}