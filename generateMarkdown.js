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
  * [Designed and built by](#Designed-and-built-by)
  #
  
  ## Description 
  ${data.description} ${header}

  ## Project URL
  https://github.com/${data.user}/${data.title}/ ${header}

  ## Mock-Up
  ${data.mockup}) ${header}
  [![readme-demo.mp4](https://drive.google.com/file/d/1pck591s61CiY5xHugS4O-X-CgG4XLF1x/view)](https://drive.google.com/file/d/1pck591s61CiY5xHugS4O-X-CgG4XLF1x/view)
  ![readme-generator demo png](./images/screen-shot_1.png)

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
  ${data.resources} ${header} \n
  * [Inquirer](https://www.npmjs.com/package/inquirer) 
  * [GitHub Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
  * [Choose a License](https://choosealicense.com/)
  * [Badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  * [shields.io](https://shields.io/)
  * [w3schools](https://www.w3schools.com/)
  * [stackoverflow.com](https://stackoverflow.com/)
  * [01-HTML-Git-CSS/04-Important/Good-README-Guide/README.md]

  ## Contact
  Email: ${data.email} ${header}

  ## Designed and built by
  Author(s): ${data.name} ${header} \n
  GitHub: https://github.com/${data.user}/ ${header}

  `;
  }
  
  module.exports = generateMarkdown;
  