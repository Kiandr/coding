'use strict';

/***
 * How to use?
 const ll = new LinkedList();

 ll.insertFirst(100);
 ll.insertFirst(200);
 ll.insertFirst(300);
 ll.insertLast(400);
 ll.insertAt(500, 3);

 // ll.clearList();
 // ll.getAt(2);

 ll.printListData();

 */
// Construct Single node
class node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Create/Get/Remove Nodes From Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(val) {
    this.head = new node(val, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(val) {
    let node = new node(val);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // Insert at index
  insertAt(val, index) {
    //  If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insertFirst(val);
      return;
    }

    const node = new node(val);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // node before index
      count++;
      current = current.next; // node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.val);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list val
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  // gethead
  getHead(){return this.head}
}

module.exports = LinkedList;
