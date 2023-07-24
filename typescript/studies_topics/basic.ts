/* 
Instalation and check version:
npm install -g typescript
tsc --version 
--

TypeScript Configuration (tsconfig.json):
tsc --init
*/

let num: number = 10;
let names: string = "John";
let isLogged: boolean = true;

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));