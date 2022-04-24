const Employee = require('Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber;
    }
    getOfficeNumber() {
        return `This manager's office number is ${this.officeNumber}`;
    }
    getRole() {
        return `This worker's role is manager`;
    }
}

module.exports = Manager;

/* In addition to Employee classes, Manager will have:
-OfficeNumber
-getOfficeNumber()
-getRole() -> Overridden to return 'Manager'
 */