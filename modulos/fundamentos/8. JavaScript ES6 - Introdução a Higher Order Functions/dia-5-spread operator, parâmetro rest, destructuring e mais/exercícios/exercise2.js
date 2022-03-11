// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...numbers) => numbers.reduce(((acc, number) => acc + number ), 0);

console.log(sum(2, 3, 1, 3));  