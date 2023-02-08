// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAz25uMqP5mN1Kra9bqYsrfN35z4F4CgcY",
    authDomain: "prognosis-layer.firebaseapp.com",
    projectId: "prognosis-layer",
    storageBucket: "prognosis-layer.appspot.com",
    messagingSenderId: "8078136202",
    appId: "1:8078136202:web:a4a7a65d9cd6f2fed3ee73",
    measurementId: "G-DEHXM6V6D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;