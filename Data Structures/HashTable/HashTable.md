# Hash Table Data Structure

A Hash Table (also known as Hash Map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

## Implementation Details

Our HashTable implementation in TypeScript uses separate chaining for collision resolution and includes automatic resizing when the load factor threshold is reached.

### Classes

1. `HashNode<K, V>`
   - Represents a node in the hash table
   - Properties:
     - `key: K` - The key
     - `value: V` - The associated value
     - `next: HashNode<K, V> | null` - Reference to next node (for chaining)

2. `HashTable<K, V>`
   - The main hash table class
   - Properties:
     - `table: Array<HashNode<K, V> | null>` - The bucket array
     - `size: number` - Number of key-value pairs
     - `capacity: number` - Number of buckets
     - `loadFactor: number` - Threshold for resizing

### Methods

1. `put(key: K, value: V): void`
   - Inserts or updates a key-value pair
   - Time Complexity: O(1) average, O(n) worst case

2. `get(key: K): V | null`
   - Retrieves value associated with key
   - Time Complexity: O(1) average, O(n) worst case

3. `remove(key: K): boolean`
   - Removes key-value pair
   - Time Complexity: O(1) average, O(n) worst case

4. `contains(key: K): boolean`
   - Checks if key exists
   - Time Complexity: O(1) average, O(n) worst case

5. `keys(): K[]`
   - Returns array of all keys
   - Time Complexity: O(n)

6. `values(): V[]`
   - Returns array of all values
   - Time Complexity: O(n)

7. `getSize(): number`
   - Returns number of key-value pairs
   - Time Complexity: O(1)

8. `isEmpty(): boolean`
   - Checks if hash table is empty
   - Time Complexity: O(1)

9. `clear(): void`
   - Removes all key-value pairs
   - Time Complexity: O(1)

## Example Usage

```typescript
const hashTable = new HashTable<string, number>();
hashTable.put("one", 1);
hashTable.put("two", 2);
hashTable.put("three", 3);
console.log(hashTable.get("two")); // 2
console.log(hashTable.keys()); // ["one", "two", "three"]
console.log(hashTable.values()); // [1, 2, 3]
hashTable.remove("two");
console.log(hashTable.contains("two")); // false
```

## Implementation Features

1. **Collision Resolution**
   - Uses separate chaining (linked lists)
   - Each bucket can hold multiple key-value pairs

2. **Dynamic Resizing**
   - Automatically resizes when load factor threshold is reached
   - Default load factor: 0.75
   - Default initial capacity: 16

3. **Hash Function**
   - Uses a variant of the djb2 hash algorithm
   - Handles any key type by converting to string

## Common Applications

1. Database Indexing
2. Caching
3. Symbol Tables in Compilers
4. Unique Value Filtering
5. Counting Frequencies
6. Implementing Sets

## Advantages

1. Fast access (O(1) average case)
2. Flexible keys
3. Dynamic size
4. Efficient for large datasets
5. Quick insertions and deletions

## Disadvantages

1. Unordered structure
2. Collision handling overhead
3. Memory usage
4. Hash function dependency
5. Performance degradation with many collisions

## Time Complexity

| Operation | Average Case | Worst Case |
|-----------|-------------|------------|
| Insert    | O(1)        | O(n)       |
| Delete    | O(1)        | O(n)       |
| Search    | O(1)        | O(n)       |

## Space Complexity

- O(n) where n is the number of key-value pairs
- Additional space for empty buckets
- Overhead for linked list nodes in case of collisions

## Collision Resolution Methods

Our implementation uses separate chaining, but other methods include:

1. **Separate Chaining**
   - Uses linked lists for collisions
   - Simple but requires extra memory

2. **Open Addressing**
   - Linear Probing
   - Quadratic Probing
   - Double Hashing

3. **Robin Hood Hashing**
   - Reduces variance in probe sequence lengths

## Best Practices

1. Choose appropriate initial capacity
2. Monitor load factor
3. Use good hash function
4. Handle collisions efficiently
5. Consider key distribution
6. Implement proper error handling
7. Use type parameters appropriately

## Performance Considerations

1. **Load Factor**
   - Keep below 0.75 for best performance
   - Balance between space and time

2. **Hash Function**
   - Should distribute keys uniformly
   - Fast to compute
   - Minimize collisions

3. **Resizing**
   - Doubles capacity when needed
   - Amortized cost remains O(1)

4. **Memory Usage**
   - Trade-off between size and performance
   - Consider application requirements 