// Basic Bitwise Operators in TypeScript
function bitwiseOperators(a: number, b: number): void {
  console.log("AND: ", a & b);
  console.log("OR: ", a | b);
  console.log("XOR: ", a ^ b);
  console.log("NOT: ", ~a);
  console.log("Left Shift: ", a << 1);
  console.log("Right Shift: ", a >> 1);
}

// Usage
bitwiseOperators(5, 3);  // a = 5 (101), b = 3 (011)
