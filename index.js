const ExpandPrompt = require("inquirer/lib/prompts/expand");
const Manager = require("./lib/Manager");

// Set up a global variable for data
// This will be where user input is stored and then called for generating the HTML
let data = [];

// Inquirer requirement
const inquirer = require(inquirer)

// writeFile requirement
const { writeFile } = require("./src/generateHTML");

// Manager requirement
const Manager = require("./lib/Manager");

// Engineer requirement
const Engineer = require("./lib/Engineer");

// Intern requirement
const Intern = require("./lib/Intern");

// Filesystem functionality
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
}

const createTeam = () => {
    inquirer
        .prompt([
            {
                type: "lists",
                name: "nextSteps",
                message: "Please choose one of the following options:",
                choices: ["Add Engineer", "Add Intern", "Done with my team"],
            },
        ])
        .then((userSelection) => {
            if (userSelection.nextSteps === "Add Engineer") {
                getEngineer(data);
            } else if (userSelection.nextSteps === "Add Intern") {
                getIntern(data)
            } else if (userSelection.nextSteps === "Done with my team") {
                endPrompt(data);
            }
        });
};

// Function to getEngineer data

// Function to getIntern data

// End prompt is called to generate the data in a file then transitions to template.js

// Write File

// promptUser call

promptUser().then((answers) => {
    const manager = new Manager({
        name: answers.managerName,
        id: answers.managerId,
        email: answers.managerEmail,
        officeNumber: answers.managerOffice,
    });
    data.push(manager);

    createTeam();
});

// ADD TEAM ARRAY OBJECT
// INTERPRET TEAM ARRAY OBJECT TO INTERPOLATE VARIABLES INTO generateHTML