/**
 * Radix Sort Implementation
 * Time Complexity: O(d * (n + k)) where d is the number of digits and k is the base (10)
 * Space Complexity: O(n + k)
 */

export function radixSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    // Find the maximum number to know number of digits
    const max = Math.max(...arr);
    
    // Do counting sort for every digit
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSortByDigit(arr, exp);
    }
    
    return arr;
}

function countingSortByDigit(arr: number[], exp: number): void {
    const n = arr.length;
    const output = new Array(n);
    const count = new Array(10).fill(0);
    
    // Store count of occurrences in count[]
    for (let i = 0; i < n; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
    }
    
    // Change count[i] so that count[i] now contains actual
    // position of this digit in output[]
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    
    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }
    
    // Copy the output array to arr[]
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

// Example usage:
/*
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Original array:", arr);
const sorted = radixSort([...arr]);
console.log("Sorted array:", sorted);
*/ 