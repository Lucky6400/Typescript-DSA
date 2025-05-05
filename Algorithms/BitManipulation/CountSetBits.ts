// Count set bits (1s) in a number in TypeScript
function countSetBits(n: number): number {
  let count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

// Usage
console.log(countSetBits(5));  // Output: 2 (binary: 101)
