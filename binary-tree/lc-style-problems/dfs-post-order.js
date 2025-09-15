import { BinarySearchTree, TreeNode } from "../bst-class.js";

/**
 * solution 1 -- recursive
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @returns {number[]}
 */
function dfsPostOrder(root) {
    let results = [];

    function traverse(root) {
        if (root === null) return;

        // check left
        if (root.left !== null) {
            traverse(root.left);
        }
        // check right
        if (root.right !== null) {
            traverse(root.right);
        }
        // add value to results
        results.push(root.value);
    }

    traverse(root);

    return results;
}

let myBST = new BinarySearchTree();
myBST.insert(47);
myBST.insert(21);
myBST.insert(76);
myBST.insert(18);
myBST.insert(27);
myBST.insert(52);
myBST.insert(82);

console.log(dfsPostOrder(myBST.root)); // [18, 27, 21, 52, 82, 76, 47]
