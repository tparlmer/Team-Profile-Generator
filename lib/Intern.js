const Employee = require('Employee.js');

class Intern extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return `This intern's school is ${this.school}`;
    }
    getRole() {
        return `This worker's role is intern`
    }
}

module.exports = Intern;

/*
In addition to Employee's properties and methods, Intern will also have:
-school
-getSchool()
-getRole()
*/