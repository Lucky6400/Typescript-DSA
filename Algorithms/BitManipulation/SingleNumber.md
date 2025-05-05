# Single Number (XOR)

## Overview
This algorithm finds the single number in an array where every other number appears twice. It uses the XOR operator, which has the property that `a ^ a = 0` and `a ^ 0 = a`.

## Algorithm Steps
1. Initialize a variable to store the result, starting with 0.
2. XOR every element of the array with the result.
3. The result will be the number that appears only once.

## Time Complexity
- O(n), where n is the length of the array.

