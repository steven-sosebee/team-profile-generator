const inquirer = require("inquirer");
const Employee = require("./employee");
const questions = require("./questions");

class Engineer extends Employee {
    constructor(name, ID, email, role, gitHubAcct) {
        super(name, ID, email, role)
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = "Engineer";
        this.gitHubAcct = gitHubAcct;
    }
};

const addEngineer = (async () =>
    await inquirer.prompt(
    [...questions.employeeData,
        {
            type: "input",
            message: "what is the user's GitHub account?",
            name: "engineerGitHubAcct"
    }]
    )
    .then((response) => {
        let newEngineer = new Engineer(response.employeeName, response.employeeID, response.employeeEmail, response.employeeType, response.engineerGitHubAcct)
        console.log(newEngineer);
        newEngineer.add();
    })
);

// const getGitHubAcct = (inputs) => {
// inquirer.prompt(
//     [{
//         type: "input",
//         message: "what is the user's GitHub account?",
//         name: "engineerGitHubAcct"
//     }]
//     )
//     .then((response) => {
//         let newEngineer = new Engineer(inputs.employeeName, inputs.employeeID, inputs.employeeEmail, inputs.employeeType, response.engineerGitHubAcct)
//         newEngineer.add();
//     })
// };

module.exports = { Engineer, addEngineer }