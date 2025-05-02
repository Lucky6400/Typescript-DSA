# Binary Tree Data Structure

A Binary Tree is a hierarchical data structure where each node has at most two children, referred to as the left child and the right child. Each node contains data and references (or links) to its children.

## Implementation Details

Our BinaryTree implementation in TypeScript consists of two classes:
1. `TreeNode<T>` - Represents a node in the binary tree
2. `BinaryTree<T>` - The main binary tree class

Both classes use a generic type `T` to allow for binary trees of any data type.

### TreeNode Class Properties
- `data: T` - Stores the actual data
- `left: TreeNode<T> | null` - Reference to the left child
- `right: TreeNode<T> | null` - Reference to the right child

### BinaryTree Class Properties
- `root: TreeNode<T> | null` - Reference to the root node

### Methods

1. `insert(data: T): void`
   - Inserts a new node in level-order traversal
   - Time Complexity: O(n)

2. `inorderTraversal(): T[]`
   - Performs inorder traversal (Left, Root, Right)
   - Time Complexity: O(n)

3. `preorderTraversal(): T[]`
   - Performs preorder traversal (Root, Left, Right)
   - Time Complexity: O(n)

4. `postorderTraversal(): T[]`
   - Performs postorder traversal (Left, Right, Root)
   - Time Complexity: O(n)

5. `levelOrderTraversal(): T[]`
   - Performs level-order traversal (Breadth-First Search)
   - Time Complexity: O(n)

6. `getHeight(): number`
   - Returns the height of the tree
   - Time Complexity: O(n)

7. `getSize(): number`
   - Returns the number of nodes in the tree
   - Time Complexity: O(n)

8. `isEmpty(): boolean`
   - Checks if the tree is empty
   - Time Complexity: O(1)

9. `clear(): void`
   - Removes all nodes from the tree
   - Time Complexity: O(1)

## Example Usage

```typescript
const tree = new BinaryTree<number>();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
console.log(tree.levelOrderTraversal()); // [1, 2, 3, 4]
console.log(tree.inorderTraversal()); // [2, 1, 4, 3]
console.log(tree.getHeight()); // 3
```

## Tree Traversal Methods

1. **Inorder Traversal (Left, Root, Right)**
   - Useful for getting nodes in non-decreasing order in a BST
   - Applications: Expression parsing, sorted data

2. **Preorder Traversal (Root, Left, Right)**
   - Useful for creating a copy of the tree or prefix expression
   - Applications: Storing hierarchy, serialization

3. **Postorder Traversal (Left, Right, Root)**
   - Useful for deleting the tree or postfix expression
   - Applications: Space calculation, deletion

4. **Level Order Traversal (Breadth-First)**
   - Visits nodes level by level
   - Applications: Level-wise processing, nearest neighbor

## Common Applications

1. File system organization
2. Expression evaluation
3. Decision trees in machine learning
4. HTML/DOM parsing
5. Network routing algorithms

## Advantages

1. Simple hierarchical structure
2. Can represent hierarchical relationships
3. Efficient insertion and deletion
4. Multiple traversal methods

## Disadvantages

1. No random access to nodes
2. Complex rebalancing operations
3. May become unbalanced
4. Not suitable for sequential data

## Time Complexity

| Operation           | Time Complexity |
|--------------------|----------------|
| Insertion          | O(n)          |
| Traversal          | O(n)          |
| Height Calculation | O(n)          |
| Size Calculation   | O(n)          |

## Space Complexity

The space complexity is O(n), where n is the number of nodes in the tree.

## Variations

1. Binary Search Tree (BST)
2. AVL Tree
3. Red-Black Tree
4. Complete Binary Tree
5. Perfect Binary Tree
6. Full Binary Tree

## Note on Implementation

This implementation uses level-order insertion, which means new nodes are inserted from left to right, level by level. For specific use cases, you might want to modify the insertion strategy or implement a different type of binary tree (like BST, AVL, etc.). 