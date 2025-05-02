# Stack Data Structure

A Stack is a linear data structure that follows the Last In First Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed.

## Implementation Details

Our Stack implementation in TypeScript uses a generic type `T` to allow for stacks of any data type. The implementation uses an array as the underlying data structure.

### Methods

1. `push(element: T): void`
   - Adds an element to the top of the stack
   - Time Complexity: O(1)

2. `pop(): T | undefined`
   - Removes and returns the top element from the stack
   - Returns undefined if the stack is empty
   - Time Complexity: O(1)

3. `peek(): T | undefined`
   - Returns the top element without removing it
   - Returns undefined if the stack is empty
   - Time Complexity: O(1)

4. `isEmpty(): boolean`
   - Checks if the stack is empty
   - Time Complexity: O(1)

5. `size(): number`
   - Returns the number of elements in the stack
   - Time Complexity: O(1)

6. `clear(): void`
   - Removes all elements from the stack
   - Time Complexity: O(1)

## Example Usage

```typescript
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.peek()); // 1
console.log(stack.size()); // 1
```

## Common Applications

1. Function call stack (managing function calls in programming languages)
2. Undo/Redo operations in text editors
3. Browser history (back/forward navigation)
4. Expression evaluation and syntax parsing
5. Backtracking algorithms

## Time Complexity

All operations in our implementation have O(1) time complexity, making the stack a very efficient data structure for its intended use cases.

## Space Complexity

The space complexity is O(n), where n is the number of elements in the stack. 