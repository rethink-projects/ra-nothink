// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { firebaseConfig } from "./config";

import { loginWithFireBase } from "./authentication";
import { createCategory } from "./categories";



// Initialize Firebase
console.log(firebaseConfig)
const app = initializeApp(firebaseConfig);
// Initialize Firebase
const db = getFirestore(app);

const firebaseInstance = { app, db, loginWithFireBase, createCategory }

export default firebaseInstance;