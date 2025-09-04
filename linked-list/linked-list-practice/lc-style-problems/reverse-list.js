import { LinkedList, ListNode } from "../../singly-linked-list.js";

let myLinkedList = new LinkedList();
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);

// /**
//  * solution 1 -- iterative
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {ListNode} head
//  * @returns {ListNode}
//  */
// function reverseList(head) {
//     let previous = null;
//     let current = head;

//     while (current !== null) {
//         // save next pointer before breaking chain and re-assigning
//         const temp = current.next;
//         current.next = previous; // reverse link
//         previous = current; // move forward
//         current = temp; // move forward
//     }

//     return previous;
// }

/**
 * solution 2 -- recursive
 * time: O(n)
 * space: O(n)
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
function reverseList(head, previous = null) {
    if (head === null) {
        return previous;
    }

    const temp = head.next;
    // re-link pointer
    head.next = previous;

    return reverseList(temp, head);
}

console.log(reverseList(myLinkedList.head)); // [5, 4, 3, 2, 1]
