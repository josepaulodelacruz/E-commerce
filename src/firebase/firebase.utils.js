import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAdPlt_x7IqxLlRYfGSWIkvo129qvwtCyo",
  authDomain: "cali-db-aa4ce.firebaseapp.com",
  databaseURL: "https://cali-db-aa4ce.firebaseio.com",
  projectId: "cali-db-aa4ce",
  storageBucket: "",
  messagingSenderId: "290632590325",
  appId: "1:290632590325:web:8e4d888ece838244"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
