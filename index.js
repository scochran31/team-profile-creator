const fs = require('fs');
const { prompt } = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const initHTML = require('./src/initHTML');
const { createInflate } = require('zlib');
const allEmployees = [];


async function next() {
    let { employee } = await
        prompt({
            type: 'list',
            name: 'employee',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern', 'None']
        })
    switch (employee) {
        case 'Intern':
            createIntern();
            break;
        case 'Engineer':
            createEngineer();
            break;
        default:
            init(allEmployees);
    }
}

function createManager() {
    prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Name of Manager:'
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'ID:'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Email Address:'
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'Office number:'
        }
    ])
        .then((data) => {
            const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice);
            allEmployees.push(manager);
            next();
        })
}


function createEngineer() {
    prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Name of Engineer:'
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'ID:'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Email Address:'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'GitHub:'
        }
    ])
        .then((data) => {
            const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub);
            allEmployees.push(engineer);
            next();
        })
}

function createIntern() {
    prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Name of Intern:'
        },
        {
            type: 'input',
            name: 'internID',
            message: 'ID:'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Email Address:'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'School:'
        }
    ])
        .then((data) => {
            const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
            allEmployees.push(intern);
            next();
        })
}

function createFile(fileName, data) {
    fs.writeFile(path.join(__dirname, 'dist', fileName), data, err => {
        console.log(err);
    });
}

function init(answers) {
    createFile('employees.html', initHTML(answers));
    console.log('HTML file created successfully!!')
}

createManager();