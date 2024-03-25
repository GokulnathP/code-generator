import prompt from '../utils/prompt.js';
import generate from './generate.js';

const questions = [
  {
    name: 'componentName',
    message: 'What is your component name?',
    defaultValue: '',
  },
  {
    name: 'location',
    message: 'Where do you want to place your component?',
    defaultValue: 'components',
  },
];

export const generateComponent = () => {
  return prompt(questions)
    .then(({ componentName, location }) => {
      if (!componentName.trim()) {
        console.log('\nPlease provide name to generate an component.');
        return;
      }
      generate(componentName, location);
    })
    .catch(() => console.log('\nGenerator terminated unexpectedly.'));
};
