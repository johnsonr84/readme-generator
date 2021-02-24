// function to generate markdown for README
function generateMarkdown(data) {
  const header = "";

  return `
  # ${data.title} ${header}

  [![github-follow](https://img.shields.io/github/followers/${data.user}?label=Follow&logoColor=lightgrey&style=social)](https://github.com/${data.user})
  [![project-languages-used](https://img.shields.io/github/languages/count/${data.user}/${data.title}?color=orange)](https://github.com/${data.user}/${data.title})
  [![project-top-language](https://img.shields.io/github/languages/top/${data.user}/${data.title}?color=yellow)](https://github.com/${data.user}/${data.title})
  [![license](https://img.shields.io/badge/license-${data.license}-brightgreen.svg)](https://choosealicense.com/licenses/${data.license}/)

  ## Table of Contents 
  * [Description](#Description)
  * [Project URL](#Project-URL)
  * [Mock-up](#Mock-up)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [License](#License)
  * [Features](#Features)
  * [Tests](#Tests)
  * [Resources](#Resources)
  * [Contact](#Contact)
  * [Designed and built by yours truly](#Designed-and-built-by-yours-truly)
  #
  
  ## Description 
  ${data.description} ${header}

  ## Project URL
  https://github.com/${data.user}/${data.title}/ ${header}

  ## Mock-Up
  ${data.mockup}) ${header}

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
  ${data.name} ${header} \n
  GitHub: https://github.com/${data.user}/ ${header}

  `;
  }
  
  module.exports = generateMarkdown;
  