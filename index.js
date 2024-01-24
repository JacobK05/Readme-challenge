// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [ 
  {
  type: "input",
  name: 'ProjectName',
  message: 'What is the title of your Project?',
},

{
  type:'input',
  name:'description',
  message: 'Write a description of your project.',
},

{
  type:'input',
  name: 'Installation',
  message:'Proved a description to install your project.',
},


{
  type: "checkbox",
  name: "license",
  message: "Please select a license applicable to this project.",
  choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
 },
{
  type: "input",
  name: "usage",
  message: "Explain how to use your project."
},
{
  type:'input',
  name:'contributors',
  message: 'list all the persons that contributed to the project.',
},

{
  type:'input',
  name:'info',
  message:'Proved your git hub name and other personal information',
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./Read/README.md", generateMarkdown({ ...responses }));
})
}

// Function call to initialize app
init();






