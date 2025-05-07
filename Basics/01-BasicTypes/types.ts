// Basic Types in TypeScript

// Type annotation for primitives
let username: string = "John";
let age: number = 25;
let isAdmin: boolean = false;

// Type inference
let country = "India"; // TypeScript automatically infers this as string

// Arrays
let scores: number[] = [90, 85, 70];
let fruits: Array<string> = ["apple", "banana"];

// Tuples (fixed-length arrays with specific types)
let userTuple: [string, number] = ["Alice", 30];

// Any type (avoid if possible)
let randomValue: any = 10;
randomValue = "Hello"; // valid because it's 'any'

// Unknown type (safer than 'any')
let input: unknown = "data";
// Need type checking before using unknown values
if (typeof input === "string") {
    console.log(input.toUpperCase());
}

// Void type (used in functions that don't return anything)
function logMessage(): void {
    console.log("This is a message");
}

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Never type (for functions that never return)
function throwError(message: string): never {
    throw new Error(message);
}

// Object type
let user: object = {
    name: "Bob",
    age: 25
};

// Symbol type
let sym: symbol = Symbol("key");

// BigInt type
let bigNumber: bigint = BigInt(9007199254740991); 