# TypeScript Generics

Generics are a way to create reusable components that can work with multiple types while maintaining type safety. They allow you to write flexible, reusable code without sacrificing type information.

## Basic Generics

### Generic Functions
```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity(123); // Type inference
```
- Type parameter `T` acts as a placeholder
- Can explicitly specify type or use type inference
- Preserves type information throughout the function

### Generic Interfaces
```typescript
interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;
```
- Can define generic interfaces
- Type parameter specified when using interface
- Can describe function signatures

## Generic Classes

```typescript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;

    constructor(zero: T, addFn: (x: T, y: T) => T) {
        this.zeroValue = zero;
        this.add = addFn;
    }
}
```
- Class can have generic type parameters
- Type parameter scoped to entire class
- Can have multiple type parameters

## Multiple Type Parameters

```typescript
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}
```
- Can use multiple type parameters
- Each parameter can be different
- Useful for handling multiple types

## Generic Constraints

### Basic Constraints
```typescript
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
```
- Restrict types that can be used
- Uses `extends` keyword
- Ensures required properties exist

### Using Type Parameters in Constraints
```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
```
- Can constrain one type parameter based on another
- `keyof` gets union of object keys
- Ensures type safety for property access

## Generic Parameter Defaults

```typescript
interface Container<T = string> {
    value: T;
}

let stringContainer: Container = { value: "hello" };
```
- Can specify default type
- Used when no type argument provided
- Improves usability

## Advanced Generic Features

### Generic Mapped Types
```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Partial<T> = {
    [P in keyof T]?: T[P];
};
```
- Transform types into new types
- Can modify property modifiers
- Built-in utility types in TypeScript

### Generic Conditional Types
```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
```
- Type selection based on condition
- Uses conditional type syntax
- Powerful type transformations

### Generic Type Inference
```typescript
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}
```
- TypeScript can infer types
- Constraints can guide inference
- Results in better type safety

### Generic Promise Handling
```typescript
async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
}
```
- Can work with async operations
- Type safety for async results
- Better error handling

### Generic Function Overloads
```typescript
function process<T>(x: T): T;
function process<T>(x: T[]): T;
function process<T>(x: T | T[]): T {
    if (Array.isArray(x)) {
        return x[0];
    }
    return x;
}
```
- Multiple function signatures
- Type safety for different uses
- Common in utility functions

### Generic Type Guards
```typescript
function isArray<T>(value: T | T[]): value is T[] {
    return Array.isArray(value);
}
```
- Type narrowing with generics
- Runtime type checking
- Improved type inference

### Generic Factory Functions
```typescript
interface Widget {
    id: string;
    render(): void;
}

function createWidget<T extends Widget>(c: new () => T): T {
    return new c();
}
```
- Create instances of generic types
- Ensure type safety in factories
- Useful for dependency injection

### Generic Mixins
```typescript
type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        timestamp = Date.now();
    };
}
```
- Add functionality to existing classes
- Preserve type information
- Flexible composition

## Best Practices

1. Use meaningful type parameter names
2. Keep type parameters minimal
3. Use constraints to ensure type safety
4. Leverage type inference when possible
5. Document generic parameters
6. Consider using default type parameters
7. Use built-in generic types when available
8. Test with different type arguments
9. Avoid overcomplicating generic constraints
10. Consider performance implications

## Common Use Cases

1. Collections and containers
2. Factory functions
3. State management
4. API responses
5. Utility functions
6. Component props
7. Data transformations
8. Type-safe event handling
9. Generic error handling
10. Generic data structures 