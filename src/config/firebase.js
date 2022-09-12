// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import 'firebase/app'
import "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBU9b4U3ZoxnwvlK-3Xb3SmZybtgGEysRE",
  authDomain: "todolist-d246c.firebaseapp.com",
  projectId: "todolist-d246c",
  storageBucket: "todolist-d246c.appspot.com",
  messagingSenderId: "995555215499",
  appId: "1:995555215499:web:daa6258147bbe4a9f7ec8e",
  measurementId: "G-FNR30MGWBB"
});

// Initialize Firebase
const fs=getFirestore(firebaseConfig)


export default fs;