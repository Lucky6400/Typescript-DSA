
# How to Analyze Time Complexity

## Overview
Time complexity analysis helps you determine how the execution time of an algorithm changes with the size of the input. This allows you to evaluate the efficiency of an algorithm.

## Steps to Analyze Time Complexity

1. **Identify the Input Size**:
   - The first step is to determine what represents the input size. It could be the length of an array, the number of vertices/edges in a graph, etc.

2. **Count the Basic Operations**:
   - Focus on counting the basic operations (such as comparisons, additions, etc.) that are executed in the algorithm. Count how many times each operation is executed as a function of the input size.

3. **Ignore Constant Factors**:
   - When analyzing time complexity, constants and lower order terms are generally ignored. For example, O(2n) simplifies to O(n).

4. **Identify the Dominant Term**:
   - If an algorithm has a complexity of O(n^2 + n), the dominant term is O(n^2), and that’s what you report.

5. **Worst, Best, and Average Cases**:
   - Analyze the algorithm under different scenarios (worst case, best case, average case) to get a complete understanding of its efficiency.

## Time Complexity Classes
- **O(1)**: Constant time complexity. The algorithm’s running time does not depend on the size of the input.
- **O(n)**: Linear time complexity. The algorithm’s running time grows linearly with the size of the input.
- **O(n^2)**: Quadratic time complexity. The algorithm’s running time grows with the square of the input size.
- **O(log n)**: Logarithmic time complexity. The algorithm’s running time grows logarithmically with the input size.
- **O(n log n)**: Log-linear time complexity. Often seen in efficient sorting algorithms like MergeSort.

## Conclusion
Analyzing time complexity helps in comparing different algorithms and selecting the most efficient one for large inputs.
    