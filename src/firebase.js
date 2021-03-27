import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDJSKqgXEKPb6WoQ41V-w1O_Cib9PXaKcM",
  authDomain: "clone21-575e9.firebaseapp.com",
  projectId: "clone21-575e9",
  storageBucket: "clone21-575e9.appspot.com",
  messagingSenderId: "190923464101",
  appId: "1:190923464101:web:405977df29f7c30a015c4c",
  measurementId: "G-GP89KCHCYB",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider, auth };
