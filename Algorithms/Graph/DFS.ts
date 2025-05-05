// DFS (Depth-First Search) in TypeScript
function dfs(graph: Map<number, number[]>, start: number) {
  let visited = new Set<number>();

  function explore(node: number) {
    visited.add(node);
    console.log(node);

    graph.get(node)?.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        explore(neighbor);
      }
    });
  }

  explore(start);
}

// Usage
const g = new Map([
  [1, [2, 3]],
  [2, [1, 4]],
  [3, [1, 4]],
  [4, [2, 3]],
]);

dfs(g, 1);
