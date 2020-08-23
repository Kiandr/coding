/***
 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 Example:

 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8
 Explanation: 342 + 465 = 807.



 */
const LinkedList = require('../../tools/LinkedList');

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function foo(l1, l2) {

  let head = new ListNode();
  let prt = head;
  let carry = 0;
  while (l1 || l2) {
    let sum = ((l1.val + l2.val) >= 10 ? (l1.val + l2.val).toString()[1] * 1 : (l1.val + l2.val)) + carry;
    carry = (l1.val + l2.val) >= 10 ? ((l1.val + l2.val).toString()[0] * 1) : 0;
    prt.next = new ListNode(sum);
    prt = prt.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    if(carry>0)
      prt.next = new ListNode(carry);
  }
  return head.next;
}

const linkedListA = new LinkedList();
const linkedListB = new LinkedList();

let inputA = [5];
let inputB = [5];

for (const number of inputA) {
  linkedListA.insertFirst(number);
}
for (const number of inputB) {
  linkedListB.insertFirst(number);
}

console.log(foo(linkedListA.getHead(), linkedListB.getHead()));
