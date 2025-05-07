// Enums in TypeScript

// Numeric enum
enum Direction {
    North, // 0
    South, // 1
    East,  // 2
    West   // 3
}

let myDirection: Direction = Direction.North;
console.log(myDirection); // 0

// Numeric enum with custom values
enum StatusCode {
    OK = 200,
    NotFound = 404,
    InternalServerError = 500
}

let status: StatusCode = StatusCode.OK;
console.log(StatusCode[status]); // "OK"

// String enum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let myColor: Color = Color.Red;
console.log(myColor); // "RED"

// Heterogeneous enum (mixed)
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

// Computed and constant members
enum FileAccess {
    // constant members
    None = 0,
    Read = 1 << 1,      // 2
    Write = 1 << 2,     // 4
    ReadWrite = Read | Write, // 6
    // computed member
    G = "123".length
}

// Enum with functions
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
        case MathOperations.Subtract:
            return a - b;
        case MathOperations.Multiply:
            return a * b;
        case MathOperations.Divide:
            return a / b;
        default:
            throw new Error("Unknown operation");
    }
}

// Const enum (completely removed during compilation)
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let move = Directions.Up;

// Ambient enum (used in declaration files)
declare enum Environment {
    Development,
    Staging,
    Production
}

// Reverse mapping
enum Weekday {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
}

let dayName: string = Weekday[3]; // "Wednesday"
let dayNumber: Weekday = Weekday.Friday; // 5

// Union enum type
enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

// Enum as parameter
function printDirection(dir: Direction) {
    console.log("Direction: " + Direction[dir]);
} 