// Retorna o fatorial de N:
let fatorial = 1;
const factorialOfNumber = (n) => {
  for (let i = 2; i <= n; i+= 1) {
    fatorial *= i
    
  }
  return `O fatorial de ${n} é : ${fatorial}`;
}
console.log(factorialOfNumber(4));


// Retorna a maior palavra:
const biggerWord = (frase) => {
let wordArrays = frase.split(' ');
let maxLength = 0;
let result = '';
for (const i of wordArrays) {
  if (i.length > maxLength) {
    maxLength = i.length
    result = i;
  }
}
return result;
}
console.log(biggerWord('gato cachorro papagaio ornintorrinco'));

// ClickCount:
const btn = document.getElementById('btn');
const span = document.getElementById('text');
let clicks = 0;

btn.addEventListener('click', () => {
  
  span.innerHTML = clicks += 1;
});

let skills = ['Javascript', 'CSS', 'HTML', 'DOM', 'Git'];

const changeXtoParam = (param) => {
  let str = 'gato faz xxx';
  let strSplit = str.split('');

  for (let i = 0; i < strSplit.length; i+= 1) {
      if (strSplit[i] == 'x'){
        strSplit[i] = param;
      }
    
    }
    let result = strSplit.join('');
    return result;
  }

console.log(changeXtoParam('meow'));

let strReturn = changeXtoParam();

const skillsOrder = () => {
  skills[5] = strReturn;
  
  return skills;
}

console.log(skillsOrder(strReturn));