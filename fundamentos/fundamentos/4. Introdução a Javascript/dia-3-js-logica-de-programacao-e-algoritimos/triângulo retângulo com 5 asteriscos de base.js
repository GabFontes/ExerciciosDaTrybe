// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo
// retângulo com 5 asteriscos de base. Por exemplo:

//n = 5

// *
// **
// ***
// ****
// *****

 const n = 5
 let symbol = '*';
 let line = '';

for (let index = 0; index < n; index+= 1) {
    line = line + symbol;
    
    console.log(line);
}

