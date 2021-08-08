const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with NodeJS? ",
];

// 2. implementing the function collectAnswer()
const collectAnswers = (questions, done) => {
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswer = (answer) => {
    answers.push(answers);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswer);
    } else {
      done(answers);
    }
  };

  rl.question(firstQuestion, questionAnswer);
};

// 1. Function Call
// collectAnswers(questions, callback)
collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers. ");
  console.log(answers);
  process.exit();
});
