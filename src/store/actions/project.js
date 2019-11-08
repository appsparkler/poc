const actions = {
  createProject: (project)=> ({type: 'CREATE PROJECT', project}),
}

export const asyncCreateProject = (project) => {
  return function(dispatch) {
    setTimeout(function() {
      dispatch(actions.createProject)
    }, 3000)
  }
}
