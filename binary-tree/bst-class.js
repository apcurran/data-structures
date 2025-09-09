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
}

// let myBST = new BinarySearchTree();
// myBST.insert(2);
// myBST.insert(1);
// myBST.insert(5);
// myBST.insert(9);
// myBST.insert(3);
// console.log(JSON.stringify(myBST));
