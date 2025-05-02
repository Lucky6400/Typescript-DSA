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

class BinaryTree<T> {
    private root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    // Insert a new node
    insert(data: T): void {
        const newNode = new TreeNode(data);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        const queue: TreeNode<T>[] = [this.root];

        while (queue.length > 0) {
            const current = queue.shift()!;

            if (!current.left) {
                current.left = newNode;
                return;
            } else {
                queue.push(current.left);
            }

            if (!current.right) {
                current.right = newNode;
                return;
            } else {
                queue.push(current.right);
            }
        }
    }

    // Inorder traversal (Left, Root, Right)
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

    // Preorder traversal (Root, Left, Right)
    preorderTraversal(): T[] {
        const result: T[] = [];
        
        const preorder = (node: TreeNode<T> | null) => {
            if (node) {
                result.push(node.data);
                preorder(node.left);
                preorder(node.right);
            }
        };

        preorder(this.root);
        return result;
    }

    // Postorder traversal (Left, Right, Root)
    postorderTraversal(): T[] {
        const result: T[] = [];
        
        const postorder = (node: TreeNode<T> | null) => {
            if (node) {
                postorder(node.left);
                postorder(node.right);
                result.push(node.data);
            }
        };

        postorder(this.root);
        return result;
    }

    // Level order traversal (Breadth-First Search)
    levelOrderTraversal(): T[] {
        const result: T[] = [];
        if (!this.root) return result;

        const queue: TreeNode<T>[] = [this.root];

        while (queue.length > 0) {
            const current = queue.shift()!;
            result.push(current.data);

            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }

        return result;
    }

    // Get the height of the tree
    getHeight(): number {
        const calculateHeight = (node: TreeNode<T> | null): number => {
            if (!node) return 0;
            const leftHeight = calculateHeight(node.left);
            const rightHeight = calculateHeight(node.right);
            return Math.max(leftHeight, rightHeight) + 1;
        };

        return calculateHeight(this.root);
    }

    // Get the number of nodes in the tree
    getSize(): number {
        const calculateSize = (node: TreeNode<T> | null): number => {
            if (!node) return 0;
            return calculateSize(node.left) + calculateSize(node.right) + 1;
        };

        return calculateSize(this.root);
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
// const tree = new BinaryTree<number>();
// tree.insert(1);
// tree.insert(2);
// tree.insert(3);
// tree.insert(4);
// console.log(tree.levelOrderTraversal()); // [1, 2, 3, 4]
// console.log(tree.inorderTraversal()); // [2, 1, 4, 3]
// console.log(tree.getHeight()); // 3 