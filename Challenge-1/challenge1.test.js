/**
 * Tests for the findFirstRepeated function..
 */
const findFirstRepeated = require('./reto1'); 
describe('findFirstRepeated', () => {

    test('Should return a number', () => {
        const gifts = [1, 2, 3, 4, 5]; 
        expect(typeof findFirstRepeated(gifts)).toBe('number');
    });
    test('Should return a number when there is a repetition', () => {
        const gifts = [1, 2, 3, 1, 2, 4, 5]; 
        expect(typeof findFirstRepeated(gifts)).toBe('number');
    });

    test('should return the first repeated gift', () => {
        const gifts = [2, 1, 3, 5, 3, 2];
        expect(findFirstRepeated(gifts)).toBe(3);
    });

    test('should return -1 if no gift is repeated', () => {
        const gifts = [1, 2, 3, 4, 5];
        expect(findFirstRepeated(gifts)).toBe(-1);
    });
    test ('should return the firts repeated', () => {
        const gifts = [12, 11, 12, 50, 3, 20];
        expect(findFirstRepeated(gifts)).toBe(12);
    });
    test ('should return -1', () => {
        const gifts = [];
        expect(findFirstRepeated(gifts)).toBe(-1);
    })
    test ('should return the firts repeated', () => {
        const gifts = [30,30];
        expect(findFirstRepeated(gifts)).toBe(30);
    });

    test ('should return the firts repeated', () => {
        const gifts = [5, 1, 2, 3, 2, 5, 1];
        expect(findFirstRepeated(gifts)).toBe(2);
    });
    test('should return the first repeated gift with multiple repetitions', () => {
        const gifts = [2, 1, 3, 5, 3, 2, 5];
        expect(findFirstRepeated(gifts)).toBe(3);
    });
    test('should return the first repeated gift with gifts of different types', () => {
        const gifts = ['apple', 'orange', 'banana', 'apple', 'grape'];
        expect(findFirstRepeated(gifts)).toBe('apple');
    });

});