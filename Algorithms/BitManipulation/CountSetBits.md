# Count Set Bits (1s)

## Overview
This algorithm counts the number of 1s (set bits) in the binary representation of a number.

## Algorithm Steps
1. Initialize a counter to 0.
2. Iterate through each bit of the number by continuously shifting the bits to the right.
3. At each step, check if the current bit is set (i.e., 1) using bitwise AND with 1.
4. Increment the counter for every set bit.

## Time Complexity
- O(log n), where n is the number.

