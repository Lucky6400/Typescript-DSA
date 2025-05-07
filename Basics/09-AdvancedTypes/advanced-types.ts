// Advanced Types in TypeScript

// Intersection Types
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    email: string;
}

type Employee = BusinessPartner & Identity;

const employee: Employee = {
    name: "John Doe",
    credit: 1000,
    id: 1,
    email: "john@example.com"
};

// Union Types with Type Guards
type StringOrNumber = string | number;

function processValue(value: StringOrNumber) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toFixed(2);
}

// Discriminated Unions
interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "square":
            return shape.size ** 2;
        case "rectangle":
            return shape.width * shape.height;
        case "circle":
            return Math.PI * shape.radius ** 2;
    }
}

// Index Types
interface Person {
    name: string;
    age: number;
    location: string;
}

type PersonKeys = keyof Person; // "name" | "age" | "location"
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Mapped Types
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Partial<T> = {
    [P in keyof T]?: T[P];
};

// Conditional Types
type NonNullable<T> = T extends null | undefined ? never : T;
type Flatten<T> = T extends Array<infer U> ? U : T;

// Conditional Types with Unions
type ToArray<T> = T extends any ? T[] : never;
type StrNumBool = ToArray<string | number | boolean>;

// Recursive Types
type JSONValue = 
    | string
    | number
    | boolean
    | null
    | JSONValue[]
    | { [key: string]: JSONValue };

// Template Literal Types
type EventName<T extends string> = `${T}_event`;
type UserEvents = EventName<"login" | "logout" | "signup">;

// Branded Types
type Brand<K, T> = K & { __brand: T };
type USD = Brand<number, "USD">;
type EUR = Brand<number, "EUR">;

function addDollars(a: USD, b: USD): USD {
    return (a + b) as USD;
}

// Polymorphic this Type
class Calculator {
    constructor(public value: number = 0) {}

    add(n: number): this {
        this.value += n;
        return this;
    }

    multiply(n: number): this {
        this.value *= n;
        return this;
    }
}

// Type Assertions with const
const colors = ["red", "green", "blue"] as const;
type Color = typeof colors[number];

// Lookup Types
interface ApiResponse {
    data: {
        user: {
            id: number;
            name: string;
        };
    };
}

type UserData = ApiResponse["data"]["user"];

// Type Inference in Conditional Types
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// String Literal Types with Template Literals
type Position = "top" | "right" | "bottom" | "left";
type Margin = `margin-${Position}`;

// Variadic Tuple Types
type Tail<T extends any[]> = T extends [any, ...infer U] ? U : never;

// Type Predicates
function isString(value: unknown): value is string {
    return typeof value === "string";
}

// Exhaustiveness Checking
function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}

// Advanced Mapped Types
type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// Distributive Conditional Types
type BoxedValue<T> = { value: T };
type BoxedArray<T> = { array: T[] };
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>; 