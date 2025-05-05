# Fast Exponentiation

## Overview
Fast Exponentiation (also known as Exponentiation by Squaring) is a method used to compute large powers efficiently.

## Algorithm Steps
1. While the exponent is greater than 0:
   - If the exponent is odd, multiply the result by the base.
   - Square the base and halve the exponent.
2. Return the result.

## Time Complexity
- O(log n), where n is the exponent.

## Space Complexity
- O(1).
