# Prime Factorization

## Overview
Prime factorization is the process of determining the prime numbers that multiply together to give a number.

## Algorithm Steps
1. Start with the smallest prime (2) and divide the number by it as many times as possible.
2. Move to the next prime (3, 5, etc.) and repeat the process.
3. If any number greater than 1 remains, it's prime and is added to the list of factors.

## Time Complexity
- O(sqrt(n)), where n is the number.

## Space Complexity
- O(log n), in the worst case where the number is a large prime number.
