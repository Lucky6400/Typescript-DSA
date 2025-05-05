# Modular Inverse

## Overview
The modular inverse of a number (a) modulo (m) is the number (x) such that:
[
a 	imes x equiv 1  (	ext{mod}  m)
]

## Algorithm Steps
1. If GCD(a, m) is 1, then the modular inverse exists and can be calculated using Fermat's Little Theorem as:
[
a^{m-2}  (	ext{mod}  m)
]
2. If GCD(a, m) is not 1, then no modular inverse exists.

## Time Complexity
- O(log m), where m is the modulus.

## Space Complexity
- O(1).
