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
