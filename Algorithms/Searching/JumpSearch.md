# Jump Search Algorithm

## Overview
Jump Search is a searching algorithm for sorted arrays. It works by jumping ahead by fixed steps and then performing a linear search in that block.

## Algorithm Steps
1. Determine the optimal block size (usually √n).
2. Jump ahead in the array by block size until the target is less than the current element.
3. Perform linear search within the identified block.
4. If found, return index; else, return -1.

## Time Complexity
- Worst Case: O(√n)
- Average Case: O(√n)
- Best Case: O(1)

## Space Complexity
- O(1)

## Advantages
- Faster than linear search for sorted arrays
- Easy to implement

## Disadvantages
- Still slower than Binary Search
- Only works on sorted data

## Use Cases
- Moderate-sized sorted arrays
- When Binary Search overhead isn't acceptable

## Implementation Notes
- Choose block size as square root of the array length for best performance