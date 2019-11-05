test('it will fail everytime!', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  }
  expect(user).toMatchInlineSnapshot(
      {
        createdAt: expect.any(Date),
        id: expect.any(Number),
      },
      `
    Object {
      "createdAt": Any<Date>,
      "id": Any<Number>,
      "name": "LeBron James",
    }
  `,
  )
})
