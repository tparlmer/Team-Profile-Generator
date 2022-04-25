const Intern = require('../lib/Intern');

//ONLY NEED TO WRITE ADDITIONAL TESTS

// Tests if class is able to be generated
test('Tests if class is able to be generated', () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe("object");
});

// school
test('Tests intern school', () => {
    const school = 'Grand Canyon University';
    const intern = new Intern('Tom','','tparlmer@gmail.com', school);

    expect(intern.school).toBe('Grand Canyon University');
});

// getSchool()
test('Tests getSchool() method', () => {
    const testSchool = 'Grand Canyon University'
    const intern = new Intern('','','',testSchool);

    expect(intern.getSchool()).toBe('Grand Canyon University');
});

// getRole() // Overridden to return 'Intern'
test('Tests getRole() method', () => {
    const testRole = 'intern'
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});