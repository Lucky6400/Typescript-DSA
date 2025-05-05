// Cycle Detection in Undirected Graph (DFS) in TypeScript
function hasCycleUndirected(graph: Map<number, number[]>): boolean {
  let visited = new Set<number>();

  function dfs(node: number, parent: number): boolean {
    visited.add(node);

    for (let neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        return true;
      }
    }

    return false;
  }

  for (let node of graph.keys()) {
    if (!visited.has(node)) {
      if (dfs(node, -1)) return true;
    }
  }

  return false;
}

// Usage
const g = new Map([
  [1, [2]],
  [2, [1, 3]],
  [3, [2]],
]);

console.log(hasCycleUndirected(g));
