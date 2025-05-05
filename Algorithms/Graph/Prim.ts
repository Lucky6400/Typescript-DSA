// Prim’s Algorithm for Minimum Spanning Tree in TypeScript
function prim(graph: Map<number, Map<number, number>>): Map<number, number> {
  let mst: Map<number, number> = new Map();
  let visited = new Set<number>();
  let pq = new PriorityQueue();

  pq.enqueue(0, 0);

  while (!pq.isEmpty()) {
    let { value: node, priority: weight } = pq.dequeue();
    if (visited.has(node)) continue;
    visited.add(node);

    if (mst.has(node)) {
      mst.set(node, weight);
    }

    for (let [neighbor, w] of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        pq.enqueue(neighbor, w);
      }
    }
  }

  return mst;
}

// Usage
const graph = new Map<number, Map<number, number>>([
  [0, new Map([[1, 2], [3, 3]])],
  [1, new Map([[0, 2], [3, 2], [2, 3]])],
  [2, new Map([[1, 3], [3, 4]])],
  [3, new Map([[0, 3], [1, 2], [2, 4]])]
]);

console.log(prim(graph));
