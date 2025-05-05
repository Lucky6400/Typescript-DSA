/**
 * Exponential Search Algorithm
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * Note: Useful for unbounded sorted arrays
 */

function binarySearch(arr: number[], target: number, left: number, right: number): number {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

export function exponentialSearch(arr: number[], target: number): number {
  if (arr[0] === target) return 0;

  let i = 1;
  while (i < arr.length && arr[i] <= target) {
    i *= 2;
  }

  return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, arr.length - 1));
}