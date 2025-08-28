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
// function linkedListValues(head) {
//     let valuesArr = [];
//     let current = head;

//     while (current !== null) {
//         valuesArr.push(current.val);
//         current = current.next;
//     }

//     return valuesArr;
// }

// Recursive solution
/**
 *
 * @param {ListNode} head
 * @returns {array}
 */
function linkedListValues(head) {
    let valuesArr = [];

    fillValues(head, valuesArr);

    return valuesArr;
}

// Recursive helper func
/**
 *
 * @param {ListNode} head
 * @param {array} valuesArr
 * @returns {void}
 */
function fillValues(head, valuesArr) {
    if (head === null) return;

    valuesArr.push(head.val);

    fillValues(head.next, valuesArr);
}

console.log(linkedListValues(a)); // [ 'A', 'B', 'C', 'D' ]
