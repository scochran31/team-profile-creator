const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Mary', '1111', 'mary9@ghio.com', '187');

    expect(manager.officeNumber).toBe('187');
})

test('get role: return manager', () => {
    const manager = new Manager('Mary', '1111', 'mary9@ghio.com', '187');

    expect(manager.getRole()).toBe('Manager');
})