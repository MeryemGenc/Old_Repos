import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'firebase/compat/auth'
// error && firebase/compat/storage
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCDSjquSOd87v3jNWNPJ0Rc1P_TYz7sq7g',
  // apiKey: process.env.production.REACT_APP_API_KEY,
  authDomain: 'denemetahtasi3-888d5.firebaseapp.com',
  projectId: 'denemetahtasi3-888d5',
  storageBucket: 'denemetahtasi3-888d5.appspot.com',
  messagingSenderId: '357347884396',
  appId: '1:357347884396:web:66779415fefa678c4c8749',
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
