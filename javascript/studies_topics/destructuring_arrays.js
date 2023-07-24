//Atribuicao basica
/* const number = [1, 2, 3];
const [a, b, c] = number;

console.log(a);
console.log(b);
console.log(c); */

//Ignorando elementos

/* const numbers = [1, 2, 3];
const [a, , c] = numbers;

console.log(a);
console.log(c); */

//Destructuring com rest operator
/* const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;

console.log(a);     
console.log(b);     
console.log(rest);  
 */

//Destructuring com valores padrao
const numbers = [1];
const [a = 0, b = 2] = numbers;

console.log(a); 
console.log(b); 
