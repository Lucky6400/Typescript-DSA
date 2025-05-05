# Topological Sort

## Overview
Topological Sort is a linear ordering of vertices in a directed graph where for every directed edge `u -> v`, vertex `u` comes before vertex `v`.

## Algorithm Steps
1. Perform a DFS traversal of the graph.
2. Add each node to the result after visiting all its neighbors.
3. Reverse the result at the end.

## Time Complexity
- O(V + E), where V is the number of vertices and E is the number of edges.

## Space Complexity
- O(V), where V is the number of vertices.

