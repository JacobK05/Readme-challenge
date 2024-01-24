// TODO: Create a function that returns a license badge based on which license is passed in

const { default: ListPrompt } = require("inquirer/lib/prompts/list");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none"){
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none"){
   return `https://api.github.com/${license}`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `## license
       Licensed under the ${license}`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # Project Name
  ${data.ProjectName}

  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}


  ## table of contents
  * [Instal](#Installation)
  * [Usage](#Usage)
  * [Contributions](#Contributions)
  * [Information](#Info)
  

  ## Instal
  ${data.Installation}


  ## Usage
  ${data.usage}


  ## Contributors
  ${data.contributors}


  ## information
  ${data.info}
`;
}

module.exports = generateMarkdown;
