"use strict";

class ListNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new ListNode("a");
const b = new ListNode("b");
const c = new ListNode("c");
const d = new ListNode("d");
const e = new ListNode("e");
const f = new ListNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

/**
 * Solution -- iterative
 * time: O(n^2) -- due to array.shift() being O(n) op within a loop
 * space: O(n)
 * 
 * @param {ListNode} root 
 * @returns {string[]}
 */
function breadthFirstValues(root) {
    if (root === null) return []; 

    let queue = [root];
    let values = [];

    while (queue.length > 0) {
        const current = queue.shift();
        values.push(current.val);

        if (current.left !== null) queue.push(current.left);

        if (current.right !== null) queue.push(current.right);
    }

    return values;
}

console.log( breadthFirstValues(a) ); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
