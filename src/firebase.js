import firebase from 'firebase/compat/app'
import "firebase/compat/auth";

const config = { 
    apiKey: "AIzaSyDpihYCB4BgC-UYTfjdSV_3vyQwz8QKoEU",
    authDomain: "benchat-207dc.firebaseapp.com",
    projectId: "benchat-207dc",
    storageBucket: "benchat-207dc.appspot.com",
    messagingSenderId: "1060199438577",
    appId: "1:1060199438577:web:fa47c6178d9e9a2f69b150",
    measurementId: "G-HGGGZ8F4ZP" 
};

firebase.initializeApp(config);
export const auth = firebase.auth();
