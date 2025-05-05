# Check if a number is a power of 2

## Overview
A number is a power of 2 if and only if it has exactly one bit set in its binary representation. This can be efficiently checked using the condition `(n & (n - 1)) === 0`.

## Algorithm Steps
1. Check if the number is greater than 0.
2. Perform the bitwise AND operation between the number and the number minus 1.
3. If the result is 0, the number is a power of 2.

## Time Complexity
- O(1), constant time check.
