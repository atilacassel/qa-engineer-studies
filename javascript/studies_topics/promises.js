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

/* const retornarNumeroMultiplicado = (numero, multiplicador) => {
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
    }); */

// ---- ASYNC / AWAIT

/* async function somarNumeros(numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma;
}

somarNumeros([1, 2, 3, 4, 5]).then((resultado) => {
  console.log("Resultado da soma:", resultado);
}); */

/* async function calcularMedia(numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  const media = soma / numeros.length;

  return media;
}

calcularMedia([10, 20, 30, 40, 50]).then((media) => {
  console.log("Média:", media);
});
 */

async function obterDadosUsuarios(ids) {
  const dadosUsuarios = {
    1: "João",
    2: "Maria",
    3: "Pedro",
    4: "Ana",
    5: "Carlos",
  };

  const nomes = [];

  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    if (dadosUsuarios[id]) {
      nomes.push(dadosUsuarios[id]);
    }
  }

  return nomes;
}

obterDadosUsuarios([1, 2, 3]).then((nomes) => {
  console.log("Nomes dos usuários:", nomes);
});
