import * as projectActions from '../project'
// jest.useFakeTimers()
jest.mock('../../../firebase-app')

it('should return createProject action correctly', ()=> {
  const dispatch = jest.fn()
  const createProjectResponseFn = projectActions
      .createProject('test-project')
  return createProjectResponseFn(dispatch)
      .then((res) => {
        expect(dispatch).toBeCalledTimes(3)
      })
  // expect(dispatch)
  //     .toBeCalledWith({type: 'CREATE_PROJECT_STARTED'})
})

it('should return createProject to reject correctly', ()=> {
  const dispatch = jest.fn()
  const createProjectResponseFn = projectActions
      .createProject('test-project-error')
  createProjectResponseFn(dispatch)
  expect(dispatch)
      .toBeCalledWith({type: 'CREATE_PROJECT_STARTED'})
})
