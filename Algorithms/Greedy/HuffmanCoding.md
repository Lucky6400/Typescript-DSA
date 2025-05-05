# Huffman Coding (Greedy)

## Overview
Huffman Coding is a lossless data compression algorithm that assigns variable-length codes to input characters based on their frequencies.

## Algorithm Steps
1. Build a frequency table for the input characters.
2. Create a priority queue of nodes, with each node representing a character and its frequency.
3. Repeatedly combine the two least frequent nodes until a single tree remains.
4. Assign binary codes based on the tree structure.

## Time Complexity
- Worst Case: O(n log n) (due to sorting)

## Space Complexity
- O(n) (for storing the frequency map and the priority queue)

## Advantages
- Optimal for lossless data compression.

## Disadvantages
- Requires some overhead for storing the codes.

## Use Cases
- Data compression algorithms (e.g., zip files)

## Implementation Notes
- Huffman Coding provides optimal encoding for variable-length codes.