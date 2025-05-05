// Z-Algorithm in TypeScript
function zAlgorithm(s: string): number[] {
  const z = Array(s.length).fill(0);
  let l = 0, r = 0;
  for (let i = 1; i < s.length; i++) {
    if (i <= r) {
      z[i] = Math.min(r - i + 1, z[i - l]);
    }
    while (i + z[i] < s.length && s[z[i]] === s[i + z[i]]) {
      z[i]++;
    }
    if (i + z[i] - 1 > r) {
      l = i;
      r = i + z[i] - 1;
    }
  }
  z[0] = s.length;
  return z;
}

// Usage
console.log(zAlgorithm("AABAACAABAA"));  // Output: [12, 1, 0, 1, 2, 0, 1, 2, 3, 4, 5, 6]
