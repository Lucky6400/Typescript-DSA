class Heap<T> {
    private heap: T[];
    private compare: (a: T, b: T) => number;

    constructor(compareFunction: (a: T, b: T) => number = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }) {
        this.heap = [];
        this.compare = compareFunction;
    }

    // Helper methods for getting parent and child indices
    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private getLeftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    private getRightChildIndex(index: number): number {
        return 2 * index + 2;
    }

    // Helper methods for checking existence of parent and children
    private hasParent(index: number): boolean {
        return this.getParentIndex(index) >= 0;
    }

    private hasLeftChild(index: number): boolean {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    private hasRightChild(index: number): boolean {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    // Helper methods for getting parent and children values
    private parent(index: number): T {
        return this.heap[this.getParentIndex(index)];
    }

    private leftChild(index: number): T {
        return this.heap[this.getLeftChildIndex(index)];
    }

    private rightChild(index: number): T {
        return this.heap[this.getRightChildIndex(index)];
    }

    // Swap two elements in the heap
    private swap(index1: number, index2: number): void {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // Insert a new element
    insert(item: T): void {
        this.heap.push(item);
        this.heapifyUp();
    }

    // Remove and return the root element
    extract(): T | null {
        if (this.heap.length === 0) {
            return null;
        }

        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();

        return item;
    }

    // Get the root element without removing it
    peek(): T | null {
        return this.heap.length === 0 ? null : this.heap[0];
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

    // Get the size of the heap
    size(): number {
        return this.heap.length;
    }

    // Check if the heap is empty
    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    // Clear the heap
    clear(): void {
        this.heap = [];
    }

    // Convert heap to array (does not preserve heap property)
    toArray(): T[] {
        return [...this.heap];
    }

    // Build heap from array (heapifies the array in-place)
    buildHeap(array: T[]): void {
        this.heap = [...array];
        for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
            this.heapifyDownAt(i);
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

// Example usage:
// const minHeap = new Heap<number>();
// minHeap.insert(5);
// minHeap.insert(3);
// minHeap.insert(7);
// minHeap.insert(1);
// console.log(minHeap.extract()); // 1
// console.log(minHeap.peek()); // 3

// const maxHeap = new Heap<number>((a, b) => b - a);
// maxHeap.insert(5);
// maxHeap.insert(3);
// maxHeap.insert(7);
// maxHeap.insert(1);
// console.log(maxHeap.extract()); // 7
// console.log(maxHeap.peek()); // 5 