function foo(a, b) {
  a = (typeof a === 'number') ? a : 0;
  b = (typeof b === 'number') ? b : 0;
  if (isNaN(a) || isNaN(b)) {
    console.error('Invalid input: a and b must be numbers.');
    return NaN; // or throw an error
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0
console.log(foo('abc', 2)); // Error message and NaN