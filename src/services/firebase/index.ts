// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getFirestore } from "firebase/firestore";
import { loginWithFirebase } from "./authentication";
import { createCategory } from "./categories";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

const firebaseInstance = { app, db, loginWithFirebase, createCategory };
export default firebaseInstance;
