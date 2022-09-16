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

a.next = b;
b.next = c;

const x = new ListNode("X");
const y = new ListNode("Y");

x.next = y;

// /**
//  * Takes in the head of two linked lists as args.
//  * The function returns the two lists zipped together by alternating nodes.
//  * If one of the linked lists is longer than the other,
//  * the resulting list should terminate with the remaining nodes.
//  * The function should return the head of the zippered linked list.
//  * 
//  * Iterative solution
//  * n = len of list1
//  * m = len of list2
//  *
//  * Time: O(min(n, m))
//  * Space: O(1)
//  * 
//  * @param {object} head1
//  * @param {object} head2
//  * @returns {object}
//  */
// function zipperLists(head1, head2) {
//     let tail = head1;
//     let current1 = head1.next;
//     let current2 = head2;
//     let count = 0;

//     while (current1 !== null && current2 !== null) {
//         if (count % 2 === 0) {
//             // even case
//             tail.next = current2;
//             current2 = current2.next;
//         } else {
//             // odd case
//             tail.next = current1;
//             current1 = current1.next;
//         }

//         tail = tail.next;
//         count++;
//     }

//     if (current1 !== null) tail.next = current1;

//     if (current2 !== null) tail.next = current2;

//     return head1;
// }

/**
 * Takes in the head of two linked lists as args.
 * The function returns the two lists zipped together by alternating nodes.
 * If one of the linked lists is longer than the other,
 * the resulting list should terminate with the remaining nodes.
 * The function should return the head of the zippered linked list.
 * 
 * Recursive solution
 * 
 * n = len of list1
 * m = len of list2
 *
 * Time: O(min(n, m))
 * Space: O(min(n, m))
 * 
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @returns {ListNode|null}
 */
function zipperLists(head1, head2) {
    if (head1 === null && head2 === null) return null;

    if (head1 === null) return head2;

    if (head2 === null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;
    head2.next = zipperLists(next1, next2);

    return head1;
}

console.log( zipperLists(a, x) ); // a -> x -> b -> y -> c
