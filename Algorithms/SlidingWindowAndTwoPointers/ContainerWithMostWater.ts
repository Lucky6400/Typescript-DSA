// Container With Most Water (Two Pointers) in TypeScript
function maxArea(height: number[]): number {
  let left = 0, right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const currentArea = Math.min(height[left], height[right]) * width;
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
