# TypeScript Objects and Interfaces

Objects and interfaces are fundamental concepts in TypeScript that help define the shape and structure of data. They provide strong typing and code organization capabilities.

## Object Types

### Basic Object Type Annotation
```typescript
let user: { name: string; age: number } = {
    name: "Bob",
    age: 25
};
```
- Defines an object with specific property types
- Properties must match exactly
- Inline type annotation

## Interfaces

### Basic Interface Declaration
```typescript
interface Person {
    name: string;
    age: number;
    email?: string;      // Optional property
    readonly id: number; // Read-only property
}
```
- Defines a contract for object structure
- Can include optional properties with `?`
- Can have read-only properties
- More maintainable than inline object types

### Interface Implementation
```typescript
const employee: Person = {
    name: "Alice",
    age: 30,
    id: 1
};
```
- Objects must satisfy all required properties
- Optional properties can be omitted
- Read-only properties can't be modified after creation

## Interface Features

### Methods in Interfaces
```typescript
interface Animal {
    name: string;
    makeSound(): void;
    eat(food: string): void;
}
```
- Can define method signatures
- Methods can have parameters and return types
- Implementation must match signature exactly

### Class Implementation
```typescript
class Dog implements Animal {
    constructor(public name: string) {}

    makeSound(): void {
        console.log("Woof!");
    }

    eat(food: string): void {
        console.log(`${this.name} is eating ${food}`);
    }
}
```
- Classes can implement interfaces
- Must provide all required properties and methods
- Can add additional members

### Interface Extension
```typescript
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}
```
- Interfaces can extend other interfaces
- Inherits all members from base interface
- Can add additional members

### Index Signatures
```typescript
interface StringArray {
    [index: number]: string;
}
```
- Defines type for array-like or dictionary-like objects
- Can use number or string as index type
- All indexed properties must match signature type

### Call Signatures
```typescript
interface SearchFunc {
    (source: string, subString: string): boolean;
}
```
- Defines function type
- Can be used for function objects
- Parameters and return type must match

### Constructor Signatures
```typescript
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
```
- Defines how a class constructor should look
- Used when working with class factories
- Specifies parameters and return type

### Hybrid Types
```typescript
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
```
- Combines function and object types
- Can have properties and be callable
- Useful for complex JavaScript patterns

### Interface Merging
```typescript
interface Box {
    height: number;
}

interface Box {
    width: number;
}
```
- Multiple declarations merge automatically
- Non-conflicting members are combined
- Useful for declaration augmentation

### Generic Interfaces
```typescript
interface Container<T> {
    value: T;
    getValue(): T;
}
```
- Can use type parameters
- Provides type safety with flexibility
- Type specified when used

## Best Practices
1. Use interfaces for object types when possible
2. Keep interfaces focused and single-purpose
3. Use meaningful names that describe the contract
4. Document complex interfaces
5. Use readonly when properties shouldn't change
6. Consider using type aliases for union types
7. Use extension to share common properties
8. Be consistent with optional properties
9. Use strict null checks with interfaces
10. Consider using interface merging for modularity 