const data = require('../index');
const fs = require('fs');

generateHTML = (data) => {
    var team = ``;
    
    // Manager data is retrieved from the zero index of the array
    for (let i = 1; i < data.length; i++) {
        if (data[i].role === "Intern") {
            team +=
            // Intern Card
            `
            <div class="card">
                <div class="card-header">
                    <h3>Name ${data[i].getName()}</h3>
                    <h5>Role ${data[i].getRole()}</h5>
                </div>
                <div class="card-content">
                    <ul>
                        <li>ID ${data[i].getId()}</li>
                        <li>Email ${data[i].getEmail()}</li>
                        <li>School ${data[i].getSchool()}</li>
                    </ul>
                </div>
            </div>
            `
        }
        if (data[i].role === "Engineer") {
            team +=
            // Engineer Card
            `
            <div class="card">
                <div class="card-header">
                    <h3>Name ${data[i].getName()}</h3>
                    <h5>Role ${data[i].getRole()}</h5>
                </div>
                <div class="card-content">
                    <ul>
                        <li>ID ${data[i].getId()}</li>
                        <li>Email ${data[i].getEmail()}</li>
                        <li>School ${data[i].getGithub()}</li>
                    </ul>
                </div>
            </div>
            `
        }
    }
    
    return 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Team Profile Page </title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma-rtl.min.css">
        <!--CSS STYLESHEET LINK -->
    </head>
    <body>
    // interpolate variables into card deck
    <div>
        <div>
            <div>
                <!-- Start Manager Card -->
                <div class="card">
                    <div class="card-header">
                        <h3>${data[0].name}</h3>
                        <h5>${data[0].role}</h5>
                    </div>
                    <div class="card-content">
                        <ul>
                            <li>${data[0].id}</li>
                            <li>${data[0].email}</li>
                            <li>${data[0].officeNumber}</li>
                        </ul>
                    </div>
                </div>
                <!-- End Manager Card -->

            </div>
        </div>

        <!-- DYNAMIC DATA LOADS HERE -->
            ${team}
    
    </div>        
    </body>
    `
}

module.exports = generateHTML;