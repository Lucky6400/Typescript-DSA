// Gold Mine Problem (DP on Grids) in TypeScript
function getMaxGold(grid: number[][]): number {
  const m = grid.length, n = grid[0].length;
  const dp = Array(m).fill(0).map(() => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    dp[i][n - 1] = grid[i][n - 1];
  }

  for (let j = n - 2; j >= 0; j--) {
    for (let i = 0; i < m; i++) {
      const down = i + 1 < m ? dp[i + 1][j + 1] : 0;
      const right = dp[i][j + 1];
      const up = i - 1 >= 0 ? dp[i - 1][j + 1] : 0;

      dp[i][j] = grid[i][j] + Math.max(down, right, up);
    }
  }

  let maxGold = 0;
  for (let i = 0; i < m; i++) {
    maxGold = Math.max(maxGold, dp[i][0]);
  }

  return maxGold;
}
