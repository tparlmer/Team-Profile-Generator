const Engineer = require('../lib/Engineer.js');

// Double check the Employee tests run as well because Engineer extends Employee in constructor function

// Tests if class is able to be generated
test('Tests if class is able to be generated', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe("object");
})

// In addition to Employee's properties and methods, Engineer will also have:

// test github // GitHub username
test('Tests github username', () => {
    const engineer = new Engineer('Tom','githubber10');

    expect(engineer.github).toBe('githubber10');
});

// test getGithub() method
test('Tests getGithub() method', () => {
    const testGithub = 'githubber10';
    const engineer = new testGithub;

    expect(engineer.getGithub()).toBe(testGithub);
});

// test getRole() // Overridden to return 'Engineer'
test('Tests getRole() method', () => {
    const testRole = 'Engineer'
    const engineer = testRole;

    expect(engineer.getRole()).toBe(testRole);
});