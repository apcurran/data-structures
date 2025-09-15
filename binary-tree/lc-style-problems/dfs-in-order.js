import { BinarySearchTree, TreeNode } from "../bst-class.js";

/**
 *
 * @param {TreeNode} root
 * @returns {number[]}
 */
function dfsInOrder(root) {}

let myBST = new BinarySearchTree();
myBST.insert(47);
myBST.insert(21);
myBST.insert(76);
myBST.insert(18);
myBST.insert(27);
myBST.insert(52);
myBST.insert(82);

console.log(dfsInOrder(myBST.root)); // []
