
function somaDosNumeros(numeros){
    let result = 0
    for (let i = 0; i <= numeros; i += 1){
        result = result + i;

    }
    return result
}
console.log(somaDosNumeros(5))