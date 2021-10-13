const inquirer = require("inquirer");
const Employee = require("./employee");
const questions = require("./questions");

class Manager extends Employee {
    constructor(name, ID, email, role, officeNumber) {
        super(name, ID, email, role)
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }
};

const addManager = (
    async () =>
        await inquirer.prompt(
    [
        ...questions.employeeData,
        {
            type: "input",
            message: "Manager Office Number:",
            name: "officeNumber"
        }
    ]
    )
    .then((response) => {
        let newManager = new Manager(response.employeeName, response.employeeID, response.employeeEmail, response.employeeType, response.internSchool)
        newManager.add();
    })
);

module.exports = { Manager, addManager }
