// 1. Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.


const exercicioUm = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number') {
      reject("Informe apenas números");
    }

    const value = ((a + b) * c);

    if (value < 50) {
      return reject("Valor muito baixo");
    }

    resolve(value);
  });
}

exercicioUm(1, 10, 3)
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject));

module.exports = exercicioUm;