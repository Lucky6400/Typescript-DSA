# Gold Mine Problem (DP on Grids)

## Overview
The problem is to find the maximum amount of gold you can collect from a grid, starting from the left-most column, moving right while only being able to move right, right-up, or right-down.

## Algorithm Steps
1. Use a DP table where dp[i][j] stores the maximum gold that can be collected from the cell (i, j).
2. Fill the table by considering the maximum gold that can be obtained by moving right, right-up, or right-down.

## Time Complexity
- O(m * n)

## Space Complexity
- O(m * n)

## Use Cases
- Pathfinding problems in grids with variable values.

