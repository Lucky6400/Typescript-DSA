# Maximum Subarray (Kadane’s Algorithm) (Divide and Conquer)

## Overview
Kadane’s Algorithm is a divide and conquer algorithm used to find the maximum sum of a contiguous subarray in a one-dimensional numerical array.

## Algorithm Steps
1. Initialize two variables: maxSum and currentSum.
2. Iterate through the array, at each step update currentSum to be the maximum of the current element or the sum of the current element and the currentSum.
3. Update maxSum to be the maximum of maxSum and currentSum.

## Time Complexity
- Worst Case: O(n)

## Space Complexity
- O(1)

## Advantages
- Efficient for finding the maximum subarray sum.

## Disadvantages
- Works only for one-dimensional arrays.

## Use Cases
- Maximum sum problems
- Financial analysis (e.g., maximum profit)

## Implementation Notes
- Kadane's algorithm is optimal for solving the maximum subarray sum problem in linear time.