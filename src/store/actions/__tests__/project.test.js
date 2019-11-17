import * as projectActions from '../project'

jest.mock('../../../firebase-app', ()=> {
  const FirebaseApp = require('../../../firebase-app/__mocks__')
  return class MockedFirebaseApp extends FirebaseApp.default {
    constructor() {
      super()
      this.db.collection('projects').add({
        title: 'Project 1',
        body: 'This is Project 1',
      })
      this.db.autoFlush(1000)
    }
  }
})

describe('createProject Function', ()=> {
  const {createProject} = projectActions
  const dispatcher = createProject()
  beforeEach(()=> console.log('before each is being called...'))

  it('should return a function', () => {
    expect(typeof createProject).toBe('function')
  })

  it('dispatcher should be a function', ()=> {
    expect(typeof dispatcher).toBe('function')
  })

  test(`the argument passed to dispatcher to be
    a function that is called a few times`, async ()=> {
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
