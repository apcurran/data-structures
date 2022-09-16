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

// Solution 1 -- iterative 
// Time: O(n)
// Space: O(n)
// function depthFirstValues(root) {
//     if (root === null) return [];

//     let stack = [root];
//     let resultArr = [];

//     while (stack.length > 0) {
//         const currentNode = stack.pop();
//         resultArr.push(currentNode.val);
        
//         if (currentNode.right) {
//             stack.push(currentNode.right);
//         }

//         if (currentNode.left) {
//             stack.push(currentNode.left);
//         }
//     }

//     return resultArr;
// }

/**
 * Solution 2 -- recursive
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {ListNode} root
 * @returns {string[]}
 */
function depthFirstValues(root) {
    // empty tree
    if (root === null) return [];

    // return arr of vals from left subtree
    const leftValues = depthFirstValues(root.left);
    // return arr of vals from right subtree
    const rightValues = depthFirstValues(root.right);

    return [root.val, ...leftValues, ...rightValues];
}

console.log( depthFirstValues(a) ); // [ 'a', 'b', 'd', 'e', 'c', 'f' ]
// console.log( depthFirstValues(null) ); // []