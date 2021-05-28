const html = require('../index');
let managerArray = [];
let employeeArray = [];

function boilerplate() {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
        <title>Team Profiles</title>
    </head>
    
    <body>
        <header>
            <h1 class="title is-1 has-text-black">My Team</h1>
        </header>
    
        <main>
            <div class="columns is-centered">
            ${managerArray.join('')}
            </div>
            <div class="columns is-mobile is-centered" id="employee">
            ${employeeArray.join('')}
            </div>
        </main>
    </body>
    
    </html>`
}

function initHTML(arr) {
    arr.forEach((employee) => {
        switch (employee.getRole()) {
            case 'Manager':
                managerCard(employee);
                break;
            case 'Engineer':
                engineerCard(employee);
                break;
            case 'Intern':
                internCard(employee);
        }
    })
    return boilerplate();
}

function managerCard(employee) {
    let managerDiv = '';
    if (employee !== "") {
        managerDiv = ` 
        <div class="column is-4">
            <div class="card">
                <div class="card-content">
                    <span id="name">
                        <h2 class="title is-2">${employee.name}</h2>
                    </span>
                    <span id="title">
                        <h3 class="subtitle is-4">Manager</h3>
                    </span>
                    <span id="id">
                        <p class="subtitle is-5">${employee.id}</p>
                    </span>
                    <span id="email">
                        <p class="subtitle is-5"><a href="mailto:${employee.email}">Email Me!</a></p>
                    </span>
                    <span id="duty">
                        <p class="subtitle is-5">${employee.officeNumber}</p>
                    </span>
                </div>
            </div>
        </div>`
    }
    managerArray.push(managerDiv);
}

function engineerCard(employee) {
    let engineerDiv = '';
    if (employee !== "") {
        engineerDiv = `
        <div class="column is-3">
                <div class="card">
                    <div class="card-content">
                        <span id="name">
                            <h2 class="title is-2">${employee.name}</h2>
                        </span>
                        <span id="title">
                            <h3 class="subtitle is-4">Engineer</h3>
                        </span>
                        <span id="id">
                            <p class="subtitle is-5">${employee.id}</p>
                        </span>
                        <span id="email">
                            <p class="subtitle is-5"><a href="mailto:${employee.email}">Email Me!</a></p>
                        </span>
                        <span id="duty">
                            <p class="subtitle is-5"><a href="https://github.com/${employee.github}">Connect on GitHub</a></p>
                        </span>
                    </div>
                </div>
            </div>`
    }
    employeeArray.push(engineerDiv);
}

function internCard(employee) {
    let internDiv = '';
    if (employee !== "") {
        internDiv = `
        <div class="column is-3">
        <div class="card">
            <div class="card-content">
                <span id="name">
                    <h2 class="title is-2">${employee.name}</h2>
                </span>
                <span id="title">
                    <h3 class="subtitle is-4">Intern</h3>
                </span>
                <span id="id">
                    <p class="subtitle is-5">${employee.id}</p>
                </span>
                <span id="email">
                    <p class="subtitle is-5"><a href="mailto:${employee.email}">Email Me!</a></p>
                </span>
                <span id="duty">
                    <p class="subtitle is-5">${employee.school}</p>
                </span>
            </div>
        </div>
    </div>`
    }
    employeeArray.push(internDiv);
}

module.exports = initHTML;