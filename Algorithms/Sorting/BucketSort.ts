/**
 * Bucket Sort Implementation
 * Time Complexity: O(n + n²/k) where k is the number of buckets
 * Space Complexity: O(n + k)
 */

export function bucketSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    // Find the maximum and minimum values
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    
    // Create buckets
    const bucketCount = Math.floor(Math.sqrt(arr.length));
    const buckets: number[][] = Array.from({ length: bucketCount }, () => []);
    
    // Calculate the range of each bucket
    const bucketRange = (max - min) / bucketCount;
    
    // Distribute elements into buckets
    for (const num of arr) {
        const bucketIndex = Math.min(
            Math.floor((num - min) / bucketRange),
            bucketCount - 1
        );
        buckets[bucketIndex].push(num);
    }
    
    // Sort individual buckets and concatenate
    const sorted: number[] = [];
    for (const bucket of buckets) {
        // Using insertion sort for small buckets
        insertionSort(bucket);
        sorted.push(...bucket);
    }
    
    return sorted;
}

// Helper function for bucket sort
function insertionSort(arr: number[]): void {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

// Example usage:
/*
const arr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];
console.log("Original array:", arr);
const sorted = bucketSort([...arr]);
console.log("Sorted array:", sorted);
*/ 