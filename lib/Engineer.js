const Employee = require('Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getGithub() {
        return `This engineer's github is ${this.github}`;
    }
    getRole() {
        return `This worker's role is Engineer`;
    }
}

module.exports = Engineer;