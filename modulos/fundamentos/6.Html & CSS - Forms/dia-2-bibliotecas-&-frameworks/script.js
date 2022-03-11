import './node_modules/just-validate/dist/js/just-validate.min.js'

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

// button.addEventListener('click', (event) => {
//   event.preventDefault();
// });

let clearButton = document.getElementById('clear');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
  }
}

clearButton.addEventListener('click', clearFields);

let picker = new Pikaday({ field: document.getElementById('date-form') });

window.onload = function() {
  new window.JustValidate('.js-form', {
    rules: {
      name: {
        required: true,
        maxLength: 40,
        minLength: 3,
      }
    },
    messages: {
      name: {
        minLength: 'Nome pequeno'
      }
    }
  })
  optGenerator();
}
