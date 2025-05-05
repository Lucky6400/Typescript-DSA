# Exponential Search Algorithm

## Overview
Exponential Search is useful for searching in unbounded or infinite-sized sorted arrays. It finds a range where the element could be, then applies Binary Search.

## Algorithm Steps
1. Check if the first element is the target.
2. Double the index `i` until `arr[i]` is greater than the target or out of bounds.
3. Perform Binary Search in the range [i/2, min(i, array.length - 1)].

## Time Complexity
- Worst Case: O(log n)
- Average Case: O(log n)
- Best Case: O(1)

## Space Complexity
- O(1)

## Advantages
- Very efficient on large sorted or infinite arrays
- Combines simplicity of Binary Search with a fast range finder

## Disadvantages
- Requires sorted data
- Slightly more complex than Binary Search

## Use Cases
- Searching in infinite lists or streams
- Search engines, large scale systems

## Implementation Notes
- Uses Binary Search after range is found
- Prevents going out of bounds by checking length before accessing index