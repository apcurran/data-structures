"use strict";

class ListNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new ListNode(3);
const b = new ListNode(11);
const c = new ListNode(4);
const d = new ListNode(4);
const e = new ListNode(-2);
const f = new ListNode(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

/**
 * Solution 1 -- DFS iterative
 * Time: O(n)
 * Space: O(n)
 *
 * @param {ListNode} root
 * @returns {number}
 */
function treeSum(root) {
    if (root === null) return 0;

    let stack = [root];
    let sum = 0;

    while (stack.length > 0) {
        const current = stack.pop();
        sum += current.val;

        if (current.right !== null) {
            stack.push(current.right);
        }

        if (current.left !== null) {
            stack.push(current.left);
        }
    }

    return sum;
}

// /**
//  * Solution 2 -- BFS
//  * Time: O(n^2)
//  * Space: O(n) -- queue
//  *
//  * @param {ListNode} root
//  * @returns {number}
//  */
// function treeSum(root) {
//     if (root === null) return 0;

//     let queue = [root];
//     let sum = 0;

//     while (queue.length > 0) {
//         const node = queue.shift();
//         sum += node.val;

//         if (node?.left) {
//             queue.push(node.left);
//         }

//         if (node?.right) {
//             queue.push(node.right);
//         }
//     }

//     return sum;
// }

// /**
//  * Solution 1 -- recursive (depth-first traversal)
//  * Time: O(n)
//  * Space: O(n) -- due to call stack
//  *
//  * @param {ListNode} root
//  * @returns {number}
//  */
// function treeSum(root) {
//     if (root === null) return 0;

//     return root.val + treeSum(root.left) + treeSum(root.right);
// }

console.log(treeSum(a)); // -> 21
