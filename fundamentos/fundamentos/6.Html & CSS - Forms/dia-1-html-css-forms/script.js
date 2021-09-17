let state = document.getElementById('state-input');
let stateOpt = ['AL', 'SP', 'MG', 'BH', 'AM'];
let button = document.getElementById('default-button');

function optGenerator() {
    for (let i = 0; i < stateOpt.length; i += 1) {
        let opt = document.createElement('option');
        state.appendChild(opt).value = stateOpt[i];
        state.appendChild(opt).innerText = stateOpt[i];
    }
}
optGenerator();

button.addEventListener('click', (event) => {
    event.preventDefault();
});

let clearButton = document.getElementById('clear');

clearButton.addEventListener('click', () => {
  let inputs = document.querySelectorAll('input');
  let textArea = document.querySelector('.resume')
  for (let i = 0; i < inputs.length; i+= 1) {
    let input = inputs[i];
    input.value = '';
    textArea.value = '';
    
  }
});

var myModal = document.getElementById('myModal')

myModal.addEventListener('show.bs.modal', function (event) {
  if (!data) {
    return event.preventDefault() // stops modal from being shown
  }
})
