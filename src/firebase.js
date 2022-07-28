// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.API_KEY",
  authDomain: "my-project-3d62b.firebaseapp.com",
  projectId: "my-project-3d62b",
  storageBucket: "my-project-3d62b.appspot.com",
  messagingSenderId: "841729290062",
  appId: "1:841729290062:web:edbab5bd56054cecdcb81f",
  measurementId: "G-4BJHFVKK3S",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
