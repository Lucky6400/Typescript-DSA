# Counting Sort

## Overview
Counting Sort is a non-comparison-based sorting algorithm that works by counting the occurrences of each element in the input array and using that information to place elements in their correct positions. It's particularly efficient when the range of input values is not significantly larger than the number of elements to be sorted.

## How It Works
1. Find the maximum value in the input array
2. Create a count array of size (max + 1) initialized with zeros
3. Count the occurrences of each element in the input array
4. Calculate cumulative counts to determine the position of each element
5. Build the output array by placing elements in their correct positions

## Time Complexity
- Best Case: O(n + k)
- Average Case: O(n + k)
- Worst Case: O(n + k)
where n is the number of elements and k is the range of input

## Space Complexity
- O(n + k) where n is the number of elements and k is the range of input

## Advantages
- Linear time complexity when k is small
- Stable sorting algorithm
- No comparisons between elements
- Works well with duplicate elements

## Disadvantages
- Requires extra space
- Not suitable for large ranges of values
- Only works with non-negative integers
- Requires knowing the range of input values

## Use Cases
- Sorting arrays with a small range of values
- When the range of input values is known
- When stability is required
- When dealing with non-negative integers

## Example
Input: [4, 2, 2, 8, 3, 3, 1]
Output: [1, 2, 2, 3, 3, 4, 8]

## Implementation Notes
- The algorithm requires the input to be non-negative integers
- The range of input values should be reasonably small
- The implementation uses a count array to store frequencies
- The algorithm is stable, maintaining the relative order of equal elements 