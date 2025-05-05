# Sum of Natural Numbers Algorithm (Recursion)

## Overview
The sum of natural numbers is simply the sum of all integers from 1 to n. This problem can be solved recursively.

## Algorithm Steps
1. If the number is 0, return 0.
2. Otherwise, return the number plus the sum of natural numbers up to (n-1).

## Time Complexity
- Worst Case: O(n)

## Space Complexity
- O(n) (due to the recursive call stack)

## Advantages
- Simple to implement and understand

## Disadvantages
- Recursion can cause stack overflow for very large inputs

## Use Cases
- Calculating the sum of a series in mathematical problems

## Implementation Notes
- The base case is when n === 0, where the recursion stops.