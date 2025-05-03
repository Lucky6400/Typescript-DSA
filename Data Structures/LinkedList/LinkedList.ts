class ListNode<T> {
    data: T;
    next: ListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: ListNode<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add a new element to the end of the list
    append(data: T): void {
        const newNode = new ListNode(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Add a new element to the beginning of the list
    prepend(data: T): void {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Insert a new element at a specific position
    insert(data: T, position: number): boolean {
        if (position < 0 || position > this.size) {
            return false;
        }

        if (position === 0) {
            this.prepend(data);
            return true;
        }

        const newNode = new ListNode(data);
        let current = this.head;
        let previous = null;
        let index = 0;

        while (index < position) {
            previous = current;
            current = current!.next;
            index++;
        }

        newNode.next = current;
        previous!.next = newNode;
        this.size++;
        return true;
    }

    // Remove an element from a specific position
    removeAt(position: number): T | null {
        if (position < 0 || position >= this.size) {
            return null;
        }

        let current = this.head;

        if (position === 0) {
            this.head = current!.next;
        } else {
            let previous = null;
            let index = 0;

            while (index < position) {
                previous = current;
                current = current!.next;
                index++;
            }

            previous!.next = current!.next;
        }

        this.size--;
        return current!.data;
    }

    // Remove an element with a specific value
    remove(data: T): boolean {
        let current = this.head;
        let previous = null;

        while (current !== null) {
            if (current.data === data) {
                if (previous === null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return true;
            }
            previous = current;
            current = current.next;
        }
        return false;
    }

    // Get element at specific position
    getElementAt(position: number): T | null {
        if (position < 0 || position >= this.size) {
            return null;
        }

        let current = this.head;
        let index = 0;

        while (index < position) {
            current = current!.next;
            index++;
        }

        return current!.data;
    }

    // Get the size of the list
    getSize(): number {
        return this.size;
    }

    // Check if the list is empty
    isEmpty(): boolean {
        return this.size === 0;
    }

    // Convert the list to an array
    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;

        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }

        return result;
    }

    // Clear the list
    clear(): void {
        this.head = null;
        this.size = 0;
    }
}

// Example usage:
// const list = new LinkedList<number>();
// list.append(1);
// list.append(2);
// list.prepend(0);
// console.log(list.toArray()); // [0, 1, 2]
// list.remove(1);
// console.log(list.toArray()); // [0, 2] 