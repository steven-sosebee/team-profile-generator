const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Tests if Employee class has a name", () => {
        it("should created a new employee with name", () => {
            let obj = new Employee("name","ID","email","Type");
            expect(obj.name).toEqual("name");
        })
    });

    describe("Tests if Employee class has an ID", () => {
        it("should created a new employee with name", () => {
            let obj = new Employee("name","ID","email","Type");
            expect(obj.ID).toEqual("ID");
        })
    });

    describe("Tests if Employee class has an email", () => {
        it("should created a new employee with name", () => {
            let obj = new Employee("name","ID","email","Type");
            expect(obj.email).toEqual("email");
        })
    });
});
