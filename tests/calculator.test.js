const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    expect(calculator.sum(5,2)).toBe(7);
})

test('substracts a - b', () => {
    expect(calculator.substract(10,6)).toBe(4);
})

test('multiplies a * b', () => {
    expect(calculator.multiply(5,4)).toBe(20)
})

test('divides a / b', () => {
    expect(calculator.divide(10,2)).toBe(5);

})

test('Raises to power a ^ b', () => {
    expect(calculator.power(3,4)).toBe(81)
})

