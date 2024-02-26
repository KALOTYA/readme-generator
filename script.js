const fs = require("fs");
const inquirer = require("inquirer");


inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title to your project?'
    },
    {
        type: 'input',
        name: 'intro',
        message: 'Provide a short and brief intorduction to your project.'
    },
    {
        type: 'input',
        name: 'descript',
        message: 'Write a full description of what your project can do. ex:(what,why,how)'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps to install your project?'
    },
    {
        type: 'input',
        name: 'usageOne',
        message: 'Provide instructions on your project.'
    },
    {
        type: 'input',
        name: 'usageTwo',
        message: 'Provide a screenshot of your project. (pls input file path from folder!!!)?'
    },
    {
        type: 'checkbox',
        name: 'license',
        choices: ['MIT License', 'GNU General Public License v3.0', 'Apache License 2.0', 'GNU General Public License v2.0', 'BSD 3-Clause "New" or "Revised" License', 'BSD 2-Clause "Simplified" License', 'Mozilla Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v3.0', 'Eclipse Public License 2.0', 'Unlicense', 'GNU Affero General Public License v3.0 and the MIT License'],
        message: 'Which licenses is your project using?'
    },
    {
        type: 'input',
        name: 'contrib',
        message: 'List brief guidlines for conributors to follow.'
    },
    {
        type: 'input',
        name: 'testOne',
        message: 'What are some tests the user can run on your project?'
    },
    {
        type: 'input',
        name: 'testTwo',
        message: 'What are some examples of how to run the tests?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'reach',
        message: 'What are some instructions on how they can reach you?'
    },
]).then((responses) => {
    console.log(responses);
});







// inquirer.prompt([
        // {
        //     type: 'input',
        //     name: 'title',
        //     message: 'What is the title to your project?'
        // },
        // {
        //     type: 'input',
        //     name: 'intro',
        //     message: 'Provide a short and brief intorduction to your project.'
        // },
        // {
        //     type: 'input',
        //     name: 'descript',
        //     message: 'Write a full description of what your project can do. ex:(what,why,how)'
        // },
        // {
        //     type: 'input',
        //     name: 'install',
        //     message: 'What are the steps to install your project?'
        // },
        // {
        //     type: 'input',
        //     name: 'usageOne',
        //     message: 'Provide instructions on your project.'
        // },
        // {
        //     type: 'input',
        //     name: 'usageTwo',
        //     message: 'Provide a screenshot of your project. (pls input file path from folder!!!)?'
        // },
        // {
        //     type: 'checkbox',
        //     name: 'license',
        //     choices: ['MIT License', 'GNU General Public License v3.0', 'Apache License 2.0', 'GNU General Public License v2.0', 'BSD 3-Clause "New" or "Revised" License', 'BSD 2-Clause "Simplified" License', 'Mozilla Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v3.0', 'Eclipse Public License 2.0', 'Unlicense', 'GNU Affero General Public License v3.0 and the MIT License' ], 
        //     message: 'Which licenses is your project using?'
        // },
        // {
        //     type: 'input',
        //     name: 'contrib',
        //     message: 'List brief guidlines for conributors to follow.'
        // },
        // {
        //     type: 'input',
        //     name: 'testOne',
        //     message: 'What are some tests the user can run on your project?'
        // },
        // {
        //     type: 'input',
        //     name: 'testTwo',
        //     message: 'What are some examples of how to run the tests?'
        // },
        // {
        //     type: 'input',
        //     name: 'username',
        //     message: 'What is your github user name?'
        // },
        // {
        //     type: 'input',
        //     name: 'email',
        //     message: 'What is your email?'
        // },
        // {
        //     type: 'input',
        //     name: 'reach',
        //     message: 'What are some instructions on how they can reach you?'
        // },
    //     .then((response) => {
    //         fs.writeFile("README.md", `#${response.title}\n\n`, (err) =>
    //             err ? console.error(err) : console.log("Title logged Successfully")
    //         );
    //         fs.appendFile("README.md", `${response.intro}\n\n`, (err) =>
    //             err ? console.error(err) : console.log("Introduction logged Successfully")
    //         );
    //         fs.appendFile("README.md", `##Table of contents\n- [Description](#description)\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)`, (err) =>
    //             err ? console.error(err) : console.log("Table of Contents logged Successfully")
    //         );
    //         fs.appendFile("README.md", `##Description\n${response.descript}\n\n`, (err) =>
    //             err ? console.error(err) : console.log("Description logged Successfully")
    //         );
    //         fs.appendFile("README.md", `##Installation\n${response.install}\n\n`, (err) =>
    //             err ? console.error(err) : console.log("Installation logged Successfully")
    //         );
    //         fs.appendFile("README.md", `##Usage\n${response.usageOne}\n![alt text](${response.usageTwo})`, (err) =>
    //         err ? console.error(err) : console.log("Installation logged Successfully")
    //         );
    //     })
    
    // ]);






