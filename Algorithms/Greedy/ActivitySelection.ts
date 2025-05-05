// Activity Selection Problem (Greedy) in TypeScript
function activitySelection(start: number[], end: number[]): number[] {
  const n = start.length;
  const result: number[] = [];
  
  let i = 0;
  result.push(i);
  
  for (let j = 1; j < n; j++) {
    if (start[j] >= end[i]) {
      result.push(j);
      i = j;
    }
  }

  return result;
}
