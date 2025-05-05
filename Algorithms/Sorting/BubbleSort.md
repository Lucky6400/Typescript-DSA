# Bubble Sort Algorithm

## Overview
Bubble Sort is one of the simplest sorting algorithms that works by repeatedly swapping adjacent elements if they are in the wrong order. This process is repeated until the array is sorted.

## Algorithm Steps
1. Start from the first element of the array
2. Compare the current element with the next element
3. If the current element is greater than the next element, swap them
4. Move to the next element and repeat steps 2-3
5. Continue this process until no more swaps are needed

## Time Complexity
- Worst Case: O(n²)
- Average Case: O(n²)
- Best Case: O(n) (when array is already sorted)

## Space Complexity
- O(1) (In-place sorting algorithm)

## Advantages
- Simple to understand and implement
- No additional memory space required
- Stable sorting algorithm

## Disadvantages
- Very slow for large datasets
- Not suitable for real-world applications with large data

## Use Cases
- Educational purposes
- Small datasets
- When simplicity is more important than efficiency

## Implementation Notes
- The algorithm gets its name from the way smaller elements "bubble" to the top of the list
- Each pass through the list places the next largest value in its proper place
- The algorithm can be optimized by stopping if no swaps occur in a pass