// Longest Substring with At Most K Distinct Characters (Sliding Window) in TypeScript
function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
  let map = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) map.delete(s[left]);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
