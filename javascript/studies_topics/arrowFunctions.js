/* Arrow functions are a shorter way to write functions in JavaScript.
They have a concise syntax using the => (fat arrow) operator.
Arrow functions inherit the this value from their surrounding context. */

// Regular function
function greet(name) {
    return "Hello, " + name + "!";
}

// Arrow function
const greetArrow = (name) => "Hello, " + name + "!";


/* The map() method is useful when we want to transform each element
of an array into another value, while the filter() method is useful
for filtering elements based on a specific condition.
 */

const numbers = [1, 2, 3];
const doubled = numbers.map(number => number * 2);
// Output: [2, 4, 6]

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares);
// Output: [2, 4]