const { Manager } = require("../lib/Manager");
describe("Manager", () => {
    describe("Tests if Manager class has a name", () => {
        it("should created a new Manager with name", () => {
            let obj = new Manager("name","ID","email","Type","number");
            expect(obj.name).toEqual("name");
        })
    });

    describe("Tests if Manager class has an ID", () => {
        it("should created a new Manager with ID", () => {
            let obj = new Manager("name","ID","email","Type","number");
            expect(obj.ID).toEqual("ID");
        })
    });

    describe("Tests if Manager class has an email", () => {
        it("should created a new Manager with email", () => {
            let obj = new Manager("name","ID","email","Type","number");
            expect(obj.email).toEqual("email");
        })
    });
    describe("Tests if Manager class has an email", () => {
        it("should created a new Manager with role of Manager", () => {
            let obj = new Manager("name","ID","email","role","number");
            expect(obj.role).toEqual("Manager");
        })
    });
    describe("Tests if Manager class has an email", () => {
        it("should created a new Manager with phone number", () => {
            let obj = new Manager("name","ID","email","role","number");
            expect(obj.officeNumber).toEqual("number");
        })
    });
});
