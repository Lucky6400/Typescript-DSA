# Trapping Rain Water (Two Pointers)

## Overview
The problem involves finding the amount of water that can be trapped between the bars after rainfall, given an array where each element represents the height of a bar.

## Algorithm Steps
1. Use two pointers, `left` and `right`, to represent the range of bars.
2. Track the maximum heights encountered from the left and right sides (`leftMax` and `rightMax`).
3. Calculate the trapped water based on the smaller of the two maximum heights at each step.

## Time Complexity
- O(n), where `n` is the number of bars in the array.

## Space Complexity
- O(1), since no additional space is used.

## Use Cases
- Water storage problems, optimization in terrain analysis.

