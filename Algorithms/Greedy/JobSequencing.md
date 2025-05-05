# Job Sequencing Problem (Greedy)

## Overview
The Job Sequencing Problem involves scheduling jobs to maximize profit. Each job has a deadline and profit, and the objective is to sequence the jobs in such a way that the total profit is maximized.

## Algorithm Steps
1. Sort the jobs by profit in descending order.
2. Iterate over the jobs and assign each job to the latest available time slot before its deadline.

## Time Complexity
- Worst Case: O(n log n) (due to sorting)

## Space Complexity
- O(n) (for the result and the slot array)

## Advantages
- Simple and effective method for job scheduling.

## Disadvantages
- Assumes that jobs can be completed in their respective deadlines.

## Use Cases
- Scheduling tasks with deadlines

## Implementation Notes
- The algorithm uses a greedy approach where the highest-profit jobs are scheduled first.