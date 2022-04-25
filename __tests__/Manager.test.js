const Manager = require('../lib/Manager');

// Tests if class is able to be generated
test('Tests if class is able to be generated', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe("object");
});

// The other three classes will extend Employee.

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber
test('Tests manager officeNumber', () => {
    const officeNumber = '42069';
    const manager = new Manager('Tom','','tparlmer@gmail.com', officeNumber);

    expect(manager.officeNumber).toBe('42069');
});

// getOfficeNumber()
test('Tests getOfficeNumber() method', () => {
    const testOfficeNumber = '42069';
    const manager = new Manager('','','',testOfficeNumber);

    expect(manager.getOfficeNumber()).toBe('42069');
});

// getRole() // Overridden to return 'Manager'
test('Tests getRole() method', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
});