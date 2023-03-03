#!/usr/bin/env node

const { Command } = require('commander');
const packageJson = require('./package.json');
const { prompt } = require('enquirer');
const { bootstrap } = require('./src');

const readUserInput = () => {
  return prompt([
    {
      type: 'input',
      name: 'appName',
      message: 'What is your application name?',
      required: true,
    },
  ]);
};

const program = new Command();

program
  .name(packageJson.name)
  .version(packageJson.version)
  .description(packageJson.description)
  .action(() => readUserInput().then(bootstrap).catch(() => console.log("Application got quited unexpectedly")));

program.parse();
