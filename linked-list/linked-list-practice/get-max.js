"use strict";

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode(2);
const b = new ListNode(4);
const c = new ListNode(16);
const d = new ListNode(8);

a.next = b;
b.next = c;
c.next = d;

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {ListNode} head 
 * @returns {number}
 */
function getMaxValue(head) {
    let current = head;
    let maxValue = -Infinity;

    while (current !== null) {
        // check for new max value
        maxValue = Math.max(maxValue, current.val);
        // move pointer to next node
        current = current.next;
    }

    return maxValue;
}

console.log(getMaxValue(a)); // 16
