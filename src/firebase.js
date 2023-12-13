import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAV73DqhMZf6IbGCPVLvwMKu6P6xOZHtgw',
  authDomain: 'ecommerce-shopping-dcec2.firebaseapp.com',
  databaseURL: 'https://ecommerce-shopping-dcec2-default-rtdb.firebaseio.com',
  projectId: 'ecommerce-shopping-dcec2',
  storageBucket: 'ecommerce-shopping-dcec2.appspot.com',
  messagingSenderId: '118026629228',
  appId: '1:118026629228:web:7bd4e78a73c6e2ce8aa849',
  measurementId: 'G-6Q1P8HN3BZ'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
export { auth, db }
