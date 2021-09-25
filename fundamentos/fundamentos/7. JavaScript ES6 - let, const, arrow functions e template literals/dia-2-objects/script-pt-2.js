const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Requisito 1:
// const turnoNoite = (obj, key, val) => {
//     obj[key] = val;

//     return obj;
// }

// console.log(turnoNoite(lesson2, 'turno', 'noite'));

// // Requisito 2:
// const keysList = (obj) => {
//     return Object.keys(obj);
// }
// console.log(keysList(lesson2));

// Requisito 3:
// const objLength = (obj) => {
//     let result = Object.keys(obj);
//     return result.length
// }
// console.log(objLength(lesson1));

// // Requisito 4:
// const objValues = (obj) => {
//     return Object.values(obj);
// }
// console.log(objValues(lesson1));

// Requsito 5:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3}); 
// console.log(allLessons);

// Requisito 6:
// const studantsValue = (obj) => {
//     let studants = 0;
//     let keys = Object.keys(obj);

//     // console.log(obj[keys[0]].numeroEstudantes);

//     for (const i in keys) {
//         studants += obj[keys[i]].numeroEstudantes;
//     }

//     return studants;
// }
// console.log(studantsValue(allLessons));

// // Requisito 7:
// const keyValue = (obj, kPosition) => {
//     let result = Object.values(obj)[kPosition];
    
//     return result;
// }
// console.log(keyValue(lesson1, 0));

// Requisito 8:
const contentChecker = (obj, key, value) => {
    let array = Object.entries(obj);
    let result = false;
    for (let i in array) {
        if (array[i][0] === key && array[i][1] === value) {
            result = true;
        }
    }
    
    return result;
}
console.log(contentChecker(lesson3, 'turno', 'noite'));