# Floyd-Warshall Algorithm (All-Pairs Shortest Path)

## Overview
Floyd-Warshall Algorithm finds the shortest paths between all pairs of nodes in a graph. It works on both directed and undirected graphs.

## Algorithm Steps
1. Initialize a distance matrix where dist[i][j] represents the shortest path from node i to node j.
2. Iterate over each node as an intermediate node and update the distances.
3. After all iterations, the matrix will contain the shortest paths between all pairs of nodes.

## Time Complexity
- O(V^3), where V is the number of vertices.

