// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDW1r9h0gWCPurGJB9ExXYm_Z5_AhmRtn8", // Replace with your Firebase config
  authDomain: "course-app-93cad.firebaseapp.com",
//   databaseURL: "YOUR_DATABASE_URL",
  projectId: "course-app-93cad",
  storageBucket: "course-app-93cad.appspot.com",
  messagingSenderId: "305533294701",
  appId: "1:305533294701:web:06e336e08f6eb4da3d0764",
  measurementId: "G-GWXZJR0W0H",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;
