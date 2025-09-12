import { BinarySearchTree, TreeNode } from "../bst-class.js";

/**
 * solution 1
 * time: O(n^2) -- due to array.shift() call in while loop
 * space: O(n)
 *
 * @param {TreeNode} root
 * @returns {array}
 */
function bfs(root) {
    if (!root) return [];

    let queue = [root];
    let results = [];

    while (queue.length > 0) {
        let current = queue.shift(); // pull off front of queue
        results.push(current.value);

        if (current.left) {
            // add left node
            queue.push(current.left);
        }

        if (current.right) {
            queue.push(current.right);
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

console.log(bfs(myBST.root)); // [47, 21, 76, 18, 27, 52, 82]
