'use strict';
// Greatest Common Divisor
// Find the greatest common divisor of two numbers using recursion.
function greatestCommonDivisor(a: number, b: number): number {
  if (a == 0 || b == 0) return 0;
  if (a == b || a % b == 0) return b;
  if (b > a) return greatestCommonDivisor (b, a);
  else {
    return greatestCommonDivisor(b, a % b);
  }
}

console.log(greatestCommonDivisor(120, 1000));
export{};