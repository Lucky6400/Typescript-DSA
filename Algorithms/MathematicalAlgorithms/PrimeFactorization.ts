// Prime Factorization in TypeScript
function primeFactorization(n: number): number[] {
  const factors: number[] = [];
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
}

// Usage
console.log(primeFactorization(56));  // Output: [2, 2, 2, 7]
