/**
 * Linear Search Algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

export function linearSearch<T>(arr: T[], target: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}