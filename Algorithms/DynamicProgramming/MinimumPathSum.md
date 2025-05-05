# Minimum Path Sum (DP on Grids)

## Overview
The problem is to find the minimum path sum from the top-left to the bottom-right of a grid. You can only move right or down.

## Algorithm Steps
1. Use a DP table where dp[i][j] stores the minimum sum to reach the cell (i, j).
2. Fill the table iteratively by considering the minimum sum from the cell above or to the left.

## Time Complexity
- O(m * n)

## Space Complexity
- O(m * n)

## Use Cases
- Shortest path problems with weighted grids.

