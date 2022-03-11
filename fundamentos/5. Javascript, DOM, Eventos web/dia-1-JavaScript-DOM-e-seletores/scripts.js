//Exercicio 1
function ComoMeVejoEmDoisAnos () {
    let defaultText = document.getElementById("defaultText");
    defaultText.innerText = "Trabalhando, ganhando meu dinheiro e conquistando meus objetivos.";
}
ComoMeVejoEmDoisAnos();

//Exercício 2
function mudarCor() {
let mainContent = document.getElementsByClassName("main-content");
mainContent[0].style.backgroundColor = "rgb(76,164,109)";
}
mudarCor();

//Exercício 3
function mudarCorMeio() {
document.getElementsByClassName("center-content")[0].style.backgroundColor = "#D8D8D8";
}
mudarCorMeio();

//Exercício 4
function CorrigirTexto() {
document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";
}
CorrigirTexto();

//Exercício 5
function TextoMaiusculo() {
    let paragrafo = document.getElementsByTagName("p");
    for (i = 0; i < paragrafo.length; i += 1){
    paragrafo[i].innerHTML = paragrafo[i].innerHTML.toUpperCase();
    }
}
TextoMaiusculo();

//Exercício 6
function ExibirTagsP() {
let p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i+= 1) {
    console.log(p[i]);
}
}
