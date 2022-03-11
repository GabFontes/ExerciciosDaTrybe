const prizeDraw = (sortNumber, callBack) => {
// Créditos:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const number = Math.floor(Math.random() * (5 - 1) + 1);
  return callBack(sortNumber, number) ? 'Parabéns você ganhou' : 'Tente novamente';
}

const prizeChecker = (sortNumber, number) => sortNumber === number;

console.log(prizeDraw(3, prizeChecker));
