"use strict";

class ListNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new ListNode(5);
const b = new ListNode(3);
const c = new ListNode(8);
const d = new ListNode(9);
const e = new ListNode(10);
const f = new ListNode(4);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      5
//    /   \
//   3     8
//  / \     \
// 9   10     4

/**
 * solution 1 -- recursive depth-first traversal
 * time: O(n)
 * space: O(n)
 * 
 * @param {ListNode} root 
 * @returns {number}
 */
function maxPathSum(root) {
    if (root === null) return -Infinity;

    // if node has no children
    if (root.left === null && root.right === null) return root.val;

    const leftMax = maxPathSum(root.left);
    const rightMax = maxPathSum(root.right);
    const maxChildPathSum = Math.max(leftMax, rightMax);

    return maxChildPathSum + root.val;
}

console.log( maxPathSum(a) ); // 18
