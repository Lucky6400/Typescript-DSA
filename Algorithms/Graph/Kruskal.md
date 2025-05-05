# Kruskal’s Algorithm (Minimum Spanning Tree)

## Overview
Kruskal's Algorithm is a greedy algorithm that finds the minimum spanning tree (MST) of a weighted undirected graph by processing edges in increasing order of weight.

## Algorithm Steps
1. Sort all edges in the graph by weight.
2. Initialize a disjoint-set data structure to track connected components.
3. Add edges to the MST, ensuring no cycles are formed.

## Time Complexity
- O(E log E), where E is the number of edges.

