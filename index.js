const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// array of questions for user
inquirer.prompt([
    { // # Project Title
        type: 'input',
        message: "Title - What is your project's name?",
        name: 'title',
    },
    { // ## Project Description
        type: 'input',
        message: "Description - Please describe your project.",
        name: 'description',
    },
    { // ## Table of Contents
        type: 'input',
        message: "Installation - What are the steps required to install your project?",
        name: 'installation',
    },
    { 
        type: 'input',
        message: "Usage - Provide instructions and examples for use. Include screenshots as needed.",
        name: 'usage',
    },{
        type: 'input',
        message: "Credits - List your collaborators, if any, with links to their GitHub profiles.",
        name: 'credits',
    },
    {
        type: 'input',
        message: "License - Let other developers know what they can and cannot do with your project.",
        name: 'license',
    },

    { // # Your Username
        type: 'input',
        message: "What is your GitHub Username?",
        name: 'user',
    },

    // function to write README file
]).then((data) => {
    console.log(data);
    const readme = generateMarkdown(data);
    fs.writeFileSync("README.md", readme);
});
