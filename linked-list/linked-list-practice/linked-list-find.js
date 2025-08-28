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

// // Iterative solution
// // Time: O(n)
// // Space: O(1)
// function linkedListFind(head, target) {
//     let current = head;

//     while (current !== null) {
//         if (current.val === target) return true;

//         current = current.next; // step to next node
//     }

//     return false;
// }

// Recursive solution
// Time: O(n)
// Space: O(n)
/**
 *
 * @param {ListNode} head
 * @param {string} target
 * @returns {boolean}
 */
function linkedListFind(head, target) {
    if (head === null) return false;

    if (head.val === target) return true;

    return linkedListFind(head.next, target);
}

console.log(linkedListFind(a, "C")); // true
