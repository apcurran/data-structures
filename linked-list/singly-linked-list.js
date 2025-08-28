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
}
