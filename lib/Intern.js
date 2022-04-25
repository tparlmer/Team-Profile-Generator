const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }
    getSchool() {
        // TODO: add error handling
        return this.school;
    }
    getRole() {
        // TODO: add error handling
        return this.role;
    }
}

module.exports = Intern;