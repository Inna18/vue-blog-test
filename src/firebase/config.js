import firebase from "firebase/app";
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbKGjnVuLmi85-zhDwucxOW46ktfAmd74",
  authDomain: "vue-firebase-project-b45a6.firebaseapp.com",
  projectId: "vue-firebase-project-b45a6",
  storageBucket: "vue-firebase-project-b45a6.appspot.com",
  messagingSenderId: "652628205454",
  appId: "1:652628205454:web:25b9915b4a8a0cb5e84edf",
  measurementId: "G-KYWLJVEYPG"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
