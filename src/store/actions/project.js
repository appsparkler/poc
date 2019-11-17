import FirebaseApp from '../../firebase-app'

export const createProject = (project) => (async (dispatch)=>{
  const {db} = new FirebaseApp()
  dispatch({type: 'CREATE_PROJECT_STARTED'})
  const projectDocReference = await db.collection('projects').add(project)
  const projectDocSnapshot = await projectDocReference.get()
  dispatch({type: 'CREATE_PROJECT', project: projectDocSnapshot.data()})
  dispatch({type: 'CREATE_PROJECT_DONE'})
})

export const fetchAndStoreProjects = () => (async (dispatch)=> {
  const {db} = new FirebaseApp()
  dispatch({type: 'FETCH_PROJECTS_STARTED'})
  const docs = await db.collection('projects').get()
  docs.forEach((doc) => dispatch({type: 'STORE_PROJECT', project: doc.data()}))
  dispatch({type: 'FETCH_PROJECTS_DONE'})
})
