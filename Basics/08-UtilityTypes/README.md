# TypeScript Utility Types

TypeScript includes several utility types to facilitate common type transformations. These utilities are available globally and help in manipulating and working with types.

## Basic Utility Types

### Partial<T>
```typescript
interface User {
    id: number;
    name: string;
    email: string;
}

type PartialUser = Partial<User>;
// Makes all properties optional
```
- Makes all properties in T optional
- Useful for update operations
- Creates a new type

### Required<T>
```typescript
interface PartialPoint {
    x?: number;
    y?: number;
}

type Point = Required<PartialPoint>;
// Makes all properties required
```
- Makes all properties required
- Removes optional modifiers
- Opposite of Partial

### Readonly<T>
```typescript
type ReadonlyUser = Readonly<User>;
const user: ReadonlyUser = {
    id: 1,
    name: "John",
    email: "john@example.com"
};
// user.name = "Jane"; // Error!
```
- Makes all properties read-only
- Prevents modifications after creation
- Useful for immutable data

## Property Selection

### Pick<T, K>
```typescript
type UserBasicInfo = Pick<User, "name" | "email">;
// Creates a type with only selected properties
```
- Constructs a type with selected properties
- K must be a union of literal types
- Properties must exist in T

### Omit<T, K>
```typescript
type UserWithoutId = Omit<User, "id">;
// Creates a type without specified properties
```
- Constructs a type without specified properties
- Opposite of Pick
- Useful for excluding properties

## Type Manipulation

### Record<K, T>
```typescript
type UserRoles = "admin" | "user" | "guest";
type RoleDescription = Record<UserRoles, string>;
```
- Creates an object type with specified keys and value type
- K must be a union of literal types
- All properties will have type T

### Exclude<T, U>
```typescript
type NumericOrString = number | string | boolean;
type StringOnly = Exclude<NumericOrString, number | boolean>;
```
- Removes types from T that are assignable to U
- Works with union types
- Creates a new union type

### Extract<T, U>
```typescript
type StringAndNumber = Extract<NumericOrString, string | number>;
```
- Extracts types from T that are assignable to U
- Opposite of Exclude
- Creates a new union type

### NonNullable<T>
```typescript
type NullableString = string | null | undefined;
type DefinitelyString = NonNullable<NullableString>;
```
- Removes null and undefined from type
- Creates a new type
- Useful for type safety

## Function Types

### ReturnType<T>
```typescript
function createUser(name: string): User {
    return { id: 1, name, email: "" };
}
type CreateUserReturn = ReturnType<typeof createUser>;
```
- Extracts return type of a function
- Works with function type
- Useful for type inference

### Parameters<T>
```typescript
type CreateUserParams = Parameters<typeof createUser>;
```
- Extracts parameter types as tuple
- Works with function type
- Useful for function type manipulation

### InstanceType<T>
```typescript
class UserManager {
    private users: User[] = [];
}
type UserManagerInstance = InstanceType<typeof UserManager>;
```
- Extracts instance type of a constructor
- Works with class type
- Useful for factory patterns

## String Manipulation Types

### Template Literal Types
```typescript
type UserEvent = `user_${Lowercase<UserRoles>}_event`;
```
- Manipulate string literal types
- Can combine with other utility types
- Support string transformations

### String Manipulation Utilities
```typescript
type UppercaseRole = Uppercase<"admin">;    // "ADMIN"
type LowercaseRole = Lowercase<"ADMIN">;    // "admin"
type CapitalizedRole = Capitalize<"admin">; // "Admin"
```
- Transform string literal types
- Built-in string manipulations
- Type-level string operations

## Custom Utility Types

### Creating Custom Utilities
```typescript
type Nullable<T> = T | null;
type Optional<T> = T | undefined;
type Maybe<T> = T | null | undefined;
```
- Create reusable type transformations
- Combine existing utility types
- Enhance type safety

### Deep Partial
```typescript
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
```
- Makes all properties optional recursively
- Works with nested objects
- Useful for deep updates

### Mutable
```typescript
type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
```
- Removes readonly modifiers
- Opposite of Readonly
- Useful for type transformations

## Best Practices

1. Use built-in utility types when possible
2. Combine utility types for complex transformations
3. Create custom utility types for reusable patterns
4. Document custom utility types
5. Consider type safety implications
6. Use with TypeScript strict mode
7. Test utility types with different inputs
8. Keep utility types focused and simple
9. Use meaningful names for custom utilities
10. Consider performance implications

## Common Use Cases

1. API request/response types
2. Form handling
3. State management
4. Data transformation
5. Type safety enforcement
6. Configuration objects
7. Function signatures
8. Object manipulation
9. Type inference
10. Type guards and assertions 