// const sum = require('./calculcate');
import { sum } from './calculcate';
// console.log("sum", sum);
test('adds 1 + 2 to equal 3', () => {
    expect(sum([1, 2])).toBe(3);
});
test('adds 1 + 2 to equal 3', () => {
    expect(sum([22, 3])).toBe(25);
});