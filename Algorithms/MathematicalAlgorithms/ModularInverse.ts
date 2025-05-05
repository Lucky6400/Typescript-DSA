// Modular Inverse in TypeScript
function modInverse(a: number, m: number): number {
  const g = gcd(a, m);
  if (g !== 1) {
    return -1;  // No modular inverse if GCD is not 1
  } else {
    return fastExponentiation(a, m - 2, m);
  }
}

// Usage
console.log(modInverse(3, 11));  // Output: 4
