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
