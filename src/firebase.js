import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD80cEhSggfTDLF9GT51VYhKrwfS5Apf94",
    authDomain: "challenge-3742b.firebaseapp.com",
    projectId: "challenge-3742b",
    storageBucket: "challenge-3742b.appspot.com",
    messagingSenderId: "998508387464",
    appId: "1:998508387464:web:dd7f54256582c3dfcb533d",
    measurementId: "G-FXFGYWWXP8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth};