test('it will fail everytime!', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  }
  expect(user).toMatchInlineSnapshot()
})
