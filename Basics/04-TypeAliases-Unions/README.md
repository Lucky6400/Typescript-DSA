# TypeScript Type Aliases and Unions

Type aliases and unions are powerful features in TypeScript that allow you to create custom types and combine existing types in flexible ways.

## Type Aliases

### Basic Type Alias
```typescript
type UserID = string | number;
let id: UserID = "abc123";
id = 123; // Also valid
```
- Creates a new name for a type
- Can be used to simplify complex type annotations
- More readable and maintainable code

### Object Type Alias
```typescript
type Point = {
    x: number;
    y: number;
};
```
- Creates reusable object types
- Similar to interfaces but more flexible
- Can be used with primitives, unions, and tuples

## Union Types

### Basic Union
```typescript
type Status = "pending" | "approved" | "rejected";
let orderStatus: Status = "pending";
```
- Combines multiple types into one
- Value can be any of the specified types
- Often used with literal types

### Nullable Union
```typescript
type MaybeString = string | null;
let nullableStr: MaybeString = "hello";
nullableStr = null; // valid
```
- Explicitly handles null values
- Better than using `any`
- Works well with strict null checks

## Intersection Types

### Combining Types
```typescript
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    level: number;
};

type ManagerWithEmployee = Employee & Manager;
```
- Combines multiple types into one
- Must satisfy all type requirements
- Properties are merged

## Advanced Type Features

### Generic Type Aliases
```typescript
type Container<T> = {
    value: T;
    tag: string;
};
```
- Can use type parameters
- Provides type safety with flexibility
- Reusable with different types

### Discriminated Unions
```typescript
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
```
- Union types with a common discriminant property
- Enables type-safe pattern matching
- Great for state management

### Function Type Aliases
```typescript
type Operation = (x: number, y: number) => number;
const add: Operation = (x, y) => x + y;
```
- Creates reusable function types
- Improves code organization
- Can be used with callbacks and methods

### Recursive Types
```typescript
type TreeNode<T> = {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
};
```
- Types that reference themselves
- Used for tree-like data structures
- Can be combined with generics

### String Literal Types
```typescript
type Direction = "north" | "south" | "east" | "west";
let currentDirection: Direction = "north";
```
- Union of specific string values
- Provides compile-time checking
- Great for enumerated values

### Complex Union Types
```typescript
type ValidationResult = 
    | { success: true; value: string }
    | { success: false; error: string };
```
- Combines multiple object types
- Can have different properties based on discriminant
- Useful for result types

### Mapped Types
```typescript
type Optional<T> = {
    [K in keyof T]?: T[K];
};
```
- Transform types into new types
- Can modify property modifiers
- Useful for type transformations

### Conditional Types
```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
```
- Types that depend on type conditions
- Use extends keyword for type constraints
- Powerful type transformations

## Best Practices
1. Use descriptive names for type aliases
2. Prefer type aliases for unions and tuples
3. Use interfaces for object types when possible
4. Use discriminated unions for state management
5. Keep union types focused and minimal
6. Document complex type aliases
7. Use generics to make types reusable
8. Consider using mapped types for type transformations
9. Use conditional types sparingly
10. Combine with interfaces when appropriate 