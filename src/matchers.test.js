test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

// COMMON MATCHERS
test('object assignment', () => {
  const data = {one: 1}
  data.two = 2
  expect(data).not.toBe({one: 1, two: 2})
  expect(data).toEqual({one: 1, two: 2})
})
test('adding positive number is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  }
})

// TRUTHINESS
test('null', ()=> {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBe(0)
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// NUMBERS
test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)
  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

// STRINGS
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/)
})
test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

// ARRAYS and ITERABLES
test('the shopping list has cheeze on it', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'cheeze',
  ]
  expect(shoppingList).toContain('cheeze')
})

// EXCEPTIONS
/**
 * Compiles android code.
*/
function compileAndroidCode() {
  throw new Error('you are working with the wrong JDK')
}
test('compile-android function throws an error', () => {
  expect(compileAndroidCode).toThrow(/JDK/)
  expect(compileAndroidCode).toThrow(Error)
  expect(compileAndroidCode).toThrow('you are working with the wrong JDK')
})
