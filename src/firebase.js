import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVsTo20-yqg2FskgrbGrIuKABIab1-OFU",
  authDomain: "clone-7416d.firebaseapp.com",
  databaseURL: "https://clone-7416d-default-rtdb.firebaseio.com",
  projectId: "clone-7416d",
  storageBucket: "clone-7416d.appspot.com",
  messagingSenderId: "1003883283110",
  appId: "1:1003883283110:web:5f409c2568c369eea5aa67",
  measurementId: "G-KC9BR9XE7C"
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth =firebase.auth();
export{auth,db};