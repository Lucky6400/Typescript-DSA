# Radix Sort

## Overview
Radix Sort is a non-comparison-based sorting algorithm that sorts numbers by processing individual digits. It works by sorting numbers digit by digit, from least significant digit (LSD) to most significant digit (MSD) or vice versa. The algorithm uses a stable sorting algorithm (typically counting sort) as a subroutine to sort the digits.

## How It Works
1. Find the maximum number to determine the number of digits
2. For each digit position (from least significant to most significant):
   - Use counting sort to sort the numbers based on the current digit
   - Maintain the relative order of numbers with the same digit
3. After processing all digits, the array will be sorted

## Time Complexity
- Best Case: O(d * (n + k))
- Average Case: O(d * (n + k))
- Worst Case: O(d * (n + k))
where:
- n is the number of elements
- d is the number of digits in the largest number
- k is the base (10 for decimal numbers)

## Space Complexity
- O(n + k) where n is the number of elements and k is the base (10)

## Advantages
- Linear time complexity when d is small
- Stable sorting algorithm
- No comparisons between elements
- Works well with numbers of different lengths

## Disadvantages
- Requires extra space
- Only works with numbers
- Performance depends on the number of digits
- Requires a stable sorting subroutine

## Use Cases
- Sorting large numbers
- When the range of numbers is large
- When stability is required
- When dealing with numbers of different lengths

## Example
Input: [170, 45, 75, 90, 802, 24, 2, 66]
Output: [2, 24, 45, 66, 75, 90, 170, 802]

## Implementation Notes
- The algorithm uses counting sort as a subroutine
- It processes digits from least significant to most significant
- The implementation handles numbers of different lengths
- The algorithm is stable, maintaining the relative order of equal numbers 