import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getFirestore } from "firebase/firestore";
import { loginWithFirebase } from "./authentication";
import { createCategory, getAllCategories } from "./categories";
import { getSnnipetsByCategoryId } from "./snnipets";

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
  getSnnipetsByCategoryId
};

export default firebaseInstance;
