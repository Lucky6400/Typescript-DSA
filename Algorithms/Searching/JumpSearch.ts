/**
 * Jump Search Algorithm
 * Time Complexity: O(√n)
 * Space Complexity: O(1)
 * Note: Assumes array is sorted
 */

export function jumpSearch<T>(arr: T[], target: T): number {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    if (prev >= n) return -1;
    step += Math.floor(Math.sqrt(n));
  }

  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}