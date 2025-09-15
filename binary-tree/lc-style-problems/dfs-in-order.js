import { BinarySearchTree, TreeNode } from "../bst-class.js";

/**
 * solution 1 -- recursive
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @returns {number[]}
 */
function dfsInOrder(root) {
    let results = [];

    /**
     * @param {TreeNode} root
     * @returns {voic}
     */
    function traverse(root) {
        if (root === null) return;

        // check left child
        traverse(root.left);
        // add value to results
        results.push(root.value);
        // check right child
        traverse(root.right);
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

//       47
//     /    \
//    21    76
//   /  \   / \
//  18  27 52  82

console.log(dfsInOrder(myBST.root)); // [18, 21, 27, 47, 52, 76, 82] sorted values
