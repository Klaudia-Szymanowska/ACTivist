import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmyqBdUVBUfcODLJZK4DBgKaHjXUTUKNs",
  authDomain: "activist-6250f.firebaseapp.com",
  databaseURL: "https://activist-6250f.firebaseio.com",
  projectId: "activist-6250f",
  storageBucket: "activist-6250f.appspot.com",
  messagingSenderId: "291175821698",
  appId: "1:291175821698:web:ea5d86d12da0335c0d1f9b",
  measurementId: "G-80H5FKZBYP",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAppAuth = firebaseApp.auth();
export const database = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
