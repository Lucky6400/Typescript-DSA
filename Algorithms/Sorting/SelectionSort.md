# Selection Sort Algorithm

## Overview
Selection Sort is a simple comparison-based sorting algorithm. It repeatedly finds the minimum element from the unsorted part and swaps it with the first unsorted element.

## Algorithm Steps
1. Start with the first element.
2. Find the smallest element in the unsorted part of the array.
3. Swap the smallest element with the first unsorted element.
4. Repeat the process for the rest of the array.

## Time Complexity
- Worst Case: O(n²)
- Average Case: O(n²)
- Best Case: O(n²)

## Space Complexity
- O(1) (In-place sorting algorithm)

## Advantages
- Simple to implement
- No additional memory space required

## Disadvantages
- Very slow for large datasets
- Not suitable for real-world applications with large data

## Use Cases
- Educational purposes
- Small datasets
- When simplicity is more important than efficiency

## Implementation Notes
- The algorithm repeatedly selects the smallest element in the unsorted portion and moves it to the sorted portion of the array.