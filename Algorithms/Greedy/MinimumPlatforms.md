# Minimum Number of Platforms (Greedy)

## Overview
This problem involves finding the minimum number of platforms required at a railway station so that no train has to wait.

## Algorithm Steps
1. Sort the arrival and departure times.
2. Use a greedy approach to find the number of platforms required at any point in time.

## Time Complexity
- Worst Case: O(n log n) (due to sorting)

## Space Complexity
- O(n)

## Advantages
- Optimizes resource allocation for train scheduling.

## Disadvantages
- Assumes the data is sorted.

## Use Cases
- Train scheduling problems

## Implementation Notes
- This algorithm ensures that the minimum number of platforms is allocated based on train arrival and departure timings.