"use strict";

class ListNode {
    /**
     * @param {any} value
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
     * creates a node,
     * adds to the end
     *
     * @param {any} value
     */
    append(value) {
        let newNode = new ListNode(value);

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

        this.length++;
    }

    /**
     * creates a node,
     * adds to the beginning
     *
     * @param {any} value
     */
    prepend(value) {
        let newNode = new ListNode(value);
        // link new node's head to old head
        newNode.next = this.head;
        this.head = newNode;
        // keep running total
        this.length++;
    }

    /**
     * add value at specific index
     *
     * @param {number} index
     * @param {any} value
     */
    insertAt(index, value) {
        if (index === 0) {
            this.prepend(value);

            return;
        }

        if (index >= this.length) {
            this.append(value);

            return;
        }

        let current = this.head;
        let i = 0;

        // traverse to the node just before target index
        while (i < index - 1 && current.next !== null) {
            current = current.next;
            i++;
        }

        let newNode = new ListNode(value);
        newNode.next = current?.next;
        current.next = newNode;

        // keep up total
        this.length++;
    }

    /**
     * @param {number} index
     * @returns {any} removed node value
     */
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) {
            const removed = this.head;
            this.head = this.head.next;
            this.length--;

            return removed.value;
        }

        let current = this.head;
        let i = 0;

        while (i < index - 1) {
            current = current.next;
            i++;
        }

        // remove node
        const removed = current.next;
        current.next = removed.next;
        // update total
        this.length--;

        return removed.value;
    }

    toArray() {
        let arr = [];
        let current = this.head;

        while (current !== null) {
            // add node's value
            arr.push(current.value);
            // move to next node
            current = current.next;
        }

        return arr;
    }
}

let myList = new LinkedList();
myList.append("a");
myList.append("d");
myList.append("h");
myList.prepend("z");
myList.insertAt(2, "y");
console.log(myList.toArray());
myList.removeAt(2);
console.log(myList.toArray());
