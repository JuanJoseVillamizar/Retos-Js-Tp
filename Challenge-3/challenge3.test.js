const findNaughtyStep = require('./challenge3.js')

describe('findNaughtyStep', () => {
    test('Should return a string', () =>{
        const original = 'abcde'
        const modified = 'abcd'
        expect(typeof findNaughtyStep(original, modified)).toBe('string')
    })
    test('Should return a miss step in modified sequence', ()=>{
        const original = 'abcd'
        const modified = 'abcde'
        expect(findNaughtyStep(original, modified)).toBe('e')
    })
    test('Should return a extra step in modified sequence', ()=>{
        const original = 'abcde'
        const modified = 'abcdef'
        expect(findNaughtyStep(original, modified)).toBe('f')
    })
    test('Should return a extra step in modified sequence', ()=>{
        const original = 'xxxx'
        const modified = 'xxoxx'
        expect(findNaughtyStep(original, modified)).toBe('o')
    })
    test('Should return a extra step in modified sequence', ()=>{
        const original = 'xyz'
        const modified = 'xyzx'
        expect(findNaughtyStep(original, modified)).toBe('x')
    })
    test('Should return a miss step in modified sequence', ()=>{
        const original = 'stepfor'
        const modified = 'stepor'
        expect(findNaughtyStep(original, modified)).toBe('f')
    })
    test('Should return an empty string', ()=>{
        const original = 'iiiii'
        const modified = 'iiiii'
        expect(findNaughtyStep(original, modified)).toBe('')
    })
    test('Should return an empty string', ()=>{
        const original = ''
        const modified = ''
        expect(findNaughtyStep(original, modified)).toBe('')
    })
})