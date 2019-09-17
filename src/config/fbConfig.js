import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCysOuUeAFtx9Vza8wa7hLTPeEgbyv0gUY",
    authDomain: "techremix-75b9e.firebaseapp.com",
    databaseURL: "https://techremix-75b9e.firebaseio.com",
    projectId: "techremix-75b9e",
    storageBucket: "techremix-75b9e.appspot.com",
    messagingSenderId: "428770023530"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;