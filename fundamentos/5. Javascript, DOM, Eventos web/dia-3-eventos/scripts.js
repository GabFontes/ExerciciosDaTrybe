function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.1

  //Exercício 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  function daysList() {
    let days = document.getElementById('days')
   
    for (let i = 0; i < dezDaysList.length; i += 1){
      let dia = dezDaysList[i]
      
      let elementLi = document.createElement('li');//Cria um elemento 'li'.
      
      elementLi.innerText = dia
      elementLi.className = 'day';
      days.appendChild(elementLi);
    }
    return daysList;
}
daysList();

function holidays() {
  let elementLi = document.getElementsByClassName('day');
  for(let i = 0; i < elementLi.length; i += 1){
    let a = elementLi[i].innerText;
    if (a == 24){
      elementLi[i].classList.add('holiday');
    }
    if (a == 25){
      elementLi[i].classList.add('holiday');
    }
    if (a == 31){
      elementLi[i].classList.add('holiday');
    }
  }
}
holidays();

function fridays() {
  let elementLi = document.getElementsByClassName('day');
  for(let i = 0; i < elementLi.length; i += 1){
    let a = elementLi[i].innerText;
    if (a == 4){
      elementLi[i].classList.add('friday');
    }
    if (a == 11){
      elementLi[i].classList.add('friday');
    }
    if (a == 18){
      elementLi[i].classList.add('friday');
    }
    if (a == 25){
      elementLi[i].classList.add('friday');
  }
}
}
fridays();

//Exercício 2
function buttonHoliday(Feriados){
  let buttonsContainer = document.querySelector(".buttons-container");
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  buttonsContainer.appendChild(button);
  button.innerText = Feriados;
}
buttonHoliday('Feriados');

//Exercício 3
let botao = document.getElementById('btn-holiday');

botao.addEventListener('click', function() {
  let holidays = document.getElementsByClassName('holiday');
  
  for (let i = 0; i < holidays.length; i += 1){
    if(holidays[i].style.backgroundColor == 'rgb(238, 238, 238)'){
      holidays[i].style.backgroundColor = 'red';
    }
    else{
      holidays[i].style.backgroundColor = "rgb(238, 238, 238)";
    }
  }
})

//Exercício 4
function buttonFriday(SextaFeira){
  let buttonsContainer = document.querySelector(".buttons-container");
  let button = document.createElement('button');
  button.id = 'btn-friday';
  buttonsContainer.appendChild(button);
  button.innerText = SextaFeira;
}
buttonFriday('Sexta-Feira');

//Exercício 5
let botao2 = document.getElementById('btn-friday');
botao2.addEventListener('click', function(){
  let fridays = document.getElementsByClassName('friday');
  for(i = 0; i < fridays.length; i += 1){
    if(fridays[i].style.fontFamily == 'fantasy'){
      fridays[i].style.fontFamily = 'unset'
    }
    else{
      fridays[i].style.fontFamily = 'fantasy'
    }
    
  }
})

//Créditos ao Leandro Siva por ter me ajudado em vários exercícios.
//Exercício 6
let day = document.getElementsByClassName('day');

for (let i = 0; i < day.length; i += 1) {
  day[i].addEventListener('mouseover', zoom);
  day[i].addEventListener('mouseout', zoomOut);
}



function zoom(event) {
  event.target.style.fontSize = '30px';
}
//zoom();

function zoomOut(event) {
  event.target.style.fontSize = '20px'
}
//zoomOut();

//Exercício 7

function personalTask(aniversario) {

  let myTasks = document.querySelector('.my-tasks');
  let span = document.createElement('span');
  span.innerHTML = aniversario;
  myTasks.appendChild(span);

}
personalTask('NiverCueia');

//Exercício 8 

function legendColor(cor){
  let myTasks = document.querySelector('.my-tasks');
  let taskDiv = document.createElement('div');
  taskDiv.className = 'task';
  taskDiv.style.backgroundColor = cor;
  taskDiv.innerHTML = 'Dia 19'
  myTasks.appendChild(taskDiv);
}

legendColor('red');

//Exercício 9
function divColor(){
  let taskSelected = document.getElementsByClassName('task selected');
  let myTask = document.querySelector('.task');

  myTask.addEventListener('click', function(event){
    if(taskSelected.length === 0){
      event.target.className = 'task selected';
    }
    else{
      event.target.className = 'task';
    }
  })
}
divColor();

//Exercício 10

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();



