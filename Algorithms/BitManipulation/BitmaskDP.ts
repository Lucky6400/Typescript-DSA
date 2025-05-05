// Bitmask Dynamic Programming in TypeScript
function bitmaskDP(nums: number[]): number {
  const n = nums.length;
  const dp = new Array(1 << n).fill(0);  // Initialize DP table

  for (let mask = 1; mask < (1 << n); mask++) {
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        dp[mask] = Math.max(dp[mask], dp[mask ^ (1 << i)] + nums[i]);
      }
    }
  }

  return dp[(1 << n) - 1];  // Return the maximum sum for all elements
}

// Usage
console.log(bitmaskDP([3, 1, 4, 1, 5]));  // Output: 12 (Choosing all elements)
