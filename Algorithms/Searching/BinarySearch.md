# Binary Search Algorithm

## Overview
Binary Search is an efficient search algorithm that works on sorted arrays by repeatedly dividing the search interval in half.

## Algorithm Steps
1. Set two pointers: left at the start and right at the end of the array.
2. Calculate the middle index.
3. If the middle element matches the target, return its index.
4. If the target is less than the middle element, search in the left half.
5. If the target is greater, search in the right half.
6. Repeat steps 2-5 until the element is found or the range becomes invalid.

## Time Complexity
- Worst Case: O(log n)
- Average Case: O(log n)
- Best Case: O(1)

## Space Complexity
- O(1) for iterative approach
- O(log n) for recursive approach (due to call stack)

## Advantages
- Very efficient on large sorted datasets
- Simple to implement with loop or recursion

## Disadvantages
- Only works on sorted arrays
- Requires extra care with index calculations

## Use Cases
- Searching in sorted arrays, lists, or files
- Databases, search engines

## Implementation Notes
- Ensure input is sorted before applying Binary Search
- Can be implemented recursively or iteratively