//Parte 1:
const {sum, myRemove, myFizzBuzz, encode, decode, techList} = require('./sum');

describe('Check the sum function', () => {
  it('Testa se o retorno de sum(4, 5) é 9', () => {
  expect( sum(4, 5) ).toBe(9);
  });

  it('Testa se o retorno de sum(0, 0) é 0', () => {
  expect( sum(0, 0) ).toBe(0);
  });

  it('Test if the sum function throws an error when the parameters are 4 and "5" (string 5)', () => {
    expect( () => sum(4, '5')).toThrowError();
    expect( () => sum(4, '5')).toThrowError(('parameters must be number'));
  });
});

//Parte 2:

describe('Check the myRemove function', () => {
  it('Check if the function removes the correct number', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it('Check if the function not return the array [1, 2, 3, 4]', () =>{
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});

//Parte 3:

describe('Check the fizzBuzz function', () => {
  it('Check if when receiving a number divisible by 3 and 5 the function returns fizzbuzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  it('Check if when receiving a number divisible by 3 the function returns "fizz"', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  });
  it('Check if when receiving a number divisible by 5 the function returns "buzz"', () => {
    expect(myFizzBuzz(25)).toEqual('buzz');
  });
  it('Check if when receiving a number that is not divisible by 3 or 5 the function returns the expected value', () => {
    expect(myFizzBuzz(2)).toEqual(2);
  });
  it('Check if when receiving a parameter if is not a number the function returns false', () => {
    expect(myFizzBuzz('a')).toEqual(false);
  });
});

//Parte 4:

describe('Check the functions encode/decode', () => {
  it('Check if decode and encode are functions', () => {
    expect(typeof(encode)).toBe('function');
    expect(typeof(decode)).toBe('function');
  });
  it('checks if the encode function converts vowels to numbers', () => {
    expect(encode('a e i o u')).toBe('1 2 3 4 5');
  });
  it('checks if the decode function converts numbers to vowels', () => {
    expect(decode('1 2 3 4 5')).toBe('a e i o u');
  });
  it('checks if the encode function dont convert wrong numbers to vowels', () => {
    expect(encode('9 9 9 9')).toBe('9 9 9 9');
  });
  it('checks if the decode function dont convert wrong letters to numbers', () => {
    expect(decode('x y z')).toBe('x y z');
  });
  it('checks if the decode/encode functions return the same parameter length', () => {
    expect(encode('xyz').length).toBe(3);
    expect(decode('xyz').length).toBe(3);
  });
});

//Parte 5:

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});
