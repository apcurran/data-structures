import { BinarySearchTree, TreeNode } from "../bst-class.js";

/**
 * solution 1 -- recursion
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @returns {TreeNode|null}
 */
function invertTree(root) {
    if (root === null) return null;

    const tempLeft = root.left;
    root.left = root.right;
    root.right = tempLeft;

    invertTree(root.left);
    invertTree(root.right);

    return root;
}

/**
 * solution 2 -- iterative (stack-based)
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @returns {TreeNode|null}
 */
function invertTreeIterative(root) {
    if (root === null) return null;

    let stack = [root];

    while (stack.length > 0) {
        // swap child nodes
        const currentNode = stack.pop();
        const tempLeft = currentNode.left;
        currentNode.left = currentNode.right;
        currentNode.right = tempLeft;

        if (currentNode.left) {
            stack.push(currentNode.left);
        }

        if (currentNode.right) {
            stack.push(currentNode.right);
        }
    }

    return root;
}

let myBST = new BinarySearchTree();
myBST.insert(4);
myBST.insert(2);
myBST.insert(7);
myBST.insert(1);
myBST.insert(3);
myBST.insert(6);
myBST.insert(9);

// console.log(invertTree(myBST.root)); // [4,7,2,9,6,3,1]
console.log(invertTreeIterative(myBST.root)); // [4,7,2,9,6,3,1]
