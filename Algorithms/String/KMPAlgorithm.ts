// KMP (Knuth-Morris-Pratt) Pattern Matching in TypeScript
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

function kmpSearch(text: string, pattern: string): number[] {
  const result: number[] = [];
  const lps = computeLPS(pattern);
  let i = 0;
  let j = 0;

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      result.push(i - j);  // Pattern found at index i - j
      j = lps[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return result;
}

// Usage
console.log(kmpSearch("AABAACAADAABAABA", "AABA"));  // Output: [0, 9, 12]
