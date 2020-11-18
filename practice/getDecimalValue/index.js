/**
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/discuss/940639/Runtime%3A-80-ms-faster-than-51.57-of-JavaScript
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

function ListNode( next, val) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var getDecimalValue = function (head) {
    let prt = head;
    let binraryNum = '';
    while (prt) {
        binraryNum += prt.val;
        prt=prt.next;
    }
    // console.log(parseInt(binraryNum, 2))
    return parseInt(binraryNum, 2);

};

/**
 * Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

 Return the decimal value of the number in the linked list.



 Input: head = [1,0,1]
 Output: 5
 Explanation: (101) in base 2 = (5) in base 10

 Example 2:

 Input: head = [0]
 Output: 0

 Example 3:

 Input: head = [1]
 Output: 1

 Example 4:

 Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
 Output: 18880

 Example 5:

 Input: head = [0,0]
 Output: 0



 Constraints:

 The Linked List is not empty.
 Number of nodes will not exceed 30.
 Each node's value is either 0 or 1.
 */

const head = (array = []) => {
    let headNode = undefined;
    if (Array.isArray(array) === false && array.length <= 0) return undefined;
    headNode = new ListNode(headNode, array[array.length-1])
    for (let i = array.length-2; i >= 0; i--) {
        headNode = new ListNode(headNode, array[i])
    }
    return headNode;
}
console.log(getDecimalValue(head([1,0,1])));