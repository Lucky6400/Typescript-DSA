// Classes in TypeScript

// Basic class
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Some sound");
    }
}

// Class with access modifiers
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

// Parameter properties shorthand
class User {
    constructor(
        private id: number,
        public name: string,
        protected age: number
    ) {}
}

// Readonly properties
class Circle {
    readonly radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

// Inheritance
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

// Abstract classes
abstract class Shape {
    abstract getArea(): number;
    
    printArea(): void {
        console.log(`Area: ${this.getArea()}`);
    }
}

class Square extends Shape {
    constructor(private side: number) {
        super();
    }

    getArea(): number {
        return this.side ** 2;
    }
}

// Getters and setters
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

    get fahrenheit(): number {
        return (this._celsius * 9/5) + 32;
    }
}

// Static members
class MathUtils {
    static PI: number = 3.14159;

    static square(x: number): number {
        return x * x;
    }
}

// Interface implementation
interface Printable {
    print(): void;
}

class Book implements Printable {
    constructor(private title: string, private author: string) {}

    print(): void {
        console.log(`${this.title} by ${this.author}`);
    }
}

// Generic classes
class Container<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(): T | undefined {
        return this.items.pop();
    }
}

// Method decorators (requires experimental decorators)
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

// Singleton pattern
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

// Class with index signature
class Dictionary {
    [key: string]: string;
}

// Class with method overloading
class StringManipulator {
    transform(value: string): string;
    transform(value: string, uppercase: boolean): string;
    transform(value: string, uppercase?: boolean): string {
        return uppercase ? value.toUpperCase() : value.toLowerCase();
    }
} 