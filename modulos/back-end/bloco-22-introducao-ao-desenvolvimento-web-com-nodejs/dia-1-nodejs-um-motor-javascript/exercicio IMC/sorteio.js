const readline = require('readline-sync');

const numeroAleatorio = Math.floor(Math.random() * (5 + 1));
const resposta = readline.questionInt('Qual número você acha que caiu?')

function sorteio() {
    if (resposta === numeroAleatorio) {
        console.log('Parabéns, número correto!');
    }
    else {
        console.log(`Opa, não foi dessa vez. O número era ${numeroAleatorio}`);
    }
}

const jogarDenovo = readline.question('Deseja jogar de novo? Digite "s" ou qualquer outra coisa para não');
    if (jogarDenovo === 's') {
        sorteio();
    }
    else{
        return console.log('Adeus');
    }

sorteio();