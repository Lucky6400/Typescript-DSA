# Factorial Algorithm (Recursion)

## Overview
Factorial is a mathematical function that multiplies a number by every number below it, down to 1. It is defined as:
- 0! = 1
- n! = n * (n-1) * (n-2) * ... * 1

This can be solved easily using recursion.

## Algorithm Steps
1. If the number is 0 or 1, return 1.
2. Otherwise, return the number multiplied by the factorial of (n-1).

## Time Complexity
- Worst Case: O(n)

## Space Complexity
- O(n) (due to the recursive call stack)

## Advantages
- Simple and easy to understand

## Disadvantages
- May lead to stack overflow if the number is very large

## Use Cases
- Calculating factorials in combinatorics or probability problems

## Implementation Notes
- Base case is defined as n === 0 or n === 1 where the factorial is 1.