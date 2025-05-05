// Euclidean Algorithm (GCD, LCM) in TypeScript
function gcd(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

// Usage
console.log(gcd(56, 98));  // Output: 14 (GCD)
console.log(lcm(56, 98));  // Output: 392 (LCM)
