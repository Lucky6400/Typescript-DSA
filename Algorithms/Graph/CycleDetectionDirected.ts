// Cycle Detection in Directed Graph (DFS) in TypeScript
function hasCycleDirected(graph: Map<number, number[]>): boolean {
  let visited = new Set<number>();
  let inStack = new Set<number>();

  function dfs(node: number): boolean {
    if (inStack.has(node)) return true;
    if (visited.has(node)) return false;

    visited.add(node);
    inStack.add(node);

    for (let neighbor of graph.get(node) || []) {
      if (dfs(neighbor)) return true;
    }

    inStack.delete(node);
    return false;
  }

  for (let node of graph.keys()) {
    if (!visited.has(node)) {
      if (dfs(node)) return true;
    }
  }

  return false;
}

// Usage
const g = new Map([
  [1, [2]],
  [2, [3]],
  [3, [1]],
]);

console.log(hasCycleDirected(g));
