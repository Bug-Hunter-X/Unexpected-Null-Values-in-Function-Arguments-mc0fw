function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed for a and b.');
  }
  return a + b;
}

console.log(foo(5,5)); // Output: 10

try {
  console.log(foo(null, 5));
} catch (e) {
  console.error("Error:", e.message);
}

try {
  console.log(foo(5, null));
} catch (e) {
  console.error("Error:", e.message);
}
