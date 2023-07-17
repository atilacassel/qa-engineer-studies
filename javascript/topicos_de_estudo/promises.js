/* const esperarPor = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promessa cumprida!");
    }, ms);
  });
};

esperarPor(2000).then((mensagem) => {
  console.log(mensagem);
});

const obterNumeroAleatorio = () => {
  return new Promise((resolve, reject) => {
    const numero = Math.floor(Math.random() * 10) + 1;
    console.log(numero);
    if (numero > 5) {
      resolve(numero);
    } else {
      reject("Número muito baixo!");
    }
  });
};

obterNumeroAleatorio()
  .then((numero) => {
    console.log(numero);
  })
  .catch((erro) => {
    console.log(erro);
  }); */

/* const esperarPor = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promessa cumprida!");
      }, ms);
    });
};

const obterNumeroAleatorio = () => {
    return new Promise((resolve, reject) => {
      const numero = Math.floor(Math.random() * 10) + 1;
      //console.log(numero);
      if (numero > 5) {
        resolve(numero);
      } else {
        reject("Número muito baixo!");
      }
    });
  };

obterNumeroAleatorio()
.then((numero) => {
    console.log(numero);
    return esperarPor(2000);
})
.then(() => {
    console.log("Tudo pronto!");
})
.catch((erro) => {
    console.log(erro);
}); */

/* const retornarTexto = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("FEITO!");
    }, ms);
  });
};

retornarTexto(1000).then((texto) => {
  console.log(texto);
}); */

const retornarNumeroMultiplicado = (numero, multiplicador) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isNaN(numero) || isNaN(multiplicador)) {
          reject("Os argumentos devem ser números!");
        } else {
          resolve(numero * multiplicador);
        }
      }, 2000);
    });
  };
  
  retornarNumeroMultiplicado("cinco", 3) //mudar de cinco para numero para a pomises passar
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((erro) => {
      console.log(erro);
    });
  
