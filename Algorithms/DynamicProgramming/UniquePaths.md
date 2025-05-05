# Unique Paths (DP on Grids)

## Overview
The problem involves finding the number of unique paths from the top-left corner to the bottom-right corner of a grid, where you can only move either down or right.

## Algorithm Steps
1. Use a DP table where dp[i][j] stores the number of ways to reach the cell (i, j).
2. The value of each cell is the sum of the cell above it and the cell to the left of it.

## Time Complexity
- O(m * n)

## Space Complexity
- O(m * n)

## Use Cases
- Pathfinding problems on grids, such as robotics and game pathfinding.

