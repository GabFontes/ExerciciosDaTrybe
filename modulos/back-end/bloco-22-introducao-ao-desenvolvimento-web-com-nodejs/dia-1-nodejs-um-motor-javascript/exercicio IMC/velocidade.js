const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distancia?\n');
const tempo = readline.questionInt('Qual o tempo?\n');

function velocidade() {
    const velocidade = (distancia / tempo).toFixed(2);
    console.log(`A velocidade é de ${velocidade}Km/h`);
}

velocidade();