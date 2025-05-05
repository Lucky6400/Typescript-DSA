// Fractional Knapsack (Greedy) in TypeScript
function fractionalKnapsack(weights: number[], values: number[], capacity: number): number {
  const n = weights.length;
  const ratio: { value: number, weight: number, index: number }[] = [];

  for (let i = 0; i < n; i++) {
    ratio.push({ value: values[i], weight: weights[i], index: i });
  }

  ratio.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

  let totalValue = 0;
  for (let i = 0; i < n; i++) {
    if (weights[ratio[i].index] <= capacity) {
      totalValue += values[ratio[i].index];
      capacity -= weights[ratio[i].index];
    } else {
      totalValue += values[ratio[i].index] * (capacity / weights[ratio[i].index]);
      break;
    }
  }

  return totalValue;
}
