// function to generate markdown for README
function generateMarkdown(data) {
  const header = "";
  return `
  # ${data.title} ${header}

  ## Description 
  ${data.description} ${header}

  ## Table of Contents 
  * [ Installation ] (#installation)
  * [ Usage ] (#usage)
  * [ Credits ] (#credits)
  * [ License ] (#license)

  ## Installation 
  ${data.installation} ${header}
  ## Usage 
  ${data.usage} ${header}
  ## Credits 
  ${data.credits} ${header}
  ## License 
  ${data.license} ${header}

  ## Features 
  ${data.features} ${header}

  ## Made with Love by
  ${data.user} ${header}

  `;
  }
  
  module.exports = generateMarkdown;
  