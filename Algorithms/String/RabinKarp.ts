// Rabin-Karp Pattern Matching in TypeScript
function rabinKarpSearch(text: string, pattern: string): number[] {
  const result: number[] = [];
  const d = 256; // Number of characters in the input alphabet
  const q = 101; // A prime number
  const m = pattern.length;
  const n = text.length;
  let h = 1;
  let p = 0;  // hash value for pattern
  let t = 0;  // hash value for text

  for (let i = 0; i < m - 1; i++) {
    h = (h * d) % q;
  }

  for (let i = 0; i < m; i++) {
    p = (p * d + pattern.charCodeAt(i)) % q;
    t = (t * d + text.charCodeAt(i)) % q;
  }

  for (let i = 0; i <= n - m; i++) {
    if (p === t) {
      let j = 0;
      while (j < m && text[i + j] === pattern[j]) {
        j++;
      }
      if (j === m) {
        result.push(i);  // Pattern found at index i
      }
    }

    if (i < n - m) {
      t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;
      if (t < 0) {
        t = t + q;
      }
    }
  }

  return result;
}

// Usage
console.log(rabinKarpSearch("AABAACAADAABAABA", "AABA"));  // Output: [0, 9, 12]
