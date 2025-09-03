import { LinkedList, ListNode } from "../../singly-linked-list.js";

let myLinkedList1 = new LinkedList();
myLinkedList1.append(1);
myLinkedList1.append(2);
myLinkedList1.append(3);
myLinkedList1.append(4);
myLinkedList1.tail.next = myLinkedList1.head;

let myLinkedList2 = new LinkedList();
myLinkedList2.append(1);
myLinkedList2.append(2);
myLinkedList2.append(3);
myLinkedList2.append(4);

/**
 * solution 1 -- Floyd's Tortoise and Hare algorithm
 * time: O(n)
 * space: O(1)
 *
 * @param {ListNode} head
 * @returns {boolean}
 */
function hasLoop(head) {
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next; // move pointer by 1
        fastPointer = fastPointer.next.next; // move pointer by 2

        if (slowPointer === fastPointer) {
            return true;
        }
    }

    return false;
}

console.log(hasLoop(myLinkedList1.head)); // true
console.log(hasLoop(myLinkedList2.head)); // false
