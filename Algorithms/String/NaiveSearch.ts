// Naive Search Pattern Matching in TypeScript
function naiveSearch(text: string, pattern: string): number[] {
  const result: number[] = [];
  const n = text.length;
  const m = pattern.length;

  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    while (j < m && text[i + j] === pattern[j]) {
      j++;
    }
    if (j === m) {
      result.push(i);  // Pattern found at index i
    }
  }

  return result;
}

// Usage
console.log(naiveSearch("AABAACAADAABAABA", "AABA"));  // Output: [0, 9, 12]
