// 3. Reescreva o código do exercício anterior para que utilize async/await .
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

const exercicioUm = require('./exercicioUm');

const exercicioTres = async () => {
  const random1 = Math.floor(Math.random() * 100 + 1);
  const random2 = Math.floor(Math.random() * 100 + 1);
  const random3 = Math.floor(Math.random() * 100 + 1);

  try {
    const result = await exercicioUm(random1, random2, random3)
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

exercicioTres();