const { equal } = require('assert');
const Potion = require('../lib/Potion.js');
// Tests creation of Health potion
test('creates a health potion object', () => {
    const potion = new Potion('health');
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

// Test random creation of potion
test('creates a ramdom potion object', () => {
    const potion = new Potion();
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});