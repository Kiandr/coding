'use strict'

function tree(node = undefined) {

}

function insert(node = undefined) {
    console.log('insert')
}

function isBalanced(node = undefined) {
    if (typeof root === 'undefined') {
        return undefined;
    }
    return maxDepth(root) - minDepth(root) <= 1;
}

function maxDepth(node = undefined) {
    if (typeof node === 'undefined') {
        return 0;
    }
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}

function minDepth(node = undefined) {
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

function treeArray(arr = undefined) {
    if (typeof arr === 'undefined')
        return new node();
    let root = new node(arr[0])
    // let temp = new node (arr[0])
    // temp.left = arr[1]
    // temp.right = arr[2];

    for (let i = 0; i < arr.length; i++) {
        getLeftLeaf(root).val = new node(arr[i])
        getLeftLeaf(root).left = getLeftLeaf(root).left ?  new node(arr[++i]) : new node(arr[++i])
        getLeftLeaf(root).right = getLeftLeaf(root).right? new node(arr[++i]) : new node(arr[++i])
        console.log(root)


    }


    return root;
}


module.exports = {
    tree: tree,
    node: node,
    insert: insert,
    isBalanced: isBalanced,
    maxDepth: maxDepth,
    minDepth: minDepth,
    treeArray: treeArray
}