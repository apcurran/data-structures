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
// function reverseList(head) {
//     let prev = null;
//     let current = head;

//     while (current !== null) {
//         const next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }

//     return prev;
// }

// Recursive solution
// Time: O(n)
// Space: O(n)
/**
 *
 * @param {ListNode} head
 * @param {ListNode|null} prev
 * @returns {ListNode|null}
 */
function reverseList(head, prev = null) {
    if (head === null) return prev;

    const next = head.next;
    head.next = prev;

    return reverseList(next, head);
}

console.log(reverseList(a)); // "D" -> "C" -> "B" -> "A"
