# Fibonacci Algorithm (Recursion)

## Overview
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.

## Algorithm Steps
1. If the number is 0 or 1, return the number itself.
2. Otherwise, return the sum of Fibonacci(n-1) and Fibonacci(n-2).

## Time Complexity
- Worst Case: O(2^n) (due to redundant calculations)

## Space Complexity
- O(n) (due to the recursive call stack)

## Advantages
- Conceptually simple and elegant for solving recursive problems

## Disadvantages
- Very inefficient for large numbers due to repetitive calculations

## Use Cases
- In problems where you need to find nth terms in the Fibonacci sequence

## Implementation Notes
- This is a naive recursive implementation. It can be optimized using dynamic programming (memoization).