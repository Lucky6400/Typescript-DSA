// Coin Change Problem (Greedy vs DP) in TypeScript
function coinChangeGreedy(coins: number[], amount: number): number {
  let count = 0;
  let remainingAmount = amount;
  
  for (let i = coins.length - 1; i >= 0; i--) {
    if (coins[i] <= remainingAmount) {
      const numCoins = Math.floor(remainingAmount / coins[i]);
      count += numCoins;
      remainingAmount -= numCoins * coins[i];
    }
  }

  return remainingAmount === 0 ? count : -1;
}
