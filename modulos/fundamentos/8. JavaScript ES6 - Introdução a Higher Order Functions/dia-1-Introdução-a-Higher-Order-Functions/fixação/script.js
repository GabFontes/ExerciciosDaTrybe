const wakingUp = () => {
    return 'Acordando!!'
}

const coffe = () => {
    return 'Bora tomar café!!'
}

const goSleep = () => {
    return 'Partiu dormir!!'
}

const doingThings = (callBack) => console.log(callBack());

doingThings(wakingUp)

// Ao chamar a função doingThings:
// doingThings(wakingUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!