const Employee = require('../lib/Employee.js');

const testEmployee = {
    name: 'Tom',
    id: '12345',
    email: 'person@gmail.com',
    role: 'job'
};

// Employee name, ID, and email test
test('Tests employee name, id, email and role', () => {
    const name = "Tom";
    const id = "12345";
    const email = "person@gmail.com"
    const employee = new Employee(name, id, email)
    expect(employee.name).toBe('Tom');
    expect(employee.id).toBe('12345');
    expect(employee.email).toBe('person@gmail.com');
})

// Tests if class is able to be generated
test('Tests if class is able to be generated', () => {
    const employee = new Employee(testEmployee);

    expect(typeof(employee)).toBe("object");
})

//getName
test('Tests getName() method', () => {
    const name = "Tom";
    const employee = new Employee(name);

    expect(employee.getName()).toBe('Tom');
})

//getId
test('Tests getId() method', () => {
    const id = "12345";
    const employee = new Employee('Tom', id);

    expect(employee.getId()).toBe('12345');
})

//getEmail
test('Tests getEmail() method', () => {
    const email = "person@gmail.com"
    const employee = new Employee('Tom','12345',email);

    expect(employee.getEmail()).toBe('person@gmail.com');
})

//getRole
test('Tests getRole() method', () => {
    const role = 'Employee';
    const employee = new Employee('Tom','12345','person@gmail.com',role);

    expect(employee.getRole()).toBe('Employee');
});