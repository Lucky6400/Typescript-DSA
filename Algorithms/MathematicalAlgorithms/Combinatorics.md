# Combinatorics (nCr, Pascal's Triangle)

## Overview
Combinatorics involves counting and arranging elements. In this case, we look at computing combinations and generating Pascal's Triangle.

## nCr Algorithm
To calculate combinations (inom{n}{r}), we use the formula:
[
nCr = rac{n!}{r!(n - r)!}
]

## Pascal's Triangle
Pascal's Triangle is a triangular array where each element is the sum of the two elements directly above it. The (i)-th row contains the coefficients of the expansion of ((a + b)^i).

## Time Complexity
- nCr: O(r), where r is the number of elements to choose.
- Pascal’s Triangle: O(n^2), where n is the number of rows.

## Space Complexity
- nCr: O(1).
- Pascal’s Triangle: O(n^2).
