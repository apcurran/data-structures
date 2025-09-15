import { BinarySearchTree, TreeNode } from "../bst-class.js";

/**
 * solution 1 -- recursive
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @returns {array}
 */
function dfsPreOrder(root) {
    let data = [];

    /**
     * @param {TreeNode} root
     * @returns {void} -- side effect pushing to data array
     */
    function traverse(root) {
        if (!root) {
            return;
        }

        // add to results
        data.push(root.value);
        // check left and right
        traverse(root.left);
        traverse(root.right);
    }

    traverse(root); // invoke first to start recursive calls

    return data;
}

/**
 * solution 2 -- iterative
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @returns {array}
 */
function dfsPreOrderIterative(root) {
    if (!root) return [];

    let stack = [root];
    let results = [];

    while (stack.length > 0) {
        // remove node from stack
        const current = stack.pop();
        // add node value to results array
        results.push(current.value);
        // check for child nodes
        if (current.right) {
            stack.push(current.right);
        }

        if (current.left) {
            stack.push(current.left);
        }
    }

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

console.log(dfsPreOrder(myBST.root)); // [47, 21, 18, 27, 76, 52, 82]
console.log(dfsPreOrderIterative(myBST.root)); // [47, 21, 18, 27, 76, 52, 82]
