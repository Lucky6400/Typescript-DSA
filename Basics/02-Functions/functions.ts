// Function Types in TypeScript

// Basic function with type annotations
function add(a: number, b: number): number {
    return a + b;
}

// Function with optional parameter
function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}`;
}

// Function with default parameter
function multiply(a: number, b: number = 2): number {
    return a * b;
}

// Rest parameters
function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0);
}

// Arrow function with type annotation
const divide = (a: number, b: number): number => a / b;

// Function type alias
type MathOperation = (x: number, y: number) => number;
const subtract: MathOperation = (x, y) => x - y;

// Method in object type
interface Calculator {
    add: (x: number, y: number) => number;
    subtract: (x: number, y: number) => number;
}

// Function overloads
function processValue(value: number): number;
function processValue(value: string): string;
function processValue(value: number | string): number | string {
    if (typeof value === "number") {
        return value * 2;
    }
    return value.toUpperCase();
}

// Generic function
function identity<T>(arg: T): T {
    return arg;
}

// Async function
async function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data loaded"), 1000);
    });
}

// Function with callback
function processWithCallback(value: string, callback: (result: string) => void): void {
    callback(value.toUpperCase());
}

// Function as class constructor
class Person {
    constructor(public name: string, public age: number) {}
}

// Generator function
function* numberGenerator(): Generator<number> {
    yield 1;
    yield 2;
    yield 3;
} 