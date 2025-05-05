# Activity Selection Problem (Greedy)

## Overview
The Activity Selection problem is an optimization problem where we need to select the maximum number of activities that don't overlap.

## Algorithm Steps
1. Sort activities by their finish times.
2. Select the first activity.
3. For every subsequent activity, check if it starts after the last selected activity finishes. If yes, select it.

## Time Complexity
- Worst Case: O(n log n) (due to sorting)

## Space Complexity
- O(n) (for storing the result)

## Advantages
- Efficient for selecting non-overlapping activities.

## Disadvantages
- The problem assumes that activities are sorted by their finish time.

## Use Cases
- Scheduling problems

## Implementation Notes
- The greedy choice is to always select the next activity that finishes the earliest.