const inquirer = require("inquirer");
const Employee = require("./employee");
const questions = require("./questions");
class Intern extends Employee {
    constructor(name, ID, email, role, school) {
        super(name, ID, email, role)
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = "Intern";
        this.school = school;
    }
};

const addIntern = (async () =>
    await inquirer.prompt(
    [...questions.employeeData,
        {
        type: "input",
        message: "What school does the intern attend?",
        name: "internSchool"
    }]
    )
    .then((response) => {
        let newIntern = new Intern(response.employeeName, response.employeeID, response.employeeEmail, response.employeeType, response.internSchool)
        newIntern.add();
    })
);

module.exports = { Intern, addIntern }