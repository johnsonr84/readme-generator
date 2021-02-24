const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// array of questions for user
inquirer.prompt([
    { // # Enter Your Full Name
        type: 'input',
        message: "Name - Enter your full name?",
        name: 'name',
    },
    { // # Enter Your Email
        type: 'input',
        message: "Email - Enter your email address?",
        name: 'email',
    },
    { // # Your GitHub Username
        type: 'input',
        message: "What is your GitHub Username?",
        name: 'user',
    },
    { // # Github Repo Name
        type: 'input',
        message: "Title - What is your project/ repo name?",
        name: 'title',
    },
    { // ## Project Description
        type: 'input',
        message: "Description - Please describe your project.",
        name: 'description',
    },
    { // ## Deployment: Live OR Repo URL 
        type: 'input',
        message: "Deployment - Insert Live or Repo URL.",
        name: 'deployment',
    },
    { // ## Mock-Up 
        type: 'input',
        message: "Mock-Up - Insert image, screenshot or video demonstrating functionality or appearance. Hint: use image file endpoint or url",
        name: 'mockup',
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
    { // ## License
        type: 'list',
        message: "License - Let other developers know what they can and cannot do with your project. Select a License.",
        name: 'license',
        choices: [
            {name: 'MIT License', value: 'mit'}, 
            {name: 'Apache 2.0', value: 'apache-2.0'},
            {name: 'Mozilla 2.0', value: 'mpl-2.0'},
            {name: 'Boost 1.0', value: 'bsl-1.0'},
            {name: 'The Unlicense', value: 'unlicense'},
            {name: 'GNU AGPLv3', value: 'agpl-3.0'},
            {name: 'GNU GPLv3', value: 'gpl-3.0'},
            {name: 'GNU LGPLv3', value: 'lgpl-3.0'},
        ]
    },
    { // ## Features
        type: 'input',
        message: "Features - If your project has a lot of features, consider listing them here.",
        name: 'features',
    },
    { // ## Tests
        type: 'input',
        message: "Test - If your project has tests, provide examples on how to run them.",
        name: 'tests',
    },
    { // ## Resources
        type: 'input',
        message: "Resources - Please list any resource(s) and their links.",
        name: 'resources',
    },
  

    // function to write README file
]).then((data) => {
    console.log(data);
    const readme = generateMarkdown(data);
    fs.writeFileSync("README.md", readme);
});
