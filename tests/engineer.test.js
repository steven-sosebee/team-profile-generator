// const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
describe("Employee", () => {
    describe("Initialization", () => {
        it("should created a new employee with name, email, ID, and type", () => {
            const obj = new Engineer("name","ID","email","Type");
            expect(obj.name).toEqual("name");
        })
    });
});
