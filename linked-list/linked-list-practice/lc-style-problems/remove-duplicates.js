import { LinkedList, ListNode } from "../../singly-linked-list.js";

let myLinkedList1 = new LinkedList();
myLinkedList1.append(1);
myLinkedList1.append(2);
myLinkedList1.append(1);
myLinkedList1.append(3);
myLinkedList1.append(2);

// /**
//  * solution 1 -- nested loops
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {ListNode} head
//  * @returns {ListNode|null}
//  */
// function removeDuplicates(head) {
//     if (!head) return null;

//     let current = head;

//     while (current !== null) {
//         let runner = current; // reset for each new 'current' node

//         while (runner.next !== null) {
//             // is there a duplicate (where current equals runner?)
//             if (runner.next.val === current.val) {
//                 // remove node
//                 runner.next = runner.next.next;
//             } else {
//                 // only move forward if a node was not removed
//                 runner = runner.next;
//             }
//         }

//         // move outer pointer
//         current = current.next;
//     }

//     return head;
// }

/**
 * solution 2 -- hashset
 * time: O(n)
 * space: O(n)
 *
 * @param {ListNode} head
 * @returns {ListNode|null}
 */
function removeDuplicates(head) {
    if (!head) return null;

    let seenValues = new Set();
    let current = head;
    let previous = null;

    while (current !== null) {
        if (seenValues.has(current.val)) {
            // handle duplicate found
            // remove node
            previous.next = current.next;
        } else {
            // handle no duplicate
            seenValues.add(current.val);
            previous = current;
        }

        current = current.next;
    }

    return head;
}

console.log(removeDuplicates(myLinkedList1.head)); // [1, 2, 3]
