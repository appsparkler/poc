import * as projectActions from '../project'
// jest.useFakeTimers()
jest.mock('../../../firebase-app')

it('should return createProject action correctly', ()=> {
  expect.assertions(3)
  const dispatch = jest.fn()
  const createProjectResponseFn = projectActions
      .createProject('test-project')
  return createProjectResponseFn(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: 'CREATE_PROJECT_STARTED',
        })
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          projectDoc: {
            'message': 'resolved',
          },
          type: 'CREATE_PROJECT',
        })
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: 'CREATE_PROJECT_DONE',
        })
      })
      .catch((err) => {
        console.log(err)
      })
})

it('should reject createProject action correctly', ()=> {
  expect.assertions(3)
  const dispatch = jest.fn()
  const createProjectResponseFn = projectActions
      .createProject('test-project-error')
  return createProjectResponseFn(dispatch)
      .then(() => {
        // expect(di)
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: 'CREATE_PROJECT_STARTED',
        })
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          err: new Error({
            error: 'rejected',
          }),
          project: 'test-project-error',
          type: 'CREATE_PROJECT_ERROR',
        })
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: 'CREATE_PROJECT_DONE',
        })
      })
      .catch((err) => {
        console.log(err)
      })
})
/*
it('should reject to reject correctly', ()=> {
  const dispatch = jest.fn()
  const createProjectResponseFn = projectActions
      .createProject('test-project-error')
  createProjectResponseFn(dispatch)
      .then((res) => {
        // expect.assertions(2)
        console.log('res: ', res)
        expect(dispatch)
            .toHaveBeenNthCalledWith(1,
                {
                  type: 'CREATE_PROJECT_STARTED',
                  project: 'test-project-error',
                },
            )

        expect(dispatch)
            .toHaveBeenNthCalledWith(2, {
              type: 'CREATE_PROJECT_ERROR',
              err: new Error({
                error: 'rejected',
              }),
              project: 'test-project-error',
            })
      })
      // .catch((err) => {
      //   console.log('err in catch', err)
      // })
})
*/
