// Bellman-Ford Algorithm for Shortest Path in TypeScript
function bellmanFord(graph: [number, number, number][], vertices: number, start: number): number[] {
  let distances = new Array(vertices).fill(Infinity);
  distances[start] = 0;

  for (let i = 0; i < vertices - 1; i++) {
    for (let [u, v, w] of graph) {
      if (distances[u] + w < distances[v]) {
        distances[v] = distances[u] + w;
      }
    }
  }

  // Detect negative weight cycle
  for (let [u, v, w] of graph) {
    if (distances[u] + w < distances[v]) {
      throw new Error('Graph contains negative weight cycle');
    }
  }

  return distances;
}

// Usage
const graph = [
  [0, 1, -1],
  [0, 2, 4],
  [1, 2, 3],
  [1, 3, 2],
  [1, 4, 2],
  [3, 2, 5],
  [3, 4, 1],
  [4, 3, -3]
];

console.log(bellmanFord(graph, 5, 0));
