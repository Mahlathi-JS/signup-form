import firebase from 'firebase'
require('firebase/auth')

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDJ2qr97cf7i98eKJCUEfbPC-IVrFZQiF4",
    authDomain: "signup-form-59832.firebaseapp.com",
    projectId: "signup-form-59832",
    storageBucket: "signup-form-59832.appspot.com",
    messagingSenderId: "50571144084",
    appId: "1:50571144084:web:0d458bf0ca545a736e3d81"
  }).auth();

export default firebase;