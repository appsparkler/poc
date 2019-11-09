import {db} from '../../firebase-app'

export const createProject = (project) => ((dispatch)=>{
  dispatch({type: 'CREATE_PROJECT_STARTED'})
  //
  return db.collection('projects')
      .add(project)
      .then((projectDoc) => {
        dispatch({type: 'CREATE_PROJECT', projectDoc})
      })
      .catch((err)=>{
        dispatch({type: 'CREATE_PROJECT_ERROR', err, project})
      })
      .finally(()=>{
        dispatch({type: 'CREATE_PROJECT_DONE'})
      })
})
