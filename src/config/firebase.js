import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCEe-9P0ugfD-KUPTz5TbBEVE6zGM5Zl3M',
  authDomain: 'the-marioplan.firebaseapp.com',
  databaseURL: 'https://the-marioplan.firebaseio.com',
  projectId: 'the-marioplan',
  storageBucket: 'the-marioplan.appspot.com',
  messagingSenderId: '118979864382',
  appId: '1:118979864382:web:28c84c1d4c37948bd66e6f',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore()
// .settings({
//   timestampsInSnapshots: true,
// })

export default firebase
