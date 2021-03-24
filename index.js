const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of the ReadMe?"
      },
      {
        type: "input",
        name: "description",
        message: "Please add a description for the ReadMe"
      },
      {
        type: "input",
        name: "installation",
        message: "What are the installation instructions"
      },
      {
        type: "input",
        name: "usage",
        message: "How will this application be used?"
      },
      {
        type: "input",
        name: "contributing",
        message: "Please provide guidelines for contributing"
      },
      {
        type: "list",
        name: "license",
        message: "Which license are you using?",
        choices: [
          "MIT License",
          "GNU AGPLv3",
          "ISC License",
        ]
      },
      {
        type: "input",
        name: "tests",
        message: "Please provide testing instructions"
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address"
      },
      {
        type: "input",
        name: "github",
        message: "Please enter your github username"
      }
    ]);
  }


  function generateREADME(answers) {
    return `# ${answers.title}
## Description 
  ${answers.description}

## Table of Contents 
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [License](#license)
  [Tests](#tests)
  [Questions](#questions)

## Installation
  ${answers.installation}

## Usage
  ${answers.usage}

##Contributers
  ${answers.contributing}

## License
[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})

## Tests
  ${answers.tests}

## Questions
  With questions regarding this CLI application please contact me via email ${answers.email} or github ${answers.github}

`}
  

promptUser()
  .then(function(answers) {
    const readme = generateREADME(answers);

    return writeFileAsync("generatedReadMe.md", readme);
  })
  .then(function() {
    console.log("Successfully wrote to generatedReadMe.md");
  })
  .catch(function(err) {
    console.log(err);
  });





