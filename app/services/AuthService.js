import firebase from 'firebase'
import config from '../config/firebaseConfig'

class AuthService {
  constructor () {
    this.firebase = firebase.initializeApp(config)
  }
}

export default new AuthService()
