jest.mock('../request')
import * as user from '../user'

it('works with promises', () => {
  expect.assertions(1)
  return user.getUserName(4).then((data) => expect(data).toEqual('Mark'))
})

it('works with resolves', () => {
  expect.assertions(1)
  return expect(user.getUserName(5)).resolves.toEqual('Paul')
})
//
it('works with async/await', async () => {
  const data = await user.getUserName(4)
  expect(data).toEqual('Mark')
})
