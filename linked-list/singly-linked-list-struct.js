"use strict";

class ListNode {
    /**
     * @param {any} val
     */
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        // init with an empty list
        this.head = null;
    }

    /**
     * @param {any} val
     * @returns {void}
     */
    append(val) {
        // is this the first item in the list head === null ?
        if (this.head === null) {
            // add node as head
            this.head = new ListNode(val);
            // exit method early
            return;
        }

        let curr = this.head;

        // traverse through list as long as the next pointer is not null
        while (curr.next !== null) {
            curr = curr.next;
        }
        // after loop finishes, we hit the tail of the list
        // add to end of list
        curr.next = new ListNode(val);
    }

    print() {
        let curr = this.head;
        let strMsg = "";

        while (curr !== null) {
            // append to message string
            strMsg += `${curr.val} -> `;
            // traverse to the next node in the list
            curr = curr.next;
        }

        console.log(strMsg);
    }

    /**
     * @param {any} target
     * @returns {boolean}
     */
    contains(target) {
        let curr = this.head;

        while (curr !== null) {
            if (curr.val === target) return true;
            // traverse
            curr = curr.next;
        }

        return false;
    }
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");
list.append(52);

console.log(list);
list.print();

console.log(list.contains("a")); // true
console.log(list.contains("c")); // true
console.log(list.contains("y")); // false
console.log(list.contains(52)); // true
