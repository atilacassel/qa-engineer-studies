/* The value of `this` is determined by the surrounding lexical (static) context,
 where a function is declared, rather than how or where it's called.
Arrow functions inherit `this` from their enclosing (parent) function, 
while regular functions define `this` based on how they are called. */

/* const obj = {
  nome: "João",
  saudacao: function () {
    console.log(`Olá, ${this.nome}!`);
  },
};

obj.saudacao(); // Saída: Olá, João!*/

/* const obj = {
  nome: "João",
  saudacao: () => {
    console.log(`Olá, ${this.nome}!`);
  },
};

obj.saudacao(); // Saída: Olá, undefined! */

/* const pessoa = {
    nome: "João",
    saudacao: function() {
      console.log(`Olá, ${this.nome}!`);
    }
  };
  
  const saudacao = pessoa.saudacao;
  saudacao();
   */

/* const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    getDescricao: function() {
      return `Este é um ${this.marca} ${this.modelo}.`;
    }
  };
  
  const carroDescricao = carro.getDescricao;
  console.log(carroDescricao()); */

const objeto = {
  valor: 10,
  duplicar: function () {
    this.valor = this.valor * 2;
  },
  obterValor: function () {
    return this.valor;
  },
};

const duplicarValor = objeto.duplicar;
duplicarValor();
console.log(objeto.obterValor());
