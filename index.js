const inquirer = require("inquirer");
const fs = require("fs");
const { Employee } = require("./lib/employee");
const { Intern, addIntern } = require("./lib/intern");
const { Engineer, addEngineer } = require("./lib/engineer");
const { Manager, addManager } = require("./lib/manager");
const { employeeType, employeeData } = require("./lib/questions");
const { generateHTML } = require("./src/html-generator");
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
                name: "teamName",
                when:(addTeam)=>addTeam.blnNewTeam
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
                                console.log("Add another team member?");
                                newEmployee();
                            });
                        break;
                    case "Engineer":
                        addEngineer()
                            .then((engineer) => {
                                console.log("Add another team member?");
                                newEmployee();
                            });
                        break;
                    case "Done":
                        console.log("Team updated successfully...");
                        generateHTML()
                        return;
                }

            }
            )
);

newTeam()
    .then((teamData) => {
        if (teamData.blnNewTeam) {
            console.log(`Please enter information about ${teamData.teamName}'s manager:`);
            addManager()
                .then(() => {
                    console.log("Please enter data for your first team member:")
                    newEmployee()
                })
        }
    }
)