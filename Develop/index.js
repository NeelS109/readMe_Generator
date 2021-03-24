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
        name: "toc",
        message: "Please add a Table of Contents"
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
        name: "contributing",
        message: "Please provide guidelines for contributing"
      },
      {
        type: "input",
        name: "tests",
        message: "Please provide testing instructions"
      },
      {
        type: "input",
        name: "questions",
        message: "If you have any questions, insert here."
      }
    ]);
  }




// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
