"use strict";

// initial setup
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new ListNode("a");
const b = new ListNode("b");
const c = new ListNode("c");
const d = new ListNode("d");

// link nodes together
a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {ListNode} head 
 * @param {string} targetValue
 * @returns {ListNode} head of the modified list
 */ 
function deleteValue(head, targetValue) {
    // edge case where the beginning head needs to be deleted
    if (head.value === targetValue) return head.next;

    let previousNode = null;
    let currentNode = head;

    while (currentNode !== null) {
        if (currentNode.value === targetValue) {
            // delete node
            previousNode.next = currentNode.next;
        }
        // move previous pointer
        previousNode = currentNode;
        // move current pointer
        currentNode = currentNode.next;
    }

    return head;
}

/**
 * @param {ListNode} head 
 * @returns {void}
 */
function printList(head) {
    if (head === null) return;

    console.log(head.value);

    return printList(head.next);
}

const newListHead = deleteValue(a, "a"); // returns a -> b -> d
printList(newListHead);
