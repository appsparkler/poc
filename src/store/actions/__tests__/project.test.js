import * as projectActions from '../project'

jest.mock('../../../firebase-app', ()=> {
  const db = (require('../../../firebase-app/__mocks__')).db
  db.collection('projects').add({
    title: 'Project 1',
    body: 'This is Project 1',
  })
  db.autoFlush(1000)
  return {db}
})

describe('createProject Function', ()=> {
  const {createProject} = projectActions
  const dispatcher = createProject()

  it('should return a function', () => {
    expect(typeof createProject).toBe('function')
  })

  it('dispatcher should be a function', ()=> {
    expect(typeof dispatcher).toBe('function')
  })

  test(`the argument passed to dispatcher to be
    a function that is called at least once`, async ()=> {
    const dispatchFunction = jest.fn()
    await dispatcher(dispatchFunction)
    expect(dispatchFunction).toHaveBeenCalled()
  })
})

describe('fetchAndStoreProject Function', () => {
  it('should return a function', () => {
    expect.assertions(1)
    const {fetchAndStoreProjects} = projectActions
    expect(typeof fetchAndStoreProjects).toBe('function')
  })
  it('should execute the `dispatch` at least once', async ()=> {
    expect.assertions(1)
    const {fetchAndStoreProjects} = projectActions
    const dispatch = jest.fn()
    const dispatcher = fetchAndStoreProjects()
    await dispatcher(dispatch)
    expect(dispatch).toHaveBeenCalledTimes(3)
  })
})
