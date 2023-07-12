/* Pacote readline-sync para permitir a entrada 
interativa de dados no console. */

const readlineSync = require('readline-sync'); 

const nome = readlineSync.question('Digite o seu nome:');
const idade = readlineSync.question('Digite a sua idade:');

const mensagem = `Olá, ${nome}! Bem-vindo(a)! Você tem ${idade} anos.`;

console.log(mensagem);