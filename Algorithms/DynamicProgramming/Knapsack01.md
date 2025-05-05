# Knapsack Problem (0/1) (2D DP)

## Overview
The 0/1 Knapsack problem involves finding the most valuable combination of items to include in a knapsack of limited capacity.

## Algorithm Steps
1. Use a DP table where dp[i][w] represents the maximum value achievable using the first i items and a knapsack of capacity w.
2. Fill the table iteratively, considering whether to include or exclude each item.

## Time Complexity
- O(n * W) (where n is the number of items and W is the maximum capacity of the knapsack)

## Space Complexity
- O(n * W)

## Use Cases
- Resource allocation problems with constraints.

