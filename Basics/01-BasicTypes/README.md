# TypeScript Basic Types

TypeScript extends JavaScript by adding static types to the language. This document covers all the basic types available in TypeScript.

## Primitive Types

### String
- Represents textual data
- Declared using `string` type annotation
- Can use single quotes, double quotes, or backticks
```typescript
let username: string = "John";
```

### Number
- Represents both integer and floating-point numbers
- All numbers in TypeScript are floating-point values
```typescript
let age: number = 25;
let price: number = 99.99;
```

### Boolean
- Represents a logical value
- Can only be `true` or `false`
```typescript
let isAdmin: boolean = false;
```

## Arrays
TypeScript has two ways to declare arrays:
1. Using square brackets: `type[]`
2. Using generic Array type: `Array<type>`

```typescript
let scores: number[] = [90, 85, 70];
let fruits: Array<string> = ["apple", "banana"];
```

## Tuple
- Represents an array with a fixed number of elements whose types are known
- Types don't need to be the same
```typescript
let userTuple: [string, number] = ["Alice", 30];
```

## Any and Unknown
### Any
- Opt-out of type checking
- Use sparingly as it defeats the purpose of TypeScript
```typescript
let randomValue: any = 10;
randomValue = "Hello"; // No type error
```

### Unknown
- Safer alternative to `any`
- Requires type checking before use
```typescript
let input: unknown = "data";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
```

## Void, Null, and Undefined
- `void`: typically used as return type of functions that don't return a value
- `null` and `undefined`: represent absence of value
```typescript
function logMessage(): void {
    console.log("This is a message");
}
```

## Never
- Represents values that never occur
- Used for functions that never return or always throw exceptions
```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

## Object
- Represents any non-primitive type
- Can be any object literal
```typescript
let user: object = {
    name: "Bob",
    age: 25
};
```

## Symbol
- Represents unique identifiers
- Created using `Symbol()` function
```typescript
let sym: symbol = Symbol("key");
```

## BigInt
- Represents whole numbers larger than 2^53 - 1
- Created using `BigInt()` function or `n` suffix
```typescript
let bigNumber: bigint = BigInt(9007199254740991);
```

## Type Inference
TypeScript can automatically determine types when values are assigned during declaration:
```typescript
let country = "India"; // TypeScript infers this as string
```

## Best Practices
1. Always try to use the most specific type possible
2. Avoid using `any` unless absolutely necessary
3. Use type inference when the type is obvious
4. Use `unknown` instead of `any` when the type is truly unknown
5. Consider using strict null checks (`strictNullChecks` compiler option) 