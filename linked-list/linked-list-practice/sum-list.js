"use strict";

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode(2);
const b = new ListNode(8);
const c = new ListNode(3);
const d = new ListNode(-1);
const e = new ListNode(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// // Iterative solution
// // Time: O(n)
// // Space: O(1)
// function sumList(head) {
//     let sum = 0;
//     let current = head;

//     while (current !== null) {
//         sum += current.val;
//         current = current.next; // Step to next node
//     }

//     return sum;
// }

// Recursive solution
// Time: O(n)
// Space: O(n)
/**
 *
 * @param {ListNode} head
 * @returns {number}
 */
function sumList(head) {
    // base case
    if (head === null) return 0;

    return head.val + sumList(head.next);
}

console.log(sumList(a)); // 19
