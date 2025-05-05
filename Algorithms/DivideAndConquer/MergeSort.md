# Merge Sort (Divide and Conquer)

## Overview
Merge Sort is a divide and conquer algorithm that divides the array into halves and sorts them recursively before merging them back together.

## Algorithm Steps
1. Divide the unsorted list into two sublists of roughly equal size.
2. Recursively sort each sublist.
3. Merge the two sorted sublists into one sorted list.

## Time Complexity
- Worst Case: O(n log n)

## Space Complexity
- O(n) (for the temporary arrays used during merging)

## Advantages
- Efficient and stable sorting algorithm.

## Disadvantages
- Requires extra space for merging.

## Use Cases
- Sorting large datasets

## Implementation Notes
- The divide step splits the array into two halves, and the conquer step recursively sorts them. The merge step combines the sorted arrays.