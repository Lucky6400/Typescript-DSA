import { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } from './PriorityQueue';

class Heap<T> {
    private queue: PriorityQueue<T>;

    constructor(compareFunction: (a: T, b: T) => number) {
        this.queue = new PriorityQueue(compareFunction);
    }

    // Insert a new element
    insert(item: T): void {
        this.queue.enqueue(item);
    }

    // Remove and return the root element
    extract(): T | null {
        return this.queue.dequeue();
    }

    // Get the root element without removing it
    peek(): T | null {
        return this.queue.peek();
    }

    // Get the size of the heap
    size(): number {
        return this.queue.size();
    }

    // Check if the heap is empty
    isEmpty(): boolean {
        return this.queue.isEmpty();
    }

    // Clear the heap
    clear(): void {
        this.queue.clear();
    }

    // Convert heap to array (does not preserve heap property)
    toArray(): T[] {
        return this.queue.toArray();
    }

    // Build heap from array (heapifies the array in-place)
    buildHeap(array: T[]): void {
        this.queue.buildQueue(array);
    }
}

// Min Heap
class MinHeap<T> extends Heap<T> {
    constructor(compareFunction: (a: T, b: T) => number = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }) {
        super(compareFunction);
    }
}

// Max Heap
class MaxHeap<T> extends Heap<T> {
    constructor(compareFunction: (a: T, b: T) => number = (a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    }) {
        super(compareFunction);
    }
}

// Example usage:
// const minHeap = new MinHeap<number>();
// minHeap.insert(5);
// minHeap.insert(3);
// minHeap.insert(7);
// minHeap.insert(1);
// console.log(minHeap.extract()); // 1
// console.log(minHeap.peek()); // 3

// const maxHeap = new MaxHeap<number>();
// maxHeap.insert(5);
// maxHeap.insert(3);
// maxHeap.insert(7);
// maxHeap.insert(1);
// console.log(maxHeap.extract()); // 7
// console.log(maxHeap.peek()); // 5 