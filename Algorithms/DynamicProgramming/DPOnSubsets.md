# DP on Subsets (Advanced)

## Overview
The subset sum problem asks whether a subset of a set of numbers exists that adds up to a given target. This can be solved efficiently using dynamic programming.

## Algorithm Steps
1. Use a DP table where dp[i] represents whether it is possible to get a sum of i from a subset of the given numbers.
2. Iteratively update the table based on the current number being processed.

## Time Complexity
- O(n * target) (where n is the number of elements in the input set)

## Space Complexity
- O(target)

## Use Cases
- Subset sum problems, partitioning problems.

