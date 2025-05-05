# DP with Bitmasking (Advanced)

## Overview
Bitmasking is a technique that uses bit manipulation to represent subsets. This is often used for solving problems like the Traveling Salesman Problem (TSP) in dynamic programming.

## Algorithm Steps
1. Use a bitmask to represent the set of cities visited.
2. Use a DP table where dp[mask] stores the minimum cost to visit the cities represented by mask.

## Time Complexity
- O(n^2 * 2^n)

## Space Complexity
- O(n * 2^n)

## Use Cases
- Traveling Salesman Problem, subset optimization problems.

