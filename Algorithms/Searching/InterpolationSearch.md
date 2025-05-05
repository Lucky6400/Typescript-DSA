# Interpolation Search Algorithm

## Overview
Interpolation Search is an improved variant of Binary Search. It tries to find the exact position of the target using mathematical interpolation.

## Algorithm Steps
1. Set low and high pointers at the array bounds.
2. Calculate the estimated position using the formula:
   `pos = low + ((high - low) / (arr[high] - arr[low])) * (target - arr[low])`
3. If element at pos is the target, return pos.
4. If element at pos is less, search right half.
5. If element at pos is more, search left half.
6. Repeat until found or range is invalid.

## Time Complexity
- Worst Case: O(n)
- Average Case: O(log log n)
- Best Case: O(1)

## Space Complexity
- O(1)

## Advantages
- Faster than Binary Search on uniformly distributed data

## Disadvantages
- Can perform poorly on skewed data
- Requires sorted data

## Use Cases
- Phone directories, student records, large databases with uniform distribution

## Implementation Notes
- Works best on uniformly distributed sorted data