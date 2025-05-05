# Dijkstra’s Algorithm (Shortest Path)

## Overview
Dijkstra's Algorithm finds the shortest path from a starting node to all other nodes in a weighted graph with non-negative edge weights.

## Algorithm Steps
1. Initialize distances from the start node to infinity, except for the start node (set to 0).
2. Use a priority queue to explore nodes, starting with the start node.
3. For each node, update the shortest distance to its neighbors.
4. Repeat until all nodes have been visited.

## Time Complexity
- O(E log V), where V is the number of vertices and E is the number of edges.

