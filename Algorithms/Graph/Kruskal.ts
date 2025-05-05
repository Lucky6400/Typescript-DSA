// Kruskal’s Algorithm for Minimum Spanning Tree in TypeScript
function kruskal(graph: [number, number, number][], vertices: number): [number, number][] {
  const parent: number[] = [];
  const rank: number[] = [];
  const mst: [number, number][] = [];

  // Initialize disjoint set
  for (let i = 0; i < vertices; i++) {
    parent[i] = i;
    rank[i] = 0;
  }

  function find(u: number): number {
    if (parent[u] !== u) {
      parent[u] = find(parent[u]);
    }
    return parent[u];
  }

  function union(u: number, v: number): boolean {
    let rootU = find(u);
    let rootV = find(v);

    if (rootU !== rootV) {
      if (rank[rootU] > rank[rootV]) {
        parent[rootV] = rootU;
      } else if (rank[rootU] < rank[rootV]) {
        parent[rootU] = rootV;
      } else {
        parent[rootV] = rootU;
        rank[rootU]++;
      }
      return true;
    }
    return false;
  }

  // Sort edges by weight
  graph.sort((a, b) => a[2] - b[2]);

  // Process edges
  for (let [u, v, weight] of graph) {
    if (union(u, v)) {
      mst.push([u, v]);
    }
  }

  return mst;
}

// Usage
const graph = [
  [0, 1, 10],
  [0, 2, 6],
  [0, 3, 5],
  [1, 3, 15],
  [2, 3, 4]
];

console.log(kruskal(graph, 4));
