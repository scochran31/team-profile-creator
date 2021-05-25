const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Jane', '5555', 'jane28@ghio.com', 'Tiny Woodland');

    expect(intern.school).toBe('Tiny Woodland');
})

test('get role: return intern', () => {
    const intern = new Intern('Jane', '5555', 'jane28@ghio.com', 'Tiny Woodland');

    expect(intern.getRole()).toBe('Intern')
})