// Dijkstra’s Algorithm for Shortest Path in TypeScript
function dijkstra(graph: Map<number, Map<number, number>>, start: number): Map<number, number> {
  let distances = new Map<number, number>();
  let pq = new PriorityQueue();
  pq.enqueue(start, 0);
  distances.set(start, 0);

  while (!pq.isEmpty()) {
    let { value: node, priority: dist } = pq.dequeue();
    if (dist > (distances.get(node) || Infinity)) continue;

    for (let [neighbor, weight] of graph.get(node) || []) {
      let newDist = dist + weight;
      if (newDist < (distances.get(neighbor) || Infinity)) {
        distances.set(neighbor, newDist);
        pq.enqueue(neighbor, newDist);
      }
    }
  }

  return distances;
}

// Priority Queue for Dijkstra's Algorithm
class PriorityQueue {
  private queue: { value: number; priority: number }[] = [];

  enqueue(value: number, priority: number) {
    this.queue.push({ value, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

// Usage
const graph = new Map<number, Map<number, number>>([
  [1, new Map([[2, 1], [3, 4]])],
  [2, new Map([[1, 1], [3, 2], [4, 5]])],
  [3, new Map([[1, 4], [2, 2], [4, 1]])],
  [4, new Map([[2, 5], [3, 1]])],
]);

console.log(dijkstra(graph, 1));
