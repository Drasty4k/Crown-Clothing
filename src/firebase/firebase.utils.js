import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCMaEWysjkXfvPyqnJn5kZPwsE3k-hAUD0",
    authDomain: "crown-clothing-a66e3.firebaseapp.com",
    projectId: "crown-clothing-a66e3",
    storageBucket: "crown-clothing-a66e3.appspot.com",
    messagingSenderId: "415096481040",
    appId: "1:415096481040:web:3c92a47fff2fc145e13195",
    measurementId: "G-M198BJG4VD"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase