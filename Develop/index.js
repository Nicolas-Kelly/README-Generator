// TODO: Include packages needed for this application.
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = ([
    {
        // Project title
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        // Description of the project
        type: "input",
        name: "description",
        message: "Give a description of your project."
    },
    {
        // Installation instructions
        type: "input",
        name: "installation",
        message: "Give instuctions on how to install your project."
    },
    {
        // Usage info
        type: "input",
        name: "usage",
        message: "How do you use this project?"
    },
    {
        // Licensing questions
        type: "checkbox",
        name: "license",
        message: "Please select from the licensing options.",
        choices: ["Apache", "MIT", "Mozilla Public 2.0", "Eclipse Public 2.0", "None of the above"]
    },
    {
        // Adding contributors
        type: "input", 
        name: "contributors",
        message: "How can users contribute to your project?"
    },
    {
        // npm test instructions
        type: "input",
        name: "test",
        message: "How does a user test your project?"
    },
    {
        // Github username
        type: "input",
        name: "username",
        message: "Enter GitHub username."
    },
    {
        // Email
        type: "input",
        name: "email",
        message: "Please enter your email."
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("REAME has been generated.");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
