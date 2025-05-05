# KMP (Knuth-Morris-Pratt) Algorithm

## Overview
The KMP algorithm improves the Naive Search by avoiding redundant comparisons using a precomputed "Longest Prefix Suffix" (LPS) array.

## Time Complexity
- O(n + m), where n is the length of the text and m is the length of the pattern.

## Space Complexity
- O(m), where m is the length of the pattern, for storing the LPS array.
