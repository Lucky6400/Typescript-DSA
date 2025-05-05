# N-Queens Problem (Backtracking)

## Overview
The N-Queens problem involves placing N chess queens on an N×N chessboard so that no two queens threaten each other. This can be solved efficiently using backtracking.

## Algorithm Steps
1. Start from the first row, and try placing a queen in each column.
2. Check if placing the queen is safe (i.e., no other queen in the same column, row, or diagonal).
3. If safe, place the queen and move to the next row.
4. If all rows are filled with queens, add the solution to the result.
5. If a conflict arises, backtrack and try a different placement.

## Time Complexity
- Worst Case: O(N!)

## Space Complexity
- O(N²) (for the board and recursive stack)

## Advantages
- Efficient for solving constraint satisfaction problems.

## Disadvantages
- Can be slow for large values of N due to factorial time complexity.

## Use Cases
- Chess problems
- Constraint satisfaction problems

## Implementation Notes
- Backtracking is a natural fit for this type of problem, as it allows pruning of invalid solutions early.