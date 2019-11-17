const firebasemock = require('firebase-mock')
// export const db = new firebasemock.MockFirestore()

export default class FirebaseApp {
  constructor() {
    this.db = new firebasemock.MockFirestore()
  }
}
