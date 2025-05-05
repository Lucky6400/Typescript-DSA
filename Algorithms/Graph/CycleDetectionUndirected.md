# Cycle Detection in Undirected Graph

## Overview
Cycle detection in an undirected graph helps determine if a cycle exists. A cycle means there is a path that starts and ends at the same vertex without revisiting any vertex except the start.

## Algorithm Steps
1. Perform a DFS traversal.
2. Track visited nodes and their parent nodes to avoid false positives.
3. If a neighbor is visited and not the parent, a cycle is detected.

## Time Complexity
- O(V + E), where V is the number of vertices and E is the number of edges.

## Space Complexity
- O(V), where V is the number of vertices.

