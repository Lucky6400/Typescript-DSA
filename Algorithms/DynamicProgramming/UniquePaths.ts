// Unique Paths (DP on Grids) in TypeScript
function uniquePaths(m: number, n: number): number {
  const dp = Array(m).fill(0).map(() => Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}
