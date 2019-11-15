import * as projectActions from '../project'
jest.mock('../../../firebase-app')

it('should execute fetchAndStoreProjects action', async () =>{
  expect.assertions(2)
  const dispatch = jest.fn()
  const fetchAndStoreProjects = projectActions.fetchAndStoreProjects()
  expect(typeof fetchAndStoreProjects).toBe('function')
  await fetchAndStoreProjects(dispatch)
  expect(dispatch).toHaveBeenCalledTimes(2)
})

it('should execute createProject action correctly', async ()=> {
  expect.assertions(2)
  const dispatch = jest.fn()
  const createProjectResponseFn = projectActions
      .createProject('test-project')
  expect(typeof createProjectResponseFn).toBe('function')
  await createProjectResponseFn(dispatch)
  expect(dispatch).toHaveBeenCalledTimes(3)
})
