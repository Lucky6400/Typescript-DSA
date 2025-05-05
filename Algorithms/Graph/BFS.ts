// BFS (Breadth-First Search) in TypeScript
function bfs(graph: Map<number, number[]>, start: number) {
  let visited = new Set<number>();
  let queue = [start];

  visited.add(start);

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node);

    graph.get(node)?.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    });
  }
}

// Usage
const g = new Map([
  [1, [2, 3]],
  [2, [1, 4]],
  [3, [1, 4]],
  [4, [2, 3]],
]);

bfs(g, 1);
