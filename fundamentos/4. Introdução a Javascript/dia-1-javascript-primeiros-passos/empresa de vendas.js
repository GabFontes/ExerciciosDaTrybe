const valorCusto = 4
const valorVenda = 7

if (valorCusto <0 || valorVenda <0) {
    console.log("ERRO");
}

const imposto = valorCusto *20 / 100 
const valorCustoTotal = valorCusto + imposto

const lucro = valorVenda - valorCustoTotal

console.log(lucro);