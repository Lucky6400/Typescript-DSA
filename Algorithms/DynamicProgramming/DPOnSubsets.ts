// DP on Subsets (Advanced) in TypeScript
function subsetSum(nums: number[], target: number): boolean {
  const dp = Array(target + 1).fill(false);
  dp[0] = true;

  for (let num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[target];
}
