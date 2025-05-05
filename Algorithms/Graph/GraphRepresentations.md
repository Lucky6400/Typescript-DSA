# Graph Representations

## Overview
In graph theory, there are two common ways to represent a graph:

1. **Adjacency List**: A list of vertices where each vertex stores a list of its adjacent vertices.
2. **Adjacency Matrix**: A 2D array where each cell represents whether there is an edge between two vertices.

## Algorithm Steps (Adjacency List)
1. Create a map where the key is a vertex and the value is an array of its adjacent vertices.
2. Add vertices and edges as needed.
3. Print or process the graph.

## Time Complexity
- **Adjacency List**: 
  - Space Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
  - Access time for edges: O(V) for a given vertex.
  
- **Adjacency Matrix**:
  - Space Complexity: O(V^2), where V is the number of vertices.
  - Access time for edges: O(1).

