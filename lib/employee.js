const inquirer = require("inquirer");
const fs = require("fs");
const { employeeData } = require("./questions");
const {readFile} = require("../src/file")
// const { getSchool } = require("./intern");
// const { getGitHubAcct } = require('./engineer');

class Employee {
    constructor(name, ID, email, role) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = "Employee";
    }
};

Employee.prototype.add = function () {
    readFile()
        .then((data) => {
            teamData = [];
            if (data.length > 1) {
                teamData = JSON.parse(data);
            };
            teamData.push(this);
           
            let newTeamData = JSON.stringify(teamData);
            fs.writeFile("./dist/team.txt", newTeamData, "utf8", (err) =>
                err ? console.log(err) : console.log("Team member added successfully..."));

        });
};


// Employee.prototype.getData = function () {
//     return inquirer.prompt(employeeData)
// };

module.exports = Employee