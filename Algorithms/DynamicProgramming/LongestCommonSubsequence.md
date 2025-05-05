# Longest Common Subsequence (2D DP)

## Overview
The Longest Common Subsequence problem involves finding the longest subsequence common to two sequences.

## Algorithm Steps
1. Use a 2D DP table where dp[i][j] stores the length of the longest common subsequence between the first i characters of text1 and the first j characters of text2.
2. Fill the table based on the characters of the two strings.

## Time Complexity
- O(m * n) (where m and n are the lengths of the two strings)

## Space Complexity
- O(m * n)

## Use Cases
- Sequence matching problems (e.g., DNA sequence comparison, file comparison).

