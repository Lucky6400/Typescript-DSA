# Edit Distance (2D DP)

## Overview
The Edit Distance problem calculates the minimum number of operations (insertions, deletions, and substitutions) required to convert one string into another.

## Algorithm Steps
1. Use a DP table where dp[i][j] stores the minimum edit distance between the first i characters of word1 and the first j characters of word2.
2. Fill the table with the recursive relationships.

## Time Complexity
- O(m * n)

## Space Complexity
- O(m * n)

## Use Cases
- Spell-checking, text similarity comparison.

