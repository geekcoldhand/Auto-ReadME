// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: "input",
      name: "Title",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "Description",
      message: "What is the description of the project?",
    },
    {
      type: "input",
      name: "TableContent",
      message: "What is the Table of Contents?",
    },
    {
      type: "input",
      name: "installation",
      message: "Any Installations?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the app used for?",
    },
    {
      type: "list",
      name: "license",
      choices: ["MIT", "Apache", "Mozilla", "Boost"],
      message: "Do you want to add any licenses?",
    },
    {
      type: "input",
      name: "contributors",
      message: "Who are the contributors?",
    },
    {
      type: "input",
      name: "test",
      message: "Have you completed any test?",
    },
    {
      type: "input",
      name: "gitName",
      message: "GitHub link?",
    },
    {
      type: "input",
      name: "email",
      message: "email?",
    },
  ])
  .then((data) => {
    writeToFile("README.md", data);
  });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let license = "";
  if (data.license == "MIT") {
    license =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (data.license == "Apache") {
    license =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]";
  }
  if (data.license == "Mozilla") {
    license =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  if (data.license == "Boost") {
    license =
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else {
    license;
  }
  fs.writeFile(
    fileName,
    `Title: ${data.Title}
    
    Desctiption: ${data.Description} 
    Table of Content: #${data.TableContent} 
    Installation: ${data.installation}
    Usage: ${data.usage}

    Licenses: ${license}
    Contributors: ${data.contributors}
    Test: ${data.test}
    GitHub: ${data.gitName}
    Questions: ${data.email}`,
    (err) => {
      if (err) console.log(err);
      else {
        console.log("File written successfully\n");
      }
    }
  );
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
