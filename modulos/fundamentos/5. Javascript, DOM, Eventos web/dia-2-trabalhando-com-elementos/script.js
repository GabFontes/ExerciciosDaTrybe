//                                      PARTE 1
// tarefa 1
function tagH1(){
    let body = document.getElementsByTagName("body")[0];
    let addH1 = document.createElement("h1");
    addH1.innerText = "Exercício 5.2 - JavaScript DOM";
    body.appendChild(addH1);
}
tagH1();
// tarefa 2
function tagMain() {
    let body = document.getElementsByTagName("body")[0];
    let addMain = document.createElement("main");
    addMain.className = "main-content";
    body.appendChild(addMain);
}
tagMain();
//tarefa 3
function tagSection() {
    let main = document.getElementsByTagName("main")[0];
    let addSection = document.createElement("section")
    addSection.className = "center-content";
    main.appendChild(addSection);
}
tagSection();
// tarefa 4
function tagP() {
    let section = document.getElementsByTagName("section")[0];
    let addP = document.createElement("p")
    addP.innerText = "Exercicios tops demais"
    section.appendChild(addP);
}
tagP();
//tarefa 5
function tagSection2() {
    let main = document.getElementsByTagName("main")[0];
    let addSection2 = document.createElement("section")
    addSection2.className = "left-content";
    main.appendChild(addSection2);
}
tagSection2();
//tarefa 6
function tagSection3() {
    let main = document.getElementsByTagName("main")[0];
    let addSection3 = document.createElement("section")
    addSection3.className = "right-content";
    main.appendChild(addSection3);
}
tagSection3()
//tarefa 7
function imageSection() {
    let section = document.getElementsByTagName("section")[1];
    let addImage = document.createElement("img")
    addImage.className  = "small-image"
    addImage.src = "https://picsum.photos/200"; 
    section.appendChild(addImage);
}
imageSection();
//tarefa 8
function UlSection() {
    let section = document.getElementsByTagName("section")[2];
    let addUl = document.createElement("ul");
    section.appendChild(addUl);
}
//tarefa 8
UlSection()
function Ul_Li(){
    let listNumber = ['Um', 'dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']
    let listN = [];
    let ul = document.getElementsByTagName("ul")[0];
    for(let index = 0; index < listNumber.length; index += 1){
        let listN = listNumber[index];
        let list  = document.createElement('li');
        list.innerText = listN;
        ul.appendChild(list)
        list.className = "list-itens";
    }
    
}
Ul_Li();
// tarefa 9
function addH3(){
    let main = document.getElementsByTagName("main")[0];
    for(let index = 0; index < 3; index +=1  ){
        let addH3 = document.createElement('h3');
        main.appendChild(addH3)
    }
}
addH3();
//                          PARTE 2
//tarefa 1
function addClassH1 (){
   let h1 = document.getElementsByTagName('h1')[0];
    h1.className = "title";
}
addClassH1();
// tarefa 2
function h3Class(){;
    let h3 = document.getElementsByTagName('h3');
    for(let index = 0; index < 3; index += 1 ){
        h3[index].className = "description";
    }
}
h3Class();
//tarefa 4
 function removeSection() {
     let main = document.getElementsByTagName("main")[0];
     main.removeChild(main.childNodes[1]);
}
removeSection();

//tarefa 5
function sectionRight() {
    let rightSection = document.getElementsByTagName('section')[1];
    rightSection.style.marginRight = "auto";
}
sectionRight();

function centerSection() {
    let centerSection = document.getElementsByTagName('section')[0];
    centerSection.style.backgroundColor = "green";
}
centerSection();

function removeElementList() {
    ul = document.getElementsByTagName('ul')[0];
    ul.lastChild.remove();
    ul.lastChild.remove(); 
}
removeElementList();