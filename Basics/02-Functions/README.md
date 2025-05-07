# TypeScript Functions

Functions are the fundamental building blocks of any application. TypeScript adds additional features to JavaScript functions through type annotations and other enhancements.

## Basic Function Types

### Function Declaration with Type Annotations
```typescript
function add(a: number, b: number): number {
    return a + b;
}
```
- Parameters `a` and `b` are annotated as numbers
- Return type is explicitly set to `number`
- TypeScript will ensure type safety for both inputs and output

## Optional and Default Parameters

### Optional Parameters
```typescript
function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}`;
}
```
- Optional parameters are marked with `?`
- Must come after required parameters
- Can be undefined

### Default Parameters
```typescript
function multiply(a: number, b: number = 2): number {
    return a * b;
}
```
- Provides a default value if parameter is not provided
- Type is inferred from default value

## Rest Parameters
```typescript
function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0);
}
```
- Collects multiple arguments into an array
- Must be the last parameter
- Can only have one rest parameter

## Arrow Functions
```typescript
const divide = (a: number, b: number): number => a / b;
```
- Shorter syntax for function expressions
- Maintains lexical `this` binding
- Can have type annotations like regular functions

## Function Type Aliases
```typescript
type MathOperation = (x: number, y: number) => number;
const subtract: MathOperation = (x, y) => x - y;
```
- Creates reusable function types
- Improves code organization and maintainability
- Can be used as type annotations

## Function Overloads
```typescript
function processValue(value: number): number;
function processValue(value: string): string;
function processValue(value: number | string): number | string {
    if (typeof value === "number") {
        return value * 2;
    }
    return value.toUpperCase();
}
```
- Allows multiple function signatures
- Implementation must handle all overload cases
- Provides better type safety

## Generic Functions
```typescript
function identity<T>(arg: T): T {
    return arg;
}
```
- Work with multiple types while maintaining type safety
- Type parameter `T` can be used throughout function
- TypeScript infers type when possible

## Async Functions
```typescript
async function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data loaded"), 1000);
    });
}
```
- Returns a Promise
- Can use `await` keyword inside
- Type annotation includes Promise type

## Callbacks
```typescript
function processWithCallback(value: string, callback: (result: string) => void): void {
    callback(value.toUpperCase());
}
```
- Functions passed as arguments
- Type annotation describes callback signature
- Often used in asynchronous operations

## Constructor Functions
```typescript
class Person {
    constructor(public name: string, public age: number) {}
}
```
- Special functions for creating class instances
- Can have parameter property declarations
- TypeScript adds type checking for construction

## Generator Functions
```typescript
function* numberGenerator(): Generator<number> {
    yield 1;
    yield 2;
    yield 3;
}
```
- Functions that can be paused and resumed
- Use `yield` keyword to return values
- Type annotation includes Generator type

## Best Practices
1. Always specify return types for public APIs
2. Use type inference for simple functions when types are obvious
3. Prefer interfaces over type aliases for function types when possible
4. Use generics when functions work with multiple types
5. Document complex function signatures
6. Keep functions small and focused
7. Use meaningful parameter names
8. Consider using named function types for complex signatures 