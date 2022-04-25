const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    getOfficeNumber() {
        // TODO: add error handling
        return this.officeNumber;
    }
    getRole() {
        // TODO: add error handling
        return this.role;
    }
}

module.exports = Manager;