// Combinatorics (nCr, Pascal's Triangle) in TypeScript
function nCr(n: number, r: number): number {
  if (r > n) return 0;
  if (r === 0 || r === n) return 1;

  let res = 1;
  for (let i = 0; i < r; i++) {
    res *= (n - i);
    res /= (i + 1);
  }
  return res;
}

// Pascal's Triangle
function pascalTriangle(n: number): number[][] {
  const triangle: number[][] = [];
  for (let i = 0; i < n; i++) {
    const row: number[] = [];
    for (let j = 0; j <= i; j++) {
      row.push(nCr(i, j));
    }
    triangle.push(row);
  }
  return triangle;
}

// Usage
console.log(nCr(5, 2));  // Output: 10
console.log(pascalTriangle(5));  // Output: Pascal's Triangle up to row 5
