# Merge Sort Algorithm

## Overview
Merge Sort is a divide-and-conquer algorithm that divides the array into two halves, recursively sorts them, and merges them back together in sorted order.

## Algorithm Steps
1. Split the array into two halves.
2. Recursively sort each half.
3. Merge the two sorted halves into a single sorted array.

## Time Complexity
- Worst Case: O(n log n)
- Average Case: O(n log n)
- Best Case: O(n log n)

## Space Complexity
- O(n) (Due to auxiliary space required for merging)

## Advantages
- Very efficient for large datasets
- Stable sorting algorithm

## Disadvantages
- Requires additional space for merging
- Slower than other algorithms for small datasets

## Use Cases
- Large datasets
- Sorting linked lists
- When stability is important

## Implementation Notes
- Merge Sort works best for large datasets but uses additional space for the merged arrays.