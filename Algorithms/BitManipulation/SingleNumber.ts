// Single Number (XOR) in TypeScript
function singleNumber(nums: number[]): number {
  let result = 0;
  for (let num of nums) {
    result ^= num;  // XOR each number
  }
  return result;
}

// Usage
console.log(singleNumber([4, 1, 2, 1, 2]));  // Output: 4
