let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let media 

for (let index = 0; index < numbers.length; index+= 1) {
    soma += numbers[index];
}
console.log(soma);

media = soma / numbers.length

console.log("A média é de:", media);

if (media > 20) {
    console.log("A média é maior que 20");
}
else {
    console.log("A média é menor que 20");
}