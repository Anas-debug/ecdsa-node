import inquirer from 'inquirer';
import fs from 'fs';

// Function to retrieve directories in a given path
function getDirectories(path) {
  return fs.readdirSync(path, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

// Function to interactively choose a directory
async function chooseDirectory(directories) {
  const questions = [
    {
      type: 'list',
      name: 'selectedDirectory',
      message: 'Select a directory:',
      choices: directories,
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers.selectedDirectory;
}

// Entry point of the CLI app
async function main() {
  const targetPath = './'; // Change this to the path you want to list directories from
  const directories = getDirectories(targetPath);

  if (directories.length === 0) {
    console.log('No directories found.');
    return;
  }

  const selectedDirectory = await chooseDirectory(directories);
  console.log(`You selected: ${selectedDirectory}`);

  // You can use the selectedDirectory variable here for further processing
}

main();
