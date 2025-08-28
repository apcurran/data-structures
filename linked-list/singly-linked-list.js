"use strict";

class ListNode {
    /**
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
        this.next = null; // pointer connecting to next node in list
    }
}

class LinkedList {
    constructor() {
        this.head = null; // start
        this.length = 0;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const newNode = new ListNode(value);

        if (!this.head) {
            // empty list
            this.head = newNode;
        } else {
            // pre-existing list, add to end
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = newNode; // link at the end
        }
    }
}
