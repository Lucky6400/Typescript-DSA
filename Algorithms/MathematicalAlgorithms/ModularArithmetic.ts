// Modular Arithmetic in TypeScript
function modularExponentiation(base: number, exponent: number, mod: number): number {
  let result = 1;
  base = base % mod;

  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result = (result * base) % mod;
    }
    base = (base * base) % mod;
    exponent = Math.floor(exponent / 2);
  }
  return result;
}

// Usage
console.log(modularExponentiation(2, 10, 1000));  // Output: 24
