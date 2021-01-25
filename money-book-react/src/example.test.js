import { exact } from "prop-types"

test('test equal', () => {
    expect(2 + 2).toBe(4)
})
test('test no equal', () => {
    expect(2 + 2).not.toBe(5)
})
test('test to be true or false', () => {
    expect(1).toBeTruthy()
    expect(0).toBeFalsy()
})

test('test number', () => {
    expect(4).toBeGreaterThan(3)
    expect(0).toBeLessThan(5)
})

test('test object', () => {
    expect({name:'ramona', age: 30}).toEqual({name: 'ramona', age: 30})
})


