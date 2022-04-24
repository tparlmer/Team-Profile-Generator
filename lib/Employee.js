class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return `This employee's name is ${this.name}`;
    }
    getId() {
        return `This employee's name is ${this.id}`;
    }
    getEmail() {
        return `This employee's email is ${this.email}`;
    }
    getRole() {
        return `This workers role is employee`;
    }
}

module.exports = Employee;