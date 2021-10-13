const inquirer = require("inquirer");
const fs = require("fs");
const { Employee } = require("./lib/employee");
const { Intern, addIntern } = require("./lib/intern");
const { Engineer, addEngineer } = require("./lib/engineer");
const { Manager, addManager } = require("./lib/manager");
const { employeeType, employeeData } = require("./lib/questions");
const { type } = require("os");


const newTeam =
    (async () =>
        inquirer.prompt([
            {
                type: "confirm",
                message: "Would you like to enter a new team?",
                name: "blnNewTeam"
            },
            {
                type: "input",
                message: "Enter the team name:",
                name: "teamName"
            }
        ])
    );


const newEmployee = (
    async () =>        
        await inquirer.prompt(employeeType)
        .then((empType) => {
            switch (empType.employeeType) {
                case "Intern":
                    addIntern()
                        .then((Intern) => {
                            newEmployee();
                        });
                    break;
                case "Engineer":
                    addEngineer()
                        .then((engineer) => {
                            newEmployee();
                        });
                    break;
                case "Done":
                    console.log("Team updated successfully...")
                    return;
            };

        }
        )
)
    

const init = () => {
    newTeam()
        .then((response) => {
            if (response.blnNewTeam) {
                addManager()
                    .then(() => {
                        newEmployee()
                    })
            };
        });
};

init();