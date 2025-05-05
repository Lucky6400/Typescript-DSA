# Linear Search Algorithm

## Overview
Linear Search is the simplest search algorithm. It checks each element of the array sequentially until the target element is found or the end of the array is reached.

## Algorithm Steps
1. Start from the first element in the array.
2. Compare each element with the target value.
3. If an element matches the target, return its index.
4. If the end of the array is reached without finding the target, return -1.

## Time Complexity
- Worst Case: O(n)
- Average Case: O(n)
- Best Case: O(1) (if the element is at the start)

## Space Complexity
- O(1) (No additional memory used)

## Advantages
- Very simple to implement
- Works on unsorted arrays

## Disadvantages
- Inefficient for large datasets
- Checks each element even if the target is near the end

## Use Cases
- Small or unsorted datasets
- When simplicity is more important than performance

## Implementation Notes
- Does not require sorting
- Can be used with any data type using generic functions in TypeScript