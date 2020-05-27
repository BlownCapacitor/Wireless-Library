import * as firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyC9NgyasDnxV4ObsyeuEtZ6hEMi22QA2co",
    authDomain: "wily-225e4.firebaseapp.com",
    databaseURL: "https://wily-225e4.firebaseio.com",
    projectId: "wily-225e4",
    storageBucket: "wily-225e4.appspot.com",
    messagingSenderId: "345802586269",
    appId: "1:345802586269:web:87cc671d0234f213613c74"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();