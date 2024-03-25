import { createInterface } from 'readline';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createQuestion = (question) => {
  if(question.defaultValue) {
    return `${question.message} (${question.defaultValue}) • `;
  }
  return `${question.message} • `
}

/**
 * @param {object[]} questions
 * @param {string} questions[].name
 * @param {string} questions[].message
 * @param {string} questions[].defaultValue
 * */
const prompt = (questions) => {
  return new Promise((resolve) => {
    let questionIndex = 0;
    const answers = {};

    const isLastQuestion = () => questionIndex === questions.length - 1;
    const returnAnswers = () => {
      resolve(answers);
      readline.close();
    };

    const readInput = (question) => {
      readline.question(createQuestion(question), (answer) => {
        answers[question.name] = answer.trim() || question.defaultValue;

        if (isLastQuestion()) returnAnswers();
        else readInput(questions[++questionIndex]);
      });
    };

    readInput(questions[questionIndex]);
  });
};

export default prompt;
