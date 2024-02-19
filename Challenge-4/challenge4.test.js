/**
 * Tests for the decode function..
 */

const decode = require('./challenge4.js');

describe('decode', () => {
    test('should return a string', () => { 
        const message = 'hola (odnum)'
        expect(typeof decode(message)).toBe('string');
    })
    test('Should return an ordered message', () => {
        const message = '(olleh) (dlrow)!'
        expect(decode(message)).toBe('hello world!')
    })
    test('Should return an ordered message', () => {
        const message = 'sa(u(cla)atn)s'
        expect(decode(message)).toBe('santaclaus')
    })
})