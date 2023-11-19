// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXFsvMmU2AYOdjRGxQG5lVZi9ik5WDE_E",
  authDomain: "sharyngss.firebaseapp.com",
  projectId: "sharyngss",
  storageBucket: "sharyngss.appspot.com",
  messagingSenderId: "847886775992",
  appId: "1:847886775992:web:702521608e4755d970e64d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
