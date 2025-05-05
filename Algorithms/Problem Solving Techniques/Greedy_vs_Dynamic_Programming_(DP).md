
# Greedy vs Dynamic Programming (DP)

## Overview
Greedy algorithms and Dynamic Programming (DP) are both optimization techniques used to solve problems, but they differ in how they approach the solution.

## Greedy Algorithm
- **Definition**: A greedy algorithm makes a series of choices by selecting the best possible option at each step without considering the entire problem.
- **Characteristics**:
  - **Local Optimality**: Greedy algorithms make decisions based on local optimal solutions.
  - **No Backtracking**: Once a decision is made, it is final.
  - **Greedy Choice Property**: The optimal solution can be arrived at by choosing local optimal choices.
  - **Example Problems**: Activity selection, Huffman coding, Minimum spanning tree (Prim's and Kruskal's algorithms).

## Dynamic Programming (DP)
- **Definition**: DP is a method for solving problems by breaking them down into overlapping sub-problems, solving each sub-problem once, and storing the results to avoid redundant calculations.
- **Characteristics**:
  - **Optimal Substructure**: The optimal solution of a problem can be constructed from the optimal solutions of its subproblems.
  - **Overlapping Subproblems**: Subproblems are solved multiple times, so results are stored to avoid redundant work.
  - **Example Problems**: Fibonacci sequence, Knapsack problem, Longest Common Subsequence.

## Key Differences
- **Greedy**: Makes the best local choice, without worrying about future consequences. It is faster but does not always guarantee an optimal solution.
- **DP**: Solves the problem by considering all possibilities and ensures the global optimal solution, but it may be slower due to overlapping subproblems.

## Conclusion
- Use **Greedy** when the problem has the greedy choice property and optimal substructure. It is often more efficient.
- Use **DP** when the problem has overlapping subproblems and the optimal substructure is nontrivial or requires considering the entire problem for an optimal solution.
    