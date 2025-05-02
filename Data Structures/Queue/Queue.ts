class Queue<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    // Add an element to the end of the queue
    enqueue(element: T): void {
        this.items.push(element);
    }

    // Remove and return the first element from the queue
    dequeue(): T | undefined {
        return this.items.shift();
    }

    // Return the first element without removing it
    front(): T | undefined {
        return this.items[0];
    }

    // Return the last element without removing it
    rear(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Return the size of the queue
    size(): number {
        return this.items.length;
    }

    // Clear the queue
    clear(): void {
        this.items = [];
    }
}

// Example usage:
// const queue = new Queue<number>();
// queue.enqueue(1);
// queue.enqueue(2);
// console.log(queue.dequeue()); // 1
// console.log(queue.front()); // 2
// console.log(queue.size()); // 1 