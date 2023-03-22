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

// /**
//  * Solution 1 -- iterative BFS
//  * Time: O(n^2) -- due to array.shift() inside of a loop
//  * Space: O(n)
//  * 
//  * @param {ListNode} root 
//  * @param {string} target 
//  */
// function treeIncludes(root, target) {
//     // Check if tree is initially empty
//     if (root === null) return false;

//     let queue = [root];

//     while (queue.length > 0) {
//         const current = queue.shift();

//         // Return early if the target is found as the curr node val
//         if (current.val === target) return true;
        
//         // Add child nodes of curr node, as long as the child nodes are not null
//         if (current.left) {
//             queue.push(current.left);
//         }

//         if (current.right) {
//             queue.push(current.right);
//         }
//     }

//     // no equal value was found for target
//     return false;
// }

/**
 * Solution 1 -- iterative DFS
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {ListNode} root 
 * @param {string} target 
 */
function treeIncludes(root, target) {
    // Check if tree is initially empty
    if (root === null) return false;

    let stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();

        // Return early if the target is found as the curr node val
        if (current.val === target) return true;
        
        // Add child nodes of curr node, as long as the child nodes are not null
        if (current.left) {
            stack.push(current.left);
        }

        if (current.right) {
            stack.push(current.right);
        }
    }

    return false;
}

// /**
//  * Solution 3 -- recursive
//  * Time: O(n)
//  * Space: O(n)
//  * 
//  * @param {ListNode} root 
//  * @param {string} target 
//  */
// function treeIncludes(root, target) {
//     // Check if tree is initially empty
//     if (root === null) return false;

//     if (root.val === target) return true;

//     return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// }

console.log( treeIncludes(a, "e") ); // true
console.log( treeIncludes(null, "b") ); // false
console.log( treeIncludes(a, "z") ); // false
