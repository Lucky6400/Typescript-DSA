# Bucket Sort

## Overview
Bucket Sort is a distribution sort algorithm that works by distributing elements into a number of buckets, then sorting each bucket individually, and finally concatenating the sorted buckets. It's particularly efficient when the input is uniformly distributed over a range.

## How It Works
1. Create n empty buckets (where n is the number of elements)
2. Find the range of input values (min and max)
3. Calculate the range of each bucket
4. Distribute elements into buckets based on their values
5. Sort individual buckets using a stable sorting algorithm
6. Concatenate all buckets to get the sorted array

## Time Complexity
- Best Case: O(n + k) where k is the number of buckets
- Average Case: O(n + n²/k)
- Worst Case: O(n²) when all elements are placed in the same bucket
where n is the number of elements

## Space Complexity
- O(n + k) where n is the number of elements and k is the number of buckets

## Advantages
- Can be very fast when input is uniformly distributed
- Works well with floating-point numbers
- Can be parallelized
- Stable sorting algorithm

## Disadvantages
- Performance depends on the distribution of input
- Requires extra space for buckets
- Not suitable for data with large range
- Performance degrades when elements are not uniformly distributed

## Use Cases
- Sorting floating-point numbers
- When input is uniformly distributed
- When memory is not a constraint
- When stability is required

## Example
Input: [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]
Output: [0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897]

## Implementation Notes
- The number of buckets is typically chosen as the square root of the input size
- Each bucket is sorted using insertion sort for small buckets
- The algorithm works best with uniformly distributed data
- The implementation handles both integer and floating-point numbers 