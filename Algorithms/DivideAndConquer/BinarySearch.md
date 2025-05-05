# Binary Search (Divide and Conquer)

## Overview
Binary Search is a fast search algorithm that works by dividing the search space in half with each iteration.

## Algorithm Steps
1. Start with the middle element of the array.
2. If the middle element is the target, return its index.
3. If the target is smaller, repeat the search on the left half.
4. If the target is larger, repeat the search on the right half.

## Time Complexity
- Worst Case: O(log n)

## Space Complexity
- O(1)

## Advantages
- Very efficient search algorithm for sorted arrays.

## Disadvantages
- Requires sorted input.

## Use Cases
- Searching in sorted datasets

## Implementation Notes
- This algorithm has a significant time advantage over linear search in large datasets due to its logarithmic time complexity.