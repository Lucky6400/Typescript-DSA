// Floyd-Warshall Algorithm for All-Pairs Shortest Path in TypeScript
function floydWarshall(graph: number[][]): number[][] {
  let dist = [...graph];

  for (let k = 0; k < graph.length; k++) {
    for (let i = 0; i < graph.length; i++) {
      for (let j = 0; j < graph.length; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

// Usage
const graph = [
  [0, 5, Infinity, Infinity],
  [Infinity, 0, 2, 1],
  [Infinity, Infinity, 0, 3],
  [Infinity, Infinity, Infinity, 0]
];

console.log(floydWarshall(graph));
