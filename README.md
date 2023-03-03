# Boost Your Productivity with a Node.js Code Generator

## The benefits of using a code generator

A code generator is a tool that automates the process of creating code. It can save you a lot of time and effort,
especially if you need to create similar code repeatedly. Rather than writing the same code over and over again, you can
use a code generator to create templates that you can reuse for different projects.

Using a code generator can also help you to maintain consistency across your projects. You can define coding standards
and conventions in your code generator, and then use it to generate code that adheres to these standards. This can help
to ensure that your code is more reliable, easier to maintain, and less prone to errors.

Another benefit of using a code generator is that it can reduce the amount of manual work involved in the coding
process. By automating repetitive tasks, you can free up your time to focus on more complex and challenging tasks that
require your attention.

Overall, a code generator can be a powerful tool for developers who want to save time, improve code quality, and reduce
errors in their projects. With a code generator, you can create code faster, more consistently, and with less effort.

## Prerequisites:

Before we get started, you'll need to have NPM installed on your computer. If you don't have NPM installed, you can
download it from the official website.

## Contents

In this post, we will cover the following topics:

1. How to create a npm package
2. How to create Command-Line Interface (CLI) application in npm
3. How to create a generator using the "fs-extra", "enquirer", and "replace-in-file" modules
4. Using the generator to create a custom web application

Each section will provide a step-by-step guide to help you create your own code generator and customize it to your
needs.

## 1. Creating a NPM Package: A Step-by-Step Guide

Creating an NPM package is a simple and straightforward process that allows you to share your code with others or use it
in other projects. In this example, we'll walk you through how to create an NPM package that exports a simple greeting
function.

### Step 1: Create the Package Directory

First, we need to create a new directory for our package. In our example, we'll call it "custom-package". Inside this
directory, we'll create two files: index.js and package.json.

```shell
mkdir custom-package
cd custom-package
```

### Step 2: Create the index.js File

In the index.js file, we'll export a function that will output a greeting to the console.

```javascript
const greet = () => console.log('Welcome to the exciting world of creating your own NPM packages!');

module.exports = { greet };
```

### Step 3: Create the package.json File

In the package.json file, we'll include metadata about our package such as its name, version, and main entry point.

```json
{
  "name": "custom-package",
  "version": "1.0.0",
  "main": "index.js"
}
```

### Step 4: Link the Package Locally

Before we can use our package in another project, we need to link it locally using the "npm link" command.

```shell
npm link
```

### Step 5: Create the Consumer Directory

Next, we need to create a new directory for our consumer project. In our example, we'll call it "consumer". Inside this
directory, we'll create two files: index.js and package.json.

```shell
cd ..
mkdir consumer
cd consumer
```

### Step 6: Install the Package

Now that we have our package linked locally, we can install it in our consumer project using the "npm link" command with
the name of our package.

```shell
npm link custom-package
```

### Step 7: Use the Package

In the index.js file of our consumer project, we'll require the "custom-package" package and call its greet function.

```javascript
const { greet } = require("custom-package");

greet();
```

### Step 8: Run the Consumer Project

Finally, we can run the consumer project using the "npm start" command, which will execute the index.js file and output
the greeting from our "custom-package" package.

```json
{
  "name": "consumer",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js"
  }
}
```

And that's it! We've successfully created an NPM package and used it in a consumer project. This is just the beginning
of what you can do with NPM packages, so feel free to experiment and explore all the possibilities.

## 2. Creating a Command-Line Interface (CLI) Application in NPM: A Step-by-Step Guide

Welcome to the world of creating command-line interface (CLI) applications in NPM! In this tutorial, we will walk
through the steps to create a simple CLI application that prints a welcome message to the console.

### Step 1: Create the Package Directory

First, we need to create a new directory for our package. In our example, we'll call it "npm-cli". Inside this
directory, we'll create two files: index.js and package.json.

```shell
mkdir npm-cli
cd npm-cli
```

### Step 2: Create the index.js File

In the index.js file, we will print a welcome message to the console when the CLI is run..

```javascript
#!/usr/bin/env node

console.log("Welcome to the world of creating command-line interface (CLI) applications in NPM!");
```

The first line (`#!/usr/bin/env node`) tells your terminal that this file should be executed using Node.js.

### Step 3: Create the package.json File

In the package.json file, we'll include metadata about our package such as its name, version and bin (path and command
for executables).

```json
{
  "name": "npm-cli",
  "version": "1.0.0",
  "bin": {
    "npm-cli": "index.js"
  }
}
```

This tells NPM that your package has a `bin` executable called `npm-cli`, which should be linked to the `index.js` file
you created in the previous step.

### Step 4: Link the Package Locally

Before we can use our package, we need to link it locally using the "npm link" command.

```shell
npm link
```

This will create a symbolic link from your package directory to your global NPM directory.

### Step 5: Use the Package

Finally, we can run "npm-cli" command in terminal, which will execute the index.js file and output
the welcome message.

```shell
npm-cli
```

That's it! You've created a simple NPM CLI. Now you can modify the index.js file to add more functionality to your CLI.

## 3. Creating a Custom Generator with Node js: A Step-by-Step Guide

In this section, we will walk through the steps to create a simple code generator that will bootstrap a project from
existing template.

### Step 1: Create a New Directory

Create a new directory named "create-custom-webapp" and navigate into it

```shell
mkdir create-custom-webapp
cd create-custom-webapp
```

### Step 2: Create a package.json File

This file will contain information about our custom generator, including its name, version, description, and
dependencies. Here's what the "package.json" file should look like:

```json
{
  "name": "create-custom-webapp",
  "version": "1.0.0",
  "description": "A tool to generate custom webapp",
  "bin": {
    "create-custom-webapp": "cli.js",
    "ccw": "cli.js"
  },
  "dependencies": {
    "commander": "10.0.0",
    "enquirer": "2.3.6",
    "fs-extra": "11.1.0",
    "replace-in-file": "6.3.5"
  }
}
```

Note that we have included the "bin" field in our "package.json" file, which tells NPM that our custom generator will
have two command line interfaces ("create-custom-webapp" and "ccw") that will be executed by running the "cli.js" file.

### Step 3: Create the Command-Line Interface (CLI)

Create a new file named `cli.js` in the root of the project and add the following code:

```javascript
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
  .action(() => readUserInput().then(bootstrap));

program.parse();
```

This code sets up the `commander` package to handle the command-line interface for your generator. The `readUserInput`
function uses the `enquirer` package to prompt the user for input, and the `bootstrap` function (which we will define in
the
next step) is called to generate the project with the user's input.

### Step 4: Define the `bootstrap` Function

Create a new directory named `src` and a file named `index.js` inside the `src` directory. Add the following code
to `index.js`

```javascript
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const replaceInFile = require('replace-in-file');

/**
 * A function to bootstrap a project from template.
 * @param {Object} config - The config object.
 * @param {string} config.appName - The name of the application.
 */
const bootstrap = (config) => {
  const templatePath = path.join(__dirname, '..', 'templates');
  const destinationPath = path.join(process.cwd(), config.appName);

  console.log('Bootstrapping simple React web app');
  fs.copySync(templatePath, destinationPath);

  console.log('Customizing a app with information provided by user');
  replaceInFile.sync({
    files: path.join(destinationPath, '**', '*'),
    from: ['CGD_APP_NAME'],
    to: [config.appName],
  });

  console.log('Installing required dependencies to start the application');
  execSync('npm i', { cwd: destinationPath });

  console.log(`Inorder to run an application, navigate to ${config.appName} folder and run 'npm start'`);
};

module.exports = { bootstrap };
```

The `bootstrap` function takes a configuration object as input that includes the `appName` property, which is the name
of the
application to be generated. The function first sets up paths for the source and destination folders using the Node.js
`path` module. Then, it copies the contents of the `templates` directory (which contains a basic React web app) to a new
directory with the name specified by the user.

After copying the template files, the function uses the `replace-in-file` package to replace all instances of the
placeholder string "CGD_APP_NAME" with the actual `appName` provided by the user. This ensures that the name of the
application is correctly reflected in all files.

Finally, the function uses the `child_process` module to execute the command `npm install` in the new directory, which
installs
all necessary dependencies for the generated application. Once the dependencies are installed, the function logs a
message to the console to inform the user how to start the application.

That's it! With this `bootstrap` function, our custom generator can now generate a basic React web app with the
user-specified name and all required dependencies installed.

### Step 5: Create the Template Files

Create a new directory names `templates` and copy the file from "GitHub" into the `templates` folder.

This folder contains the files that will be used to generate the web application. The folder structure and files inside
the `templates` folder are based on the type of application we want to generate. In this case, we're generating a simple
web application using React and Webpack.

The folder structure is as follows:

```shell
templates/
  |- public/
  |   |- index.html
  |- src/
  |   |- index.js
  |- package.json
  |- webpack.config.js
```

Let's take a closer look at each of these files and folders:

* `public/`: This folder contains the static assets that will be served by the application. In our case, it contains
  an `index.html` file.
* `src/`: This folder contains the source code of the application. It contains an `index.js` file, which is the entry
  point for our application.
* `package.json`: This file contains the metadata and dependencies for the application. It specifies the dependencies
  required to run our application, including React and Webpack.
* `webpack.config.js`: This file contains the configuration for Webpack. It specifies the entry point for our
  application,
  the output directory for the compiled assets, and the loaders and plugins required to compile the application code.

When the user generates a new web application using our custom generator, these files will be copied to the new project
directory with any necessary modifications based on the user's input.

### Step 6: Link the Package Locally

In the `create-custom-webapp` directory, run the following command to link the package to the global module directory

```shell
npm link
```

### Step 7: Use the Package

Navigate to the directory where you want to create your new project and run the following command:

```shell
create-custom-webapp
```

This will start the custom generator and prompt you to enter a name for your application. Once the details are entered
it will generate a project and will do install dependencies inside it.

To start your application, navigate to the new directory and run the following command:

```shell
npm start
```

Congratulations, you have successfully created a custom generator to create a new web application from a template!

## Summary

In conclusion, code generators, such as the one we built in this tutorial, can save you time and effort by automating
repetitive tasks and providing a starting point for your projects. By creating an npm package with a CLI, we were able
to create a custom generator that asks for user input and generates a customized application with the necessary
dependencies. By leveraging the "fs-extra", "commander", "enquirer", and "replace-in-file" modules, we were able to make
the generator easy to use and customizable for different projects.

We hope this tutorial has been helpful in showing you how to create your own custom generator. With these tools, you can
easily create new applications and get started on your next project with minimal effort. Happy coding!
