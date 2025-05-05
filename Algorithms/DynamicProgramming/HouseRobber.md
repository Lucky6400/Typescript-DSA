# House Robber (1D DP)

## Overview
The problem is to determine the maximum amount of money you can rob from a series of houses, given that you cannot rob two adjacent houses.

## Algorithm Steps
1. Create a DP array where dp[i] stores the maximum money you can rob up to the i-th house.
2. At each house, decide whether to rob it or skip it, and update the DP table accordingly.

## Time Complexity
- O(n)

## Space Complexity
- O(n)

## Use Cases
- Optimizing decisions with constraints, such as non-adjacency in this case.

