const { Engineer } = require("../lib/engineer");
describe("Engineer", () => {
    describe("Tests if Engineer class has a name", () => {
        it("should created a new Engineer with name", () => {
            let obj = new Engineer("name","ID","email","role","gitHub");
            expect(obj.name).toEqual("name");
        })
    });

    describe("Tests if Engineer class has an ID", () => {
        it("should created a new Engineer with ID", () => {
            let obj = new Engineer("name","ID","email","role","gitHub");
            expect(obj.ID).toEqual("ID");
        })
    });

    describe("Tests if Engineer class has an email", () => {
        it("should created a new Engineer with email", () => {
            let obj = new Engineer("name","ID","email","role","gitHub");
            expect(obj.email).toEqual("email");
        })
    });
    describe("Tests if Engineer class has an email", () => {
        it("should created a new Engineer with role of Engineer", () => {
            let obj = new Engineer("name","ID","email","role","gitHub");
            expect(obj.role).toEqual("Engineer");
        })
    });
    describe("Tests if Engineer class has an email", () => {
        it("should created a new Engineer with gitHub account", () => {
            let obj = new Engineer("name","ID","email","role","gitHub");
            expect(obj.gitHubAcct).toEqual("gitHub");
        })
    });
});
