# Coin Change Problem (Greedy vs DP)

## Overview
The Coin Change problem involves finding the minimum number of coins needed to make a specific amount using a set of coin denominations.

## Greedy Algorithm Steps
1. Sort the coins in descending order.
2. Try to use the largest coin denomination as much as possible.

## Dynamic Programming (DP) Algorithm Steps
1. Use a DP array to store the minimum coins needed for each amount from 0 to the target amount.

## Time Complexity (Greedy)
- Worst Case: O(n) (for each coin)

## Time Complexity (DP)
- Worst Case: O(n * m) (n is the target amount, m is the number of coin denominations)

## Space Complexity
- Greedy: O(1)
- DP: O(n)

## Advantages
- Greedy is fast but doesn't always give optimal results for all denominations.
- DP provides an optimal solution for any set of coin denominations.

## Disadvantages
- Greedy algorithm may fail for certain coin sets.

## Use Cases
- Currency conversion and making change for payments.

## Implementation Notes
- Greedy works only when the coin set follows a specific property (e.g., denominations are multiples of smaller denominations).