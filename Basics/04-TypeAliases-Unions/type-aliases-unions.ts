// Type Aliases and Unions in TypeScript

// Basic type alias
type UserID = string | number;
let id: UserID = "abc123";
id = 123; // Also valid

// Union types
type Status = "pending" | "approved" | "rejected";
let orderStatus: Status = "pending";

// Type alias for object type
type Point = {
    x: number;
    y: number;
};

const point: Point = { x: 10, y: 20 };

// Union with null
type MaybeString = string | null;
let nullableStr: MaybeString = "hello";
nullableStr = null; // valid

// Intersection types
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    level: number;
};

type ManagerWithEmployee = Employee & Manager;

const manager: ManagerWithEmployee = {
    id: 1,
    name: "John",
    department: "IT",
    level: 2
};

// Type alias with generics
type Container<T> = {
    value: T;
    tag: string;
};

const numberContainer: Container<number> = {
    value: 123,
    tag: "number-container"
};

// Discriminated unions
type Circle = {
    kind: "circle";
    radius: number;
};

type Rectangle = {
    kind: "rectangle";
    width: number;
    height: number;
};

type Shape = Circle | Rectangle;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
    }
}

// Type aliases with functions
type Operation = (x: number, y: number) => number;
const add: Operation = (x, y) => x + y;

// Recursive types
type TreeNode<T> = {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
};

// Type alias with string literal
type Direction = "north" | "south" | "east" | "west";
let currentDirection: Direction = "north";

// Complex union type
type ValidationResult = 
    | { success: true; value: string }
    | { success: false; error: string };

function validate(input: string): ValidationResult {
    if (input.length > 0) {
        return { success: true, value: input };
    }
    return { success: false, error: "Input is empty" };
}

// Type alias with mapped type
type Optional<T> = {
    [K in keyof T]?: T[K];
};

// Type alias with conditional type
type NonNullable<T> = T extends null | undefined ? never : T; 