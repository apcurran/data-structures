import { LinkedList, ListNode } from "../../singly-linked-list.js";

let myLinkedList = new LinkedList();
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);

/**
 * solution 1 -- Floyd's Tortoise and Hare algorithm
 * time: O(n)
 * space: O(1)
 *
 * @param {ListNode} head
 * @param {number} k
 * @returns {number|null}
 */
function findKthFromEnd(head, k) {
    let fastPointer = head;
    let slowPointer = head;

    // move fast pointer k nodes ahead in the list
    for (let i = 0; i < k; i++) {
        if (fastPointer === null) {
            return null; // went out of bounds
        }

        fastPointer = fastPointer.next;
    }

    while (fastPointer !== null) {
        fastPointer = fastPointer.next;
        slowPointer = slowPointer.next;
    }

    return slowPointer.val;
}

console.log(findKthFromEnd(myLinkedList.head, 2)); // 4
