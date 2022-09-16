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

// /**
//  * solution 1 -- iterative depth-first traversal
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {ListNode} root
//  * @returns {number}
//  */
// function treeMinValue(root) {
//     let stack = [root];
//     let minVal = Infinity;

//     while (stack.length > 0) {
//         const currNode = stack.pop();

//         if (currNode.val < minVal) minVal = currNode.val;

//         // traverse
//         if (currNode.left !== null) stack.push(currNode.left);

//         if (currNode.right !== null) stack.push(currNode.right);
//     }

//     return minVal;
// }

// /**
//  * solution 2 -- iterative breadth-first traversal
//  * time: O(n^2) due to array.shift() inside of loop
//  * space: O(n)
//  * 
//  * @param {ListNode} root
//  * @returns {number}
//  */
// function treeMinValue(root) {
//     let queue = [root];
//     let minVal = Infinity;

//     while (queue.length > 0) {
//         const currNode = queue.shift();

//         if (currNode.val < minVal) minVal = currNode.val;

//         // traverse
//         if (currNode.left !== null) queue.push(currNode.left);

//         if (currNode.right !== null) queue.push(currNode.right);
//     }

//     return minVal;
// }

/**
 * solution 3 -- recursive depth-first traversal
 * time: O(n)
 * space: O(n)
 * 
 * @param {ListNode} root
 * @returns {number}
 */
function treeMinValue(root) {
    // base case
    if (root === null) return Infinity;

    const smallestLeft = treeMinValue(root.left);
    const smallestRight = treeMinValue(root.right);

    return Math.min(smallestLeft, smallestRight, root.val);
}

console.log(treeMinValue(a)); // 3
