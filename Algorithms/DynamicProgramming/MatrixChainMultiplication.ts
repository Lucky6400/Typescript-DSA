// Matrix Chain Multiplication (2D DP) in TypeScript
function matrixChainOrder(dimensions: number[]): number {
  const n = dimensions.length;
  const dp = Array(n).fill(0).map(() => Array(n).fill(0));

  for (let length = 2; length < n; length++) {
    for (let i = 1; i < n - length + 1; i++) {
      let j = i + length - 1;
      dp[i][j] = Infinity;
      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + dimensions[i - 1] * dimensions[k] * dimensions[j]);
      }
    }
  }

  return dp[1][n - 1];
}
