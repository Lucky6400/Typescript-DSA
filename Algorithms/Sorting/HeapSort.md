# Heap Sort Algorithm

## Overview
Heap Sort is a comparison-based sorting algorithm that utilizes a binary heap data structure to build a sorted array.

## Algorithm Steps
1. Build a max heap from the input array.
2. Swap the root of the heap with the last element.
3. Heapify the reduced heap to maintain the max heap property.
4. Repeat until the array is sorted.

## Time Complexity
- Worst Case: O(n log n)
- Average Case: O(n log n)
- Best Case: O(n log n)

## Space Complexity
- O(1) (In-place sorting algorithm)

## Advantages
- Efficient for large datasets
- In-place sorting algorithm

## Disadvantages
- Not stable
- Complex to implement compared to other sorting algorithms

## Use Cases
- Large datasets
- When in-place sorting is required

## Implementation Notes
- Heap Sort is efficient for large datasets but is not stable and requires more time to implement than simpler algorithms like Quick Sort.