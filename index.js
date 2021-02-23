const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// array of questions for user
inquirer.prompt([
    { // # Your Project Title
        type: 'input',
        message: "What is your project's name?",
        name: 'title',
    },

]).then((data) => {
console.log(data);
});
