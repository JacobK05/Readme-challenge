// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      input: "input",
      title: 'What is the title of your Project?',
      name: 'Project Name',
    },
    
    {
      input:'input',
      description: 'Write a description of your project.',
      name:'short description',
    },

    {
      input:'input',
      installation:'Proved a description to instal your project.',
      name: 'instal',
    },

    {
      type:'list',
      choices:'[MIT License, Apache License 2.0, ISC License, BSD 3-Clause License ]',
      license:'Which license did you use. Please select one',
      name: 'License'
    },
    
    {

    },
    {

    },

    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
