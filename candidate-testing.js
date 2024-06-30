const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';


//TODO: Variables for Part 2
let questions = [
  'Who was the first American woman in space? ',
  'True or false: 5 kilometer == 5000 meters? ',
  '(5 + 3)/2 * 10 = ? ',
  `Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? `,
  'What is the minimum crew size for the ISS? '
];

let correctAnswers = [
  'Sally Ride',
  'true',
  '40',
  'Trajectory',
  '3'
];

let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('What is your name? ');
}
// function askQuestion() {
//   // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//   candidateAnswer = input.question(question);
// }
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    let candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
  }
  console.log('========================= RESULTS =========================');
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  // if (candidateAnswer === correctAnswer) {
  //   console.log(`Yes, ${correctAnswer} is the correct answer!`);
  // } else {
  //   console.log(`No, that answer is incorrect.`)
  // }
  for (let i = 0; i < candidateAnswers.length; i++) {
    console.log(`You answered: ${candidateAnswers[i].toLowerCase()} | The correct answer is: ${correctAnswers[i].toLowerCase()}`);
  }
  let score = 0;
  let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.
  
  for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      score += 1;
    }
    grade = ((score / questions.length) * 100);
  }
  console.log('========================= YOUR SCORE =========================');
  if (grade >= 80) {
    console.log(`Congratulations, ${candidateName}! You passed with a grade of ${grade}%.`);
  } else {
    console.log(`Sorry, ${candidateName}! You failed to pass with a grade of ${grade}%.`);
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hello ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};