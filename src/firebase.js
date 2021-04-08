import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyA4kccgroucduwWeu-af_RJgE3atA8UeR0",
    authDomain: "twitercl.firebaseapp.com",
    projectId: "twitercl",
    storageBucket: "twitercl.appspot.com",
    messagingSenderId: "512656454498",
    appId: "1:512656454498:web:f3462055d90f48e26f323b",
    measurementId: "G-SZW4GG4R17"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;