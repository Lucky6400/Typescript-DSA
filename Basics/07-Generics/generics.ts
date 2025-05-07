// Generics in TypeScript

// Basic generic function
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity(123); // Type inference

// Generic interface
interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;

// Generic class
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;

    constructor(zero: T, addFn: (x: T, y: T) => T) {
        this.zeroValue = zero;
        this.add = addFn;
    }
}

let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

let p = pair<string, number>("hello", 42);

// Generic constraints
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// Using type parameters in generic constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3 };
getProperty(x, "a");

// Generic parameter defaults
interface Container<T = string> {
    value: T;
}

let stringContainer: Container = { value: "hello" };
let numberContainer: Container<number> = { value: 123 };

// Generic constraints with classes
class BeeKeeper {
    hasMask: boolean = true;
}

class ZooKeeper {
    nametag: string = "Zookeeper";
}

class Animal {
    numLegs: number = 4;
}

class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

// Generic mapped types
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Partial<T> = {
    [P in keyof T]?: T[P];
};

// Generic conditional types
type NonNullable<T> = T extends null | undefined ? never : T;

// Generic type inference
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Generic array methods
function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

// Generic promise handling
async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
}

// Generic function overloads
function process<T>(x: T): T;
function process<T>(x: T[]): T;
function process<T>(x: T | T[]): T {
    if (Array.isArray(x)) {
        return x[0];
    }
    return x;
}

// Generic type guards
function isArray<T>(value: T | T[]): value is T[] {
    return Array.isArray(value);
}

// Generic factory function
interface Widget {
    id: string;
    render(): void;
}

class Button implements Widget {
    id: string = "button";
    render(): void {
        console.log("Rendering button");
    }
}

function createWidget<T extends Widget>(c: new () => T): T {
    return new c();
}

// Generic mixin
type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        timestamp = Date.now();
    };
} 