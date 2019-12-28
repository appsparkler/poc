import {db} from '../../firebase-app'

export const createProject = (project) => (async (dispatch)=>{
  dispatch({type: 'CREATE_PROJECT_STARTED'})
  const projectDocReference = await db.collection('projects').add(project)
  const projectDocSnapshot = await projectDocReference.get()
  dispatch({type: 'CREATE_PROJECT', project: projectDocSnapshot.data()})
  dispatch({type: 'CREATE_PROJECT_DONE'})
})

export const fetchAndStoreProjects = () => (async (dispatch)=> {
  dispatch({type: 'FETCH_PROJECTS_STARTED'})
  const docs = await db.collection('projects').get()
  // docs.forEach(console.log)
  const project = (doc) => ({
    ...doc.data(),
    id: doc.id,
  })
  docs.forEach((doc) => dispatch({
    type: 'STORE_PROJECT',
    project: project(doc),
  }))
  dispatch({type: 'FETCH_PROJECTS_DONE'})
})

export const fetchProject = (projectId) => (async (dispatch) => {
  console.log('fetching...')
  dispatch({type: 'FETCH_PROJECT_STARTED'})
  const docRef = db.collection('projects').doc(projectId)
  const doc = await docRef.get()
  if (doc.exists) {
    console.log(doc.data())
    dispatch({type: 'STORE_FETCHED_PROJECT', project: doc.data()})
  } else {
    console.log('no such doc...')
  }
  dispatch({type: 'FETCH_PROJECT_ENDED'})
})
