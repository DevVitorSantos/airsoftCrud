// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoD6m2a6aWuXPaoVwbLMn8SCBP9nKJOTo",
  authDomain: "airsofthome-ad239.firebaseapp.com",
  projectId: "airsofthome-ad239",
  storageBucket: "airsofthome-ad239.appspot.com",
  messagingSenderId: "72104257539",
  appId: "1:72104257539:web:4b84238e43397daa080636"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}