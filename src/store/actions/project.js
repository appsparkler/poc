export const createProject = (project) => {
  return function(resolve) {
    resolve({
      type: 'CREATE_PROJECT',
      project,
    })
  }
}
