import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getFirestore } from "firebase/firestore"
import { loginWithFirebase } from "./authentication";



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

const firebaseInstance = { app, db, loginWithFirebase };

export default firebaseInstance;

