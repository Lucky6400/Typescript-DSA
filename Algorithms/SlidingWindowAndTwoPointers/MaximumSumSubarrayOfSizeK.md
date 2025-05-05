# Maximum Sum Subarray of Size K (Sliding Window)

## Overview
The problem is to find the maximum sum of a subarray of size `k` from a given array.

## Algorithm Steps
1. Compute the sum of the first `k` elements.
2. Slide the window across the array, updating the sum by subtracting the element that goes out of the window and adding the new element that comes into the window.
3. Track the maximum sum encountered during this process.

## Time Complexity
- O(n), where `n` is the number of elements in the array.

## Space Complexity
- O(1)

## Use Cases
- Analyzing time-series data, financial data analysis, etc.

