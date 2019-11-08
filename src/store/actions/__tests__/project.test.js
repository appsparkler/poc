import * as projectActions from '../project'

it('should return createProject action correctly', ()=> {
  const {createProject} = projectActions
  expect(createProject).not.toBeNull()
})
