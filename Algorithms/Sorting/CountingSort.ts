/**
 * Counting Sort Implementation
 * Time Complexity: O(n + k) where k is the range of input
 * Space Complexity: O(n + k)
 */

export function countingSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    // Find the maximum value in the array
    const max = Math.max(...arr);
    
    // Create count array and initialize with zeros
    const count = new Array(max + 1).fill(0);
    
    // Count occurrences of each element
    for (const num of arr) {
        count[num]++;
    }
    
    // Calculate cumulative count
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }
    
    // Create output array
    const output = new Array(arr.length);
    
    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    
    return output;
}

// Example usage:
/*
const arr = [4, 2, 2, 8, 3, 3, 1];
console.log("Original array:", arr);
const sorted = countingSort([...arr]);
console.log("Sorted array:", sorted);
*/ 