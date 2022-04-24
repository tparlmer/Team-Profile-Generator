const inquirer = require(inquirer)

// CHECK HERE
inquirer
    .prompt([
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
        //Question 5: option to add Engineer or Intern
        {
            type: "input",
            name: "ManagerName",
            message: "Enter your Team Manager's name",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter...");
                    return false;
                }
            }
        }


    ])
    .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber)
    })
    .catch((error) => {
        if (error) {
            // something went wrong
        } else {    
            // something else went wrong
        }
    });

    // ADD TEAM ARRAY OBJECT
    // INTERPRET TEAM ARRAY OBJECT TO INTERPOLATE VARIABLES INTO generateHTML