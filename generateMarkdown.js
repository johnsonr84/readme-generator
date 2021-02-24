// function to generate markdown for README
function generateMarkdown(data) {
  const header = "";

  return `

  # ${data.title} ${header}

  ## Table of Contents 
  * [Description](#description)
  * [Deplyment: Live URL](#deployment)
  * [Mock-up](#mockup)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [Tests](#tests)
  * [Resources](#resources)
  * [Contact](#email)
  * [Designed by](#name)
  #
  
  ## Description 
  ${data.description} ${header}

  ## Deployment: Live URL
  https://github.com/${data.user}/{data.title}/ ${header}

  ## Mock-Up
  ${data.mockup} ${header}

  ## Installation 
  ${data.installation} ${header}

  ## Usage 
  ${data.usage} ${header}

  ## Credits 
  ${data.credits} ${header}

  ## License 
  This project is [${data.license}](https://choosealicense.com/licenses/${data.license}/) licensed.

  ## Features
  ${data.features} ${header}

  ## Tests
  ${data.tests} ${header}

  ## Resources
  ${data.resources} ${header}

  ## Contact
  Email: ${data.email} ${header}

  ## Designed and built by yours truly
  ${data.name} ${header}
  GitHub: https://github.com/${data.user}/ ${header}

  `;
  }
  
  module.exports = generateMarkdown;
  