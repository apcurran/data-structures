import { LinkedList } from "../../singly-linked-list.js";

let myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    return slowPointer;
}

console.log(middleNode(myList.head)); // [3, 4, 5]
