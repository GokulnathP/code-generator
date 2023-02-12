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
  execSync('npm install', { cwd: destinationPath });

  console.log(`Inorder to run an application, navigate to ${config.appName} folder and run 'npm start'`);
};

module.exports = { bootstrap };
