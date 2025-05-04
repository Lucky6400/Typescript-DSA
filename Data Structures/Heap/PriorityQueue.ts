export class PriorityQueue<T> {
    private heap: T[];
    private compare: (a: T, b: T) => number;

    constructor(compareFunction: (a: T, b: T) => number) {
        this.heap = [];
        this.compare = compareFunction;
    }

    // Get parent index
    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    // Get left child index
    private getLeftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    // Get right child index
    private getRightChildIndex(index: number): number {
        return 2 * index + 2;
    }

    // Check if parent exists
    private hasParent(index: number): boolean {
        return this.getParentIndex(index) >= 0;
    }

    // Check if left child exists
    private hasLeftChild(index: number): boolean {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    // Check if right child exists
    private hasRightChild(index: number): boolean {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    // Get parent value
    private parent(index: number): T {
        return this.heap[this.getParentIndex(index)];
    }

    // Get left child value
    private leftChild(index: number): T {
        return this.heap[this.getLeftChildIndex(index)];
    }

    // Get right child value
    private rightChild(index: number): T {
        return this.heap[this.getRightChildIndex(index)];
    }

    // Swap two elements
    private swap(index1: number, index2: number): void {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // Add element to the queue
    enqueue(item: T): void {
        this.heap.push(item);
        this.heapifyUp();
    }

    // Remove and return the highest priority element
    dequeue(): T | null {
        if (this.heap.length === 0) {
            return null;
        }

        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();

        return item;
    }

    // Get the highest priority element without removing it
    peek(): T | null {
        return this.heap.length === 0 ? null : this.heap[0];
    }

    // Get the size of the queue
    size(): number {
        return this.heap.length;
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    // Clear the queue
    clear(): void {
        this.heap = [];
    }

    // Convert queue to array
    toArray(): T[] {
        return [...this.heap];
    }

    // Build queue from array
    buildQueue(array: T[]): void {
        this.heap = [...array];
        for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
            this.heapifyDownAt(i);
        }
    }

    // Restore heap property going up
    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (
            this.hasParent(index) && 
            this.compare(this.parent(index), this.heap[index]) > 0
        ) {
            const parentIndex = this.getParentIndex(index);
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    // Restore heap property going down
    private heapifyDown(): void {
        let index = 0;

        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (
                this.hasRightChild(index) && 
                this.compare(this.rightChild(index), this.leftChild(index)) < 0
            ) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.compare(this.heap[index], this.heap[smallerChildIndex]) <= 0) {
                break;
            }

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    // Heapify down starting at a specific index
    private heapifyDownAt(index: number): void {
        let current = index;

        while (this.hasLeftChild(current)) {
            let smallerChildIndex = this.getLeftChildIndex(current);
            if (
                this.hasRightChild(current) && 
                this.compare(this.rightChild(current), this.leftChild(current)) < 0
            ) {
                smallerChildIndex = this.getRightChildIndex(current);
            }

            if (this.compare(this.heap[current], this.heap[smallerChildIndex]) <= 0) {
                break;
            }

            this.swap(current, smallerChildIndex);
            current = smallerChildIndex;
        }
    }
}

// Min Priority Queue
export class MinPriorityQueue<T> extends PriorityQueue<T> {
    constructor(compareFunction: (a: T, b: T) => number = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }) {
        super(compareFunction);
    }
}

// Max Priority Queue
export class MaxPriorityQueue<T> extends PriorityQueue<T> {
    constructor(compareFunction: (a: T, b: T) => number = (a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    }) {
        super(compareFunction);
    }
}

// Example usage:
// const minQueue = new MinPriorityQueue<number>();
// minQueue.enqueue(5);
// minQueue.enqueue(3);
// minQueue.enqueue(7);
// minQueue.enqueue(1);
// console.log(minQueue.dequeue()); // 1
// console.log(minQueue.peek()); // 3

// const maxQueue = new MaxPriorityQueue<number>();
// maxQueue.enqueue(5);
// maxQueue.enqueue(3);
// maxQueue.enqueue(7);
// maxQueue.enqueue(1);
// console.log(maxQueue.dequeue()); // 7
// console.log(maxQueue.peek()); // 5 