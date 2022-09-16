"use strict";

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new ListNode(val);
        // The list is empty at first
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            this.length++;

            return node;
        }
        // Otherwise, not an empty list
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
}

const myLinkedList = new LinkedList();
myLinkedList.push(5);
myLinkedList.push(7);
myLinkedList.push(9);
console.log(JSON.stringify(myLinkedList));
