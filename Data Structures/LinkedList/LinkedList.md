# Linked List Data Structure

A Linked List is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence. Unlike arrays, linked lists do not store elements in contiguous memory locations.

## Implementation Details

Our LinkedList implementation in TypeScript consists of two classes:
1. `Node<T>` - Represents a node in the linked list
2. `LinkedList<T>` - The main linked list class

Both classes use a generic type `T` to allow for linked lists of any data type.

### Node Class Properties
- `data: T` - Stores the actual data
- `next: Node<T> | null` - Reference to the next node

### LinkedList Class Properties
- `head: Node<T> | null` - Reference to the first node
- `size: number` - Number of elements in the list

### Methods

1. `append(data: T): void`
   - Adds an element to the end of the list
   - Time Complexity: O(n)

2. `prepend(data: T): void`
   - Adds an element to the beginning of the list
   - Time Complexity: O(1)

3. `insert(data: T, position: number): boolean`
   - Inserts an element at a specific position
   - Returns true if successful, false if position is invalid
   - Time Complexity: O(n)

4. `removeAt(position: number): T | null`
   - Removes element at specified position
   - Returns the removed element or null if position is invalid
   - Time Complexity: O(n)

5. `remove(data: T): boolean`
   - Removes the first occurrence of a specific element
   - Returns true if element was found and removed
   - Time Complexity: O(n)

6. `getElementAt(position: number): T | null`
   - Returns element at specified position
   - Returns null if position is invalid
   - Time Complexity: O(n)

7. `getSize(): number`
   - Returns the number of elements
   - Time Complexity: O(1)

8. `isEmpty(): boolean`
   - Checks if the list is empty
   - Time Complexity: O(1)

9. `toArray(): T[]`
   - Converts the linked list to an array
   - Time Complexity: O(n)

10. `clear(): void`
    - Removes all elements from the list
    - Time Complexity: O(1)

## Example Usage

```typescript
const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.prepend(0);
console.log(list.toArray()); // [0, 1, 2]
list.remove(1);
console.log(list.toArray()); // [0, 2]
```

## Common Applications

1. Implementation of other data structures (stacks, queues)
2. Symbol table management in compiler design
3. Undo functionality in software
4. Memory allocation and management
5. Music player playlists

## Advantages

1. Dynamic size
2. Efficient insertion and deletion at the beginning
3. Flexible memory allocation
4. Can grow as needed

## Disadvantages

1. No random access (must traverse from beginning)
2. Extra memory for storing node references
3. Not cache-friendly due to non-contiguous memory storage
4. Reverse traversal is difficult (in singly linked lists)

## Time Complexity

| Operation | Time Complexity |
|-----------|----------------|
| Access    | O(n)          |
| Search    | O(n)          |
| Insertion | O(1) to O(n)  |
| Deletion  | O(1) to O(n)  |

## Space Complexity

The space complexity is O(n), where n is the number of elements in the list.

## Variations

1. Singly Linked List (current implementation)
2. Doubly Linked List
3. Circular Linked List
4. Circular Doubly Linked List

For production use, consider implementing these variations based on your specific needs. 