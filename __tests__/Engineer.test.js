const Engineer = require('../lib/Engineer');

test('creates and engineer object', () => {
    const engineer = new Engineer('Shawn', '1234', 'shawn.cochran31@gmail.com', 'scochran31');

    expect(engineer.github).toBe('scochran31');
})

test('get role: returns as engineer', () => {
    const engineer = new Engineer('Shawn', '1234', 'shawn.cochran31@gmail.com', 'scochran31');

    expect(engineer.getRole()).toBe('Engineer');
})
