import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from "./config";

import { loginWithFirebase } from "./authentication"; 

import { createCategory } from "./categories"; 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
const db = getFirestore(app);

// console.log({ db });
const firebaseInstance = { app, db, loginWithFirebase, createCategory};

export default firebaseInstance;
