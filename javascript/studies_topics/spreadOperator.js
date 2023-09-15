/* The spread operator allows you to spread elements of an iterable (e.g., an array) into another array or object.
It is often used for copying, merging, or unpacking elements. */

//Copiar Array
const arrayOriginal = [1, 2, 3];
const copiaArray = [...arrayOriginal];

console.log(copiaArray);

//Combinar Arrays
const arra2 = [4, 5, 6];
const combinacaoArrays = [...arrayOriginal, ...arra2];

console.log(combinacaoArrays);

//Passagem de parametro de função
function soma(a, b, c) {
  return a + b + c;
}

const numeros = [1, 2, 3];
const resultado = soma(...numeros);

console.log(resultado);

//Clonar objetos
const objetoOriginal = { x: 1, y: 2 };
const cloneObjeto = { ...objetoOriginal };

console.log(cloneObjeto);

//------------
//Exercicio 1
const pessoa = {
  nome: "Ana",
  idade: 30,
  cidade: "São Paulo",
};

const pessoaClone = { ...pessoa, profissao: "Engenheira" };

console.log(pessoaClone);

//Exercicio 2
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const arrayCombinada = [...array1, ...array2];

console.log(arrayCombinada);
