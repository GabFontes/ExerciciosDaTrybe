// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer,
// seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho
// n . Por exemplo:
// 
// n = 5

// *****
// *****
// *****
// *****
// *****

const n = 5
let line = '';
let simbolo = '*';

for (let index = 0; index < n; index+= 1) {
    line = line + simbolo;
    
}
for (let index = 0; index < n; index+=1) {
     console.log(line);
}
