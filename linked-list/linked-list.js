"use strict";

class LinkedList {
    constructor() {
        this.head = null; // First el of list
        this.tail = null; // Last el of list
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        };

        if (this.tail) {
            this.tail.next = newNode; // Update old tail's next property
        }

        this.tail = newNode; // Replace old tail with the new node

        // Check if this appended node is the first node in the linked list
        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        };

        this.head = newNode;

        // If prepend is called on an empty linked list, make this node the tail as well
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);

        if (existingNode) {
            const newNode = {
                value: value,
                next: existingNode.next
            };

            existingNode.next = newNode;
        }
    }

    find(value) {
        if (!this.head) return null;

        let currNode = this.head;

        while (currNode) {
            if (currNode.value === value) {
                return currNode;
            }

            currNode = currNode.next;
        }

        return null;
    }
    
    remove(value) {
        if (!this.head) return null;

        // To delete the first node in the list
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let currNode = this.head;

        while (currNode.next) {
            if (currNode.next.value === value) {
                // Now delete by orphaning this node (it will now be garbage collected)
                currNode.next = currNode.next.next;
            } else {
                // Otherwise keep iterating
                currNode = currNode.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = currNode;
        }
    }

    toArray() {
        let elementsArr = [];
        let currNode = this.head;

        while (currNode) {
            elementsArr.push(currNode);
            currNode = currNode.next;
        }

        return elementsArr;
    }
}

const myLinkedList = new LinkedList();

myLinkedList.append(1);
myLinkedList.append("Hey");
myLinkedList.append(true);
myLinkedList.prepend("First value");

console.log(myLinkedList.toArray());

myLinkedList.remove("Hey");
myLinkedList.remove(true);

console.log(myLinkedList.toArray());
console.log(myLinkedList.find(1));

myLinkedList.insertAfter("New value after 1", 1);

console.log(myLinkedList.toArray());
