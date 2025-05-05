// Memoization vs Tabulation (Dynamic Programming) in TypeScript
function fibMemoization(n: number, memo: number[] = []): number {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];

  memo[n] = fibMemoization(n - 1, memo) + fibMemoization(n - 2, memo);
  return memo[n];
}

function fibTabulation(n: number): number {
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
