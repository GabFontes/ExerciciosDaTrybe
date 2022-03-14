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

exercicioUm(50, 10, 'a')
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject));