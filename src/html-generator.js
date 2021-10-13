const fs = require("fs");
const file = require("./file");

const htmlTemplate = (data) => {
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`};

const generateHTML = (async () =>
        file.readFile()
        .then((data) => {
            console.log(data);
            let teamData = JSON.parse(data);
            console.log(teamData);
            var htmlData = "";
            var htmlHeader = "";
            for (i = 0; i < teamData.length; i++){
                switch (teamData[i].role) {
                    case "Intern":
                        htmlData =htmlData + `
                        <div class="card">
                            <div class="card-header">${teamData[i].name}</div>
                            <div class="card-body">${teamData[i].role}</div>
                            <div class="card-body">${teamData[i].email}</div>
                            <div class="card-body">${teamData[i].school}</div>
                        </div>`
                        break;
                    case "Engineer":
                        htmlData=htmlData +
                        `<div class="card">
                            <div class="card-header">${teamData[i].name}</div>
                            <div class="card-body">${teamData[i].role}</div>
                            <div class="card-body">${teamData[i].email}</div>
                            <div class="card-body">${teamData[i].gitHubAcct}</div>
                        </div>`
                        break;
                    case "Manager":
                        htmlHeader = `
                        <div class="jumbotron"><h1>${teamData[i].name}</h1></div>`
                }
                htmlData =htmlData + `<div><h5>${teamData[i].name}</h5></div>`
            }
            fs.writeFileSync("./dist/index.html", `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                ${htmlHeader}
                ${htmlData}
            </body>
            </html>
            `)}));

module.exports = { generateHTML };