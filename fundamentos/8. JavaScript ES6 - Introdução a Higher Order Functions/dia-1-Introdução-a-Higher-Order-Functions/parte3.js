const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checker = (rightAnswers, studantAnswers, callBack) => {

  return callBack(rightAnswers, studantAnswers);
};

const answerChecker = (rightAnswers, studantAnswers) => {
  let counter = 0;
  for (let i = 0; i < rightAnswers.length; i+= 1) {
    if (rightAnswers[i] === studantAnswers[i]){
      counter += 1;
    }
    else if (studantAnswers === 'N.A') {
      counter = counter;
    }
    else { (rightAnswers[i] !== studantAnswers[i])
      counter -= 0.5;
    }
  }
  return counter;
}

console.log(checker(RIGHT_ANSWERS, STUDENT_ANSWERS, answerChecker));