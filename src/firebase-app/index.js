import * as firebase from 'firebase/app'
import 'firebase/firestore'

class FirebaseApp {
  constructor(customConfig) {
    this.app = firebase.initializeApp(customConfig)
    this.db = firebase.firestore()
  }
}

export const {db} = new FirebaseApp({
  apiKey: 'AIzaSyCEe-9P0ugfD-KUPTz5TbBEVE6zGM5Zl3M',
  authDomain: 'the-marioplan.firebaseapp.com',
  databaseURL: 'https://the-marioplan.firebaseio.com',
  projectId: 'the-marioplan',
  storageBucket: 'the-marioplan.appspot.com',
  messagingSenderId: '118979864382',
  appId: '1:118979864382:web:67fb4e68d30e14dad66e6f',
})
