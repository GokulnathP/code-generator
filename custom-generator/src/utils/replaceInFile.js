import fs from 'fs';

const replaceInFile = (filePath, searchValue, replaceValue) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const newContent = fileContent.replace(searchValue, replaceValue);

  fs.writeFileSync(filePath, newContent, 'utf8');
};

export default replaceInFile;
