const inquirer = require('inquirer');
const fs = require('fs');
// const { userInfo } = require('os');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'descriptionMotivation',
        message: 'We can now write the description of your project. What was your motivation for the project? Why did you build it?',
    },
    {
        type: 'input',
        name: 'descriptionSolvedProblem',
        message: 'Continuing with the description of your project, what problem does this program solve?',
    },
    {
        type: 'input',
        name: 'descriptionLearned',
        message: 'And, to finalize the description of your project, what did you learn while creating this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions and examples for use of your project?',
    },
    {
        type: 'list',
        message: 'What license did you select for this project?',
        name: 'license',
        choices: ['Apache License 2.0', 'MIT License', 'Creative Commons Zero v1.0 Universal', 'Mozilla Public License 2.0'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Did anyone else collaborate on this project? Did you use any third-party assets that require attribution?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What example tests can you provide for users of your application?',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
  ])
  .then((response) => {   
    switch (response.license) {
        case 'Apache License 2.0':
            var chosenLicenseLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            projectLicense = 'Apache License 2.0';
            break;
        case 'MIT License':
            var chosenLicenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            projectLicense = 'MIT License';
            break;
        case 'Creative Commons Zero v1.0 Universal':
            var chosenLicenseLink = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
            projectLicense = 'Creative Commons Zero v1.0 Universal';
            break;
        case 'Mozilla Public License 2.0':
            var chosenLicenseLink = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            projectLicense = 'Mozilla Public License 2.0';
    }

    const filename = `${response.title.toLowerCase()}.md`;
    const projectTitle = response.title;
    const descrMotiv = response.descriptionMotivation;
    const descrSolvProb = response.descriptionSolvedProblem;
    const descrLearned = response.descriptionLearned;
    const projectInstallation = response.installation;
    const projectUsage = response.usage;
    const licenseBadge = chosenLicenseLink;
    const licenseChosen = projectLicense;
    const projectContributions = response.contributing;
    const projectTests= response.tests;
    const gitHubUser = response.githubUsername;
    const userEmail = response.email;

    convertToMarkdown(filename, projectTitle, descrMotiv, descrSolvProb, descrLearned, projectInstallation, projectUsage, licenseBadge, licenseChosen, projectContributions, projectTests, gitHubUser, userEmail)
  });

function convertToMarkdown(filename, projectTitle, descrMotiv, descrSolvProb, descrLearned, projectInstallation, projectUsage, licenseBadge, licenseChosen, projectContributions, projectTests, gitHubUser, userEmail) {
    var markdownVersion = `# ${projectTitle}

# ${licenseBadge}

## Description
${descrMotiv}
${descrSolvProb}
${descrLearned}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${projectInstallation}

## Usage
${projectUsage}

## License
This project uses a ${licenseChosen} license. 

## Contributing
${projectContributions}

## Tests
${projectTests}

## Questions
You can find my GitHub profile [here](https://github.com/${gitHubUser}). Please feel free to reach out to me by email at [${userEmail}](${userEmail}) with any additional questions!`;

    writeToReadMe (filename, markdownVersion);
};

function writeToReadMe (filename, markdownVersion) {
    fs.writeFile(filename, (markdownVersion), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();