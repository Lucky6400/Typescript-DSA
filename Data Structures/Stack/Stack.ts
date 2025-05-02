class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    // Push an element onto the stack
    push(element: T): void {
        this.items.push(element);
    }

    // Remove and return the top element from the stack
    pop(): T | undefined {
        return this.items.pop();
    }

    // Return the top element without removing it
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size(): number {
        return this.items.length;
    }

    // Clear the stack
    clear(): void {
        this.items = [];
    }
}

// Example usage:
// const stack = new Stack<number>();
// stack.push(1);
// stack.push(2);
// console.log(stack.pop()); // 2
// console.log(stack.peek()); // 1
// console.log(stack.size()); // 1 