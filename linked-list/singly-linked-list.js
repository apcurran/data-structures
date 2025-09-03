class ListNode {
    /**
     * @param {any} val
     */
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next; // pointer connecting to next node in list
    }
}

class LinkedList {
    constructor() {
        this.head = null; // start
        this.tail = null; // end
        this.length = 0;
    }

    /**
     * creates a node,
     * adds to the end
     *
     * @param {any} val
     */
    append(val) {
        let newNode = new ListNode(val);

        if (!this.head) {
            // empty list
            this.head = newNode;
            this.tail = newNode;
        } else {
            // attach
            this.tail.next = newNode;
            // move pointer forward
            this.tail = newNode;
        }

        this.length++;
    }

    /**
     * creates a node,
     * adds to the beginning
     *
     * @param {any} val
     */
    prepend(val) {
        let newNode = new ListNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // link new node's head to old head
            newNode.next = this.head;
            this.head = newNode;
        }

        // keep running total
        this.length++;
    }

    /**
     * add value at specific index
     *
     * @param {number} index
     * @param {any} val
     */
    insertAt(index, val) {
        if (index < 0 || index > this.length) {
            throw new Error("Provided index out of bounds");
        }

        if (index === 0) {
            this.prepend(val);

            return;
        }

        if (index >= this.length) {
            this.append(val);

            return;
        }

        let current = this.head;
        let i = 0;

        // traverse to the node just before target index
        while (i < index - 1 && current.next !== null) {
            current = current.next;
            i++;
        }

        let newNode = new ListNode(val);
        newNode.next = current.next;
        current.next = newNode;

        // keep up total
        this.length++;
    }

    /**
     * @param {number} index
     * @returns {any} removed node value
     */
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) {
            const removed = this.head;
            this.head = this.head.next;

            if (this.length === 1) {
                this.tail = null; // empty list
            }

            this.length--;

            return removed.val;
        }

        let current = this.head;
        let i = 0;

        while (i < index - 1) {
            current = current.next;
            i++;
        }

        // remove node
        const removed = current.next;
        current.next = removed.next;

        if (removed === this.tail) {
            this.tail = current; // update if last
        }

        // update total
        this.length--;

        return removed.val;
    }

    toArray() {
        let arr = [];
        let current = this.head;

        while (current !== null) {
            // add node's value
            arr.push(current.val);
            // move to next node
            current = current.next;
        }

        return arr;
    }
}

let myList = new LinkedList();
myList.append("a");
myList.append("d");
myList.append("h");
myList.prepend("z");
myList.insertAt(2, "y");
console.log(myList.toArray());
myList.removeAt(2);
console.log(myList.toArray());

export { LinkedList, ListNode };
