import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCxg0cEKgX38fArChkkXMAUN4OGmbl_Q2M",
    authDomain: "todos-caf26.firebaseapp.com",
    projectId: "todos-caf26",
    storageBucket: "todos-caf26.appspot.com",
    messagingSenderId: "568833373100",
    appId: "1:568833373100:web:e147a7e638a42fa1e8c009"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore()
