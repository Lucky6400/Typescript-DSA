class TreeNode<T> {
    data: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree<T> {
    private root: TreeNode<T> | null;
    private compare: (a: T, b: T) => number;

    constructor(compareFunction: (a: T, b: T) => number = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }) {
        this.root = null;
        this.compare = compareFunction;
    }

    // Insert a new node
    insert(data: T): void {
        const newNode = new TreeNode(data);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        const insertNode = (node: TreeNode<T>, newNode: TreeNode<T>): void => {
            if (this.compare(newNode.data, node.data) < 0) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        };

        insertNode(this.root, newNode);
    }

    // Search for a node
    search(data: T): boolean {
        const searchNode = (node: TreeNode<T> | null, data: T): boolean => {
            if (node === null) {
                return false;
            }

            const comparison = this.compare(data, node.data);
            if (comparison === 0) {
                return true;
            }

            if (comparison < 0) {
                return searchNode(node.left, data);
            }
            return searchNode(node.right, data);
        };

        return searchNode(this.root, data);
    }

    // Remove a node
    remove(data: T): void {
        const findMin = (node: TreeNode<T>): TreeNode<T> => {
            let current = node;
            while (current.left !== null) {
                current = current.left;
            }
            return current;
        };

        const removeNode = (node: TreeNode<T> | null, data: T): TreeNode<T> | null => {
            if (node === null) {
                return null;
            }

            const comparison = this.compare(data, node.data);
            if (comparison < 0) {
                node.left = removeNode(node.left, data);
                return node;
            } else if (comparison > 0) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                // Node to delete found

                // Case 1: Leaf node
                if (node.left === null && node.right === null) {
                    return null;
                }

                // Case 2: Node with one child
                if (node.left === null) {
                    return node.right;
                }
                if (node.right === null) {
                    return node.left;
                }

                // Case 3: Node with two children
                const minNode = findMin(node.right);
                node.data = minNode.data;
                node.right = removeNode(node.right, minNode.data);
                return node;
            }
        };

        this.root = removeNode(this.root, data);
    }

    // Inorder traversal
    inorderTraversal(): T[] {
        const result: T[] = [];
        
        const inorder = (node: TreeNode<T> | null) => {
            if (node) {
                inorder(node.left);
                result.push(node.data);
                inorder(node.right);
            }
        };

        inorder(this.root);
        return result;
    }

    // Get minimum value
    getMin(): T | null {
        if (!this.root) {
            return null;
        }

        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    // Get maximum value
    getMax(): T | null {
        if (!this.root) {
            return null;
        }

        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    // Check if the tree is empty
    isEmpty(): boolean {
        return this.root === null;
    }

    // Clear the tree
    clear(): void {
        this.root = null;
    }
}

// Example usage:
// const bst = new BinarySearchTree<number>();
// bst.insert(5);
// bst.insert(3);
// bst.insert(7);
// bst.insert(1);
// console.log(bst.inorderTraversal()); // [1, 3, 5, 7]
// console.log(bst.search(3)); // true
// bst.remove(3);
// console.log(bst.inorderTraversal()); // [1, 5, 7] 