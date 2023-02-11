// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2LTlhkA8SouTxIHu9Vq2xe5GuAPckdkI",
  authDomain: "nineteen-club.firebaseapp.com",
  projectId: "nineteen-club",
  storageBucket: "nineteen-club.appspot.com",
  messagingSenderId: "118996619589",
  appId: "1:118996619589:web:cfb35da0432b759a3bee2c",
  measurementId: "G-EN6R5ZHF51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)