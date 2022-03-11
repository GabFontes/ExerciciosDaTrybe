let numbers = [200, 9, 3, 19, 70, 8, 100, 1, 35, 270];

let smallerNumber = numbers[0]

for (let index = 1; index < numbers.length; index +=1) {
    if (numbers[index] < smallerNumber){
        smallerNumber = numbers[index]
    }
}
console.log(smallerNumber);