const { prompt } = require("inquirer");
const { writeFile } = require("fs")

// array of questions for user
const questions = [ {
 // # Your Project Title
 type: 'input',
 message: 'Enter project title',
 name: 'title',
 validate: function(title) {
     if (title) {
         return true;
     }
     return 'A good readme.md has a project title';
 },
},
   
];

// function to write README file
console.log("Let's create a readme.md!")
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();