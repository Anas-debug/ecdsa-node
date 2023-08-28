import { generateEnvFile } from "./generatekey.js";
import { selectDirectories } from "./selectDirectories.js";
import { appKey } from "./generatekey.js";
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

async function selectDirectories() {
  const questions = [
    {
      type: 'input',
      name: 'dir1',
      message: 'Enter path to the app front-end',
      validate: function (input) {
        if (fs.existsSync(input) && fs.statSync(input).isDirectory()) {
          return true;
        }
        return 'Please provide a valid directory path.';
      },
    },
    {
      type: 'input',
      name: 'dir2',
      message: 'Enter the path to the app back-end',
      validate: function (input) {
        if (fs.existsSync(input) && fs.statSync(input).isDirectory()) {
          return true;
        }
        return 'Please provide a valid directory path.';
      },
    },
  ];

  const answers = await inquirer.prompt(questions);
  const dir1 = path.normalize(answers.dir1);
  const dir2 = path.normalize(answers.dir2);

  console.log('Selected directories:');
  console.log('Directory 1:', dir1);
  console.log('Directory 2:', dir2);
}

selectDirectories();
<<<<<<< HEAD
generateEnvFile('AES_256_CBC_KEY', appKey, 'client', 'server');


=======
>>>>>>> parent of c7c03c9... refractored app to index.js entry
