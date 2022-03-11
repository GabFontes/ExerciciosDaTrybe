//Parte 1:
function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be number');
    }
  
    return a + b;
}

//Parte 2:
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

//Parte 3:
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

console.log(myFizzBuzz('g'));

//Parte 4:
function encode(str) {
  let parametros = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  strSplit = str.split('');

  for (let index = 0; index < strSplit.length; index += 1) {
    for (let key in parametros) {
      if (strSplit[index] === key) {
        strSplit[index] = parametros[key];
      }
    }
  }
  result = strSplit.join('');
  return result;
}

console.log(encode('9 9 9 9'));

function decode(str) {
  let parametros = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  strSplit = str.split('');

  for (let index = 0; index < strSplit.length; index += 1) {
    for (let key in parametros) {
      if (strSplit[index] === key) {
        strSplit[index] = parametros[key];
      }
    }
  }
  result = strSplit.join('');
  return result;
}

console.log(decode('x y z'));

function techList(strList, name) {
  let result;
  let arrayList = strList.sort();
  let arrayStr = [];
  if (strList.length === 0){
    result = "Vazio!";
  }
  else {
    result = arrayStr;
  }
  for (let i = 0; i < arrayList.length; i += 1) {
    let element = arrayList[i];
    arrayStr.push(
    {
    tech: arrayList[i],
    name: name,
    }
    );
  }
  
  return result;
}
console.log(techList(['Jest', 'HTML', 'React', 'CSS', 'JavaScript'], 'Gabriel'));

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
};