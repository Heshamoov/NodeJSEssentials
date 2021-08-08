process.stdout.write("Hello ");
process.stdout.write("World \n");

const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];

const ask = (i = 0) => {
  process.stdout.write(`${questions[i]}`);
  process.stdout.write(` > `);
};

ask();

const answers = [];

// Collecting Input
process.stdin.on("data", (data) => {
  // process.stdout.write(`\n${data.toString().trim()} \n`);
  // process.exit();

  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    // Printing Questions and Answers
    process.stdout.write(`\n\n`);
    for (let i = 0; i < answers.length; i++) {
      process.stdout.write(`${i + 1}- ${questions[i]}: ${answers[i]} \n`);
    }
    process.exit();
  }
});

process.on("exit", () => {
  // using array destructuring
  const [name, activity, lang] = answers;
  console.log(`

Thank you for your answers.

Go ${activity} ${name}, you can write ${lang} code later!!!
  `);
});
