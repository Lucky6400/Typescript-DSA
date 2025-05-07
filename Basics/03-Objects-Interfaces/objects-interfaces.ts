// Objects and Interfaces in TypeScript

// Basic object type annotation
let user: { name: string; age: number } = {
    name: "Bob",
    age: 25
};

// Interface declaration
interface Person {
    name: string;
    age: number;
    email?: string; // Optional property
    readonly id: number; // Read-only property
}

// Implementing an interface
const employee: Person = {
    name: "Alice",
    age: 30,
    id: 1
};

// Interface with methods
interface Animal {
    name: string;
    makeSound(): void;
    eat(food: string): void;
}

// Class implementing interface
class Dog implements Animal {
    constructor(public name: string) {}

    makeSound(): void {
        console.log("Woof!");
    }

    eat(food: string): void {
        console.log(`${this.name} is eating ${food}`);
    }
}

// Interface extension
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

const mySquare: Square = {
    color: "blue",
    sideLength: 10
};

// Interface with index signature
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ["Hello", "World"];

// Interface with call signature
interface SearchFunc {
    (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = (src, sub) => src.includes(sub);

// Interface with constructor signature
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

// Hybrid types (function with properties)
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

// Extending multiple interfaces
interface Car extends Vehicle, Machine {
    brand: string;
}

// Interface merging
interface Box {
    height: number;
}

interface Box {
    width: number;
}

// Results in:
// interface Box {
//     height: number;
//     width: number;
// }

// Generic interface
interface Container<T> {
    value: T;
    getValue(): T;
} 