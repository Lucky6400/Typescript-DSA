// Check if a number is power of 2 in TypeScript
function isPowerOfTwo(n: number): boolean {
  return (n > 0) && (n & (n - 1)) === 0;
}

// Usage
console.log(isPowerOfTwo(16));  // true
console.log(isPowerOfTwo(18));  // false
