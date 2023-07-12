//// ===> VAR
/* var nome = 'Átila';
console.log('Meu nome é', nome); */

/* function imprimirNome() {
    var nome = 'Atila Cassel'
    console.log('Meu nome é', nome);
}

//console.log('Meu nome é, nome); *Aqui a variavel nao e visivel*

imprimirNome(); */

//// ===> LET
/* function imprimirIdade() {
    for (let idade = 37; idade <= 50; idade++) {
        console.log('Idade dentro do for: ', idade)
    }
    //console.log('Idade fora do for: ', idade);

}

imprimirIdade(); */

//// ===> CONST
/* function imprimirIdade2() {
    for (const idade = 37; idade <= 50; idade++) {
        console.log('Idade dentro do for: ', idade)
    }
}

imprimirIdade2(); */
// Não funciona pois const não pode ser alterado.

/* const pessoa = {
    nome: 'Atila',
    idade: 37
}

function imprimirDadosPessoa() {
    console.log(`Nome é: ${pessoa.nome} e a idade é: ${pessoa.idade}`)
}

imprimirDadosPessoa(); */

let base = 50;
let altura = 100;

let area = base * altura;

console.log(area);