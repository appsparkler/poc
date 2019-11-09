import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root'
import {getFirestore, reduxFirestore} from 'redux-firestore'
import {getFirebase, reactReduxFirebase} from 'react-redux-firebase'
import firebaseConfig from '../config/firebase'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({
          getFirebase, getFirestore,
        })),
        // new ReactReduxFirebase(firebaseConfig)
        reduxFirestore(firebaseConfig),
    ),
    // compose(
    //     ,
    // ),
)

export default store
