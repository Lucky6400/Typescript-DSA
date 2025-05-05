// Longest Palindromic Substring (2D DP) in TypeScript
function longestPalindromicSubstring(s: string): string {
  const n = s.length;
  const dp = Array(n).fill(0).map(() => Array(n).fill(false));
  let start = 0, maxLength = 1;

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  for (let length = 2; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;
      if (s[i] === s[j] && (length === 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        if (length > maxLength) {
          maxLength = length;
          start = i;
        }
      }
    }
  }

  return s.slice(start, start + maxLength);
}
