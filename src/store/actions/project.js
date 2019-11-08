export const createProject = (project) => ((dispatch)=>(
  setTimeout(()=> (
    dispatch({type: 'CREATE_PROJECT', project})
  ), 500)
))
