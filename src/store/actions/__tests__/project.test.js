import * as projectActions from '../project'
jest.useFakeTimers()

it('should return createProject action correctly', ()=> {
  const dispatch = jest.fn()
  const getState = jest.fn()
  projectActions.createProject('test-project')(dispatch, getState)
  jest.runAllTimers()
  expect(dispatch)
      .toBeCalledWith({type: 'CREATE_PROJECT', project: 'test-project'})
})
