# Fractional Knapsack (Greedy)

## Overview
Fractional Knapsack is a variation of the Knapsack Problem where you can take fractional items, not just whole items.

## Algorithm Steps
1. Calculate the value-to-weight ratio for each item.
2. Sort items based on this ratio in descending order.
3. Take items in this order, adding them completely if possible, and taking the fraction of an item if necessary.

## Time Complexity
- Worst Case: O(n log n) (due to sorting)

## Space Complexity
- O(n) (for storing the ratios)

## Advantages
- Efficient for fractional item selection.

## Disadvantages
- Doesn't work for the 0/1 Knapsack problem (where items can't be broken into fractions).

## Use Cases
- Resource allocation problems with fractional selections.

## Implementation Notes
- This greedy algorithm ensures that we always select the highest value-to-weight ratio first.