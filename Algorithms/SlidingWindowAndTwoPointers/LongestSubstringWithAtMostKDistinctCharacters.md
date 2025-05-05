# Longest Substring with At Most K Distinct Characters (Sliding Window)

## Overview
The problem is to find the length of the longest substring with at most `k` distinct characters.

## Algorithm Steps
1. Use two pointers, `left` and `right`, to represent the sliding window.
2. Expand the window by moving the `right` pointer and include new characters.
3. If the number of distinct characters exceeds `k`, shrink the window from the left by moving the `left` pointer.
4. Track the maximum length of the window with at most `k` distinct characters.

## Time Complexity
- O(n), where `n` is the length of the string.

## Space Complexity
- O(k), where `k` is the number of distinct characters allowed in the window.

## Use Cases
- Analyzing substrings with certain constraints, such as in pattern matching.

