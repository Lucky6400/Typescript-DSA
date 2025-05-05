// Closest Pair of Points in TypeScript
function closestPair(points: [number, number][]): [number, number][] {
  const sortedPoints = points.sort((a, b) => a[0] - b[0]);
  
  function dist(p1: [number, number], p2: [number, number]): number {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
  }

  function closestPairUtil(points: [number, number][]): [number, number][] {
    if (points.length <= 3) {
      let minDist = Infinity;
      let pair: [number, number][] = [];

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const distance = dist(points[i], points[j]);
          if (distance < minDist) {
            minDist = distance;
            pair = [points[i], points[j]];
          }
        }
      }

      return pair;
    }

    const mid = Math.floor(points.length / 2);
    const left = points.slice(0, mid);
    const right = points.slice(mid);

    const leftPair = closestPairUtil(left);
    const rightPair = closestPairUtil(right);

    const minLeftDist = dist(leftPair[0], leftPair[1]);
    const minRightDist = dist(rightPair[0], rightPair[1]);

    const minDist = Math.min(minLeftDist, minRightDist);
    return minDist === minLeftDist ? leftPair : rightPair;
  }

  return closestPairUtil(sortedPoints);
}