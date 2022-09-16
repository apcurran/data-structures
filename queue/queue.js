"use strict";

class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * add to the back of the queue
     * 
     * @param {QueueNode} itemVal 
     * @returns {void}
     */
    enqueue(itemVal) {
        const itemNode = new QueueNode(itemVal);
        this.length++;

        // check for empty list first
        if (this.tail === null) {
            this.tail = itemNode;
            this.head = itemNode;

            return;
        }

        // create connection
        this.tail.next = itemNode;
        // set tail pointer to new end node
        this.tail = itemNode;
    }

    /**
     * remove from the front of the queue
     * 
     * @returns {number|string|null}
     */
    dequeue() {
        // check for empty list
        if (this.head === null) return null;

        this.length--;

        // save reference to curr head
        const tempHead = this.head;
        // delete node -> auto gc
        this.head = this.head.next;

        return tempHead.value;
    }

    peek() {
        return this.head.value;
    }
}