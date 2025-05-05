// Sum of Natural Numbers in TypeScript
function sumOfNaturalNumbers(n: number): number {
  if (n === 0) {
    return 0;
  }
  return n + sumOfNaturalNumbers(n - 1);
}