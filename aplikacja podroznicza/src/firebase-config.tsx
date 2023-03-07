// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXkFwWO3X63belErZtQ2Ki5HUhejvxErA",
  authDomain: "triptastic-dd542.firebaseapp.com",
  projectId: "triptastic-dd542",
  storageBucket: "triptastic-dd542.appspot.com",
  messagingSenderId: "506806224359",
  appId: "1:506806224359:web:4e624464c223c554636942",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
