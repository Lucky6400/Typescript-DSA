# Insertion Sort Algorithm

## Overview
Insertion Sort works by building a sorted section of the array one element at a time by repeatedly inserting the next element in its correct position.

## Algorithm Steps
1. Start from the second element of the array.
2. Compare the element with the ones before it and insert it in the correct position.
3. Repeat this process for the remaining elements until the array is sorted.

## Time Complexity
- Worst Case: O(n²)
- Average Case: O(n²)
- Best Case: O(n) (when array is already sorted)

## Space Complexity
- O(1) (In-place sorting algorithm)

## Advantages
- Simple to implement
- Efficient for small or partially sorted datasets

## Disadvantages
- Inefficient for large datasets
- O(n²) time complexity in the worst case

## Use Cases
- Small datasets
- Arrays that are already partially sorted

## Implementation Notes
- The array is divided into a sorted and unsorted part. Elements are inserted into the sorted part one by one.