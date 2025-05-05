# Matrix Chain Multiplication (2D DP)

## Overview
Matrix Chain Multiplication involves finding the most efficient way to multiply a chain of matrices. The goal is to minimize the number of scalar multiplications.

## Algorithm Steps
1. Use a 2D DP table to store the minimum number of multiplications required for each subchain.
2. Fill the DP table by considering different split points for matrix multiplication.

## Time Complexity
- O(n^3)

## Space Complexity
- O(n^2)

## Use Cases
- Optimizing matrix operations in scientific computing.

