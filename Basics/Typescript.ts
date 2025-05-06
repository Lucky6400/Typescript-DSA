// ------------------------------------------------------------
// ✅ Basic Types
// ------------------------------------------------------------

// Type annotation for primitives
let username: string = "John"; // string type
let age: number = 25; // number type
let isAdmin: boolean = false; // boolean type

// Type inference (TS automatically understands the type)
let country = "India"; // inferred as string

// Arrays
let scores: number[] = [90, 85, 70]; // array of numbers
let fruits: Array<string> = ["apple", "banana"]; // generic array syntax

// Tuples (fixed length and types)
let userTuple: [string, number] = ["Alice", 30];

// Any type (avoid if possible)
let randomValue: any = 10;
randomValue = "Hello"; // valid

// Unknown type (safer than 'any')
let input: unknown = "data";

// ------------------------------------------------------------
// ✅ Functions
// ------------------------------------------------------------

// Function with type annotations
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameters
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}`;
}

// Default parameters
function multiply(a: number, b: number = 2): number {
  return a * b;
}

// Rest parameters
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}

// Function type alias
type BinaryOp = (x: number, y: number) => number;
const subtract: BinaryOp = (x, y) => x - y;

// ------------------------------------------------------------
// ✅ Objects and Interfaces
// ------------------------------------------------------------

// Object type
let user: { name: string; age: number } = {
  name: "Bob",
  age: 22,
};

// Interface for objects
interface Person {
  name: string;
  age: number;
  isStudent?: boolean; // optional property
}

const person1: Person = {
  name: "Eva",
  age: 20,
};

// ------------------------------------------------------------
// ✅ Type Aliases and Unions
// ------------------------------------------------------------

type ID = number | string; // Union type
let userId: ID = 101;
userId = "A101"; // valid

// Literal types
let direction: "up" | "down";
direction = "up"; // only "up" or "down" allowed

// ------------------------------------------------------------
// ✅ Enums
// ------------------------------------------------------------

enum Role {
  User,
  Admin,
  SuperAdmin,
}

let myRole: Role = Role.Admin; // 1

// ------------------------------------------------------------
// ✅ Type Assertions
// ------------------------------------------------------------

let someValue: unknown = "I am a string";
let strLength: number = (someValue as string).length; // asserting type

// ------------------------------------------------------------
// ✅ Classes
// ------------------------------------------------------------

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak();

// ------------------------------------------------------------
// ✅ Generics
// ------------------------------------------------------------

// Generic function
function identity<T>(value: T): T {
  return value;
}

let numberResult = identity<number>(42);
let stringResult = identity<string>("TypeScript");

// Generic interface
interface Box<T> {
  content: T;
}

let box: Box<string> = { content: "Books" };

// ------------------------------------------------------------
// ✅ Utility Types
// ------------------------------------------------------------

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Partial: all properties optional
let todo1: Partial<Todo> = { title: "Learn TS" };

// Readonly: makes all props read-only
let todo2: Readonly<Todo> = {
  title: "Learn TS",
  description: "Master the basics",
  completed: false,
};

// Pick: select specific props
type TodoTitle = Pick<Todo, "title">;

// Omit: remove specific props
type TodoWithoutDescription = Omit<Todo, "description">;

// ------------------------------------------------------------
// ✅ Advanced: Intersection & Conditional Types
// ------------------------------------------------------------

type Admin = {
  admin: true;
  level: number;
};

type User = {
  name: string;
};

// Intersection
type AdminUser = User & Admin;
const adminUser: AdminUser = {
  name: "Sara",
  admin: true,
  level: 1,
};

// Conditional Type
type IsString<T> = T extends string ? "Yes" : "No";
type Test1 = IsString<string>; // "Yes"
type Test2 = IsString<number>; // "No"

// ------------------------------------------------------------
// ✅ Modules (export/import)
// ------------------------------------------------------------

// Normally placed in separate files:
// export function sayHello() {...}
// import { sayHello } from './utils';
