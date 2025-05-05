# Kosaraju’s Algorithm (Strongly Connected Components)

## Overview
Kosaraju’s Algorithm is used to find the strongly connected components (SCC) in a directed graph. It uses two DFS passes to identify SCCs.

## Algorithm Steps
1. Perform a DFS to determine the finishing order of vertices.
2. Reverse the graph.
3. Perform a DFS on the reversed graph using the finishing order from step 1.
4. Each DFS tree in the second pass represents an SCC.

## Time Complexity
- O(V + E), where V is the number of vertices and E is the number of edges.

