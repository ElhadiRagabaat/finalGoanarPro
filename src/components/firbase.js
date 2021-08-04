
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDnjiDh3iTokpy0t0-EzALLd4tccgYfZaY",
  authDomain: "goanar-project.firebaseapp.com",
  projectId: "goanar-project",
  storageBucket: "goanar-project.appspot.com",
  messagingSenderId: "1090194289741",
  appId: "1:1090194289741:web:625f6e9d9635206ecc9804"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
export { db, auth, storage }