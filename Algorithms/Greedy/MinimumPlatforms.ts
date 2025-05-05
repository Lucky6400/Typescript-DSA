// Minimum Number of Platforms (Greedy) in TypeScript
function minPlatforms(arrivals: number[], departures: number[]): number {
  const n = arrivals.length;
  arrivals.sort((a, b) => a - b);
  departures.sort((a, b) => a - b);

  let platforms = 1;
  let result = 1;
  let i = 1;
  let j = 0;

  while (i < n && j < n) {
    if (arrivals[i] <= departures[j]) {
      platforms++;
      i++;
    } else {
      platforms--;
      j++;
    }
    result = Math.max(result, platforms);
  }

  return result;
}
