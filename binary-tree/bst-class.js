class TreeNode {
    /**
     * @param {any} value
     */
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     *
     * @param {any} value
     * @returns {boolean}
     */
    insert(value) {
        let newNode = new TreeNode(value);

        // empty tree situation
        if (this.root === null) {
            this.root = newNode;

            return true;
        }

        let current = this.root;

        while (true) {
            if (value === current.value) {
                return false; // no duplicates
            }

            if (value < current.value) {
                // travel left
                if (current.left === null) {
                    current.left = newNode;

                    return true;
                }

                // continue on
                current = current.left;
            } else {
                // travel right
                if (current.right === null) {
                    current.right = newNode;

                    return true;
                }

                current = current.right;
            }
        }
    }

    /**
     * @param {number} targetValue
     * @returns {boolean}
     */
    contains(targetValue) {
        let temp = this.root;

        while (temp !== null) {
            if (temp.value === targetValue) return true;

            if (targetValue < temp.value) {
                // go left
                temp = temp.left;
            } else {
                // go right
                temp = temp.right;
            }
        }

        // no node value found equal to target
        return false;
    }

    /**
     * @param {TreeNode} node
     * @returns {TreeNode}
     */
    findMin(node) {
        while (node.left !== null) {
            // go left for smaller and smaller node values
            node = node.left;
        }

        // arrived at min
        return node;
    }
}

// let myBST = new BinarySearchTree();
// myBST.insert(2);
// myBST.insert(1);
// myBST.insert(5);
// myBST.insert(9);
// myBST.insert(3);
// console.log(myBST.contains(5)); // true
// console.log(myBST.contains(25)); // false
// console.log(myBST.findMin(myBST.root)); // TreeNode 1

// console.log(JSON.stringify(myBST));

export { BinarySearchTree, TreeNode };
