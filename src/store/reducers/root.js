import {combineReducers} from 'redux'
import {firebaseReducer as firebase} from 'react-redux-firebase'
import {firestoreReducer as firestore} from 'redux-firestore'
import auth from './auth'
import project from './project'

const rootReducer = combineReducers({
  auth,
  project,
  firebase,
  firestore,
})

export default rootReducer
