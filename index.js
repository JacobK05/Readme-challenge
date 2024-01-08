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
  installation:'Proved a description to install your project.',
  name: 'How do you install this project',
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
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((Response) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
})
}

// Function call to initialize app
init();






