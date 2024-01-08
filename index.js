// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [ 
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
  name: 'License',
  license:'Which license did you use. Please select one',
  choices:'[MIT License, Apache License 2.0, ISC License, BSD 3-Clause License, None ]',
},

{
  type:'input',
  usage:'type how to use and your projects functionalities',
  name:'usage',
},

{
  type:'input',
  contributors: 'list all the persons that contributed to the project.',
  name:'contributors'
},

{
  type:'input',
  Info:'Proved your git hub name and other personal information',
  name:'info'
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();






