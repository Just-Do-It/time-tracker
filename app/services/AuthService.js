import firebase from 'firebase'
import config from '../config/firebaseConfig'

class AuthService {
  constructor () {
    this.firebase = firebase.initializeApp(config)
  }
  signUp (email, password) {
    return this.firebase.auth().createUserWithEmailAndPassword(email, password)
  }
  signIn (email, password) {
    return this.firebase.auth().signInWithEmailAndPassword(email, password)
  }
}

export default new AuthService()
