# Queue Data Structure

A Queue is a linear data structure that follows the First In First Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed.

## Implementation Details

Our Queue implementation in TypeScript uses a generic type `T` to allow for queues of any data type. The implementation uses an array as the underlying data structure.

### Methods

1. `enqueue(element: T): void`
   - Adds an element to the end of the queue
   - Time Complexity: O(1)

2. `dequeue(): T | undefined`
   - Removes and returns the first element from the queue
   - Returns undefined if the queue is empty
   - Time Complexity: O(n) due to array shift operation

3. `front(): T | undefined`
   - Returns the first element without removing it
   - Returns undefined if the queue is empty
   - Time Complexity: O(1)

4. `rear(): T | undefined`
   - Returns the last element without removing it
   - Returns undefined if the queue is empty
   - Time Complexity: O(1)

5. `isEmpty(): boolean`
   - Checks if the queue is empty
   - Time Complexity: O(1)

6. `size(): number`
   - Returns the number of elements in the queue
   - Time Complexity: O(1)

7. `clear(): void`
   - Removes all elements from the queue
   - Time Complexity: O(1)

## Example Usage

```typescript
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
console.log(queue.front()); // 2
console.log(queue.size()); // 1
```

## Common Applications

1. Task scheduling in operating systems
2. Print job management
3. Breadth-First Search algorithm
4. Message queues in event-driven programming
5. Buffering in data streams

## Time Complexity

Most operations in our implementation have O(1) time complexity, except for `dequeue()` which has O(n) time complexity due to the array shift operation. For a more efficient implementation in production, consider using a linked list or circular buffer implementation.

## Space Complexity

The space complexity is O(n), where n is the number of elements in the queue.

## Note on Performance

While this implementation is simple and easy to understand, it's worth noting that the `dequeue` operation has O(n) time complexity because it uses array's `shift()` method. For a more efficient implementation in production environments, you might want to:

1. Use a linked list implementation
2. Implement a circular buffer
3. Use two pointers (head and tail) to track the front and rear of the queue
4. Use a more sophisticated data structure like a double-ended queue (deque) 