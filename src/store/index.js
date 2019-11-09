import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root'
import {getFirebase} from 'react-redux-firebase'

/*
const initialState = window && window.__INITIAL_STATE__
// set initial state here
const store = configureStore(initialState)
// Initialize Firebase instance
firebase.initializeApp(fbConfig)
*/

const middleware = [
  thunk.withExtraArgument({getFirebase}),
]

//
const createStoreWithMiddleware = compose(
    applyMiddleware(...middleware)
)(createStore)
//
const store = createStoreWithMiddleware(
    rootReducer,
)
//
export default store
