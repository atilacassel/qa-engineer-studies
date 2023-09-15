/* Template literals are a way to create strings in a more readable and flexible manner.
They use backticks (`) to enclose the string and allow embedding variables or expressions using `${}`. */

const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting);


const multilineString = `
  This is a
  multiline
  string.
`;
console.log(multilineString);

const x = 10;
const y = 20;
const result = `The sum of ${x} and ${y} is ${x + y}.`;
console.log(result);