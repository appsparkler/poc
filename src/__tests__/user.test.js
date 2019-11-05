jest.mock('../request')
import * as user from '../user'

// WITH PROMISES
it('works with promises', () => {
  expect.assertions(1)
  return user.getUserName(4).then((data) => expect(data).toEqual('Mark'))
})

// WITH RESOLVES
it('works with resolves', () => {
  expect.assertions(1)
  return expect(user.getUserName(5)).resolves.toEqual('Paul')
})

// WITH ASYNC/AWAIT
it('works with async/await', async () => {
  expect.assertions(1)
  const data = await user.getUserName(4)
  expect(data).toEqual('Mark')
})

// WITH async/await + .resolves
it('works with async/await and resolves too', async ()=> {
  expect.assertions(1)
  await expect(user.getUserName(5)).resolves.toEqual('Paul')
})

// ERROR HANDLING
it('tests errors with promises', ()=> {
  expect.assertions(1)
  return user.getUserName(2)
      .catch((e)=> {
        expect(e).toEqual(new Error('User with 2 not found.'))
      })
})

// ERROR HANDLING with async/AWAIT
it('tests errors with async/await', async () => {
  expect.assertions(1)
  try {
    await user.getUserName(1)
  } catch (e) {
    expect(e).toEqual(new Error('User with 1 not found.'))
  }
})

// ERROR HANDLING with .rejects
it('tests errors with .rejects', ()=> {
  expect.assertions(1)
  return expect(user.getUserName(2))
      .rejects.toEqual(new Error('User with 2 not found.'))
})
