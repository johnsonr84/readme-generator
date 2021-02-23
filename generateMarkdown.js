// function to generate markdown for README
function generateMarkdown(data) {
  const header = "";
  return `
  # ${data.title} ${header}
  # ${data.description} ${header}
  ## ${data.user} ${header}
  `;
  }
  
  module.exports = generateMarkdown;
  