# Bellman-Ford Algorithm

## Overview
Bellman-Ford Algorithm finds the shortest path from a starting node to all other nodes, and it can handle graphs with negative weight edges. It also detects negative weight cycles.

## Algorithm Steps
1. Initialize the distances to all vertices as infinity except for the start node (set to 0).
2. Relax all edges V-1 times, where V is the number of vertices.
3. Check for negative weight cycles by attempting to relax all edges one more time.

## Time Complexity
- O(V * E), where V is the number of vertices and E is the number of edges.

