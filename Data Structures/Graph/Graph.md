# Graph Data Structure

A Graph is a non-linear data structure consisting of vertices (or nodes) and edges that connect these vertices. A graph can be either directed (edges have a direction) or undirected (edges have no direction). We provide two implementations:

1. `UnweightedGraph` - A basic graph implementation without edge weights
2. `Graph` - An extended implementation that supports weighted edges and Dijkstra's algorithm

## Implementation Details

Both implementations use an adjacency list representation, but with different underlying data structures:

### UnweightedGraph
- Uses `Map<T, Set<T>>` for storing vertices and their adjacent vertices
- Simpler implementation suitable for basic graph operations
- More memory efficient when weights are not needed

### Graph (Weighted)
- Uses `Map<T, Map<T, number>>` for storing vertices and their weighted edges
- Supports edge weights for more complex graph algorithms
- Includes Dijkstra's algorithm for finding shortest paths

### Common Properties
- `isDirected: boolean` - Indicates if the graph is directed
- Both implementations support directed and undirected graphs

## Common Methods

1. `addVertex(vertex: T): void`
   - Adds a new vertex to the graph
   - Time Complexity: O(1)

2. `addEdge(source: T, destination: T, weight?: number): void`
   - Adds an edge between two vertices
   - Weighted version accepts an optional weight parameter
   - Time Complexity: O(1)

3. `removeVertex(vertex: T): void`
   - Removes a vertex and all its edges
   - Time Complexity: O(V + E) where V is vertices and E is edges

4. `removeEdge(source: T, destination: T): void`
   - Removes an edge between two vertices
   - Time Complexity: O(1)

5. `getVertices(): T[]`
   - Returns all vertices in the graph
   - Time Complexity: O(V)

6. `getEdges(): [T, T][]` or `[T, T, number][]`
   - Returns all edges in the graph
   - Weighted version includes edge weights
   - Time Complexity: O(V + E)

7. `getNeighbors(vertex: T): T[]` or `[T, number][]`
   - Returns all neighbors of a vertex
   - Weighted version includes edge weights
   - Time Complexity: O(V)

8. `hasVertex(vertex: T): boolean`
   - Checks if a vertex exists
   - Time Complexity: O(1)

9. `hasEdge(source: T, destination: T): boolean`
   - Checks if an edge exists
   - Time Complexity: O(1)

10. `bfs(startVertex: T): T[]`
    - Performs Breadth-First Search
    - Time Complexity: O(V + E)

11. `dfs(startVertex: T): T[]`
    - Performs Depth-First Search
    - Time Complexity: O(V + E)

12. `getVertexCount(): number`
    - Returns the number of vertices
    - Time Complexity: O(1)

13. `getEdgeCount(): number`
    - Returns the number of edges
    - Time Complexity: O(V)

14. `clear(): void`
    - Removes all vertices and edges
    - Time Complexity: O(1)

## Weighted Graph Additional Methods

1. `getEdgeWeight(source: T, destination: T): number | undefined`
   - Returns the weight of an edge
   - Returns undefined if edge doesn't exist
   - Time Complexity: O(1)

2. `dijkstra(startVertex: T): Map<T, { distance: number; path: T[] }>`
   - Finds shortest paths from a source vertex
   - Returns a map with distances and paths to all reachable vertices
   - Time Complexity: O((V + E) log V)

## Example Usage

### Unweighted Graph
```typescript
const graph = new UnweightedGraph<number>();
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 1);
console.log(graph.getVertices()); // [1, 2, 3]
console.log(graph.getEdges()); // [[1, 2], [2, 3], [3, 1]]
console.log(graph.bfs(1)); // [1, 2, 3]
console.log(graph.dfs(1)); // [1, 2, 3]
```

### Weighted Graph
```typescript
const graph = new Graph<number>();
graph.addEdge(1, 2, 4);
graph.addEdge(2, 3, 2);
graph.addEdge(3, 1, 1);
console.log(graph.getVertices()); // [1, 2, 3]
console.log(graph.getEdges()); // [[1, 2, 4], [2, 3, 2], [3, 1, 1]]
console.log(graph.bfs(1)); // [1, 2, 3]
console.log(graph.dfs(1)); // [1, 2, 3]
const shortestPaths = graph.dijkstra(1);
console.log(shortestPaths.get(3)); // { distance: 3, path: [1, 3] }
```

## Common Applications

1. Social Networks
   - Users as vertices
   - Relationships as edges

2. Road Networks
   - Intersections as vertices
   - Roads as edges (weighted by distance/travel time)

3. Computer Networks
   - Devices as vertices
   - Connections as edges

4. Web Pages
   - Pages as vertices
   - Links as edges

5. Dependency Management
   - Modules as vertices
   - Dependencies as edges

## Graph Traversal

### Breadth-First Search (BFS)
- Explores neighbors before moving to next level
- Uses a queue
- Applications:
  - Shortest path in unweighted graph
  - Level-order traversal
  - Finding connected components

### Depth-First Search (DFS)
- Explores as far as possible before backtracking
- Uses recursion or stack
- Applications:
  - Topological sorting
  - Cycle detection
  - Path finding

### Dijkstra's Algorithm
- Finds shortest paths in weighted graphs
- Uses priority queue
- Applications:
  - GPS navigation
  - Network routing
  - Resource allocation

## Advantages

1. Represents relationships naturally
2. Flexible structure
3. Powerful for modeling real-world problems
4. Supports both directed and undirected relationships
5. Weighted version supports complex algorithms

## Disadvantages

1. Can be complex to implement
2. Memory intensive
3. Some operations can be computationally expensive
4. May require additional data structures for efficient operations

## Time Complexity

| Operation      | Unweighted | Weighted |
|---------------|-----------|----------|
| Add Vertex    | O(1)      | O(1)     |
| Add Edge      | O(1)      | O(1)     |
| Remove Vertex | O(V + E)  | O(V + E) |
| Remove Edge   | O(1)      | O(1)     |
| BFS           | O(V + E)  | O(V + E) |
| DFS           | O(V + E)  | O(V + E) |
| Dijkstra      | N/A       | O((V+E)logV) |

## Space Complexity

- Adjacency List: O(V + E)
- BFS/DFS: O(V) additional space
- Dijkstra: O(V) additional space

## Variations

1. Weighted Graph
   - Edges have weights/costs
   - Used in shortest path algorithms

2. Directed Graph (Digraph)
   - Edges have direction
   - Used in dependency graphs

3. Undirected Graph
   - Edges have no direction
   - Used in social networks

4. Cyclic/Acyclic Graph
   - With/without cycles
   - DAG (Directed Acyclic Graph) for dependencies

## Best Practices

1. Choose appropriate graph type (directed/undirected)
2. Use weighted version when edge weights are needed
3. Consider using unweighted version for simpler cases
4. Implement proper error handling
5. Use efficient data structures for specific operations
6. Consider memory usage for large graphs
7. Implement cycle detection if needed
8. Add traversal methods based on use case 