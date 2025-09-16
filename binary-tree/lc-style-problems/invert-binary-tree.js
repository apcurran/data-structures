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

let myBST = new BinarySearchTree();
myBST.insert(4);
myBST.insert(2);
myBST.insert(7);
myBST.insert(1);
myBST.insert(3);
myBST.insert(6);
myBST.insert(9);

console.log(invertTree(myBST.root)); // [4,7,2,9,6,3,1]
