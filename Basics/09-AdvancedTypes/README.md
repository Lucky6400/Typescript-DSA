# TypeScript Advanced Types

Advanced types in TypeScript provide powerful ways to express complex type relationships and create more type-safe code. These features enable sophisticated type manipulation and validation.

## Intersection Types

```typescript
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    email: string;
}

type Employee = BusinessPartner & Identity;
```
- Combines multiple types into one
- All properties must be satisfied
- Useful for mixing in behavior

## Union Types with Type Guards

```typescript
type StringOrNumber = string | number;

function processValue(value: StringOrNumber) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toFixed(2);
}
```
- Allows a value to be one of several types
- Type guards narrow down the type
- Provides type safety within branches

## Discriminated Unions

```typescript
interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Square | Rectangle;
```
- Union types with a common discriminant property
- Enables type-safe pattern matching
- Great for state management

## Index Types

```typescript
interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // "name" | "age"
```
- Access property names as types
- Type-safe property access
- Useful for generic operations

## Mapped Types

```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Partial<T> = {
    [P in keyof T]?: T[P];
};
```
- Transform types into new types
- Modify property modifiers
- Create type-safe transformations

## Conditional Types

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
type Flatten<T> = T extends Array<infer U> ? U : T;
```
- Type selection based on condition
- Can infer types from patterns
- Powerful type transformations

## Template Literal Types

```typescript
type EventName<T extends string> = `${T}_event`;
type UserEvents = EventName<"login" | "logout">;
```
- Create new string literal types
- Combine with other types
- Type-safe string manipulation

## Branded Types

```typescript
type Brand<K, T> = K & { __brand: T };
type USD = Brand<number, "USD">;
type EUR = Brand<number, "EUR">;
```
- Create nominal typing
- Prevent type confusion
- Type-safe domain values

## Polymorphic this Type

```typescript
class Calculator {
    constructor(public value: number = 0) {}

    add(n: number): this {
        this.value += n;
        return this;
    }
}
```
- Method returns containing type
- Enables method chaining
- Preserves derived type information

## Type Assertions with const

```typescript
const colors = ["red", "green", "blue"] as const;
type Color = typeof colors[number];
```
- Create readonly tuple types
- Extract literal types
- Type-safe constants

## Lookup Types

```typescript
interface ApiResponse {
    data: {
        user: {
            id: number;
            name: string;
        };
    };
}

type UserData = ApiResponse["data"]["user"];
```
- Access nested type information
- Type-safe property access
- Useful for API types

## Type Inference in Conditional Types

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
```
- Infer types from patterns
- Extract type information
- Powerful type manipulation

## String Literal Types with Template Literals

```typescript
type Position = "top" | "right" | "bottom" | "left";
type Margin = `margin-${Position}`;
```
- Create type-safe string literals
- Combine with unions
- CSS-like type safety

## Type Predicates

```typescript
function isString(value: unknown): value is string {
    return typeof value === "string";
}
```
- Custom type guards
- Runtime type checking
- Type narrowing

## Exhaustiveness Checking

```typescript
function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}
```
- Ensure all cases handled
- Compile-time safety
- Better error handling

## Advanced Mapped Types

```typescript
type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};
```
- Recursive type transformations
- Deep type modifications
- Complex type safety

## Distributive Conditional Types

```typescript
type BoxedValue<T> = { value: T };
type BoxedArray<T> = { array: T[] };
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;
```
- Distribute over unions
- Complex type transformations
- Type-safe containers

## Best Practices

1. Use discriminated unions for state
2. Leverage type guards for safety
3. Keep type transformations simple
4. Document complex types
5. Use branded types for domain values
6. Test type combinations
7. Consider performance implications
8. Use exhaustiveness checking
9. Prefer built-in type guards
10. Document type predicates

## Common Use Cases

1. State management
2. API type safety
3. Domain modeling
4. Type transformations
5. Validation
6. Error handling
7. Generic programming
8. Configuration types
9. Type-safe events
10. Complex data structures 