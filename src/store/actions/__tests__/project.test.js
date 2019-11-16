import * as projectActions from '../project'
import {db} from '../../../firebase-app'
jest.mock('../../../firebase-app')

it('should execute fetchAndStoreProjects action', async () =>{
  expect.assertions(3)
  const dispatch = jest.fn()
  const {fetchAndStoreProjects} = projectActions
  expect(typeof fetchAndStoreProjects).toBe('function')
  db.collection('projects').add({
    title: 'Project 1',
    body: 'This is project 1',
  })
  const asyncFunction = fetchAndStoreProjects()
  expect(typeof asyncFunction).toBe('function')
  db.autoFlush(1000)
  await asyncFunction(dispatch)
  expect(dispatch).toHaveBeenCalledTimes(3)
})

it('should execute createProject action correctly', async ()=> {
  expect.assertions(3)
  const {createProject} = projectActions
  const dispatch = jest.fn()
  const project = {
    title: 'Project 1',
    body: 'This is project 1',
  }
  expect(typeof createProject).toBe('function')
  const asyncFunction = createProject(project)
  expect(typeof asyncFunction).toBe('function')
  db.autoFlush(1000)
  await asyncFunction(dispatch)
  expect(dispatch).toHaveBeenCalledTimes(3)
})
