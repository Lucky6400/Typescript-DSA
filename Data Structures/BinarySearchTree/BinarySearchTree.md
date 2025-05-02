# Binary Search Tree (BST) Data Structure

A Binary Search Tree is a binary tree with the following properties:
1. The left subtree of a node contains only nodes with values less than the node's value
2. The right subtree of a node contains only nodes with values greater than the node's value
3. Both the left and right subtrees must also be binary search trees

## Implementation Details

Our BinarySearchTree implementation in TypeScript consists of two classes:
1. `TreeNode<T>` - Represents a node in the binary search tree
2. `BinarySearchTree<T>` - The main BST class

Both classes use a generic type `T` to allow for BSTs of any comparable data type.

### TreeNode Class Properties
- `data: T` - Stores the actual data
- `left: TreeNode<T> | null` - Reference to the left child
- `right: TreeNode<T> | null` - Reference to the right child

### BinarySearchTree Class Properties
- `root: TreeNode<T> | null` - Reference to the root node
- `compare: (a: T, b: T) => number` - Comparison function for ordering nodes

### Methods

1. `insert(data: T): void`
   - Inserts a new node while maintaining BST properties
   - Time Complexity: O(h) where h is height of tree

2. `search(data: T): boolean`
   - Searches for a value in the tree
   - Time Complexity: O(h)

3. `remove(data: T): void`
   - Removes a node while maintaining BST properties
   - Time Complexity: O(h)

4. `inorderTraversal(): T[]`
   - Returns sorted array of all values
   - Time Complexity: O(n)

5. `getMin(): T | null`
   - Returns the minimum value in the tree
   - Time Complexity: O(h)

6. `getMax(): T | null`
   - Returns the maximum value in the tree
   - Time Complexity: O(h)

7. `isEmpty(): boolean`
   - Checks if the tree is empty
   - Time Complexity: O(1)

8. `clear(): void`
   - Removes all nodes from the tree
   - Time Complexity: O(1)

## Example Usage

```typescript
const bst = new BinarySearchTree<number>();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
console.log(bst.inorderTraversal()); // [1, 3, 5, 7]
console.log(bst.search(3)); // true
bst.remove(3);
console.log(bst.inorderTraversal()); // [1, 5, 7]
```

## Common Applications

1. Implementation of associative arrays
2. Dynamic sorting
3. Database indexing
4. Priority queues
5. Expression parsers
6. Spell checkers

## Advantages

1. Fast search, insertion, and deletion operations
2. Maintains sorted data
3. Flexible size
4. Supports range queries
5. Simple implementation compared to balanced trees

## Disadvantages

1. May become unbalanced (skewed)
2. No constant time operations
3. Not cache-friendly (compared to arrays)
4. Requires more space than arrays

## Time Complexity

| Operation | Average Case | Worst Case |
|-----------|-------------|------------|
| Search    | O(log n)    | O(n)       |
| Insert    | O(log n)    | O(n)       |
| Delete    | O(log n)    | O(n)       |
| Min/Max   | O(log n)    | O(n)       |

Note: Worst case occurs when tree becomes skewed (essentially a linked list)

## Space Complexity

The space complexity is O(n), where n is the number of nodes in the tree.

## Balanced vs Unbalanced BST

This implementation is an unbalanced BST, which means it can become skewed and degrade to O(n) performance. For production use, consider using self-balancing BST variants:

1. AVL Tree
2. Red-Black Tree
3. Splay Tree
4. B-Tree

## Node Deletion Cases

1. **Leaf Node**: Simply remove the node
2. **Node with One Child**: Replace node with its child
3. **Node with Two Children**: Replace with inorder successor (smallest value in right subtree)

## Custom Comparison

The BST supports custom comparison functions:

```typescript
const customBST = new BinarySearchTree<string>((a, b) => a.localeCompare(b));
customBST.insert("banana");
customBST.insert("apple");
console.log(customBST.inorderTraversal()); // ["apple", "banana"]
```

## Best Practices

1. Use balanced BST variants for production code
2. Consider the data distribution when choosing BST
3. Implement iterative versions of methods for better space complexity
4. Use custom comparators for complex objects
5. Consider adding traversal methods (preorder, postorder) for specific use cases 