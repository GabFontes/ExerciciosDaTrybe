const arr = [3, 51, 12, 41, 2, 70];

// For padrão:

// const biggerNum = () => {
// 	let counter = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (counter < arr[i]) {	
// 			counter = arr[i];
// 		}
// 	}
// 	return counter;
// };

// console.log(biggerNum());

// -------------------------------------------------

// Utilizando Reduce:

// const biggerNumR = () => {
// 	return arr.reduce((acc, result) => {
// 		return acc > result ? acc : result;
// 	});
// };

// console.log(biggerNumR());

// -------------------------------------------------

// Utilizando Reduce atribuindo a função dentro de uma variável:

const getBigger = (bigger, number) => (bigger > number ? bigger : number); //Função dentro da variável.

const bigger = arr.reduce(getBigger, 0);

console.log(bigger);