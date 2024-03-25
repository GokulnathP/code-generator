import fs from 'fs';
import path from 'path';
import replaceInFile from '../utils/replaceInFile.js';

const generate = (componentName, location) => {
  if(!fs.existsSync(path.join('output', location))) {
    console.log(`\nPlease make sure '${location}' directory exist under src.`);
    return ;
  }

  const source = path.join('src', 'component', 'template');
  const destination = path.join('output', location, componentName);

  if(fs.existsSync(destination)) {
    console.log(`\n${componentName} already exist under ${location}.`);
    return ;
  }

  fs.mkdirSync(destination);

  const createFile = (templateFileName, newFileName) => {
    const currentPath = path.join(source, templateFileName);
    const newPath = path.join(destination, newFileName);

    fs.copyFileSync(currentPath, newPath);
    replaceInFile(newPath, /Component/g, componentName);
  }

  createFile('Component.tsx', `${componentName}.tsx`);
  createFile('index.ts', 'index.ts');
  createFile('Component.test.tsx', `${componentName}.test.tsx`);

  console.log(`\n${componentName} generated successfully under ${location}.`);
};

export default generate;
