// Maximum Sum Subarray of Size K (Sliding Window) in TypeScript
function maxSumSubarray(arr: number[], k: number): number {
  let maxSum = 0, windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
