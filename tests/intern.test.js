const { Intern } = require("../lib/Intern");
describe("Intern", () => {
    describe("Tests if Intern class has a name", () => {
        it("should created a new Intern with name", () => {
            let obj = new Intern("name","ID","email","Type","school");
            expect(obj.name).toEqual("name");
        })
    });

    describe("Tests if Intern class has an ID", () => {
        it("should created a new Intern with ID", () => {
            let obj = new Intern("name","ID","email","Type","school");
            expect(obj.ID).toEqual("ID");
        })
    });

    describe("Tests if Intern class has an email", () => {
        it("should created a new Intern with email", () => {
            let obj = new Intern("name","ID","email","Type","school");
            expect(obj.email).toEqual("email");
        })
    });
    describe("Tests if Intern class has the correct role", () => {
        it("should created a new Intern with role of Intern", () => {
            let obj = new Intern("name","ID","email","role","school");
            expect(obj.role).toEqual("Intern");
        })
    });
    describe("Tests if Intern class has an a school name", () => {
        it("should created a new Intern with a school", () => {
            let obj = new Intern("name","ID","email","role","school");
            expect(obj.school).toEqual("school");
        })
    });
});
