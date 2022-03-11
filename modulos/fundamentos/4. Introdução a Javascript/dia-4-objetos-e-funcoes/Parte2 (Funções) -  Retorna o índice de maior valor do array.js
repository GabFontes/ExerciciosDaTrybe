function highIndex(array){
    let indiceMaior = 0;   
    for (key in array) {
        if (array[indiceMaior] < array[key]) {
            indiceMaior = key
        }
    }
    return indiceMaior;
}
console.log(highIndex([2, 3, 2, 5, 10]));