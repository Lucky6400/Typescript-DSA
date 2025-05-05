# Euclidean Algorithm (GCD, LCM)

## Overview
The Euclidean algorithm is an efficient method to compute the greatest common divisor (GCD) of two numbers. The least common multiple (LCM) can also be computed using GCD.

## GCD Algorithm Steps
1. While ( b 
eq 0 ), set ( a ) to ( b ) and ( b ) to ( a % b ).
2. The result will be ( a ), which is the GCD.

## LCM Algorithm
LCM can be computed as: 
[
LCM(a, b) = rac{|a 	imes b|}{GCD(a, b)}
]

## Time Complexity
- O(log min(a, b)), where a and b are the two numbers.

## Space Complexity
- O(1).
