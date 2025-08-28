"use strict";

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
 * Solution 1 -- recursive
 * Time: O(n)
 * Space: O(n)
 *
 * @param {ListNode} root
 * @returns {void}
 */
// function depthFirstValues(root) {
//     // empty tree
//     if (root === null) return;

//     console.log(root.val);

//     depthFirstValues(root.left);
//     depthFirstValues(root.right);
// }

/**
 * Solution 2 -- iterative dfs
 * Time: O(n)
 * Space: O(n)
 *
 * @param {ListNode} root
 * @returns {void}
 */
function depthFirstValues(root) {
    if (root === null) return;

    let stack = [root];

    while (stack.length > 0) {
        const currNode = stack.pop();
        console.log(currNode.val);

        if (currNode.right !== null) stack.push(currNode.right);

        if (currNode.left !== null) stack.push(currNode.left);
    }
}

console.log(depthFirstValues(a)); // prints 'a', 'b', 'd', 'e', 'c', 'f'
console.log(depthFirstValues(null)); // prints undefined
