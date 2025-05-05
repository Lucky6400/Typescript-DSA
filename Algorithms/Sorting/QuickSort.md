# Quick Sort Algorithm

## Overview
Quick Sort is an efficient divide-and-conquer sorting algorithm that selects a pivot element and partitions the array into two sub-arrays, which are then recursively sorted.

## Algorithm Steps
1. Select a pivot element.
2. Partition the array into two sub-arrays: one with elements less than the pivot and one with elements greater than the pivot.
3. Recursively sort the sub-arrays.
4. Concatenate the sorted sub-arrays and pivot.

## Time Complexity
- Worst Case: O(n²)
- Average Case: O(n log n)
- Best Case: O(n log n)

## Space Complexity
- O(log n) (for recursive calls)

## Advantages
- Very efficient for large datasets
- In-place sorting algorithm

## Disadvantages
- Poor performance on already sorted or nearly sorted arrays
- Unstable sorting algorithm

## Use Cases
- Large datasets
- When in-place sorting is required

## Implementation Notes
- Quick Sort is efficient for large datasets but can degrade to O(n²) in the worst case.