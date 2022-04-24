const Employee = require('../lib/Employee.js')

// Employee name test
test('Tests employee name', () => {
    const employee = new Employee('Tom');

    expect(employee.name).toBe('Tom');
})

// Employee ID test
test('Tests employee id', () => {
    const employee = new Employee('Tom','12345');

    expect(employee.id).toBe('12345');
})

// Employee email test
test('Tests employee email', () => {
    const employee = new Employee('Tom','','tparlmer@gmail.com');

    expect(employee.email).toBe('tparlmer@gmail.com');
})

// Tests if class is able to be generated
test('Tests if class is able to be generated', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
})

//getName
test('Tests getName() method', () => {
    const testName = 'Tom'
    const employee = new testName;

    expect(employee.getName()).toBe(testName);
})

//getId
test('Tests getId() method', () => {
    const testId = '12345';
    const employee = new testId;

    expect(employee.getId()).toBe(testId);
})

//getEmail
test('Tests getEmail() method', () => {
    const testEmail = 'person@gmail.com'
    const employee = new testEmail;

    expect(employee.getEmail()).toBe(testEmail);
})

//getRole
test('Tests getRole() method', () => {
    const testRole = 'job'
    const employee = testRole;

    expect(employee.getRole()).toBe(testRole);
});