"use strict";

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode("A");
const b = new ListNode("B");
const c = new ListNode("C");
const d = new ListNode("D");

a.next = b;
b.next = c;
c.next = d;

/**
 * Iterative solution
 * Time: O(n)
 * Space: O(1)
 *
 * @param {ListNode} head
 * @param {number} index
 * @returns {string|null}
 */
function getNodeValue(head, index) {
    let current = head;
    let count = 0;

    while (current !== null) {
        if (count === index) return current.val;

        count++;
        current = current.next;
    }

    // Index is out of range
    return null;
}

// // Recursive solution
// // Time: O(n)
// // Space: O(n), due to recursive call stack
// function getNodeValue(head, index) {
//     // base case 1
//     // In case index does not exist.
//     if (head === null) return null;
//     // base case 2
//     if (index === 0) return head.val;

//     return getNodeValue(head.next, index - 1);
// }

console.log(getNodeValue(a, 2)); // "C"
console.log(getNodeValue(a, 7)); // null
