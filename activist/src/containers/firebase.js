// The template for this js-file is copypasted from Mads' Firebase-sample-app
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmyqBdUVBUfcODLJZK4DBgKaHjXUTUKNs",
    authDomain: "activist-6250f.firebaseapp.com",
    databaseURL: "https://activist-6250f.firebaseio.com",
    projectId: "activist-6250f",
    storageBucket: "activist-6250f.appspot.com",
    messagingSenderId: "291175821698",
    appId: "1:291175821698:web:b934e53cfc4fbf3d0d1f9b",
    measurementId: "G-GFXX5RDW1M"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAppAuth = firebaseApp.auth();
export const database = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();



/**<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBmyqBdUVBUfcODLJZK4DBgKaHjXUTUKNs",
    authDomain: "activist-6250f.firebaseapp.com",
    databaseURL: "https://activist-6250f.firebaseio.com",
    projectId: "activist-6250f",
    storageBucket: "activist-6250f.appspot.com",
    messagingSenderId: "291175821698",
    appId: "1:291175821698:web:b934e53cfc4fbf3d0d1f9b",
    measurementId: "G-GFXX5RDW1M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script> */