// Knapsack Problem (0/1) in TypeScript
function knapsack01(weights: number[], values: number[], W: number): number {
  const n = weights.length;
  const dp = Array(W + 1).fill(0);

  for (let i = 0; i < n; i++) {
    for (let w = W; w >= weights[i]; w--) {
      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
    }
  }

  return dp[W];
}
