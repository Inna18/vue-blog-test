import firebase from "firebase/app";
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9e_n9NtFcdDjdCugGZHyPSEzEcRKVjSE",
  authDomain: "vue-firebase-8eac1.firebaseapp.com",
  projectId: "vue-firebase-8eac1",
  storageBucket: "vue-firebase-8eac1.appspot.com",
  messagingSenderId: "130638113609",
  appId: "1:130638113609:web:12f6ae55a4473b2f984898",
  measurementId: "G-HGY10H78TL"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
