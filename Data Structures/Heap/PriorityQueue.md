# Priority Queue Data Structure

A Priority Queue is an abstract data type that operates similar to a regular queue, but where each element has a "priority" associated with it. In a priority queue, elements with higher priority are served before elements with lower priority. This implementation uses a binary heap as the underlying data structure.

## Implementation

The Priority Queue implementation in this project uses a binary heap to maintain the priority order of elements. It provides efficient operations for enqueueing and dequeueing elements while maintaining the heap property.

### Classes

1. `PriorityQueue<T>` - Base class that implements the core priority queue functionality
2. `MinPriorityQueue<T>` - Extends PriorityQueue to implement a min priority queue
3. `MaxPriorityQueue<T>` - Extends PriorityQueue to implement a max priority queue

## Methods

### Core Operations

- `enqueue(item: T): void` - Adds a new element to the queue
- `dequeue(): T | null` - Removes and returns the highest priority element
- `peek(): T | null` - Returns the highest priority element without removing it
- `size(): number` - Returns the number of elements in the queue
- `isEmpty(): boolean` - Checks if the queue is empty
- `clear(): void` - Removes all elements from the queue
- `toArray(): T[]` - Returns an array representation of the queue
- `buildQueue(array: T[]): void` - Builds a queue from an array

## Time Complexity

- Enqueue: O(log n)
- Dequeue: O(log n)
- Peek: O(1)
- Build Queue: O(n)

## Example Usage

```typescript
// Min Priority Queue
const minQueue = new MinPriorityQueue<number>();
minQueue.enqueue(5);
minQueue.enqueue(3);
minQueue.enqueue(7);
minQueue.enqueue(1);
console.log(minQueue.dequeue()); // 1
console.log(minQueue.peek()); // 3

// Max Priority Queue
const maxQueue = new MaxPriorityQueue<number>();
maxQueue.enqueue(5);
maxQueue.enqueue(3);
maxQueue.enqueue(7);
maxQueue.enqueue(1);
console.log(maxQueue.dequeue()); // 7
console.log(maxQueue.peek()); // 5
```

## Common Use Cases

1. Task Scheduling
2. Graph algorithms (Dijkstra's, Prim's)
3. Huffman Coding
4. Load Balancing
5. Event-driven Simulation

## Advantages

1. Efficient insertion and extraction of highest priority elements
2. Flexible priority ordering through custom comparison functions
3. Memory efficient implementation using arrays
4. O(1) access to highest priority element

## Disadvantages

1. Not suitable for random access
2. O(n) space complexity
3. More complex than simple queues
4. Cache performance issues due to array-based implementation 