const employeeType = [
    {
        type: "list",
        message: "Employee type:",
        name: "employeeType",
        choices: ["Intern", "Engineer", "Done"]
    }
];

const employeeData = [
    {
        type: "input",
        message: "Employee name:",
        name: "employeeName"
    },
    {
        type: "input",
        message: "Employee email:",
        name: "employeeEmail"
    },
    {
        type: "input",
        message: "Employee ID:",
        name: "employeeID"
    }
];

module.exports ={employeeType, employeeData}