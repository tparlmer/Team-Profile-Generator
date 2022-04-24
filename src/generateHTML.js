const data = require('./index.js');
const fs = require('fs');

generateHTML = (data) => {
    return 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Hello, world!</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="" />
    </head>
    <body>
        <h1> ADD STUFF HERE</h1>
    </body>
    </html>
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