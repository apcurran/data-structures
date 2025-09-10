import { BinarySearchTree, TreeNode } from "../bst-class.js";

let myBST = new BinarySearchTree();
myBST.insert(4);
myBST.insert(2);
myBST.insert(1);
myBST.insert(12);

/**
 * solution 1 -- recursive
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @param {number} target
 */
function treeIncludes(root, target) {
    if (root === null) {
        return false;
    }

    if (root.value === target) {
        return true;
    }

    if (target < root.value) {
        return treeIncludes(root.left, target);
    } else {
        return treeIncludes(root.right, target);
    }
}

console.log(treeIncludes(myBST.root, 2)); // true
console.log(treeIncludes(myBST.root, 53)); // false
