module.exports = function longestConsecutiveLength(array) {

  if(array.length <= 1)
  return array.length;

  let sequence = 1;
  let answers = [];

  for (let index = 0; index < array.length - 2; index++) {
    if(array[index+1] - array[index] == 1) {
      sequence++;
    }
    else {
      if(array[index+1] - array[index] != 0) {
        answers.push(sequence);
        if (answers.length == 2) {
          answers[0] > answers[1] ? answers.pop() : answers.shift();
          sequence = 1;
        }
      }
    }
  }

  return answers[0];

}