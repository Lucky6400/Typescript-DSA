// Subsets/Power Set in TypeScript
function getSubsets(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(start: number, current: number[]): void {
    result.push([...current]);

    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      backtrack(i + 1, current);
      current.pop(); // Backtrack
    }
  }

  backtrack(0, []);
  return result;
}