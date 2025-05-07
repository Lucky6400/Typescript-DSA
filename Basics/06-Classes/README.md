# TypeScript Classes

Classes in TypeScript provide a way to create reusable components and implement object-oriented programming concepts. They extend JavaScript classes with additional features and type safety.

## Basic Class Structure

### Simple Class
```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Some sound");
    }
}
```
- Properties must be declared
- Constructor initializes the instance
- Methods define behavior

## Access Modifiers

### Public, Private, and Protected
```typescript
class Person {
    private id: number;
    protected age: number;
    public name: string;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
```
- `private`: Only accessible within the class
- `protected`: Accessible within class and subclasses
- `public`: Accessible everywhere (default)

### Parameter Properties
```typescript
class User {
    constructor(
        private id: number,
        public name: string,
        protected age: number
    ) {}
}
```
- Shorthand for declaring and initializing class members
- Combines declaration and assignment
- Reduces boilerplate code

## Readonly Properties

```typescript
class Circle {
    readonly radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
}
```
- Cannot be modified after initialization
- Must be initialized in constructor or declaration
- Provides immutability

## Inheritance

```typescript
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    makeSound(): void {
        console.log("Woof!");
    }
}
```
- Extends base class functionality
- `super()` calls base class constructor
- Can override base class methods

## Abstract Classes

```typescript
abstract class Shape {
    abstract getArea(): number;
    
    printArea(): void {
        console.log(`Area: ${this.getArea()}`);
    }
}
```
- Cannot be instantiated directly
- May contain implementation details
- Can have abstract and concrete methods
- Must be extended by concrete classes

## Getters and Setters

```typescript
class Temperature {
    private _celsius: number = 0;

    get celsius(): number {
        return this._celsius;
    }

    set celsius(value: number) {
        if (value < -273.15) {
            throw new Error("Temperature below absolute zero!");
        }
        this._celsius = value;
    }
}
```
- Control access to class members
- Can include validation logic
- Look like properties to consumers
- Can be readonly (getter only)

## Static Members

```typescript
class MathUtils {
    static PI: number = 3.14159;

    static square(x: number): number {
        return x * x;
    }
}
```
- Belong to the class itself, not instances
- Accessed using class name
- Shared across all instances
- Useful for utility functions

## Interface Implementation

```typescript
interface Printable {
    print(): void;
}

class Book implements Printable {
    constructor(private title: string, private author: string) {}

    print(): void {
        console.log(`${this.title} by ${this.author}`);
    }
}
```
- Classes can implement multiple interfaces
- Must provide implementation for all interface members
- Helps ensure contract compliance

## Generic Classes

```typescript
class Container<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(): T | undefined {
        return this.items.pop();
    }
}
```
- Can work with different types
- Type specified when instantiated
- Provides type safety with flexibility

## Decorators

```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${propertyKey} with:`, args);
        return originalMethod.apply(this, args);
    };
}

class Calculator {
    @log
    add(x: number, y: number): number {
        return x + y;
    }
}
```
- Modify class, method, or property behavior
- Applied using @ syntax
- Useful for metadata, logging, etc.
- Requires experimental decorators flag

## Design Patterns

### Singleton Pattern
```typescript
class Singleton {
    private static instance: Singleton;
    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
```
- Ensures single instance
- Private constructor
- Static access method

## Advanced Features

### Index Signatures
```typescript
class Dictionary {
    [key: string]: string;
}
```
- Allow dynamic property names
- Specify type for keys and values
- Useful for collection-like classes

### Method Overloading
```typescript
class StringManipulator {
    transform(value: string): string;
    transform(value: string, uppercase: boolean): string;
    transform(value: string, uppercase?: boolean): string {
        return uppercase ? value.toUpperCase() : value.toLowerCase();
    }
}
```
- Multiple function signatures
- Same method name, different parameters
- Provides type safety for different uses

## Best Practices

1. Use PascalCase for class names
2. Keep classes focused and single-purpose
3. Prefer composition over inheritance
4. Use access modifiers appropriately
5. Document complex class behavior
6. Use readonly when properties shouldn't change
7. Consider using interfaces for public APIs
8. Make properties private by default
9. Use parameter properties for simple classes
10. Follow SOLID principles 