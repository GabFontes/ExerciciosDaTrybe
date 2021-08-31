function lowestIndex(array){
    let indiceMenor = 0;   
    for (key in array) {
        if (array[indiceMenor] > array[key]) {
            indiceMenor = key
        }
    }
    return indiceMenor;
}
console.log(lowestIndex([4, 3, 2, 5, -10]));