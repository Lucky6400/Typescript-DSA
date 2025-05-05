# Container With Most Water (Two Pointers)

## Overview
The problem involves finding the maximum area of water that can be trapped between two bars, given an array of bar heights.

## Algorithm Steps
1. Use two pointers, `left` and `right`, to represent the two bars.
2. Calculate the area between the two bars as the minimum of their heights multiplied by the width between them.
3. Move the pointer pointing to the shorter bar inward to try and find a larger area.

## Time Complexity
- O(n), where `n` is the number of bars in the array.

## Space Complexity
- O(1)

## Use Cases
- Container size optimization problems, like water storage.

