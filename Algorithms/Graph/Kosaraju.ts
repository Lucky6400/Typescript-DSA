// Kosaraju’s Algorithm for Strongly Connected Components (SCC) in TypeScript
function kosaraju(graph: number[][]): number[][] {
  const n = graph.length;
  const visited = new Array(n).fill(false);
  const stack: number[] = [];
  const scc: number[][] = [];

  function dfs1(v: number) {
    visited[v] = true;
    for (let neighbor of graph[v]) {
      if (!visited[neighbor]) {
        dfs1(neighbor);
      }
    }
    stack.push(v);
  }

  function dfs2(v: number, transposedGraph: number[][], component: number[]) {
    visited[v] = true;
    component.push(v);
    for (let neighbor of transposedGraph[v]) {
      if (!visited[neighbor]) {
        dfs2(neighbor, transposedGraph, component);
      }
    }
  }

  // Step 1: Fill stack with vertices in the order of finishing times
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs1(i);
    }
  }

  // Step 2: Create transposed graph
  const transposedGraph = graph.map(() => []);
  for (let i = 0; i < n; i++) {
    for (let j of graph[i]) {
      transposedGraph[j].push(i);
    }
  }

  // Step 3: Perform DFS on transposed graph
  visited.fill(false);
  while (stack.length) {
    const v = stack.pop()!;
    if (!visited[v]) {
      const component: number[] = [];
      dfs2(v, transposedGraph, component);
      scc.push(component);
    }
  }

  return scc;
}

// Usage
const graph = [
  [1],
  [2],
  [0, 3],
  [4],
  [5],
  [3]
];

console.log(kosaraju(graph));
