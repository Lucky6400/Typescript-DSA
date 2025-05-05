// DP with Bitmasking (Advanced) in TypeScript
function countBits(n: number): number {
  let count = 0;
  while (n) {
    n &= (n - 1); // Clear the lowest set bit
    count++;
  }
  return count;
}

function tsp(graph: number[][]): number {
  const n = graph.length;
  const dp = Array(1 << n).fill(Infinity);
  dp[1] = 0;

  for (let mask = 1; mask < (1 << n); mask++) {
    for (let u = 0; u < n; u++) {
      if (mask & (1 << u)) {
        for (let v = 0; v < n; v++) {
          if (!(mask & (1 << v))) {
            dp[mask | (1 << v)] = Math.min(dp[mask | (1 << v)], dp[mask] + graph[u][v]);
          }
        }
      }
    }
  }

  return dp[(1 << n) - 1];
}
