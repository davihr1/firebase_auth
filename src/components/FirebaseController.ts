// Import the functions you need from the SDKs you need
import * as FirebaseApp from "firebase/app";
import * as FirebaseAuth from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

interface BaseProps {
    email: string,
    password: string
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7whTihniBg6Y1gVN2LYR9MDfKsOQc_os",
  authDomain: "plus-7fa48.firebaseapp.com",
  projectId: "plus-7fa48",
  storageBucket: "plus-7fa48.appspot.com",
  messagingSenderId: "871477940526",
  appId: "1:871477940526:web:bcba45e59d4df1b4f82abf",
  measurementId: "G-VVDFBGQR6C"
};

const FIREBASE_APP = FirebaseApp.initializeApp(firebaseConfig);
const analytics = getAnalytics(FIREBASE_APP);

export function handleSignin({email, password}: BaseProps) {
    return FirebaseAuth.signInWithEmailAndPassword(
        FirebaseAuth.getAuth(), email, password
    )
}

export function handleSignup({email, password}: BaseProps) {
    return FirebaseAuth.createUserWithEmailAndPassword(
        FirebaseAuth.getAuth(), email, password
    )
}

export function handleReset({email}: BaseProps) {
    return FirebaseAuth.sendPasswordResetEmail(
        FirebaseAuth.getAuth(), email
    )
}