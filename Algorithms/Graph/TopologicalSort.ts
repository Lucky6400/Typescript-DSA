// Topological Sort (for Directed Acyclic Graphs) in TypeScript
function topologicalSort(graph: Map<number, number[]>) {
  let visited = new Set<number>();
  let result: number[] = [];

  function dfs(node: number) {
    if (visited.has(node)) return;
    visited.add(node);

    graph.get(node)?.forEach((neighbor) => {
      dfs(neighbor);
    });

    result.push(node);
  }

  graph.forEach((_, node) => {
    if (!visited.has(node)) {
      dfs(node);
    }
  });

  return result.reverse();
}

// Usage
const g = new Map([
  [1, [2]],
  [2, [3]],
  [3, [4]],
  [4, []],
]);

console.log(topologicalSort(g));
