const fs = require("fs");


const readFile = (
    async()=>
        fs.readFileSync("./dist/team.txt", "utf-8")
);

module.exports={readFile}