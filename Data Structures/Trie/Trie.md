# Trie Data Structure

A Trie (pronounced "try") is a tree-based data structure that provides efficient storage and retrieval of strings. It is particularly useful for implementing features like autocomplete, spell checking, and prefix-based searches.

## Implementation Details

Our Trie implementation in TypeScript consists of two classes:
1. `TrieNode` - Represents a node in the trie
2. `Trie` - The main trie class

### TrieNode Class Properties
- `children: Map<string, TrieNode>` - Maps characters to child nodes
- `isEndOfWord: boolean` - Marks if the node represents the end of a word
- `count: number` - Counts number of words that pass through this node

### Trie Class Properties
- `root: TrieNode` - Root node of the trie
- `wordCount: number` - Total number of words in the trie

### Methods

1. `insert(word: string): void`
   - Inserts a word into the trie
   - Time Complexity: O(m) where m is word length

2. `search(word: string): boolean`
   - Checks if a word exists in the trie
   - Time Complexity: O(m)

3. `startsWith(prefix: string): boolean`
   - Checks if any word starts with the given prefix
   - Time Complexity: O(p) where p is prefix length

4. `getWordsWithPrefix(prefix: string): string[]`
   - Returns all words that start with the given prefix
   - Time Complexity: O(p + n) where n is number of words

5. `remove(word: string): boolean`
   - Removes a word from the trie
   - Time Complexity: O(m)

6. `countWordsWithPrefix(prefix: string): number`
   - Returns count of words with given prefix
   - Time Complexity: O(p)

7. `getWordCount(): number`
   - Returns total number of words
   - Time Complexity: O(1)

8. `isEmpty(): boolean`
   - Checks if trie is empty
   - Time Complexity: O(1)

9. `clear(): void`
   - Removes all words
   - Time Complexity: O(1)

## Example Usage

```typescript
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");
console.log(trie.search("apple")); // true
console.log(trie.startsWith("app")); // true
console.log(trie.getWordsWithPrefix("app")); // ["app", "apple"]
console.log(trie.countWordsWithPrefix("app")); // 2
trie.remove("apple");
console.log(trie.search("apple")); // false
```

## Common Applications

1. Autocomplete
   - Search suggestions
   - Text prediction

2. Spell Checking
   - Dictionary implementation
   - Word validation

3. IP Routing Tables
   - Network address lookup
   - Packet routing

4. Phone Directories
   - Contact search
   - Prefix matching

5. Text Search and Pattern Matching
   - Full-text search
   - Pattern matching algorithms

## Advantages

1. Fast prefix-based operations
2. Space-efficient for common prefixes
3. Predictable performance
4. Natural lexicographic ordering
5. Supports incremental string search

## Disadvantages

1. Higher memory usage for sparse datasets
2. Complex implementation
3. Not suitable for exact string matching only
4. Memory overhead for character links
5. Not optimal for single string operations

## Time Complexity

| Operation           | Time Complexity |
|--------------------|----------------|
| Insert             | O(m)          |
| Search             | O(m)          |
| Delete             | O(m)          |
| Prefix Search      | O(p)          |
| Word Count         | O(1)          |

Where:
- m = length of word
- p = length of prefix

## Space Complexity

- O(ALPHABET_SIZE * N * M)
  - N = number of words
  - M = average word length
  - ALPHABET_SIZE = size of character set

## Implementation Features

1. **Character Storage**
   - Uses Map for dynamic character set
   - Efficient for sparse character distributions

2. **Word Counting**
   - Maintains count at each node
   - Efficient prefix-based word counting

3. **Memory Management**
   - Automatic node cleanup during removal
   - Prevents memory leaks

4. **Prefix Operations**
   - Efficient prefix-based searches
   - Support for autocomplete functionality

## Variations

1. **Compressed Trie (Radix Tree)**
   - Merges nodes with single children
   - More space-efficient

2. **Ternary Search Tree**
   - Three-way branching
   - More space-efficient than standard trie

3. **Double-Array Trie**
   - Optimized for static datasets
   - Very fast lookups

4. **Patricia Trie**
   - Optimized for sparse datasets
   - Path compression

## Best Practices

1. Use appropriate character encoding
2. Consider memory usage for large datasets
3. Implement proper error handling
4. Use type-safe implementations
5. Consider case sensitivity requirements
6. Optimize for specific use cases
7. Handle empty strings appropriately

## Performance Optimization

1. **Memory Usage**
   - Use appropriate data structures for children
   - Implement node compression when possible

2. **Search Operations**
   - Optimize character comparisons
   - Consider caching frequent lookups

3. **Insertion/Deletion**
   - Batch operations when possible
   - Maintain balanced structure

4. **Prefix Operations**
   - Cache prefix search results
   - Implement lazy loading for large datasets

## Common Extensions

1. **Fuzzy Search**
   - Implement Levenshtein distance
   - Support approximate matching

2. **Wildcard Search**
   - Support pattern matching
   - Regular expression integration

3. **Word Frequency**
   - Track word occurrences
   - Support ranking and sorting

4. **Auto-correction**
   - Suggest similar words
   - Handle common misspellings 