import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getFirestore } from "firebase/firestore"



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

const firebaseInstance = { app, db };

export default firebaseInstance;