import {db} from '../../firebase-app'

export const createProject = (project) => (async (dispatch)=>{
  dispatch({type: 'CREATE_PROJECT_STARTED'})
  //
  const projectDoc = await db.collection('projects').add(project)
  dispatch({type: 'CREATE_PROJECT', projectDoc})
  //   dispatch({type: 'CREATE_PROJECT_ERROR', err, project})
  dispatch({type: 'CREATE_PROJECT_DONE'})
})

export const fetchAndStoreProjects = () => (async (dispatch)=> {
  dispatch({type: 'FETCH_PROJECTS_STARTED'})
  const docs = await db.collection('projects').get()
  docs.forEach((doc) => dispatch({type: 'STORE_PROJECT', project: doc.data()}))
  dispatch({type: 'FETCH_PROJECTS_DONE'})
})
