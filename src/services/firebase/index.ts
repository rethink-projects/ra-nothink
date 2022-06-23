import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getFirestore } from "firebase/firestore";
import { loginWithFirebase } from "./authentication";
import { createCategory, getAllCategories } from "./categories";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

const firebaseInstance = {
  app,
  db,
  loginWithFirebase,
  createCategory,
  getAllCategories,
};

export default firebaseInstance;
