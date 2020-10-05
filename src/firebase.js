import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDgjf7iDF4z-kd6Go-BSmSYb3ZUX8jh6r0",
  authDomain: "clone-32bfb.firebaseapp.com",
  databaseURL: "https://clone-32bfb.firebaseio.com",
  projectId: "clone-32bfb",
  storageBucket: "clone-32bfb.appspot.com",
  messagingSenderId: "730346845728",
  appId: "1:730346845728:web:83e24c01c5be5f95eeae45",
  measurementId: "G-NJQQ4YEETJ"
};

const firebaseApp  = firebase.initializeApp(firebaseConfig); 

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

// url final project:
// https://clone-32bfb.web.app/
