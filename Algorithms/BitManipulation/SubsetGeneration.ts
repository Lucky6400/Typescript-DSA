// Subset Generation using Bits in TypeScript
function generateSubsets(nums: number[]): number[][] {
  const subsets: number[][] = [];
  const totalSubsets = 1 << nums.length;  // 2^n

  for (let mask = 0; mask < totalSubsets; mask++) {
    const subset: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      if ((mask & (1 << i)) !== 0) {
        subset.push(nums[i]);
      }
    }
    subsets.push(subset);
  }

  return subsets;
}

// Usage
console.log(generateSubsets([1, 2, 3]));
