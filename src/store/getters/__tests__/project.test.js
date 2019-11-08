import * as projectGetters from '../project'

it('should get projects', () => {
  const exampleProject = {
    id: '1',
    title: 'Project Title',
    content: 'Project content....',
  }
  const state = {
    project: {
      projects: [exampleProject],
    },
  }
  const projects = projectGetters.getProjects(state)
  expect(projects).not.toBeNull()
  expect(projects).toEqual([exampleProject])
})
