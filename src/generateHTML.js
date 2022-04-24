const data = require('./index.js');
const fs = require('fs');

generateHTML = (data) => {
    var team = ``;
    
    // Manager data is retrieved from the zero index of the array
    for (let i = 1; i < data.length; i++) {
        if (data[i].role === "Intern") {
            team +=
            // Intern Card  
            <div>

            </div>
        }
        if (data[i].role === "Engineer") {
            team +=
            // Engineer Card
            <div>

            </div>
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
        <!--BULMA CSS LINK -->
        <!--CSS STYLESHEET LINK -->
    </head>
    <body>
    // interpolate variables into card deck
    <div>
        <div>
            <div>
                <!-- Start Manager Card -->
                <div>
                    <div class="card header">
                        <h3>${data[0].name}</h3>
                        <h3>${data[0].role}</h3>
                    </div>
                    <div class="card body">
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

// writeFile function in challenge 9
function writeFile (data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./index.html", generateHTML(data), (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve({ ok: true, message:"index.html created"});
        });
    });
};

module.exports = {
    writeFile,
};