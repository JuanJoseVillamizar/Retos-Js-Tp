/**
 * Tests for the manufacture function..
 */

const manufacture = require('./challenge2.js');

describe ('manufacture', ()=>{
    test ('should return a array', ()=>{
        const gifts = ['tren', 'oso', 'pelota']
        const materials = 'tronesa'
        expect(Array.isArray(manufacture(gifts,materials))).toBe(true);
    })
    test ('should return the gifts that can be made with the available materials', ()=>{
        const gifts = ['tren', 'oso', 'pelota']
        const materials = 'tronesa'
        expect(manufacture(gifts,materials)).toStrictEqual(['tren', 'oso']);
    })
    test ('should return an empty array', ()=>{
        const gifts = ['coche', 'muñeca', 'balon']
        const materials = 'ocmuñalb'
        expect(manufacture(gifts,materials)).toStrictEqual([]);
    })
    test ('Should return an empty array', () => {
        const gifts = ['patineta', 'robot', 'libro']
        const materials = 'nopor'
        expect(manufacture(gifts,materials)).toStrictEqual([])
    })
    test('Should returnt an empty array', () => {
        const gifts = []
        const materials = 'libros'
        expect(manufacture(gifts,materials)).toStrictEqual([])
    })
    test('Should returnt an empty array', () => {
        const gifts = []
        const materials = ''
        expect(manufacture(gifts,materials)).toStrictEqual([])
    })
    test('should handle duplicate materials', () => {
        const gifts = ['tren', 'oso', 'pelota'];
        const materials = 'trronnnesa'; 
        expect(manufacture(gifts, materials)).toStrictEqual(['tren', 'oso']);
    });
    test('should handle shared letters', () => {
        const gifts = ['mesa', 'silla', 'cama'];
        const materials = 'asmleic';
        expect(manufacture(gifts, materials)).toStrictEqual(['mesa', 'silla','cama']);
    });
})
