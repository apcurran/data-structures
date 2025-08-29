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
     * creates a node,
     * adds to the end
     *
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

        this.length++;
    }

    /**
     * creates a node,
     * adds to the beginning
     *
     * @param {number} value
     */
    prepend(value) {
        const newNode = new ListNode(value);
        // link new node's head to old head
        newNode.next = this.head;
        this.head = newNode;
        // keep running total
        this.length++;
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
console.log(myList.toArray());
