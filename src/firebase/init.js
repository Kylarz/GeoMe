import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB1a8r6Tqs5sAgsEUwPd-0of_RP9n7efgk",
    authDomain: "geo-me-bfb60.firebaseapp.com",
    databaseURL: "https://geo-me-bfb60.firebaseio.com",
    projectId: "geo-me-bfb60",
    storageBucket: "",
    messagingSenderId: "664104706018",
    appId: "1:664104706018:web:db455b621956f6bd3ba3bb"
  };
  // Initialize Firebase
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();   

