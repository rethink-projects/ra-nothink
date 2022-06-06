// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from "./config";
import { loginWithFiribase } from "./authentication";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const firebaseInstance = { app, db, loginWithFiribase };

export default firebaseInstance;
