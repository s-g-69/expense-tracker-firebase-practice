// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVMfegirQlSi0oWPkOS9Kp7sTHL5k0MDw",
  authDomain: "expense-tracker-ad82e.firebaseapp.com",
  projectId: "expense-tracker-ad82e",
  storageBucket: "expense-tracker-ad82e.appspot.com",
  messagingSenderId: "82002667267",
  appId: "1:82002667267:web:29329ae113c869d8642b36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);