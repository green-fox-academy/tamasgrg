'use strict';
export function fibonacci(n: number): number {
  if (n == 1 || n == 0) {
    return 0;
  } else if (n == 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(
fibonacci(2)
)