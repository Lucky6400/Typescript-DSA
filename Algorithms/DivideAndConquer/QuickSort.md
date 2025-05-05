# Quick Sort (Divide and Conquer)

## Overview
Quick Sort is a divide and conquer algorithm that partitions an array into two sub-arrays and then sorts them recursively.

## Algorithm Steps
1. Choose a pivot element from the array.
2. Partition the array into two sub-arrays: one containing elements smaller than the pivot, and the other containing elements larger than the pivot.
3. Recursively apply Quick Sort on the sub-arrays.

## Time Complexity
- Worst Case: O(n²) (when the pivot is the smallest or largest element)
- Average Case: O(n log n)

## Space Complexity
- O(log n) (for the recursive stack)

## Advantages
- Fast for large datasets
- In-place sorting (no extra space required for merging)

## Disadvantages
- Worst-case time complexity is O(n²) for an unlucky pivot selection.

## Use Cases
- Sorting large datasets

## Implementation Notes
- The algorithm is often implemented using the Lomuto or Hoare partitioning scheme.