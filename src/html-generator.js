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
    <title>${teamData[i].name} Roster</title>
</head>
<body>
    
</body>
</html>
`};

const generateHTML = (async () =>
        file.readFile()
        .then((data) => {
            const teamName = fs.readFileSync("./dist/teamName.txt", "utf-8");
            let teamData = JSON.parse(data);
            var htmlData = "";
            var htmlHeader = "";
            for (i = 0; i < teamData.length; i++){
                switch (teamData[i].role) {
                    case "Intern":
                        htmlData =htmlData + `
                        <div class="card">
                            <div class="card-header bg-primary text-light">${teamData[i].name}</div>
                            <div class="card-body">${teamData[i].role}</div>
                            <div class="card-body"><a href="mailto:${teamData[i].email}"><i class="fa fa-envelope" aria-hidden="true"></i>  ${teamData[i].email}</a></div>
                            <div class="card-body"><i class="fas fa-school"></i>  ${teamData[i].school}</div>
                        </div>`
                        break;
                    case "Engineer":
                        htmlData=htmlData +
                        `<div class="card">
                            <div class="card-header bg-primary text-light">${teamData[i].name}</div>
                            <div class="card-body">${teamData[i].role}</div>
                            <div class="card-body"><a href="mailto:${teamData[i].email}"><i class="fa fa-envelope" aria-hidden="true"></i>  ${teamData[i].email}</a></div>
                            <div class="card-body"><a href="https://github.com/${teamData[i].gitHubAcct}" target="blank"><i class="fab fa-github-square"></i>  ${teamData[i].gitHubAcct}</a></div>
                        </div>`
                        break;
                    case "Manager":
                        htmlHeader = `
                        <div class="jumbotron"><h1>${teamName}</h1><div><h1>Team Manager: ${teamData[i].name}</h1><h2>Direct Phone Number: ${teamData[i].officeNumber}</h2></div></div>`
                }
            }
            fs.writeFileSync("./dist/index.html", `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                />
                <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                crossorigin="anonymous"
                />
            </head>
            <body>
                ${htmlHeader}
                <div class="col-6 container-fluid row justify-content-center">
                ${htmlData}
                </div>
            </body>
            </html>
            `)}));

// generateHTML();
module.exports = { generateHTML };