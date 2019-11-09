import * as projectActions from '../project'
// jest.useFakeTimers()
jest.mock('../../../firebase-app')

it('should return createProject action correctly', ()=> {
  const dispatch = jest.fn()
  // const getState = jest.fn()
  const createProjectResponseFn = projectActions
      .createProject('test-project')
  createProjectResponseFn(dispatch)
  expect(dispatch)
      .toBeCalledWith({type: 'CREATE_PROJECT_STARTED'})
})
