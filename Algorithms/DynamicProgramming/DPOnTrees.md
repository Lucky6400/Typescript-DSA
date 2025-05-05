# DP on Trees (Advanced)

## Overview
This problem involves using dynamic programming on a tree structure. It is often used in problems like maximizing or minimizing certain values in tree-based structures.

## Algorithm Steps
1. Use DFS to traverse the tree and calculate two values for each node: the maximum value when including the node and the maximum value when excluding the node.
2. Use the results of subproblems to build the solution for the entire tree.

## Time Complexity
- O(n) (where n is the number of nodes in the tree)

## Space Complexity
- O(n) (for recursion stack and DP table)

## Use Cases
- Tree-based optimization problems, such as house robber on a tree structure.

