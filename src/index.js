import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import {createFirestoreInstance} from 'redux-firestore'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import './index.css'
import App from './App.react.js'
import store from './store'
import firebase, {rrfConfig} from './config/firebase'

const AppJSX = (
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}
      config={rrfConfig}
    >
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
)

ReactDOM.render(AppJSX, document.getElementById('root'))
