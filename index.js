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

    // function to write README file
]).then((data) => {
    console.log(data);
    const readme = generateMarkdown(data);
    fs.writeFileSync("README.md", readme);
});
