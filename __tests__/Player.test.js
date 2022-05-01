const Potion = require('../lib/Potion');
jest.mock('../lib/Potion.js');
console.log(new Potion());
const Player = require("../lib/Player");
const { JestHook } = require('jest-watcher');
// test for player name, health, strength, and agility
test('creates a player object', () => {
    const player = new Player('Sam');
    expect(player.name).toBe('Sam');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
}); 