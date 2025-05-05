# Memoization vs Tabulation (Dynamic Programming)

## Overview
Dynamic Programming can be implemented using two approaches: Memoization and Tabulation.

- **Memoization**: Top-down approach where we store the results of subproblems to avoid redundant computations.
- **Tabulation**: Bottom-up approach where we build up the solution from smaller subproblems.

## Time Complexity
- Memoization: O(n)
- Tabulation: O(n)

## Space Complexity
- Memoization: O(n) (for the recursion stack and memoization array)
- Tabulation: O(n)

## Use Cases
- Both approaches are useful for problems where the solution involves overlapping subproblems.

## Advantages and Disadvantages
- **Memoization**: More intuitive but requires recursion and uses additional stack space.
- **Tabulation**: Iterative, generally more efficient in terms of space as it avoids recursion overhead.
