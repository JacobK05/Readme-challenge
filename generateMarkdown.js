// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GPL v3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    'BSD 3-Clause': '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
  };

  return licenseBadges[license] || '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': '(https://opensource.org/licenses/MIT)',
    'GPL v3': '(https://www.gnu.org/licenses/gpl-3.0)',
    'Apache 2.0': '(https://opensource.org/licenses/Apache-2.0)',
    'BSD 3-Clause': '(https://opensource.org/licenses/BSD-3-Clause)'
  };

  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License 
  This project is licensed under the ${license} License. ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Name 
  ${data.ProjectName}


${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Information](#Info)

## Installation
${data.Installation}

${renderLicenseSection(data.license)}

## Usage
${data.usage}

## Contributors
${data.contributors}

## Information
${data.info}
`;
}


module.exports = generateMarkdown;
