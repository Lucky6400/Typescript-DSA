# Bitmask Dynamic Programming

## Overview
Bitmask DP is a technique used in dynamic programming problems where the state is represented by a bitmask, which helps to reduce the state space and avoid recomputing subproblems.

## Algorithm Steps
1. Initialize a DP table to store results for all possible subsets.
2. Iterate through all subsets (represented by masks).
3. For each mask, update the DP table using the bitmask state transitions.
4. Return the final result from the DP table.

## Time Complexity
- O(2^n * n), where n is the number of elements.

