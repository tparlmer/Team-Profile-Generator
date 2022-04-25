// Initialize team member array
let teamMembers = [];

// Node Module Requirements
const inquirer = require(inquirer);
const generateHTML = require("./src/generateHTML");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");

// first 4 questions
const promptUser = () => {
    return inquirer.prompt([
        //Question 1: Team Manager Name
        {
            type: "input",
            name: "managerName",
            message: "Enter your Team Manager's name",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter...");
                    return false;
                }
            }
        },
        //Question 2: Team Manager employee ID
        {
            type: "input",
            name: "managerId",
            message: "Enter your Team Manager's name",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter...");
                    return false;
                }
            }
        },
        //Question 3: Team Manager email address
        {
            type: "input",
            name: "managerEmail",
            message: "Enter your Team Manager's name",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter...");
                    return false;
                }
            }
        },
        //Question 4: Team Manager office number
        {
            type: "input",
            name: "officeNumber",
            message: "Enter your Team Manager's name",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter...");
                    return false;
                }
            }
        },
    ])
};

// Menu giving user options to select Intern, Manager, or Engineer to add as new Employee
const createTeam = () => {
    inquirer
        .prompt([
            {
                type: "lists",
                name: "nextPerson",
                message: "Please choose one of the following options:",
                choices: ["Add Engineer", "Add Intern", "Done with my team"],
            },
        ])
        .then((userSelection) => {
            if (userSelection.nextPerson === "Add Engineer") {
                addEngineer();
            } else if (userSelection.nextPerson === "Add Intern") {
                addIntern();
            } else (userSelection.nextPerson === "Done with my team") {
                writeFile(generateHTML(teamMembers));
            }
        });
};

// adds Engineer to data array
function addEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the Engineer's name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the Engineer's employee id"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the Engineer's email address"
        },
        {
            type: "input",
            name: "github",
            message: "Enter the Engineer's github username"
        }
    ])
    .then((data) => {
        data.role = "Engineer";
        teamMembers.push(new Engineer (data));
        createTeam();
    })
};

// adds Intern to data array
function addIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the Intern's name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the Intern's employee id"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the Intern's email address"
        },
        {
            type: "input",
            name: "school",
            message: "Enter the Intern's school"
        }
    ])
    .then((data) => {
        data.role = "Intern";
        teamMembers.push(new Intern (data));
        createTeam();
    })
};

// Writes an html file to dist folder
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created'
            });
        });
    });
};

// promptUser call
promptUser().then((data) => {
    data.role = "Manager";
    teamMembers.push(new Manager(data));
    createTeam();
});