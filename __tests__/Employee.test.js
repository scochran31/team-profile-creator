const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Bob', '8675309', 'bob@ghio.com');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toBe('8675309');
    expect(employee.email).toBe('bob@ghio.com');
});

test('gets employee name', () => {
    const employee = new Employee('Bob', '8675309', 'bob@ghio.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('gets employee id', () => {
    const employee = new Employee('Bob', '8675309', 'bob@ghio.com');

    expect(employee.getID()).toEqual(expect.stringContaining(employee.id));
});

test('gets employee email', () => {
    const employee = new Employee('Bob', '8675309', 'bob@ghio.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test('gets role: intern or employee', () => {
    const employee = new Employee('Bob', '8675309', 'bob@ghio.com');

    expect(employee.getRole()).toBe('Employee');
});