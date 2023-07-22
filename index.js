const inquirer = require('inquirer');
const fs = require('fs');

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
            break;
        case 'MIT License':
            var chosenLicenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case 'Creative Commons Zero v1.0 Universal':
            var chosenLicenseLink = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
            break;
        case 'Mozilla Public License 2.0':
            var chosenLicenseLink = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }

    const filename = `${response.title.toLowerCase()}.md`;
    const data = `# ${response.title}
    
## Description
<p>${response.descriptionMotivation}<br>${response.descriptionSolvedProblem}<br>${response.descriptionLearned}</p>

## Table of Contents
<ul>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="license">License</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions</a></li>
</ul>

## Installation
<p>${response.installation}</p>

## Usage
<p>${response.usage}</p>

## License
${chosenLicenseLink}

## Contributing
<p>${response.contributing}</p>

## Tests
<p>${response.tests}</p>

## Questions
<p>You can find my GitHub profile [here](https://github.com/${response.githubUsername}). Please feel free to reach out to me by email at [${response.email}](${response.email}) with any additional questions! </p>
`

    fs.writeFile(filename, JSON.stringify(data),  (err) =>
    err ? console.log(err) : console.log('Success!')
    );
  });




// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();