// Faz a soma dos números pares do array 'numbers' utilizando Reduce e Filter.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const getEven = numbers.filter((number) => number % 2 === 0);
// console.log(getEven); // [ 18, 4, 76, 54 ]

// const someEven = getEven.reduce((acc, number) => acc + number);
// console.log(someEven); // 152

// Faz a soma dos números do array 'numbers' utilizando apenas o Reduce.

const evenNumbers = numbers.reduce((accumulator, number) => (number % 2 === 0) ? accumulator + number : accumulator);

console.log(evenNumbers);