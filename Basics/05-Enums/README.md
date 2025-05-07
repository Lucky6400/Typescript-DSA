# TypeScript Enums

Enums are a feature added by TypeScript to JavaScript that allows for defining a set of named constants. They provide a way to create a collection of related values that can be used as distinct types.

## Numeric Enums

### Basic Numeric Enum
```typescript
enum Direction {
    North, // 0
    South, // 1
    East,  // 2
    West   // 3
}
```
- Members are auto-incremented starting from 0
- Can access both value and name
- Bi-directional mapping between names and values

### Custom Numeric Values
```typescript
enum StatusCode {
    OK = 200,
    NotFound = 404,
    InternalServerError = 500
}
```
- Can assign specific numeric values
- Following values auto-increment from the last defined number
- Commonly used for HTTP status codes

## String Enums

### Basic String Enum
```typescript
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
```
- Must specify string values for all members
- No auto-incrementing
- More type-safe than numeric enums

## Heterogeneous Enums

```typescript
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
```
- Can mix string and numeric values
- Not commonly used
- Can lead to confusion

## Computed and Constant Members

```typescript
enum FileAccess {
    None = 0,
    Read = 1 << 1,      // 2
    Write = 1 << 2,     // 4
    ReadWrite = Read | Write, // 6
    G = "123".length    // computed
}
```
- Can use constant expressions
- Can use computed values
- Computed members must come after constant members

## Const Enums

```typescript
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
```
- Completely removed during compilation
- More performant than regular enums
- Cannot be used for reverse mapping

## Ambient Enums

```typescript
declare enum Environment {
    Development,
    Staging,
    Production
}
```
- Used in declaration files
- No implementation is emitted
- Useful for describing existing enum shapes

## Reverse Mapping

```typescript
enum Weekday {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
}

let dayName: string = Weekday[3]; // "Wednesday"
let dayNumber: Weekday = Weekday.Friday; // 5
```
- Can access enum values by their numeric value
- Only available in numeric enums
- Creates both forward and reverse mappings

## Enums with Functions

```typescript
enum MathOperations {
    Add,
    Subtract,
    Multiply,
    Divide
}

function calculate(operation: MathOperations, a: number, b: number): number {
    switch (operation) {
        case MathOperations.Add:
            return a + b;
        // ... other cases
    }
}
```
- Can use enums in function parameters
- Provides type safety for function arguments
- Great for switch statements

## Union Types with Enums

```typescript
enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}
```
- Can use enum members as types
- Useful for discriminated unions
- Provides better type safety

## Best Practices

1. Use const enums for better performance when possible
2. Use string enums for better type safety
3. Keep enums focused and small
4. Use PascalCase for enum names
5. Use singular names for enums
6. Consider using union types of string literals instead of enums for simpler cases
7. Document enum members when their meaning isn't obvious
8. Use numeric enums when you need reverse mapping
9. Use string enums when values need to be meaningful
10. Avoid heterogeneous enums unless absolutely necessary

## Common Use Cases

1. Status codes
2. Configuration options
3. Sets of constants
4. State machines
5. API endpoints
6. Permission levels
7. UI element states
8. Error types
9. Operation types
10. Configuration flags 