// Longest Prefix Suffix (LPS) in TypeScript
function computeLPS(pattern: string): number[] {
  const lps = Array(pattern.length).fill(0);
  let length = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

// Usage
console.log(computeLPS("AABAACAABAA"));  // Output: [0, 1, 0, 1, 2, 0, 1, 2, 3, 4, 5, 6]
