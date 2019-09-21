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

/*
*
*/
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
