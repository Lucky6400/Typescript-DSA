# Heap Data Structure

A Heap is a specialized tree-based data structure that satisfies the heap property. It is commonly implemented as a binary heap, which is a complete binary tree where each node's value is less than or equal to (in a min heap) or greater than or equal to (in a max heap) its children's values.

## Implementation

The Heap implementation in this project uses a PriorityQueue as its underlying data structure. This provides efficient operations for inserting and extracting elements while maintaining the heap property.

### Classes

1. `Heap<T>` - Base class that implements the core heap functionality using a PriorityQueue
2. `MinHeap<T>` - Extends Heap to implement a min heap
3. `MaxHeap<T>` - Extends Heap to implement a max heap

## Methods

### Core Operations

- `insert(item: T): void` - Inserts a new element into the heap
- `extract(): T | null` - Removes and returns the root element
- `peek(): T | null` - Returns the root element without removing it
- `size(): number` - Returns the number of elements in the heap
- `isEmpty(): boolean` - Checks if the heap is empty
- `clear(): void` - Removes all elements from the heap
- `toArray(): T[]` - Returns an array representation of the heap
- `buildHeap(array: T[]): void` - Builds a heap from an array

## Time Complexity

- Insertion: O(log n)
- Extraction: O(log n)
- Peek: O(1)
- Build Heap: O(n)

## Example Usage

```typescript
// Min Heap
const minHeap = new MinHeap<number>();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(7);
minHeap.insert(1);
console.log(minHeap.extract()); // 1
console.log(minHeap.peek()); // 3

// Max Heap
const maxHeap = new MaxHeap<number>();
maxHeap.insert(5);
maxHeap.insert(3);
maxHeap.insert(7);
maxHeap.insert(1);
console.log(maxHeap.extract()); // 7
console.log(maxHeap.peek()); // 5
```

## Common Use Cases

1. Priority Queues
2. Heap Sort
3. Graph algorithms (Dijkstra's, Prim's)
4. Finding kth largest/smallest elements
5. Merge k sorted arrays

## Implementation Details

Our Heap implementation in TypeScript is a generic implementation that can function as either a min heap or max heap based on the comparison function provided. It uses an array to store the heap elements.

### Properties
- `heap: T[]` - Array that stores the heap elements
- `compare: (a: T, b: T) => number` - Comparison function for ordering elements

### Helper Methods

1. Index Calculations
   - `getParentIndex(index: number): number`
   - `getLeftChildIndex(index: number): number`
   - `getRightChildIndex(index: number): number`

2. Node Existence Checks
   - `hasParent(index: number): boolean`
   - `hasLeftChild(index: number): boolean`
   - `hasRightChild(index: number): boolean`

3. Value Access
   - `parent(index: number): T`
   - `leftChild(index: number): T`
   - `rightChild(index: number): T`

4. Heap Maintenance
   - `heapifyUp(): void`
   - `heapifyDown(): void`
   - `heapifyDownAt(index: number): void`

## Common Applications

1. Priority Queues
2. Scheduling Algorithms
3. Graph Algorithms (Dijkstra's, Prim's)
4. K-way Merging
5. Sort Algorithms (Heap Sort)
6. Event-driven Simulation
7. Media Streaming

## Advantages

1. Efficient access to min/max element
2. Efficient insertion and deletion
3. Natural priority handling
4. In-place sorting capability
5. Flexible implementation (min/max heap)

## Disadvantages

1. Not suitable for searching
2. No random access
3. Not stable (equal elements may change order)
4. Complex implementation compared to arrays
5. Cache performance issues

## Space Complexity

- O(n) where n is the number of elements
- Implemented as a complete binary tree using array

## Implementation Notes

1. **Array Representation**
   - Parent Index: `(i - 1) / 2`
   - Left Child: `2 * i + 1`
   - Right Child: `2 * i + 2`

2. **Heap Property**
   - Min Heap: Parent ≤ Children
   - Max Heap: Parent ≥ Children

3. **Complete Binary Tree**
   - All levels filled except possibly last
   - Last level filled from left to right

## Variations

1. **Binary Heap** (Current Implementation)
   - Each node has at most two children
   - Most common implementation

2. **D-ary Heap**
   - Each node has d children
   - Better for external memory

3. **Fibonacci Heap**
   - More efficient for certain operations
   - Complex implementation

4. **Leftist Heap**
   - Specialized for merging
   - Self-adjusting structure

## Best Practices

1. Choose appropriate heap type (min/max)
2. Use custom comparators for complex objects
3. Consider heap size for initial capacity
4. Handle edge cases (empty heap)
5. Implement error handling
6. Use type parameters appropriately
7. Document comparison function behavior

## Performance Optimization

1. **Array Resizing**
   - Grow array when needed
   - Consider initial capacity

2. **Comparison Function**
   - Keep comparison simple
   - Cache computed values

3. **Memory Management**
   - Clear references when removing
   - Avoid memory leaks

4. **Bulk Operations**
   - Use buildHeap for multiple elements
   - More efficient than individual inserts 