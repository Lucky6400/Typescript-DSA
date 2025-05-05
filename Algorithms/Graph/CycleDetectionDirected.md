# Cycle Detection in Directed Graph

## Overview
Cycle detection in a directed graph helps identify if a cycle exists. A cycle means there is a path that starts and ends at the same vertex.

## Algorithm Steps
1. Perform a DFS traversal.
2. Track nodes currently in the recursion stack.
3. If a node is revisited within the recursion stack, a cycle is detected.

## Time Complexity
- O(V + E), where V is the number of vertices and E is the number of edges.

## Space Complexity
- O(V), where V is the number of vertices.

