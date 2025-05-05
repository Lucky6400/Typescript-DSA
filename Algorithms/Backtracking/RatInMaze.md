# Rat in a Maze Problem (Backtracking)

## Overview
The Rat in a Maze problem involves finding a path for a rat from the top-left corner to the bottom-right corner of a maze using backtracking.

## Algorithm Steps
1. Start at the top-left corner.
2. Try moving down or right, if possible.
3. If the rat reaches the bottom-right corner, return the solution.
4. If a move leads to a dead end, backtrack by marking the current position as unvisited and try another path.

## Time Complexity
- Worst Case: O(2^N) (exponential due to branching factor)

## Space Complexity
- O(N²) (for the solution matrix)

## Advantages
- Easy to understand and implement

## Disadvantages
- May be inefficient for large mazes

## Use Cases
- Solving maze problems
- Pathfinding algorithms

## Implementation Notes
- The algorithm uses backtracking to explore all possible paths, pruning invalid ones as soon as a dead end is reached.